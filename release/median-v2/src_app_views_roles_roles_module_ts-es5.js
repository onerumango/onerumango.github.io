(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_roles_roles_module_ts"], {
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
    56900:
    /*!***********************************************!*\
      !*** ./src/app/shared/models/fmosroledata.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "fmosrolesdata": function fmosrolesdata() {
          return (
            /* binding */
            _fmosrolesdata
          );
        }
        /* harmony export */

      });

      var _fmosrolesdata = /*#__PURE__*/_createClass(function _fmosrolesdata() {
        _classCallCheck(this, _fmosrolesdata);
      });
      /***/

    },

    /***/
    82899:
    /*!***************************************!*\
      !*** ./src/app/shared/models/role.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Roles": function Roles() {
          return (
            /* binding */
            _Roles
          );
        }
        /* harmony export */

      });

      var _Roles = /*#__PURE__*/_createClass(function _Roles() {
        _classCallCheck(this, _Roles);
      });
      /***/

    },

    /***/
    54672:
    /*!********************************************************************!*\
      !*** ./src/app/views/roles/role-details/role-details.component.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RoleDetailsComponent": function RoleDetailsComponent() {
          return (
            /* binding */
            _RoleDetailsComponent
          );
        },

        /* harmony export */
        "UsernameValidator": function UsernameValidator() {
          return (
            /* binding */
            _UsernameValidator
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_shared_models_fmosroledata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/models/fmosroledata */
      56900);
      /* harmony import */


      var src_app_shared_models_role__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/models/role */
      82899);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      77382);
      /* harmony import */


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var ng2_izitoast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-izitoast */
      27218);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function RoleDetailsComponent_div_14_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please Enter RoleName ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RoleDetailsComponent_div_14_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " RoleName cannot contain space ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RoleDetailsComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RoleDetailsComponent_div_14_div_1_Template, 2, 0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, RoleDetailsComponent_div_14_div_2_Template, 2, 0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.myform.get("roleName").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.myform.get("roleName").errors.cannotContainSpace);
        }
      }

      function RoleDetailsComponent_div_21_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please Enter RoleDesc ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RoleDetailsComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RoleDetailsComponent_div_21_div_1_Template, 2, 0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.myform.get("roleDesc").errors.required);
        }
      }

      function RoleDetailsComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_div_24_Template_button_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);

            var btn_r11 = restoredCtx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r13.getPermission(btn_r11.tabId, btn_r11.tabName);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var btn_r11 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", btn_r11.tabName == ctx_r3.btnNameSelected ? "active" : "notActive")("disabled", ctx_r3.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](btn_r11.tabName);
        }
      }

      function RoleDetailsComponent_tr_57_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_tr_57_Template_input_click_6_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);

            var roles_r15 = restoredCtx.$implicit;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r17.clickRoleAction(roles_r15, "SELECTALL", $event.target.checked);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_tr_57_Template_input_click_9_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);

            var roles_r15 = restoredCtx.$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r19.clickRoleAction(roles_r15, "NEW", $event.target.checked);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_tr_57_Template_input_click_12_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);

            var roles_r15 = restoredCtx.$implicit;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r20.clickRoleAction(roles_r15, "EDIT", $event.target.checked);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_tr_57_Template_input_click_15_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);

            var roles_r15 = restoredCtx.$implicit;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r21.clickRoleAction(roles_r15, "DELETE", $event.target.checked);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_tr_57_Template_input_click_18_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);

            var roles_r15 = restoredCtx.$implicit;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r22.clickRoleAction(roles_r15, "CLOSE", $event.target.checked);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_tr_57_Template_input_click_21_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);

            var roles_r15 = restoredCtx.$implicit;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r23.clickRoleAction(roles_r15, "REOPEN", $event.target.checked);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_tr_57_Template_input_click_24_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);

            var roles_r15 = restoredCtx.$implicit;

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r24.clickRoleAction(roles_r15, "UNLOCK", $event.target.checked);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_tr_57_Template_input_click_27_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);

            var roles_r15 = restoredCtx.$implicit;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r25.clickRoleAction(roles_r15, "PRINT", $event.target.checked);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_tr_57_Template_input_click_30_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);

            var roles_r15 = restoredCtx.$implicit;

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r26.clickRoleAction(roles_r15, "AUTH", $event.target.checked);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_tr_57_Template_input_click_33_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);

            var roles_r15 = restoredCtx.$implicit;

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r27.clickRoleAction(roles_r15, "VIEW", $event.target.checked);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var roles_r15 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](roles_r15.Screens);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r4.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r4.editFlag)("checked", roles_r15.NEW == "0" ? false : true);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r4.editFlag)("checked", roles_r15.EDIT == "0" ? false : true);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r4.editFlag)("checked", roles_r15.DELETE == "0" ? false : true);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r4.editFlag)("checked", roles_r15.CLOSE == "0" ? false : true);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r4.editFlag)("checked", roles_r15.REOPEN == "0" ? false : true);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r4.editFlag)("checked", roles_r15.UNLOCK == "0" ? false : true);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r4.editFlag)("checked", roles_r15.PRINT == "0" ? false : true);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r4.editFlag)("checked", roles_r15.AUTH == "0" ? false : true);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r4.editFlag)("checked", roles_r15.VIEW == "0" ? false : true);
        }
      }

      var _c0 = function _c0() {
        return ["/roles/list"];
      };

      function RoleDetailsComponent_div_58_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_div_58_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r28.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("disabled", !ctx_r5.myform.valid || ctx_r5.submitBtn);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](2, _c0));
        }
      }

      function RoleDetailsComponent_div_59_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_div_59_div_2_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r36.editValues();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RoleDetailsComponent_div_59_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_div_59_div_3_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r39);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r38.modifyRoles();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r31.submitBtn);
        }
      }

      function RoleDetailsComponent_div_59_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_div_59_div_4_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r41);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r40.verifyRole(ctx_r40.modifyRoleObject.roleName);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r32.enableEdit)("disabled", ctx_r32.authBtn);
        }
      }

      function RoleDetailsComponent_div_59_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_div_59_div_5_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r43);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r42.reopenRecord(ctx_r42.modifyRoleObject.roleName);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Reopen");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx_r33.openHide || ctx_r33.enableEdit);
        }
      }

      function RoleDetailsComponent_div_59_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_div_59_div_6_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r45);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r44.closeRecord(ctx_r44.modifyRoleObject.roleName);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx_r34.closeHide || ctx_r34.enableEdit);
        }
      }

      function RoleDetailsComponent_div_59_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_div_59_div_7_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r46.deleteRole(ctx_r46.modifyRoleObject.roleName);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r35.enableEdit);
        }
      }

      function RoleDetailsComponent_div_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, RoleDetailsComponent_div_59_div_2_Template, 3, 0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, RoleDetailsComponent_div_59_div_3_Template, 3, 1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, RoleDetailsComponent_div_59_div_4_Template, 3, 2, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, RoleDetailsComponent_div_59_div_5_Template, 3, 1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, RoleDetailsComponent_div_59_div_6_Template, 3, 1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, RoleDetailsComponent_div_59_div_7_Template, 3, 1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.editFlag && ctx_r6.roleCodes.edit && ctx_r6.modifyRoleObject.recordStatus == "OPEN");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r6.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.modifyRoleObject.authStatus == "UNAUTHORIZED" && ctx_r6.roleCodes.auth);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.modifyRoleObject.recordStatus == "CLOSED" && ctx_r6.modifyRoleObject.firstTimeAuth == "YES" && ctx_r6.roleCodes.reopen);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.modifyRoleObject.recordStatus == "OPEN" && ctx_r6.modifyRoleObject.firstTimeAuth == "YES");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.modifyRoleObject.firstTimeAuth == "NO");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](7, _c0));
        }
      }

      function RoleDetailsComponent_div_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Maker");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Maker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](26, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Record Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "Checker");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](56, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Checker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](63, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](69, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "First Time Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](81, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85, "Auth Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](93, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](97, "Modification Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](99);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.modifyRoleObject.maker);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](26, 8, ctx_r7.modifyRoleObject.makerDtStamp, "MM/dd/yyyy, h:mm a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.modifyRoleObject.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.modifyRoleObject.checkerId);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](63, 11, ctx_r7.modifyRoleObject.checkerDtStamp, "MM/dd/yyyy, h:mm a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.modifyRoleObject.firstTimeAuth);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.modifyRoleObject.authStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.modifyRoleObject.version);
        }
      }

      var _RoleDetailsComponent = /*#__PURE__*/function () {
        function _RoleDetailsComponent(roleService, api, route, formBuilder, router, cdr, iziToast) {
          _classCallCheck(this, _RoleDetailsComponent);

          this.roleService = roleService;
          this.api = api;
          this.route = route;
          this.formBuilder = formBuilder;
          this.router = router;
          this.cdr = cdr;
          this.iziToast = iziToast;
          this.modifyRoleObject = new src_app_shared_models_role__WEBPACK_IMPORTED_MODULE_1__.Roles();
          this.previouschecklist = [];
          this.checkedlist = [];
          this.screenName = [];
          this.modifyScreen = false;
          this.editFlag = false;
          this.enableEdit = false;
          this.newRolesData = new src_app_shared_models_fmosroledata__WEBPACK_IMPORTED_MODULE_0__.fmosrolesdata();
          this.checkAll = false;
          this.openBtn = true;
          this.closeBtn = true;
          this.authBtn = false;
          this.openHide = true;
          this.closeHide = true;
        }

        _createClass(_RoleDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.username = localStorage.getItem('userFromLogin').replace(/['"]+/g, '');
            this.navSubscription = this.roleService.getNavParam.subscribe(function (data) {
              return _this2.editRoleScreen = data;
            });
            console.log(this.username); //this.getPermission(1,'System Maintenance');

            this.editFlag = false;
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this2.roleCodes = message;
            });
            console.log(this.editRoleScreen);
            console.log(this.route.snapshot.queryParams);
            this.modifyRoleObject.id = this.editRoleScreen.queryParams.id;
            this.modifyRoleObject.roleName = this.editRoleScreen.queryParams.roleName;
            this.modifyRoleObject.roleDesc = this.editRoleScreen.queryParams.roleDesc;
            this.modifyRoleObject.maker = this.editRoleScreen.queryParams.maker;
            this.modifyRoleObject.makerDtStamp = this.editRoleScreen.queryParams.makerDtStamp;
            this.modifyRoleObject.checkerId = this.editRoleScreen.queryParams.checkerId;
            this.modifyRoleObject.checkerDtStamp = this.editRoleScreen.queryParams.checkerDtStamp;
            this.modifyRoleObject.recordStatus = this.editRoleScreen.queryParams.recordStatus;
            this.modifyRoleObject.version = this.editRoleScreen.queryParams.version;
            this.buildRoleForm(this.modifyRoleObject);

            if (this.modifyRoleObject.recordStatus == 'O') {
              this.modifyRoleObject.recordStatus = "OPEN";
            } else if (this.modifyRoleObject.recordStatus == 'C') {
              this.modifyRoleObject.recordStatus = "CLOSED";
            } else {
              this.modifyRoleObject.recordStatus = this.editRoleScreen.queryParams.recordStatus;
            }

            this.modifyRoleObject.authStatus = this.editRoleScreen.queryParams.authStatus;

            if (this.modifyRoleObject.authStatus == 'A') {
              this.modifyRoleObject.authStatus = "AUTHORIZED";
            } else if (this.modifyRoleObject.authStatus == 'U') {
              this.modifyRoleObject.authStatus = "UNAUTHORIZED";
            } else {
              this.modifyRoleObject.authStatus = this.editRoleScreen.queryParams.authStatus;
            }

            this.modifyRoleObject.firstTimeAuth = this.editRoleScreen.queryParams.firstTimeAuth;

            if (this.modifyRoleObject.firstTimeAuth == 'Y') {
              this.modifyRoleObject.firstTimeAuth = "YES";
            } else if (this.modifyRoleObject.firstTimeAuth == 'N') {
              this.modifyRoleObject.firstTimeAuth = "NO";
            } else {
              this.modifyRoleObject.firstTimeAuth = this.editRoleScreen.queryParams.firstTimeAuth;
            } // console.log(' data for update role recived');


            console.log(this.modifyRoleObject.roleName);

            if (this.modifyRoleObject.roleName) {
              console.log("Query params");
              this.modifyScreen = true;
              this.editFlag = true;
            }

            this.fetchdynamicroles();
            this.roleService.fetchScreenPermissions('Roles');
          }
        }, {
          key: "buildRoleForm",
          value: function buildRoleForm(data) {
            console.log(data);
            this.myform = this.formBuilder.group({
              roleName: [data.roleName ? data.roleName : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _UsernameValidator.cannotContainSpace]],
              roleDesc: [data.roleDesc ? data.roleDesc : '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
            });
            console.log(this.myform);
          }
        }, {
          key: "preparingPermissiondto",
          value: function preparingPermissiondto(screenlist, permissionlength) {
            var permissionlist = [];

            for (var i = 0; i < screenlist.length; i++) {
              var permissionidobj = {
                roleName: '',
                screenId: screenlist[i].screensId.screenId
              };
              var permissionarray = [];

              for (var j = 0; j < permissionlength; j++) {
                permissionarray.push(0);
              }

              var permissionstring = permissionarray.join("");
              permissionlist.push({
                permissionId: permissionidobj,
                permissions: permissionstring
              });
            } //for loop endng


            return permissionlist;
          }
        }, {
          key: "editValues",
          value: function editValues() {
            this.enableEdit = true;
            this.editFlag = false;
            this.openBtn = false; // this.authBtn=false;

            this.closeBtn = false;
          }
        }, {
          key: "getPermission",
          value: function getPermission(num, event) {
            // console.log(this.checkAll);
            // console.log(num,event);
            this.btnNameSelected = event; // console.log(num);

            if (num != null || num != undefined) {
              this.rolestype(num);
              console.log("inside If");
            } else {
              this.rolestype(1);
              console.log("Else");
            }

            this.roleService.fetchScreenPermissions('Roles');
          } // verify/authorize a user

        }, {
          key: "verifyRole",
          value: function verifyRole(roleName) {
            var _this3 = this;

            console.log(roleName, this.username);

            if (this.modifyRoleObject.maker === this.username) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                text: 'Maker Cannot Authorize Record!',
                icon: 'error'
              });
              return;
            } else {
              // this.roleService.verifyRole(roleName, this.username).subscribe(data => {
              //   this.updatedRoleObject = data;
              //   this.cdr.markForCheck();
              //   this.modifyRoleObject = this.updatedRoleObject;
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
                  _this3.roleService.verifyRole(roleName, _this3.username).subscribe(function (data) {
                    _this3.updatedRoleObject = data;

                    _this3.cdr.markForCheck();

                    _this3.modifyRoleObject = _this3.updatedRoleObject;

                    if (_this3.modifyRoleObject) {
                      _this3.auditLog();

                      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                        text: "Role is Authorized",
                        icon: 'success'
                      });
                    }
                  });
                }
              }); // Swal.fire("Role is Authorized ");
              // });
            }
          } // close a user

        }, {
          key: "closeRecord",
          value: function closeRecord(roleName) {
            var _this4 = this;

            // this.roleService.closelockRecord(roleName, this.username).subscribe(data => {
            //   this.updatedRoleObject = data;
            //   this.cdr.markForCheck();
            //   this.modifyRoleObject = this.updatedRoleObject;
            //   console.log('role is closed',this.updatedRoleObject.recordStatus);
            //   this.openBtn=false;
            //   this.closeBtn=false;
            // if(this.updatedRoleObject.recordStatus=='C'){
            // this.closeHide=true;
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
              text: 'You are trying to Closed record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#E6224A',
              cancelButtonColor: '#011945',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              icon: 'info'
            }).then(function (result) {
              if (result.isConfirmed === true) {
                _this4.roleService.closelockRecord(roleName, _this4.username).subscribe(function (data) {
                  _this4.updatedRoleObject = data;

                  _this4.cdr.markForCheck();

                  _this4.modifyRoleObject = _this4.updatedRoleObject;
                  console.log('role is closed', _this4.updatedRoleObject.recordStatus);
                  _this4.openBtn = false;
                  _this4.closeBtn = false;

                  if (_this4.updatedRoleObject) {
                    _this4.auditLog();

                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                      text: "Role is Closed",
                      icon: 'success'
                    });
                  }
                });
              }
            });

            if (this.updatedRoleObject === false) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                icon: 'error',
                text: 'Failed to Closed Record '
              });
            } // Swal.fire("Role is Closed ");
            // }
            // });

          } // reopen a user
          // reopen a user

        }, {
          key: "reopenRecord",
          value: function reopenRecord(userId) {
            var _this5 = this;

            // this.roleService.reopenRecord(userId, this.username).subscribe(data => {
            //   this.updatedRoleObject = data;
            //   this.cdr.markForCheck();
            //   this.modifyRoleObject = this.updatedRoleObject;
            //   console.log('user is reopened');
            //   this.openBtn=false;
            //   this.closeBtn=false;
            // if(this.updatedRoleObject.recordStatus=='O'){
            // this.openHide=true;
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
                _this5.roleService.reopenRecord(userId, _this5.username).subscribe(function (data) {
                  _this5.updatedRoleObject = data;

                  _this5.cdr.markForCheck();

                  _this5.modifyRoleObject = _this5.updatedRoleObject;
                  console.log('user is reopened');
                  _this5.openBtn = false;
                  _this5.closeBtn = false;

                  if (_this5.modifyRoleObject) {
                    _this5.auditLog();

                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                      text: "Role is Reopened",
                      icon: 'success'
                    });
                  }
                });
              }
            });

            if (this.deleteStatusFlag === false) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                icon: 'error',
                text: 'Failed to Reopened Record '
              });
            } // Swal.fire("Role is Reopened ");
            // }
            // });

          } // delete a user

        }, {
          key: "deleteRole",
          value: function deleteRole(roleName) {
            var _this6 = this;

            // this.roleService.deleteRole(roleName, this.username).subscribe(data => {
            //   console.log('user is deleted');
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
                _this6.roleService.deleteRole(roleName, _this6.username).subscribe(function (data) {
                  //console.log('deleteData', datafrombackendtoDelete);
                  _this6.deleteStatusFlag = data;

                  if (_this6.deleteStatusFlag) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                      text: "Role is Deleted",
                      icon: 'success'
                    });

                    _this6.router.navigate(['/roles/list']);
                  }
                });
              }
            });

            if (this.deleteStatusFlag === false) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                icon: 'error',
                text: 'Failed to Delete Record '
              });
            } // });

          }
        }, {
          key: "modifyRoles",
          value: function modifyRoles() {
            var _this7 = this;

            var permissionslist = [];

            var _loop = function _loop(i) {
              var screenoccurence = _this7.rolessorteddata[i].screenlist;

              var _loop2 = function _loop2(ind) {
                if (screenoccurence[ind].permission.toString() != screenoccurence[ind].newpermission.toString()) {
                  var gettabindex = _this7.newRolesData.permissionDto.findIndex(function (item) {
                    return item.permissionId.screenId == screenoccurence[ind].screenid;
                  });

                  if (gettabindex >= 0) {
                    var obj = {
                      'permissionId': _this7.newRolesData.permissionDto[gettabindex].permissionId
                    };
                    obj["permissions"] = screenoccurence[ind].newpermission;
                    permissionslist.push(obj);
                  }
                } //if

              };

              for (var ind = 0; ind < screenoccurence.length; ind++) {
                _loop2(ind);
              } //for loop endng

            };

            for (var i = 0; i < this.rolessorteddata.length; i++) {
              _loop(i);
            } //for loop endng


            var modifiedRole = {
              roleDto: this.newRolesData.roleDto
            };
            modifiedRole.permissionDto = permissionslist;
            console.log(modifiedRole);
            modifiedRole.roleDto.roleDesc = this.modifyRoleObject.roleDesc;
            modifiedRole.roleDto.maker = this.username;
            this.roleService.newmodifyRoleService(modifiedRole).subscribe(function (data) {
              _this7.validationResponse = data;

              _this7.cdr.markForCheck();

              var userId = localStorage.getItem('userFromLogin');

              _this7.roleService.fetchNewRolePermissions(userId); //console.log(this.validationResponse);


              if (_this7.validationResponse) {
                // this.responseError = 'success';
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire("Role is Updated ");
                _this7.submitBtn = true;
                console.log("IF IF IF IF IF");
              } else {
                // this.responseError = 'Server Error';
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                  icon: 'error',
                  text: 'Server Error '
                }); // this.iziToast.show({
                //   message: `Server Error`,
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

                console.log("ELSE ELSE ELSE ELSE");
              }
            });
          }
        }, {
          key: "fetchdynamicroles",
          value: function fetchdynamicroles() {
            var _this8 = this;

            if (this.modifyRoleObject.roleName != null) {
              this.roleService.fetchdynamicrolesdata(this.modifyRoleObject.roleName).subscribe(function (data) {
                console.log('fetch', data);
                _this8.newRolesData.roleDto = data.roleDto;
                _this8.newRolesData.permissionDto = data.permissionDto;
                _this8.newRolesData.tabDto = data.tabDto;
                _this8.newRolesData.labelDto = data.labelDto;
                _this8.newRolesData.screenDto = data.screenDto;
                var arrayC = [];
                var arrayB = data.screenDto;
                var labelsarray = data.labelDto;
                var permissionsarray = data.permissionDto;
                console.log(_this8.newRolesData, "New roles Data"); //new code regarding old roles screens 04/08

                if (permissionsarray && permissionsarray.length < data.screenDto.length) {
                  var initalizepermissions = '';

                  if (data.labelDto) {
                    var labelarray = [];

                    for (var i = 0; i < data.labelDto.length; i++) {
                      labelarray.push(0);
                    }

                    var missiongpermissions = labelarray.join("");
                    initalizepermissions = missiongpermissions;
                  }

                  var _loop3 = function _loop3(_i) {
                    var items = data.screenDto[_i];
                    var screenindex = permissionsarray.findIndex(function (item) {
                      return item.permissionId.screenId == items.screensId.screenId;
                    });

                    if (screenindex == -1) {
                      var permissionobj = {
                        roleName: _this8.modifyRoleObject.roleName,
                        screenId: items.screensId.screenId
                      };
                      var obj = {
                        permissionId: permissionobj,
                        permissions: initalizepermissions
                      };
                      permissionsarray.push(obj);
                    }
                  };

                  for (var _i = 0; _i < data.screenDto.length; _i++) {
                    _loop3(_i);
                  }
                }

                _this8.screenName = _this8.newRolesData.tabDto;
                var scrnm = [];

                for (var n = 0; n < _this8.screenName.length; n++) {
                  scrnm[_this8.screenName[n].tabId - 1] = _this8.screenName[n];
                }

                _this8.screenName = [];

                for (var _n = 0; _n < scrnm.length; _n++) {
                  if (scrnm[_n] != undefined) {
                    _this8.screenName[_this8.screenName.length] = scrnm[_n];
                  }
                }

                console.log(_this8.btnNameSelected);

                if (_this8.btnNameSelected == null || _this8.btnNameSelected == undefined) {
                  _this8.btnNameSelected = _this8.screenName[0].tabName;
                } //end of new code regarding old roles screens 04/08
                //fetch screens for tabs
                // data.tabDto.forEach(function(element){


                for (var tabindex = 0; tabindex < data.tabDto.length; tabindex++) {
                  var screen = [];
                  var screenslist = [];
                  var element = data.tabDto[tabindex];
                  screenslist = _this8.getscreenlist(arrayB, element, permissionsarray, screen, screenslist); //fetching screen list 
                  // console.log('arrayc', screenslist);
                  //  arrayB.forEach((items) => {
                  // }) //arrayb fntn endng
                  //end of fetching screen list
                  //fetching labels for screen

                  var screenvisibility = element.visibility.toString();
                  var label = [];
                  var labellist = [];

                  for (var _i2 = 0; _i2 < screenvisibility.length; _i2++) {
                    if (screenvisibility.charAt(_i2) == 1) {
                      label.push(labelsarray[_i2].labelName);
                      labellist.push(labelsarray[_i2]);
                    }
                  } //end of fetching labels for screen


                  arrayC.push({
                    tabId: element.tabId,
                    tabname: element.tabName,
                    screens: screen,
                    screenlist: screenslist,
                    labels: label,
                    labelslist: labellist
                  });
                }

                _this8.rolessorteddata = arrayC; // this.newRolestabsdata.tabslist = arrayC;

                _this8.rolestype(1);

                console.log('arrayc', arrayC); //end of fetching screen for tabs
              });
            } else {
              this.roleService.fetchnewscreenlabels().subscribe(function (data) {
                // console.log(data);
                var permissionsarray = _this8.preparingPermissiondto(data.screenDto, data.labelDto.length); // let permissionsarray = data.permissionDto ; // Added - Gayathri


                _this8.newRolesData.roleDto = data.roleDto;
                _this8.newRolesData.permissionDto = permissionsarray;
                _this8.newRolesData.tabDto = data.tabDto;
                _this8.newRolesData.labelDto = data.labelDto;
                _this8.newRolesData.screenDto = data.screenDto;
                var arrayC = [];
                var arrayB = data.screenDto;
                var labelsarray = data.labelDto;
                _this8.screenName = _this8.newRolesData.tabDto;
                var scrnm = [];

                for (var n = 0; n < _this8.screenName.length; n++) {
                  scrnm[_this8.screenName[n].tabId - 1] = _this8.screenName[n];
                } // console.log("scrnm: ", scrnm);


                _this8.screenName = []; // console.log("scrnm 1: ", this.screenName);

                for (var _n2 = 0; _n2 < scrnm.length; _n2++) {
                  if (scrnm[_n2] != undefined) {
                    _this8.screenName[_this8.screenName.length] = scrnm[_n2];
                  }
                } // console.log("scrName 2: ", this.screenName);
                //  console.log(this.btnNameSelected)


                if (_this8.btnNameSelected == null || _this8.btnNameSelected == undefined) {
                  _this8.btnNameSelected = _this8.screenName[0].tabName;
                }

                for (var tabindex = 0; tabindex < data.tabDto.length; tabindex++) {
                  var screen = [];
                  var screenslist = [];
                  var element = data.tabDto[tabindex]; // console.log(element);

                  screenslist = _this8.getscreenlist(arrayB, element, permissionsarray, screen, screenslist); // console.log(screenslist);
                  //fetching screen list 
                  //end of fetching screen list
                  //fetching labels for screen

                  var screenvisibility = element.visibility.toString();
                  var label = [];
                  var labellist = [];

                  for (var i = 0; i < screenvisibility.length; i++) {
                    if (screenvisibility.charAt(i) == 1) {
                      label.push(labelsarray[i].labelName);
                      labellist.push(labelsarray[i]);
                    }
                  } //end of fetching labels for screen


                  arrayC.push({
                    tabId: element.tabId,
                    tabname: element.tabName,
                    screens: screen,
                    screenlist: screenslist,
                    labels: label,
                    labelslist: labellist
                  });
                } // console.log(arrayC);


                _this8.rolessorteddata = arrayC; // this.newfmostabsdata.tabslist = arrayC;
                // console.log( this.newfmostabsdata.tabslist);

                _this8.rolestype(1); //end of fetching screen for tabs

              });
            }
          }
        }, {
          key: "getscreenlist",
          value: function getscreenlist(arrayB, element, permissionsarray, screen, screenslist) {
            var _loop4 = function _loop4(ind) {
              var items = arrayB[ind];

              if (element.tabId == items.screensId.tabId) {
                var idexist = permissionsarray.findIndex(function (item) {
                  return item.permissionId.screenId == items.screensId.screenId;
                });
                screen.push(items.screenName);
                if (idexist > -1) screenslist.push({
                  screenname: items.screenName,
                  screenid: items.screensId.screenId,
                  permission: permissionsarray[idexist].permissions,
                  newpermission: permissionsarray[idexist].permissions
                });
              } //if 

            };

            /* arrayB.forEach((items) => {
              if(element.tabId == items.screensId.tabId)
              {
                let idexist = permissionsarray.findIndex(function(item){ return item.permissionId.screenId == items.screensId.screenId});
                 screen.push(items.screenName);
                 screenslist.push({screenname:items.screenName, screenid:items.screensId.screenId, permission:permissionsarray[idexist].permissions, newpermission:permissionsarray[idexist].permissions});
              } //if
            }) //arrayb fnctn endng */
            for (var ind = 0; ind < arrayB.length; ind++) {
              _loop4(ind);
            } //for loop endng


            return screenslist;
          } // getPermission(num,event) {
          //   this.roleService.fetchScreenPermissions('Roles');
          //   this.cdr.markForCheck();
          // }

        }, {
          key: "rolestype",
          value: function rolestype(tabId) {
            console.log(tabId); // console.log(this.modifyRoleObject.roleName);
            // console.log(this.rolessorteddata);

            var index;
            index = this.rolessorteddata.findIndex(function (item) {
              return item.tabId == tabId;
            }); // console.log(index);

            this.selectedtab = this.rolessorteddata[index].tabname;
            this.indexdata = this.rolessorteddata[index];
            var tabheaders = this.indexdata.labels;
            var indexval = tabheaders.indexOf('Screens');
            this.previouschecklist.splice(index, 0, this.checkedlist);
            var checklistclass = [];

            if (indexval == -1) {
              tabheaders.splice(0, 0, 'Screens');
              tabheaders.splice(1, 0, 'checkbox');
            }

            var screenslist = [];
            var checklist = [];
            var strchklist = []; // console.log(this.indexdata,"Index data");

            var data = this.indexdata.screenlist;

            for (var i = 0; i < data.length; i++) {
              var array = [];
              var obj = {};
              var checkval = {};
              var testchecklist = [{
                value: ''
              }, {
                value: ''
              }];
              var strinchklst = [{
                value: ''
              }, {
                value: ''
              }];
              array.push(data[i].screenname);
              obj[this.indexdata.labels[0]] = data[i].screenname;
              obj[this.indexdata.labels[1]] = 'checkbox';
              checkval[this.indexdata.labels[0]] = true;
              checkval[this.indexdata.labels[1]] = true;
              var permissiondata = data[i].newpermission.toString();
              var stringlength = permissiondata.length; //check if all occurences is checked

              var temp = permissiondata;
              var count = (temp.match(/1/g) || []).length;

              if (stringlength == count) {
                checklistclass.push(i);
              }
              /* if(stringlength == count)
               {
                  testchecklist[0].value = true;
                  strinchklst[0].value = true;
                  testchecklist[1].value = true;
                  strinchklst[1].value = true;
               } //if */
              //end of checking all occurences


              for (var j = 0; j < stringlength; j++) {
                obj[this.indexdata.labels[2 + j]] = permissiondata.charAt(j);

                if (permissiondata.charAt(j) == 1) {
                  checkval[this.indexdata.labels[2 + j]] = true;
                  testchecklist.push({
                    value: true
                  });
                  strinchklst.push({
                    value: true
                  });
                } else {
                  checkval[this.indexdata.labels[2 + j]] = false;
                  testchecklist.push({
                    value: false
                  });
                  strinchklst.push({
                    value: false
                  });
                }
              } //for loop endng


              screenslist.push(obj);
              checklist.push(testchecklist);
              strchklist.push(strinchklst);
            } //for loop endng
            // this.displayedcolumns = tabheaders;
            // this.checkedlist = checklist;
            // this.storechecklist = strchklist;
            // console.log(screenslist);


            this.roleScreenList = screenslist;
            console.log(this.roleScreenList); // console.log(checklist);
            // console.log(strchklist);
            // this.datasource.list = new MatTableDataSource(screenslist);
            // this.selection.clear();
            // if (this.enabledefaulttrigger)
            // document.getElementById('defaultele').click();

            /* if(checklistclass.length)
              {
                setTimeout(() => {
                  this.appendcheckclass(checklistclass);
                }, 3000);
              } //if  */
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.submitted = true;
            this.save();
          }
        }, {
          key: "save",
          value: function save() {
            var _this9 = this;

            // this.role.maker = this.username;
            console.log(this.username);
            this.modifyRoleObject.maker = this.username;
            var permissionslist = [];

            var _loop5 = function _loop5(i) {
              var screenoccurence = _this9.rolessorteddata[i].screenlist;

              var _loop6 = function _loop6(ind) {
                //if (screenoccurence[ind].permission.toString() != screenoccurence[ind].newpermission.toString()) {
                // let gettabindex = this.fmosRolesData.permissionDto.findIndex(function (item) { return item.permissionId.screenId == screenoccurence[ind].screenid });
                var gettabindex = _this9.newRolesData.permissionDto.findIndex(function (item) {
                  return item.permissionId.screenId == screenoccurence[ind].screenid;
                });

                console.log(gettabindex);

                if (gettabindex >= 0) {
                  // this.fmosRolesData.permissionDto[gettabindex].permissionId.roleName =  this.modifyRoleObject.roleName;
                  // let obj = { 'permissionId': this.fmosRolesData.permissionDto[gettabindex].permissionId };
                  console.log(_this9.modifyRoleObject);
                  console.log(_this9.myform.get('roleName').value);
                  _this9.newRolesData.permissionDto[gettabindex].permissionId.roleName = _this9.myform.get('roleName').value;
                  ;
                  var obj = {
                    'permissionId': _this9.newRolesData.permissionDto[gettabindex].permissionId
                  };
                  obj["permissions"] = screenoccurence[ind].newpermission;
                  permissionslist.push(obj);
                  console.log(permissionslist);
                } // } //if

              };

              for (var ind = 0; ind < screenoccurence.length; ind++) {
                _loop6(ind);
              } //for loop endng

            };

            for (var i = 0; i < this.rolessorteddata.length; i++) {
              _loop5(i);
            } //for loop endng


            console.log(this.modifyRoleObject);
            this.modifyRoleObject.roleName = this.myform.get('roleName').value;
            this.modifyRoleObject.roleDesc = this.myform.get('roleDesc').value;
            console.log(this.modifyRoleObject);
            var newRole = {
              roleDto: this.modifyRoleObject
            };
            newRole.permissionDto = permissionslist;
            console.log(newRole);
            this.roleService.createnewrole(newRole).subscribe(function (role) {
              console.log(role);

              if (role != false) {
                if (role.roleDto) {
                  _this9.modifyRoleObject = role.roleDto;

                  if (_this9.modifyRoleObject.recordStatus == 'O') {
                    _this9.modifyRoleObject.recordStatus = "OPEN";
                  } else if (_this9.modifyRoleObject.recordStatus == 'C') {
                    _this9.modifyRoleObject.recordStatus = "CLOSE";
                  } else {
                    _this9.modifyRoleObject.recordStatus = _this9.editRoleScreen.queryParams.recordStatus;
                  }

                  _this9.modifyRoleObject.authStatus = _this9.editRoleScreen.queryParams.authStatus;

                  if (_this9.modifyRoleObject.authStatus == 'A') {
                    _this9.modifyRoleObject.authStatus = "AUTHORIZED";
                  } else {
                    _this9.modifyRoleObject.authStatus = _this9.editRoleScreen.queryParams.authStatus;
                  }

                  _this9.modifyRoleObject.authStatus = "UNAUTHORIZED";
                  _this9.modifyRoleObject.firstTimeAuth = _this9.editRoleScreen.queryParams.firstTimeAuth;

                  if (_this9.modifyRoleObject.firstTimeAuth == 'Y') {
                    _this9.modifyRoleObject.firstTimeAuth = "YES";
                  } else if (_this9.modifyRoleObject.firstTimeAuth == 'N') {
                    _this9.modifyRoleObject.firstTimeAuth = "NO";
                  }

                  _this9.modifyRoleObject.firstTimeAuth = "NO";
                }

                _this9.editFlag = true;
                _this9.submitBtn = true;
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire("Role is Created");
              } else if (role == false) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                  icon: 'error',
                  text: "Role Name already exists."
                });
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                  icon: 'error',
                  text: "\"Failed \", 'Role already exist or Can\u2019t save role without any permission."
                });
              } // this.cdr.markForCheck();

            }, function (error) {// if (HttpErrorResponse) {
              //   Swal.fire('Server Error', 'error')
              // }
            }); // this.role = new Roles();
          }
        }, {
          key: "isEnabled",
          value: function isEnabled() {
            // console.log(this.roleScreenList,"Before");
            for (var g = 0; g < this.roleScreenList.length; g++) {
              if (this.roleScreenList[g].NEW == '0' && this.roleScreenList[g].EDIT == '0' && this.roleScreenList[g].DELETE == '0' && this.roleScreenList[g].CLOSE == '0' && this.roleScreenList[g].REOPEN == '0' && this.roleScreenList[g].AUTH == '0' && this.roleScreenList[g].UNLOCK == '0' && this.roleScreenList[g].PRINT == '0' && this.roleScreenList[g].VIEW == '0') {
                // console.log("Iffffffffffffff");
                return false;
              }

              if (this.roleScreenList[g].NEW == '1' && this.roleScreenList[g].EDIT == '1' && this.roleScreenList[g].DELETE == '1' && this.roleScreenList[g].CLOSE == '1' && this.roleScreenList[g].REOPEN == '1' && this.roleScreenList[g].AUTH == '1' && this.roleScreenList[g].UNLOCK == '1' && this.roleScreenList[g].PRINT == '1' && this.roleScreenList[g].VIEW == '1') {
                // console.log("Elsssssssssssssssss");
                return true;
              }
            } // console.log(this.roleScreenList,"After");

          }
        }, {
          key: "clickAllAction",
          value: function clickAllAction(action, event) {
            // console.log(this.checkAll);
            console.log(action, event);
            console.log(this.roleScreenList, "Role screen list");

            for (var s = 0; s < this.roleScreenList.length; s++) {
              console.log(this.roleScreenList[s], "AUTH INside for");
              this.roleScreenList[s].NEW = event ? "1" : "0";
              this.roleScreenList[s].EDIT = event ? "1" : "0";
              this.roleScreenList[s].DELETE = event ? "1" : "0";
              this.roleScreenList[s].CLOSE = event ? "1" : "0";
              this.roleScreenList[s].REOPEN = event ? "1" : "0";
              this.roleScreenList[s].AUTH = event ? "1" : "0";
              this.roleScreenList[s].UNLOCK = event ? "1" : "0";
              this.roleScreenList[s].PRINT = event ? "1" : "0";
              this.roleScreenList[s].VIEW = event ? "1" : "0";
            }

            for (var r = 0; r < this.roleScreenList.length; r++) {
              for (var m = 0; m < this.rolessorteddata.length; m++) {
                if (this.rolessorteddata[m].tabname == this.btnNameSelected) {
                  for (var n = 0; n < this.rolessorteddata[m].screenlist.length; n++) {
                    if (this.rolessorteddata[m].screenlist[n].screenname == this.roleScreenList[r].Screens) {
                      var newperm1 = this.rolessorteddata[m].screenlist[n].newpermission;
                      var newperm = newperm1.split('');

                      for (var p = 0; p < this.rolessorteddata[m].labelslist.length; p++) {
                        if (this.rolessorteddata[m].labelslist[p].labelName == "NEW") {
                          newperm[this.rolessorteddata[m].labelslist[p].labelId - 1] = this.roleScreenList[r].NEW;
                        }

                        if (this.rolessorteddata[m].labelslist[p].labelName == "EDIT") {
                          newperm[this.rolessorteddata[m].labelslist[p].labelId - 1] = this.roleScreenList[r].EDIT;
                        }

                        if (this.rolessorteddata[m].labelslist[p].labelName == "DELETE") {
                          newperm[this.rolessorteddata[m].labelslist[p].labelId - 1] = this.roleScreenList[r].DELETE;
                        }

                        if (this.rolessorteddata[m].labelslist[p].labelName == "CLOSE") {
                          newperm[this.rolessorteddata[m].labelslist[p].labelId - 1] = this.roleScreenList[r].CLOSE;
                        }

                        if (this.rolessorteddata[m].labelslist[p].labelName == "REOPEN") {
                          newperm[this.rolessorteddata[m].labelslist[p].labelId - 1] = this.roleScreenList[r].REOPEN;
                        }

                        if (this.rolessorteddata[m].labelslist[p].labelName == "UNLOCK") {
                          newperm[this.rolessorteddata[m].labelslist[p].labelId - 1] = this.roleScreenList[r].UNLOCK;
                        }

                        if (this.rolessorteddata[m].labelslist[p].labelName == "PRINT") {
                          newperm[this.rolessorteddata[m].labelslist[p].labelId - 1] = this.roleScreenList[r].PRINT;
                        }

                        if (this.rolessorteddata[m].labelslist[p].labelName == "AUTH") {
                          newperm[this.rolessorteddata[m].labelslist[p].labelId - 1] = this.roleScreenList[r].AUTH;
                        }

                        if (this.rolessorteddata[m].labelslist[p].labelName == "VIEW") {
                          newperm[this.rolessorteddata[m].labelslist[p].labelId - 1] = this.roleScreenList[r].VIEW;
                        }

                        newperm1 = newperm.join('');
                      }

                      this.rolessorteddata[m].screenlist[n].newpermission = newperm1;
                    }
                  }

                  console.log(action, "action");
                  console.log(event, "event");
                  console.log(this.rolessorteddata);
                }
              }
            }

            console.log(this.roleScreenList); // console.log(this.checkAll);
          }
        }, {
          key: "clickRoleAction",
          value: function clickRoleAction(roles, action, event) {
            // console.log(roles,"Roles");
            // console.log(action,"action");
            // console.log(event,"event");
            if (action == "NEW" || action == "SELECTALL") {
              roles.NEW = event ? "1" : "0";
            }

            if (action == "EDIT" || action == "SELECTALL") {
              roles.EDIT = event ? "1" : "0";
            }

            if (action == "DELETE" || action == "SELECTALL") {
              roles.DELETE = event ? "1" : "0";
            }

            if (action == "CLOSE" || action == "SELECTALL") {
              roles.CLOSE = event ? "1" : "0";
            }

            if (action == "REOPEN" || action == "SELECTALL") {
              roles.REOPEN = event ? "1" : "0";
            }

            if (action == "UNLOCK" || action == "SELECTALL") {
              roles.UNLOCK = event ? "1" : "0";
            }

            if (action == "PRINT" || action == "SELECTALL") {
              roles.PRINT = event ? "1" : "0";
            }

            if (action == "AUTH" || action == "SELECTALL") {
              roles.AUTH = event ? "1" : "0";
            }

            if (action == "VIEW" || action == "SELECTALL") {
              roles.VIEW = event ? "1" : "0";
            }

            for (var m = 0; m < this.rolessorteddata.length; m++) {
              if (this.rolessorteddata[m].tabname == this.btnNameSelected) {
                for (var n = 0; n < this.rolessorteddata[m].screenlist.length; n++) {
                  if (this.rolessorteddata[m].screenlist[n].screenname == roles.Screens) {
                    var newperm1 = this.rolessorteddata[m].screenlist[n].newpermission;
                    var newperm = newperm1.split('');

                    for (var p = 0; p < this.rolessorteddata[m].labelslist.length; p++) {
                      if (this.rolessorteddata[m].labelslist[p].labelName == "NEW") {
                        newperm[this.rolessorteddata[m].labelslist[p].labelId - 1] = roles.NEW;
                      }

                      if (this.rolessorteddata[m].labelslist[p].labelName == "EDIT") {
                        newperm[this.rolessorteddata[m].labelslist[p].labelId - 1] = roles.EDIT;
                      }

                      if (this.rolessorteddata[m].labelslist[p].labelName == "DELETE") {
                        newperm[this.rolessorteddata[m].labelslist[p].labelId - 1] = roles.DELETE;
                      }

                      if (this.rolessorteddata[m].labelslist[p].labelName == "CLOSE") {
                        newperm[this.rolessorteddata[m].labelslist[p].labelId - 1] = roles.CLOSE;
                      }

                      if (this.rolessorteddata[m].labelslist[p].labelName == "REOPEN") {
                        newperm[this.rolessorteddata[m].labelslist[p].labelId - 1] = roles.REOPEN;
                      }

                      if (this.rolessorteddata[m].labelslist[p].labelName == "UNLOCK") {
                        newperm[this.rolessorteddata[m].labelslist[p].labelId - 1] = roles.UNLOCK;
                      }

                      if (this.rolessorteddata[m].labelslist[p].labelName == "PRINT") {
                        newperm[this.rolessorteddata[m].labelslist[p].labelId - 1] = roles.PRINT;
                      }

                      if (this.rolessorteddata[m].labelslist[p].labelName == "AUTH") {
                        newperm[this.rolessorteddata[m].labelslist[p].labelId - 1] = roles.AUTH;
                      }

                      if (this.rolessorteddata[m].labelslist[p].labelName == "VIEW") {
                        newperm[this.rolessorteddata[m].labelslist[p].labelId - 1] = roles.VIEW;
                      }

                      newperm1 = newperm.join('');
                    }

                    this.rolessorteddata[m].screenlist[n].newpermission = newperm1;
                  }
                }

                console.log(roles, "Roles");
                console.log(action, "action"); // console.log(event,"event");

                console.log(this.rolessorteddata); // this.isEnabled();
              }
            }
          }
        }, {
          key: "reset",
          value: function reset() {
            this.validationResponse = null;
            this.modifyRoleObject = new src_app_shared_models_role__WEBPACK_IMPORTED_MODULE_1__.Roles();
            this.roleScreenList = null;
            this.rolestype(1); // this.router.navigate(['/dashboard']);
          }
        }, {
          key: "auditLog",
          value: function auditLog() {
            if (this.modifyRoleObject.authStatus == 'U') {
              this.modifyRoleObject.authStatus = 'UNAUTHORIZED';
            }

            if (this.modifyRoleObject.authStatus == 'A') {
              this.modifyRoleObject.authStatus = 'AUTHORIZED';
            }

            if (this.modifyRoleObject.recordStatus == 'O') {
              this.modifyRoleObject.recordStatus = 'OPEN';
            }

            if (this.modifyRoleObject.recordStatus == 'C') {
              this.modifyRoleObject.recordStatus = 'CLOSED';
            }

            if (this.modifyRoleObject.firstTimeAuth == 'N') {
              console.log("NO");
              this.modifyRoleObject.firstTimeAuth = 'NO';
            }

            if (this.modifyRoleObject.firstTimeAuth == 'Y') {
              this.modifyRoleObject.firstTimeAuth = 'YES';
            }
          }
        }]);

        return _RoleDetailsComponent;
      }();

      _RoleDetailsComponent.ɵfac = function RoleDetailsComponent_Factory(t) {
        return new (t || _RoleDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ng2_izitoast__WEBPACK_IMPORTED_MODULE_5__.Ng2IzitoastService));
      };

      _RoleDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _RoleDetailsComponent,
        selectors: [["npr-role-details"]],
        inputs: {
          modifyRoleObject: "modifyRoleObject"
        },
        decls: 61,
        vars: 11,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["action", "", "novalidate", "", 1, "formStyle", 3, "formGroup"], ["roleForm", "ngForm"], [1, "dbCardStyle"], [1, "row", "gy-4"], [1, "col-lg-4"], ["for", "roleName", 1, "formLbl"], [1, "colorRed"], ["id", "roleName", "type", "text", "formControlName", "roleName", "name", "roleName", "placeholder", "Role Name", "value", "", 1, "form-control", 3, "readonly"], ["class", "errorColor", 4, "ngIf"], ["for", "roleDescription", 1, "formLbl"], ["id", "roleDescription", "type", "text", "formControlName", "roleDesc", "required", "", "name", "roleDesc", "placeholder", "Tupe your Text", "value", "", 1, "form-control", 3, "readonly"], [1, "col-lg-12"], [1, "row", "g-2", "justify-content-center"], ["class", "col-auto", 4, "ngFor", "ngForOf"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "checked", "click"], [1, "table-responsive"], ["id", "dbTable1", 1, "table", "tableStyle"], [4, "ngFor", "ngForOf"], ["class", "row g-3 pb-3 justify-content-end pt-3", 4, "ngIf"], ["class", "col-lg-12", 4, "ngIf"], ["class", "dbCardStyle", 4, "ngIf"], [1, "errorColor"], [4, "ngIf"], [1, "col-auto"], [1, "btn", "btnOutlinePrimary", 3, "ngClass", "disabled", "click"], [1, "link-color"], ["type", "checkbox", 1, "form-check-input", 3, "disabled", "click"], ["type", "checkbox", 1, "form-check-input", 3, "disabled", "checked", "click"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["class", "col-auto", 4, "ngIf"], [1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "hidden", "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "hidden", "click"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], ["src", "assets/images/maker-icon.svg", "alt", "..."], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], ["src", "assets/images/checker-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/auth-status-icon.svg", "alt", "..."]],
        template: function RoleDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Role Management");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "form", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Role Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, RoleDetailsComponent_div_14_Template, 3, 2, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Role Description ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, RoleDetailsComponent_div_21_Template, 2, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, RoleDetailsComponent_div_24_Template, 3, 3, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Select ALL");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_Template_input_click_29_listener($event) {
              return ctx.clickAllAction("SELECTALLOPT", $event.target.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "table", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Screen");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Select All");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "NEW");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "EDIT");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Reopen");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "Unlock");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "Print");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "Auth");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "View");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](57, RoleDetailsComponent_tr_57_Template, 34, 20, "tr", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](58, RoleDetailsComponent_div_58_Template, 7, 3, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](59, RoleDetailsComponent_div_59_Template, 11, 8, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](60, RoleDetailsComponent_div_60_Template, 100, 14, "div", 24);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.myform);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("readonly", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.myform.get("roleName").invalid && (ctx.myform.get("roleName").dirty || ctx.myform.get("roleName").touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("readonly", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.myform.get("roleDesc").invalid && (ctx.myform.get("roleDesc").dirty || ctx.myform.get("roleDesc").touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.screenName);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx.isEnabled());

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.roleScreenList);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.modifyScreen);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.modifyScreen);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.modifyRoleObject.roleName != undefined);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
        styles: [".errorColor[_ngcontent-%COMP%] {\n  color: #e6224a;\n}\n\n.form-group.required[_ngcontent-%COMP%]   .control-label[_ngcontent-%COMP%]:after {\n  content: \"*\";\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvbGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0FBRUoiLCJmaWxlIjoicm9sZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yQ29sb3J7XHJcbiAgICBjb2xvcjogI2U2MjI0YTtcclxufVxyXG4uZm9ybS1ncm91cC5yZXF1aXJlZCAuY29udHJvbC1sYWJlbDphZnRlciB7IFxyXG4gICAgY29udGVudDpcIipcIjtcclxuICAgIGNvbG9yOnJlZDtcclxuIH0iXX0= */"]
      });

      var _UsernameValidator = /*#__PURE__*/function () {
        function _UsernameValidator() {
          _classCallCheck(this, _UsernameValidator);
        }

        _createClass(_UsernameValidator, null, [{
          key: "cannotContainSpace",
          value: function cannotContainSpace(control) {
            if (control.value.indexOf(' ') >= 0) {
              return {
                cannotContainSpace: true
              };
            }

            return null;
          }
        }]);

        return _UsernameValidator;
      }();
      /***/

    },

    /***/
    19694:
    /*!**************************************************************!*\
      !*** ./src/app/views/roles/role-list/role-list.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RoleListComponent": function RoleListComponent() {
          return (
            /* binding */
            _RoleListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var src_app_shared_models_role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/models/role */
      82899);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      77382);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular-datatables */
      50481);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function RoleListComponent_tr_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RoleListComponent_tr_26_Template_a_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);

            var roles_r2 = restoredCtx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r3.getRole(roles_r2);
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

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var roles_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](roles_r2.roleName);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](roles_r2.roleDesc);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](roles_r2.authStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](roles_r2.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](12, 5, roles_r2.makerDtStamp, "medium"));
        }
      }

      function RoleListComponent_ng_container_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Please wait... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }
      }

      var _c0 = function _c0() {
        return ["active"];
      };

      var _c1 = function _c1() {
        return ["/dashboard"];
      };

      var _RoleListComponent = /*#__PURE__*/function () {
        // @ViewChildren(MatPaginator) paginator: MatPaginator;
        function _RoleListComponent(cdr, api, router, roleService) {
          _classCallCheck(this, _RoleListComponent);

          this.cdr = cdr;
          this.api = api;
          this.router = router;
          this.roleService = roleService;
          this.isLoading = false;
          this.roleCodes = new src_app_shared_models_role__WEBPACK_IMPORTED_MODULE_0__.Roles();
          this.dtOptions = {};
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        }

        _createClass(_RoleListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getRoles();
            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 5,
              processing: true,
              columnDefs: [{
                type: 'date',
                'targets': [4]
              }],
              order: [[4, 'desc']],
              lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]]
            };
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.dtTrigger.unsubscribe();
          }
        }, {
          key: "getRoles",
          value: function getRoles() {
            var _this10 = this;

            this.isLoading = true;
            this.api.getAllRoles().subscribe(function (data) {
              _this10.allRoles = data;
              _this10.isLoading = false;

              _this10.cdr.markForCheck();

              console.log(_this10.allRoles);

              _this10.dtTrigger.next(); // this.dataSource = new MatTableDataSource<Roles>( this.allRoles );
              // this.dataSource.paginator = this.paginator;

            });
          }
        }, {
          key: "getRole",
          value: function getRole(userObject) {
            this.modifyRoleObject = userObject;
            console.log('inside modify');
            console.log(this.modifyRoleObject);
            var navigationExtras = {
              queryParams: {
                'id': this.modifyRoleObject.id,
                'roleName': this.modifyRoleObject.roleName,
                'roleDesc': this.modifyRoleObject.roleDesc,
                'new1': this.modifyRoleObject.new1,
                'copy1': this.modifyRoleObject.copy1,
                'delete1': this.modifyRoleObject.delete1,
                'close1': this.modifyRoleObject.close1,
                'unlock1': this.modifyRoleObject.unlock1,
                'reopen1': this.modifyRoleObject.reopen1,
                'print1': this.modifyRoleObject.print1,
                'auth1': this.modifyRoleObject.auth1,
                'view1': this.modifyRoleObject.view1,
                'maker': this.modifyRoleObject.maker,
                'makerDtStamp': this.modifyRoleObject.makerDtStamp,
                'checkerId': this.modifyRoleObject.checkerId,
                'checkerDtStamp': this.modifyRoleObject.checkerDtStamp,
                'recordStatus': this.modifyRoleObject.recordStatus,
                'authStatus': this.modifyRoleObject.authStatus,
                'firstTimeAuth': this.modifyRoleObject.firstTimeAuth,
                'version': this.modifyRoleObject.version
              }
            };
            this.roleService.sendNavParam(navigationExtras);
            this.router.navigate(['/roles/create']); //this.router.navigate(['/roles/search'], navigationExtras);
          }
        }, {
          key: "createRole",
          value: function createRole() {
            this.router.navigate(['/roles/create']);
            var navigationExtras = {
              queryParams: {}
            };
            this.roleService.sendNavParam(navigationExtras);
          }
        }]);

        return _RoleListComponent;
      }();

      _RoleListComponent.ɵfac = function RoleListComponent_Factory(t) {
        return new (t || _RoleListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_2__.RoleService));
      };

      _RoleListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _RoleListComponent,
        selectors: [["npr-role-list"]],
        decls: 28,
        vars: 8,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "routerLinkActive", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "link-color", 2, "cursor", "pointer", 3, "click"], [1, "loading-page-center"], [1, "indicator-progress"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"]],
        template: function RoleListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Role Management");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RoleListComponent_Template_button_click_7_listener() {
              return ctx.createRole();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "New");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "table", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Role Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Role Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Auth Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Record Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, RoleListComponent_tr_26_Template, 13, 8, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, RoleListComponent_ng_container_27_Template, 5, 0, "ng-container", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.allRoles);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2xlLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    47236:
    /*!*****************************************************!*\
      !*** ./src/app/views/roles/roles-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RolesRoutingModule": function RolesRoutingModule() {
          return (
            /* binding */
            _RolesRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _role_details_role_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./role-details/role-details.component */
      54672);
      /* harmony import */


      var _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./role-list/role-list.component */
      19694);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: 'list',
        component: _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_1__.RoleListComponent
      }, {
        path: 'create',
        component: _role_details_role_details_component__WEBPACK_IMPORTED_MODULE_0__.RoleDetailsComponent
      }, {
        path: 'details/:id',
        component: _role_details_role_details_component__WEBPACK_IMPORTED_MODULE_0__.RoleDetailsComponent
      }];

      var _RolesRoutingModule = /*#__PURE__*/_createClass(function _RolesRoutingModule() {
        _classCallCheck(this, _RolesRoutingModule);
      });

      _RolesRoutingModule.ɵfac = function RolesRoutingModule_Factory(t) {
        return new (t || _RolesRoutingModule)();
      };

      _RolesRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _RolesRoutingModule
      });
      _RolesRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_RolesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    57445:
    /*!*********************************************!*\
      !*** ./src/app/views/roles/roles.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RolesModule": function RolesModule() {
          return (
            /* binding */
            _RolesModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _roles_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./roles-routing.module */
      47236);
      /* harmony import */


      var _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./role-list/role-list.component */
      19694);
      /* harmony import */


      var _role_details_role_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./role-details/role-details.component */
      54672);
      /* harmony import */


      var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/components/components.module */
      15626);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular-datatables */
      50481);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _RolesModule = /*#__PURE__*/_createClass(function _RolesModule() {
        _classCallCheck(this, _RolesModule);
      });

      _RolesModule.ɵfac = function RolesModule_Factory(t) {
        return new (t || _RolesModule)();
      };

      _RolesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _RolesModule
      });
      _RolesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule, _roles_routing_module__WEBPACK_IMPORTED_MODULE_0__.RolesRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_4__.DataTablesModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_RolesModule, {
          declarations: [_role_list_role_list_component__WEBPACK_IMPORTED_MODULE_1__.RoleListComponent, _role_details_role_details_component__WEBPACK_IMPORTED_MODULE_2__.RoleDetailsComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule, _roles_routing_module__WEBPACK_IMPORTED_MODULE_0__.RolesRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_4__.DataTablesModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_views_roles_roles_module_ts-es5.js.map