(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_initiate-account-closure_initiate-account-closure_module_ts"], {
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
    58179:
    /*!*********************************************************************!*\
      !*** ./src/app/shared/models/FetchUserForSingleAccClosureReqDTO.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FetchUserForSingleAccClosureReqDTO": function FetchUserForSingleAccClosureReqDTO() {
          return (
            /* binding */
            _FetchUserForSingleAccClosureReqDTO
          );
        }
        /* harmony export */

      });

      var _FetchUserForSingleAccClosureReqDTO = /*#__PURE__*/function () {
        function _FetchUserForSingleAccClosureReqDTO() {
          _classCallCheck(this, _FetchUserForSingleAccClosureReqDTO);
        }

        _createClass(_FetchUserForSingleAccClosureReqDTO, [{
          key: "map",
          value: function map(arg0) {
            throw new Error("Method not implemented.");
          }
        }]);

        return _FetchUserForSingleAccClosureReqDTO;
      }();
      /***/

    },

    /***/
    47833:
    /*!*************************************************************************************************************!*\
      !*** ./src/app/views/initiate-account-closure/account-closure-details/account-closure-details.component.ts ***!
      \*************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AccountClosureDetailsComponent": function AccountClosureDetailsComponent() {
          return (
            /* binding */
            _AccountClosureDetailsComponent
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


      var src_app_shared_models_FetchUserForSingleAccClosureReqDTO__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/models/FetchUserForSingleAccClosureReqDTO */
      58179);
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_services_account_closure_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/account-closure-service.service */
      60965);
      /* harmony import */


      var src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/guards/can-deactivate.guard */
      50215);
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

      function AccountClosureDetailsComponent_div_33_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please Select Account Type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function AccountClosureDetailsComponent_div_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AccountClosureDetailsComponent_div_33_div_1_Template, 2, 0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.accountClosureForm.get("accountType").errors.required);
        }
      }

      function AccountClosureDetailsComponent_div_34_div_6_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please Enter Account Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function AccountClosureDetailsComponent_div_34_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AccountClosureDetailsComponent_div_34_div_6_div_1_Template, 2, 0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r9.accountClosureForm.get("accountNumber").errors.required);
        }
      }

      function AccountClosureDetailsComponent_div_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Account Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, AccountClosureDetailsComponent_div_34_div_6_Template, 2, 1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("readonly", ctx_r1.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.accountClosureForm.get("accountNumber").invalid && (ctx_r1.accountClosureForm.get("accountNumber").dirty || ctx_r1.accountClosureForm.get("accountNumber").touched));
        }
      }

      function AccountClosureDetailsComponent_div_35_div_6_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please Enter Branch Code ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function AccountClosureDetailsComponent_div_35_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AccountClosureDetailsComponent_div_35_div_6_div_1_Template, 2, 0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r11.accountClosureForm.get("branchCode").errors.required);
        }
      }

      function AccountClosureDetailsComponent_div_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Branch Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, AccountClosureDetailsComponent_div_35_div_6_Template, 2, 1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("readonly", ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.accountClosureForm.get("branchCode").invalid && (ctx_r2.accountClosureForm.get("branchCode").dirty || ctx_r2.accountClosureForm.get("branchCode").touched));
        }
      }

      function AccountClosureDetailsComponent_div_36_div_6_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please Enter Reason For Closure ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function AccountClosureDetailsComponent_div_36_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AccountClosureDetailsComponent_div_36_div_6_div_1_Template, 2, 0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r13.accountClosureForm.get("reasonForClosure").errors.required);
        }
      }

      function AccountClosureDetailsComponent_div_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Reason For Closure");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, AccountClosureDetailsComponent_div_36_div_6_Template, 2, 1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("readonly", ctx_r3.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.accountClosureForm.get("reasonForClosure").invalid && (ctx_r3.accountClosureForm.get("reasonForClosure").dirty || ctx_r3.accountClosureForm.get("reasonForClosure").touched));
        }
      }

      function AccountClosureDetailsComponent_div_37_p_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r15.fileName);
        }
      }

      function AccountClosureDetailsComponent_div_37_p_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r16.fetchUserSingle.fileName);
        }
      }

      function AccountClosureDetailsComponent_div_37_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function AccountClosureDetailsComponent_div_37_Template_input_change_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r17.selectFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, AccountClosureDetailsComponent_div_37_p_5_Template, 2, 1, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, AccountClosureDetailsComponent_div_37_p_6_Template, 2, 1, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("readonly", ctx_r4.editFlag)("disabled", ctx_r4.accountClosureForm.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.fetchUserSingle.closureType == undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.fetchUserSingle.closureType != undefined);
        }
      }

      function AccountClosureDetailsComponent_div_38_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_div_38_div_2_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r21.onSubmitFile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Submit File");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r19.submitFile && ctx_r19.accountClosureForm.controls["accountType"].invalid);
        }
      }

      function AccountClosureDetailsComponent_div_38_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_div_38_div_3_Template_button_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r23.onSubmitSingle($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r20.accountClosureForm.invalid);
        }
      }

      function AccountClosureDetailsComponent_div_38_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AccountClosureDetailsComponent_div_38_div_2_Template, 3, 1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AccountClosureDetailsComponent_div_38_div_3_Template, 3, 1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_div_38_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r25.generateExcel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "View Report");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r5.singleCall);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r5.singleCall);
        }
      }

      function AccountClosureDetailsComponent_div_39_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_div_39_div_2_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r36.editValues();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function AccountClosureDetailsComponent_div_39_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_div_39_div_3_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r39);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r38.onSubmitFile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Submit File");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r28.submitFile && ctx_r28.accountClosureForm.controls["accountType"].invalid);
        }
      }

      function AccountClosureDetailsComponent_div_39_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_div_39_div_4_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r41);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r40.onSubmitOfSingleClosure();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r29.accountClosureForm.invalid);
        }
      }

      function AccountClosureDetailsComponent_div_39_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_div_39_div_5_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r43);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r42.onclickOfAuth();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r30.roleCodes.auth.labelDescription, "");
        }
      }

      function AccountClosureDetailsComponent_div_39_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_div_39_div_6_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r45);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r44.onclickOfReopen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r31.roleCodes.reopen.labelDescription, "");
        }
      }

      function AccountClosureDetailsComponent_div_39_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_div_39_div_7_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r47);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r46.onclickOfClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r32.roleCodes.close.labelDescription, "");
        }
      }

      function AccountClosureDetailsComponent_div_39_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r33.roleCodes["delete"].labelDescription);
        }
      }

      function AccountClosureDetailsComponent_div_39_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_div_39_div_9_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r49);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r48.onClickOfViewToData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "View Report");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function AccountClosureDetailsComponent_div_39_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_div_39_div_10_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r50.onClickOfViewToDatabulk();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "View Report");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function AccountClosureDetailsComponent_div_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AccountClosureDetailsComponent_div_39_div_2_Template, 3, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AccountClosureDetailsComponent_div_39_div_3_Template, 3, 1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, AccountClosureDetailsComponent_div_39_div_4_Template, 3, 1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, AccountClosureDetailsComponent_div_39_div_5_Template, 3, 1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, AccountClosureDetailsComponent_div_39_div_6_Template, 3, 1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, AccountClosureDetailsComponent_div_39_div_7_Template, 3, 1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, AccountClosureDetailsComponent_div_39_div_8_Template, 3, 1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, AccountClosureDetailsComponent_div_39_div_9_Template, 3, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, AccountClosureDetailsComponent_div_39_div_10_Template, 3, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r6.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r6.singleCall && ctx_r6.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.singleCall && ctx_r6.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r6.fetchUserSingle.verifiedStatus == "UNAUTHORIZED" || ctx_r6.fetchUserSingle.verifiedStatus == "U") && ctx_r6.roleCodes.auth);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r6.fetchUserSingle.recordStatus == "CLOSE" || ctx_r6.fetchUserSingle.recordStatus == "C") && (ctx_r6.fetchUserSingle.verifiedOnce == "YES" || ctx_r6.fetchUserSingle.verifiedOnce == "Y") && ctx_r6.roleCodes.reopen);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r6.fetchUserSingle.recordStatus == "OPEN" || ctx_r6.fetchUserSingle.recordStatus == "O") && (ctx_r6.fetchUserSingle.verifiedOnce == "YES" || ctx_r6.fetchUserSingle.verifiedOnce == "Y") && ctx_r6.roleCodes.close);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r6.fetchUserSingle.verifiedOnce == "NO" || ctx_r6.fetchUserSingle.verifiedOnce == "N") && ctx_r6.roleCodes["delete"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.fetchUserSingle.closureType == "SINGLE");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.fetchUserSingle.closureType == "BULK");
        }
      }

      function AccountClosureDetailsComponent_div_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Maker");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Maker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](26, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "Record Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "Checker");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](56, "img", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, "Checker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](63, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](69, "img", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73, "First Time Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](81, "img", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85, "Auth Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](87);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](93, "img", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](96, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](97, "Modification Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](98, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r7.fetchUserSingle.makerId);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](26, 7, ctx_r7.fetchUserSingle.makerInputTime, "MM/dd/yyyy, h:mm a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r7.fetchUserSingle.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r7.fetchUserSingle.verifiedBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](63, 10, ctx_r7.fetchUserSingle.makerInputTime, "MM/dd/yyyy, h:mm a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r7.fetchUserSingle.verifiedOnce);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r7.fetchUserSingle.verifiedStatus);
        }
      }

      var _AccountClosureDetailsComponent = /*#__PURE__*/function () {
        function _AccountClosureDetailsComponent(formBuilder, cdr, router, accClosure, canDeactivateGuard, iziToast, route, roleService) {
          _classCallCheck(this, _AccountClosureDetailsComponent);

          this.formBuilder = formBuilder;
          this.cdr = cdr;
          this.router = router;
          this.accClosure = accClosure;
          this.canDeactivateGuard = canDeactivateGuard;
          this.iziToast = iziToast;
          this.route = route;
          this.roleService = roleService;
          this.fetchUserSingle = new src_app_shared_models_FetchUserForSingleAccClosureReqDTO__WEBPACK_IMPORTED_MODULE_0__.FetchUserForSingleAccClosureReqDTO();
          this.fetch = new src_app_shared_models_FetchUserForSingleAccClosureReqDTO__WEBPACK_IMPORTED_MODULE_0__.FetchUserForSingleAccClosureReqDTO();
          this.editFlag = false;
          this.selected = 'dormant';
          this.accountClosure = new src_app_shared_models_FetchUserForSingleAccClosureReqDTO__WEBPACK_IMPORTED_MODULE_0__.FetchUserForSingleAccClosureReqDTO();
          this.submitFile = true;
          this.bulk = true;
          this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__.permissionsLabels();
          this.formTouched = true;
          this.showDialog = false;
          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
          this.modifyScreen = false;
        }

        _createClass(_AccountClosureDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.accClosureNavObj = localStorage.getItem('AccountClosureNavObj');
            this.accClosureNavigationObject = JSON.parse(this.accClosureNavObj);
            this.accClosure.getIndexValue().subscribe(function (resp) {
              _this2.paramScreen = resp;

              if (resp.index === '') {
                _this2.createAccClosure();
              }
            });
            this.currentUser = localStorage.getItem('currentUser').replace(/['"]+/g, '');
            this.navSubscription = this.roleService.getNavParam.subscribe(function (data) {
              return _this2.initiateAccClosure = data;
            });
            console.log(this.initiateAccClosure, "Initiate Account Closure");
            console.log(this.accClosureNavigationObject, "accClosureNavigationObject");
            this.fetchUserSingle.id = this.initiateAccClosure.queryParams.id;
            this.fetchUserSingle.modNo = this.initiateAccClosure.queryParams.modNo;
            this.fetchUserSingle.closureType = this.initiateAccClosure.queryParams.closureType;
            this.fetchUserSingle.accountNumber = this.initiateAccClosure.queryParams.accountNumber;
            this.fetchUserSingle.accountType = this.initiateAccClosure.queryParams.accountType;
            this.fetchUserSingle.recordStatus = this.initiateAccClosure.queryParams.record;
            this.fetchUserSingle.verifiedStatus = this.initiateAccClosure.queryParams.verifiedStatus;
            this.fetchUserSingle.inputBy = this.initiateAccClosure.queryParams.inputBy;
            this.fetchUserSingle.inputTime = this.initiateAccClosure.queryParams.inputTime; // this.fetchUserSingle.modNo = params.modNo

            this.fetchUserSingle.verifiedOnce = this.initiateAccClosure.queryParams.verifiedfirst;
            this.fetchUserSingle.verifiedBy = this.initiateAccClosure.queryParams.verifiedBy;
            this.fetchUserSingle.fileName = this.initiateAccClosure.queryParams.fileName;
            this.fetchUserSingle.branchCode = this.initiateAccClosure.queryParams.branch;
            this.fetchUserSingle.reasonForClosure = this.initiateAccClosure.queryParams.reason;
            this.fetchUserSingle.processStatus = this.initiateAccClosure.queryParams.processStatus;
            this.fetchUserSingle.accountLinkageDesc = this.initiateAccClosure.queryParams.Desc; //--------------------------------------------

            this.fetchUserSingle.closeStatusInputBy = this.initiateAccClosure.queryParams.closeStatusInputBy;
            this.fetchUserSingle.closeStatusInputTime = this.initiateAccClosure.queryParams.closeStatusInputTime;
            this.fetchUserSingle.closeStatus = this.initiateAccClosure.queryParams.closeStatus;
            this.fetchUserSingle.icliqAvlBal = this.initiateAccClosure.queryParams.icliqAvlBal;
            this.fetchUserSingle.icliqBalance = this.initiateAccClosure.queryParams.icliqBalance;
            this.fetchUserSingle.icliqStatus = this.initiateAccClosure.queryParams.icliqStatus;
            this.fetchUserSingle.makerId = this.initiateAccClosure.queryParams.makerId;
            this.fetchUserSingle.makerInputTime = this.initiateAccClosure.queryParams.makerInputTime;
            this.fetchUserSingle.accls = this.initiateAccClosure.queryParams.accls;
            this.fetchUserSingle.lastTransactionDetail = this.initiateAccClosure.queryParams.lastTransactionDetail;
            this.fetchUserSingle.blockedAmount = this.initiateAccClosure.queryParams.blockedAmount;
            this.fetchUserSingle.deStatus = this.initiateAccClosure.queryParams.deStatus;
            this.fetchUserSingle.linkedAccounts = this.initiateAccClosure.queryParams.linkedAccounts;
            this.fetchUserSingle.checkerId = this.initiateAccClosure.queryParams.checkerId;
            this.fetchUserSingle.checkerInputTime = this.initiateAccClosure.queryParams.checkerInputTime; //--------------------------------------------

            console.log(this.roleCodes);

            if (this.fetchUserSingle.closureType == 'SINGLE') {
              this.data = 'SINGLE';
              console.log('inside bulk', this.fetchUserSingle.closureType);
            } else {
              this.data = 'BULK';
              this.data = this.singleCall;
            }

            this.cdr.markForCheck();
            this.selected = this.fetchUserSingle.accountType;
            this.radioSelectred = this.fetchUserSingle.closureType;

            if (this.fetchUserSingle.recordStatus == 'C') {
              this.fetchUserSingle.recordStatus = 'CLOSE';
            }

            if (this.fetchUserSingle.recordStatus == 'O') {
              this.fetchUserSingle.recordStatus = 'OPEN';
            }

            if (this.fetchUserSingle.verifiedStatus == 'U') {
              this.fetchUserSingle.verifiedStatus = 'UNAUTHORIZED';
            }

            if (this.fetchUserSingle.verifiedOnce == 'A') {
              this.fetchUserSingle.verifiedOnce = 'AUTHORIZED';
            }

            if (this.fetchUserSingle.verifiedOnce == 'Y') {
              this.fetchUserSingle.verifiedOnce = 'YES';
            }

            if (this.fetchUserSingle.verifiedOnce == 'N') {
              this.fetchUserSingle.verifiedOnce = 'NO';
            }

            this.cdr.markForCheck();

            if (this.fetchUserSingle.closureType == undefined) {
              this.buildAccClosureForm(this.fetchUserSingle, false);
            }

            console.log(this.fetchUserSingle);

            if (this.fetchUserSingle.closureType == 'BULK' || this.fetchUserSingle.closureType == 'SINGLE' || this.fetchUserSingle.closureType == undefined) {
              if (this.fetchUserSingle.closureType == 'BULK') {
                this.bulk = true;
              }

              if (this.fetchUserSingle.closureType == 'SINGLE') {
                this.bulk = false;
              }

              console.log("YJHGJH");
              this.buildAccClosureForm(this.fetchUserSingle, true);
            }

            console.log(this.initiateAccClosure);

            if (this.initiateAccClosure.queryParams.closureType != 'BULK' || this.initiateAccClosure.queryParams.closureType != 'SINGLE') {
              if (JSON.parse(this.accClosureNavObj) != null && this.paramScreen.index != 'new') {
                this.fetchUserSingle = this.accClosureNavigationObject;
                console.log("YJHGJH");
                this.buildAccClosureForm(this.accClosureNavigationObject);
                this.fileName = this.accClosureNavigationObject.fileName;
                this.accountClosureForm.disable();
              }
            }

            this.accountClosureForm.get('closureType').setValue('BULK');
            localStorage.setItem('CLOSURETYPE', this.accountClosureForm.value.closureType);
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this2.roleCodes = message;
            });
            setTimeout(function () {}, 100);
          }
        }, {
          key: "onClickOfBulk",
          value: function onClickOfBulk() {
            this.singleCall = false;
            this.accountClosureForm.get('closureType').setValue('BULK');
            localStorage.setItem('CLOSURETYPE', this.accountClosureForm.value.closureType);
          }
        }, {
          key: "onclickOfSingle",
          value: function onclickOfSingle() {
            this.singleCall = true;
            this.accountClosureForm.get('closureType').setValue('SINGLE');
            localStorage.setItem('CLOSURETYPE', this.accountClosureForm.value.closureType);
          }
        }, {
          key: "buildAccClosureForm",
          value: function buildAccClosureForm(data, isResponse) {
            console.log(data);
            this.accountClosureForm = this.formBuilder.group({
              closureType: [data.closureType ? data.closureType : '', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
              accountType: [data.accountType ? data.accountType : '', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
              accountNumber: [data.accountNumber ? data.accountNumber : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern('^[0-9 \-\']+')]],
              branchCode: [data.branchCode ? data.branchCode : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern('^[0-9 \-\']+')]],
              reasonForClosure: [data.reasonForClosure ? data.reasonForClosure : '', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]
            });
          }
        }, {
          key: "selectFile",
          value: function selectFile(event) {
            if (!this.accountClosureForm.get('accountType').value) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                text: "Please enter Account Type",
                icon: 'error'
              });
            } else {
              this.selectedFiles = event.target.files;
              this.sizeOfFile = this.selectedFiles.item(0).size;
              this.fileName = this.selectedFiles[0].name; // Swal.fire(
              //   {
              //     text:"File Uploaded Successfully",
              //     icon:'success'
              //   });
              // this.showProgressBar=true;

              setTimeout(function () {// this.showProgressBar=false;
              }, 8000);
              this.submitFile = false;
            }
          }
        }, {
          key: "onSubmitSingle",
          value: function onSubmitSingle(data) {
            var _this3 = this;

            // this.accountClosure.accountNumber = this.accountClosureForm.get('accountNumber').value;
            // this.accountClosure.accountType = this.accountClosureForm.get('accountType').value;
            // this.accountClosure.branchCode = this.accountClosureForm.get('branchCode').value;
            // this.accountClosure.reasonForClosure = this.accountClosureForm.get('reasonForClosure').value;
            this.fetchUserSingle.inputBy = this.currentUser; // this.showProgressBarSingle=true;

            this.accClosure.onSingleClosure(this.accountClosureForm.value, this.fetchUserSingle.inputBy).subscribe(function (singleClosureData) {
              if (singleClosureData) {
                var responseMsg = singleClosureData.errorDesc;

                if (responseMsg == 'S' || responseMsg === "S") {
                  _this3.fetchUserSingle = singleClosureData;

                  if (_this3.fetchUserSingle.recordStatus == 'O') {
                    _this3.fetchUserSingle.recordStatus = 'OPEN';
                  }

                  if (_this3.fetchUserSingle.verifiedStatus == 'U') {
                    _this3.fetchUserSingle.verifiedStatus = 'UNAUTHORIZED';
                  }

                  if (_this3.fetchUserSingle.verifiedOnce == 'N') {
                    _this3.fetchUserSingle.verifiedOnce = 'NO';
                  }

                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    text: "Record Successfully Uploaded" // type: "success"

                  });
                  _this3.formTouched = !_this3.accountClosureForm.touched;
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    text: responseMsg,
                    icon: "warning"
                  });
                }
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                  text: "Server Error",
                  icon: "error"
                });
              } // this.showProgressBarSingle=false; 

            });
          }
        }, {
          key: "editValues",
          value: function editValues() {
            this.editFlag = true;
            this.accountClosureForm.enable();
          }
        }, {
          key: "onClickOfViewToDatabulk",
          value: function onClickOfViewToDatabulk() {
            // else{
            if (this.fetchUserSingle.closureType == 'BULK') {
              var navigationExtras = {
                queryParams: {
                  'closureTypeViewBulk': this.fetchUserSingle.closureType,
                  'fileName': this.fetchUserSingle.fileName,
                  'accountTypeBulk': this.fetchUserSingle.accountType,
                  'record': this.fetchUserSingle.recordStatus,
                  'authorizer': this.fetchUserSingle.verifiedBy,
                  'authFirsTime': this.fetchUserSingle.verifiedOnce,
                  'authStatus': this.fetchUserSingle.verifiedStatus,
                  'authDate': this.fetchUserSingle.verifiedTime,
                  'creator': this.fetchUserSingle.inputBy,
                  'creatorDate': this.fetchUserSingle.inputTime,
                  'modficationNo': this.fetchUserSingle.modNo,
                  'processStatus': this.fetchUserSingle.processStatus,
                  'Desc': this.fetchUserSingle.accountLinkageDesc,
                  'closeStatusInputBy': this.fetchUserSingle.closeStatusInputBy,
                  'closeStatusInputTime': this.fetchUserSingle.closeStatusInputTime,
                  'closeStatus': this.fetchUserSingle.closeStatus,
                  'icliqAvlBal': this.fetchUserSingle.icliqAvlBal,
                  'icliqBalance': this.fetchUserSingle.icliqBalance,
                  'icliqStatus': this.fetchUserSingle.icliqStatus,
                  'makerId': this.fetchUserSingle.makerId,
                  'makerInputTime': this.fetchUserSingle.makerInputTime,
                  'accls': this.fetchUserSingle.accls,
                  'lastTransactionDetail': this.fetchUserSingle.lastTransactionDetail,
                  'blockedAmount': this.fetchUserSingle.blockedAmount,
                  'deStatus': this.fetchUserSingle.deStatus,
                  'linkedAccounts': this.fetchUserSingle.linkedAccounts,
                  'checkerId': this.fetchUserSingle.checkerId,
                  'checkerInputTime': this.fetchUserSingle.checkerInputTime //----------------------------------

                }
              };
              this.accClosure.sendNavParam(navigationExtras);
              this.router.navigate(['initiate-account-closure/viewReport']); // this.router.navigate(['account-closure/viewReportOfAccountClosure'],navigationExtras);
            }
          }
        }, {
          key: "onClickOfViewToData",
          value: function onClickOfViewToData() {
            var _this4 = this;

            localStorage.setItem("accountTypeForProcess", this.fetchUserSingle.accountType);
            localStorage.setItem("closureTypeForBulk", this.fetchUserSingle.closureType);

            if (this.fetchUserSingle.closureType == "SINGLE") {
              this.accClosure.onViewOfSingleClsureType(this.fetchUserSingle.accountType, this.fetchUserSingle.closureType, this.fetchUserSingle.accountNumber).subscribe(function (viewReportOfSingleResp) {
                _this4.fetch = viewReportOfSingleResp;
                var navigationExtras = {
                  queryParams: {
                    'closureTypeView': _this4.fetch.closureType,
                    'accountNumberView': _this4.fetch.accountNumber,
                    'accountTypeview': _this4.fetch.accountType,
                    'creator': _this4.fetch.inputBy,
                    'record': _this4.fetch.recordStatus,
                    'authStatus': _this4.fetch.verifiedStatus,
                    'modficationNo': _this4.fetch.modNo,
                    'creatorDate': _this4.fetch.inputTime,
                    'authDate': _this4.fetch.verifiedTime,
                    'authFirsTime': _this4.fetch.verifiedOnce,
                    'authorizer': _this4.fetch.verifiedBy,
                    'acyCurrBalance': _this4.fetch.acyCurrBalance,
                    'frozenView': _this4.fetch.frozen,
                    'branchCode': _this4.fetch.branchCode,
                    'dorm': _this4.fetch.dorm,
                    'lcyCurrBalance': _this4.fetch.lcyCurrBalance,
                    'acSatNoCr': _this4.fetch.acSatNoCr,
                    'acyAvlBal': _this4.fetch.acyAvlBal,
                    'fileName': _this4.fetch.fileName,
                    'accStatus': _this4.fetch.accountStatus,
                    'flexRecord': _this4.fetch.recordStatusFromFlexCube,
                    'custId': _this4.fetch.customerId,
                    'valueDate': _this4.fetch.valueDate,
                    'debit': _this4.fetch.acStatNoDr,
                    'file': _this4.fetch.fileName,
                    'processStatus': _this4.fetch.processStatus,
                    'Desc': _this4.fetch.accountLinkageDesc,
                    'closeStatusInputBy': _this4.fetch.closeStatusInputBy,
                    'closeStatusInputTime': _this4.fetch.closeStatusInputTime,
                    'closeStatus': _this4.fetch.closeStatus,
                    'icliqAvlBal': _this4.fetch.icliqAvlBal,
                    'icliqBalance': _this4.fetch.icliqBalance,
                    'icliqStatus': _this4.fetch.icliqStatus,
                    'makerId': _this4.fetch.makerId,
                    'makerInputTime': _this4.fetch.makerInputTime,
                    'accls': _this4.fetch.accls,
                    'lastTransactionDetail': _this4.fetch.lastTransactionDetail,
                    'blockedAmount': _this4.fetch.blockedAmount,
                    'deStatus': _this4.fetch.deStatus,
                    'linkedAccounts': _this4.fetch.linkedAccounts,
                    'checkerId': _this4.fetch.checkerId,
                    'checkerInputTime': _this4.fetch.checkerInputTime //------------------------------

                  }
                }; // console.log("edit data",this.fetch);
                // localStorage.setItem('singledta',JSON.stringify(this.fetch));
                // this.router.navigate(['account-closure/viewReportOfAccountClosure']);

                _this4.router.navigate(['initiate-account-closure/viewReport']);
              });
            }

            ;
          }
        }, {
          key: "onSubmitFile",
          value: function onSubmitFile() {
            var _this5 = this;

            this.accountClosureForm.get('closureType').setValue('BULK');
            console.log(this.accountClosureForm.value);
            console.log(this.accountClosureForm.controls.accountType.value);
            this.sendAccountType = this.accountClosureForm.controls.accountType.value;
            console.log(this.accountClosureForm.controls.closureType.value);
            this.sendClosureType = this.accountClosureForm.controls.closureType.value;
            this.currentFileUpload = this.selectedFiles.item(0);
            this.showSubmitProgressBar = true;

            if (!this.sendAccountType) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                text: "AccountType is Mandatory",
                icon: 'warning'
              }); // this.iziToast.show({
              //   message: `AccountType is Mandatory`,
              //   image: "assets/images/user.png",
              //   icon: 'ico ico-success',
              //   theme:"dark",
              //   layout: 2,
              //   // imageWidth:50,
              //   balloon: false,
              //   position: "topRight",
              //   progressBarColor: "red",
              //   pauseOnHover: true,
              // });

              this.showSubmitProgressBar = false;
            } else {
              this.accClosure.onFileUpload(this.currentFileUpload, this.sendAccountType, this.sendClosureType, this.currentUser).subscribe(function (fileResp) {
                // ------------For upload Percentage------------
                // if (fileResp.type === HttpEventType.UploadProgress) {
                //   this.percentDone = Math.round(100 * fileResp.loaded / fileResp.total);
                // } else if (event instanceof HttpResponse) {
                //   this.uploadSuccess = true;
                // }
                if (fileResp) {
                  _this5.fetchUserSingle = fileResp;
                  console.log(_this5.fetchUserSingle);

                  if (_this5.fetchUserSingle.errorDesc == 'S') {
                    _this5.enableView = true;
                    _this5.submitFile = true; // this.iziToast.show({
                    //   message: `File uploaded sucessfully`,
                    //   image: "assets/images/user.png",
                    //   icon: 'ico ico-success',
                    //   theme:"dark",
                    //   layout: 2,
                    //   // imageWidth:50,
                    //   balloon: false,
                    //   position: "topRight",
                    //   progressBarColor: "green",
                    //   pauseOnHover: true,
                    // });
                    // Swal.fire(
                    //   {
                    //     text:"File uploaded sucessfully",
                    //     icon:'success'
                    // });

                    _this5.formTouched = !_this5.accountClosureForm.touched;
                    _this5.showSubmitProgressBar = false;
                    _this5.showAuditlog = true;
                  } else {
                    _this5.accountClosureForm.get('accountType').setValue(_this5.sendAccountType);

                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                      text: _this5.fetchUserSingle.errorDesc,
                      icon: 'error'
                    }); // this.iziToast.show({
                    //   message: this.fetchUserSingle.errorDesc,
                    //   image: "assets/images/user.png",
                    //   icon: 'ico ico-error',
                    //   theme:"dark",
                    //   layout: 2,
                    //   // imageWidth:50,
                    //   balloon: false,
                    //   position: "topRight",
                    //   progressBarColor: "red",
                    //   pauseOnHover: true,
                    // });

                    _this5.showSubmitProgressBar = false;
                  }
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    text: "Server Error",
                    icon: "error"
                  });
                }
              });
            }
          }
        }, {
          key: "canExit",
          value: function canExit() {
            var _this6 = this;

            var isExit = false;

            if (this.accountClosureForm.touched && this.formTouched == true) {
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

                  _this6.cdr.markForCheck();

                  return isExit;
                } else {
                  isExit = false;

                  _this6.cdr.markForCheck();

                  return isExit;
                }
              });
            } else {
              isExit = true;
              return new Promise(function (resolve, reject) {
                if (isExit === true) {
                  isExit = true;

                  _this6.cdr.markForCheck();

                  resolve(true);
                }
              });
            }
          }
        }, {
          key: "generateExcel",
          value: function generateExcel() {
            this.router.navigate(['initiate-account-closure/viewReport']); // this.accClosure.generateExcel(this.excel);
            // else{

            if (this.fetchUserSingle.closureType == 'BULK') {
              console.log("insdie bulk", this.fetchUserSingle);
              console.log("accont Type", this.fetchUserSingle.accountType);
              console.log("closure Tpye", this.fetchUserSingle.closureType);
              console.log("finle Name", this.fetchUserSingle.fileName);
              var navigationExtras = {
                queryParams: {
                  closureTypeViewBulk: this.fetchUserSingle.closureType,
                  fileNmaeBulk: this.fetchUserSingle.fileName,
                  accountTypeBulk: this.fetchUserSingle.accountType,
                  record: this.fetchUserSingle.recordStatus,
                  authorizer: this.fetchUserSingle.verifiedBy,
                  authFirsTime: this.fetchUserSingle.verifiedOnce,
                  authStatus: this.fetchUserSingle.verifiedStatus,
                  authDate: this.fetchUserSingle.verifiedTime,
                  creator: this.fetchUserSingle.inputBy,
                  creatorDate: this.fetchUserSingle.inputTime,
                  modficationNo: this.fetchUserSingle.modNo,
                  processStatus: this.fetchUserSingle.processStatus
                }
              };
              this.router.navigate(['initiate-account-closure/viewReport'], navigationExtras);
            }
          }
        }, {
          key: "onSubmitOfSingleClosure",
          value: function onSubmitOfSingleClosure() {
            var _this7 = this;

            // this.editFalg=false;
            this.accClosure.submiitingSingleClosureRecordAfterEdit(this.fetchUserSingle, this.currentUser, this.fetchUserSingle.id).subscribe(function (backendResp) {
              console.log(backendResp.errorDesc);
              _this7.fetchUserSingle = backendResp;
              /****if bckend Resp.closeCustAcErrorDesc == 's' print success else direct print the backend response*/

              if (_this7.fetchUserSingle.errorDesc == 'S') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                  title: 'Record successfuly modified and uploaded' // type:'success'

                });
              } else {
                /** */
                var responseMsg = backendResp.errorDesc;
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                  title: responseMsg,
                  icon: 'warning'
                });
              }

              _this7.cdr.markForCheck();
            });
          }
        }, {
          key: "onclickOfAuth",
          value: function onclickOfAuth() {
            console.log("this is auth");
            this.accClosure.onAuthorizingTheRecord(this.fetchUserSingle.accountNumber, this.currentUser).subscribe(function (authResp) {
              console.log(authResp);

              if (!authResp) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                  title: 'Authorization Failed',
                  icon: 'warning'
                });
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                  title: 'Record is Authorized' // type: 'success',

                });
              }
            });
          }
        }, {
          key: "onclickOfClose",
          value: function onclickOfClose() {
            var _this8 = this;

            console.log("this is close");
            this.accClosure.onClosingTheRecord(this.fetchUserSingle.accountNumber, this.currentUser).subscribe(function (recordStatusResp) {
              console.log(recordStatusResp);
              _this8.fetchUserSingle = recordStatusResp;

              if (_this8.fetchUserSingle.recordStatus == 'C') {
                _this8.fetchUserSingle.recordStatus = 'CLOSE';
              }

              if (_this8.fetchUserSingle.recordStatus == 'O') {
                _this8.fetchUserSingle.recordStatus = 'OPEN';
              }

              if (_this8.fetchUserSingle.verifiedStatus == 'A') {
                _this8.fetchUserSingle.verifiedStatus = 'AUTHORIZED';
              }

              if (_this8.fetchUserSingle.verifiedStatus == 'U') {
                _this8.fetchUserSingle.verifiedStatus = 'UNAUTHORIZED';
              }

              if (_this8.fetchUserSingle.verifiedOnce == 'Y') {
                _this8.fetchUserSingle.verifiedOnce = 'YES';
              }

              if (_this8.fetchUserSingle.verifiedOnce == 'N') {
                _this8.fetchUserSingle.verifiedOnce = 'NO';
              }
            });
          }
        }, {
          key: "onclickOfReopen",
          value: function onclickOfReopen() {
            var _this9 = this;

            console.log("this is reopen");
            this.accClosure.onReopningTheRecord(this.fetchUserSingle.accountNumber, this.currentUser).subscribe(function (openResp) {
              console.log(openResp);
              _this9.fetchUserSingle = openResp;

              if (_this9.fetchUserSingle.recordStatus == 'C') {
                _this9.fetchUserSingle.recordStatus = 'CLOSE';
              }

              if (_this9.fetchUserSingle.recordStatus == 'O') {
                _this9.fetchUserSingle.recordStatus = 'OPEN';
              }
            });
          }
        }, {
          key: "createAccClosure",
          value: function createAccClosure() {
            var navigationExtras = {
              queryParams: {}
            };
            this.roleService.sendNavParam(navigationExtras);
          }
        }]);

        return _AccountClosureDetailsComponent;
      }();

      _AccountClosureDetailsComponent.ɵfac = function AccountClosureDetailsComponent_Factory(t) {
        return new (t || _AccountClosureDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_account_closure_service_service__WEBPACK_IMPORTED_MODULE_3__.AccountClosureServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_4__.CanDeactivateGuard), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ng2_izitoast__WEBPACK_IMPORTED_MODULE_5__.Ng2IzitoastService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_6__.RoleService));
      };

      _AccountClosureDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _AccountClosureDetailsComponent,
        selectors: [["npr-account-closure-details"]],
        decls: 42,
        vars: 13,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "dbCardStyle", "cardWidth"], [1, "row", "gy-4", "justify-content-center"], [1, "col-12"], [1, "row", "g-2", "justify-content-center"], [1, "col-sm-4", "col-5"], [1, "radio", "radioStyle"], ["id", "radio-1", "name", "radio", "type", "radio", 3, "readonly", "checked", "click"], ["for", "radio-1", 1, "radio-label"], ["id", "radio-2", "name", "radio", "type", "radio", 3, "readonly", "checked", "click"], ["for", "radio-2", 1, "radio-label"], ["for", "roleName", 1, "formLbl"], [1, "colorRed"], ["formControlName", "accountType", "aria-label", "Default select example", 1, "form-select"], ["hidden", "", "value", "", "disabled", "", "selected", ""], ["value", "dormant"], ["value", "overDrawn"], ["value", "unclaimed"], ["class", "errorColor", 4, "ngIf"], ["class", "col-12", 4, "ngIf"], ["class", "dbCardStyle", 4, "ngIf"], [1, "errorColor"], [4, "ngIf"], ["id", "accountNumber", "placeholder", "Account Number", "required", "", "formControlName", "accountNumber", "value", "", 1, "form-control", 3, "readonly"], ["id", "branchCode", "placeholder", "Branch Code", "required", "", "formControlName", "branchCode", "value", "", 1, "form-control", 3, "readonly"], ["id", "", "placeholder", "Reason For Closure", "required", "", "formControlName", "reasonForClosure", "value", "", 1, "form-control", 3, "readonly"], [1, "fileUpload"], [1, "formS"], ["data-text", "File Upload", 1, "file-upload-wrapper"], ["name", "file-upload-field", "type", "file", "value", "", 1, "file-upload-field", 3, "readonly", "disabled", "change"], ["style", "font-size: 11px;color:#a30202", 4, "ngIf"], [2, "font-size", "11px", "color", "#a30202"], [1, "row", "g-3", "pb-3", "justify-content-center", "pt-3"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["routerLink", "/initiate-account-closure", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "dbCardStyle"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], ["src", "assets/images/maker-icon.svg", "alt", "..."], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], ["src", "assets/images/checker-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/auth-status-icon.svg", "alt", "..."]],
        template: function AccountClosureDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Initiate Account Closure");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_Template_input_click_11_listener() {
              return ctx.onClickOfBulk();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Bulk");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_Template_input_click_16_listener() {
              return ctx.onclickOfSingle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Single");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Account Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "select", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "--Please select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Dormant ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "OverDrawn Accounts");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "Unclaimed ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, AccountClosureDetailsComponent_div_33_Template, 2, 1, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, AccountClosureDetailsComponent_div_34_Template, 7, 2, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, AccountClosureDetailsComponent_div_35_Template, 7, 2, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, AccountClosureDetailsComponent_div_36_Template, 7, 2, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, AccountClosureDetailsComponent_div_37_Template, 7, 4, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](38, AccountClosureDetailsComponent_div_38_Template, 10, 2, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, AccountClosureDetailsComponent_div_39_Template, 14, 9, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](40, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, AccountClosureDetailsComponent_div_41_Template, 99, 13, "div", 23);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.accountClosureForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("readonly", ctx.editFlag)("checked", ctx.bulk);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("readonly", ctx.editFlag)("checked", !ctx.bulk);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.accountClosureForm.get("accountType").invalid && (ctx.accountClosureForm.get("accountType").dirty || ctx.accountClosureForm.get("accountType").touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.singleCall);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.singleCall);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.singleCall);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.singleCall);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.fetchUserSingle.closureType == null);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.fetchUserSingle.closureType != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.initiateAccClosure.queryParams.accountType != null);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
        styles: [".errorColor[_ngcontent-%COMP%] {\n  color: #e6224a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQtY2xvc3VyZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKIiwiZmlsZSI6ImFjY291bnQtY2xvc3VyZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yQ29sb3J7XHJcbiAgICBjb2xvcjogI2U2MjI0YTtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    32291:
    /*!*******************************************************************************************!*\
      !*** ./src/app/views/initiate-account-closure/initiate-account-closure-routing.module.ts ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InitiateAccountClosureRoutingModule": function InitiateAccountClosureRoutingModule() {
          return (
            /* binding */
            _InitiateAccountClosureRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/guards/can-deactivate.guard */
      50215);
      /* harmony import */


      var _account_closure_details_account_closure_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./account-closure-details/account-closure-details.component */
      47833);
      /* harmony import */


      var _initiate_account_closure_initiate_account_closure_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./initiate-account-closure/initiate-account-closure.component */
      65355);
      /* harmony import */


      var _view_report_acc_closure_view_report_acc_closure_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view-report-acc-closure/view-report-acc-closure.component */
      17272);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: "",
        component: _initiate_account_closure_initiate_account_closure_component__WEBPACK_IMPORTED_MODULE_2__.InitiateAccountClosureComponent
      }, {
        path: "create",
        component: _account_closure_details_account_closure_details_component__WEBPACK_IMPORTED_MODULE_1__.AccountClosureDetailsComponent,
        canDeactivate: [src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__.CanDeactivateGuard]
      }, {
        path: "viewReport",
        component: _view_report_acc_closure_view_report_acc_closure_component__WEBPACK_IMPORTED_MODULE_3__.ViewReportAccClosureComponent
      }];

      var _InitiateAccountClosureRoutingModule = /*#__PURE__*/_createClass(function _InitiateAccountClosureRoutingModule() {
        _classCallCheck(this, _InitiateAccountClosureRoutingModule);
      });

      _InitiateAccountClosureRoutingModule.ɵfac = function InitiateAccountClosureRoutingModule_Factory(t) {
        return new (t || _InitiateAccountClosureRoutingModule)();
      };

      _InitiateAccountClosureRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _InitiateAccountClosureRoutingModule
      });
      _InitiateAccountClosureRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_InitiateAccountClosureRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    69628:
    /*!***********************************************************************************!*\
      !*** ./src/app/views/initiate-account-closure/initiate-account-closure.module.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InitiateAccountClosureModule": function InitiateAccountClosureModule() {
          return (
            /* binding */
            _InitiateAccountClosureModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _initiate_account_closure_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./initiate-account-closure-routing.module */
      32291);
      /* harmony import */


      var _initiate_account_closure_initiate_account_closure_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./initiate-account-closure/initiate-account-closure.component */
      65355);
      /* harmony import */


      var _account_closure_details_account_closure_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./account-closure-details/account-closure-details.component */
      47833);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular-datatables */
      50481);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _view_report_acc_closure_view_report_acc_closure_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./view-report-acc-closure/view-report-acc-closure.component */
      17272);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _InitiateAccountClosureModule = /*#__PURE__*/_createClass(function _InitiateAccountClosureModule() {
        _classCallCheck(this, _InitiateAccountClosureModule);
      });

      _InitiateAccountClosureModule.ɵfac = function InitiateAccountClosureModule_Factory(t) {
        return new (t || _InitiateAccountClosureModule)();
      };

      _InitiateAccountClosureModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _InitiateAccountClosureModule
      });
      _InitiateAccountClosureModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _initiate_account_closure_routing_module__WEBPACK_IMPORTED_MODULE_0__.InitiateAccountClosureRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_InitiateAccountClosureModule, {
          declarations: [_initiate_account_closure_initiate_account_closure_component__WEBPACK_IMPORTED_MODULE_1__.InitiateAccountClosureComponent, _account_closure_details_account_closure_details_component__WEBPACK_IMPORTED_MODULE_2__.AccountClosureDetailsComponent, _view_report_acc_closure_view_report_acc_closure_component__WEBPACK_IMPORTED_MODULE_4__.ViewReportAccClosureComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _initiate_account_closure_routing_module__WEBPACK_IMPORTED_MODULE_0__.InitiateAccountClosureRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule]
        });
      })();
      /***/

    },

    /***/
    65355:
    /*!***************************************************************************************************************!*\
      !*** ./src/app/views/initiate-account-closure/initiate-account-closure/initiate-account-closure.component.ts ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InitiateAccountClosureComponent": function InitiateAccountClosureComponent() {
          return (
            /* binding */
            _InitiateAccountClosureComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/models/fmosNewRolePermissions */
      35383);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_account_closure_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/account-closure-service.service */
      60965);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      77382);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular-datatables */
      50481);

      function InitiateAccountClosureComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InitiateAccountClosureComponent_div_6_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r2.createAccClosure();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.roleCodes["new"].labelDescription);
        }
      }

      function InitiateAccountClosureComponent_tr_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InitiateAccountClosureComponent_tr_26_Template_a_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);

            var users_r4 = restoredCtx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r5.getDataFromSummary(users_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var users_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/initiate-account-closure/create/", users_r4.closureType, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](users_r4.closureType);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](users_r4.accountType);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](users_r4.accountNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](users_r4.fileName);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](users_r4.status);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](users_r4.makerId);
        }
      }

      var _c0 = function _c0() {
        return ["/dashboard"];
      };

      var _InitiateAccountClosureComponent = /*#__PURE__*/function () {
        function _InitiateAccountClosureComponent(accClosureServiceSum, roleService, router) {
          _classCallCheck(this, _InitiateAccountClosureComponent);

          this.accClosureServiceSum = accClosureServiceSum;
          this.roleService = roleService;
          this.router = router;
          this.dtOptions = {};
          this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__.permissionsLabels(); // this.dtOptions = {};

          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        }

        _createClass(_InitiateAccountClosureComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            setTimeout(function () {
              _this10.newRolePermissions();
            }, 2000);
            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 5,
              columnDefs: [{
                type: 'date',
                'targets': [5]
              }],
              order: [[5, 'desc']],
              processing: true,
              lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]]
            };
            this.currentUser = localStorage.getItem('currentUser').replace(/['"]+/g, '');
            this.gettingAccClosureSummary(this.currentUser);
            this.roleService.fetchScreenPermissions('Initiate Account Closure');
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this10.roleCodes = message;
            });
            console.log(this.roleCodes);
          }
        }, {
          key: "createAccClosure",
          value: function createAccClosure() {
            this.router.navigate(['/initiate-account-closure/create']);
            var navigationExtras = {
              queryParams: {}
            };
            this.roleService.sendNavParam(navigationExtras);
            this.accClosureServiceSum.setIndexValue({
              index: "new"
            });
          }
        }, {
          key: "getDataFromSummary",
          value: function getDataFromSummary(row) {
            console.log("this is row", row);
            this.fileName = row.fileName;
            localStorage.setItem("fileName", this.fileName);
            this.viewAccountType = row.accountType;
            localStorage.setItem("typeOfAccount", this.viewAccountType); //  if(row.closureType=="SINGLE")
            //  {
            //  }

            var navigationExtras = {
              queryParams: {
                modifyNo: row.modNo,
                closureType: row.closureType,
                accountNumber: row.accountNumber,
                accountType: row.accountType,
                record: row.recordStatus,
                verifiedStatus: row.verifiedStatus,
                inputBy: row.inputBy,
                inputTime: row.inputTime,
                modNo: row.modNo,
                authorizedTime: row.authorizedTime,
                verifiedfirst: row.verifiedOnce,
                verifiedBy: row.verifiedBy,
                fileName: row.fileName,
                branch: row.branchCode,
                reason: row.reasonForClosure,
                id: row.id,
                processStatus: row.processStatus,
                Desc: row.accountLinkageDesc,
                //-----------------------------------------
                closeStatusInputBy: row.closeStatusInputBy,
                closeStatusInputTime: row.closeStatusInputTime,
                closeStatus: row.closeStatus,
                icliqAvlBal: row.icliqAvlBal,
                icliqBalance: row.icliqBalance,
                icliqStatus: row.icliqStatus,
                makerId: row.makerId,
                makerInputTime: row.makerInputTime,
                accls: row.accls,
                lastTransactionDetail: row.lastTransactionDetail,
                blockedAmount: row.blockedAmount,
                deStatus: row.deStatus,
                linkedAccounts: row.linkedAccounts,
                checkerId: row.checkerId,
                checkerInputTime: row.checkerInputTime //-------------------------------------

              }
            };
            console.log('navigationExtras', navigationExtras);
            localStorage.setItem('AccountClosureNavObj', JSON.stringify(row));
            this.roleService.sendNavParam(navigationExtras);
            this.router.navigate(['/initiate-account-closure/create']);
            this.accClosureServiceSum.setIndexValue({
              index: "edit"
            });
          }
        }, {
          key: "newRolePermissions",
          value: function newRolePermissions() {
            this.roleService.fetchScreenPermissions('Initiate Account Closure');
          }
        }, {
          key: "gettingAccClosureSummary",
          value: function gettingAccClosureSummary(currentUser) {
            var _this11 = this;

            console.log("this account closure Summary");
            this.accClosureServiceSum.gettingAccountClosureSummary(currentUser).subscribe(function (backendResp) {
              console.log(backendResp);
              _this11.summaryDetails = backendResp;

              _this11.dtTrigger.next(); // this.dataSource = new MatTableDataSource<FetchUserForSingleAccClosureReqDTO>(this.summaryDetails);
              // this.dataSource.paginator = this.paginator.toArray()[0];;
              // console.log(this.summaryDetails);

            });
          }
        }]);

        return _InitiateAccountClosureComponent;
      }();

      _InitiateAccountClosureComponent.ɵfac = function InitiateAccountClosureComponent_Factory(t) {
        return new (t || _InitiateAccountClosureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_account_closure_service_service__WEBPACK_IMPORTED_MODULE_1__.AccountClosureServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_2__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
      };

      _InitiateAccountClosureComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _InitiateAccountClosureComponent,
        selectors: [["npr-initiate-account-closure"]],
        decls: 27,
        vars: 6,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "primaryColor", 3, "routerLink", "click"]],
        template: function InitiateAccountClosureComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Initiate Account Closure ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, InitiateAccountClosureComponent_div_6_Template, 3, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "table", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "closure type");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "account type");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "account number");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "file name");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "status");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "maker id");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, InitiateAccountClosureComponent_tr_26_Template, 14, 7, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.roleCodes["new"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.summaryDetails);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbml0aWF0ZS1hY2NvdW50LWNsb3N1cmUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    17272:
    /*!*************************************************************************************************************!*\
      !*** ./src/app/views/initiate-account-closure/view-report-acc-closure/view-report-acc-closure.component.ts ***!
      \*************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewReportAccClosureComponent": function ViewReportAccClosureComponent() {
          return (
            /* binding */
            _ViewReportAccClosureComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_shared_models_FetchUserForSingleAccClosureReqDTO__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/models/FetchUserForSingleAccClosureReqDTO */
      58179);
      /* harmony import */


      var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! jspdf */
      75585);
      /* harmony import */


      var jspdf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! jspdf-autotable */
      56587);
      /* harmony import */


      var jspdf_autotable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_account_closure_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/account-closure-service.service */
      60965);
      /* harmony import */


      var ng2_izitoast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-izitoast */
      27218);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      77382);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angular-datatables */
      50481);

      function ViewReportAccClosureComponent_div_5_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ViewReportAccClosureComponent_div_5_div_11_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

            return ctx_r4.onProcessingTheBulkAccount();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Process");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function ViewReportAccClosureComponent_div_5_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ViewReportAccClosureComponent_div_5_div_12_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

            return ctx_r6.onProcessingTheSingleAccount();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Process");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function ViewReportAccClosureComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Export As");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function ViewReportAccClosureComponent_div_5_Template_select_change_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r8.modo($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Excel");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, ViewReportAccClosureComponent_div_5_div_11_Template, 3, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, ViewReportAccClosureComponent_div_5_div_12_Template, 3, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ViewReportAccClosureComponent_div_5_Template_a_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r10.onCancelingTheRecord();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.closureTypes == "BULK");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.closureTypes == "SINGLE");
        }
      }

      function ViewReportAccClosureComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "table", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Account Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Closure Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Branch Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Account Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "table", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "Current Balance [ACY]");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Current Balance [LCY]");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "Available Balance");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, " No Debit");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "No Credit");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Frozen");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "Dormant");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "Account Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "Record Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45, "Customer Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "Value Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "Account Block");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](63);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](65);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](69);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](71);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](73);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ViewReportAccClosureComponent_div_6_Template_button_click_77_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r11.onProcessingTheSingleAccount();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](78, "Process");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ViewReportAccClosureComponent_div_6_Template_button_click_80_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r13.onCancelingTheSingleRecord();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](81, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](82, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](84, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](86, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](87, "Export As");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "select", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ViewReportAccClosureComponent_div_6_Template_option_click_89_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r14.downloadReportForSingle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](90, "Excel");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](91, "option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ViewReportAccClosureComponent_div_6_Template_option_click_91_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r15.convertReportForSingle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](92, "PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dtOptions", ctx_r1.dtOptions)("dtTrigger", ctx_r1.dtTrigger);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.accountType);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.closureType);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.branchCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.accountNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dtOptions", ctx_r1.dtOptions)("dtTrigger", ctx_r1.dtTrigger);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.acyCurrBalance);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1.fetchUserSingle.lcyCurrBalance, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.acyAvlBal);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.acStatNoDr);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.acSatNoCr);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.frozen);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.dorm);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.accountStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.recordStatusFromFlexCube);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.customerId);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.valueDate);
        }
      }

      var _ViewReportAccClosureComponent = /*#__PURE__*/function () {
        function _ViewReportAccClosureComponent(excelService, ref, iziToast, roleService, router) {
          _classCallCheck(this, _ViewReportAccClosureComponent);

          this.excelService = excelService;
          this.ref = ref;
          this.iziToast = iziToast;
          this.roleService = roleService;
          this.router = router;
          this.fetchUserSingle = new src_app_shared_models_FetchUserForSingleAccClosureReqDTO__WEBPACK_IMPORTED_MODULE_0__.FetchUserForSingleAccClosureReqDTO();
          this.accountTypeForBulk = "";
          this.excel = [];
          this.sendFileName = "";
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
          this.dtOptions = {};
          this.singleExcel = Array();
        }

        _createClass(_ViewReportAccClosureComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            console.log("Inside View Report");
            this.closureTypes = localStorage.getItem("CLOSURETYPE");
            console.log(this.closureTypes);
            this.navSubscription = this.excelService.getNavParam.subscribe(function (data) {
              return _this12.ViewAccClosure = data;
            });
            console.log(this.ViewAccClosure);
            this.fetchUserSingle.accountTypeBulk = this.ViewAccClosure.queryParams.accountTypeBulk;
            this.fetchUserSingle.modNo = this.ViewAccClosure.queryParams.modNo;
            this.fetchUserSingle.closureType = this.ViewAccClosure.queryParams.closureType;
            this.fetchUserSingle.accountNumber = this.ViewAccClosure.queryParams.accountNumber;
            this.fetchUserSingle.accountType = this.ViewAccClosure.queryParams.accountType;
            this.fetchUserSingle.recordStatus = this.ViewAccClosure.queryParams.record;
            this.fetchUserSingle.verifiedStatus = this.ViewAccClosure.queryParams.verifiedStatus;
            this.fetchUserSingle.inputBy = this.ViewAccClosure.queryParams.inputBy;
            this.fetchUserSingle.inputTime = this.ViewAccClosure.queryParams.inputTime; // this.fetchUserSingle.modNo = params.modNo

            this.fetchUserSingle.verifiedOnce = this.ViewAccClosure.queryParams.verifiedfirst;
            this.fetchUserSingle.verifiedBy = this.ViewAccClosure.queryParams.verifiedBy;
            this.fetchUserSingle.fileName = this.ViewAccClosure.queryParams.fileName;
            this.fetchUserSingle.branchCode = this.ViewAccClosure.queryParams.branch;
            this.fetchUserSingle.reasonForClosure = this.ViewAccClosure.queryParams.reason;
            this.fetchUserSingle.processStatus = this.ViewAccClosure.queryParams.processStatus;
            this.fetchUserSingle.accountLinkageDesc = this.ViewAccClosure.queryParams.Desc; //--------------------------------------------

            this.fetchUserSingle.closeStatusInputBy = this.ViewAccClosure.queryParams.closeStatusInputBy;
            this.fetchUserSingle.closeStatusInputTime = this.ViewAccClosure.queryParams.closeStatusInputTime;
            this.fetchUserSingle.closeStatus = this.ViewAccClosure.queryParams.closeStatus;
            this.fetchUserSingle.icliqAvlBal = this.ViewAccClosure.queryParams.icliqAvlBal;
            this.fetchUserSingle.icliqBalance = this.ViewAccClosure.queryParams.icliqBalance;
            this.fetchUserSingle.icliqStatus = this.ViewAccClosure.queryParams.icliqStatus;
            this.fetchUserSingle.makerId = this.ViewAccClosure.queryParams.makerId;
            this.fetchUserSingle.makerInputTime = this.ViewAccClosure.queryParams.makerInputTime;
            this.fetchUserSingle.accls = this.ViewAccClosure.queryParams.accls;
            this.fetchUserSingle.lastTransactionDetail = this.ViewAccClosure.queryParams.lastTransactionDetail;
            this.fetchUserSingle.blockedAmount = this.ViewAccClosure.queryParams.blockedAmount;
            this.fetchUserSingle.deStatus = this.ViewAccClosure.queryParams.deStatus;
            this.fetchUserSingle.linkedAccounts = this.ViewAccClosure.queryParams.linkedAccounts;
            this.fetchUserSingle.checkerId = this.ViewAccClosure.queryParams.checkerId;
            this.fetchUserSingle.checkerInputTime = this.ViewAccClosure.queryParams.checkerInputTime;
            console.log(this.fetchUserSingle);
          }
        }, {
          key: "exportAsXLSX",
          value: function exportAsXLSX() {
            var _this13 = this;

            console.log("this is on click of download"); // this.showProgressBar = true;

            setTimeout(function () {// this.showProgressBar = false;
            }, 2000); // console.log(this.excel);
            // this.bulkDataInExcel=this.excel;
            // console.log("bulkDataInExcel",this.bulkDataInExcel);
            //let fin=this.sendFileName.split('.').slice(0, -1).join('.');

            console.log(this.fetchUserSingle.fileName);
            var fin = this.fetchUserSingle.fileName.split('.').slice(0, -1).join('.');
            this.excelService.getExcel(fin, this.fetchUserSingle.accountType).subscribe(function (data) {
              console.log("this is backend data for excel", data);
              _this13.excel = data;
              data.forEach(function (element) {//this.excel.push(element);
              }); //console.log("vidya",this.excel);

              _this13.excelService.exportAsExcelFile(_this13.excel, 'BULK_ACCOUNT_CLOSURE');
            });
            console.log(this.excel); // --passing two arguments --1)is getting data from backend --i.e is excel data
            // 2)what name i should give for file
          } //downloding records in pdf

        }, {
          key: "convert",
          value: function convert() {
            var _this14 = this;

            var doc = new (jspdf__WEBPACK_IMPORTED_MODULE_1___default())();
            var col = [["AccountNo", "branchCode", "closureReason", "customerId", "fileName", "frozen"]];
            var rows = [];
            console.log(this.fetchUserSingle);
            /* The following array of object as response from the API req  */

            var fin = this.fetchUserSingle.fileName.split('.').slice(0, -1).join('.'); //let fin=this.fetchUserSingle.fileName.split('.').slice(0, -1).join('.');

            this.excelService.getExcel(fin, this.fetchUserSingle.accountType).subscribe(function (data) {
              console.log("this is backend data for excel");
              _this14.excel = data;
              var itemNew = _this14.excel;
              itemNew.forEach(function (element) {
                var date = new Date(element.timeForExport).toLocaleDateString("en-us");
                console.log(date);
                var temp = [element.accountNo, element.branchCode, element.closureReason, element.customerId, element.fileName, element.frozen];
                rows.push(temp);
              });
              var doc = new (jspdf__WEBPACK_IMPORTED_MODULE_1___default())(); //doc.autoTable(col, rows);

              doc.autoTable({
                head: col,
                body: rows
              });
              doc.save('BULK_Account_Closure.pdf');
            });
          }
        }, {
          key: "modo",
          value: function modo(event) {
            console.log(event);

            if (event == 'PDF') {
              this.convert();
            }

            if (event == 'Excel') {
              this.exportAsXLSX();
            }
          } // ---------------------Process The Bulk-----------------------------

        }, {
          key: "onProcessingTheBulkAccount",
          value: function onProcessingTheBulkAccount() {
            var _this15 = this;

            console.log("this is bulk process", this.fetchUserSingle.fileName);
            this.excelService.processTheBulkRecord(this.fetchUserSingle.fileName, this.fetchUserSingle.accountType, this.fetchUserSingle.inputBy).subscribe(function (processResp) {
              console.log(processResp);
              var msg = processResp.errorDesc;

              if (processResp.var1 == true) {
                _this15.process = true;

                _this15.ref.markForCheck();

                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                  text: 'Record Processed SuccessFully',
                  icon: "success"
                });
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                  text: msg,
                  icon: "warning"
                }); // this.process=true;
              }
            });
          }
        }, {
          key: "onCancelingTheRecord",
          value: function onCancelingTheRecord() {
            var _this16 = this;

            console.log("this is deleteing the record", this.fetchUserSingle.fileName);
            this.excelService.onDeletingTheReocrd(this.fetchUserSingle.fileName, this.fetchUserSingle.accountTypeBulk, this.fetchUserSingle.makerId).subscribe(function (deleteResp) {
              console.log(deleteResp);

              if (deleteResp == true) {
                _this16["delete"] = true;
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                  text: 'Record is Deleted',
                  icon: "success"
                });

                _this16.router.navigate(['/initiate-account-closure']);
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                  text: 'Failed To Delete The Record',
                  icon: "warning"
                });
              }
            });
          }
        }, {
          key: "onProcessingTheSingleAccount",
          value: function onProcessingTheSingleAccount() {
            var _this17 = this;

            console.log("this is single process", this.fetchUserSingle.accountNumber);
            this.excelService.processTheSingleRecord(this.fetchUserSingle.accountNumber, this.fetchUserSingle.inputBy).subscribe(function (processResp) {
              console.log(processResp);
              var msg = processResp.errorDesc;

              if (processResp.var1 == true) {
                _this17.process = true;

                _this17.ref.markForCheck();

                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                  text: 'Record Processed SuccessFully',
                  icon: "success"
                });
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                  text: msg,
                  icon: "warning"
                }); // this.process=true;
              }
            });
          }
        }, {
          key: "onCancelingTheSingleRecord",
          value: function onCancelingTheSingleRecord() {
            var _this18 = this;

            console.log("deleting Single", this.fetchUserSingle.accountNumber);
            console.log("deleting Single", this.fetchUserSingle.accountType);
            console.log("deleting Single", this.fetchUserSingle.closureType);
            console.log("deleting Single", this.fetchUserSingle.inputBy);
            this.excelService.onDeletingSingle(this.fetchUserSingle.accountNumber, this.fetchUserSingle.accountType, this.fetchUserSingle.closureType, this.fetchUserSingle.inputBy).subscribe(function (singledeleteResp) {
              console.log(singledeleteResp);
              _this18.deleteSingle = true;

              if (singledeleteResp == true) {
                // this.iziToast.show({
                //   message: `Record Deleted successFully`,
                //   image: "assets/images/user.png",
                //   icon: 'ico ico-success',
                //   theme:"dark",
                //   layout: 2,
                //   // imageWidth:50,
                //   balloon: false,
                //   position: "topRight",
                //   progressBarColor: "green",
                //   pauseOnHover: true,
                // });
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                  text: 'Record is Deleted',
                  icon: "success"
                });

                _this18.router.navigate(['/initiate-account-closure']);
              } else {
                // this.iziToast.show({
                //   message: `Failed To Delete The Record`,
                //   image: "assets/images/user.png",
                //   icon: 'ico ico-warning',
                //   theme:"dark",
                //   layout: 2,
                //   // imageWidth:50,
                //   balloon: false,
                //   position: "topRight",
                //   progressBarColor: "green",
                //   pauseOnHover: true,
                // });
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                  text: 'Failed To Delete The Record',
                  icon: "warning"
                });
              }
            });
          } // ================geneerate Excel For Single==================

        }, {
          key: "downloadReportForSingle",
          value: function downloadReportForSingle() {
            console.log("download for single");
            this.singleExcel.push(this.fetchUserSingle);
            console.log(this.fetchUserSingle);
            console.log(this.singleExcel);
            this.excelService.exportAsExcelForSingleAccount(this.singleExcel, 'SINGLE_ACCOUNT_CLOSURE');
            console.log("this is single", this.singleExcel);
          } // ================geneerate PDF For Single==================

        }, {
          key: "convertReportForSingle",
          value: function convertReportForSingle() {
            var _this19 = this;

            console.log(this.fetchUserSingle);
            var doc = new (jspdf__WEBPACK_IMPORTED_MODULE_1___default())();
            var col = [["Conolidated Report"]];
            var rows = [];
            var itemNew = this.fetchUserSingle;
            Object.keys(itemNew);
            Object.values(itemNew);
            Object.entries(itemNew);
            console.log(Object.entries(itemNew)); // console.log("obj",obj);

            var objectArray = Object.entries(itemNew);
            var mapped = Object.keys(this.fetchUserSingle).map(function (key) {
              return {
                type: key,
                value: _this19.fetchUserSingle[key]
              };
            });
            console.log(mapped);
            doc.autoTable({
              // head: col,
              body: mapped
            });
            doc.save('Single_Account_Closure.pdf');
          }
        }]);

        return _ViewReportAccClosureComponent;
      }();

      _ViewReportAccClosureComponent.ɵfac = function ViewReportAccClosureComponent_Factory(t) {
        return new (t || _ViewReportAccClosureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_account_closure_service_service__WEBPACK_IMPORTED_MODULE_4__.AccountClosureServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ng2_izitoast__WEBPACK_IMPORTED_MODULE_5__.Ng2IzitoastService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_6__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
      };

      _ViewReportAccClosureComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: _ViewReportAccClosureComponent,
        selectors: [["npr-view-report-acc-closure"]],
        decls: 7,
        vars: 2,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["action", "", 1, "formStyle"], ["class", "dbCardStyle cardWidth", 4, "ngIf"], ["class", "dbCardStyle", 4, "ngIf"], [1, "dbCardStyle", "cardWidth"], [1, "col-12"], ["for", "roleName", 1, "formLbl"], ["aria-label", "Default select example", 1, "form-select", 3, "change"], ["value", "Excel"], ["value", "PDF"], [1, "row", "g-3", "pb-3", "justify-content-center", "pt-3"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["routerLink", "/initiate-account-closure", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], ["datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], ["datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 3, "dtOptions", "dtTrigger"], ["aria-label", "Default select example", 1, "form-select"], ["value", "1", 3, "click"], ["value", "2", 3, "click"]],
        template: function ViewReportAccClosureComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "View Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, ViewReportAccClosureComponent_div_5_Template, 19, 2, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, ViewReportAccClosureComponent_div_6_Template, 93, 19, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.fetchUserSingle.closureType != "SINGLE");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.fetchUserSingle.closureType == "SINGLE");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"], _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, angular_datatables__WEBPACK_IMPORTED_MODULE_7__.DataTableDirective],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXJlcG9ydC1hY2MtY2xvc3VyZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_views_initiate-account-closure_initiate-account-closure_module_ts-es5.js.map