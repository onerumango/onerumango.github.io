(function () {
  "use strict";

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_users_users_module_ts"], {
    /***/
    10460:
    /*!***********************************************************************************************!*\
      !*** ./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MultiSelectComponent": function MultiSelectComponent() {
          return (
            /* binding */
            _MultiSelectComponent
          );
        },

        /* harmony export */
        "NgMultiSelectDropDownModule": function NgMultiSelectDropDownModule() {
          return (
            /* binding */
            _NgMultiSelectDropDownModule
          );
        },

        /* harmony export */
        "ɵa": function ɵa() {
          return (
            /* binding */
            DROPDOWN_CONTROL_VALUE_ACCESSOR
          );
        },

        /* harmony export */
        "ɵb": function ɵb() {
          return (
            /* binding */
            ListFilterPipe
          );
        },

        /* harmony export */
        "ɵc": function ɵc() {
          return (
            /* binding */
            ClickOutsideDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      76834);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function MultiSelectComponent_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0._placeholder);
        }
      }

      function MultiSelectComponent_span_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelectComponent_span_4_Template_a_click_4_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var item_r8 = restoredCtx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.onItemClick($event, item_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r8 = ctx.$implicit;
          var k_r9 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", k_r9 > ctx_r1._settings.itemsShowLimit - 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r8.text, "\xA0");
        }
      }

      function MultiSelectComponent_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+", ctx_r2.itemShowRemaining(), "");
        }
      }

      function MultiSelectComponent_li_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelectComponent_li_10_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.toggleSelectAll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r3.isAllItemsSelected())("disabled", ctx_r3.disabled || ctx_r3.isLimitSelectionReached());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](!ctx_r3.isAllItemsSelected() ? ctx_r3._settings.selectAllText : ctx_r3._settings.unSelectAllText);
        }
      }

      function MultiSelectComponent_li_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiSelectComponent_li_11_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.filter.text = $event;
          })("ngModelChange", function MultiSelectComponent_li_11_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.onFilterTextChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", ctx_r4.disabled)("placeholder", ctx_r4._settings.searchPlaceholderText)("ngModel", ctx_r4.filter.text);
        }
      }

      function MultiSelectComponent_li_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelectComponent_li_13_Template_li_click_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var item_r17 = restoredCtx.$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.onItemClick($event, item_r17);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r17 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r5.isSelected(item_r17))("disabled", ctx_r5.disabled || ctx_r5.isLimitSelectionReached() && !ctx_r5.isSelected(item_r17) || item_r17.isDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", item_r17.text);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r17.text);
        }
      }

      function MultiSelectComponent_li_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6._settings.noFilteredDataAvailablePlaceholderText);
        }
      }

      function MultiSelectComponent_li_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7._settings.noDataAvailablePlaceholderText);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "dropdown-multiselect--active": a0
        };
      };

      var ListItem = /*#__PURE__*/_createClass(function ListItem(source) {
        _classCallCheck(this, ListItem);

        if (typeof source === 'string' || typeof source === 'number') {
          this.id = this.text = source;
          this.isDisabled = false;
        }

        if (typeof source === 'object') {
          this.id = source.id;
          this.text = source.text;
          this.isDisabled = source.isDisabled;
        }
      });

      var ListFilterPipe = /*#__PURE__*/function () {
        function ListFilterPipe() {
          _classCallCheck(this, ListFilterPipe);
        }

        _createClass(ListFilterPipe, [{
          key: "transform",
          value: function transform(items, filter) {
            var _this = this;

            if (!items || !filter) {
              return items;
            }

            return items.filter(function (item) {
              return _this.applyFilter(item, filter);
            });
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(item, filter) {
            if (typeof item.text === 'string' && typeof filter.text === 'string') {
              return !(filter.text && item.text && item.text.toLowerCase().indexOf(filter.text.toLowerCase()) === -1);
            } else {
              return !(filter.text && item.text && item.text.toString().toLowerCase().indexOf(filter.text.toString().toLowerCase()) === -1);
            }
          }
        }]);

        return ListFilterPipe;
      }();

      ListFilterPipe.ɵfac = function ListFilterPipe_Factory(t) {
        return new (t || ListFilterPipe)();
      };

      ListFilterPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "multiSelectFilter",
        type: ListFilterPipe,
        pure: false
      });
      var DROPDOWN_CONTROL_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _MultiSelectComponent;
        }),
        multi: true
      };

      var noop = function noop() {};

      var ɵ0 = noop;

      var _MultiSelectComponent = /*#__PURE__*/function () {
        function MultiSelectComponent(listFilterPipe, cdr) {
          _classCallCheck(this, MultiSelectComponent);

          this.listFilterPipe = listFilterPipe;
          this.cdr = cdr;
          this._data = [];
          this.selectedItems = [];
          this.isDropdownOpen = true;
          this._placeholder = "Select";
          this._sourceDataType = null; // to keep note of the source data type. could be array of string/number/object

          this._sourceDataFields = []; // store source data fields names

          this.filter = new ListItem(this.data);
          this.defaultSettings = {
            singleSelection: false,
            idField: "id",
            textField: "text",
            disabledField: "isDisabled",
            enableCheckAll: true,
            selectAllText: "Select All",
            unSelectAllText: "UnSelect All",
            allowSearchFilter: false,
            limitSelection: -1,
            clearSearchFilter: true,
            maxHeight: 197,
            itemsShowLimit: 999999999999,
            searchPlaceholderText: "Search",
            noDataAvailablePlaceholderText: "No data available",
            noFilteredDataAvailablePlaceholderText: "No filtered data available",
            closeDropDownOnSelection: false,
            showSelectedItemsAtTop: false,
            defaultOpen: false,
            allowRemoteDataSearch: false
          };
          this.disabled = false;
          this.onFilterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.onDropDownClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.onDeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.onSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.onDeSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.onTouchedCallback = noop;
          this.onChangeCallback = noop;
        }

        _createClass(MultiSelectComponent, [{
          key: "placeholder",
          set: function set(value) {
            if (value) {
              this._placeholder = value;
            } else {
              this._placeholder = "Select";
            }
          }
        }, {
          key: "settings",
          set: function set(value) {
            if (value) {
              this._settings = Object.assign(this.defaultSettings, value);
            } else {
              this._settings = Object.assign(this.defaultSettings);
            }
          }
        }, {
          key: "data",
          set: function set(value) {
            var _this2 = this;

            if (!value) {
              this._data = [];
            } else {
              var firstItem = value[0];
              this._sourceDataType = typeof firstItem;
              this._sourceDataFields = this.getFields(firstItem);
              this._data = value.map(function (item) {
                return typeof item === "string" || typeof item === "number" ? new ListItem(item) : new ListItem({
                  id: item[_this2._settings.idField],
                  text: item[_this2._settings.textField],
                  isDisabled: item[_this2._settings.disabledField]
                });
              });
            }
          }
        }, {
          key: "onFilterTextChange",
          value: function onFilterTextChange($event) {
            this.onFilterChange.emit($event);
          }
        }, {
          key: "onItemClick",
          value: function onItemClick($event, item) {
            if (this.disabled || item.isDisabled) {
              return false;
            }

            var found = this.isSelected(item);
            var allowAdd = this._settings.limitSelection === -1 || this._settings.limitSelection > 0 && this.selectedItems.length < this._settings.limitSelection;

            if (!found) {
              if (allowAdd) {
                this.addSelected(item);
              }
            } else {
              this.removeSelected(item);
            }

            if (this._settings.singleSelection && this._settings.closeDropDownOnSelection) {
              this.closeDropdown();
            }
          }
        }, {
          key: "writeValue",
          value: function writeValue(value) {
            var _this3 = this;

            if (value !== undefined && value !== null && value.length > 0) {
              if (this._settings.singleSelection) {
                try {
                  if (value.length >= 1) {
                    var firstItem = value[0];
                    this.selectedItems = [typeof firstItem === "string" || typeof firstItem === "number" ? new ListItem(firstItem) : new ListItem({
                      id: firstItem[this._settings.idField],
                      text: firstItem[this._settings.textField],
                      isDisabled: firstItem[this._settings.disabledField]
                    })];
                  }
                } catch (e) {// console.error(e.body.msg);
                }
              } else {
                var _data = value.map(function (item) {
                  return typeof item === "string" || typeof item === "number" ? new ListItem(item) : new ListItem({
                    id: item[_this3._settings.idField],
                    text: item[_this3._settings.textField],
                    isDisabled: item[_this3._settings.disabledField]
                  });
                });

                if (this._settings.limitSelection > 0) {
                  this.selectedItems = _data.splice(0, this._settings.limitSelection);
                } else {
                  this.selectedItems = _data;
                }
              }
            } else {
              this.selectedItems = [];
            }

            this.onChangeCallback(value);
            this.cdr.markForCheck();
          } // From ControlValueAccessor interface

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChangeCallback = fn;
          } // From ControlValueAccessor interface

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouchedCallback = fn;
          } // Set touched on blur

        }, {
          key: "onTouched",
          value: function onTouched() {
            // this.closeDropdown();
            this.onTouchedCallback();
          }
        }, {
          key: "trackByFn",
          value: function trackByFn(index, item) {
            return item.id;
          }
        }, {
          key: "isSelected",
          value: function isSelected(clickedItem) {
            var found = false;
            this.selectedItems.forEach(function (item) {
              if (clickedItem.id === item.id) {
                found = true;
              }
            });
            return found;
          }
        }, {
          key: "isLimitSelectionReached",
          value: function isLimitSelectionReached() {
            return this._settings.limitSelection === this.selectedItems.length;
          }
        }, {
          key: "isAllItemsSelected",
          value: function isAllItemsSelected() {
            // get disabld item count
            var filteredItems = this.listFilterPipe.transform(this._data, this.filter);
            var itemDisabledCount = filteredItems.filter(function (item) {
              return item.isDisabled;
            }).length; // take disabled items into consideration when checking

            if ((!this.data || this.data.length === 0) && this._settings.allowRemoteDataSearch) {
              return false;
            }

            return filteredItems.length === this.selectedItems.length + itemDisabledCount;
          }
        }, {
          key: "showButton",
          value: function showButton() {
            if (!this._settings.singleSelection) {
              if (this._settings.limitSelection > 0) {
                return false;
              } // this._settings.enableCheckAll = this._settings.limitSelection === -1 ? true : false;


              return true; // !this._settings.singleSelection && this._settings.enableCheckAll && this._data.length > 0;
            } else {
              // should be disabled in single selection mode
              return false;
            }
          }
        }, {
          key: "itemShowRemaining",
          value: function itemShowRemaining() {
            return this.selectedItems.length - this._settings.itemsShowLimit;
          }
        }, {
          key: "addSelected",
          value: function addSelected(item) {
            if (this._settings.singleSelection) {
              this.selectedItems = [];
              this.selectedItems.push(item);
            } else {
              this.selectedItems.push(item);
            }

            this.onChangeCallback(this.emittedValue(this.selectedItems));
            this.onSelect.emit(this.emittedValue(item));
          }
        }, {
          key: "removeSelected",
          value: function removeSelected(itemSel) {
            var _this4 = this;

            this.selectedItems.forEach(function (item) {
              if (itemSel.id === item.id) {
                _this4.selectedItems.splice(_this4.selectedItems.indexOf(item), 1);
              }
            });
            this.onChangeCallback(this.emittedValue(this.selectedItems));
            this.onDeSelect.emit(this.emittedValue(itemSel));
          }
        }, {
          key: "emittedValue",
          value: function emittedValue(val) {
            var _this5 = this;

            var selected = [];

            if (Array.isArray(val)) {
              val.map(function (item) {
                selected.push(_this5.objectify(item));
              });
            } else {
              if (val) {
                return this.objectify(val);
              }
            }

            return selected;
          }
        }, {
          key: "objectify",
          value: function objectify(val) {
            if (this._sourceDataType === 'object') {
              var obj = {};
              obj[this._settings.idField] = val.id;
              obj[this._settings.textField] = val.text;

              if (this._sourceDataFields.includes(this._settings.disabledField)) {
                obj[this._settings.disabledField] = val.isDisabled;
              }

              return obj;
            }

            if (this._sourceDataType === 'number') {
              return Number(val.id);
            } else {
              return val.text;
            }
          }
        }, {
          key: "toggleDropdown",
          value: function toggleDropdown(evt) {
            evt.preventDefault();

            if (this.disabled && this._settings.singleSelection) {
              return;
            }

            this._settings.defaultOpen = !this._settings.defaultOpen;

            if (!this._settings.defaultOpen) {
              this.onDropDownClose.emit();
            }
          }
        }, {
          key: "closeDropdown",
          value: function closeDropdown() {
            this._settings.defaultOpen = false; // clear search text

            if (this._settings.clearSearchFilter) {
              this.filter.text = "";
            }

            this.onDropDownClose.emit();
          }
        }, {
          key: "toggleSelectAll",
          value: function toggleSelectAll() {
            if (this.disabled) {
              return false;
            }

            if (!this.isAllItemsSelected()) {
              // filter out disabled item first before slicing
              this.selectedItems = this.listFilterPipe.transform(this._data, this.filter).filter(function (item) {
                return !item.isDisabled;
              }).slice();
              this.onSelectAll.emit(this.emittedValue(this.selectedItems));
            } else {
              this.selectedItems = [];
              this.onDeSelectAll.emit(this.emittedValue(this.selectedItems));
            }

            this.onChangeCallback(this.emittedValue(this.selectedItems));
          }
        }, {
          key: "getFields",
          value: function getFields(inputData) {
            var fields = [];

            if (typeof inputData !== "object") {
              return fields;
            } // tslint:disable-next-line:forin


            for (var prop in inputData) {
              fields.push(prop);
            }

            return fields;
          }
        }]);

        return MultiSelectComponent;
      }();

      _MultiSelectComponent.ɵfac = function MultiSelectComponent_Factory(t) {
        return new (t || _MultiSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ListFilterPipe), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
      };

      _MultiSelectComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MultiSelectComponent,
        selectors: [["ng-multiselect-dropdown"]],
        hostBindings: function MultiSelectComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function MultiSelectComponent_blur_HostBindingHandler() {
              return ctx.onTouched();
            });
          }
        },
        inputs: {
          disabled: "disabled",
          placeholder: "placeholder",
          settings: "settings",
          data: "data"
        },
        outputs: {
          onFilterChange: "onFilterChange",
          onDropDownClose: "onDropDownClose",
          onSelect: "onSelect",
          onDeSelect: "onDeSelect",
          onSelectAll: "onSelectAll",
          onDeSelectAll: "onDeSelectAll"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([DROPDOWN_CONTROL_VALUE_ACCESSOR])],
        decls: 18,
        vars: 23,
        consts: [["tabindex", "0", 1, "multiselect-dropdown", 3, "blur", "clickOutside"], ["tabindex", "-1", 1, "dropdown-btn", 3, "click"], [4, "ngIf"], ["class", "selected-item-container", 4, "ngFor", "ngForOf", "ngForTrackBy"], [2, "float", "right !important", "padding-right", "4px", 3, "ngClass"], ["style", "padding-right: 15px;", 4, "ngIf"], [1, "dropdown-multiselect__caret"], [1, "dropdown-list", 3, "hidden"], [1, "item1"], ["class", "multiselect-item-checkbox", "style", "border-bottom: 1px solid #ccc;padding:10px", 3, "click", 4, "ngIf"], ["class", "filter-textbox", 4, "ngIf"], [1, "item2"], ["class", "multiselect-item-checkbox", 3, "click", 4, "ngFor", "ngForOf"], ["class", "no-filtered-data", 4, "ngIf"], ["class", "no-data", 4, "ngIf"], [1, "selected-item-container"], [1, "selected-item", 3, "hidden"], [2, "padding-left", "2px", "color", "white", 3, "click"], [2, "padding-right", "15px"], [1, "multiselect-item-checkbox", 2, "border-bottom", "1px solid #ccc", "padding", "10px", 3, "click"], ["type", "checkbox", "aria-label", "multiselect-select-all", 3, "checked", "disabled"], [1, "filter-textbox"], ["type", "text", "aria-label", "multiselect-search", 3, "readOnly", "placeholder", "ngModel", "ngModelChange"], [1, "multiselect-item-checkbox", 3, "click"], ["type", "checkbox", 3, "checked", "disabled"], [1, "no-filtered-data"], [1, "no-data"]],
        template: function MultiSelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function MultiSelectComponent_Template_div_blur_0_listener() {
              return ctx.onTouched();
            })("clickOutside", function MultiSelectComponent_Template_div_clickOutside_0_listener() {
              return ctx.closeDropdown();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelectComponent_Template_span_click_2_listener($event) {
              return ctx.toggleDropdown($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MultiSelectComponent_span_3_Template, 2, 1, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MultiSelectComponent_span_4_Template, 6, 2, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MultiSelectComponent_span_6_Template, 2, 1, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MultiSelectComponent_li_10_Template, 4, 3, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MultiSelectComponent_li_11_Template, 2, 3, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MultiSelectComponent_li_13_Template, 4, 4, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "multiSelectFilter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MultiSelectComponent_li_15_Template, 3, 1, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "multiSelectFilter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MultiSelectComponent_li_17_Template, 3, 1, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedItems.length == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectedItems)("ngForTrackBy", ctx.trackByFn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx._settings.defaultOpen));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.itemShowRemaining() > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx._settings.defaultOpen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx._data.length > 0 || ctx._settings.allowRemoteDataSearch) && !ctx._settings.singleSelection && ctx._settings.enableCheckAll && ctx._settings.limitSelection === -1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx._data.length > 0 || ctx._settings.allowRemoteDataSearch) && ctx._settings.allowSearchFilter);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", ctx._settings.maxHeight + "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 15, ctx._data, ctx.filter));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._data.length != 0 && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 18, ctx._data, ctx.filter).length == 0 && !ctx._settings.allowRemoteDataSearch);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._data.length == 0 && !ctx._settings.allowRemoteDataSearch);
          }
        },
        directives: function directives() {
          return [ClickOutsideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel];
        },
        pipes: function pipes() {
          return [ListFilterPipe];
        },
        styles: [".multiselect-dropdown[_ngcontent-%COMP%]{position:relative;width:100%;font-size:inherit;font-family:inherit}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]{display:inline-block;border:1px solid #adadad;width:100%;padding:6px 12px;margin-bottom:0;font-weight:400;line-height:1.52857143;text-align:left;vertical-align:middle;cursor:pointer;background-image:none;border-radius:4px}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item-container[_ngcontent-%COMP%]{display:flex;float:left}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item-container[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]{border:1px solid #337ab7;margin-right:4px;background:#337ab7;padding:0 5px;color:#fff;border-radius:2px;float:left;max-width:100px}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item-container[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item-container[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]:hover{box-shadow:1px 1px #959595}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect__caret[_ngcontent-%COMP%]{line-height:16px;display:block;position:absolute;box-sizing:border-box;width:40px;height:38px;right:1px;top:0;padding:4px 8px;margin:0;text-decoration:none;text-align:center;cursor:pointer;transition:transform .2s}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect__caret[_ngcontent-%COMP%]:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-style:solid;border-width:8px 8px 0;border-color:#999 transparent;content:\"\"}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect--active[_ngcontent-%COMP%]   .dropdown-multiselect__caret[_ngcontent-%COMP%]{transform:rotateZ(180deg)}.multiselect-dropdown[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background-color:#eceeef}.dropdown-list[_ngcontent-%COMP%]{position:absolute;padding-top:6px;width:100%;z-index:9999;border:1px solid #ccc;border-radius:3px;background:#fff;margin-top:10px;box-shadow:0 1px 5px #959595}.dropdown-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:6px 10px;cursor:pointer;text-align:left}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;position:relative;padding:10px}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:0;width:100%;padding:0 0 0 26px}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:0}.multiselect-item-checkbox[_ngcontent-%COMP%]:hover{background-color:#e4e3e3}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:focus + div[_ngcontent-%COMP%]:before, .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:hover + div[_ngcontent-%COMP%]:before{border-color:#337ab7;background-color:#f2f2f2}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:active + div[_ngcontent-%COMP%]:before{transition-duration:0s}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;margin:0;color:#000}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]:before{box-sizing:content-box;content:\"\";color:#337ab7;position:absolute;top:50%;left:0;width:14px;height:14px;margin-top:-9px;border:2px solid #337ab7;text-align:center;transition:.4s}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]:after{box-sizing:content-box;content:\"\";position:absolute;transform:scale(0);transform-origin:50%;transition:transform .2s ease-out;background-color:transparent;top:50%;left:4px;width:8px;height:3px;margin-top:-4px;border-style:solid;border-color:#fff;border-width:0 0 3px 3px;-o-border-image:none;border-image:none;transform:rotate(-45deg) scale(0)}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled + div[_ngcontent-%COMP%]:before{border-color:#ccc}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:focus + div[_ngcontent-%COMP%]:before   .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:hover + div[_ngcontent-%COMP%]:before{background-color:inherit}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:checked + div[_ngcontent-%COMP%]:before{background-color:#ccc}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%]:after{content:\"\";transition:transform .2s ease-out;transform:rotate(-45deg) scale(1)}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%]:before{-webkit-animation:.2s ease-in borderscale;animation:.2s ease-in borderscale;background:#337ab7}@-webkit-keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}@keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}"],
        changeDetection: 0
      });

      _MultiSelectComponent.ctorParameters = function () {
        return [{
          type: ListFilterPipe
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }];
      };

      (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _MultiSelectComponent.prototype, "placeholder", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _MultiSelectComponent.prototype, "disabled", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _MultiSelectComponent.prototype, "settings", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)()], _MultiSelectComponent.prototype, "data", null);
      (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)("onFilterChange")], _MultiSelectComponent.prototype, "onFilterChange", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)("onDropDownClose")], _MultiSelectComponent.prototype, "onDropDownClose", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)("onSelect")], _MultiSelectComponent.prototype, "onSelect", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)("onDeSelect")], _MultiSelectComponent.prototype, "onDeSelect", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)("onSelectAll")], _MultiSelectComponent.prototype, "onSelectAll", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)("onDeSelectAll")], _MultiSelectComponent.prototype, "onDeSelectAll", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener)("blur")], _MultiSelectComponent.prototype, "onTouched", null);

      var ClickOutsideDirective = /*#__PURE__*/function () {
        function ClickOutsideDirective(_elementRef) {
          _classCallCheck(this, ClickOutsideDirective);

          this._elementRef = _elementRef;
          this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(ClickOutsideDirective, [{
          key: "onClick",
          value: function onClick(event, targetElement) {
            if (!targetElement) {
              return;
            }

            var clickedInside = this._elementRef.nativeElement.contains(targetElement);

            if (!clickedInside) {
              this.clickOutside.emit(event);
            }
          }
        }]);

        return ClickOutsideDirective;
      }();

      ClickOutsideDirective.ɵfac = function ClickOutsideDirective_Factory(t) {
        return new (t || ClickOutsideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };

      ClickOutsideDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ClickOutsideDirective,
        selectors: [["", "clickOutside", ""]],
        hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClickOutsideDirective_click_HostBindingHandler($event) {
              return ctx.onClick($event, $event.target);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
          }
        },
        outputs: {
          clickOutside: "clickOutside"
        }
      });

      ClickOutsideDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }];
      };

      (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)()], ClickOutsideDirective.prototype, "clickOutside", void 0);
      (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener)('document:click', ['$event', '$event.target'])], ClickOutsideDirective.prototype, "onClick", null);
      var NgMultiSelectDropDownModule_1;

      var _NgMultiSelectDropDownModule = NgMultiSelectDropDownModule_1 = /*#__PURE__*/function () {
        function NgMultiSelectDropDownModule() {
          _classCallCheck(this, NgMultiSelectDropDownModule);
        }

        _createClass(NgMultiSelectDropDownModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: NgMultiSelectDropDownModule_1
            };
          }
        }]);

        return NgMultiSelectDropDownModule;
      }();

      _NgMultiSelectDropDownModule.ɵfac = function NgMultiSelectDropDownModule_Factory(t) {
        return new (t || _NgMultiSelectDropDownModule)();
      };

      _NgMultiSelectDropDownModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _NgMultiSelectDropDownModule
      });
      _NgMultiSelectDropDownModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [ListFilterPipe],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListFilterPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
          args: [{
            name: 'multiSelectFilter',
            pure: false
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MultiSelectComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: "ng-multiselect-dropdown",
            template: "<div tabindex=\"0\" (blur)=\"onTouched()\" class=\"multiselect-dropdown\" (clickOutside)=\"closeDropdown()\">\n  <div [class.disabled]=\"disabled\">\n    <span tabindex=\"-1\" class=\"dropdown-btn\" (click)=\"toggleDropdown($event)\">\n      <span *ngIf=\"selectedItems.length == 0\">{{_placeholder}}</span>\n      <span *ngFor=\"let item of selectedItems; trackBy: trackByFn;let k = index\" class=\"selected-item-container\" >\n        <span class=\"selected-item\"  [hidden]=\"k  > (this._settings.itemsShowLimit-1)\">\n          <span >{{item.text}}&nbsp;</span>\n          <a style=\"padding-left:2px;color:white\" (click)=\"onItemClick($event,item)\">x</a>\n        </span>\n       \n      </span>\n      <span [ngClass]=\"{ 'dropdown-multiselect--active': _settings.defaultOpen }\" style=\"float:right !important;padding-right:4px\">\n        <span style=\"padding-right: 15px;\" *ngIf=\"itemShowRemaining()>0\">+{{itemShowRemaining()}}</span>\n        <span class=\"dropdown-multiselect__caret\"></span>\n      </span>\n    </span>\n  </div>\n  <div class=\"dropdown-list\" [hidden]=\"!_settings.defaultOpen\">\n    <ul class=\"item1\">\n      <li (click)=\"toggleSelectAll()\" *ngIf=\"(_data.length > 0 || _settings.allowRemoteDataSearch) && !_settings.singleSelection && _settings.enableCheckAll && _settings.limitSelection===-1\" class=\"multiselect-item-checkbox\" style=\"border-bottom: 1px solid #ccc;padding:10px\">\n        <input type=\"checkbox\" aria-label=\"multiselect-select-all\" [checked]=\"isAllItemsSelected()\" [disabled]=\"disabled || isLimitSelectionReached()\" />\n        <div>{{!isAllItemsSelected() ? _settings.selectAllText : _settings.unSelectAllText}}</div>\n      </li>\n      <li class=\"filter-textbox\" *ngIf=\"(_data.length>0 || _settings.allowRemoteDataSearch) && _settings.allowSearchFilter\">\n        <input type=\"text\" aria-label=\"multiselect-search\" [readOnly]=\"disabled\" [placeholder]=\"_settings.searchPlaceholderText\" [(ngModel)]=\"filter.text\" (ngModelChange)=\"onFilterTextChange($event)\">\n      </li>\n    </ul>\n    <ul class=\"item2\" [style.maxHeight]=\"_settings.maxHeight+'px'\">\n      <li *ngFor=\"let item of _data | multiSelectFilter:filter; let i = index;\" (click)=\"onItemClick($event,item)\" class=\"multiselect-item-checkbox\">\n        <input type=\"checkbox\" [attr.aria-label]=\"item.text\" [checked]=\"isSelected(item)\" [disabled]=\"disabled || (isLimitSelectionReached() && !isSelected(item)) || item.isDisabled\" />\n        <div>{{item.text}}</div>\n      </li>\n      <li class='no-filtered-data' *ngIf=\"_data.length != 0 && (_data | multiSelectFilter:filter).length == 0 && !_settings.allowRemoteDataSearch\">\n        <h5>{{_settings.noFilteredDataAvailablePlaceholderText}}</h5>\n      </li>\n      <li class='no-data' *ngIf=\"_data.length == 0 && !_settings.allowRemoteDataSearch\">\n        <h5>{{_settings.noDataAvailablePlaceholderText}}</h5>\n      </li>\n    </ul>\n  </div>\n</div>\n",
            providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
            styles: [".multiselect-dropdown{position:relative;width:100%;font-size:inherit;font-family:inherit}.multiselect-dropdown .dropdown-btn{display:inline-block;border:1px solid #adadad;width:100%;padding:6px 12px;margin-bottom:0;font-weight:400;line-height:1.52857143;text-align:left;vertical-align:middle;cursor:pointer;background-image:none;border-radius:4px}.multiselect-dropdown .dropdown-btn .selected-item-container{display:flex;float:left}.multiselect-dropdown .dropdown-btn .selected-item-container .selected-item{border:1px solid #337ab7;margin-right:4px;background:#337ab7;padding:0 5px;color:#fff;border-radius:2px;float:left;max-width:100px}.multiselect-dropdown .dropdown-btn .selected-item-container .selected-item span{overflow:hidden;text-overflow:ellipsis}.multiselect-dropdown .dropdown-btn .selected-item-container .selected-item a{text-decoration:none}.multiselect-dropdown .dropdown-btn .selected-item:hover{box-shadow:1px 1px #959595}.multiselect-dropdown .dropdown-btn .dropdown-multiselect__caret{line-height:16px;display:block;position:absolute;box-sizing:border-box;width:40px;height:38px;right:1px;top:0;padding:4px 8px;margin:0;text-decoration:none;text-align:center;cursor:pointer;transition:transform .2s}.multiselect-dropdown .dropdown-btn .dropdown-multiselect__caret:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-style:solid;border-width:8px 8px 0;border-color:#999 transparent;content:\"\"}.multiselect-dropdown .dropdown-btn .dropdown-multiselect--active .dropdown-multiselect__caret{transform:rotateZ(180deg)}.multiselect-dropdown .disabled>span{background-color:#eceeef}.dropdown-list{position:absolute;padding-top:6px;width:100%;z-index:9999;border:1px solid #ccc;border-radius:3px;background:#fff;margin-top:10px;box-shadow:0 1px 5px #959595}.dropdown-list ul{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list li{padding:6px 10px;cursor:pointer;text-align:left}.dropdown-list .filter-textbox{border-bottom:1px solid #ccc;position:relative;padding:10px}.dropdown-list .filter-textbox input{border:0;width:100%;padding:0 0 0 26px}.dropdown-list .filter-textbox input:focus{outline:0}.multiselect-item-checkbox:hover{background-color:#e4e3e3}.multiselect-item-checkbox input[type=checkbox]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.multiselect-item-checkbox input[type=checkbox]:focus+div:before,.multiselect-item-checkbox input[type=checkbox]:hover+div:before{border-color:#337ab7;background-color:#f2f2f2}.multiselect-item-checkbox input[type=checkbox]:active+div:before{transition-duration:0s}.multiselect-item-checkbox input[type=checkbox]+div{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;margin:0;color:#000}.multiselect-item-checkbox input[type=checkbox]+div:before{box-sizing:content-box;content:\"\";color:#337ab7;position:absolute;top:50%;left:0;width:14px;height:14px;margin-top:-9px;border:2px solid #337ab7;text-align:center;transition:.4s}.multiselect-item-checkbox input[type=checkbox]+div:after{box-sizing:content-box;content:\"\";position:absolute;transform:scale(0);transform-origin:50%;transition:transform .2s ease-out;background-color:transparent;top:50%;left:4px;width:8px;height:3px;margin-top:-4px;border-style:solid;border-color:#fff;border-width:0 0 3px 3px;-o-border-image:none;border-image:none;transform:rotate(-45deg) scale(0)}.multiselect-item-checkbox input[type=checkbox]:disabled+div:before{border-color:#ccc}.multiselect-item-checkbox input[type=checkbox]:disabled:focus+div:before .multiselect-item-checkbox input[type=checkbox]:disabled:hover+div:before{background-color:inherit}.multiselect-item-checkbox input[type=checkbox]:disabled:checked+div:before{background-color:#ccc}.multiselect-item-checkbox input[type=checkbox]:checked+div:after{content:\"\";transition:transform .2s ease-out;transform:rotate(-45deg) scale(1)}.multiselect-item-checkbox input[type=checkbox]:checked+div:before{-webkit-animation:.2s ease-in borderscale;animation:.2s ease-in borderscale;background:#337ab7}@-webkit-keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}@keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}"]
          }]
        }], function () {
          return [{
            type: ListFilterPipe
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }];
        }, {
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          onFilterChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ["onFilterChange"]
          }],
          onDropDownClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ["onDropDownClose"]
          }],
          onSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ["onSelect"]
          }],
          onDeSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ["onDeSelect"]
          }],
          onSelectAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ["onSelectAll"]
          }],
          onDeSelectAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ["onDeSelectAll"]
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          settings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          // Set touched on blur
          onTouched: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ["blur"]
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClickOutsideDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[clickOutside]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }];
        }, {
          clickOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['document:click', ['$event', '$event.target']]
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_NgMultiSelectDropDownModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule],
            declarations: [_MultiSelectComponent, ClickOutsideDirective, ListFilterPipe],
            providers: [ListFilterPipe],
            exports: [_MultiSelectComponent]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_NgMultiSelectDropDownModule, {
          declarations: function declarations() {
            return [_MultiSelectComponent, ClickOutsideDirective, ListFilterPipe];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule];
          },
          exports: function exports() {
            return [_MultiSelectComponent];
          }
        });
      })();
      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    83000:
    /*!**************************************************************!*\
      !*** ./src/app/views/users/user-list/user-list.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserListComponent": function UserListComponent() {
          return (
            /* binding */
            _UserListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/excel.service */
      58219);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/user.service */
      98613);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      77382);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular-datatables */
      50481);

      function UserListComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UserListComponent_div_4_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r4.exportAsXLSX();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "User Report \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "svg", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function UserListComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UserListComponent_div_7_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r6.createUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.roleCodes["new"].labelDescription);
        }
      }

      function UserListComponent_tr_32_button_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UserListComponent_tr_32_button_20_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);

            var users_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r12.deleteUser(users_r8.userId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function UserListComponent_tr_32_button_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UserListComponent_tr_32_button_21_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17);

            var users_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r15.onClickOfCloseOfModifyUSers(users_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function UserListComponent_tr_32_button_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UserListComponent_tr_32_button_22_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20);

            var users_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r18.onClickOfReOpenOfModifyUsers(users_r8.userId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function UserListComponent_tr_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UserListComponent_tr_32_Template_a_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);

            var users_r8 = restoredCtx.$implicit;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r21.modifyUser(users_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UserListComponent_tr_32_Template_button_click_18_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);

            var users_r8 = restoredCtx.$implicit;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r23.onClickOfAuthOfModifyUsers(users_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, UserListComponent_tr_32_button_20_Template, 2, 0, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, UserListComponent_tr_32_button_21_Template, 2, 0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, UserListComponent_tr_32_button_22_Template, 2, 0, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var users_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("routerLink", "/users/new/", users_r8.userId, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](users_r8.userId);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](users_r8.userName);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", users_r8.formattedRole, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](users_r8.department);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](users_r8.verifiedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](users_r8.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](16, 12, users_r8.creatorDtStamp, "medium"));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !(users_r8.verifiedStatus == "U" || users_r8.verifiedStatus == "Unauthorized"));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", users_r8.verifiedOnce == "N" || users_r8.verifiedOnce == "NO");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (users_r8.recordStatus == "O" || users_r8.recordStatus == "Open" || users_r8.recordStatus == "OPEN") && (users_r8.verifiedOnce == "Y" || users_r8.verifiedOnce == "YES"));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", users_r8.recordStatus == "C" || users_r8.recordStatus == "Close");
        }
      }

      function UserListComponent_ng_container_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Please wait... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }
      }

      var _c0 = function _c0() {
        return ["/dashboard"];
      };

      var _UserListComponent = /*#__PURE__*/function () {
        // editFlag = false;
        function _UserListComponent(api, excelService, route, userApi, roleService, cdr) {
          _classCallCheck(this, _UserListComponent);

          this.api = api;
          this.excelService = excelService;
          this.route = route;
          this.userApi = userApi;
          this.roleService = roleService;
          this.cdr = cdr;
          this.isLoading = false;
          this.dtOptions = {};
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe('en-US'); // this.dtOptions = {};

          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
          this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__.permissionsLabels();
          this.statusArr = ['Authorized', 'Unauthorized', 'Open', 'Close'];
          this.modifyUserObject = {};
          this.respArray = [];
          this.userObjWithAudit = {};
        }

        _createClass(_UserListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 5,
              columnDefs: [{
                type: 'date',
                targets: [6]
              }],
              order: [[6, 'desc']],
              processing: true,
              lengthMenu: [[5, 10, 20, 30, -1], [5, 10, 20, 30, "ALL"]] // columnDefs: [ { type: 'date', 'targets': [5] } ],
              // order: [[5, 'desc']],

            };
            this.getAllUsers();
            this.roleService.fetchScreenPermissions('Users');
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this6.roleCodes = message;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Do not forget to unsubscribe the event
            this.dtTrigger.unsubscribe();
          }
        }, {
          key: "getAllUsers",
          value: function getAllUsers() {
            var _this7 = this;

            this.isLoading = true;
            this.api.getAllUsersListService().subscribe(function (resp) {
              var _iterator = _createForOfIteratorHelper(resp.result),
                  _step;

              try {
                var _loop = function _loop() {
                  var item = _step.value;
                  item.verifiedStatus = _this7.statusArr.find(function (i) {
                    return i.startsWith(item.verifiedStatus);
                  });
                  item.recordStatus = _this7.statusArr.find(function (i) {
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

              _this7.allUsersList = resp.result.map(function (user) {
                var _a;

                return Object.assign(Object.assign({}, user), {
                  formattedRole: ((_a = user.newRoleForUser) === null || _a === void 0 ? void 0 : _a.length) > 2 ? "".concat(user.newRoleForUser.slice(0, 2).join(','), "...") : user.newRoleForUser
                });
              });
              _this7.isLoading = false;

              _this7.cdr.markForCheck();

              _this7.dtTrigger.next();
            });
          }
        }, {
          key: "modifyUser",
          value: function modifyUser(user) {
            console.log(user);
            this.currentUser = user; // this.route.navigate(["users/modify"]);
            // for(let i = 0; i < user.newRoleForUser.length; i++){
            //   this.newRoleForUser = user.newRoleForUser.length/5;
            // }

            this.userApi.setIndexValue({
              index: 'edit'
            });
            var navigationExtras = {
              queryParams: {
                // 'id': this.modifyUserObject.id,
                userId: this.currentUser.userId,
                userName: this.currentUser.userName,
                email: this.currentUser.email,
                ldapUserId: this.currentUser.ldapUserId,
                failedAttempts: this.currentUser.failedAttempts,
                mobile: this.currentUser.mobile,
                authStatus: this.currentUser.verifiedStatus,
                recordStatus: this.currentUser.recordStatus,
                autoAuth: this.currentUser.autoAuth,
                emailNotification: this.currentUser.emailNotification,
                maintAllowed: this.currentUser.maintAllowed,
                smsNotification: this.currentUser.smsNotification,
                userAccessOption: this.currentUser.userAccessOption,
                roleForUser: this.currentUser.roleForUser,
                creatorId: this.currentUser.creatorId,
                creatorDtStamp: this.currentUser.creatorDtStamp,
                verifierId: this.currentUser.verifierId,
                verifierDtStamp: this.currentUser.verifierDtStamp,
                encryptedPassword: this.currentUser.encryptedPassword,
                updatedBy: this.currentUser.updatedBy,
                fristTimeAuth: this.currentUser.verifiedOnce,
                newRoleForUser: this.currentUser.newRoleForUser,
                versionNo: this.currentUser.versionNo,
                statusForUser: this.currentUser.statusForUser,
                department: this.currentUser.department,
                intime: this.currentUser.intime,
                outtime: this.currentUser.outtime,
                pwdChangeDate: this.currentUser.pwdChangeDate,
                passwordGenerationType: this.currentUser.passwordGenerationType
              }
            };
            console.log(' newRoleForUser: ', this.currentUser.newRoleForUser);
            localStorage.setItem('userNavObj', JSON.stringify(this.currentUser)); // console.log(this.currentUser.intime, this.currentUser.outtime);
            //console.log(this.currentUser);department

            this.userApi.sendNavParam(navigationExtras);
            this.route.navigate(['users/new']);
          }
        }, {
          key: "editUser",
          value: function editUser(user) {
            console.log(user);
            this.currentUser = user; // this.route.navigate(["users/modify"]);

            this.userApi.setIndexValue({
              index: 'edit'
            });
            var navigationExtras = {
              queryParams: {
                // 'id': this.modifyUserObject.id,
                activeEdit: true,
                userId: this.currentUser.userId,
                userName: this.currentUser.userName,
                email: this.currentUser.email,
                ldapUserId: this.currentUser.ldapUserId,
                failedAttempts: this.currentUser.failedAttempts,
                mobile: this.currentUser.mobile,
                authStatus: this.currentUser.verifiedStatus,
                recordStatus: this.currentUser.recordStatus,
                autoAuth: this.currentUser.autoAuth,
                emailNotification: this.currentUser.emailNotification,
                maintAllowed: this.currentUser.maintAllowed,
                smsNotification: this.currentUser.smsNotification,
                userAccessOption: this.currentUser.userAccessOption,
                roleForUser: this.currentUser.roleForUser,
                creatorId: this.currentUser.creatorId,
                creatorDtStamp: this.currentUser.creatorDtStamp,
                verifierId: this.currentUser.verifierId,
                verifierDtStamp: this.currentUser.verifierDtStamp,
                encryptedPassword: this.currentUser.encryptedPassword,
                updatedBy: this.currentUser.updatedBy,
                fristTimeAuth: this.currentUser.verifiedOnce,
                newRoleForUser: this.currentUser.newRoleForUser,
                versionNo: this.currentUser.versionNo,
                statusForUser: this.currentUser.statusForUser,
                department: this.currentUser.department,
                intime: this.currentUser.intime,
                outtime: this.currentUser.outtime,
                pwdChangeDate: this.currentUser.pwdChangeDate
              }
            }; // console.log(this.currentUser.intime, this.currentUser.outtime);
            //console.log(this.currentUser);department

            this.userApi.sendNavParam(navigationExtras);
            this.route.navigate(['users/new']);
          }
        }, {
          key: "createUser",
          value: function createUser() {
            localStorage.removeItem('userNavObj');
            this.route.navigate(['users/new']);
            var navigationExtras = {
              queryParams: {}
            };
            this.userApi.sendNavParam(navigationExtras);
            this.userApi.setIndexValue({
              index: 'new'
            });
          }
        }, {
          key: "exportAsXLSX",
          value: function exportAsXLSX() {
            var _this8 = this;

            this.allUsersList.forEach(function (element) {
              if (element.creatorDtStamp !== null) {
                element.creatorDtStamp = _this8.pipe.transform(element.creatorDtStamp, 'dd-MMM-yy').toString();
                console.log(element.creatorDtStamp);
              } else if (element.verifierDtStamp !== null) {
                element.verifierDtStamp = _this8.pipe.transform(element.verifierDtStamp, 'dd-MMM-yy').toString();
              }
            });
            console.log(this.allUsersList);
            this.excelService.exportAsExcelFile(this.allUsersList, 'User_Report');
          }
        }, {
          key: "deleteUser",
          value: function deleteUser(userId) {
            var _this9 = this;

            // console.log(this.modifyUserObject);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
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
                _this9.userApi.onClickOfDeleteOfModifyUser(userId).subscribe(function (datafrombackendtoDelete) {
                  //console.log('deleteData', datafrombackendtoDelete);
                  _this9.deleteStatusFlag = datafrombackendtoDelete;

                  if (_this9.deleteStatusFlag) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: 'User is Deleted',
                      icon: 'success'
                    }).then(function () {
                      return window.location.reload();
                    }); // this.route.navigate(['/users']);
                    // window.location.reload();
                  }
                });
              }
            });

            if (this.deleteStatusFlag === false) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                icon: 'error',
                text: 'Failed to Delete user '
              });
            }
          }
        }, {
          key: "onClickOfAuthOfModifyUsers",
          value: function onClickOfAuthOfModifyUsers(users) {
            var _this10 = this;

            var lsUser = localStorage.getItem('userFromLogin');

            if (users.userId == lsUser) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                text: 'Self User Cannot Authorized the User',
                icon: 'error'
              });
            } else {
              if (users.creatorId === lsUser) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  title: 'Maker Cannot Authorized the User!',
                  icon: 'error'
                });
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
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
                    var UpdateUserAuthDto = {}; // UpdateUserAuthDto.userId = this.modifyUserObject.userId;

                    UpdateUserAuthDto.userId = users.userId;
                    UpdateUserAuthDto.makerId = lsUser;
                    console.log(UpdateUserAuthDto);

                    _this10.userApi.onClickOfAuthOfModifyUsers(UpdateUserAuthDto).subscribe(function (authResp) {
                      // console.log(authResp);
                      _this10.authStatusFlag = authResp; // this.getUserAuditData();

                      if (_this10.authStatusFlag) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                          text: 'User is Authorized',
                          icon: 'success'
                        }).then(function () {
                          return window.location.reload();
                        });
                      }
                    });
                  }
                }); // this.getUpdatedModifiedObject();
                // this.getUserAuditData();
                // this.ngOnInit();
              }
            }
          }
        }, {
          key: "onClickOfCloseOfModifyUSers",
          value: function onClickOfCloseOfModifyUSers(users) {
            var _this11 = this;

            this.modifyUserObject.userId = users.userId;
            this.modifyUserObject.creatorId = this.currentUser;
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
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
                var UpdateUserAuthDto = {};
                UpdateUserAuthDto.userId = _this11.modifyUserObject.userId;
                UpdateUserAuthDto.makerId = _this11.currentUser;

                _this11.userApi.onClickOfCloseOfModifyUsers(UpdateUserAuthDto).subscribe(function (dataofCloseFromBackend) {
                  _this11.statusFlag = dataofCloseFromBackend;

                  _this11.getUserAuditData();

                  if (_this11.statusFlag) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: 'User is Closed',
                      icon: 'success'
                    }).then(function () {
                      return window.location.reload();
                    });
                  }
                });
              }
            });
            this.closeHide = true;
            this.getUpdatedModifiedObject();
            this.getUserAuditData();

            if (this.statusFlag === false) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                icon: 'error',
                text: 'Failed to close user '
              });
            }
          }
        }, {
          key: "getUpdatedModifiedObject",
          value: function getUpdatedModifiedObject() {
            var _this12 = this;

            this.userApi.getUserObjModified(this.modifyUserObject.userId).subscribe(function (gettingBackendData) {
              //console.log('gettingBackendData', gettingBackendData);
              _this12.modifyUserObject = gettingBackendData; //console.log(this.modifyUserObject);
            });
          }
        }, {
          key: "onClickOfReOpenOfModifyUsers",
          value: function onClickOfReOpenOfModifyUsers(userId) {
            var _this13 = this;

            //console.log('on click of reopen of Modify user');
            this.modifyUserObject.userId = userId;
            this.modifyUserObject.creatorId = this.currentUser;
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
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
                var UpdateUserAuthDto = {};
                UpdateUserAuthDto.userId = _this13.modifyUserObject.userId;
                UpdateUserAuthDto.makerId = _this13.currentUser;

                _this13.userApi.onClickOfReopenOfModifyUser(UpdateUserAuthDto).subscribe(function (dataOfReopen) {
                  // console.log(dataOfReopen);
                  _this13.statusFlag = dataOfReopen;

                  _this13.getUserAuditData();

                  if (_this13.statusFlag) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: 'User is Reopened',
                      icon: 'success'
                    }).then(function () {
                      return window.location.reload();
                    });
                  }
                });
              }
            });
            this.openHide = true;
            this.getUpdatedModifiedObject();
            this.getUserAuditData();

            if (this.statusFlag === false) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                icon: 'error',
                text: 'Failed to open user '
              });
            }
          }
        }, {
          key: "getUserAuditData",
          value: function getUserAuditData() {
            var _this14 = this;

            // console.log(this.userObjWithAudit)
            this.userObjWithAudit.userId = localStorage.getItem('userFromLogin');
            this.userApi.getUserAuditService(this.userObjWithAudit.userId).subscribe(function (data) {
              _this14.userObjWithAudit = data; // console.log('dev code user audit: ',this.userObjWithAudit);
              // console.log(this.userObjWithAudit);

              if (_this14.userObjWithAudit.verifiedStatus === 'U') {
                _this14.userObjWithAudit.verifiedStatus = 'UNAUTHORIZED';
              }

              if (_this14.userObjWithAudit.verifiedStatus === 'A') {
                _this14.userObjWithAudit.verifiedStatus = 'AUTHORIZED';
              }
              /*
               */


              if (_this14.userObjWithAudit.verifiedOnce === 'N') {
                _this14.userObjWithAudit.verifiedOnce = 'NO';
              }

              if (_this14.userObjWithAudit.verifiedOnce === 'Y') {
                _this14.userObjWithAudit.verifiedOnce = 'YES';
              }
              /**
               * setting record status
               */


              if (_this14.userObjWithAudit.recordStatus === 'O') {
                _this14.userObjWithAudit.recordStatus = 'OPEN';
              }

              if (_this14.userObjWithAudit.recordStatus === 'C') {
                _this14.userObjWithAudit.recordStatus = 'CLOSE';
              }
            });
          }
        }]);

        return _UserListComponent;
      }();

      _UserListComponent.ɵfac = function UserListComponent_Factory(t) {
        return new (t || _UserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_3__.ExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_5__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef));
      };

      _UserListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _UserListComponent,
        selectors: [["npr-user-list"]],
        decls: 34,
        vars: 8,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["class", "file", "style", "margin-left: 15px", 4, "ngIf"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [1, "table-responsive"], ["datatable", "", 1, "dataTable", "table", "tableStyle", "tableStyleSelect", "nowrap", "vAlignMdl", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "file", 2, "margin-left", "15px"], [1, "btn", "smBtn", "btnPrimary", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-download", 2, "margin-top", "2%"], ["d", "M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"], ["d", "M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "primaryColor", 2, "cursor", "pointer", 3, "routerLink", "click"], ["title", "Authorize", 1, "btn", 2, "color", "red", 3, "disabled", "click"], ["src", "assets/images/authorize.svg", "alt", "Authorize", 1, "summaryIcon"], ["class", "btn", "style", "color: red", "title", "Delete", 3, "click", 4, "ngIf"], ["class", "btn", "style", "color: red", "title", "Close", 3, "click", 4, "ngIf"], ["class", "btn", "style", "color: red", "title", "Reopen", 3, "click", 4, "ngIf"], ["title", "Delete", 1, "btn", 2, "color", "red", 3, "click"], ["src", "assets/images/delete.svg", "alt", "...", 1, "summaryIcon"], ["title", "Close", 1, "btn", 2, "color", "red", 3, "click"], ["src", "assets/images/CROSS1.svg", "alt", "...", 1, "summaryIcon"], ["title", "Reopen", 1, "btn", 2, "color", "red", 3, "click"], ["src", "assets/images/open.svg", "alt", "...", 1, "summaryIcon"], [1, "loading-page-center"], [1, "indicator-progress"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"]],
        template: function UserListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "User Management");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, UserListComponent_div_4_Template, 7, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, UserListComponent_div_7_Template, 3, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "table", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "User ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "User Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Department");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Auth Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Record Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, UserListComponent_tr_32_Template, 23, 15, "tr", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, UserListComponent_ng_container_33_Template, 5, 0, "ng-container", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.roleCodes["new"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](7, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.allUsersList);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, angular_datatables__WEBPACK_IMPORTED_MODULE_6__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
        styles: ["textarea[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  min-height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBRUEsZ0JBQUE7QUFBRiIsImZpbGUiOiJ1c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZXh0YXJlYSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgLy8gcmVzaXplOiBub25lO1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuLy8gLmJ0dG4ge1xyXG4vLyAgIGNvbG9yOiByZWQ7XHJcbi8vICAgLy8gZm9udC1zaXplOiAxNnB4O1xyXG4vLyB9XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    55823:
    /*!************************************************************!*\
      !*** ./src/app/views/users/user-new/user-new.component.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserNewComponent": function UserNewComponent() {
          return (
            /* binding */
            _UserNewComponent
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


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/models/fmosNewRolePermissions */
      35383);
      /* harmony import */


      var src_app_shared_models_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/models/users */
      92803);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      77382);
      /* harmony import */


      var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/user.service */
      98613);
      /* harmony import */


      var src_app_shared_services_security_policy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/security-policy.service */
      10402);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var ng2_izitoast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng2-izitoast */
      27218);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/guards/can-deactivate.guard */
      50215);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ng-select/ng-select */
      88660);

      function UserNewComponent_label_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function UserNewComponent_label_11_Template_input_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r17.onSelectFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_label_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "img", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserNewComponent_label_12_Template_img_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r19["delete"]();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_19_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Please Enter User Id ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_19_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Enter Valid User Id ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_19_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Please Enter User Id(minimum 2 digits) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UserNewComponent_div_19_div_1_Template, 2, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, UserNewComponent_div_19_div_2_Template, 2, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, UserNewComponent_div_19_div_3_Template, 2, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.userForm.get("userId").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.userForm.get("userId").errors.pattern);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.userForm.get("userId").errors.minlength || ctx_r2.userForm.get("userId").errors.maxlength);
        }
      }

      function UserNewComponent_div_25_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Please Enter User Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UserNewComponent_div_25_div_1_Template, 2, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.userForm.get("userName").errors.required);
        }
      }

      function UserNewComponent_div_30_img_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 47);
        }
      }

      function UserNewComponent_div_30_img_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 48);
        }
      }

      function UserNewComponent_div_30_div_10_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Please Enter Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_30_div_10_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r29.errorMsg, " ");
        }
      }

      function UserNewComponent_div_30_div_10_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Password must contain Minimum ", ctx_r30.minPass, " characters. ");
        }
      }

      function UserNewComponent_div_30_div_10_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Password must contain Maximum ", ctx_r31.maxPass, " characters. ");
        }
      }

      function UserNewComponent_div_30_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UserNewComponent_div_30_div_10_div_1_Template, 2, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, UserNewComponent_div_30_div_10_div_2_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, UserNewComponent_div_30_div_10_div_3_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, UserNewComponent_div_30_div_10_div_4_Template, 2, 1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r27.userForm.get("password").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r27.userForm.get("password").errors.pattern);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r27.userForm.get("password").errors.minlength);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r27.userForm.get("password").errors.maxlength);
        }
      }

      function UserNewComponent_div_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keydown", function UserNewComponent_div_30_Template_input_keydown_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r33);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r32.onInputChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserNewComponent_div_30_Template_span_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r33);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r34.hide = !ctx_r34.hide;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, UserNewComponent_div_30_img_8_Template, 1, 0, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, UserNewComponent_div_30_img_9_Template, 1, 0, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, UserNewComponent_div_30_div_10_Template, 5, 4, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", ctx_r4.hide ? "password" : "text")("readonly", ctx_r4.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r4.hide);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r4.hide);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r4.userForm.get("password").invalid && (ctx_r4.userForm.get("password").dirty || ctx_r4.userForm.get("password").touched));
        }
      }

      function UserNewComponent_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 41);
        }
      }

      function UserNewComponent_div_38_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Please Enter Email Id ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_38_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Please Enter Valid Email Id ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UserNewComponent_div_38_div_1_Template, 2, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, UserNewComponent_div_38_div_2_Template, 2, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.userForm.get("email").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.userForm.get("email").errors.pattern);
        }
      }

      function UserNewComponent_div_45_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Please Enter Mobile Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_45_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Please Enter Valid Phone number with 10 digits ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UserNewComponent_div_45_div_1_Template, 2, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, UserNewComponent_div_45_p_2_Template, 2, 0, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.userForm.get("mobile").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.userForm.get("mobile").hasError("pattern") && ctx_r7.userForm.get("mobile").touched);
        }
      }

      function UserNewComponent_div_46_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "input", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function UserNewComponent_div_46_ng_template_6_Template_input_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r44);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

            return ctx_r43.seleceAndDisselect($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Select All");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return {
          standalone: true
        };
      };

      function UserNewComponent_div_46_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "input", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r45 = ctx.item;
          var item$_r46 = ctx.item$;
          var index_r47 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("id", "item-", index_r47, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", item$_r46.selected)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r45, " ");
        }
      }

      function UserNewComponent_div_46_ng_template_8_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r51 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r51, " ");
        }
      }

      function UserNewComponent_div_46_ng_template_8_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var items_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().items;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", items_r48.length - 2, " more...");
        }
      }

      function UserNewComponent_div_46_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, UserNewComponent_div_46_ng_template_8_div_0_Template, 2, 1, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, UserNewComponent_div_46_ng_template_8_div_2_Template, 3, 1, "div", 59);
        }

        if (rf & 2) {
          var items_r48 = ctx.items;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](1, 2, items_r48, 0, 2));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", items_r48.length > 2);
        }
      }

      function UserNewComponent_div_46_div_9_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Please Select Roles ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_46_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UserNewComponent_div_46_div_9_div_1_Template, 2, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r42.userForm.get("newRoleForUser").errors.required);
        }
      }

      function UserNewComponent_div_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "label", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Roles For User ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "ng-select", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, UserNewComponent_div_46_ng_template_6_Template, 3, 0, "ng-template", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, UserNewComponent_div_46_ng_template_7_Template, 3, 5, "ng-template", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, UserNewComponent_div_46_ng_template_8_Template, 3, 6, "ng-template", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, UserNewComponent_div_46_div_9_Template, 2, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx_r8.allRoleNames)("clearSearchOnAdd", true)("closeOnSelect", false)("multiple", true)("bindLabel", "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.userForm.get("newRoleForUser").invalid && (ctx_r8.userForm.get("newRoleForUser").dirty || ctx_r8.userForm.get("newRoleForUser").touched));
        }
      }

      function UserNewComponent_div_47_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "input", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function UserNewComponent_div_47_ng_template_6_Template_input_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r59);

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

            return ctx_r58.seleceAndDisselect($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Select All");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_47_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "input", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r60 = ctx.item;
          var item$_r61 = ctx.item$;
          var index_r62 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("id", "item-", index_r62, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", item$_r61.selected)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r60, " ");
        }
      }

      function UserNewComponent_div_47_ng_template_8_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r66 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r66, " ");
        }
      }

      function UserNewComponent_div_47_ng_template_8_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var items_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().items;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", items_r63.length - 4, " more...");
        }
      }

      function UserNewComponent_div_47_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, UserNewComponent_div_47_ng_template_8_div_0_Template, 2, 1, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, UserNewComponent_div_47_ng_template_8_div_2_Template, 3, 1, "div", 59);
        }

        if (rf & 2) {
          var items_r63 = ctx.items;

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](1, 2, items_r63, 0, 2));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", items_r63.length > 4);
        }
      }

      function UserNewComponent_div_47_div_9_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Please Select Roles ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_47_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UserNewComponent_div_47_div_9_div_1_Template, 2, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r57.userForm.get("newRoleForUser").errors.required);
        }
      }

      function UserNewComponent_div_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "label", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Roles For Users ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "ng-select", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, UserNewComponent_div_47_ng_template_6_Template, 3, 0, "ng-template", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, UserNewComponent_div_47_ng_template_7_Template, 3, 5, "ng-template", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, UserNewComponent_div_47_ng_template_8_Template, 3, 6, "ng-template", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, UserNewComponent_div_47_div_9_Template, 2, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx_r9.allRoleNames)("clearSearchOnAdd", true)("closeOnSelect", false)("multiple", true)("bindLabel", "text")("readonly", ctx_r9.editFlag)("clearable", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r9.userForm.get("newRoleForUser").invalid && (ctx_r9.userForm.get("newRoleForUser").dirty || ctx_r9.userForm.get("newRoleForUser").touched));
        }
      }

      function UserNewComponent_ng_option_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ng-option", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r69 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r10.editFlag)("value", element_r69);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](element_r69);
        }
      }

      function UserNewComponent_div_55_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Please Select Department ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UserNewComponent_div_55_div_1_Template, 2, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r11.userForm.get("department").errors.required);
        }
      }

      function UserNewComponent_div_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 41);
        }
      }

      function UserNewComponent_div_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 41);
        }
      }

      var _c1 = function _c1() {
        return ["/users"];
      };

      function UserNewComponent_div_81_Template(rf, ctx) {
        if (rf & 1) {
          var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserNewComponent_div_81_Template_button_click_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r72);

            var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

            return ctx_r71.onFormSubmit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " Save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "button", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " Exit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r14.submit || !ctx_r14.userForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](2, _c1));
        }
      }

      function UserNewComponent_div_82_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserNewComponent_div_82_div_2_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r80);

            var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

            return ctx_r79.editValues();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r73.roleCodes.edit.labelDescription, " ");
        }
      }

      function UserNewComponent_div_82_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserNewComponent_div_82_div_3_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r82);

            var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

            return ctx_r81.onModifyFormSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " save ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !ctx_r74.userForm.dirty || !ctx_r74.userForm.valid);
        }
      }

      function UserNewComponent_div_82_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserNewComponent_div_82_div_4_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r84);

            var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

            return ctx_r83.onClickOfAuthOfModifyUsers();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", !ctx_r75.authBtn);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r75.roleCodes.auth.labelDescription, " ");
        }
      }

      function UserNewComponent_div_82_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserNewComponent_div_82_div_5_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r86);

            var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

            return ctx_r85.onClickOfReOpenOfModifyUsers();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", !ctx_r76.openHide);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r76.roleCodes.reopen.labelDescription, " ");
        }
      }

      function UserNewComponent_div_82_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserNewComponent_div_82_div_6_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r88);

            var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

            return ctx_r87.onClickOfCloseOfModifyUSers();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", !ctx_r77.closeHide);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r77.roleCodes.close.labelDescription, " ");
        }
      }

      function UserNewComponent_div_82_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserNewComponent_div_82_div_7_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r90);

            var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

            return ctx_r89.onClickOfDeleteOfModifyUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r78.roleCodes["delete"].labelDescription, " ");
        }
      }

      function UserNewComponent_div_82_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, UserNewComponent_div_82_div_2_Template, 3, 1, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, UserNewComponent_div_82_div_3_Template, 3, 1, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, UserNewComponent_div_82_div_4_Template, 3, 2, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, UserNewComponent_div_82_div_5_Template, 3, 2, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, UserNewComponent_div_82_div_6_Template, 3, 2, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, UserNewComponent_div_82_div_7_Template, 3, 1, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "button", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, " Exit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r15.editFlag && ctx_r15.roleCodes.edit && (ctx_r15.userObjWithAudit.recordStatus == "O" || ctx_r15.userObjWithAudit.recordStatus == "OPEN"));

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r15.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r15.userObjWithAudit.verifiedStatus == "U" || ctx_r15.userObjWithAudit.verifiedStatus == "UNAUTHORIZED") && ctx_r15.roleCodes.auth);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r15.userObjWithAudit.recordStatus == "C" || ctx_r15.userObjWithAudit.recordStatus == "CLOSE") && ctx_r15.roleCodes.reopen && (ctx_r15.userObjWithAudit.verifiedOnce == "YES" || ctx_r15.userObjWithAudit.verifiedOnce == "Y") && ctx_r15.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r15.userObjWithAudit.recordStatus == "O" || ctx_r15.userObjWithAudit.recordStatus == "OPEN") && ctx_r15.roleCodes.close && (ctx_r15.userObjWithAudit.verifiedOnce == "YES" || ctx_r15.userObjWithAudit.verifiedOnce == "Y") && ctx_r15.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r15.roleCodes["delete"] && (ctx_r15.userObjWithAudit.verifiedOnce == "NO" || ctx_r15.userObjWithAudit.verifiedOnce == "N") && (ctx_r15.userObjWithAudit.verifiedStatus == "U" || ctx_r15.userObjWithAudit.verifiedStatus == "UNAUTHORIZED") && ctx_r15.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](7, _c1));
        }
      }

      function UserNewComponent_div_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "i", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Maker");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "img", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Maker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](26, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](32, "img", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "Record Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](44, "i", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, "Checker");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](56, "img", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](60, "Checker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](63, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](69, "img", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](73, "First Time Authorization");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](81, "img", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](82, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](84, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](85, "Authorization Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](87);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](90, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](91, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](93, "img", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](94, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](95, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](96, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](97, "Modification Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](98, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](99);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r16.userObjWithAudit.creatorId);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](26, 8, ctx_r16.userObjWithAudit.creatorDtStamp, "MM/dd/yyyy, h:mm a"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r16.userObjWithAudit.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r16.userObjWithAudit.verifierId);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](63, 11, ctx_r16.userObjWithAudit.verifierDtStamp, "MM/dd/yyyy, h:mm a"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r16.userObjWithAudit.verifiedOnce);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r16.userObjWithAudit.verifiedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r16.userObjWithAudit.modNo);
        }
      }

      var _UserNewComponent = /*#__PURE__*/function () {
        function _UserNewComponent(roleService, userApi, securityApi, _location, formBuilder, cdr, sanitizer, iziToast, router, canDeactivateGuard) {
          _classCallCheck(this, _UserNewComponent);

          this.roleService = roleService;
          this.userApi = userApi;
          this.securityApi = securityApi;
          this._location = _location;
          this.formBuilder = formBuilder;
          this.cdr = cdr;
          this.sanitizer = sanitizer;
          this.iziToast = iziToast;
          this.router = router;
          this.canDeactivateGuard = canDeactivateGuard;
          this.passwordRegex = '';
          this.userIdSpclChar = '';
          this.hide = true;
          this.editFlag = false;
          this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__.permissionsLabels();
          this.modifyUserObject = new src_app_shared_models_users__WEBPACK_IMPORTED_MODULE_1__.User();
          this.authBtn = true;
          this.openBtn = true;
          this.openHide = true;
          this.closeBtn = true;
          this.closeHide = true;
          this.allRoleNames = [];
          this.allDeptNames = [];
          this.phonePattern = '^[0-9]*$';
          this.emailPattern = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';
          this.userObj = new src_app_shared_models_users__WEBPACK_IMPORTED_MODULE_1__.User();
          this.modifyScreen = false;
          this.isDisabledSave = true;
          this.submit = true;
          this.isDisable = true;
          this.errorMsg = '';
          this.isPswd = true;
          this.dataTableConfig = {
            sortBy: 'version',
            pageNo: 1,
            pageSize: 5
          };
          this.formTouched = true;
          this.profilePicUplaod = false;
        }

        _createClass(_UserNewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            var _a;

            this.userApi.getIndexValue().subscribe(function (resp) {
              console.log('index value', resp);

              if (resp.index === '') {
                _this15.createUser();
              }
            });
            this.currentUser = localStorage.getItem('userFromLogin');
            this.settings = {
              singleSelection: false,
              idField: 'item_id',
              textField: 'item_text',
              enableCheckAll: true,
              selectAllText: 'Select All',
              unSelectAllText: 'Unselect All',
              allowSearchFilter: true,
              limitSelection: -1,
              clearSearchFilter: true,
              maxHeight: 197,
              itemsShowLimit: 3,
              noDataAvailablePlaceholderText: 'No Data Available',
              closeDropDownOnSelection: false,
              showSelectedItemsAtTop: false,
              defaultOpen: false
            }; // this.securityApi.fetchSecurityPolicyService().subscribe(resp => {
            //   this.security = resp;
            //   console.log(this.security);
            //   if(this.security.passwordGenerationType == 'AUTO'){
            //   this.isPswd=false;
            //   }
            //   if(this.security.passwordGenerationType == 'MANUAL'){
            //   this.isPswd=true;
            //   }
            //   this.minPass = this.security.minPswdLength;
            //   this.maxPass = this.security.maxPswdLength;
            //   // this.buildForm(this.minPass, this.maxPass);
            //   console.log(this.minPass, this.maxPass);
            //   console.log(this.security);
            // });

            this.securityApi.getAllSecurityPolicy(this.dataTableConfig.pageNo, this.dataTableConfig.pageSize, this.dataTableConfig.sortBy).subscribe(function (dataresp) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        this.securityDetails = dataresp;
                        console.log(this.securityDetails);

                        if (this.securityDetails.result[0].passwordGenerationType == 'Auto') {
                          this.isPswd = false;
                          this.userForm.get('password').clearValidators();
                          this.userForm.get('password').updateValueAndValidity(); // console.log(this.securityDetails.result[0].passwordGenerationType);
                        }

                        if (this.securityDetails.result[0].passwordGenerationType == 'Manual') {
                          this.isPswd = true;
                        }

                        this.userForm.controls.passwordGenerationType.setValue(this.securityDetails.result[0].passwordGenerationType); // this.userForm=this.formBuilder.group({
                        //   passwordGenerationType:[this.securityDetails.result[0].passwordGenerationType]
                        //   })
                        // this.initDataTableListeners()

                      case 5:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
            this.newRolePermissions();
            this.getAllRolesNames();
            this.navSubscription = this.userApi.getNavParam.subscribe(function (data) {
              return _this15.editUserScreen = data;
            }); // this.getAllDeptsNames();
            // this.navSubscription = this.userApi.getNavParam.subscribe(
            //   (data: any) => (this.editUserScreen = data)
            // );

            if (this.editUserScreen && Object.keys(this.editUserScreen).length === 0 && Object.getPrototypeOf(this.editUserScreen) === Object.prototype) {
              this._location.back();
            }

            this.editFlag = false;
            this.user_id = localStorage.getItem('userFromLogin').replace(/['"]+/g, '');
            this.role = sessionStorage.getItem('user_role');
            console.log(this.editUserScreen, "Edit User Screen");

            if (this.editUserScreen.queryParams.userId != '') {
              this.buildUserForm(this.editUserScreen.queryParams, true);
              this.userForm.controls['password'].clearValidators();
              this.userForm.controls['password'].updateValueAndValidity();
            }

            this.activeEdit = (_a = this.editUserScreen.queryParams) === null || _a === void 0 ? void 0 : _a.activeEdit;
            this.modifyUserObject.userId = this.editUserScreen.queryParams.userId;
            this.modifyUserObject.userName = this.editUserScreen.queryParams.userName;
            this.modifyUserObject.email = this.editUserScreen.queryParams.email;
            this.modifyUserObject.mobile = this.editUserScreen.queryParams.mobile;
            this.modifyUserObject.ldapUserId = this.editUserScreen.queryParams.ldapUserId;
            this.modifyUserObject.verifiedStatus = this.editUserScreen.queryParams.authStatus;
            this.modifyUserObject.recordStatus = this.editUserScreen.queryParams.recordStatus;
            this.modifyUserObject.creatorId = this.editUserScreen.queryParams.creatorId;
            this.modifyUserObject.emailNotification = this.editUserScreen.queryParams.emailNotification;
            this.modifyUserObject.maintAllowed = this.editUserScreen.queryParams.maintAllowed;
            this.modifyUserObject.smsNotification = this.editUserScreen.queryParams.smsNotification;
            this.modifyUserObject.userAccessOption = this.editUserScreen.queryParams.userAccessOption;
            this.modifyUserObject.newRoleForUser = this.editUserScreen.queryParams.newRoleForUser;
            this.modifyUserObject.creatorDtStamp = this.editUserScreen.queryParams.creatorDtStamp;
            this.modifyUserObject.verifierId = this.editUserScreen.queryParams.verifierId;
            this.modifyUserObject.verifierDtStamp = this.editUserScreen.queryParams.verifierDtStamp;
            this.modifyUserObject.encryptedPassword = this.editUserScreen.queryParams.encryptedPassword;
            this.modifyUserObject.updatedBy = this.editUserScreen.queryParams.updatedBy;
            this.modifyUserObject.verifiedOnce = this.editUserScreen.queryParams.fristTimeAuth;
            this.modifyUserObject.roleForUser = this.editUserScreen.queryParams.roleForUser;
            this.modifyUserObject.failedAttempts = this.editUserScreen.queryParams.failedAttempts;
            this.modifyUserObject.versionNo = this.editUserScreen.queryParams.versionNo;
            this.modifyUserObject.modNo = this.editUserScreen.queryParams.modNO;
            this.modifyUserObject.newRoleForUser = this.editUserScreen.queryParams.newRoleForUser;
            this.modifyUserObject.statusForUser = this.editUserScreen.queryParams.statusForUser;
            this.modifyUserObject.passwordGenerationType = this.editUserScreen.queryParams.passwordGenerationType;

            if (this.modifyUserObject.statusForUser === undefined) {
              this.modifyUserObject.statusForUser = 'Enable';
            }

            this.modifyUserObject.department = this.editUserScreen.queryParams.department;
            this.modifyUserObject.intime = this.editUserScreen.queryParams.intime;

            if (this.modifyUserObject.intime === undefined) {
              this.modifyUserObject.intime = '09:00';
            }

            this.modifyUserObject.outtime = this.editUserScreen.queryParams.outtime;

            if (this.modifyUserObject.outtime === undefined) {
              this.modifyUserObject.outtime = '18:00';
            }

            this.modifyUserObject.pwdChangeDate = this.editUserScreen.queryParams.pwdChangeDate;
            console.log(this.modifyUserObject, "ModifyUserObject");
            console.log(localStorage.getItem('userNavObj'), "UserNavObj");
            this.userObjWithAudit = this.modifyUserObject;
            this.userNavObj = localStorage.getItem('userNavObj');
            console.log(JSON.parse(this.userNavObj), "userNavObj");

            if (JSON.parse(this.userNavObj) != null) {
              this.buildUserForm(JSON.parse(this.userNavObj));
              this.getProfileImage(JSON.parse(this.userNavObj).userId);
              this.userObjWithAudit = JSON.parse(this.userNavObj);
              console.log(this.userObjWithAudit);
              this.editFlag = true;
              this.modifyScreen = true;
            }

            if (this.modifyUserObject.userId) {
              this.modifyScreen = true;
              this.editFlag = true;
            }

            this.getAllDeptNames();
            this.getAllRolesNames();
            this.getUserAuditData();
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this15.roleCodes = message;
            }); // console.log(this.roleCodes);

            this.activeEditOnInit(); // this.userForm.disable();
          }
        }, {
          key: "seleceAndDisselect",
          value: function seleceAndDisselect(event) {
            console.log(event.target.checked);

            if (event.target.checked == true) {
              this.userForm.get('newRoleForUser').setValue(this.allRoleNames);
            } else if (event.target.checked == false) {
              this.userForm.get('newRoleForUser').setValue([]);
            }
          }
        }, {
          key: "onMaterialGroupChange",
          value: function onMaterialGroupChange(event) {
            console.log(event);
          }
        }, {
          key: "buildUserForm",
          value: function buildUserForm(data, isResponse) {
            var _this16 = this;

            this.securityApi.fetchSecurityPolicyService().subscribe(function (resp) {
              _this16.security1 = resp;
              _this16.ucase = _this16.security1.pswdComplexUcase;
              _this16.lcase = _this16.security1.pswdComplexLcase;
              _this16.num = _this16.security1.pswdComplexNum;
              _this16.splc = _this16.security1.pswdComplexSplc;
              _this16.errorMsg = '';
              _this16.passwordRegex = '';
              _this16.minPass = _this16.security1.minPswdLength;
              _this16.maxPass = _this16.security1.maxPswdLength;
              _this16.usersmax = 35;
              _this16.usersmin = 2;

              if (_this16.security1.pswdComplexUcase == 'true') {
                // this.passwordRegex = '(?=[^A-Z]*[A-Z])';
                _this16.passwordRegex = '(?=.*[A-Z])';
                _this16.errorMsg = ' UpperCase';
              }

              if (_this16.security1.pswdComplexLcase == 'true') {
                // this.passwordRegex = this.passwordRegex + '(?=[^a-z]*[a-z])';
                _this16.passwordRegex = _this16.passwordRegex + '(?=.*[a-z])';

                if (_this16.errorMsg != '') {
                  _this16.errorMsg = _this16.errorMsg + ', LowerCase';
                } else {
                  // this.errorMsg = this.errorMsg + ' LowerCase';
                  _this16.errorMsg = ' LowerCase';
                }
              }

              if (_this16.security1.pswdComplexNum == 'true') {
                // this.passwordRegex = this.passwordRegex + '(?=[^0-9]*[0-9])';
                _this16.passwordRegex = _this16.passwordRegex + '(?=.*?[0-9])';

                if (_this16.errorMsg != '') {
                  _this16.errorMsg = _this16.errorMsg + ', Number';
                } else {
                  _this16.errorMsg = ' Number';
                }
              }

              if (_this16.security1.pswdComplexSplc == 'true') {
                // this.passwordRegex = this.passwordRegex + '(?=[^!-@]*[!-@])';
                _this16.passwordRegex = _this16.passwordRegex + '(?=.*?[!@#$&*~])';

                if (_this16.errorMsg != '') {
                  _this16.errorMsg = _this16.errorMsg + ', Special Character';
                } else {
                  _this16.errorMsg = ' Special Character';
                }
              } // this.userIdSpclChar='(@._)[A-Z])';
              // this.passwordRegex = this.passwordRegex + '.{' + this.minPass + ',' + this.maxPass + '}';


              _this16.passwordRegex = _this16.passwordRegex + '.{' + _this16.minPass + ',}'; // this.passwordRegex = "(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^!-@]*[!-@]).{10,15}";

              _this16.errorMsg = 'Password must contain atleast one ' + _this16.errorMsg + '.'; // this.errorMsg1='User Id must contain atleast one ' + this.errorMsg1 + '.';
              // console.log(this.passwordRegex);

              if (_this16.editUserScreen.queryParams.userId == '') {
                _this16.userForm.get('password').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(_this16.passwordRegex), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(_this16.maxPass), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(_this16.minPass)])]);
              } // (this.userForm.get('userId') as FormControl).setValidators([Validators.required,
              //   Validators.compose([Validators.pattern('^[a-zA-Z0-9]$"'),
              //   Validators.maxLength(this.usersmax),
              //   Validators.minLength(this.usersmin)])
              // ]);
              // ---------- Password Policy Implementation (END) ----------

            }); // this.passwordRegex = this.passwordRegex + '.{' + this.minPass + ',' + this.maxPass + '}';
            // // this.passwordRegex = "(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^!-@]*[!-@]).{10,15}";
            // this.errorMsg = 'Password must contain atleast one ' + this.errorMsg + '.';

            console.log(data);

            if (this.editUserScreen.queryParams.userId == '') {
              this.userForm = this.formBuilder.group({
                userId: [data.userId ? data.userId : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(this.usersmin), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(this.usersmax), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern('^(?=.*[A-Z])[A-Z0-9@._]*'), _UsernameValidator.cannotContainSpace]],
                userName: [data.userName ? data.userName : '', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
                password: [data.encryptedPassword ? data.encryptedPassword : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(this.passwordRegex), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(this.maxPass), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(this.minPass)])]],
                email: [data.email ? data.email : '', // Validators.pattern('^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
                department: [data.department ? data.department : null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
                mobile: [data.mobile ? data.mobile : ''],
                // rolesForUser: new FormControl(''),
                newRoleForUser: [data.newRoleForUser ? data.newRoleForUser : '', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
                statusForUser: [data.statusForUser ? data.statusForUser : 'Enable'],
                intime: [data.intime ? data.intime : '09:00'],
                outtime: [data.outtime ? data.outtime : '18:00'],
                passwordGenerationType: [data.passwordGenerationType ? data.passwordGenerationType : '']
              });
            } //------------Removed code---
            // this.userForm = this.formBuilder.group({
            //   // userId: [data.userId ? data.userId:'', [Validators.required,
            //   //   Validators.compose([Validators.pattern('^[a-zA-Z0-9]$"'),
            //   //   Validators.maxLength(this.usersmax),
            //   //   Validators.minLength(this.usersmin)])]],
            //   // userId: [data.userId ? data.userId:'', [Validators.required,,UsernameValidator.cannotContainSpace
            //   //  ]],
            //   userId: [
            //     data.userId ? data.userId : '',
            //     [
            //       Validators.required,
            //       Validators.minLength(this.usersmin),
            //       Validators.maxLength(this.usersmax),
            //       Validators.pattern(/^(?=.*[A-Z])[A-Z0-9@._]*/),
            //       UsernameValidator.cannotContainSpace,
            //     ],
            //   ],
            //   userName: [data.userName ? data.userName : '', Validators.required],
            //   password: [
            //     data.encryptedPassword ? data.encryptedPassword : '',
            //     [
            //       Validators.compose([
            //         Validators.pattern(this.passwordRegex),
            //         Validators.maxLength(this.maxPass),
            //         Validators.minLength(this.minPass),
            //       ]),
            //     ],
            //   ],
            //   email: [
            //     data.email ? data.email : '',
            //     Validators.required,
            //     Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
            //   ],
            //   department: [data.department ? data.department : '', Validators.required],
            //   mobile: [
            //     data.mobile ? data.mobile : '',
            //     Validators.required,
            //     Validators.pattern('^d{10}$'),
            //   ],
            //   // rolesForUser: new FormControl(''),
            //   newRoleForUser: [
            //     data.newRoleForUser ? data.newRoleForUser : '',
            //     Validators.required,
            //   ],
            //   statusForUser: [data.statusForUser ? data.statusForUser : 'Enable'],
            //   intime: [data.intime ? data.intime : '09:00'],
            //   outtime: [data.outtime ? data.outtime : '18:00'],
            //   passwordGenerationType: [
            //     data.passwordGenerationType ? data.passwordGenerationType : '',
            //   ],
            // });
            // console.log(this.userForm);
            //------------Removed code-------
            // 
            //  if(this.modifyScreen == true){
            //   this.userForm.controls['password'].clearValidators();
            // }


            if (this.editUserScreen.queryParams.userId != '') {
              this.userForm = this.formBuilder.group({
                userId: [data.userId ? data.userId : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(this.usersmin), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(this.usersmax), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern('^(?=.*[A-Z])[A-Z0-9@._]*'), _UsernameValidator.cannotContainSpace]],
                userName: [data.userName ? data.userName : '', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
                password: [data.encryptedPassword ? data.encryptedPassword : ''],
                email: [data.email ? data.email : '', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$') // Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
                ],
                department: [data.department ? data.department : null, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
                mobile: [data.mobile ? data.mobile : ''],
                // rolesForUser: new FormControl(''),
                newRoleForUser: [data.newRoleForUser ? data.newRoleForUser : '', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
                statusForUser: [data.statusForUser ? data.statusForUser : 'Enable'],
                intime: [data.intime ? data.intime : '09:00'],
                outtime: [data.outtime ? data.outtime : '18:00'],
                passwordGenerationType: [data.passwordGenerationType ? data.passwordGenerationType : '']
              });
            }
          }
        }, {
          key: "getAllRolesNames",
          value: function getAllRolesNames() {
            var _this17 = this;

            this.roleService.getAllRoles().subscribe(function (data) {
              _this17.allRoleNames = data; // console.log(this.allRoleNames, data);
            });
          }
        }, {
          key: "onSelectFile",
          value: function onSelectFile(event) {
            var _this18 = this;

            console.log(this.profilePicUplaod);
            this.profilePicUplaod = true;
            console.log(event, 'Event');

            if (event.target.files && event.target.files[0]) {
              this.profilePicture = event.target.files[0];
              var reader = new FileReader();
              reader.readAsDataURL(event.target.files[0]); // read file as data url

              reader.onload = function (event) {
                // called once readAsDataURL is completed
                console.log('Profile Image Test:: ', reader.result);
                _this18.url = event.target.result;
                console.log(_this18.url, 'URL');
              };
            }
          }
        }, {
          key: "getProfileImage",
          value: function getProfileImage(userId) {
            var _this19 = this;

            this.userApi.getCustomerDocuments(userId).subscribe(function (data) {
              console.log('data ::', data);

              if (data) {
                _this19.profileId = data.id;
                _this19.url = data.fileUrl;
              }
            });
          }
        }, {
          key: "canExit",
          value: function canExit() {
            var _this20 = this;

            var isExit = false;

            if (this.userForm.touched && this.formTouched == true) {
              return sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                text: 'There are unsaved changes in the screen. Would you like to navigate to other screen?',
                showCancelButton: true,
                confirmButtonColor: '#E6224A',
                cancelButtonColor: '#011945',
                // confirmButtonText: 'PROCEED.'
                cancelButtonText: 'NO',
                confirmButtonText: 'YES',
                icon: 'info'
              }).then(function (result) {
                if (result.isConfirmed === true) {
                  isExit = true;

                  _this20.cdr.markForCheck();

                  return isExit;
                } else {
                  isExit = false;

                  _this20.cdr.markForCheck();

                  return isExit;
                }
              });
            } else {
              isExit = true;
              return new Promise(function (resolve, reject) {
                if (isExit === true) {
                  isExit = true;

                  _this20.cdr.markForCheck();

                  resolve(true);
                }
              });
            }

            console.log(isExit, 'IsExit'); // return isExit;
            // if (confirm("Do you wish to Please confirm")) {
            //     return true
            //   } else {
            //     return false
            //   }
          }
        }, {
          key: "delete",
          value: function _delete() {
            var _this21 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
              text: 'You are trying to delete image. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#E6224A',
              cancelButtonColor: '#011945',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              icon: 'info'
            }).then(function (result) {
              if (result.isConfirmed === true) {
                _this21.url = null;
              }
            });
          }
        }, {
          key: "getAllDeptNames",
          value: function getAllDeptNames() {
            var _this22 = this;

            this.roleService.getAllDept().subscribe(function (data) {
              _this22.allDeptNames = data; // console.log(this.allDeptNames);
            });
          }
        }, {
          key: "onFilterChange",
          value: function onFilterChange(item) {// console.log(item);
          }
        }, {
          key: "onDropDownClose",
          value: function onDropDownClose(item) {// console.log(item);
          }
        }, {
          key: "onItemSelect",
          value: function onItemSelect(item) {
            this.isDisabledSave = false; // console.log(item);
          }
        }, {
          key: "onDeSelect",
          value: function onDeSelect(item) {
            this.isDisabledSave = false; // console.log(item);
          }
        }, {
          key: "onSelectAll",
          value: function onSelectAll(items) {
            this.isDisabledSave = false; // console.log(items);
          }
        }, {
          key: "onDeSelectAll",
          value: function onDeSelectAll(items) {
            this.isDisabledSave = false; // console.log(items);
          } // onInputChange() {
          //   (this.userForm.get('password') as FormControl).setValidators([
          //     Validators.compose([
          //       Validators.pattern(this.passwordRegex),
          //       Validators.maxLength(this.maxPass),
          //       Validators.minLength(this.minPass),
          //     ]),
          //   ]);
          //   this.isDisabledSave = false
          // }

        }, {
          key: "onInputChange",
          value: function onInputChange() {
            var _this23 = this;

            console.log(Object.keys(this.editUserScreen).length != 0, this.editUserScreen.constructor === Object); // if (Object.keys(this.editUserScreen).length == 0 && this.editUserScreen.constructor != Object) {

            console.log("Inside input change", this.editUserScreen);
            this.userForm.get('password').valueChanges.subscribe(function (value) {
              console.log(value);

              if (value) {
                _this23.userForm.get('password').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(_this23.passwordRegex), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(_this23.maxPass), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(_this23.minPass), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required])]);
              }
            }); // }
            // this.isDisabledSave = false
          }
        }, {
          key: "onClickOfCloseOfModifyUSers",
          value: function onClickOfCloseOfModifyUSers() {
            var _this24 = this;

            this.modifyUserObject.creatorId = this.currentUser;
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
                var UpdateUserAuthDto = {};
                UpdateUserAuthDto.userId = _this24.modifyUserObject.userId;
                UpdateUserAuthDto.makerId = _this24.currentUser;

                _this24.userApi.onClickOfCloseOfModifyUsers(UpdateUserAuthDto).subscribe(function (dataofCloseFromBackend) {
                  _this24.statusFlag = dataofCloseFromBackend;
                  _this24.openBtn = false;
                  _this24.closeBtn = false;

                  _this24.getUserAuditData();

                  if (_this24.statusFlag) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                      text: 'User is Closed',
                      icon: 'success'
                    });
                  }
                });
              }
            }); // Swal.fire( 'You closed the user record');

            this.closeHide = true; //console.log('coming or not');

            this.getUpdatedModifiedObject(); // this.cdr.markForCheck();

            this.getUserAuditData(); // }

            if (this.statusFlag === false) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                icon: 'error',
                text: 'Failed to close user '
              });
            } // });

          }
        }, {
          key: "onClickOfReOpenOfModifyUsers",
          value: function onClickOfReOpenOfModifyUsers() {
            var _this25 = this;

            //console.log('on of reopen of Modify user');
            this.modifyUserObject.creatorId = this.currentUser;
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
                var UpdateUserAuthDto = {};
                UpdateUserAuthDto.userId = _this25.modifyUserObject.userId;
                UpdateUserAuthDto.makerId = _this25.currentUser;

                _this25.userApi.onClickOfReopenOfModifyUser(UpdateUserAuthDto).subscribe(function (dataOfReopen) {
                  // console.log(dataOfReopen);
                  _this25.statusFlag = dataOfReopen;

                  _this25.getUserAuditData();

                  _this25.openBtn = false;
                  _this25.closeBtn = false;

                  if (_this25.statusFlag) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                      text: 'User is Reopened',
                      icon: 'success'
                    });
                  }
                });
              }
            });
            this.openHide = true;
            this.getUpdatedModifiedObject(); // this.cdr.markForCheck();

            this.getUserAuditData(); // }

            if (this.statusFlag === false) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                icon: 'error',
                text: 'Failed to open user '
              });
            } // });

          }
        }, {
          key: "onClickOfDeleteOfModifyUser",
          value: function onClickOfDeleteOfModifyUser() {
            var _this26 = this;

            // console.log(this.modifyUserObject);
            var ls;

            if (localStorage.getItem('UserID') != null || this.modifyUserObject.userId) {
              ls = localStorage.getItem('UserID') != null ? localStorage.getItem('UserID') : this.modifyUserObject.userId;
            }

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
                _this26.userApi.onClickOfDeleteOfModifyUser(ls) // .onClickOfDeleteOfModifyUser(this.modifyUserObject.userId)
                .subscribe(function (datafrombackendtoDelete) {
                  //console.log('deleteData', datafrombackendtoDelete);
                  _this26.deleteStatusFlag = datafrombackendtoDelete;

                  if (_this26.deleteStatusFlag) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                      text: 'User is Deleted',
                      icon: 'success'
                    }).then(function (result) {
                      _this26.router.navigate(['/users']);

                      localStorage.removeItem('UserID');
                    }); // this.router.navigate(['/users']);
                  }
                });
              }
            });

            if (this.deleteStatusFlag === false) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                icon: 'error',
                text: 'Failed to Delete user '
              });
            }

            this.getUserAuditData(); // }

            if (this.deleteStatusFlag === false) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                icon: 'error',
                text: 'Failed to delete user'
              });
            }
          }
        }, {
          key: "onClickOfAuthOfModifyUsers",
          value: function onClickOfAuthOfModifyUsers() {
            var _this27 = this;

            // console.log("maker and checker",this.userObjWithAudit.creatorId,this.currentUser)
            if (this.userObjWithAudit.creatorId === this.currentUser) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                title: 'Maker Cannot Authorized the User!',
                icon: 'error'
              });
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
                  var UpdateUserAuthDto = {};
                  UpdateUserAuthDto.userId = _this27.modifyUserObject.userId;
                  UpdateUserAuthDto.makerId = _this27.currentUser;

                  _this27.userApi.onClickOfAuthOfModifyUsers(UpdateUserAuthDto).subscribe(function (authResp) {
                    // console.log(authResp);
                    _this27.authStatusFlag = authResp;

                    _this27.getUserAuditData();

                    if (_this27.authStatusFlag) {
                      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                        text: 'User is Authorized',
                        icon: 'success'
                      });
                    }
                  });
                }
              });
              this.getUpdatedModifiedObject();
              this.getUserAuditData();
            }
          }
        }, {
          key: "numericOnly",
          value: function numericOnly(event) {
            return !isNaN(Number(event.key)) && event.key !== ' ';
          }
        }, {
          key: "getUpdatedModifiedObject",
          value: function getUpdatedModifiedObject() {
            var _this28 = this;

            this.userApi.getUserObjModified(this.modifyUserObject.userId).subscribe(function (gettingBackendData) {
              //console.log('gettingBackendData', gettingBackendData);
              _this28.modifyUserObject = gettingBackendData; //console.log(this.modifyUserObject);
            });
          }
        }, {
          key: "button",
          value: function button() {
            this.isDisable = false;
          }
        }, {
          key: "onModifyFormSubmit",
          value: function onModifyFormSubmit() {
            var _this29 = this;

            this.modifyUserObject.userId = this.userForm.get('userId').value, this.modifyUserObject.userName = this.userForm.get('userName').value;
            this.modifyUserObject.encryptedPassword = this.userForm.get('password').value;
            this.modifyUserObject.mobile = this.userForm.get('mobile').value;
            this.modifyUserObject.statusForUser = this.userForm.get('statusForUser').value;
            this.modifyUserObject.email = this.userForm.get('email').value;
            this.modifyUserObject.department = this.userForm.get('department').value; // this.modifyUserObject.roleForUser = this.userForm.get('rolesForUser').value;

            this.modifyUserObject.newRoleForUser = this.userForm.get('newRoleForUser').value;
            this.modifyUserObject.creatorId = this.currentUser;
            this.modifyUserObject.intime = this.userForm.get('intime').value;
            this.modifyUserObject.outtime = this.userForm.get('outtime').value;

            if (this.modifyUserObject.intime > this.modifyUserObject.outtime) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                text: 'From time should be lower and to time should be higher',
                icon: 'error'
              });
            } // console.log("form value", this.modifyUserObject);


            this.modifyUserObject.passwordGenerationType = this.userForm.get('passwordGenerationType').value; // console.log("form value", this.modifyUserObject);

            console.log(this.profilePicture, 'ProfileImage');

            if (this.profilePicture) {
              console.log("third");
              console.log(this.profilePicture);
              var profileUpload = {};
              profileUpload.fileType = this.profilePicture.type;
              profileUpload.fileName = this.profilePicture.name;
              profileUpload.userId = this.modifyUserObject.userId;
              console.log(profileUpload);
              var uploadData = new FormData();
              uploadData.append('data', JSON.stringify(profileUpload));
              uploadData.append('file', this.profilePicture);
              this.userApi.uploadDocument(uploadData).subscribe(function (response) {
                console.log(response);
              });
            }

            console.log(this.modifyUserObject);
            this.userApi.modifyUserService(this.modifyUserObject).subscribe(function (data) {
              _this29.statusFlag = data;
              _this29.userObjWithAudit = _this29.statusFlag;
              console.log(_this29.userObjWithAudit);

              if (_this29.statusFlag) {
                _this29.submit = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                  text: 'User is Updated',
                  icon: 'success'
                });

                _this29.getUserAuditData();

                _this29.editFlag = true;
                _this29.authBtn = true;
                _this29.openHide = true;
                _this29.closeHide = true;

                _this29.userForm.markAsUntouched();

                _this29.userForm.markAsPristine(); //  this.formTouched = !this.userForm.touched;


                console.log(_this29.userObjWithAudit);
              }

              if (!_this29.statusFlag) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                  icon: 'error',
                  text: 'Failed to modify user '
                });
              } // this.router.navigate(['/users']);

            });
          }
        }, {
          key: "getUserAuditData",
          value: function getUserAuditData() {
            var _this30 = this;

            // console.log(this.userObjWithAudit)
            this.userApi.getUserAuditService(this.userObjWithAudit.userId).subscribe(function (data) {
              _this30.userObjWithAudit = data; // console.log('dev code user audit: ',this.userObjWithAudit);
              // console.log(this.userObjWithAudit);

              if (_this30.userObjWithAudit.verifiedStatus === 'U') {
                _this30.userObjWithAudit.verifiedStatus = 'UNAUTHORIZED';
              }

              if (_this30.userObjWithAudit.verifiedStatus === 'A') {
                _this30.userObjWithAudit.verifiedStatus = 'AUTHORIZED';
              }
              /*
               */


              if (_this30.userObjWithAudit.verifiedOnce === 'N') {
                _this30.userObjWithAudit.verifiedOnce = 'NO';
              }

              if (_this30.userObjWithAudit.verifiedOnce === 'Y') {
                _this30.userObjWithAudit.verifiedOnce = 'YES';
              }
              /**
               * setting record status
               */


              if (_this30.userObjWithAudit.recordStatus === 'O') {
                _this30.userObjWithAudit.recordStatus = 'OPEN';
              }

              if (_this30.userObjWithAudit.recordStatus === 'C') {
                _this30.userObjWithAudit.recordStatus = 'CLOSE';
              }
            });
          }
        }, {
          key: "onFormSubmit",
          value: function onFormSubmit(event) {
            var _this31 = this;

            // event.preventDefault();
            console.log("first");

            if (this.userForm.get('intime').value === this.userForm.get('outtime').value) {
              console.log("second");
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                text: 'Enter In time and Enter Out time should not be same',
                icon: 'info'
              });
              return;
            }

            localStorage.setItem('UserID', this.userForm.get('userId').value.toUpperCase()); // console.log(this.userForm);

            this.userObj.userId = this.userForm.get('userId').value.toUpperCase();
            this.userObj.userName = this.userForm.get('userName').value;
            this.userObj.encryptedPassword = this.userForm.get('password').value;
            this.userObj.mobile = this.userForm.get('mobile').value;
            this.userObj.email = this.userForm.get('email').value;
            this.userObj.newRoleForUser = this.userForm.get('newRoleForUser').value;
            this.userObj.roleForUser = this.userForm.get('newRoleForUser').value;
            this.userObj.roleForUser.toString();
            this.userObj.creatorId = this.user_id;
            this.userObj.statusForUser = this.userForm.get('statusForUser').value;
            this.userObj.department = this.userForm.get('department').value;
            this.userObj.intime = this.userForm.get('intime').value;
            this.userObj.outtime = this.userForm.get('outtime').value;
            this.userObj.passwordGenerationType = this.userForm.get('passwordGenerationType').value; // console.log("Formsubmit",this.userObj);

            console.log(this.profilePicture, 'ProfileImage');

            if (this.profilePicture) {
              console.log("third");
              console.log(this.profilePicture);
              var profileUpload = {};
              profileUpload.fileType = this.profilePicture.type;
              profileUpload.fileName = this.profilePicture.name;
              profileUpload.userId = this.userObj.userId;
              console.log(profileUpload);
              var uploadData = new FormData();
              uploadData.append('data', JSON.stringify(profileUpload));
              uploadData.append('file', this.profilePicture);
              this.userApi.uploadDocument(uploadData).subscribe(function (response) {
                console.log(response);
              });
            }

            this.userApi.createUserService(this.userObj).subscribe(function (data) {
              // console.log(this.userObj);
              _this31.statusFlag = data;
              _this31.userObjWithAudit = _this31.statusFlag; // console.log(this.userObjWithAudit);

              if (_this31.statusFlag) {
                _this31.editFlag = false;
                _this31.submit = false;
                _this31.modifyScreen = true;

                _this31.getUserAuditData();

                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                  text: 'User is Created ',
                  icon: 'success'
                });
                localStorage.setItem('userNavObj', JSON.stringify(_this31.statusFlag));

                _this31.getUserAuditData();

                _this31.editFlag = true;
                _this31.formTouched = !_this31.userForm.touched;
              }

              if (!_this31.statusFlag) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                  icon: 'error',
                  text: 'Failed to create user '
                });
              } // this.router.navigate(['/users']);

            }, function (error) {
              // console.log('error resp :: ',error);
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                text: error.error.message,
                icon: 'error'
              });
            }); // }
          }
        }, {
          key: "newRolePermissions",
          value: function newRolePermissions() {
            this.roleService.fetchScreenPermissions('users');
          }
        }, {
          key: "editValues",
          value: function editValues() {
            this.editFlag = false;
            this.authBtn = false;
            this.userForm.enable();
            console.log(this.userForm.dirty);
          }
        }, {
          key: "activeEditOnInit",
          value: function activeEditOnInit() {
            if (this.activeEdit) {
              this.editValues();
            }
          }
        }, {
          key: "createUser",
          value: function createUser() {
            this.router.navigate(['users/new']);
            var navigationExtras = {
              queryParams: {}
            };
            this.userApi.sendNavParam(navigationExtras);
          }
        }]);

        return _UserNewComponent;
      }();

      _UserNewComponent.ɵfac = function UserNewComponent_Factory(t) {
        return new (t || _UserNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_security_policy_service__WEBPACK_IMPORTED_MODULE_5__.SecurityPolicyService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ng2_izitoast__WEBPACK_IMPORTED_MODULE_6__.Ng2IzitoastService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_7__.CanDeactivateGuard));
      };

      _UserNewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
        type: _UserNewComponent,
        selectors: [["npr-user-new"]],
        decls: 84,
        vars: 31,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "dbCardStyle"], [1, "row", "gy-4"], [1, "col-lg-4", 2, "margin-bottom", "20px"], ["for", "fileInput", 1, "hoverable"], [1, "img", 3, "src"], [1, "background"], [4, "ngIf"], [1, "col-lg-4"], ["for", "roleName", 1, "formLbl"], [1, "colorRed"], ["id", "usersId", "minlength", "2", "maxlength", "35", "placeholder", "User Id", "required", "", "oninput", "this.value = this.value.toUpperCase()", "formControlName", "userId", "type", "text", 1, "form-control", 3, "readonly", "keydown"], ["class", "errorColor", 4, "ngIf"], ["for", "roleName", 1, "formLbl", 2, "margin-top", "20px"], ["id", "usersName", "type", "text", "formControlName", "userName", "placeholder", "User Name", 1, "form-control", 3, "readonly", "keydown"], ["id", "passwordGenerationType", "type", "text", "formControlName", "passwordGenerationType", "placeholder", "User Name", "readonly", "", 1, "form-control"], [1, "col-lg-3"], ["type", "email", "id", "usersPassword", "formControlName", "email", "placeholder", "Email", "value", "", "required", "", 1, "form-control", 3, "readonly", "keydown"], ["id", "usersPassword", "pattern", "^\\d{10}$", "name", "mobile", "maxLength", "10", "formControlName", "mobile", "placeholder", "Mobile Number", "required", "", 1, "form-control", 3, "readonly", "keypress", "keydown"], ["class", "width", 4, "ngIf"], ["id", "outlineNgSelect", "formControlName", "department", "placeholder", "Please select department", "aria-label", "Default select example", 3, "readonly", "multiple", "bindLabel", "change"], ["class", "custom", 3, "disabled", "value", 4, "ngFor", "ngForOf"], [1, "col-lg-8"], [1, "col-lg-6"], ["id", "timeStart", "value", "09:00", "type", "time", "formControlName", "intime", 1, "form-control", 3, "readonly", "change"], ["id", "timeEnd", "type", "time", "formControlName", "outtime", "placeholder", "18:00", "value", "", 1, "form-control", 3, "readonly", "change"], [3, "disabled"], [1, "row", "g-2"], [1, "radio", "radioStyle"], ["id", "radio-1", "formControlName", "statusForUser", "value", "Enable", "type", "radio", "checked", "", 3, "disabled", "change"], ["for", "radio-1", 1, "radio-label"], ["id", "radio-2", "formControlName", "statusForUser", "type", "radio", "value", "Disable", 3, "disabled", "change"], ["for", "radio-2", 1, "radio-label"], ["class", "col-lg-12", 4, "ngIf"], ["class", "dbCardStyle mt-20", 4, "ngIf"], ["src", "assets/images/edit.svg", 2, "height", "30px", "width", "20px"], ["type", "file", "name", "myfile", 2, "display", "none", 3, "change"], ["src", "assets/images/delete.svg", 2, "height", "30px", "margin-left", "150px", "width", "20px", 3, "click"], [1, "errorColor"], [1, "form-control", "d-flex"], ["id", "usersPassword", "type", "password", "formControlName", "password", "placeholder", "Password", "required", "", 1, "noborder", 2, "width", "100%", 3, "type", "readonly", "keydown"], ["toggle", "#pwdFld", 1, "visibility", 3, "click"], ["class", "showPwd", "src", "assets/images/show-icon.svg", "alt", "...", 4, "ngIf"], ["class", "hidePwd", "src", "assets/images/hide-icon.svg", "alt", "...", 4, "ngIf"], ["src", "assets/images/show-icon.svg", "alt", "...", 1, "showPwd"], ["src", "assets/images/hide-icon.svg", "alt", "...", 1, "hidePwd"], [1, "width"], [1, "formLbl"], ["placeholder", "Please Select Roles", "clearAllText", "Clear", "formControlName", "newRoleForUser", 1, "customform", 3, "items", "clearSearchOnAdd", "closeOnSelect", "multiple", "bindLabel"], ["ng-header-tmp", ""], ["ng-option-tmp", ""], ["ng-multi-label-tmp", ""], [1, "padding"], ["type", "checkbox", 3, "change"], ["type", "checkbox", 3, "id", "ngModel", "ngModelOptions"], ["class", "ng-value", 4, "ngFor", "ngForOf"], ["class", "ng-value", 4, "ngIf"], [1, "ng-value"], [1, "ng-value-label"], ["placeholder", "Please Select Roles", "clearAllText", "Clear", "formControlName", "newRoleForUser", 3, "items", "clearSearchOnAdd", "closeOnSelect", "multiple", "bindLabel", "readonly", "clearable"], [1, "custom", 3, "disabled", "value"], [1, "col-lg-12"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["class", "col-auto", 4, "ngIf"], [1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "hidden", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "hidden", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "hidden", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "dbCardStyle", "mt-20"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], [1, "fa", "fa-edit", "faClass"], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], [1, "fa", "fa-check-square-o", "faClassChecker"], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/authorize.svg", "alt", "...", 1, "modImage"], ["src", "assets/images/modification.svg", "alt", "...", 1, "modImage"]],
        template: function UserNewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "User Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, UserNewComponent_label_11_Template, 3, 0, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, UserNewComponent_label_12_Template, 2, 0, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "User Id ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keydown", function UserNewComponent_Template_input_keydown_18_listener() {
              return ctx.onInputChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, UserNewComponent_div_19_Template, 4, 3, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "User Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keydown", function UserNewComponent_Template_input_keydown_24_listener() {
              return ctx.onInputChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, UserNewComponent_div_25_Template, 2, 1, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "Password Genaration Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, UserNewComponent_div_30_Template, 11, 5, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, UserNewComponent_div_31_Template, 1, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "Email Id ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keydown", function UserNewComponent_Template_input_keydown_37_listener() {
              return ctx.onInputChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](38, UserNewComponent_div_38_Template, 3, 2, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "Mobile Number ");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keypress", function UserNewComponent_Template_input_keypress_44_listener($event) {
              return ctx.numericOnly($event);
            })("keydown", function UserNewComponent_Template_input_keydown_44_listener() {
              return ctx.onInputChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](45, UserNewComponent_div_45_Template, 3, 2, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](46, UserNewComponent_div_46_Template, 10, 6, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](47, UserNewComponent_div_47_Template, 10, 8, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50, "Department");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "ng-select", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function UserNewComponent_Template_ng_select_change_53_listener() {
              return ctx.onInputChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](54, UserNewComponent_ng_option_54_Template, 2, 3, "ng-option", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](55, UserNewComponent_div_55_Template, 2, 1, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](58, "Select the time range for operating (in hours)");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function UserNewComponent_Template_input_change_61_listener() {
              return ctx.onInputChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](62, UserNewComponent_div_62_Template, 1, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function UserNewComponent_Template_input_change_64_listener() {
              return ctx.onInputChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](65, UserNewComponent_div_65_Template, 1, 0, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "fieldset", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](69, "User Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function UserNewComponent_Template_input_change_73_listener() {
              return ctx.onInputChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "label", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](75, "Enable");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "input", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function UserNewComponent_Template_input_change_78_listener() {
              return ctx.onInputChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "label", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](80, "Disable");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](81, UserNewComponent_div_81_Template, 8, 3, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](82, UserNewComponent_div_82_Template, 11, 8, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](83, UserNewComponent_div_83_Template, 100, 14, "div", 37);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.userForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx.url ? ctx.url : "assets/images/user.png", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("readonly", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.userForm.get("userId").invalid && (ctx.userForm.get("userId").dirty || ctx.userForm.get("userId").touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("readonly", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.userForm.get("userName").invalid && (ctx.userForm.get("userName").dirty || ctx.userForm.get("userName").touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isPswd);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.userForm.get("password").invalid && (ctx.userForm.get("password").dirty || ctx.userForm.get("password").touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("readonly", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.userForm.get("email").invalid && (ctx.userForm.get("email").dirty || ctx.userForm.get("email").touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("readonly", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.userForm.get("mobile").invalid && (ctx.userForm.get("mobile").dirty || ctx.userForm.get("mobile").touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("readonly", ctx.editFlag)("multiple", false)("bindLabel", "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.allDeptNames);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.userForm.get("department").invalid && (ctx.userForm.get("department").dirty || ctx.userForm.get("department").touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("readonly", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.userForm.get("intime").invalid && (ctx.userForm.get("intime").dirty || ctx.userForm.get("intime").touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("readonly", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.userForm.get("outtime").invalid && (ctx.userForm.get("outtime").dirty || ctx.userForm.get("outtime").touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.modifyScreen);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.modifyScreen || ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.editUserScreen.queryParams.userId != null || ctx.userObjWithAudit);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.PatternValidator, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RadioControlValueAccessor, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgHeaderTemplateDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgOptionTemplateDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgMultiLabelTemplateDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgOptionComponent, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
        styles: [".errorColor[_ngcontent-%COMP%] {\n  color: #e6224a;\n}\n\n.noborder[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.visibility[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.form-class[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #797979;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-bottom: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-left: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-right: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n  .dropdown-multiselect__caret {\n  display: none !important;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: Lato;\n}\n\n.img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  border-radius: 50%;\n}\n\n.hoverable[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  cursor: pointer;\n  height: 200px;\n  width: 200px;\n  border: 5px solid #000;\n  border-radius: 50%;\n}\n\n.hoverable[_ngcontent-%COMP%]   .hover-text[_ngcontent-%COMP%] {\n  position: absolute;\n  display: none;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n}\n\n.hoverable[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%] {\n  position: absolute;\n  display: none;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(255, 255, 255, 0.5);\n  pointer-events: none;\n  border-radius: 50%;\n  z-index: 1;\n}\n\n.hoverable[_ngcontent-%COMP%]:hover   .hover-text[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.hoverable[_ngcontent-%COMP%]:hover   .background[_ngcontent-%COMP%] {\n  display: block;\n}\n\n#fileInput[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.width[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.padding[_ngcontent-%COMP%] {\n  padding-left: 3%;\n  padding-bottom: 4%;\n  padding-top: 4%;\n}\n\n.classInput[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.25rem 0.375rem 0.75rem !important;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%] {\n  accent-color: red;\n}\n\n.ng-select[_ngcontent-%COMP%]   [class^=stylingbutton][_ngcontent-%COMP%] {\n  border: 0;\n  padding-right: 0;\n  background-color: #f8f9fa;\n  color: red;\n}\n\ninput[_ngcontent-%COMP%]::-ms-reveal, input[_ngcontent-%COMP%]::-ms-clear {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbmV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtBQUVGOztBQUFBO0VBRUUsZUFBQTtBQUVGOztBQUFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFFQSx3RUFBQTtBQUVGOztBQUFBO0VBQ0Usd0JBQUE7QUFHRjs7QUFEQTtFQUNFLGlCQUFBO0FBSUY7O0FBREE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBS0Y7O0FBSEE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtBQU1GOztBQUpBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLDBDQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFPRjs7QUFMQTtFQUNFLGNBQUE7QUFRRjs7QUFOQTtFQUNFLGNBQUE7QUFTRjs7QUFOQTtFQUNFLGFBQUE7QUFTRjs7QUFQQTtFQUNFLFVBQUE7QUFVRjs7QUFSQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBV0Y7O0FBUkE7RUFDRSxxREFBQTtBQVdGOztBQVJBO0VBQ0UsaUJBQUE7QUFXRjs7QUFUQTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQVlGOztBQVJBOztFQUVFLGFBQUE7QUFXRiIsImZpbGUiOiJ1c2VyLW5ldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvckNvbG9yIHtcclxuICBjb2xvcjogI2U2MjI0YTtcclxufVxyXG4ubm9ib3JkZXIge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4udmlzaWJpbGl0eSB7XHJcbiAgLy8gbWFyZ2luLWxlZnQ6IDE3NXB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uZm9ybS1jbGFzcyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGNvbG9yOiAjNzk3OTc5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWJlYjtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAvLyBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xyXG59XHJcbjo6bmctZGVlcCAuZHJvcGRvd24tbXVsdGlzZWxlY3RfX2NhcmV0IHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxucCB7XHJcbiAgZm9udC1mYW1pbHk6IExhdG87XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLmhvdmVyYWJsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBib3JkZXI6IDVweCBzb2xpZCAjMDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uaG92ZXJhYmxlIC5ob3Zlci10ZXh0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4uaG92ZXJhYmxlIC5iYWNrZ3JvdW5kIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbi5ob3ZlcmFibGU6aG92ZXIgLmhvdmVyLXRleHQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5ob3ZlcmFibGU6aG92ZXIgLmJhY2tncm91bmQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4jZmlsZUlucHV0IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi53aWR0aHtcclxuICB3aWR0aDogMjUlO1xyXG59XHJcbi5wYWRkaW5ne1xyXG4gIHBhZGRpbmctbGVmdDogMyU7XHJcbiAgcGFkZGluZy1ib3R0b206IDQlO1xyXG4gIHBhZGRpbmctdG9wOiA0JTtcclxufVxyXG5cclxuLmNsYXNzSW5wdXR7XHJcbiAgcGFkZGluZzogMC4zNzVyZW0gMC4yNXJlbSAwLjM3NXJlbSAwLjc1cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcclxuICBhY2NlbnQtY29sb3I6IHJlZDtcclxufVxyXG4ubmctc2VsZWN0IFtjbGFzc149XCJzdHlsaW5nYnV0dG9uXCJde1xyXG4gIGJvcmRlcjogMDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuXHJcbmlucHV0OjotbXMtcmV2ZWFsLFxyXG5pbnB1dDo6LW1zLWNsZWFyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuIl19 */"]
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
    39493:
    /*!*****************************************************!*\
      !*** ./src/app/views/users/users-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UsersRoutingModule": function UsersRoutingModule() {
          return (
            /* binding */
            _UsersRoutingModule
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


      var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user-list/user-list.component */
      83000);
      /* harmony import */


      var _user_new_user_new_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-new/user-new.component */
      55823);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: "",
        component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_1__.UserListComponent
      }, {
        path: "new",
        component: _user_new_user_new_component__WEBPACK_IMPORTED_MODULE_2__.UserNewComponent,
        canDeactivate: [src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__.CanDeactivateGuard]
      }];

      var _UsersRoutingModule = /*#__PURE__*/_createClass(function _UsersRoutingModule() {
        _classCallCheck(this, _UsersRoutingModule);
      });

      _UsersRoutingModule.ɵfac = function UsersRoutingModule_Factory(t) {
        return new (t || _UsersRoutingModule)();
      };

      _UsersRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _UsersRoutingModule
      });
      _UsersRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_UsersRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    51557:
    /*!*********************************************!*\
      !*** ./src/app/views/users/users.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UsersModule": function UsersModule() {
          return (
            /* binding */
            _UsersModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-select/ng-select */
      88660);
      /* harmony import */


      var _users_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./users-routing.module */
      39493);
      /* harmony import */


      var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user-list/user-list.component */
      83000);
      /* harmony import */


      var _user_new_user_new_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-new/user-new.component */
      55823);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular-datatables */
      50481);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var ng2_izitoast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng2-izitoast */
      27218);
      /* harmony import */


      var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng-multiselect-dropdown */
      10460);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _UsersModule = /*#__PURE__*/_createClass(function _UsersModule() {
        _classCallCheck(this, _UsersModule);
      });

      _UsersModule.ɵfac = function UsersModule_Factory(t) {
        return new (t || _UsersModule)();
      };

      _UsersModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _UsersModule
      });
      _UsersModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _users_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsersRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, ng2_izitoast__WEBPACK_IMPORTED_MODULE_4__.Ng2IziToastModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__.NgMultiSelectDropDownModule.forRoot(), angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_UsersModule, {
          declarations: [_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_1__.UserListComponent, _user_new_user_new_component__WEBPACK_IMPORTED_MODULE_2__.UserNewComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _users_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsersRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, ng2_izitoast__WEBPACK_IMPORTED_MODULE_4__.Ng2IziToastModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__.NgMultiSelectDropDownModule, angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule]
        });
      })();
      /***/

    },

    /***/
    76834:
    /*!******************************************************************************!*\
      !*** ./node_modules/ng-multiselect-dropdown/node_modules/tslib/tslib.es6.js ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "__extends": function __extends() {
          return (
            /* binding */
            _extends
          );
        },

        /* harmony export */
        "__assign": function __assign() {
          return (
            /* binding */
            _assign2
          );
        },

        /* harmony export */
        "__rest": function __rest() {
          return (
            /* binding */
            _rest
          );
        },

        /* harmony export */
        "__decorate": function __decorate() {
          return (
            /* binding */
            _decorate
          );
        },

        /* harmony export */
        "__param": function __param() {
          return (
            /* binding */
            _param
          );
        },

        /* harmony export */
        "__metadata": function __metadata() {
          return (
            /* binding */
            _metadata
          );
        },

        /* harmony export */
        "__awaiter": function __awaiter() {
          return (
            /* binding */
            _awaiter
          );
        },

        /* harmony export */
        "__generator": function __generator() {
          return (
            /* binding */
            _generator
          );
        },

        /* harmony export */
        "__createBinding": function __createBinding() {
          return (
            /* binding */
            _createBinding
          );
        },

        /* harmony export */
        "__exportStar": function __exportStar() {
          return (
            /* binding */
            _exportStar
          );
        },

        /* harmony export */
        "__values": function __values() {
          return (
            /* binding */
            _values
          );
        },

        /* harmony export */
        "__read": function __read() {
          return (
            /* binding */
            _read
          );
        },

        /* harmony export */
        "__spread": function __spread() {
          return (
            /* binding */
            _spread
          );
        },

        /* harmony export */
        "__spreadArrays": function __spreadArrays() {
          return (
            /* binding */
            _spreadArrays
          );
        },

        /* harmony export */
        "__await": function __await() {
          return (
            /* binding */
            _await
          );
        },

        /* harmony export */
        "__asyncGenerator": function __asyncGenerator() {
          return (
            /* binding */
            _asyncGenerator
          );
        },

        /* harmony export */
        "__asyncDelegator": function __asyncDelegator() {
          return (
            /* binding */
            _asyncDelegator
          );
        },

        /* harmony export */
        "__asyncValues": function __asyncValues() {
          return (
            /* binding */
            _asyncValues
          );
        },

        /* harmony export */
        "__makeTemplateObject": function __makeTemplateObject() {
          return (
            /* binding */
            _makeTemplateObject
          );
        },

        /* harmony export */
        "__importStar": function __importStar() {
          return (
            /* binding */
            _importStar
          );
        },

        /* harmony export */
        "__importDefault": function __importDefault() {
          return (
            /* binding */
            _importDefault
          );
        },

        /* harmony export */
        "__classPrivateFieldGet": function __classPrivateFieldGet() {
          return (
            /* binding */
            _classPrivateFieldGet
          );
        },

        /* harmony export */
        "__classPrivateFieldSet": function __classPrivateFieldSet() {
          return (
            /* binding */
            _classPrivateFieldSet
          );
        }
        /* harmony export */

      });
      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
      
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */

      /* global Reflect, Promise */


      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      function _extends(d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }

      var _assign2 = function _assign() {
        _assign2 = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];

            for (var p in s) {
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
          }

          return t;
        };

        return _assign2.apply(this, arguments);
      };

      function _rest(s, e) {
        var t = {};

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        }

        if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
        }
        return t;
      }

      function _decorate(decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }

      function _param(paramIndex, decorator) {
        return function (target, key) {
          decorator(target, key, paramIndex);
        };
      }

      function _metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
      }

      function _awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }

      function _generator(thisArg, body) {
        var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
            f,
            y,
            t,
            g;
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
          return this;
        }), g;

        function verb(n) {
          return function (v) {
            return step([n, v]);
          };
        }

        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");

          while (_) {
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];

              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;

                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };

                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;

                case 7:
                  op = _.ops.pop();

                  _.trys.pop();

                  continue;

                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }

                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }

                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }

                  if (t && _.label < t[2]) {
                    _.label = t[2];

                    _.ops.push(op);

                    break;
                  }

                  if (t[2]) _.ops.pop();

                  _.trys.pop();

                  continue;
              }

              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          }

          if (op[0] & 5) throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      }

      function _createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      }

      function _exportStar(m, exports) {
        for (var p in m) {
          if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      function _values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator,
            m = s && o[s],
            i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
          next: function next() {
            if (o && i >= o.length) o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }

      function _read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o),
            r,
            ar = [],
            e;

        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
          }
        } catch (error) {
          e = {
            error: error
          };
        } finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }

        return ar;
      }

      function _spread() {
        for (var ar = [], i = 0; i < arguments.length; i++) {
          ar = ar.concat(_read(arguments[i]));
        }

        return ar;
      }

      function _spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
          s += arguments[i].length;
        }

        for (var r = Array(s), k = 0, i = 0; i < il; i++) {
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
            r[k] = a[j];
          }
        }

        return r;
      }

      ;

      function _await(v) {
        return this instanceof _await ? (this.v = v, this) : new _await(v);
      }

      function _asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []),
            i,
            q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i;

        function verb(n) {
          if (g[n]) i[n] = function (v) {
            return new Promise(function (a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
        }

        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }

        function step(r) {
          r.value instanceof _await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }

        function fulfill(value) {
          resume("next", value);
        }

        function reject(value) {
          resume("throw", value);
        }

        function settle(f, v) {
          if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
        }
      }

      function _asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function () {
          return this;
        }, i;

        function verb(n, f) {
          i[n] = o[n] ? function (v) {
            return (p = !p) ? {
              value: _await(o[n](v)),
              done: n === "return"
            } : f ? f(v) : v;
          } : f;
        }
      }

      function _asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator],
            i;
        return m ? m.call(o) : (o = typeof _values === "function" ? _values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i);

        function verb(n) {
          i[n] = o[n] && function (v) {
            return new Promise(function (resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }

        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function (v) {
            resolve({
              value: v,
              done: d
            });
          }, reject);
        }
      }

      function _makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", {
            value: raw
          });
        } else {
          cooked.raw = raw;
        }

        return cooked;
      }

      ;

      function _importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) {
          if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        }
        result["default"] = mod;
        return result;
      }

      function _importDefault(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      }

      function _classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }

        return privateMap.get(receiver);
      }

      function _classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }

        privateMap.set(receiver, value);
        return value;
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_views_users_users_module_ts-es5.js.map