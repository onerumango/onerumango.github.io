(function () {
  "use strict";

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_system-param-maintenance_system-param-maintenance_module_ts"], {
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
    2803:
    /*!***********************************************************************************************!*\
      !*** ./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AutocompleteComponent": function AutocompleteComponent() {
          return (
            /* binding */
            _AutocompleteComponent
          );
        },

        /* harmony export */
        "AutocompleteLibComponent": function AutocompleteLibComponent() {
          return (
            /* binding */
            _AutocompleteLibComponent
          );
        },

        /* harmony export */
        "AutocompleteLibModule": function AutocompleteLibModule() {
          return (
            /* binding */
            _AutocompleteLibModule
          );
        },

        /* harmony export */
        "HighlightPipe": function HighlightPipe() {
          return (
            /* binding */
            _HighlightPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      82516);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      9170);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      80639);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/autocomplete-lib.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _c0 = ["searchInput"];
      var _c1 = ["filteredListElement"];
      var _c2 = ["historyListElement"];

      function AutocompleteComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_div_4_Template_div_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.remove($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AutocompleteComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AutocompleteComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.heading);
        }
      }

      function AutocompleteComponent_li_10_div_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      var _c3 = function _c3(a0) {
        return {
          $implicit: a0
        };
      };

      function AutocompleteComponent_li_10_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_li_10_div_1_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.select(item_r13);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_10_div_1_ng_container_1_Template, 1, 0, "ng-container", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "highlight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var idx_r14 = ctx_r21.index;
          var item_r13 = ctx_r21.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("complete-selected", idx_r14 === ctx_r15.selectedIdx);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r15.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 4, item_r13, ctx_r15.toHighlight)));
        }
      }

      function AutocompleteComponent_li_10_div_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function AutocompleteComponent_li_10_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_li_10_div_2_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.select(item_r13);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_10_div_2_ng_container_1_Template, 1, 0, "ng-container", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "highlight");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var idx_r14 = ctx_r26.index;
          var item_r13 = ctx_r26.$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("complete-selected", idx_r14 === ctx_r16.selectedIdx);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r16.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 4, item_r13, ctx_r16.toHighlight, ctx_r16.searchKeyword)));
        }
      }

      function AutocompleteComponent_li_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_10_div_1_Template, 3, 9, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutocompleteComponent_li_10_div_2_Template, 3, 10, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r13 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.isTypeString(item_r13));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.isTypeString(item_r13));
        }
      }

      function AutocompleteComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_div_12_Template_div_click_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.resetHistoryList($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.historyHeading);
        }
      }

      function AutocompleteComponent_li_15_div_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function AutocompleteComponent_li_15_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_li_15_div_1_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r34.select(item_r29);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_15_div_1_ng_container_1_Template, 1, 0, "ng-container", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var idx_r30 = ctx_r37.index;
          var item_r29 = ctx_r37.$implicit;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("complete-selected", idx_r30 === ctx_r31.selectedIdx);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r31.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, item_r29));
        }
      }

      function AutocompleteComponent_li_15_div_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function AutocompleteComponent_li_15_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_li_15_div_2_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r39.select(item_r29);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_15_div_2_ng_container_1_Template, 1, 0, "ng-container", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var idx_r30 = ctx_r42.index;
          var item_r29 = ctx_r42.$implicit;

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("complete-selected", idx_r30 === ctx_r32.selectedIdx);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r32.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, item_r29));
        }
      }

      function AutocompleteComponent_li_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_15_div_1_Template, 2, 6, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutocompleteComponent_li_15_div_2_Template, 2, 6, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_li_15_Template_div_click_3_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

            var idx_r30 = restoredCtx.index;

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r43.removeHistoryItem(idx_r30, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r29 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isTypeString(item_r29));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.isTypeString(item_r29));
        }
      }

      function AutocompleteComponent_div_16_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
        }
      }

      function AutocompleteComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_div_16_ng_container_1_Template, 1, 0, "ng-container", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r9.notFoundTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r9.notFoundText));
        }
      }

      function AutocompleteComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_div_17_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r46.handleOverlay();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c4 = function _c4(a0) {
        return {
          "active": a0
        };
      };

      var _c5 = function _c5(a0, a1) {
        return {
          "is-hidden": a0,
          "is-visible": a1
        };
      };

      var _AutocompleteLibComponent = /*#__PURE__*/function () {
        function _AutocompleteLibComponent() {
          _classCallCheck(this, _AutocompleteLibComponent);
        }
        /**
         * @return {?}
         */


        _createClass(_AutocompleteLibComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _AutocompleteLibComponent;
      }();

      _AutocompleteLibComponent.ɵfac = function AutocompleteLibComponent_Factory(t) {
        return new (t || _AutocompleteLibComponent)();
      };

      _AutocompleteLibComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AutocompleteLibComponent,
        selectors: [["ng-autocomplete-lib"]],
        decls: 2,
        vars: 0,
        template: function AutocompleteLibComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " autocomplete-lib works! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /** @nocollapse */

      _AutocompleteLibComponent.ctorParameters = function () {
        return [];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_AutocompleteLibComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'ng-autocomplete-lib',
            template: "\n    <p>\n      autocomplete-lib works!\n    </p>\n  "
          }]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/autocomplete/autocomplete.component.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * Keyboard events
       * @type {?}
       */


      var isArrowUp =
      /**
      * @param {?} keyCode
      * @return {?}
      */
      function isArrowUp(keyCode) {
        return keyCode === 38;
      };

      var ɵ0 = isArrowUp;
      /** @type {?} */

      var isArrowDown =
      /**
      * @param {?} keyCode
      * @return {?}
      */
      function isArrowDown(keyCode) {
        return keyCode === 40;
      };

      var ɵ1 = isArrowDown;
      /** @type {?} */

      var isArrowUpDown =
      /**
      * @param {?} keyCode
      * @return {?}
      */
      function isArrowUpDown(keyCode) {
        return isArrowUp(keyCode) || isArrowDown(keyCode);
      };

      var ɵ2 = isArrowUpDown;
      /** @type {?} */

      var isEnter =
      /**
      * @param {?} keyCode
      * @return {?}
      */
      function isEnter(keyCode) {
        return keyCode === 13;
      };

      var ɵ3 = isEnter;
      /** @type {?} */

      var isBackspace =
      /**
      * @param {?} keyCode
      * @return {?}
      */
      function isBackspace(keyCode) {
        return keyCode === 8;
      };

      var ɵ4 = isBackspace;
      /** @type {?} */

      var isDelete =
      /**
      * @param {?} keyCode
      * @return {?}
      */
      function isDelete(keyCode) {
        return keyCode === 46;
      };

      var ɵ5 = isDelete;
      /** @type {?} */

      var isESC =
      /**
      * @param {?} keyCode
      * @return {?}
      */
      function isESC(keyCode) {
        return keyCode === 27;
      };

      var ɵ6 = isESC;
      /** @type {?} */

      var isTab =
      /**
      * @param {?} keyCode
      * @return {?}
      */
      function isTab(keyCode) {
        return keyCode === 9;
      };

      var ɵ7 = isTab;

      var _AutocompleteComponent = /*#__PURE__*/function () {
        /**
         * @param {?} elementRef
         * @param {?} renderer
         */
        function _AutocompleteComponent(elementRef, renderer) {
          _classCallCheck(this, _AutocompleteComponent);

          this.renderer = renderer;
          this.query = ''; // search query
          // search query

          this.filteredList = []; // list of items
          // list of items

          this.historyList = []; // list of history items
          // list of history items

          this.isHistoryListVisible = true;
          this.selectedIdx = -1;
          this.toHighlight = '';
          this.notFound = false;
          this.isFocused = false;
          this.isOpen = false;
          this.isScrollToEnd = false;
          this.overlay = false;
          this.manualOpen = undefined;
          this.manualClose = undefined; // @Inputs

          /**
           * Data of items list.
           * It can be array of strings or array of objects.
           */

          this.data = []; // keyword to filter the list

          this.placeholder = '';
          this.heading = '';
          /**
           * Heading text of history list.
           * If it is null then history heading is hidden.
           */

          this.historyHeading = 'Recently selected';
          this.historyListMaxNumber = 15; // maximum number of items in the history list.
          // maximum number of items in the history list.

          this.notFoundText = 'Not found'; // set custom text when filter returns empty result
          // input disable/enable

          /**
           * The minimum number of characters the user must type before a search is performed.
           */

          this.minQueryLength = 1;
          /**
           * Focus first item in the list
           */

          this.focusFirst = false; // @Output events

          /**
           * Event that is emitted whenever an item from the list is selected.
           */

          this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /**
           * Event that is emitted whenever an input is changed.
           */

          this.inputChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /**
           * Event that is emitted whenever an input is focused.
           */

          this.inputFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /**
           * Event that is emitted whenever an input is cleared.
           */

          this.inputCleared = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /**
           * Event that is emitted when the autocomplete panel is opened.
           */

          this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /**
           * Event that is emitted when the autocomplete panel is closed.
           */

          this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /**
           * Event that is emitted when scrolled to the end of items.
           */

          this.scrolledToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /**
           * Propagates new value when model changes
           */

          this.propagateChange =
          /**
          * @return {?}
          */
          function () {};

          this.onTouched =
          /**
          * @return {?}
          */
          function () {};

          this.elementRef = elementRef;
        }
        /**
         * Writes a new value from the form model into the view,
         * Updates model
         * @param {?=} value
         * @return {?}
         */


        _createClass(_AutocompleteComponent, [{
          key: "writeValue",
          value: function writeValue() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            this.query = value && !this.isTypeString(value) ? value[this.searchKeyword] : value;
          }
          /**
           * Registers a handler that is called when something in the view has changed
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.propagateChange = fn;
          }
          /**
           * Registers a handler specifically for when a control receives a touch event
           * @param {?} fn
           * @return {?}
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Event that is called when the value of an input element is changed
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "onChange",
          value: function onChange(event) {
            this.propagateChange(event.target.value);
          }
          /**
           * Event that is called when the control status changes to or from DISABLED
           * @param {?} isDisabled
           * @return {?}
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;
          }
          /**
           * @return {?}
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * @return {?}
           */

        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.initEventStream();
            this.handleScroll();
          }
          /**
           * Set initial value
           * @param {?} value
           * @return {?}
           */

        }, {
          key: "setInitialValue",
          value: function setInitialValue(value) {
            if (this.initialValue) {
              this.select(value);
            }
          }
          /**
           * Update search results
           * @param {?} changes
           * @return {?}
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this.setInitialValue(this.initialValue);

            if (changes && changes.data && Array.isArray(changes.data.currentValue)) {
              this.handleItemsChange();

              if (!changes.data.firstChange && this.isFocused) {
                this.handleOpen();
              }
            }
          }
          /**
           * Items change
           * @return {?}
           */

        }, {
          key: "handleItemsChange",
          value: function handleItemsChange() {
            this.isScrollToEnd = false;

            if (!this.isOpen) {
              return;
            }

            this.filteredList = this.data;
            this.notFound = !this.filteredList || this.filteredList.length === 0; // Filter list when updating data and panel is open

            if (this.isOpen) {
              this.filterList();
            }
          }
          /**
           * Filter data
           * @return {?}
           */

        }, {
          key: "filterList",
          value: function filterList() {
            this.selectedIdx = -1;
            this.initSearchHistory();

            if (this.query != null && this.data) {
              this.toHighlight = this.query;
              this.filteredList = this.customFilter !== undefined ? this.customFilter(_toConsumableArray(this.data), this.query) : this.defaultFilterFunction(); // If [focusFirst]="true" automatically focus the first match

              if (this.filteredList.length > 0 && this.focusFirst) {
                this.selectedIdx = 0;
              }
            } else {
              this.notFound = false;
            }
          }
          /**
           * Default filter function, used unless customFilter is provided
           * @return {?}
           */

        }, {
          key: "defaultFilterFunction",
          value: function defaultFilterFunction() {
            var _this2 = this;

            return this.data.filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              if (typeof item === 'string') {
                // string logic, check equality of strings
                return item.toLowerCase().indexOf(_this2.query.toLowerCase()) > -1;
              } else if (typeof item === 'object' && item instanceof Object) {
                // object logic, check property equality
                return item[_this2.searchKeyword].toLowerCase().indexOf(_this2.query.toLowerCase()) > -1;
              }
            });
          }
          /**
           * Check if item is a string in the list.
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "isTypeString",
          value: function isTypeString(item) {
            return typeof item === 'string';
          }
          /**
           * Select item in the list.
           * @param {?} item
           * @return {?}
           */

        }, {
          key: "select",
          value: function select(item) {
            var _this3 = this;

            this.query = !this.isTypeString(item) ? item[this.searchKeyword] : item;
            this.isOpen = true;
            this.overlay = false;
            this.selected.emit(item);
            this.propagateChange(item);

            if (this.initialValue) {
              // check if history already exists in localStorage and then update

              /** @type {?} */
              var history = window.localStorage.getItem("".concat(this.historyIdentifier));

              if (history) {
                /** @type {?} */
                var existingHistory = JSON.parse(localStorage["".concat(this.historyIdentifier)]);
                if (!(existingHistory instanceof Array)) existingHistory = []; // check if selected item exists in existingHistory

                if (!existingHistory.some(
                /**
                * @param {?} existingItem
                * @return {?}
                */
                function (existingItem) {
                  return !_this3.isTypeString(existingItem) ? existingItem[_this3.searchKeyword] == item[_this3.searchKeyword] : existingItem == item;
                })) {
                  existingHistory.unshift(item);
                  localStorage.setItem("".concat(this.historyIdentifier), JSON.stringify(existingHistory)); // check if items don't exceed max allowed number

                  if (existingHistory.length >= this.historyListMaxNumber) {
                    existingHistory.splice(existingHistory.length - 1, 1);
                    localStorage.setItem("".concat(this.historyIdentifier), JSON.stringify(existingHistory));
                  }
                } else {
                  // if selected item exists in existingHistory swap to top in array
                  if (!this.isTypeString(item)) {
                    // object logic

                    /** @type {?} */
                    var copiedExistingHistory = existingHistory.slice(); // copy original existingHistory array

                    /** @type {?} */

                    var selectedIndex = copiedExistingHistory.map(
                    /**
                    * @param {?} el
                    * @return {?}
                    */
                    function (el) {
                      return el[_this3.searchKeyword];
                    }).indexOf(item[this.searchKeyword]);
                    copiedExistingHistory.splice(selectedIndex, 1);
                    copiedExistingHistory.splice(0, 0, item);
                    localStorage.setItem("".concat(this.historyIdentifier), JSON.stringify(copiedExistingHistory));
                  } else {
                    // string logic

                    /** @type {?} */
                    var _copiedExistingHistory = existingHistory.slice();

                    _copiedExistingHistory.splice(_copiedExistingHistory.indexOf(item), 1);

                    _copiedExistingHistory.splice(0, 0, item);

                    localStorage.setItem("".concat(this.historyIdentifier), JSON.stringify(_copiedExistingHistory));
                  }
                }
              } else {
                this.saveHistory(item);
              }
            } else {
              this.saveHistory(item);
            }

            this.handleClose();
          }
          /**
           * Document click
           * @param {?} e event
           * @return {?}
           */

        }, {
          key: "handleClick",
          value: function handleClick(e) {
            /** @type {?} */
            var clickedComponent = e.target;
            /** @type {?} */

            var inside = false;

            do {
              if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;

                if (this.filteredList.length) {
                  this.handleOpen();
                }
              }

              clickedComponent = clickedComponent.parentNode;
            } while (clickedComponent);

            if (!inside) {
              this.handleClose();
            }
          }
          /**
           * Handle body overlay
           * @return {?}
           */

        }, {
          key: "handleOverlay",
          value: function handleOverlay() {
            this.overlay = false;
          }
          /**
           * Scroll items
           * @return {?}
           */

        }, {
          key: "handleScroll",
          value: function handleScroll() {
            var _this4 = this;

            this.renderer.listen(this.filteredListElement.nativeElement, 'scroll',
            /**
            * @return {?}
            */
            function () {
              _this4.scrollToEnd();
            });
          }
          /**
           * Define panel state
           * @param {?} event
           * @return {?}
           */

        }, {
          key: "setPanelState",
          value: function setPanelState(event) {
            if (event) {
              event.stopPropagation();
            } // If controls are untouched


            if (typeof this.manualOpen === 'undefined' && typeof this.manualClose === 'undefined') {
              this.isOpen = false;
              this.handleOpen();
            } // If one of the controls is untouched and other is deactivated


            if (typeof this.manualOpen === 'undefined' && this.manualClose === false || typeof this.manualClose === 'undefined' && this.manualOpen === false) {
              this.isOpen = false;
              this.handleOpen();
            } // if controls are touched but both are deactivated


            if (this.manualOpen === false && this.manualClose === false) {
              this.isOpen = false;
              this.handleOpen();
            } // if open control is touched and activated


            if (this.manualOpen) {
              this.isOpen = false;
              this.handleOpen();
              this.manualOpen = false;
            } // if close control is touched and activated


            if (this.manualClose) {
              this.isOpen = true;
              this.handleClose();
              this.manualClose = false;
            }
          }
          /**
           * Manual controls
           * @return {?}
           */

        }, {
          key: "open",
          value: function open() {
            this.manualOpen = true;
            this.isOpen = false;
            this.handleOpen();
          }
          /**
           * @return {?}
           */

        }, {
          key: "close",
          value: function close() {
            this.manualClose = true;
            this.isOpen = true;
            this.handleClose();
          }
          /**
           * @return {?}
           */

        }, {
          key: "focus",
          value: function focus() {
            this.handleFocus(event);
          }
          /**
           * @return {?}
           */

        }, {
          key: "clear",
          value: function clear() {
            this.remove(event);
          }
          /**
           * Remove search query
           * @param {?} e
           * @return {?}
           */

        }, {
          key: "remove",
          value: function remove(e) {
            e.stopPropagation();
            this.query = '';
            this.inputCleared.emit();
            this.propagateChange(this.query);
            this.setPanelState(e);

            if (this.data && !this.data.length) {
              this.notFound = false;
            }
          }
          /**
           * Initialize historyList search
           * @return {?}
           */

        }, {
          key: "initSearchHistory",
          value: function initSearchHistory() {
            this.isHistoryListVisible = false;

            if (this.historyIdentifier && !this.query) {
              /** @type {?} */
              var history = window.localStorage.getItem("".concat(this.historyIdentifier));

              if (history) {
                this.isHistoryListVisible = true;
                this.filteredList = [];
                this.historyList = history ? JSON.parse(history) : [];
              } else {
                this.isHistoryListVisible = false;
              }
            } else {
              this.isHistoryListVisible = false;
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "handleOpen",
          value: function handleOpen() {
            if (this.isOpen || this.isOpen && !this.isLoading) {
              return;
            } // If data exists


            if (this.data && this.data.length) {
              this.isOpen = true;
              this.overlay = true;
              this.filterList();
              this.opened.emit();
            }
          }
          /**
           * @return {?}
           */

        }, {
          key: "handleClose",
          value: function handleClose() {
            if (!this.isOpen) {
              this.isFocused = false;
              return;
            }

            this.isOpen = false;
            this.overlay = false;
            this.filteredList = [];
            this.selectedIdx = -1;
            this.notFound = false;
            this.isHistoryListVisible = false;
            this.isFocused = false;
            this.closed.emit();
          }
          /**
           * @param {?} e
           * @return {?}
           */

        }, {
          key: "handleFocus",
          value: function handleFocus(e) {
            this.searchInput.nativeElement.focus();

            if (this.isFocused) {
              return;
            }

            this.inputFocused.emit(e); // if data exists then open

            if (this.data && this.data.length) {
              this.setPanelState(event);
            }

            this.isFocused = true;
          }
          /**
           * @return {?}
           */

        }, {
          key: "scrollToEnd",
          value: function scrollToEnd() {
            if (this.isScrollToEnd) {
              return;
            }
            /** @type {?} */


            var scrollTop = this.filteredListElement.nativeElement.scrollTop;
            /** @type {?} */

            var scrollHeight = this.filteredListElement.nativeElement.scrollHeight;
            /** @type {?} */

            var elementHeight = this.filteredListElement.nativeElement.clientHeight;
            /** @type {?} */

            var atBottom = scrollHeight === scrollTop + elementHeight;

            if (atBottom) {
              this.scrolledToEnd.emit();
              this.isScrollToEnd = true;
            }
          }
          /**
           * Initialize keyboard events
           * @return {?}
           */

        }, {
          key: "initEventStream",
          value: function initEventStream() {
            this.inputKeyUp$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(this.searchInput.nativeElement, 'keyup').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              return e;
            }));
            this.inputKeyDown$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(this.searchInput.nativeElement, 'keydown').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              return e;
            }));
            this.listenEventStream();
          }
          /**
           * Listen keyboard events
           * @return {?}
           */

        }, {
          key: "listenEventStream",
          value: function listenEventStream() {
            var _this5 = this;

            // key up event
            this.inputKeyUp$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              return !isArrowUpDown(e.keyCode) && !isEnter(e.keyCode) && !isESC(e.keyCode) && !isTab(e.keyCode);
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(this.debounceTime)).subscribe(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              _this5.onKeyUp(e);
            }); // cursor up & down

            this.inputKeyDown$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              return isArrowUpDown(e.keyCode);
            })).subscribe(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              e.preventDefault();

              _this5.onFocusItem(e);
            }); // enter keyup

            this.inputKeyUp$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              return isEnter(e.keyCode);
            })).subscribe(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {//this.onHandleEnter();
            }); // enter keydown

            this.inputKeyDown$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              return isEnter(e.keyCode);
            })).subscribe(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              _this5.onHandleEnter();
            }); // ESC

            this.inputKeyUp$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              return isESC(e.keyCode);
            }, (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(100))).subscribe(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              _this5.onEsc();
            }); // TAB

            this.inputKeyDown$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              return isTab(e.keyCode);
            })).subscribe(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              _this5.onTab();
            }); // delete

            this.inputKeyDown$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              return isBackspace(e.keyCode) || isDelete(e.keyCode);
            })).subscribe(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              _this5.onDelete();
            });
          }
          /**
           * on keyup == when input changed
           * @param {?} e event
           * @return {?}
           */

        }, {
          key: "onKeyUp",
          value: function onKeyUp(e) {
            this.notFound = false; // search results are unknown while typing
            // if input is empty

            if (!this.query) {
              this.notFound = false;
              this.inputChanged.emit(e.target.value);
              this.inputCleared.emit();
              this.setPanelState(e);
            } // note that '' can be a valid query


            if (!this.query && this.query !== '') {
              return;
            } // if query >= to minQueryLength


            if (this.query.length >= this.minQueryLength) {
              this.inputChanged.emit(e.target.value);
              this.filterList(); // If no results found

              if (!this.filteredList.length && !this.isLoading) {
                this.notFoundText ? this.notFound = true : this.notFound = false;
              }

              if (this.data && !this.data.length) {
                this.isOpen = true;
              }
            }
          }
          /**
           * Keyboard arrow top and arrow bottom
           * @param {?} e event
           * @return {?}
           */

        }, {
          key: "onFocusItem",
          value: function onFocusItem(e) {
            // move arrow up and down on filteredList or historyList
            if (!this.historyList.length || !this.isHistoryListVisible) {
              // filteredList

              /** @type {?} */
              var totalNumItem = this.filteredList.length;

              if (e.key === 'ArrowDown') {
                /** @type {?} */
                var sum = this.selectedIdx;
                sum = this.selectedIdx === null ? 0 : sum + 1;
                this.selectedIdx = (totalNumItem + sum) % totalNumItem;
                this.scrollToFocusedItem(this.selectedIdx);
              } else if (e.key === 'ArrowUp') {
                if (this.selectedIdx == -1) {
                  this.selectedIdx = 0;
                }

                this.selectedIdx = (totalNumItem + this.selectedIdx - 1) % totalNumItem;
                this.scrollToFocusedItem(this.selectedIdx);
              }
            } else {
              // historyList

              /** @type {?} */
              var _totalNumItem = this.historyList.length;

              if (e.key === 'ArrowDown') {
                /** @type {?} */
                var _sum = this.selectedIdx;
                _sum = this.selectedIdx === null ? 0 : _sum + 1;
                this.selectedIdx = (_totalNumItem + _sum) % _totalNumItem;
                this.scrollToFocusedItem(this.selectedIdx);
              } else if (e.key === 'ArrowUp') {
                if (this.selectedIdx == -1) {
                  this.selectedIdx = 0;
                }

                this.selectedIdx = (_totalNumItem + this.selectedIdx - 1) % _totalNumItem;
                this.scrollToFocusedItem(this.selectedIdx);
              }
            }
          }
          /**
           * Scroll to focused item
           * * \@param index
           * @param {?} index
           * @return {?}
           */

        }, {
          key: "scrollToFocusedItem",
          value: function scrollToFocusedItem(index) {
            /** @type {?} */
            var listElement = null; // Define list element

            if (!this.historyList.length || !this.isHistoryListVisible) {
              // filteredList element
              listElement = this.filteredListElement.nativeElement;
            } else {
              // historyList element
              listElement = this.historyListElement.nativeElement;
            }
            /** @type {?} */


            var items = Array.prototype.slice.call(listElement.childNodes).filter(
            /**
            * @param {?} node
            * @return {?}
            */
            function (node) {
              if (node.nodeType === 1) {
                // if node is element
                return node.className.includes('item');
              } else {
                return false;
              }
            });

            if (!items.length) {
              return;
            }
            /** @type {?} */


            var listHeight = listElement.offsetHeight;
            /** @type {?} */

            var itemHeight = items[index].offsetHeight;
            /** @type {?} */

            var visibleTop = listElement.scrollTop;
            /** @type {?} */

            var visibleBottom = listElement.scrollTop + listHeight - itemHeight;
            /** @type {?} */

            var targetPosition = items[index].offsetTop;

            if (targetPosition < visibleTop) {
              listElement.scrollTop = targetPosition;
            }

            if (targetPosition > visibleBottom) {
              listElement.scrollTop = targetPosition - listHeight + itemHeight;
            }
          }
          /**
           * Select item on enter click
           * @return {?}
           */

        }, {
          key: "onHandleEnter",
          value: function onHandleEnter() {
            // click enter to choose item from filteredList or historyList
            if (this.selectedIdx > -1) {
              if (!this.historyList.length || !this.isHistoryListVisible) {
                // filteredList
                this.query = !this.isTypeString(this.filteredList[this.selectedIdx]) ? this.filteredList[this.selectedIdx][this.searchKeyword] : this.filteredList[this.selectedIdx];
                this.saveHistory(this.filteredList[this.selectedIdx]);
                this.select(this.filteredList[this.selectedIdx]);
              } else {
                // historyList
                this.query = !this.isTypeString(this.historyList[this.selectedIdx]) ? this.historyList[this.selectedIdx][this.searchKeyword] : this.historyList[this.selectedIdx];
                this.saveHistory(this.historyList[this.selectedIdx]);
                this.select(this.historyList[this.selectedIdx]);
              }
            }

            this.isHistoryListVisible = false;
            this.handleClose();
          }
          /**
           * Esc click
           * @return {?}
           */

        }, {
          key: "onEsc",
          value: function onEsc() {
            this.searchInput.nativeElement.blur();
            this.handleClose();
          }
          /**
           * Tab click
           * @return {?}
           */

        }, {
          key: "onTab",
          value: function onTab() {
            this.searchInput.nativeElement.blur();
            this.handleClose();
          }
          /**
           * Delete click
           * @return {?}
           */

        }, {
          key: "onDelete",
          value: function onDelete() {
            this.isOpen = true;
          }
          /**
           * Select item to save in localStorage
           * @param {?} selected
           * @return {?}
           */

        }, {
          key: "saveHistory",
          value: function saveHistory(selected) {
            var _this6 = this;

            if (this.historyIdentifier) {
              // check if selected item exists in historyList
              if (!this.historyList.some(
              /**
              * @param {?} item
              * @return {?}
              */
              function (item) {
                return !_this6.isTypeString(item) ? item[_this6.searchKeyword] == selected[_this6.searchKeyword] : item == selected;
              })) {
                this.saveHistoryToLocalStorage([selected].concat(_toConsumableArray(this.historyList))); // check if items don't exceed max allowed number

                if (this.historyList.length >= this.historyListMaxNumber) {
                  this.historyList.splice(this.historyList.length - 1, 1);
                  this.saveHistoryToLocalStorage([selected].concat(_toConsumableArray(this.historyList)));
                }
              } else {
                // if selected item exists in historyList swap to top in array
                if (!this.isTypeString(selected)) {
                  // object logic

                  /** @type {?} */
                  var copiedHistoryList = this.historyList.slice(); // copy original historyList array

                  /** @type {?} */

                  var selectedIndex = copiedHistoryList.map(
                  /**
                  * @param {?} item
                  * @return {?}
                  */
                  function (item) {
                    return item[_this6.searchKeyword];
                  }).indexOf(selected[this.searchKeyword]);
                  copiedHistoryList.splice(selectedIndex, 1);
                  copiedHistoryList.splice(0, 0, selected);
                  this.saveHistoryToLocalStorage(_toConsumableArray(copiedHistoryList));
                } else {
                  // string logic

                  /** @type {?} */
                  var _copiedHistoryList = this.historyList.slice();

                  _copiedHistoryList.splice(this.historyList.indexOf(selected), 1);

                  _copiedHistoryList.splice(0, 0, selected);

                  this.saveHistoryToLocalStorage(_toConsumableArray(_copiedHistoryList));
                }
              }
            }
          }
          /**
           * Save item in localStorage
           * @param {?} selected
           * @return {?}
           */

        }, {
          key: "saveHistoryToLocalStorage",
          value: function saveHistoryToLocalStorage(selected) {
            window.localStorage.setItem("".concat(this.historyIdentifier), JSON.stringify(selected));
          }
          /**
           * Remove item from localStorage
           * @param {?} index
           * @param {?} e event
           * @return {?}
           */

        }, {
          key: "removeHistoryItem",
          value: function removeHistoryItem(index, e) {
            e.stopPropagation();
            this.historyList = this.historyList.filter(
            /**
            * @param {?} v
            * @param {?} i
            * @return {?}
            */
            function (v, i) {
              return i !== index;
            });
            this.saveHistoryToLocalStorage(this.historyList);

            if (this.historyList.length == 0) {
              window.localStorage.removeItem("".concat(this.historyIdentifier));
              this.filterList();
            }
          }
          /**
           * Reset localStorage
           * @param {?} e event
           * @return {?}
           */

        }, {
          key: "resetHistoryList",
          value: function resetHistoryList(e) {
            e.stopPropagation();
            this.historyList = [];
            window.localStorage.removeItem("".concat(this.historyIdentifier));
            this.filterList();
          }
        }]);

        return _AutocompleteComponent;
      }();

      _AutocompleteComponent.ɵfac = function AutocompleteComponent_Factory(t) {
        return new (t || _AutocompleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
      };

      _AutocompleteComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AutocompleteComponent,
        selectors: [["ng-autocomplete"]],
        contentQueries: function AutocompleteComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customTemplate = _t.first);
          }
        },
        viewQuery: function AutocompleteComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.filteredListElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.historyListElement = _t.first);
          }
        },
        hostAttrs: [1, "ng-autocomplete"],
        hostBindings: function AutocompleteComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_click_HostBindingHandler($event) {
              return ctx.handleClick($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
          }
        },
        inputs: {
          data: "data",
          placeholder: "placeholder",
          heading: "heading",
          historyHeading: "historyHeading",
          historyListMaxNumber: "historyListMaxNumber",
          notFoundText: "notFoundText",
          minQueryLength: "minQueryLength",
          focusFirst: "focusFirst",
          disabled: "disabled",
          searchKeyword: "searchKeyword",
          initialValue: "initialValue",
          historyIdentifier: "historyIdentifier",
          isLoading: "isLoading",
          debounceTime: "debounceTime",
          customFilter: "customFilter",
          itemTemplate: "itemTemplate",
          notFoundTemplate: "notFoundTemplate"
        },
        outputs: {
          selected: "selected",
          inputChanged: "inputChanged",
          inputFocused: "inputFocused",
          inputCleared: "inputCleared",
          opened: "opened",
          closed: "closed",
          scrolledToEnd: "scrolledToEnd"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
          useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
          /**
          * @return {?}
          */
          function () {
            return _AutocompleteComponent;
          }),
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 18,
        vars: 22,
        consts: [[1, "autocomplete-container", 3, "ngClass"], [1, "input-container"], ["type", "text", "autocomplete", "off", 3, "placeholder", "ngModel", "disabled", "ngModelChange", "input", "focus", "blur"], ["searchInput", ""], ["class", "x", 3, "click", 4, "ngIf"], ["class", "sk-fading-circle", 4, "ngIf"], [1, "suggestions-container", 3, "ngClass"], ["class", "heading", 4, "ngIf"], ["filteredListElement", ""], ["class", "item", 4, "ngFor", "ngForOf"], ["historyListElement", ""], ["class", "not-found", 4, "ngIf"], ["class", "autocomplete-overlay", 3, "click", 4, "ngIf"], [1, "x", 3, "click"], [1, "material-icons"], [1, "sk-fading-circle"], [1, "sk-circle1", "sk-circle"], [1, "sk-circle2", "sk-circle"], [1, "sk-circle3", "sk-circle"], [1, "sk-circle4", "sk-circle"], [1, "sk-circle5", "sk-circle"], [1, "sk-circle6", "sk-circle"], [1, "sk-circle7", "sk-circle"], [1, "sk-circle8", "sk-circle"], [1, "sk-circle9", "sk-circle"], [1, "sk-circle10", "sk-circle"], [1, "sk-circle11", "sk-circle"], [1, "sk-circle12", "sk-circle"], [1, "heading"], [1, "text"], [1, "item"], [3, "complete-selected", "click", 4, "ngIf"], [3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "not-found"], [1, "autocomplete-overlay", 3, "click"]],
        template: function AutocompleteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AutocompleteComponent_Template_input_ngModelChange_2_listener($event) {
              return ctx.query = $event;
            })("input", function AutocompleteComponent_Template_input_input_2_listener($event) {
              return ctx.onChange($event);
            })("focus", function AutocompleteComponent_Template_input_focus_2_listener($event) {
              return ctx.handleFocus($event);
            })("blur", function AutocompleteComponent_Template_input_blur_2_listener($event) {
              return ctx.onTouched($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AutocompleteComponent_div_4_Template, 3, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AutocompleteComponent_div_5_Template, 13, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AutocompleteComponent_div_7_Template, 3, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", null, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AutocompleteComponent_li_10_Template, 3, 2, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AutocompleteComponent_div_12_Template, 6, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", null, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AutocompleteComponent_li_15_Template, 6, 2, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AutocompleteComponent_div_16_Template, 2, 4, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AutocompleteComponent_div_17_Template, 1, 0, "div", 12);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c4, ctx.isOpen));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.placeholder);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query)("disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.query && !ctx.isLoading && !ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c5, ctx.isHistoryListVisible, !ctx.isHistoryListVisible));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filteredList.length > 0 && ctx.heading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](19, _c5, !ctx.isHistoryListVisible, ctx.isHistoryListVisible));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.historyList.length > 0 && ctx.historyHeading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.historyList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading ? !ctx.isLoading && ctx.notFound : ctx.notFound);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.overlay);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet];
        },
        pipes: function pipes() {
          return [_HighlightPipe];
        },
        styles: ["@import url(https://fonts.googleapis.com/icon?family=Material+Icons);.ng-autocomplete{width:600px}.autocomplete-container{box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);position:relative;overflow:visible;height:40px}.autocomplete-container .input-container input{font-size:14px;box-sizing:border-box;border:none;box-shadow:none;outline:0;background-color:#fff;color:rgba(0,0,0,.87);width:100%;padding:0 15px;line-height:40px;height:40px}.autocomplete-container .input-container input:disabled{background-color:#eee;color:#666}.autocomplete-container .input-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.autocomplete-container .input-container .x i{color:rgba(0,0,0,.54);font-size:22px;vertical-align:middle}.autocomplete-container .suggestions-container{position:absolute;width:100%;background:#fff;height:auto;box-shadow:0 2px 5px rgba(0,0,0,.25);box-sizing:border-box}.autocomplete-container .suggestions-container ul{padding:0;margin:0;max-height:240px;overflow-y:auto}.autocomplete-container .suggestions-container ul li{position:relative;list-style:none;padding:0;margin:0;cursor:pointer}.autocomplete-container .suggestions-container ul li a{padding:14px 15px;display:block;text-decoration:none;cursor:pointer;color:rgba(0,0,0,.87);font-size:15px}.autocomplete-container .suggestions-container .complete-selected,.autocomplete-container .suggestions-container ul li:hover{background-color:rgba(158,158,158,.18)}.autocomplete-container .suggestions-container .heading{position:relative;padding:10px 15px;border:1px solid #f1f1f1}.autocomplete-container .suggestions-container .heading .text{font-size:.85em}.autocomplete-container .suggestions-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.autocomplete-container .suggestions-container .x i{color:rgba(0,0,0,.54);font-size:18px;vertical-align:middle}.autocomplete-container .suggestions-container.is-hidden{visibility:hidden}.autocomplete-container .suggestions-container.is-visible{visibility:visible}.autocomplete-container .not-found{padding:0 .75em;border:1px solid #f1f1f1;background:#fff}.autocomplete-container .not-found div{padding:.4em 0;font-size:.95em;line-height:1.4;border-bottom:1px solid rgba(230,230,230,.7)}.autocomplete-container.active{z-index:999}.highlight{font-weight:700}.autocomplete-overlay{position:fixed;background-color:transparent;width:100%;height:100%;top:0;right:0;bottom:0;left:0;z-index:50}input[type=text]::-ms-clear{display:none}.sk-fading-circle{width:20px;height:20px;position:absolute;right:10px;top:0;bottom:0;margin:auto}.sk-fading-circle .sk-circle{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle .sk-circle:before{content:\"\";display:block;margin:0 auto;width:15%;height:15%;background-color:#333;border-radius:100%;-webkit-animation:1.2s ease-in-out infinite both sk-circleFadeDelay;animation:1.2s ease-in-out infinite both sk-circleFadeDelay}.sk-fading-circle .sk-circle2{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.sk-fading-circle .sk-circle3{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.sk-fading-circle .sk-circle4{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.sk-fading-circle .sk-circle5{-webkit-transform:rotate(120deg);transform:rotate(120deg)}.sk-fading-circle .sk-circle6{-webkit-transform:rotate(150deg);transform:rotate(150deg)}.sk-fading-circle .sk-circle7{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.sk-fading-circle .sk-circle8{-webkit-transform:rotate(210deg);transform:rotate(210deg)}.sk-fading-circle .sk-circle9{-webkit-transform:rotate(240deg);transform:rotate(240deg)}.sk-fading-circle .sk-circle10{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.sk-fading-circle .sk-circle11{-webkit-transform:rotate(300deg);transform:rotate(300deg)}.sk-fading-circle .sk-circle12{-webkit-transform:rotate(330deg);transform:rotate(330deg)}.sk-fading-circle .sk-circle2:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-fading-circle .sk-circle3:before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-fading-circle .sk-circle4:before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-fading-circle .sk-circle5:before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-fading-circle .sk-circle6:before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-fading-circle .sk-circle7:before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-fading-circle .sk-circle8:before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-fading-circle .sk-circle9:before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-fading-circle .sk-circle10:before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-fading-circle .sk-circle11:before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-fading-circle .sk-circle12:before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes sk-circleFadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}@keyframes sk-circleFadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}"],
        encapsulation: 2
      });
      /** @nocollapse */

      _AutocompleteComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
        }];
      };

      _AutocompleteComponent.propDecorators = {
        searchInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['searchInput']
        }],
        filteredListElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['filteredListElement']
        }],
        historyListElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['historyListElement']
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        searchKeyword: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        heading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        initialValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        historyIdentifier: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        historyHeading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        historyListMaxNumber: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        notFoundText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        isLoading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        debounceTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        minQueryLength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        focusFirst: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        customFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        inputChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        inputFocused: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        inputCleared: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        opened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        closed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        scrolledToEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        itemTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        notFoundTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_AutocompleteComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'ng-autocomplete',
            template: "<div class=\"autocomplete-container\"\n     [ngClass]=\"{ 'active': isOpen}\">\n  <div class=\"input-container\">\n    <input #searchInput\n           type=\"text\"\n           placeholder={{placeholder}}\n           [(ngModel)]=query\n           (input)=\"onChange($event)\"\n           (focus)=handleFocus($event)\n           (blur)=onTouched($event)\n           [disabled]=\"disabled\"\n           autocomplete=\"off\">\n    <div class=\"x\" *ngIf=\"query && !isLoading && !disabled\" (click)=\"remove($event)\">\n      <i class=\"material-icons\">close</i>\n    </div>\n    <!--Loading mask-->\n    <div class=\"sk-fading-circle\" *ngIf=\"isLoading\">\n      <div class=\"sk-circle1 sk-circle\"></div>\n      <div class=\"sk-circle2 sk-circle\"></div>\n      <div class=\"sk-circle3 sk-circle\"></div>\n      <div class=\"sk-circle4 sk-circle\"></div>\n      <div class=\"sk-circle5 sk-circle\"></div>\n      <div class=\"sk-circle6 sk-circle\"></div>\n      <div class=\"sk-circle7 sk-circle\"></div>\n      <div class=\"sk-circle8 sk-circle\"></div>\n      <div class=\"sk-circle9 sk-circle\"></div>\n      <div class=\"sk-circle10 sk-circle\"></div>\n      <div class=\"sk-circle11 sk-circle\"></div>\n      <div class=\"sk-circle12 sk-circle\"></div>\n    </div>\n  </div>\n\n  <!--FilteredList items-->\n  <div class=\"suggestions-container\"\n       [ngClass]=\"{ 'is-hidden': isHistoryListVisible, 'is-visible': !isHistoryListVisible}\">\n    <!--FilteredList heading-->\n    <div class=\"heading\" *ngIf=\"filteredList.length > 0 && heading\">\n      <div class=\"text\">{{heading}}</div>\n    </div>\n\n    <ul #filteredListElement>\n      <li *ngFor=\"let item of filteredList; let idx = index\" class=\"item\">\n        <!--string logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='isTypeString(item)'\n             (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate;  context: { $implicit: item | highlight: toHighlight }\">\n          </ng-container>\n        </div>\n        <!--object logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='!isTypeString(item)'\n             (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate; context: { $implicit: item | highlight: toHighlight : searchKeyword }\">\n          </ng-container>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <!--HistoryList items-->\n  <div class=\"suggestions-container\"\n       [ngClass]=\"{ 'is-hidden': !isHistoryListVisible, 'is-visible': isHistoryListVisible}\">\n    <!--HistoryList heading-->\n    <div class=\"heading\" *ngIf=\"historyList.length > 0 && historyHeading\">\n      <div class=\"text\">{{historyHeading}}</div>\n      <div class=\"x\" (click)=\"resetHistoryList($event)\">\n        <i class=\"material-icons\">delete</i>\n      </div>\n    </div>\n\n    <ul #historyListElement>\n      <li *ngFor=\"let item of historyList; let idx = index\" class=\"item\">\n        <!--string logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='isTypeString(item)' (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate;  context: { $implicit: item }\">\n          </ng-container>\n        </div>\n        <!--object logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='!isTypeString(item)' (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate; context: { $implicit: item }\">\n          </ng-container>\n        </div>\n        <div class=\"x\" (click)=\"removeHistoryItem(idx, $event)\">\n          <i class=\"material-icons\">close</i>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <!--Not found-->\n  <div class=\"not-found\" *ngIf=\"isLoading ? !isLoading && notFound : notFound\">\n    <ng-container\n      *ngTemplateOutlet=\"notFoundTemplate;  context: { $implicit: notFoundText  }\">\n    </ng-container>\n  </div>\n</div>\n<div class=\"autocomplete-overlay\" *ngIf=\"overlay\" (click)=\"handleOverlay()\"></div>\n",
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
              useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
              /**
              * @return {?}
              */
              function () {
                return _AutocompleteComponent;
              }),
              multi: true
            }],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            host: {
              '(document:click)': 'handleClick($event)',
              'class': 'ng-autocomplete'
            },
            styles: ["@import url(https://fonts.googleapis.com/icon?family=Material+Icons);.ng-autocomplete{width:600px}.autocomplete-container{box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);position:relative;overflow:visible;height:40px}.autocomplete-container .input-container input{font-size:14px;box-sizing:border-box;border:none;box-shadow:none;outline:0;background-color:#fff;color:rgba(0,0,0,.87);width:100%;padding:0 15px;line-height:40px;height:40px}.autocomplete-container .input-container input:disabled{background-color:#eee;color:#666}.autocomplete-container .input-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.autocomplete-container .input-container .x i{color:rgba(0,0,0,.54);font-size:22px;vertical-align:middle}.autocomplete-container .suggestions-container{position:absolute;width:100%;background:#fff;height:auto;box-shadow:0 2px 5px rgba(0,0,0,.25);box-sizing:border-box}.autocomplete-container .suggestions-container ul{padding:0;margin:0;max-height:240px;overflow-y:auto}.autocomplete-container .suggestions-container ul li{position:relative;list-style:none;padding:0;margin:0;cursor:pointer}.autocomplete-container .suggestions-container ul li a{padding:14px 15px;display:block;text-decoration:none;cursor:pointer;color:rgba(0,0,0,.87);font-size:15px}.autocomplete-container .suggestions-container .complete-selected,.autocomplete-container .suggestions-container ul li:hover{background-color:rgba(158,158,158,.18)}.autocomplete-container .suggestions-container .heading{position:relative;padding:10px 15px;border:1px solid #f1f1f1}.autocomplete-container .suggestions-container .heading .text{font-size:.85em}.autocomplete-container .suggestions-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.autocomplete-container .suggestions-container .x i{color:rgba(0,0,0,.54);font-size:18px;vertical-align:middle}.autocomplete-container .suggestions-container.is-hidden{visibility:hidden}.autocomplete-container .suggestions-container.is-visible{visibility:visible}.autocomplete-container .not-found{padding:0 .75em;border:1px solid #f1f1f1;background:#fff}.autocomplete-container .not-found div{padding:.4em 0;font-size:.95em;line-height:1.4;border-bottom:1px solid rgba(230,230,230,.7)}.autocomplete-container.active{z-index:999}.highlight{font-weight:700}.autocomplete-overlay{position:fixed;background-color:transparent;width:100%;height:100%;top:0;right:0;bottom:0;left:0;z-index:50}input[type=text]::-ms-clear{display:none}.sk-fading-circle{width:20px;height:20px;position:absolute;right:10px;top:0;bottom:0;margin:auto}.sk-fading-circle .sk-circle{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle .sk-circle:before{content:\"\";display:block;margin:0 auto;width:15%;height:15%;background-color:#333;border-radius:100%;-webkit-animation:1.2s ease-in-out infinite both sk-circleFadeDelay;animation:1.2s ease-in-out infinite both sk-circleFadeDelay}.sk-fading-circle .sk-circle2{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.sk-fading-circle .sk-circle3{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.sk-fading-circle .sk-circle4{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.sk-fading-circle .sk-circle5{-webkit-transform:rotate(120deg);transform:rotate(120deg)}.sk-fading-circle .sk-circle6{-webkit-transform:rotate(150deg);transform:rotate(150deg)}.sk-fading-circle .sk-circle7{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.sk-fading-circle .sk-circle8{-webkit-transform:rotate(210deg);transform:rotate(210deg)}.sk-fading-circle .sk-circle9{-webkit-transform:rotate(240deg);transform:rotate(240deg)}.sk-fading-circle .sk-circle10{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.sk-fading-circle .sk-circle11{-webkit-transform:rotate(300deg);transform:rotate(300deg)}.sk-fading-circle .sk-circle12{-webkit-transform:rotate(330deg);transform:rotate(330deg)}.sk-fading-circle .sk-circle2:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-fading-circle .sk-circle3:before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-fading-circle .sk-circle4:before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-fading-circle .sk-circle5:before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-fading-circle .sk-circle6:before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-fading-circle .sk-circle7:before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-fading-circle .sk-circle8:before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-fading-circle .sk-circle9:before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-fading-circle .sk-circle10:before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-fading-circle .sk-circle11:before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-fading-circle .sk-circle12:before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes sk-circleFadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}@keyframes sk-circleFadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
          }];
        }, {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          heading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          historyHeading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          historyListMaxNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          notFoundText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          minQueryLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          focusFirst: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          inputChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          inputFocused: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          inputCleared: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          scrolledToEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          searchInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['searchInput']
          }],
          filteredListElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['filteredListElement']
          }],
          historyListElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['historyListElement']
          }],
          searchKeyword: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          initialValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          historyIdentifier: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          isLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          debounceTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          customFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          itemTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          notFoundTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          customTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef]
          }]
        });
      })();

      if (false) {}
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/autocomplete/highlight.pipe.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _HighlightPipe = /*#__PURE__*/function () {
        function _HighlightPipe() {
          _classCallCheck(this, _HighlightPipe);
        }

        _createClass(_HighlightPipe, [{
          key: "transform",
          value:
          /**
           * @param {?} text
           * @param {?} search
           * @param {?=} searchKeyword
           * @return {?}
           */
          function transform(text, search, searchKeyword) {
            /** @type {?} */
            var pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
            pattern = pattern.split(' ').filter(
            /**
            * @param {?} t
            * @return {?}
            */
            function (t) {
              return t.length > 0;
            }).join('|');
            /** @type {?} */

            var regex = new RegExp(pattern, 'gi');

            if (!search) {
              return text;
            }

            if (searchKeyword) {
              /** @type {?} */
              var name = text[searchKeyword].replace(regex,
              /**
              * @param {?} match
              * @return {?}
              */
              function (match) {
                return "<b>".concat(match, "</b>");
              }); // copy original object

              /** @type {?} */

              var text2 = Object.assign({}, text); // set bold value into searchKeyword of copied object

              text2[searchKeyword] = name;
              return text2;
            } else {
              return search ? text.replace(regex,
              /**
              * @param {?} match
              * @return {?}
              */
              function (match) {
                return "<b>".concat(match, "</b>");
              }) : text;
            }
          }
        }]);

        return _HighlightPipe;
      }();

      _HighlightPipe.ɵfac = function HighlightPipe_Factory(t) {
        return new (t || _HighlightPipe)();
      };

      _HighlightPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "highlight",
        type: _HighlightPipe,
        pure: true
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_HighlightPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
          args: [{
            name: 'highlight'
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: lib/autocomplete-lib.module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var _AutocompleteLibModule = /*#__PURE__*/_createClass(function _AutocompleteLibModule() {
        _classCallCheck(this, _AutocompleteLibModule);
      });

      _AutocompleteLibModule.ɵfac = function AutocompleteLibModule_Factory(t) {
        return new (t || _AutocompleteLibModule)();
      };

      _AutocompleteLibModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _AutocompleteLibModule
      });
      _AutocompleteLibModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_AutocompleteLibModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule],
            declarations: [_AutocompleteLibComponent, _AutocompleteComponent, _HighlightPipe],
            exports: [_AutocompleteLibComponent, _AutocompleteComponent, _HighlightPipe]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_AutocompleteLibModule, {
          declarations: function declarations() {
            return [_AutocompleteLibComponent, _AutocompleteComponent, _HighlightPipe];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule];
          },
          exports: function exports() {
            return [_AutocompleteLibComponent, _AutocompleteComponent, _HighlightPipe];
          }
        });
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: public_api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: angular-ng-autocomplete.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /***/

    },

    /***/
    82516:
    /*!*********************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/observable/fromEvent.js ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "fromEvent": function fromEvent() {
          return (
            /* binding */
            _fromEvent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Observable */
      25160);
      /* harmony import */


      var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../util/isArray */
      49861);
      /* harmony import */


      var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../util/isFunction */
      80018);
      /* harmony import */


      var _operators_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../operators/map */
      33927);

      var toString = function () {
        return Object.prototype.toString;
      }();

      function _fromEvent(target, eventName, options, resultSelector) {
        if ((0, _util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(options)) {
          resultSelector = options;
          options = undefined;
        }

        if (resultSelector) {
          return _fromEvent(target, eventName, options).pipe((0, _operators_map__WEBPACK_IMPORTED_MODULE_1__.map)(function (args) {
            return (0, _util_isArray__WEBPACK_IMPORTED_MODULE_2__.isArray)(args) ? resultSelector.apply(void 0, _toConsumableArray(args)) : resultSelector(args);
          }));
        }

        return new _Observable__WEBPACK_IMPORTED_MODULE_3__.Observable(function (subscriber) {
          function handler(e) {
            if (arguments.length > 1) {
              subscriber.next(Array.prototype.slice.call(arguments));
            } else {
              subscriber.next(e);
            }
          }

          setupSubscription(target, eventName, handler, subscriber, options);
        });
      }

      function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
        var unsubscribe;

        if (isEventTarget(sourceObj)) {
          var source = sourceObj;
          sourceObj.addEventListener(eventName, handler, options);

          unsubscribe = function unsubscribe() {
            return source.removeEventListener(eventName, handler, options);
          };
        } else if (isJQueryStyleEventEmitter(sourceObj)) {
          var _source = sourceObj;
          sourceObj.on(eventName, handler);

          unsubscribe = function unsubscribe() {
            return _source.off(eventName, handler);
          };
        } else if (isNodeStyleEventEmitter(sourceObj)) {
          var _source2 = sourceObj;
          sourceObj.addListener(eventName, handler);

          unsubscribe = function unsubscribe() {
            return _source2.removeListener(eventName, handler);
          };
        } else if (sourceObj && sourceObj.length) {
          for (var i = 0, len = sourceObj.length; i < len; i++) {
            setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
          }
        } else {
          throw new TypeError('Invalid event target');
        }

        subscriber.add(unsubscribe);
      }

      function isNodeStyleEventEmitter(sourceObj) {
        return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
      }

      function isJQueryStyleEventEmitter(sourceObj) {
        return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
      }

      function isEventTarget(sourceObj) {
        return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
      }
      /***/

    },

    /***/
    11864:
    /*!********************************************************!*\
      !*** ./src/app/shared/services/maintenance.service.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MaintenanceService": function MaintenanceService() {
          return (
            /* binding */
            _MaintenanceService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment.prod */
      89019);
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

      var _MaintenanceService = /*#__PURE__*/function () {
        function _MaintenanceService(http) {
          _classCallCheck(this, _MaintenanceService);

          this.http = http;
          this.API_URL = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.MEDIAN_URL; //save in new screen

          this.Index = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({
            index: ''
          });
        }

        _createClass(_MaintenanceService, [{
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
          key: "onSubmittingDepartment",
          value: function onSubmittingDepartment(obj) {
            console.log("service ", obj);
            return this.http.post("".concat(this.API_URL, "/departBatchMaint/createBatch"), obj);
          } //getting data in summary

        }, {
          key: "gettingDepartmentDataInSummary",
          value: function gettingDepartmentDataInSummary() {
            return this.http.get("".concat(this.API_URL, "/departBatchMaint/getAllDeparts"));
          } //save in edit Department

        }, {
          key: "onsaveTheEditOfDepartment",
          value: function onsaveTheEditOfDepartment(obj) {
            return this.http.put("".concat(this.API_URL, "/departBatchMaint/modify"), obj);
          } //department --->auth

        }, {
          key: "onAuthDepartment",
          value: function onAuthDepartment(obj) {
            return this.http.post("".concat(this.API_URL, "/departBatchMaint/verify"), obj);
          } //department --->close

        }, {
          key: "onCloseOfDepartment",
          value: function onCloseOfDepartment(obj) {
            return this.http.post("".concat(this.API_URL, "/departBatchMaint/close"), obj);
          } //deaprtment --->open

        }, {
          key: "onReopenOfDepartment",
          value: function onReopenOfDepartment(obj) {
            return this.http.post("".concat(this.API_URL, "/departBatchMaint/reopen"), obj);
          } // /dept ---delete

        }, {
          key: "onDeleteOfDepartment",
          value: function onDeleteOfDepartment(obj) {
            return this.http.post("".concat(this.API_URL, "/departBatchMaint/delete"), obj);
          } // ==============SFTP Maintenance=========
          //getting ExtSysName

        }, {
          key: "gettingExternalSystemName",
          value: function gettingExternalSystemName() {
            return this.http.get("");
          } //getting ProcessName

        }, {
          key: "gettingProcessName",
          value: function gettingProcessName() {
            return this.http.get("");
          } //save-->new SftpMaintenance

        }, {
          key: "onSaveOfSftpMaintenance",
          value: function onSaveOfSftpMaintenance(obj) {
            return this.http.post("", obj);
          } //sftp-->summary

        }, {
          key: "gettingSftpSummary",
          value: function gettingSftpSummary() {
            return this.http.get("");
          } //edit--save

        }, {
          key: "saveOfsftpMaintenaceEdit",
          value: function saveOfsftpMaintenaceEdit(obj) {
            return this.http.post("", obj);
          } //auth

        }, {
          key: "sftpAuth",
          value: function sftpAuth(obj) {
            return this.http.post("", obj);
          } //close

        }, {
          key: "sftpClose",
          value: function sftpClose(obj) {
            return this.http.post("", obj);
          } //open

        }, {
          key: "sftpReopen",
          value: function sftpReopen(obj) {
            return this.http.post("", obj);
          } //delete

        }, {
          key: "sftpDelete",
          value: function sftpDelete(obj) {
            return this.http.post("", obj);
          } // ==================Sub Agent Code Maintenance==========

        }, {
          key: "onsaveOfsubAgentCode",
          value: function onsaveOfsubAgentCode(obj) {
            return this.http.post("".concat(this.API_URL, "/subAgent/createBatch"), obj);
          }
        }, {
          key: "gettingSubAgentCode",
          value: function gettingSubAgentCode() {
            return this.http.get("".concat(this.API_URL, "/subAgent/getAllSubAgentAccs"));
          }
        }, {
          key: "onsaveTheEditOfSubAgentCode",
          value: function onsaveTheEditOfSubAgentCode(obj) {
            return this.http.put("".concat(this.API_URL, "/subAgent/modify"), obj);
          }
        }, {
          key: "onAuthsubagentcode",
          value: function onAuthsubagentcode(obj) {
            return this.http.post("".concat(this.API_URL, "/subAgent/verify"), obj);
          }
        }, {
          key: "onCloseOfSubAgentcode",
          value: function onCloseOfSubAgentcode(obj) {
            return this.http.post("".concat(this.API_URL, "/subAgent/close"), obj);
          }
        }, {
          key: "onReopenOfsubagentCode",
          value: function onReopenOfsubagentCode(obj) {
            return this.http.post("".concat(this.API_URL, "/subAgent/reopen"), obj);
          }
        }, {
          key: "onDeleteOfsubAgentcode",
          value: function onDeleteOfsubAgentcode(obj) {
            return this.http.post("".concat(this.API_URL, "/subAgent/delete"), obj);
          }
        }]);

        return _MaintenanceService;
      }();

      _MaintenanceService.ɵfac = function MaintenanceService_Factory(t) {
        return new (t || _MaintenanceService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _MaintenanceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _MaintenanceService,
        factory: _MaintenanceService.ɵfac,
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
    64729:
    /*!*****************************************************************************************************************************!*\
      !*** ./src/app/views/system-param-maintenance/department-id-maintenance/departmenrt-id-new/departmenrt-id-new.component.ts ***!
      \*****************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DepartmenrtIdNewComponent": function DepartmenrtIdNewComponent() {
          return (
            /* binding */
            _DepartmenrtIdNewComponent
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


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      31443);
      /* harmony import */


      var src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/maintenance.service */
      11864);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function DepartmenrtIdNewComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DepartmenrtIdNewComponent_div_25_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r8.onSubmittingofChargeMaintenance("edit");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r0.departmentForm.valid || !ctx_r0.departmentForm.dirty || ctx_r0.submitDisab);
        }
      }

      function DepartmenrtIdNewComponent_div_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DepartmenrtIdNewComponent_div_26_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r10.onSubmitEditMaintenance();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function DepartmenrtIdNewComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DepartmenrtIdNewComponent_div_27_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r12.onAuthorizingTheRecord();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function DepartmenrtIdNewComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DepartmenrtIdNewComponent_div_28_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r14.onClosingTheRecord();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function DepartmenrtIdNewComponent_div_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DepartmenrtIdNewComponent_div_29_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r16.onReopningTheRecord();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Reopen");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function DepartmenrtIdNewComponent_div_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DepartmenrtIdNewComponent_div_30_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r18.onDeletingTheRecord();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function DepartmenrtIdNewComponent_div_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DepartmenrtIdNewComponent_div_31_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r20.onSubmittingofChargeMaintenance("submit");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r6.departmentForm.valid || ctx_r6.submitDisab);
        }
      }

      function DepartmenrtIdNewComponent_div_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 31);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 31);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 31);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 31);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Modification No");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "Checker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](75, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "First Time Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](93, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "Auth Status");

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
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.respData.inputBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 8, ctx_r7.respData.inputTime));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.respData.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.respData.verifiedBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.respData.modNo);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](75, 10, ctx_r7.respData.verifiedTime));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.respData.verifiedOnce);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.respData.verifiedStatus);
        }
      }

      var _c0 = "/system-param-maintenance/dept-id-maintenance-summary";

      var _c1 = function _c1() {
        return [_c0];
      };

      var _DepartmenrtIdNewComponent = /*#__PURE__*/function () {
        function _DepartmenrtIdNewComponent(toastService, formBuilder, departmentService, router) {
          _classCallCheck(this, _DepartmenrtIdNewComponent);

          this.toastService = toastService;
          this.formBuilder = formBuilder;
          this.departmentService = departmentService;
          this.router = router;
          this.editFlag = true;
        }

        _createClass(_DepartmenrtIdNewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.currentUser = localStorage.getItem("userFromLogin");
            this.buildForm("");
            this.departmentService.getIndex().subscribe(function (index) {
              if (index.index) {
                _this7.index = index.index;

                _this7.departmentService.gettingDepartmentDataInSummary().subscribe(function (dataresp) {
                  console.log(dataresp);

                  if (dataresp) {
                    _this7.getRespBasedOnId(dataresp, index.index);
                  }
                });
              }
            });
          }
        }, {
          key: "getRespBasedOnId",
          value: function getRespBasedOnId(resp, arg0) {
            this.respData = resp.find(function (item) {
              return item.departId == arg0;
            });
            console.log("obj based on departId ", this.respData);
            this.editFlag = false;
            this.buildForm(this.respData);
            this.auditLog();
          }
        }, {
          key: "buildForm",
          value: function buildForm(item) {
            this.departmentForm = this.formBuilder.group({
              departId: [item ? item.departId : "", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              departName: [item ? item.departName : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              fromSeries: [item ? item.fromSeries : "", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              toSeries: [item ? item.toSeries : "", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              inputBy: [item ? item.inputBy : this.currentUser],
              inputTime: [item ? item.inputTime : ""],
              verifiedBy: [item ? item.verifiedBy : ""],
              verifiedTime: [item ? item.verifiedTime : ""],
              recordStatus: [item ? item.recordStatus : ""],
              verifiedOnce: [item ? item.verifiedOnce : ""],
              modNo: [item ? item.modNo : ""],
              verifiedStatus: [item ? item.verifiedStatus : ""],
              respMsg: [item ? item.respMsg : ""]
            });
          }
        }, {
          key: "onSubmittingofChargeMaintenance",
          value: function onSubmittingofChargeMaintenance(value) {
            var _this8 = this;

            if (value === "submit") {
              this.departmentForm.value.inputBy = this.currentUser;
              this.departmentService.onSubmittingDepartment(this.departmentForm.value).subscribe(function (deptMaintenanceResp) {
                console.log(deptMaintenanceResp);

                if (deptMaintenanceResp.respMsg === "Department Saved Successfully ") {
                  _this8.submitDisab = true;
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    text: "Department Saved Successfully"
                  });
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    text: deptMaintenanceResp.respMsg
                  });
                }
              });
            }

            if (value === "edit") {
              this.departmentForm.value.inputBy = this.currentUser;
              this.departmentService.onsaveTheEditOfDepartment(this.departmentForm.value).subscribe(function (deptMaintenanceResp) {
                console.log(deptMaintenanceResp);

                if (deptMaintenanceResp) {
                  if (deptMaintenanceResp.respMsg === "Modified Record Success") {
                    _this8.submitDisab = true;
                    _this8.respData = deptMaintenanceResp;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: "Department Updated Successfully"
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: deptMaintenanceResp.respMsg
                    });
                  }
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    text: 'Department Updation failed'
                  });
                }
              });
            }
          }
        }, {
          key: "auditLog",
          value: function auditLog() {
            if (this.respData.verifiedStatus === 'U') {
              this.respData.verifiedStatus = 'UNAUTHORIZED';
            }

            if (this.respData.verifiedStatus === 'A') {
              this.respData.verifiedStatus = 'AUTHORIZED';
            }

            if (this.respData.recordStatus === 'O') {
              this.respData.recordStatus = 'OPEN';
            }

            if (this.respData.recordStatus === 'C') {
              this.respData.recordStatus = 'CLOSED';
            }

            if (this.respData.verifiedOnce === 'N') {
              this.respData.verifiedOnce = 'NO';
            }

            if (this.respData.verifiedOnce === 'Y') {
              this.respData.verifiedOnce = 'YES';
            }
          }
        }, {
          key: "getChargeMaintainenceSummary",
          value: function getChargeMaintainenceSummary() {
            this.departmentService.gettingDepartmentDataInSummary().subscribe(function (dataresp) {
              console.log("summry", dataresp); // this.respArray = dataresp;
              // this.dtTrigger.next();
            });
          }
        }, {
          key: "onAuthorizingTheRecord",
          value: function onAuthorizingTheRecord() {
            var _this9 = this;

            this.departmentForm.value.inputBy = this.currentUser;
            console.log("this is authorzation");
            this.departmentService.onAuthDepartment(this.departmentForm.value).subscribe(function (authResp) {
              console.log(authResp);
              _this9.respData = authResp;

              if (_this9.respData) {
                if (_this9.respData.inputBy != null) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    text: "You authorized the Record!"
                  } // type: "success"
                  );
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    text: "Maker cannot authorize the record"
                  });
                }
              }
            });
          }
        }, {
          key: "onSubmitEditMaintenance",
          value: function onSubmitEditMaintenance() {
            this.editFlag = true;
            console.log(this.editFlag);
          }
        }, {
          key: "onClosingTheRecord",
          value: function onClosingTheRecord() {
            var _this10 = this;

            this.departmentForm.value.inputBy = this.currentUser;
            console.log("this is close");
            this.departmentService.onCloseOfDepartment(this.departmentForm.value).subscribe(function (closeResp) {
              console.log(closeResp);
              _this10.respData = closeResp;

              if (_this10.respData) {
                if (_this10.respData.verifiedStatus == "U") {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    text: "Unauthorize Record Cannot be Closed"
                  });
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    text: "Record closed succefully"
                  } // type: "success"
                  );
                }
              }
            });
          }
        }, {
          key: "onReopningTheRecord",
          value: function onReopningTheRecord() {
            var _this11 = this;

            this.departmentForm.value.inputBy = this.currentUser;
            console.log("this is reopen");
            this.departmentService.onReopenOfDepartment(this.departmentForm.value).subscribe(function (reopnResp) {
              console.log(reopnResp);
              _this11.respData = reopnResp;

              if (_this11.respData) {
                if (_this11.respData.recordStatus == "O") {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    text: "Record opened succefully"
                  } // type: "success"
                  );
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    text: "Record cannot be opened "
                  });
                }
              }
            });
          }
        }, {
          key: "onDeletingTheRecord",
          value: function onDeletingTheRecord() {
            var _this12 = this;

            this.departmentForm.value.inputBy = this.currentUser;
            this.departmentForm.value.id = this.respData.id;
            console.log("this is delete", this.departmentForm.value);
            this.departmentService.onDeleteOfDepartment(this.departmentForm.value).subscribe(function (deleteResp) {
              console.log(deleteResp.status);
              _this12.respData = deleteResp;

              if (_this12.respData.respMsg == "Deleted Successfully") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Record Deleted Successfully!',
                  icon: 'success'
                });

                _this12.router.navigateByUrl('/system-param-maintenance/dept-id-maintenance-summary');
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Failed to Delete Record!',
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
          key: "numericOnly",
          value: function numericOnly(event) {
            return !isNaN(Number(event.key)) && event.key !== " ";
          }
        }]);

        return _DepartmenrtIdNewComponent;
      }();

      _DepartmenrtIdNewComponent.ɵfac = function DepartmenrtIdNewComponent_Factory(t) {
        return new (t || _DepartmenrtIdNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_2__.MaintenanceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
      };

      _DepartmenrtIdNewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _DepartmenrtIdNewComponent,
        selectors: [["npr-departmenrt-id-new"]],
        decls: 36,
        vars: 15,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "dbCardStyle"], [1, "row", "gy-4"], [1, "col-lg-4"], ["for", "", 1, "formLbl"], ["id", "fname", "formControlName", "departId", "type", "text", "placeholder", "Department ID", "value", "", 1, "form-control", 3, "readonly"], ["id", "lname", "type", "text", "formControlName", "departName", "placeholder", "Department Name", "value", "", 1, "form-control", 3, "readonly"], ["id", "accNumber", "pattern", "[0-9]*", "maxlength", "3", "formControlName", "fromSeries", "placeholder", "Batch No From", "value", "", 1, "form-control", 3, "readonly", "keypress"], ["id", "cName", "pattern", "[0-9]*", "maxlength", "3", "type", "text", "formControlName", "toSeries", "placeholder", "Batch No To", "value", "", 1, "form-control", 3, "readonly", "keypress"], [1, "col-lg-12"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["class", "dbCardStyle", 4, "ngIf"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "disabled", "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["color", "warn", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], ["src", "assets/images/maker-icon.svg", "alt", "..."], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], ["src", "assets/images/checker-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/auth-status-icon.svg", "alt", "..."]],
        template: function DepartmenrtIdNewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Department Id Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Department ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Department Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Batch No From");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function DepartmenrtIdNewComponent_Template_input_keypress_18_listener($event) {
              return ctx.numericOnly($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Batch No To");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function DepartmenrtIdNewComponent_Template_input_keypress_22_listener($event) {
              return ctx.numericOnly($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, DepartmenrtIdNewComponent_div_25_Template, 3, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, DepartmenrtIdNewComponent_div_26_Template, 3, 0, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, DepartmenrtIdNewComponent_div_27_Template, 3, 0, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, DepartmenrtIdNewComponent_div_28_Template, 3, 0, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, DepartmenrtIdNewComponent_div_29_Template, 3, 0, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, DepartmenrtIdNewComponent_div_30_Template, 3, 0, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, DepartmenrtIdNewComponent_div_31_Template, 3, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, DepartmenrtIdNewComponent_div_35_Template, 100, 12, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.departmentForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.respData && ctx.editFlag && ctx.index);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.respData && !ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.respData && ctx.respData.verifiedStatus == "U");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.respData && ctx.respData.recordStatus == "O" && ctx.respData.verifiedStatus == "A");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.respData && ctx.respData.recordStatus == "C" && ctx.respData.verifiedStatus == "A");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.respData && ctx.respData.verifiedOnce == "N");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.editFlag && !ctx.index);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](14, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.respData);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXBhcnRtZW5ydC1pZC1uZXcuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    22263:
    /*!*******************************************************************************************************************************************!*\
      !*** ./src/app/views/system-param-maintenance/department-id-maintenance/department-id-maintenance/department-id-maintenance.component.ts ***!
      \*******************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DepartmentIdMaintenanceComponent": function DepartmentIdMaintenanceComponent() {
          return (
            /* binding */
            _DepartmentIdMaintenanceComponent
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


      var src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/services/maintenance.service */
      11864);
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

      function DepartmentIdMaintenanceComponent_tr_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DepartmentIdMaintenanceComponent_tr_24_Template_a_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);

            var data_r1 = restoredCtx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r2.edit(data_r1);
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

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r1.departId);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r1.fromSeries);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r1.toSeries);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r1.inputBy);
        }
      }

      var _c0 = function _c0() {
        return ["/system-param-maintenance/dept-id-maintenance-new"];
      };

      var _c1 = function _c1() {
        return ["/dashboard"];
      };

      var _DepartmentIdMaintenanceComponent = /*#__PURE__*/function () {
        function _DepartmentIdMaintenanceComponent(apiService, router) {
          _classCallCheck(this, _DepartmentIdMaintenanceComponent);

          this.apiService = apiService;
          this.router = router;
          this.respArray = [];
          this.dtOptions = {};
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        }

        _createClass(_DepartmentIdMaintenanceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getChargeMaintainenceSummary();
            this.dtOptions = {
              pagingType: "full_numbers",
              pageLength: 5,
              processing: true,
              lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]]
            };
          }
        }, {
          key: "getChargeMaintainenceSummary",
          value: function getChargeMaintainenceSummary() {
            var _this13 = this;

            this.apiService.gettingDepartmentDataInSummary().subscribe(function (dataresp) {
              _this13.respArray = dataresp;

              _this13.dtTrigger.next();
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
            this.apiService.setIndex({
              index: ""
            });
            this.router.navigateByUrl("/system-param-maintenance/dept-id-maintenance-new");
          }
        }, {
          key: "edit",
          value: function edit(data) {
            this.apiService.setIndex({
              index: data.departId
            });
            this.router.navigateByUrl("/system-param-maintenance/dept-id-maintenance-new");
          }
        }]);

        return _DepartmentIdMaintenanceComponent;
      }();

      _DepartmentIdMaintenanceComponent.ɵfac = function DepartmentIdMaintenanceComponent_Factory(t) {
        return new (t || _DepartmentIdMaintenanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_0__.MaintenanceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
      };

      _DepartmentIdMaintenanceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _DepartmentIdMaintenanceComponent,
        selectors: [["npr-department-id-maintenance"]],
        decls: 25,
        vars: 7,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "routerLink", "click"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", 1, "primaryColor", 3, "click"]],
        template: function DepartmentIdMaintenanceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Department Maintenance Summary");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DepartmentIdMaintenanceComponent_Template_a_click_7_listener() {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Department Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Batch No From");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Batch No To");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Input By");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, DepartmentIdMaintenanceComponent_tr_24_Template, 10, 4, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.respArray);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, angular_datatables__WEBPACK_IMPORTED_MODULE_1__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXBhcnRtZW50LWlkLW1haW50ZW5hbmNlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    23367:
    /*!*******************************************************************************************************************************************!*\
      !*** ./src/app/views/system-param-maintenance/global-gcc-ac-maintenance/global-gcc-ac-maintenance/global-gcc-ac-maintenance.component.ts ***!
      \*******************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GlobalGccAcMaintenanceComponent": function GlobalGccAcMaintenanceComponent() {
          return (
            /* binding */
            _GlobalGccAcMaintenanceComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! angular-datatables */
      50481);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      31443);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function GlobalGccAcMaintenanceComponent_tr_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GlobalGccAcMaintenanceComponent_tr_27_Template_a_click_8_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);

            var udata_r2 = restoredCtx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r3.deleteGLData(udata_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var udata_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](udata_r2.permission);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](udata_r2.trnCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](udata_r2.trnDesc);
        }
      }

      function GlobalGccAcMaintenanceComponent_tr_44_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GlobalGccAcMaintenanceComponent_tr_44_Template_a_click_9_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);

            var accdata_r5 = restoredCtx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r6.deleteAccData(accdata_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var accdata_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](accdata_r5.permission);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](accdata_r5.trnCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](accdata_r5.trnDesc);
        }
      }

      var _c0 = function _c0() {
        return ["/system-param-maintenance/gl-acc-maintenance-new"];
      };

      var _c1 = function _c1() {
        return ["/dashboard"];
      };

      var _GlobalGccAcMaintenanceComponent = /*#__PURE__*/function () {
        function _GlobalGccAcMaintenanceComponent(apiService, toastService) {
          _classCallCheck(this, _GlobalGccAcMaintenanceComponent);

          this.apiService = apiService;
          this.toastService = toastService;
          this.dtOptions = [];
          this.dtTrigger1 = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
          this.dtTrigger2 = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        }

        _createClass(_GlobalGccAcMaintenanceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dtOptions[0] = {
              pagingType: 'full_numbers',
              pageLength: 5,
              retrieve: true,
              processing: true,
              lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]]
            };
            this.dtOptions[1] = {
              pagingType: 'full_numbers',
              pageLength: 5,
              retrieve: true,
              processing: true,
              lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]]
            };
            this.getUFDData();
            this.getAccdata();
          }
        }, {
          key: "displayToConsole",
          value: function displayToConsole() {
            this.dtElements.forEach(function (dtElement, index) {
              dtElement.dtInstance.then(function (dtInstance) {
                console.log("The DataTable ".concat(index, " instance ID is: ").concat(dtInstance.table().node().id));
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.dtTrigger1.unsubscribe();
            this.dtTrigger2.unsubscribe();
          }
        }, {
          key: "getUFDData",
          value: function getUFDData() {
            var _this14 = this;

            this.apiService.getGlData().subscribe(function (udfdata) {
              _this14.udfData = udfdata;

              _this14.dtTrigger1.next();

              if (_this14.udfData != null) {
                // this.toastService.successMessage('Data Fetched Successfully!.', '');
                return;
              } else {
                // this.toastService.errorMessage('Failed to Fetch Data!.', '');
                return;
              }
            });
          }
        }, {
          key: "getAccdata",
          value: function getAccdata() {
            var _this15 = this;

            this.apiService.getAccData().subscribe(function (accdata) {
              _this15.accClassData = accdata;

              _this15.dtTrigger2.next();

              console.log('GCC Data', _this15.accClassData);
            });
          }
        }, {
          key: "deleteGLData",
          value: function deleteGLData(row) {
            var _this16 = this;

            console.log(row);
            this.apiService.deleteGlData(row, this.UserId).subscribe(function (res) {
              _this16.gldeleteResponse = res;

              if (_this16.gldeleteResponse) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("GL Code Record is Deleted");

                _this16.getUFDData();
              }
            });
          }
        }, {
          key: "deleteAccData",
          value: function deleteAccData(row) {
            var _this17 = this;

            this.apiService.deleteAcData(row, this.UserId).subscribe(function (res) {
              _this17.accResponse = res;

              if (_this17.accResponse) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Account Class Record is Deleted");

                _this17.getAccdata();
              }
            });
          }
        }]);

        return _GlobalGccAcMaintenanceComponent;
      }();

      _GlobalGccAcMaintenanceComponent.ɵfac = function GlobalGccAcMaintenanceComponent_Factory(t) {
        return new (t || _GlobalGccAcMaintenanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService));
      };

      _GlobalGccAcMaintenanceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _GlobalGccAcMaintenanceComponent,
        selectors: [["npr-global-gcc-ac-maintenance"]],
        viewQuery: function GlobalGccAcMaintenanceComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.dtElements = _t);
          }
        },
        decls: 45,
        vars: 10,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "routerLink"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [1, "dbCardStyle", "dbCardStyle2", "p-0"], [1, "titleCol"], ["datatable", "", "id", "dbTable1", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], ["datatable", "", "id", "dbTable2", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [1, "tblIcon"], [1, "deleteIcon2", 3, "click"], ["src", "assets/images/delete-icon.svg", "alt", "..."], ["href", "javascript:void(0)", 1, "primaryColor"], ["href", "javascript:void(0);", 1, "deleteIcon2", 3, "click"]],
        template: function GlobalGccAcMaintenanceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Global GI/ACC Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "New");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "GL Code Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Permission");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Gl Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "GL Code Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, GlobalGccAcMaintenanceComponent_tr_27_Template, 10, 3, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Account Class Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "table", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Permission");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Account Class");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Account Class Descreption");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, GlobalGccAcMaintenanceComponent_tr_44_Template, 11, 3, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dtOptions", ctx.dtOptions[0])("dtTrigger", ctx.dtTrigger1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.udfData);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dtOptions", ctx.dtOptions[1])("dtTrigger", ctx.dtTrigger2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.accClassData);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnbG9iYWwtZ2NjLWFjLW1haW50ZW5hbmNlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    65252:
    /*!***************************************************************************************************************************!*\
      !*** ./src/app/views/system-param-maintenance/global-gcc-ac-maintenance/global-gcc-ac-new/global-gcc-ac-new.component.ts ***!
      \***************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GlobalGccAcNewComponent": function GlobalGccAcNewComponent() {
          return (
            /* binding */
            _GlobalGccAcNewComponent
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

      function GlobalGccAcNewComponent_option_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var permsn_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", permsn_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", permsn_r4, "");
        }
      }

      function GlobalGccAcNewComponent_div_25_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please Enter Code Permission! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function GlobalGccAcNewComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, GlobalGccAcNewComponent_div_25_div_1_Template, 2, 0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.globalGccForm.controls["permission"].errors.required);
        }
      }

      function GlobalGccAcNewComponent_div_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GlobalGccAcNewComponent_div_29_Template_a_click_10_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);

            var i_r7 = restoredCtx.index;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r8.removeGCCData(i_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r7 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r7);
        }
      }

      function GlobalGccAcNewComponent_div_61_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GlobalGccAcNewComponent_div_61_Template_a_click_10_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);

            var i_r11 = restoredCtx.index;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r12.removeAccountData(i_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r11 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r11);
        }
      }

      var _c0 = "/system-param-maintenance/gl-acc-maintenance-summary";

      var _c1 = function _c1() {
        return [_c0];
      };

      var _GlobalGccAcNewComponent = /*#__PURE__*/function () {
        function _GlobalGccAcNewComponent(formBuilder, apiService, toastService) {
          _classCallCheck(this, _GlobalGccAcNewComponent);

          this.formBuilder = formBuilder;
          this.apiService = apiService;
          this.toastService = toastService;
          this.permissionvalue = ['Allow', 'Disallow'];
          this.permissionvalue1 = ['Allow', 'Disallow'];
          this.gccformValues = [{
            trnDesc: '',
            trnCode: '',
            permission: ''
          }];
          this.accformValues = [{
            trnDesc: '',
            trnCode: '',
            permission: ''
          }];
        }

        _createClass(_GlobalGccAcNewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentUser = localStorage.getItem("userFromLogin"); // this.loginUser = "JILU";

            this.globalGccForm = this.formBuilder.group({
              permission: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              globalGccData: this.formBuilder.array([this.createglobalGCCGroup()])
            });
            this.accountMaintenanceForm = this.formBuilder.group({
              permission: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              accountMaintenanceData: this.formBuilder.array([this.createglobalAccountGroup()])
            }); // this.getUFDData();
            // this.getAccdata();
          }
        }, {
          key: "createglobalGCCGroup",
          value: function createglobalGCCGroup() {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
              'trnDesc': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
              'trnCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('')
            });
          }
        }, {
          key: "createglobalAccountGroup",
          value: function createglobalAccountGroup() {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
              'trnDesc': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
              'trnCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('')
            });
          }
        }, {
          key: "getUFDData",
          value: function getUFDData() {
            var _this18 = this;

            this.apiService.getGlData().subscribe(function (udfdata) {
              _this18.udfFata = udfdata;
              console.log('GL Data', _this18.udfFata);
              _this18.udfFata = udfdata;

              if (_this18.gccformValues.length != 0) {
                _this18.permission = _this18.gccformValues[0].permission;

                _this18.permissionGLData(_this18.permission);
              } else {
                _this18.permissionALL();
              }
            });
          }
        }, {
          key: "permissionGLData",
          value: function permissionGLData(permission) {
            this.permissionvalue = [permission];
            this.globalGccForm.controls.permission.setValue(this.permission);
          }
        }, {
          key: "permissionALL",
          value: function permissionALL() {
            this.permissionvalue = ['Allow', 'Disallow'];
          }
        }, {
          key: "getAccdata",
          value: function getAccdata() {
            var _this19 = this;

            this.apiService.getAccData().subscribe(function (accdata) {
              _this19.accClassData = accdata;
              console.log('GCC Data', _this19.accClassData);

              if (_this19.accformValues.length != 0) {
                _this19.permission = _this19.accformValues[0].permission;

                _this19.permissionAccData(_this19.permission);
              } else {
                _this19.permissionALL();
              }
            });
          }
        }, {
          key: "permissionAccData",
          value: function permissionAccData(permission) {
            this.permissionvalue = [permission];
            this.accountMaintenanceForm.controls.permission.setValue(this.permission);
          }
        }, {
          key: "removeGCCData",
          value: function removeGCCData(i) {
            var globalGccData = this.globalGccForm.get('globalGccData');

            if (globalGccData.length > 1) {
              globalGccData.removeAt(i);
            } else {
              globalGccData.reset();
            }
          }
        }, {
          key: "removeAccountData",
          value: function removeAccountData(i) {
            var accountMaintenanceData = this.accountMaintenanceForm.get('accountMaintenanceData');

            if (accountMaintenanceData.length > 1) {
              accountMaintenanceData.removeAt(i);
            } else {
              accountMaintenanceData.reset();
            }
          }
        }, {
          key: "addGCCFormGroup",
          value: function addGCCFormGroup() {
            console.log("Hr;ppp");
            var globalGccData = this.globalGccForm.get('globalGccData');
            globalGccData.push(this.createglobalGCCGroup());
          }
        }, {
          key: "addAccountFormGroup",
          value: function addAccountFormGroup() {
            var accountMaintenanceData = this.accountMaintenanceForm.get('accountMaintenanceData');
            accountMaintenanceData.push(this.createglobalAccountGroup());
          }
        }, {
          key: "onSubmitGCCForm",
          value: function onSubmitGCCForm(globalGccForm) {
            var _this20 = this;

            this.gccformValues = globalGccForm.globalGccData;
            console.log(this.gccformValues);
            globalGccForm.globalGccData.forEach(function (element, index) {
              _this20.trnDescp = globalGccForm.globalGccData[index].trnDesc;
              _this20.trnCod = globalGccForm.globalGccData[index].trnCode;
              _this20.gccformValues[index].permission = globalGccForm.permission;
            });
            this.apiService.saveGlCodeData(this.gccformValues, this.currentUser).subscribe(function (response) {
              _this20.savegccResp = response;

              if (_this20.savegccResp == true) {
                // this.toastService.successMessage('Data Saved Successfully!.', '');
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Data Saved Successfully!',
                  icon: 'success'
                });

                _this20.globalGccForm.reset();
              } else {
                // this.toastService.errorMessage('Failed to Save Data!', '');
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Failed to Save Data.',
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
          key: "onSubmitAccountForm",
          value: function onSubmitAccountForm(accountMaintenanceForm) {
            var _this21 = this;

            this.accformValues = accountMaintenanceForm.accountMaintenanceData;
            console.log(this.accformValues);
            accountMaintenanceForm.accountMaintenanceData.forEach(function (element, index) {
              _this21.trnDescp = accountMaintenanceForm.accountMaintenanceData[index].trnDesc;
              _this21.trnCod = accountMaintenanceForm.accountMaintenanceData[index].trnCode;
              _this21.accformValues[index].permission = accountMaintenanceForm.permission;
            });
            this.apiService.saveAccountCodeData(this.accformValues, this.currentUser).subscribe(function (response) {
              _this21.saveaccResp = response;

              if (_this21.saveaccResp == true) {
                // this.toastService.successMessage('Data Saved Successfully!.', '');
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Data Saved Successfully!',
                  icon: 'success'
                });

                _this21.accountMaintenanceForm.reset();
              } else {
                // this.toastService.errorMessage('Failed to Save Data!', '');
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Failed to Save Data.',
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

        return _GlobalGccAcNewComponent;
      }();

      _GlobalGccAcNewComponent.ɵfac = function GlobalGccAcNewComponent_Factory(t) {
        return new (t || _GlobalGccAcNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService));
      };

      _GlobalGccAcNewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _GlobalGccAcNewComponent,
        selectors: [["npr-global-gcc-ac-new"]],
        decls: 76,
        vars: 12,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "tabStyleCol"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], ["role", "presentation", 1, "nav-item"], ["id", "home-tab", "data-bs-toggle", "tab", "data-bs-target", "#home", "type", "button", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "profile-tab", "data-bs-toggle", "tab", "data-bs-target", "#profile", "type", "button", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link"], [1, "dbCardStyle"], ["id", "myTabContent", 1, "tab-content"], ["id", "home", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "formStyle", 3, "formGroup"], [1, "titleStyle", "mb-3", "mb-md-4"], [1, "smTitle"], [1, "row", "gy-12"], [1, "col-lg-4"], ["for", "permission", 1, "formLbl"], ["required", "", "formControlName", "permission", "aria-label", "Default select example", 1, "form-select"], ["class", "form-class", 3, "value", 4, "ngFor", "ngForOf"], ["class", "errorColor", 4, "ngIf"], ["formArrayName", "globalGccData", 1, "row", "gy-4"], ["class", "row", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "col-sm"], [1, "row", "g-3"], [1, "col-auto"], ["href", "javascript:void(0)", 1, "addIcon", 3, "click"], ["src", "assets/images/plus-icon.svg", "alt", "..."], [1, "col-lg-12"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["id", "profile", "role", "tabpanel", "aria-labelledby", "profile-tab", 1, "tab-pane", "fade"], ["formControlName", "permission", "required", "", "aria-label", "Default select example", 1, "form-select"], ["selected", "", "value", "Allow", 1, "form-class"], ["value", "Disallow", 1, "form-class"], ["formArrayName", "accountMaintenanceData", 1, "row", "gy-4"], [1, "addIcon", 3, "click"], [1, "form-class", 3, "value"], [1, "errorColor"], [4, "ngIf"], [1, "row", 3, "formGroupName"], ["id", "transactionDes", "required", "", "formControlName", "trnDesc", "type", "text", "placeholder", "GL Code", "value", "", 1, "form-control"], ["id", "transactionCode", "formControlName", "trnCode", "placeholder", "Transaction Code Description", "value", "", "required", "", 1, "form-control"], ["href", "javascript:void(0);", 1, "deleteIcon2", 3, "click"], ["src", "assets/images/delete-icon.svg", "alt", "..."], ["id", "transactionDes", "required", "", "formControlName", "trnDesc", "type", "text", "placeholder", "Account Class", "value", "", 1, "form-control"], ["id", "transactionCode", "formControlName", "trnCode", "placeholder", "Account Class Description", "value", "", "required", "", 1, "form-control"]],
        template: function GlobalGccAcNewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "System GL/ACC Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "GL Code Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Account Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "form", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "h2", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "GL Code Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Code Permission");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "select", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, GlobalGccAcNewComponent_option_24_Template, 2, 2, "option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, GlobalGccAcNewComponent_div_25_Template, 2, 1, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, GlobalGccAcNewComponent_div_29_Template, 12, 1, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GlobalGccAcNewComponent_Template_a_click_33_listener() {
              return ctx.addGCCFormGroup();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GlobalGccAcNewComponent_Template_button_click_39_listener() {
              return ctx.onSubmitGCCForm(ctx.globalGccForm.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "form", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "h2", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Account Class Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Code Permission");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "select", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "option", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Allow");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "option", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Disallow");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](61, GlobalGccAcNewComponent_div_61_Template, 12, 1, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "a", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GlobalGccAcNewComponent_Template_a_click_65_listener() {
              return ctx.addAccountFormGroup();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GlobalGccAcNewComponent_Template_button_click_71_listener() {
              return ctx.onSubmitAccountForm(ctx.accountMaintenanceForm.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

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
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.globalGccForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.permissionvalue);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.globalGccForm.controls["permission"].invalid && (ctx.globalGccForm.controls["permission"].dirty || ctx.globalGccForm.controls["permission"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.globalGccForm.get("globalGccData")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.globalGccForm.controls.globalGccData.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.accountMaintenanceForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.accountMaintenanceForm.get("accountMaintenanceData")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.accountMaintenanceForm.controls.accountMaintenanceData.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c1));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArrayName, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor],
        styles: [".form-class[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #797979;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-bottom: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-left: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-right: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.errorColor[_ngcontent-%COMP%] {\n  color: #e6224a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC1nY2MtYWMtbmV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFFQSx3RUFBQTtBQUFKOztBQUVBO0VBQ0ksY0FBQTtBQUNKIiwiZmlsZSI6Imdsb2JhbC1nY2MtYWMtbmV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY2xhc3Mge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzc5Nzk3OTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dFxyXG59XHJcbi5lcnJvckNvbG9ye1xyXG4gICAgY29sb3I6ICNlNjIyNGE7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    84889:
    /*!*******************************************************************************************!*\
      !*** ./src/app/views/system-param-maintenance/system-param-maintenance-routing.module.ts ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SystemParamMaintenanceRoutingModule": function SystemParamMaintenanceRoutingModule() {
          return (
            /* binding */
            _SystemParamMaintenanceRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _department_id_maintenance_departmenrt_id_new_departmenrt_id_new_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./department-id-maintenance/departmenrt-id-new/departmenrt-id-new.component */
      64729);
      /* harmony import */


      var _department_id_maintenance_department_id_maintenance_department_id_maintenance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./department-id-maintenance/department-id-maintenance/department-id-maintenance.component */
      22263);
      /* harmony import */


      var _global_gcc_ac_maintenance_global_gcc_ac_maintenance_global_gcc_ac_maintenance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./global-gcc-ac-maintenance/global-gcc-ac-maintenance/global-gcc-ac-maintenance.component */
      23367);
      /* harmony import */


      var _global_gcc_ac_maintenance_global_gcc_ac_new_global_gcc_ac_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./global-gcc-ac-maintenance/global-gcc-ac-new/global-gcc-ac-new.component */
      65252);
      /* harmony import */


      var _transaction_code_maintenance_transaction_code_edit_transaction_code_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./transaction-code-maintenance/transaction-code-edit/transaction-code-edit.component */
      69287);
      /* harmony import */


      var _transaction_code_maintenance_transaction_code_maintenance_transaction_code_maintenance_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./transaction-code-maintenance/transaction-code-maintenance/transaction-code-maintenance.component */
      19926);
      /* harmony import */


      var _transaction_code_maintenance_transaction_code_new_transaction_code_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./transaction-code-maintenance/transaction-code-new/transaction-code-new.component */
      90223);
      /* harmony import */


      var _user_gcc_ac_maintenance_user_gcc_ac_maintenance_user_gcc_ac_maintenance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./user-gcc-ac-maintenance/user-gcc-ac-maintenance/user-gcc-ac-maintenance.component */
      51619);
      /* harmony import */


      var _user_gcc_ac_maintenance_user_gcc_ac_new_user_gcc_ac_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./user-gcc-ac-maintenance/user-gcc-ac-new/user-gcc-ac-new.component */
      14438);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: 'transaction-code-summary',
        component: _transaction_code_maintenance_transaction_code_maintenance_transaction_code_maintenance_component__WEBPACK_IMPORTED_MODULE_5__.TransactionCodeMaintenanceComponent
      }, {
        path: 'transaction-code-new',
        component: _transaction_code_maintenance_transaction_code_new_transaction_code_new_component__WEBPACK_IMPORTED_MODULE_6__.TransactionCodeNewComponent
      }, {
        path: 'transaction-code-edit',
        component: _transaction_code_maintenance_transaction_code_edit_transaction_code_edit_component__WEBPACK_IMPORTED_MODULE_4__.TransactionCodeEditComponent
      }, {
        path: 'gl-acc-maintenance-summary',
        component: _global_gcc_ac_maintenance_global_gcc_ac_maintenance_global_gcc_ac_maintenance_component__WEBPACK_IMPORTED_MODULE_2__.GlobalGccAcMaintenanceComponent
      }, {
        path: 'gl-acc-maintenance-new',
        component: _global_gcc_ac_maintenance_global_gcc_ac_new_global_gcc_ac_new_component__WEBPACK_IMPORTED_MODULE_3__.GlobalGccAcNewComponent
      }, {
        path: 'user-gl-acc-maintenance-summary',
        component: _user_gcc_ac_maintenance_user_gcc_ac_maintenance_user_gcc_ac_maintenance_component__WEBPACK_IMPORTED_MODULE_7__.UserGccAcMaintenanceComponent
      }, {
        path: 'user-gl-acc-maintenance-new',
        component: _user_gcc_ac_maintenance_user_gcc_ac_new_user_gcc_ac_new_component__WEBPACK_IMPORTED_MODULE_8__.UserGccAcNewComponent
      }, {
        path: 'dept-id-maintenance-summary',
        component: _department_id_maintenance_department_id_maintenance_department_id_maintenance_component__WEBPACK_IMPORTED_MODULE_1__.DepartmentIdMaintenanceComponent
      }, {
        path: 'dept-id-maintenance-new',
        component: _department_id_maintenance_departmenrt_id_new_departmenrt_id_new_component__WEBPACK_IMPORTED_MODULE_0__.DepartmenrtIdNewComponent
      }, {
        path: 'transaction-code-edit',
        component: _transaction_code_maintenance_transaction_code_edit_transaction_code_edit_component__WEBPACK_IMPORTED_MODULE_4__.TransactionCodeEditComponent
      }];

      var _SystemParamMaintenanceRoutingModule = /*#__PURE__*/_createClass(function _SystemParamMaintenanceRoutingModule() {
        _classCallCheck(this, _SystemParamMaintenanceRoutingModule);
      });

      _SystemParamMaintenanceRoutingModule.ɵfac = function SystemParamMaintenanceRoutingModule_Factory(t) {
        return new (t || _SystemParamMaintenanceRoutingModule)();
      };

      _SystemParamMaintenanceRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: _SystemParamMaintenanceRoutingModule
      });
      _SystemParamMaintenanceRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](_SystemParamMaintenanceRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    76464:
    /*!***********************************************************************************!*\
      !*** ./src/app/views/system-param-maintenance/system-param-maintenance.module.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SystemParamMaintenanceModule": function SystemParamMaintenanceModule() {
          return (
            /* binding */
            _SystemParamMaintenanceModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _system_param_maintenance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./system-param-maintenance-routing.module */
      84889);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular-datatables */
      50481);
      /* harmony import */


      var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! angular-ng-autocomplete */
      2803);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _department_id_maintenance_department_id_maintenance_department_id_maintenance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./department-id-maintenance/department-id-maintenance/department-id-maintenance.component */
      22263);
      /* harmony import */


      var _global_gcc_ac_maintenance_global_gcc_ac_maintenance_global_gcc_ac_maintenance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./global-gcc-ac-maintenance/global-gcc-ac-maintenance/global-gcc-ac-maintenance.component */
      23367);
      /* harmony import */


      var _global_gcc_ac_maintenance_global_gcc_ac_new_global_gcc_ac_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./global-gcc-ac-maintenance/global-gcc-ac-new/global-gcc-ac-new.component */
      65252);
      /* harmony import */


      var _transaction_code_maintenance_transaction_code_maintenance_transaction_code_maintenance_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./transaction-code-maintenance/transaction-code-maintenance/transaction-code-maintenance.component */
      19926);
      /* harmony import */


      var _transaction_code_maintenance_transaction_code_new_transaction_code_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./transaction-code-maintenance/transaction-code-new/transaction-code-new.component */
      90223);
      /* harmony import */


      var _user_gcc_ac_maintenance_user_gcc_ac_maintenance_user_gcc_ac_maintenance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./user-gcc-ac-maintenance/user-gcc-ac-maintenance/user-gcc-ac-maintenance.component */
      51619);
      /* harmony import */


      var _user_gcc_ac_maintenance_user_gcc_ac_new_user_gcc_ac_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./user-gcc-ac-maintenance/user-gcc-ac-new/user-gcc-ac-new.component */
      14438);
      /* harmony import */


      var _transaction_code_maintenance_transaction_code_edit_transaction_code_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./transaction-code-maintenance/transaction-code-edit/transaction-code-edit.component */
      69287);
      /* harmony import */


      var _department_id_maintenance_departmenrt_id_new_departmenrt_id_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./department-id-maintenance/departmenrt-id-new/departmenrt-id-new.component */
      64729);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _SystemParamMaintenanceModule = /*#__PURE__*/_createClass(function _SystemParamMaintenanceModule() {
        _classCallCheck(this, _SystemParamMaintenanceModule);
      });

      _SystemParamMaintenanceModule.ɵfac = function SystemParamMaintenanceModule_Factory(t) {
        return new (t || _SystemParamMaintenanceModule)();
      };

      _SystemParamMaintenanceModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
        type: _SystemParamMaintenanceModule
      });
      _SystemParamMaintenanceModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _system_param_maintenance_routing_module__WEBPACK_IMPORTED_MODULE_0__.SystemParamMaintenanceRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_1__.DataTablesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_14__.AutocompleteLibModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](_SystemParamMaintenanceModule, {
          declarations: [_transaction_code_maintenance_transaction_code_maintenance_transaction_code_maintenance_component__WEBPACK_IMPORTED_MODULE_5__.TransactionCodeMaintenanceComponent, _transaction_code_maintenance_transaction_code_new_transaction_code_new_component__WEBPACK_IMPORTED_MODULE_6__.TransactionCodeNewComponent, _global_gcc_ac_maintenance_global_gcc_ac_maintenance_global_gcc_ac_maintenance_component__WEBPACK_IMPORTED_MODULE_3__.GlobalGccAcMaintenanceComponent, _global_gcc_ac_maintenance_global_gcc_ac_new_global_gcc_ac_new_component__WEBPACK_IMPORTED_MODULE_4__.GlobalGccAcNewComponent, _department_id_maintenance_department_id_maintenance_department_id_maintenance_component__WEBPACK_IMPORTED_MODULE_2__.DepartmentIdMaintenanceComponent, _department_id_maintenance_departmenrt_id_new_departmenrt_id_new_component__WEBPACK_IMPORTED_MODULE_10__.DepartmenrtIdNewComponent, _user_gcc_ac_maintenance_user_gcc_ac_maintenance_user_gcc_ac_maintenance_component__WEBPACK_IMPORTED_MODULE_7__.UserGccAcMaintenanceComponent, _user_gcc_ac_maintenance_user_gcc_ac_new_user_gcc_ac_new_component__WEBPACK_IMPORTED_MODULE_8__.UserGccAcNewComponent, _transaction_code_maintenance_transaction_code_edit_transaction_code_edit_component__WEBPACK_IMPORTED_MODULE_9__.TransactionCodeEditComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _system_param_maintenance_routing_module__WEBPACK_IMPORTED_MODULE_0__.SystemParamMaintenanceRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_1__.DataTablesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_14__.AutocompleteLibModule]
        });
      })();
      /***/

    },

    /***/
    69287:
    /*!**************************************************************************************************************************************!*\
      !*** ./src/app/views/system-param-maintenance/transaction-code-maintenance/transaction-code-edit/transaction-code-edit.component.ts ***!
      \**************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TransactionCodeEditComponent": function TransactionCodeEditComponent() {
          return (
            /* binding */
            _TransactionCodeEditComponent
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);

      var _c0 = function _c0(a0) {
        return {
          "isDisabled": a0
        };
      };

      function TransactionCodeEditComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TransactionCodeEditComponent_div_12_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r9.invalidLogin($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TransactionCodeEditComponent_div_12_Template_input_ngModelChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r11.invalidLogin($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransactionCodeEditComponent_div_12_Template_a_click_9_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);

            var data_r7 = restoredCtx.$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r12.deleteRowData(data_r7.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r8 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r0.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r0.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c0, !ctx_r0.editFlag));
        }
      }

      function TransactionCodeEditComponent_button_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransactionCodeEditComponent_button_22_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r13.enableEditFlag();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function TransactionCodeEditComponent_button_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransactionCodeEditComponent_button_24_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r15.onSubmitofForm(ctx_r15.transactionCodeEditForm.value, ctx_r15.transactionCodeSummryData);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r2.transactionCodeEditForm.invalid && !ctx_r2.submitFlag);
        }
      }

      function TransactionCodeEditComponent_button_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransactionCodeEditComponent_button_26_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r17.onClickOfAuth();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function TransactionCodeEditComponent_button_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransactionCodeEditComponent_button_28_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r19.onClickOfClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function TransactionCodeEditComponent_button_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransactionCodeEditComponent_button_30_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r21.onClickOfReopen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Reopen");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function TransactionCodeEditComponent_button_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransactionCodeEditComponent_button_32_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r23.OndeleteofUser(ctx_r23.transactionCodeSummryData.userID);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _c1 = "/system-param-maintenance/transaction-code-summary";

      var _c2 = function _c2() {
        return [_c1];
      };

      var _TransactionCodeEditComponent = /*#__PURE__*/function () {
        function _TransactionCodeEditComponent(formBuilder, apiService, toastService, router, ref) {
          _classCallCheck(this, _TransactionCodeEditComponent);

          this.formBuilder = formBuilder;
          this.apiService = apiService;
          this.toastService = toastService;
          this.router = router;
          this.ref = ref;
          this.showList = false;
          this.editFlag = false;
          this.masterClass = {
            creatorDtStamp: '',
            creatorId: '',
            modNo: '',
            recordStatus: '',
            userId: '',
            verifiedBy: '',
            verifiedOnce: '',
            verifiedStatus: '',
            verifiedTime: ''
          };
          this.formValues = {
            trnDesc: '',
            trnCode: ''
          };
          this.transactionClass = [{
            trnDesc: '',
            trnCode: '',
            creatorDtStamp: '',
            creatorId: '',
            modNo: '',
            recordStatus: '',
            userId: '',
            verifiedBy: '',
            verifiedOnce: '',
            verifiedStatus: '',
            verifiedTime: '',
            id: ''
          }];
          this.submitFlag = false;
        }

        _createClass(_TransactionCodeEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentUser = localStorage.getItem("userFromLogin");
            this.transactionCodeEditForm = this.formBuilder.group({
              userId: [""],
              transactionData: this.formBuilder.array([this.createtransactionCodeGroup()])
            });
            this.getUserName();
            this.gettingSummaryData();
          }
        }, {
          key: "createtransactionCodeGroup",
          value: function createtransactionCodeGroup() {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
              'trnDesc': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
              'trnCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('')
            });
          }
        }, {
          key: "invalidLogin",
          value: function invalidLogin(event) {
            this.submitFlag = true;
          }
        }, {
          key: "onOptionsSelected",
          value: function onOptionsSelected(event) {
            var value = event.target.value;

            if (value) {
              this.transactionCodeEditForm.controls.userId.setValue(value);
              this.showList = false;
              console.log(value);
            }
          }
        }, {
          key: "removeData",
          value: function removeData(i) {
            var transactionData = this.transactionCodeEditForm.get('transactionData');

            if (transactionData.length > 1) {
              transactionData.removeAt(i);
            } else {
              transactionData.reset();
            }
          }
        }, {
          key: "deleteRowData",
          value: function deleteRowData(data) {
            var _this22 = this;

            console.log("this.transactionCodeSummryData.formValues", this.transactionCodeSummryData.formValues);
            this.transactionCodeSummryData.formValues.splice(data, 1);
            this.apiService.deleteRow(data.id).subscribe(function (resp) {
              _this22.deleteRowResp = resp;

              if (_this22.deleteRowResp == true) {
                _this22.submitFlag = true;

                _this22.transactionCodeSummryData.formValues.forEach(function (element) {
                  var row = _this22.formBuilder.group({
                    trnDesc: [element.trnDesc, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
                    trnCode: [element.trnCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
                    id: [element.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
                    userId: [element.userId, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
                    creatorDtStamp: [element.creatorDtStamp, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
                    creatorId: [element.creatorId, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
                    modNo: [element.modNo, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
                    recordStatus: [element.recordStatus, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
                    verifiedBy: [element.verifiedBy, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
                    verifiedOnce: [element.verifiedOnce, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
                    verifiedStatus: [element.verifiedStatus, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
                    verifiedTime: [element.verifiedTime, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
                  });

                  _this22.addtrnDec.push(row);
                });

                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Row Deleted Successfully!',
                  icon: 'success'
                });
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Failed to Delete Row Data!',
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
          key: "addFormGroup",
          value: function addFormGroup() {
            var transactionData = this.transactionCodeEditForm.get('transactionData');
            transactionData.push(this.createtransactionCodeGroup());
          }
        }, {
          key: "getUserName",
          value: function getUserName() {
            var _this23 = this;

            this.apiService.getUserName().subscribe(function (userName) {
              _this23.userName = userName;
              _this23.usersList = [];

              if (_this23.userName) {
                console.log(_this23.userName);
              } else {
                console.log("No name");
              }
            });
          }
        }, {
          key: "keyPress",
          value: function keyPress(user) {
            if (user) {
              this.showList = true;
              var list = this.userName.filter(function (option) {
                return option.includes(user);
              });
              this.usersList = list;
            } else {
              this.showList = false;
              this.usersList = [];
            }
          }
        }, {
          key: "gettingSummaryData",
          value: function gettingSummaryData() {
            var _this24 = this;

            this.apiService.getSummaryDataTransactionCode().subscribe(function (summaryData) {
              _this24.transactionCodeSummryData = summaryData;
              console.log("this.transactionCodeSummryData", _this24.transactionCodeSummryData.formValues);

              _this24.auditLog();

              var userID = _this24.transactionCodeSummryData.userID;

              _this24.transactionCodeEditForm.controls.userId.setValue(userID);

              _this24.addtrnDec.removeAt(0);

              _this24.transactionCodeSummryData.formValues.forEach(function (element) {
                var row = _this24.formBuilder.group({
                  trnDesc: [element.trnDesc, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
                  trnCode: [element.trnCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
                  id: [element.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
                  userId: [element.userId, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
                  creatorDtStamp: [element.creatorDtStamp, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
                  creatorId: [element.creatorId, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
                  modNo: [element.modNo, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
                  recordStatus: [element.recordStatus, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
                  verifiedBy: [element.verifiedBy, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
                  verifiedOnce: [element.verifiedOnce, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
                  verifiedStatus: [element.verifiedStatus, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
                  verifiedTime: [element.verifiedTime, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
                });

                _this24.addtrnDec.push(row);
              });
            });
          }
        }, {
          key: "addtrnDec",
          get: function get() {
            return this.transactionCodeEditForm.get('transactionData');
          }
        }, {
          key: "enableEditFlag",
          value: function enableEditFlag() {
            this.editFlag = true;
          }
        }, {
          key: "auditLog",
          value: function auditLog() {
            if (this.transactionCodeSummryData.verifiedStatus === 'U') {
              this.transactionCodeSummryData.verifiedStatus = 'UNAUTHORIZED';
            }

            if (this.transactionCodeSummryData.verifiedStatus === 'A') {
              this.transactionCodeSummryData.verifiedStatus = 'AUTHORIZED';
            }

            if (this.transactionCodeSummryData.recordStatus === 'O') {
              this.transactionCodeSummryData.recordStatus = 'OPEN';
            }

            if (this.transactionCodeSummryData.recordStatus === 'C') {
              this.transactionCodeSummryData.recordStatus = 'CLOSED';
            }

            if (this.transactionCodeSummryData.verifiedOnce === 'N') {
              this.transactionCodeSummryData.verifiedOnce = 'NO';
            }

            if (this.transactionCodeSummryData.verifiedOnce === 'Y') {
              this.transactionCodeSummryData.verifiedOnce = 'YES';
            }
          }
        }, {
          key: "onClickOfAuth",
          value: function onClickOfAuth() {
            var _this25 = this;

            if (this.transactionCodeSummryData.creatorId === this.currentUser) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: 'Maker Cannot Authorized the Record!',
                icon: 'error'
              });
            } else {
              this.apiService.onClckOfAuthTransactionCode(this.transactionCodeSummryData.userID, this.currentUser).subscribe(function (authResp) {
                console.log(authResp);
                _this25.transactionCodeSummryData = authResp;

                _this25.auditLog();

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
            var _this26 = this;

            this.apiService.onclickOfCloseTransactionCode(this.transactionCodeSummryData.userID, this.currentUser).subscribe(function (closeResp) {
              console.log(closeResp);
              _this26.transactionCodeSummryData = closeResp;

              _this26.auditLog();

              _this26.ref.markForCheck();

              if (_this26.transactionCodeSummryData) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'You Closed the Record!',
                  icon: 'success'
                });
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
            var _this27 = this;

            this.apiService.onclickOfReopenTransactionCode(this.transactionCodeSummryData.userID, this.currentUser).subscribe(function (openResp) {
              console.log(openResp);
              _this27.transactionCodeSummryData = openResp;

              _this27.auditLog();

              _this27.ref.markForCheck();

              if (_this27.transactionCodeSummryData) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'You Re-Opened the Record!',
                  icon: 'success'
                });
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
          value: function OndeleteofUser(UserId) {
            var _this28 = this;

            console.log("USer", UserId);
            this.apiService.deleteUserData(UserId).subscribe(function (resp) {
              if (resp == true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'User Deleted Successfully!',
                  icon: 'success'
                });

                _this28.router.navigateByUrl('/system-param-maintenance/transaction-code-summary');
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Failed to Delete User Data!',
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
          key: "onSubmitofForm",
          value: function onSubmitofForm(formData, auditData) {
            var _this29 = this;

            console.log("formData,auditData", formData, auditData);
            this.masterClass.creatorDtStamp = auditData.creatorDtStamp;
            this.masterClass.creatorId = this.currentUser;
            this.masterClass.modNo = auditData.modNo;
            this.masterClass.recordStatus = auditData.recordStatus;
            this.masterClass.verifiedBy = auditData.verifiedBy;
            this.masterClass.verifiedOnce = auditData.verifiedOnce;
            this.masterClass.verifiedStatus = auditData.verifiedStatus;
            this.masterClass.verifiedTime = auditData.verifiedTime;
            this.masterClass.userId = auditData.userID;
            this.apiService.updateAuditData(this.masterClass).subscribe(function (savetrnres) {
              _this29.savetrnResponse = savetrnres;
              _this29.transactionCodeSummryData = savetrnres;

              _this29.auditLog();

              if (_this29.savetrnResponse) {
                _this29.updateTransactionCode(formData);

                _this29.disablesubmit = true;
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Failed to Update Data.',
                  icon: 'error'
                });
              }
            });
          }
        }, {
          key: "updateTransactionCode",
          value: function updateTransactionCode(formData) {
            var _this30 = this;

            this.transactionClass = formData.transactionData;
            this.apiService.updateTransactionCode(this.transactionClass, this.currentUser).subscribe(function (savetrnres) {
              _this30.updatetrnResp = savetrnres;

              if (_this30.updatetrnResp == true) {
                _this30.submitFlag = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Data updated successfully!',
                  icon: 'success'
                });
                _this30.editFlag = false;
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Failed to Update Data.',
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

        return _TransactionCodeEditComponent;
      }();

      _TransactionCodeEditComponent.ɵfac = function TransactionCodeEditComponent_Factory(t) {
        return new (t || _TransactionCodeEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
      };

      _TransactionCodeEditComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _TransactionCodeEditComponent,
        selectors: [["npr-transaction-code-edit"]],
        decls: 124,
        vars: 22,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "formStyle", 3, "formGroup"], [1, "dbCardStyle"], [1, "row", "gy-12"], [1, "col-lg-4"], ["id", "usersId", "type", "text", "oninput", "this.value = this.value.toUpperCase()", "readonly", "", "formControlName", "userId", "placeholder", "User Id", "value", "", 1, "form-control"], ["formArrayName", "transactionData", 1, "row", "gy-4"], ["class", "row", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "col-sm"], [1, "row", "g-3"], [1, "col-auto"], ["href", "javascript:void(0)", 1, "addIcon", 3, "disabled", "click"], ["src", "assets/images/plus-icon.svg", "alt", "..."], [1, "col-lg-12"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], ["class", "btn smBtn minWdSmBtn btnUpdate", 3, "click", 4, "ngIf"], ["class", "btn smBtn minWdSmBtn btnPrimary", 3, "disabled", "click", 4, "ngIf"], ["class", "btn smBtn minWdSmBtn btnAuth", 3, "click", 4, "ngIf"], ["class", "btn smBtn minWdSmBtn btnPrimary", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], ["src", "assets/images/maker-icon.svg", "alt", "..."], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], ["src", "assets/images/checker-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/auth-status-icon.svg", "alt", "..."], [1, "row", 3, "formGroupName"], ["id", "transactionDes", "formControlName", "trnDesc", "type", "text", "placeholder", "Transaction Description", 1, "form-control", 3, "readonly", "ngModelChange"], ["id", "transactionCode", "formControlName", "trnCode", "placeholder", "Transaction Code", "required", "", 1, "form-control", 3, "readonly", "ngModelChange"], [1, "deleteIcon2", 3, "ngClass", "click"], ["src", "assets/images/delete-icon.svg", "alt", "..."], [1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"]],
        template: function TransactionCodeEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Transaction Code Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, TransactionCodeEditComponent_div_12_Template, 11, 6, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransactionCodeEditComponent_Template_button_click_16_listener() {
              return ctx.addFormGroup();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, TransactionCodeEditComponent_button_22_Template, 2, 0, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, TransactionCodeEditComponent_button_24_Template, 2, 1, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, TransactionCodeEditComponent_button_26_Template, 2, 0, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, TransactionCodeEditComponent_button_28_Template, 2, 0, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, TransactionCodeEditComponent_button_30_Template, 2, 0, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, TransactionCodeEditComponent_button_32_Template, 2, 0, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Maker");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "img", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Maker Time Stamp");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](62, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "Record Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](80, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "Checker");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](92, "img", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "Checker Time Stamp");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](99, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](105, "img", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109, "First Time Auth");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](117, "img", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "Auth Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

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
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.transactionCodeEditForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.transactionCodeEditForm.get("transactionData")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.editFlag && ctx.transactionCodeSummryData.recordStatus == "OPEN");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.transactionCodeSummryData.verifiedStatus == "UNAUTHORIZED" && !ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.transactionCodeSummryData.recordStatus == "OPEN" && !ctx.editFlag && ctx.transactionCodeSummryData.verifiedOnce == "Y");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.transactionCodeSummryData.recordStatus == "CLOSED" && !ctx.editFlag && ctx.transactionCodeSummryData.verifiedStatus == "AUTHORIZED");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.transactionCodeSummryData.verifiedOnce == "NO" && !ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](21, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.transactionCodeSummryData.creatorId);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](62, 17, ctx.transactionCodeSummryData.creatorDtStamp));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.transactionCodeSummryData.recordStatus);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.transactionCodeSummryData.verifiedBy);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](99, 19, ctx.transactionCodeSummryData.verifiedTime));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.transactionCodeSummryData.verifiedOnce);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.transactionCodeSummryData.verifiedStatus);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
        styles: [".isDisabled[_ngcontent-%COMP%] {\n  color: currentColor;\n  cursor: not-allowed;\n  pointer-events: none;\n  opacity: 0.5;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zYWN0aW9uLWNvZGUtZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUNKIiwiZmlsZSI6InRyYW5zYWN0aW9uLWNvZGUtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pc0Rpc2FibGVkIHtcclxuICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgXHJcbiAgfSJdfQ== */"]
      });
      /***/
    },

    /***/
    19926:
    /*!****************************************************************************************************************************************************!*\
      !*** ./src/app/views/system-param-maintenance/transaction-code-maintenance/transaction-code-maintenance/transaction-code-maintenance.component.ts ***!
      \****************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TransactionCodeMaintenanceComponent": function TransactionCodeMaintenanceComponent() {
          return (
            /* binding */
            _TransactionCodeMaintenanceComponent
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

      function TransactionCodeMaintenanceComponent_tr_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransactionCodeMaintenanceComponent_tr_22_Template_a_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);

            var transactionData_r1 = restoredCtx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r2.sendingDataforEdit(transactionData_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var transactionData_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", transactionData_r1.userId, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transactionData_r1.verifiedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](8, 3, transactionData_r1.creatorDtStamp, "medium"));
        }
      }

      var _c0 = function _c0() {
        return ["/system-param-maintenance/transaction-code-new"];
      };

      var _c1 = function _c1() {
        return ["/dashboard"];
      };

      var _TransactionCodeMaintenanceComponent = /*#__PURE__*/function () {
        function _TransactionCodeMaintenanceComponent(apiService, toastService, router) {
          _classCallCheck(this, _TransactionCodeMaintenanceComponent);

          this.apiService = apiService;
          this.toastService = toastService;
          this.router = router;
          this.dtOptions = {};
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        }

        _createClass(_TransactionCodeMaintenanceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 5,
              columnDefs: [{
                type: 'date',
                'targets': [2]
              }],
              order: [[2, 'desc']],
              processing: true,
              lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]]
            };
            this.getTransactionCodeSummary();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.dtTrigger.unsubscribe();
          }
        }, {
          key: "getTransactionCodeSummary",
          value: function getTransactionCodeSummary() {
            var _this31 = this;

            this.apiService.gettingTransactionCodeSummary().subscribe(function (resp) {
              _this31.transactionCodeData = resp;

              _this31.dtTrigger.next();

              if (_this31.transactionCodeData != null) {
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
          value: function sendingDataforEdit(data) {
            var _this32 = this;

            var userID = data.userId;
            this.apiService.gettingTransactionDatabyID(data.userId).subscribe(function (trndataResp) {
              _this32.transactionDataResp = trndataResp;

              if (_this32.transactionDataResp) {
                _this32.apiService.setSummaryDataTransactionCode({
                  userID: data.userId,
                  creatorDtStamp: data.creatorDtStamp,
                  creatorId: data.creatorId,
                  modNo: data.modNo,
                  recordStatus: data.recordStatus,
                  verifiedStatus: data.verifiedStatus,
                  verifiedBy: data.verifiedBy,
                  verifiedOnce: data.verifiedOnce,
                  verifiedTime: data.verifiedTime,
                  formValues: _this32.transactionDataResp
                });

                _this32.router.navigate(["/system-param-maintenance/transaction-code-edit"]);
              }
            });
          }
        }]);

        return _TransactionCodeMaintenanceComponent;
      }();

      _TransactionCodeMaintenanceComponent.ɵfac = function TransactionCodeMaintenanceComponent_Factory(t) {
        return new (t || _TransactionCodeMaintenanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
      };

      _TransactionCodeMaintenanceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _TransactionCodeMaintenanceComponent,
        selectors: [["npr-transaction-code-maintenance"]],
        decls: 23,
        vars: 7,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "routerLink"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["datatable", "", "id", "dbTable1", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [1, "primaryColor", 3, "click"]],
        template: function TransactionCodeMaintenanceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Transaction Code Maintenance Summary");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "USER ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "STATUS");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "DATE");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, TransactionCodeMaintenanceComponent_tr_22_Template, 9, 6, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.transactionCodeData);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2FjdGlvbi1jb2RlLW1haW50ZW5hbmNlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    90223:
    /*!************************************************************************************************************************************!*\
      !*** ./src/app/views/system-param-maintenance/transaction-code-maintenance/transaction-code-new/transaction-code-new.component.ts ***!
      \************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TransactionCodeNewComponent": function TransactionCodeNewComponent() {
          return (
            /* binding */
            _TransactionCodeNewComponent
          );
        },

        /* harmony export */
        "TrnDataMaster": function TrnDataMaster() {
          return (
            /* binding */
            _TrnDataMaster
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

      function TransactionCodeNewComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransactionCodeNewComponent_div_15_Template_a_click_10_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);

            var i_r2 = restoredCtx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r3.removeData(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r2 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r2);
        }
      }

      var _c0 = "/system-param-maintenance/transaction-code-summary";

      var _c1 = function _c1() {
        return [_c0];
      };

      var _TransactionCodeNewComponent = /*#__PURE__*/function () {
        function _TransactionCodeNewComponent(formBuilder, apiService, toastService) {
          _classCallCheck(this, _TransactionCodeNewComponent);

          this.formBuilder = formBuilder;
          this.apiService = apiService;
          this.toastService = toastService;
          this.showList = false;
          this.masterClass = {
            creatorId: '',
            userId: ''
          };
          this.formValues = {
            trnDesc: '',
            trnCode: ''
          };
        }

        _createClass(_TransactionCodeNewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentUser = localStorage.getItem("userFromLogin");
            this.transactionCodeForm = this.formBuilder.group({
              userId: [""],
              verifiedBy: [""],
              verifiedTime: [""],
              recordStatus: [""],
              verifiedOnce: [""],
              modNo: [""],
              verifiedStatus: [""],
              creatorDtStamp: [""],
              creatorId: [""],
              transactionData: this.formBuilder.array([this.createtransactionCodeGroup()])
            });
            this.getUserName();
          }
        }, {
          key: "createtransactionCodeGroup",
          value: function createtransactionCodeGroup() {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
              'trnDesc': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
              'trnCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('')
            });
          }
        }, {
          key: "removeData",
          value: function removeData(i) {
            var transactionData = this.transactionCodeForm.get('transactionData');

            if (transactionData.length > 1) {
              transactionData.removeAt(i);
            } else {
              transactionData.reset();
            }
          }
        }, {
          key: "addFormGroup",
          value: function addFormGroup() {
            var transactionData = this.transactionCodeForm.get('transactionData');
            transactionData.push(this.createtransactionCodeGroup());
          }
        }, {
          key: "getUserName",
          value: function getUserName() {
            var _this33 = this;

            this.apiService.getUserName().subscribe(function (userName) {
              _this33.userName = userName;
              _this33.usersList = [];
              var allUserID = _this33.userName;
              var list = document.getElementById('allusers');
              allUserID.forEach(function (item) {
                var option = document.createElement('option');
                option.value = item;
                list.appendChild(option);
              });

              if (_this33.userName) {
                console.log(_this33.userName);
              } else {
                console.log("No name");
              }
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(transactionCodeForm) {
            var _this34 = this;

            this.masterClass.creatorId = this.currentUser;
            this.masterClass.userId = transactionCodeForm.userId;
            this.formValues = transactionCodeForm.transactionData;
            this.apiService.saveTrnCodeMaster(this.masterClass).subscribe(function (res) {
              if (res) {
                _this34.apiService.saveTrnCode(_this34.formValues, _this34.masterClass.userId, _this34.currentUser).subscribe(function (res) {
                  if (res == true) {
                    // this.toastService.successMessage('Data Saved Successfully!.', '');
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Data Saved Successfully!',
                      icon: 'success'
                    });
                  } else {
                    // this.toastService.errorMessage('Failed to Save Data!', '');
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Failed to Save Data.',
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

                _this34.transactionCodeForm.reset();
              }
            });
          }
        }]);

        return _TransactionCodeNewComponent;
      }();

      _TransactionCodeNewComponent.ɵfac = function TransactionCodeNewComponent_Factory(t) {
        return new (t || _TransactionCodeNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService));
      };

      _TransactionCodeNewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _TransactionCodeNewComponent,
        selectors: [["npr-transaction-code-new"]],
        decls: 31,
        vars: 5,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "formStyle", 3, "formGroup"], [1, "dbCardStyle"], [1, "row", "gy-12"], [1, "col-lg-4"], ["for", "roleName", 1, "formLbl"], ["formControlName", "userId", "oninput", "this.value = this.value.toUpperCase()", "list", "allusers", "id", "exampleDataList", "placeholder", "Select User ID", 1, "form-control"], ["id", "allusers"], ["formArrayName", "transactionData", 1, "row", "gy-4"], ["class", "row", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "col-sm"], [1, "row", "g-3"], [1, "col-auto"], ["href", "javascript:void(0)", 1, "addIcon", 3, "click"], ["src", "assets/images/plus-icon.svg", "alt", "..."], [1, "col-lg-12"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], ["type", "submit", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [1, "row", 3, "formGroupName"], ["id", "transactionDes", "formControlName", "trnDesc", "type", "text", "placeholder", "Transaction Description", "value", "", 1, "form-control"], ["id", "transactionCode", "formControlName", "trnCode", "placeholder", "Transaction Code", "value", "", "required", "", 1, "form-control"], ["href", "javascript:void(0);", 1, "deleteIcon2", 3, "click"], ["src", "assets/images/delete-icon.svg", "alt", "..."]],
        template: function TransactionCodeNewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Transaction Code Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "User ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "datalist", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, TransactionCodeNewComponent_div_15_Template, 12, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransactionCodeNewComponent_Template_a_click_20_listener() {
              return ctx.addFormGroup();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransactionCodeNewComponent_Template_button_click_26_listener() {
              return ctx.onSubmit(ctx.transactionCodeForm.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Exit");

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
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.transactionCodeForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.transactionCodeForm.get("transactionData")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.transactionCodeForm.controls.transactionData.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c1));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator],
        styles: [".form-class[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #797979;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-bottom: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-left: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-right: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zYWN0aW9uLWNvZGUtbmV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFFQSx3RUFBQTtBQUFKIiwiZmlsZSI6InRyYW5zYWN0aW9uLWNvZGUtbmV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY2xhc3Mge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzc5Nzk3OTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dFxyXG59XHJcblxyXG4iXX0= */"]
      });

      var _TrnDataMaster = /*#__PURE__*/_createClass(function _TrnDataMaster() {
        _classCallCheck(this, _TrnDataMaster);
      });
      /***/

    },

    /***/
    51619:
    /*!*************************************************************************************************************************************!*\
      !*** ./src/app/views/system-param-maintenance/user-gcc-ac-maintenance/user-gcc-ac-maintenance/user-gcc-ac-maintenance.component.ts ***!
      \*************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserGccAcMaintenanceComponent": function UserGccAcMaintenanceComponent() {
          return (
            /* binding */
            _UserGccAcMaintenanceComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! angular-datatables */
      50481);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      31443);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function UserGccAcMaintenanceComponent_tr_41_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserGccAcMaintenanceComponent_tr_41_Template_a_click_10_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);

            var trnData_r2 = restoredCtx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r3.deleteUserGLData(trnData_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var trnData_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](trnData_r2.userId);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](trnData_r2.permission);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](trnData_r2.trnCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](trnData_r2.trnDesc);
        }
      }

      function UserGccAcMaintenanceComponent_tr_60_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserGccAcMaintenanceComponent_tr_60_Template_a_click_10_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);

            var accData_r5 = restoredCtx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r6.deleteaccountClassData(accData_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var accData_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](accData_r5.userId);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](accData_r5.permission);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](accData_r5.trnCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](accData_r5.trnDesc);
        }
      }

      var _c0 = "/system-param-maintenance/user-gl-acc-maintenance-new";

      var _c1 = function _c1() {
        return [_c0];
      };

      var _c2 = function _c2() {
        return ["/dashboard"];
      };

      var _UserGccAcMaintenanceComponent = /*#__PURE__*/function () {
        function _UserGccAcMaintenanceComponent(apiService, formBuilder, toastService) {
          _classCallCheck(this, _UserGccAcMaintenanceComponent);

          this.apiService = apiService;
          this.formBuilder = formBuilder;
          this.toastService = toastService;
          this.showList = false;
          this.enableButton = false;
          this.onbackSpace = false;
          this.dtOptions = [];
          this.dtTrigger1 = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
          this.dtTrigger2 = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        }

        _createClass(_UserGccAcMaintenanceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dtOptions[0] = {
              pagingType: 'full_numbers',
              pageLength: 5,
              processing: true,
              lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]]
            };
            this.dtOptions[1] = {
              pagingType: 'full_numbers',
              pageLength: 5,
              processing: true,
              lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]]
            };
            this.userGlSummryForm = this.formBuilder.group({
              userId: [""]
            });
            this.getUserName();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Do not forget to unsubscribe the event
            this.dtTrigger1.unsubscribe();
            this.dtTrigger2.unsubscribe();
          }
        }, {
          key: "getUserName",
          value: function getUserName() {
            var _this35 = this;

            this.apiService.getUserName().subscribe(function (userName) {
              _this35.userName = userName;
              _this35.usersList = [];
              var allUserID = _this35.userName;
              var list = document.getElementById('allusers');
              allUserID.forEach(function (item) {
                var option = document.createElement('option');
                option.value = item;
                list.appendChild(option);
              });

              if (_this35.userName) {
                console.log(_this35.userName);
              } else {
                console.log("No name");
              }
            });
          }
        }, {
          key: "keyPress",
          value: function keyPress(user) {
            if (user) {
              this.showList = true;
              var list = this.userName.filter(function (option) {
                return option.includes(user);
              });
              this.usersList = list;
            } else {
              this.showList = false;
              this.usersList = [];
            }
          }
        }, {
          key: "onOptionsSelected",
          value: function onOptionsSelected(event) {
            this.userID = event.target.value;

            if (this.userID) {
              this.userGlSummryForm.controls.userId.setValue(this.userID);
              this.showList = false;
              this.enableButton = true;
              console.log(this.userID);
            } else {
              this.enableButton = false;
            }
          }
        }, {
          key: "keyUpevent",
          value: function keyUpevent(event) {
            if (event.keyCode === 8) {
              this.enableButton = false;
            } else {
              this.onbackSpace = true;
            }
          }
        }, {
          key: "getGlTransactiondata",
          value: function getGlTransactiondata() {
            var _this36 = this;

            this.apiService.getUserIdGlData(this.userID).subscribe(function (transactiondata) {
              _this36.transactionData = transactiondata;

              _this36.dtTrigger1.next();

              console.log(_this36.transactionData);

              if (_this36.transactionData[0].userId != null) {
                // this.toastService.successMessage('Data Fetched Successfully!.', '');
                return;
              } else {
                // this.toastService.errorMessage('Failed to Fetch GL Code Summary Data!.', '');
                return;
              }
            });
            this.apiService.getUserIdAccData(this.userID).subscribe(function (accountClass) {
              _this36.accountClassData = accountClass;

              _this36.dtTrigger2.next();

              console.log(_this36.accountClassData);

              if (_this36.accountClassData[0].userId == null) {// this.toastService.errorMessage('Failed to Fetch Account Class Summary Data!', '');
              }
            });
          }
        }, {
          key: "deleteUserGLData",
          value: function deleteUserGLData(row) {
            var _this37 = this;

            console.log(row);
            var userID = row.userId;
            this.apiService.deleteGlDataUser(row, userID).subscribe(function (res) {
              _this37.deleteGLResp = res;

              if (_this37.deleteGLResp) {
                // this.toastService.successMessage('Data Saved Successfully!.', '');
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  title: 'Transaction Mapping Deleted successfully!',
                  icon: 'success'
                });

                _this37.getGlTransactiondata();
              } else {
                // this.toastService.errorMessage('Failed to Save Data!', '');
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  title: 'Failed to Delete Data!',
                  icon: 'error'
                });
              }
            }, function (error) {
              if (_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpErrorResponse) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  text: 'Server Error!',
                  icon: 'error'
                });
              }
            });
          }
        }, {
          key: "deleteaccountClassData",
          value: function deleteaccountClassData(row) {
            var _this38 = this;

            console.log(row);
            var userID = row.userId;
            this.apiService.deleteAcDataUser(row, userID).subscribe(function (res) {
              _this38.deleteaccResp = res;

              if (_this38.deleteaccResp) {
                // this.toastService.successMessage('Data Saved Successfully!.', '');
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  title: 'Transaction Mapping Deleted successfully!',
                  icon: 'success'
                });

                _this38.getGlTransactiondata();
              } else {
                // this.toastService.errorMessage('Failed to Save Data!', '');
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  title: 'Failed to Delete Data!',
                  icon: 'error'
                });
              }
            }, function (error) {
              if (_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpErrorResponse) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  text: 'Server Error!',
                  icon: 'error'
                });
              }
            });
          }
        }]);

        return _UserGccAcMaintenanceComponent;
      }();

      _UserGccAcMaintenanceComponent.ɵfac = function UserGccAcMaintenanceComponent_Factory(t) {
        return new (t || _UserGccAcMaintenanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService));
      };

      _UserGccAcMaintenanceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _UserGccAcMaintenanceComponent,
        selectors: [["npr-user-gcc-ac-maintenance"]],
        viewQuery: function UserGccAcMaintenanceComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.dtElements = _t);
          }
        },
        decls: 61,
        vars: 12,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "row", "g-3", "pb-3", "justify-content-end"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "routerLink"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [1, "dbCardStyle"], [1, "titleStyle"], [1, "formStyle", 3, "formGroup"], [1, "row", "gy-4"], [1, "col-lg-4"], ["formControlName", "userId", "oninput", "this.value = this.value.toUpperCase()", "list", "allusers", "id", "exampleDataList", "placeholder", "Select User ID", 1, "form-control", 3, "change", "keyup"], ["id", "allusers"], [1, "btn", "btnOutlinePrimary", "active", 3, "disabled", "click"], [1, "dbCardStyle", "dbCardStyle2", "p-0"], [1, "titleCol"], ["datatable", "", "id", "dbTable1", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [1, "tblIcon"], [1, "deleteIcon2", 3, "click"], ["src", "assets/images/delete-icon.svg", "alt", "..."]],
        template: function UserGccAcMaintenanceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "User GL/ACC Maintenance Summary");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "New");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Choose the user id and click get transaction");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function UserGccAcMaintenanceComponent_Template_input_change_18_listener($event) {
              return ctx.onOptionsSelected($event);
            })("keyup", function UserGccAcMaintenanceComponent_Template_input_keyup_18_listener($event) {
              return ctx.keyUpevent($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "datalist", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserGccAcMaintenanceComponent_Template_button_click_21_listener() {
              return ctx.getGlTransactiondata();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Get Transaction");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "GL Code Summary");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "table", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "User ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Permission");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Transaction Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Transaction Code Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, UserGccAcMaintenanceComponent_tr_41_Template, 12, 4, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Account Class Summary");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "table", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "User ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Permission");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Transaction Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Transaction Code Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](60, UserGccAcMaintenanceComponent_tr_60_Template, 12, 4, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.userGlSummryForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.enableButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dtOptions", ctx.dtOptions[0])("dtTrigger", ctx.dtTrigger1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.transactionData);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dtOptions", ctx.dtOptions[1])("dtTrigger", ctx.dtTrigger2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.accountClassData);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf],
        styles: [".form-class[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #797979;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-bottom: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-left: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-right: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItZ2NjLWFjLW1haW50ZW5hbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFFQSx3RUFBQTtBQUFKIiwiZmlsZSI6InVzZXItZ2NjLWFjLW1haW50ZW5hbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY2xhc3Mge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzc5Nzk3OTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dFxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    14438:
    /*!*********************************************************************************************************************!*\
      !*** ./src/app/views/system-param-maintenance/user-gcc-ac-maintenance/user-gcc-ac-new/user-gcc-ac-new.component.ts ***!
      \*********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserGccAcNewComponent": function UserGccAcNewComponent() {
          return (
            /* binding */
            _UserGccAcNewComponent
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

      function UserGccAcNewComponent_option_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", i_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r4);
        }
      }

      function UserGccAcNewComponent_div_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserGccAcNewComponent_div_32_Template_a_click_10_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);

            var i_r6 = restoredCtx.index;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r7.removeuserGLData(i_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r6 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r6);
        }
      }

      function UserGccAcNewComponent_option_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var p_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", p_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](p_r9);
        }
      }

      function UserGccAcNewComponent_div_63_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserGccAcNewComponent_div_63_Template_a_click_10_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);

            var i_r11 = restoredCtx.index;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r12.removeaccountClassData(i_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r11 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r11);
        }
      }

      var _c0 = "/system-param-maintenance/user-gl-acc-maintenance-summary";

      var _c1 = function _c1() {
        return [_c0];
      };

      var _UserGccAcNewComponent = /*#__PURE__*/function () {
        function _UserGccAcNewComponent(formBuilder, apiService, toastService) {
          _classCallCheck(this, _UserGccAcNewComponent);

          this.formBuilder = formBuilder;
          this.apiService = apiService;
          this.toastService = toastService;
          this.showList = false;
          this.enableButton = true;
          this.onbackSpace = false;
          this.permissionvalue = ['Allow', 'Disallow'];
          this.permissionvalue1 = ['Allow', 'Disallow'];
          this.userGLValues = [{
            permission: '',
            trnDesc: '',
            trnCode: ''
          }];
          this.accClassDatas = [{
            permission: '',
            trnDesc: '',
            trnCode: ''
          }];
        }

        _createClass(_UserGccAcNewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // this.loginUser = localStorage.getItem('userFromLogin');
            this.loginUser = "JILU";
            this.userGLForm = this.formBuilder.group({
              userId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              permission: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              userGLData: this.formBuilder.array([this.createuserGLDataGroup()])
            });
            this.accountClassForm = this.formBuilder.group({
              userId: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              permission: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              accountMaintenanceData: this.formBuilder.array([this.createaccountClassDataGroup()])
            });
            this.getUserName();
          }
        }, {
          key: "createuserGLDataGroup",
          value: function createuserGLDataGroup() {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
              'trnDesc': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
              'trnCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('')
            });
          }
        }, {
          key: "createaccountClassDataGroup",
          value: function createaccountClassDataGroup() {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
              'trnDesc': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
              'trnCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('')
            });
          }
        }, {
          key: "adduserGLFormGroup",
          value: function adduserGLFormGroup() {
            var userGLData = this.userGLForm.get('userGLData');
            userGLData.push(this.createuserGLDataGroup());
          }
        }, {
          key: "addaccountClassFormGroup",
          value: function addaccountClassFormGroup() {
            var accountMaintenanceData = this.accountClassForm.get('accountMaintenanceData');
            accountMaintenanceData.push(this.createaccountClassDataGroup());
          }
        }, {
          key: "removeuserGLData",
          value: function removeuserGLData(i) {
            var userGLData = this.userGLForm.get('userGLData');

            if (userGLData.length > 1) {
              userGLData.removeAt(i);
            } else {
              userGLData.reset();
            }
          }
        }, {
          key: "removeaccountClassData",
          value: function removeaccountClassData(i) {
            var accountMaintenanceData = this.accountClassForm.get('accountMaintenanceData');

            if (accountMaintenanceData.length > 1) {
              accountMaintenanceData.removeAt(i);
            } else {
              accountMaintenanceData.reset();
            }
          }
        }, {
          key: "getUserName",
          value: function getUserName() {
            var _this39 = this;

            this.apiService.getUserName().subscribe(function (userName) {
              _this39.userName = userName;
              _this39.usersList = [];
              var allUserID = _this39.userName;
              var list = document.getElementById('allusers');
              allUserID.forEach(function (item) {
                var option = document.createElement('option');
                option.value = item;
                list.appendChild(option);
              });

              if (_this39.userName) {
                console.log(_this39.userName);
              } else {
                console.log("No name");
              }
            });
          }
        }, {
          key: "keyPress",
          value: function keyPress(user) {
            if (user) {
              this.showList = true;
              var list = this.userName.filter(function (option) {
                return option.includes(user);
              });
              this.usersList = list;
            } else {
              this.showList = false;
              this.usersList = [];
            }
          }
        }, {
          key: "onOptionsSelected",
          value: function onOptionsSelected(event) {
            this.userID = event.target.value;

            if (this.userID) {
              this.userGLForm.controls.userId.setValue(this.userID);
              this.showList = false;
              this.getGlTrndata();
              console.log(this.userID);
            }
          }
        }, {
          key: "resetAllTabs",
          value: function resetAllTabs() {
            this.userGLForm.reset();
            this.accountClassForm.reset();
          }
        }, {
          key: "keyUpevent",
          value: function keyUpevent(event) {
            if (event.keyCode === 8) {
              this.onbackSpace = true;
              this.showList = true;
              this.userGLForm.controls.permission.setValue('');
              this.accountClassForm.controls.permission.setValue('');
              this.permissionvalue = [''];
            } else {
              this.onbackSpace = false;
            }
          }
        }, {
          key: "getGlTrndata",
          value: function getGlTrndata() {
            var _this40 = this;

            this.apiService.getUserIdGlData(this.userID).subscribe(function (trndata) {
              _this40.userGLValues = trndata;

              if (_this40.userGLValues.length != 0) {
                _this40.permission = _this40.userGLValues[0].permission;

                _this40.permissionGLData(_this40.permission);
              } else {
                _this40.permissionALL();
              }
            });
          }
        }, {
          key: "permissionGLData",
          value: function permissionGLData(permission) {
            this.permissionvalue = [permission];
            this.userGLForm.controls.permission.setValue(this.permission);
          }
        }, {
          key: "permissionALL",
          value: function permissionALL() {
            this.permissionvalue = ['Allow', 'Disallow'];
          }
        }, {
          key: "onaccountClassChange",
          value: function onaccountClassChange(event) {
            this.userID = event.target.value;

            if (this.userID) {
              this.accountClassForm.controls.userId.setValue(this.userID);
              this.showList = false;
              this.getAccDatata();
              console.log(this.userID);
            }
          }
        }, {
          key: "getAccDatata",
          value: function getAccDatata() {
            var _this41 = this;

            this.apiService.getUserIdAccData(this.userID).subscribe(function (accdata) {
              _this41.accClassDatas = accdata;
              console.log(_this41.accClassDatas);

              if (_this41.accClassDatas.length != 0) {
                _this41.permission = _this41.accClassDatas[0].permission;

                _this41.permissionAccData(_this41.permission);
              } else {
                _this41.permissionALL();
              }
            });
          }
        }, {
          key: "permissionAccData",
          value: function permissionAccData(permission) {
            this.permissionvalue = [permission];
            this.accountClassForm.controls.permission.setValue(this.permission);
          }
        }, {
          key: "onSubmitGlForm",
          value: function onSubmitGlForm(userGLFormValue) {
            var _this42 = this;

            console.log("userGLFormValue", userGLFormValue);
            var userGlData = userGLFormValue.userGLData;
            var userID = userGLFormValue.userId;
            var permission = userGLFormValue.permission;
            this.apiService.saveuserGlCode(userGlData, userID, permission).subscribe(function (savetrnres) {
              _this42.userGLResp = savetrnres;

              if (_this42.userGLResp == true) {
                // this.toastService.successMessage('Data Saved Successfully!.', '');
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Data Saved Successfully!',
                  icon: 'success'
                });

                _this42.userGLForm.reset();
              } else {
                // this.toastService.errorMessage('Failed to Save Data!', '');
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Failed to Save Data.',
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
          key: "onSubmitAccountClassForm",
          value: function onSubmitAccountClassForm(accountClassForm) {
            var _this43 = this;

            console.log("accountClassForm", accountClassForm);
            var accountData = accountClassForm.accountMaintenanceData;
            var userID = accountClassForm.userId;
            var permission = accountClassForm.permission;
            this.apiService.saveAccountClassCode(accountData, userID, permission).subscribe(function (saveaccresp) {
              _this43.accountClassResp = saveaccresp;

              if (_this43.accountClassResp == true) {
                // this.toastService.successMessage('Data Saved Successfully!.', '');
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Data Saved Successfully!',
                  icon: 'success'
                });

                _this43.accountClassForm.reset();
              } else {
                // this.toastService.errorMessage('Failed to Save Data!', '');
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Failed to Save Data.',
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

        return _UserGccAcNewComponent;
      }();

      _UserGccAcNewComponent.ɵfac = function UserGccAcNewComponent_Factory(t) {
        return new (t || _UserGccAcNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService));
      };

      _UserGccAcNewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _UserGccAcNewComponent,
        selectors: [["npr-user-gcc-ac-new"]],
        decls: 80,
        vars: 12,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "tabStyleCol"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], ["role", "presentation", 1, "nav-item"], ["id", "home-tab", "data-bs-toggle", "tab", "data-bs-target", "#home", "type", "button", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", "active", 3, "click"], ["id", "profile-tab", "data-bs-toggle", "tab", "data-bs-target", "#profile", "type", "button", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link", 3, "click"], [1, "dbCardStyle"], ["id", "myTabContent", 1, "tab-content"], ["id", "home", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "formStyle", 3, "formGroup"], [1, "titleStyle", "mb-3", "mb-md-4"], [1, "smTitle"], [1, "row", "gy-4"], [1, "col-lg-4", "col-sm-6"], ["for", "permission", 1, "formLbl"], ["formControlName", "userId", "oninput", "this.value = this.value.toUpperCase()", "list", "allusers", "id", "exampleDataList", "placeholder", "Select User ID", 1, "form-control"], ["id", "allusers"], ["formControlName", "permission", "aria-label", "Default select example", 1, "form-select"], ["class", "form-class", 3, "value", 4, "ngFor", "ngForOf"], ["formArrayName", "userGLData"], ["class", "row gy-2", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "col-lg-12"], [1, "row", "g-3", "pb-3", "pt-3"], [1, "col-sm"], [1, "row", "g-3"], [1, "col-auto"], ["href", "javascript:void(0)", 1, "addIcon", 3, "click"], ["src", "assets/images/plus-icon.svg", "alt", "..."], [1, "col-sm-auto"], [1, "row", "g-3", "justify-content-end"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["id", "profile", "role", "tabpanel", "aria-labelledby", "profile-tab", 1, "tab-pane", "fade"], ["formArrayName", "accountMaintenanceData"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], [1, "form-class", 3, "value"], [1, "row", "gy-2", 3, "formGroupName"], ["id", "glCode", "type", "text", "required", "", "formControlName", "trnCode", "placeholder", "GL Code", "value", "", 1, "form-control"], ["id", "glCodeDesc", "type", "text", "required", "", "formControlName", "trnDesc", "placeholder", "GL Code Description", "value", "", 1, "form-control"], ["href", "javascript:void(0);", 1, "deleteIcon2", 3, "click"], ["src", "assets/images/delete-icon.svg", "alt", "..."], ["id", "accClass", "type", "text", "required", "", "formControlName", "trnCode", "placeholder", "Account Class", "value", "", 1, "form-control"], ["id", "accClassDesc", "type", "text", "required", "", "formControlName", "trnDesc", "placeholder", "Account Class Description", "value", "", 1, "form-control"]],
        template: function UserGccAcNewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Gl/ ACC Code Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserGccAcNewComponent_Template_button_click_7_listener() {
              return ctx.resetAllTabs();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "User GL Maintenace");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserGccAcNewComponent_Template_button_click_10_listener() {
              return ctx.resetAllTabs();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Account Class Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "form", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "h2", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "GL Code Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "User Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "datalist", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Code Permission");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "select", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, UserGccAcNewComponent_option_29_Template, 2, 2, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, UserGccAcNewComponent_div_32_Template, 12, 1, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserGccAcNewComponent_Template_a_click_38_listener() {
              return ctx.adduserGLFormGroup();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserGccAcNewComponent_Template_button_click_44_listener() {
              return ctx.onSubmitGlForm(ctx.userGLForm.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "h2", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Account Class Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "form", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "datalist", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "select", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](60, UserGccAcNewComponent_option_60_Template, 2, 2, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, UserGccAcNewComponent_div_63_Template, 12, 1, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserGccAcNewComponent_Template_a_click_69_listener() {
              return ctx.addaccountClassFormGroup();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserGccAcNewComponent_Template_button_click_75_listener() {
              return ctx.onSubmitAccountClassForm(ctx.accountClassForm.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

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
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.userGLForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.permissionvalue);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.userGLForm.get("userGLData")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.userGLForm.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.accountClassForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.permissionvalue);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.accountClassForm.get("accountMaintenanceData")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.accountClassForm.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c1));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArrayName, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator],
        styles: [".form-class[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #797979;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-bottom: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-left: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-right: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItZ2NjLWFjLW5ldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBRUEsd0VBQUE7QUFBSiIsImZpbGUiOiJ1c2VyLWdjYy1hYy1uZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jbGFzcyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogLjM3NXJlbSAuNzVyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiAjNzk3OTc5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWJlYjtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ViZWJlYjtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0XHJcbn0iXX0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_views_system-param-maintenance_system-param-maintenance_module_ts-es5.js.map