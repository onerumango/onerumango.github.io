(function () {
  "use strict";

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


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/models/fmosNewRolePermissions */
      35383);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/excel.service */
      58219);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/user.service */
      98613);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      77382);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angular-datatables */
      50481);

      function UserListComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserListComponent_div_4_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r4.exportAsXLSX();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "User Report \xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "svg", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "path", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function UserListComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserListComponent_div_7_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r6.createUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.roleCodes["new"].labelDescription);
        }
      }

      function UserListComponent_tr_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserListComponent_tr_27_Template_a_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);

            var users_r8 = restoredCtx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r9.modifyUser(users_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var users_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("routerLink", "/users/new/", users_r8.userId, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](users_r8.userId);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](users_r8.userName);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](users_r8.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](users_r8.mobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](users_r8.verifiedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](14, 7, users_r8.creatorDtStamp, "medium"));
        }
      }

      function UserListComponent_ng_container_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Please wait... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }
      }

      var _c0 = function _c0() {
        return ["/dashboard"];
      };

      var _UserListComponent = /*#__PURE__*/function () {
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
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe('en-US'); // this.dtOptions = {};

          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
          this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__.permissionsLabels();
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
                'targets': [5]
              }],
              order: [[5, 'desc']],
              processing: true,
              lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]] // columnDefs: [ { type: 'date', 'targets': [5] } ],
              // order: [[5, 'desc']],

            };
            this.getAllUsers();
            this.roleService.fetchScreenPermissions('Users');
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this6.roleCodes = message;
            });
            console.log(this.roleCodes);
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
              _this7.allUsersList = resp.result;
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

            var navigationExtras = {
              queryParams: {
                // 'id': this.modifyUserObject.id,
                'userId': this.currentUser.userId,
                'userName': this.currentUser.userName,
                'email': this.currentUser.email,
                'ldapUserId': this.currentUser.ldapUserId,
                'failedAttempts': this.currentUser.failedAttempts,
                'mobile': this.currentUser.mobile,
                'authStatus': this.currentUser.verifiedStatus,
                'recordStatus': this.currentUser.recordStatus,
                'autoAuth': this.currentUser.autoAuth,
                'emailNotification': this.currentUser.emailNotification,
                'maintAllowed': this.currentUser.maintAllowed,
                'smsNotification': this.currentUser.smsNotification,
                'userAccessOption': this.currentUser.userAccessOption,
                'roleForUser': this.currentUser.roleForUser,
                'creatorId': this.currentUser.creatorId,
                'creatorDtStamp': this.currentUser.creatorDtStamp,
                'verifierId': this.currentUser.verifierId,
                'verifierDtStamp': this.currentUser.verifierDtStamp,
                'encryptedPassword': this.currentUser.encryptedPassword,
                'updatedBy': this.currentUser.updatedBy,
                'fristTimeAuth': this.currentUser.verifiedOnce,
                'newRoleForUser': this.currentUser.newRoleForUser,
                'versionNo': this.currentUser.versionNo,
                'statusForUser': this.currentUser.statusForUser,
                'department': this.currentUser.department,
                'intime': this.currentUser.intime,
                'outtime': this.currentUser.outtime,
                'pwdChangeDate': this.currentUser.pwdChangeDate
              }
            }; // console.log(this.currentUser.intime, this.currentUser.outtime);
            //console.log(this.currentUser);department

            this.userApi.sendNavParam(navigationExtras);
            this.route.navigate(['users/new']);
          }
        }, {
          key: "createUser",
          value: function createUser() {
            this.route.navigate(['users/new']);
            var navigationExtras = {
              queryParams: {}
            };
            this.userApi.sendNavParam(navigationExtras);
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
        }]);

        return _UserListComponent;
      }();

      _UserListComponent.ɵfac = function UserListComponent_Factory(t) {
        return new (t || _UserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_2__.ExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_4__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
      };

      _UserListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _UserListComponent,
        selectors: [["npr-user-list"]],
        decls: 29,
        vars: 8,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["class", "file", "style", "margin-left: 15px;", 4, "ngIf"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "file", 2, "margin-left", "15px"], [1, "btn", "smBtn", "btnPrimary", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-download", 2, "margin-top", "2%"], ["d", "M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"], ["d", "M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "primaryColor", 2, "cursor", "pointer", 3, "routerLink", "click"], [1, "loading-page-center"], [1, "indicator-progress"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"]],
        template: function UserListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "User Management");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, UserListComponent_div_4_Template, 7, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, UserListComponent_div_7_Template, 3, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "User ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "User Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Mobile No");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Auth Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, UserListComponent_tr_27_Template, 15, 10, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, UserListComponent_ng_container_28_Template, 5, 0, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.roleCodes["new"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](7, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.allUsersList);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, angular_datatables__WEBPACK_IMPORTED_MODULE_5__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"]
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


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
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


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      81134);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
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


      var ng2_izitoast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng2-izitoast */
      27218);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-multiselect-dropdown */
      10460);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ng-select/ng-select */
      88660);

      function UserNewComponent_div_13_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please Enter User Id ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_13_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Enter Valid User Id ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_13_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please Enter User Id(minimum 2 digits) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, UserNewComponent_div_13_div_1_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, UserNewComponent_div_13_div_2_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, UserNewComponent_div_13_div_3_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.userForm.get("userId").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.userForm.get("userId").errors.pattern);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.userForm.get("userId").errors.minlength && ctx_r0.userForm.get("userId").errors.maxlength);
        }
      }

      function UserNewComponent_div_20_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please Enter User Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, UserNewComponent_div_20_div_1_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.userForm.get("userName").errors.required);
        }
      }

      function UserNewComponent_div_25_img_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 40);
        }
      }

      function UserNewComponent_div_25_img_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 41);
        }
      }

      function UserNewComponent_div_25_div_8_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please Enter Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_25_div_8_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r22.errorMsg, " ");
        }
      }

      function UserNewComponent_div_25_div_8_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Password must contain Minimum ", ctx_r23.minPass, " characters. ");
        }
      }

      function UserNewComponent_div_25_div_8_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Password must contain Maximum ", ctx_r24.maxPass, " characters. ");
        }
      }

      function UserNewComponent_div_25_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, UserNewComponent_div_25_div_8_div_1_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, UserNewComponent_div_25_div_8_div_2_Template, 2, 1, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, UserNewComponent_div_25_div_8_div_3_Template, 2, 1, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, UserNewComponent_div_25_div_8_div_4_Template, 2, 1, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r20.userForm.get("password").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r20.userForm.get("password").errors.pattern);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r20.userForm.get("password").errors.minlength);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r20.userForm.get("password").errors.maxlength);
        }
      }

      function UserNewComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UserNewComponent_div_25_Template_span_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r25.hide = !ctx_r25.hide;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, UserNewComponent_div_25_img_6_Template, 1, 0, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, UserNewComponent_div_25_img_7_Template, 1, 0, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, UserNewComponent_div_25_div_8_Template, 5, 4, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", ctx_r2.hide ? "password" : "text")("readonly", ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r2.hide);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.hide);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.userForm.get("password").invalid && (ctx_r2.userForm.get("password").dirty || ctx_r2.userForm.get("password").touched));
        }
      }

      function UserNewComponent_div_30_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please Enter Email Id ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_30_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please Enter Valid Email Id ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, UserNewComponent_div_30_div_1_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, UserNewComponent_div_30_div_2_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.userForm.get("email").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.userForm.get("email").errors.pattern);
        }
      }

      function UserNewComponent_div_35_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please Enter Mobile Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_35_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Please Enter Valid Phone number with 10 digits");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, UserNewComponent_div_35_div_1_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, UserNewComponent_div_35_p_2_Template, 2, 0, "p", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.userForm.get("mobile").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r4.userForm.get("mobile").hasError("pattern") && ctx_r4.userForm.get("mobile").touched);
        }
      }

      function UserNewComponent_div_43_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please Select Roles ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, UserNewComponent_div_43_div_1_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.userForm.get("newRoleForUser").errors.required);
        }
      }

      function UserNewComponent_ng_option_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ng-option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r32 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r7.editFlag)("value", element_r32);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](element_r32);
        }
      }

      function UserNewComponent_div_51_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please Select Department ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, UserNewComponent_div_51_div_1_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r8.userForm.get("department").errors.required);
        }
      }

      function UserNewComponent_div_58_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please Enter In time ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, UserNewComponent_div_58_div_1_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r9.userForm.get("intime").errors.required);
        }
      }

      function UserNewComponent_div_61_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please Enter Out time ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, UserNewComponent_div_61_div_1_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r10.userForm.get("outtime").errors.required);
        }
      }

      var _c0 = function _c0() {
        return ["/users"];
      };

      function UserNewComponent_div_76_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UserNewComponent_div_76_Template_button_click_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r36.onFormSubmit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r11.submit || !ctx_r11.userForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](2, _c0));
        }
      }

      function UserNewComponent_div_77_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UserNewComponent_div_77_div_2_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r45);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r44.editValues();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r38.roleCodes.edit.labelDescription);
        }
      }

      function UserNewComponent_div_77_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UserNewComponent_div_77_div_3_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r47);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r46.onModifyFormSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r39.submit);
        }
      }

      function UserNewComponent_div_77_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UserNewComponent_div_77_div_4_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r49);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r48.onClickOfAuthOfModifyUsers();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", !ctx_r40.authBtn);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r40.roleCodes.auth.labelDescription);
        }
      }

      function UserNewComponent_div_77_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UserNewComponent_div_77_div_5_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r50.onClickOfReOpenOfModifyUsers();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", !ctx_r41.openHide);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r41.roleCodes.reopen.labelDescription);
        }
      }

      function UserNewComponent_div_77_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UserNewComponent_div_77_div_6_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r53);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r52.onClickOfCloseOfModifyUSers();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", !ctx_r42.closeHide);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r42.roleCodes.close.labelDescription);
        }
      }

      function UserNewComponent_div_77_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function UserNewComponent_div_77_div_7_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r55);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r54.onClickOfDeleteOfModifyUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r43.roleCodes["delete"].labelDescription);
        }
      }

      function UserNewComponent_div_77_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, UserNewComponent_div_77_div_2_Template, 3, 1, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, UserNewComponent_div_77_div_3_Template, 3, 1, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, UserNewComponent_div_77_div_4_Template, 3, 2, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, UserNewComponent_div_77_div_5_Template, 3, 2, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, UserNewComponent_div_77_div_6_Template, 3, 2, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, UserNewComponent_div_77_div_7_Template, 3, 1, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r12.editFlag && ctx_r12.roleCodes.edit && (ctx_r12.userObjWithAudit.recordStatus == "O" || ctx_r12.userObjWithAudit.recordStatus == "OPEN"));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r12.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r12.userObjWithAudit.verifiedStatus == "U" || ctx_r12.userObjWithAudit.verifiedStatus == "UNAUTHORIZED") && ctx_r12.roleCodes.auth);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r12.userObjWithAudit.recordStatus == "C" || ctx_r12.userObjWithAudit.recordStatus == "CLOSE") && ctx_r12.roleCodes.reopen && (ctx_r12.userObjWithAudit.verifiedOnce == "YES" || ctx_r12.userObjWithAudit.verifiedOnce == "Y") && ctx_r12.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r12.userObjWithAudit.recordStatus == "O" || ctx_r12.userObjWithAudit.recordStatus == "OPEN") && (ctx_r12.userObjWithAudit.verifiedOnce == "YES" || ctx_r12.userObjWithAudit.verifiedOnce == "Y") && ctx_r12.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r12.roleCodes["delete"] && (ctx_r12.userObjWithAudit.verifiedOnce == "NO" || ctx_r12.userObjWithAudit.verifiedOnce == "N") && (ctx_r12.userObjWithAudit.verifiedStatus == "U" || ctx_r12.userObjWithAudit.verifiedStatus == "UNAUTHORIZED") && ctx_r12.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](7, _c0));
        }
      }

      function UserNewComponent_div_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "img", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 63);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "img", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 63);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 63);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "img", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 63);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](56, "img", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "div", 63);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](69, "img", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "div", 63);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](81, "img", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "div", 63);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](93, "img", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](96, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](97, "Modification Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](99);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r13.userObjWithAudit.creatorId);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](26, 8, ctx_r13.userObjWithAudit.creatorDtStamp, "MM/dd/yyyy, h:mm a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r13.userObjWithAudit.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r13.userObjWithAudit.verifierId);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](63, 11, ctx_r13.userObjWithAudit.verifierDtStamp, "MM/dd/yyyy, h:mm a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r13.userObjWithAudit.verifiedOnce);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r13.userObjWithAudit.verifiedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r13.userObjWithAudit.modNo);
        }
      }

      var _UserNewComponent = /*#__PURE__*/function () {
        // swalMsg: import("sweetalert2").SweetAlertResult<any>;
        function _UserNewComponent(roleService, userApi, securityApi, _location, formBuilder, cdr, iziToast, router) {
          _classCallCheck(this, _UserNewComponent);

          this.roleService = roleService;
          this.userApi = userApi;
          this.securityApi = securityApi;
          this._location = _location;
          this.formBuilder = formBuilder;
          this.cdr = cdr;
          this.iziToast = iziToast;
          this.router = router;
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
          this.submit = true;
          this.errorMsg = '';
          this.isPswd = true;
          this.dataTableConfig = {
            sortBy: "version",
            pageNo: 1,
            pageSize: 5
          };
        }

        _createClass(_UserNewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.currentUser = localStorage.getItem("userFromLogin");
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
              return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        this.securityDetails = dataresp;

                        if (this.securityDetails.result[0].passwordGenerationType == 'Auto') {
                          this.isPswd = false;
                          console.log(this.securityDetails.result[0].passwordGenerationType);
                        }

                        if (this.securityDetails.result[0].passwordGenerationType == 'Manual') {
                          this.isPswd = true;
                        }

                        this.userForm.controls.passwordGenerationType.setValue(this.securityDetails.result[0].passwordGenerationType); // this.userForm=this.formBuilder.group({
                        //   passwordGenerationType:[this.securityDetails.result[0].passwordGenerationType]
                        //   })
                        // this.initDataTableListeners()

                      case 4:
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
              return _this9.editUserScreen = data;
            });

            if (this.editUserScreen && Object.keys(this.editUserScreen).length === 0 && Object.getPrototypeOf(this.editUserScreen) === Object.prototype) {
              this._location.back();
            }

            this.editFlag = false;
            this.user_id = localStorage.getItem('userFromLogin').replace(/['"]+/g, '');
            this.role = sessionStorage.getItem('user_role');

            if (this.editUserScreen.queryParams.userId != '') {
              this.buildUserForm(this.editUserScreen.queryParams, true);
            }

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
            this.modifyUserObject.passwordGenerationType = this.editUserScreen.queryParams.statusForUser;

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
            this.userObjWithAudit = this.modifyUserObject;

            if (this.modifyUserObject.userId) {
              this.modifyScreen = true;
              this.editFlag = true;
            }

            this.getAllDeptNames();
            this.getAllRolesNames();
            this.getUserAuditData();
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this9.roleCodes = message;
            });
            console.log(this.roleCodes); // this.userForm.disable();
          }
        }, {
          key: "buildUserForm",
          value: function buildUserForm(data, isResponse) {
            var _this10 = this;

            this.securityApi.fetchSecurityPolicyService().subscribe(function (resp) {
              _this10.security1 = resp;
              _this10.ucase = _this10.security1.pswdComplexUcase;
              _this10.lcase = _this10.security1.pswdComplexLcase;
              _this10.num = _this10.security1.pswdComplexNum;
              _this10.splc = _this10.security1.pswdComplexSplc;
              _this10.errorMsg = '';
              _this10.passwordRegex = '';
              _this10.minPass = _this10.security1.minPswdLength;
              _this10.maxPass = _this10.security1.maxPswdLength;
              _this10.usersmax = 35;
              _this10.usersmin = 2;

              if (_this10.security1.pswdComplexUcase == "true") {
                // this.passwordRegex = '(?=[^A-Z]*[A-Z])';
                _this10.passwordRegex = '(?=.*[A-Z])';
                _this10.errorMsg = ' UpperCase';
              }

              if (_this10.security1.pswdComplexLcase == "true") {
                // this.passwordRegex = this.passwordRegex + '(?=[^a-z]*[a-z])';
                _this10.passwordRegex = _this10.passwordRegex + '(?=.*[a-z])';

                if (_this10.errorMsg != '') {
                  _this10.errorMsg = _this10.errorMsg + ', LowerCase';
                } else {
                  // this.errorMsg = this.errorMsg + ' LowerCase';
                  _this10.errorMsg = ' LowerCase';
                }
              }

              if (_this10.security1.pswdComplexNum == "true") {
                // this.passwordRegex = this.passwordRegex + '(?=[^0-9]*[0-9])';
                _this10.passwordRegex = _this10.passwordRegex + '(?=.*?[0-9])';

                if (_this10.errorMsg != '') {
                  _this10.errorMsg = _this10.errorMsg + ', Number';
                } else {
                  _this10.errorMsg = ' Number';
                }
              }

              if (_this10.security1.pswdComplexSplc == "true") {
                // this.passwordRegex = this.passwordRegex + '(?=[^!-@]*[!-@])';
                _this10.passwordRegex = _this10.passwordRegex + '(?=.*?[!@#\$&*~])';

                if (_this10.errorMsg != '') {
                  _this10.errorMsg = _this10.errorMsg + ', Special Character';
                } else {
                  _this10.errorMsg = ' Special Character';
                }
              } // this.userIdSpclChar='(@._)[A-Z])';
              // this.passwordRegex = this.passwordRegex + '.{' + this.minPass + ',' + this.maxPass + '}';


              _this10.passwordRegex = _this10.passwordRegex + '.{' + _this10.minPass + ',}'; // this.passwordRegex = "(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^!-@]*[!-@]).{10,15}";

              _this10.errorMsg = 'Password must contain atleast one ' + _this10.errorMsg + '.'; // this.errorMsg1='User Id must contain atleast one ' + this.errorMsg1 + '.';

              console.log(_this10.passwordRegex);

              _this10.userForm.get('password').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(_this10.passwordRegex), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(_this10.maxPass), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(_this10.minPass)])]); // (this.userForm.get('userId') as FormControl).setValidators([Validators.required,
              //   Validators.compose([Validators.pattern('^[a-zA-Z0-9]$"'),
              //   Validators.maxLength(this.usersmax),
              //   Validators.minLength(this.usersmin)])
              // ]);
              // ---------- Password Policy Implementation (END) ----------

            }); // this.passwordRegex = this.passwordRegex + '.{' + this.minPass + ',' + this.maxPass + '}';
            // // this.passwordRegex = "(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^!-@]*[!-@]).{10,15}";
            // this.errorMsg = 'Password must contain atleast one ' + this.errorMsg + '.';

            console.log(this.passwordRegex);
            this.userForm = this.formBuilder.group({
              // userId: [data.userId ? data.userId:'', [Validators.required,
              //   Validators.compose([Validators.pattern('^[a-zA-Z0-9]$"'),
              //   Validators.maxLength(this.usersmax),
              //   Validators.minLength(this.usersmin)])]],
              // userId: [data.userId ? data.userId:'', [Validators.required,,UsernameValidator.cannotContainSpace
              //  ]],
              userId: [data.userId ? data.userId : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _UsernameValidator.cannotContainSpace]],
              userName: [data.userName ? data.userName : '', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
              password: [data.encryptedPassword ? data.encryptedPassword : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(this.passwordRegex), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(this.maxPass), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(this.minPass)])]],
              email: [data.email ? data.email : '', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
              department: [data.department ? data.department : ''],
              mobile: [data.mobile ? data.mobile : ''],
              // rolesForUser: new FormControl(''),
              newRoleForUser: [data.newRoleForUser ? data.newRoleForUser : '', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
              statusForUser: [data.statusForUser ? data.statusForUser : 'Enable'],
              intime: [data.intime ? data.intime : '09:00'],
              outtime: [data.outtime ? data.outtime : '18:00'],
              passwordGenerationType: [data.passwordGenerationType ? data.passwordGenerationType : '']
            });
            console.log(this.userForm);
          }
        }, {
          key: "getAllRolesNames",
          value: function getAllRolesNames() {
            var _this11 = this;

            this.roleService.getAllRoles().subscribe(function (data) {
              _this11.allRoleNames = data; // console.log(this.allRoleNames, data);
            });
          }
        }, {
          key: "getAllDeptNames",
          value: function getAllDeptNames() {
            var _this12 = this;

            this.roleService.getAllDept().subscribe(function (data) {
              _this12.allDeptNames = data; // console.log(this.allDeptNames);
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
            console.log(item);
          }
        }, {
          key: "onDeSelect",
          value: function onDeSelect(item) {
            console.log(item);
          }
        }, {
          key: "onSelectAll",
          value: function onSelectAll(items) {
            console.log(items);
          }
        }, {
          key: "onDeSelectAll",
          value: function onDeSelectAll(items) {
            console.log(items);
          }
        }, {
          key: "onClickOfCloseOfModifyUSers",
          value: function onClickOfCloseOfModifyUSers() {
            var _this13 = this;

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
                _this13.userApi.onClickOfCloseOfModifyUsers(_this13.modifyUserObject.userId, _this13.modifyUserObject.creatorId).subscribe(function (dataofCloseFromBackend) {
                  _this13.statusFlag = dataofCloseFromBackend;
                  _this13.openBtn = false;
                  _this13.closeBtn = false;

                  _this13.getUserAuditData();

                  if (_this13.statusFlag) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                      text: "User is Closed",
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
            var _this14 = this;

            //console.log('on click of reopen of Modify user');
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
                _this14.userApi.onClickOfReopenOfModifyUser(_this14.modifyUserObject.userId, _this14.modifyUserObject.creatorId).subscribe(function (dataOfReopen) {
                  // console.log(dataOfReopen);
                  _this14.statusFlag = dataOfReopen;

                  _this14.getUserAuditData();

                  _this14.openBtn = false;
                  _this14.closeBtn = false;

                  if (_this14.statusFlag) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                      text: "User is Reopened",
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
            var _this15 = this;

            // console.log(this.modifyUserObject);
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
                _this15.userApi.onClickOfDeleteOfModifyUser(_this15.modifyUserObject.userId).subscribe(function (datafrombackendtoDelete) {
                  //console.log('deleteData', datafrombackendtoDelete);
                  _this15.deleteStatusFlag = datafrombackendtoDelete;

                  if (_this15.deleteStatusFlag) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                      text: "User is Deleted",
                      icon: 'success'
                    });

                    _this15.router.navigate(['/users']);
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
            var _this16 = this;

            console.log("maker and checker", this.userObjWithAudit.creatorId, this.currentUser);

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
                  UpdateUserAuthDto.userId = _this16.modifyUserObject.userId;
                  UpdateUserAuthDto.makerId = _this16.currentUser;

                  _this16.userApi.onClickOfAuthOfModifyUsers(UpdateUserAuthDto).subscribe(function (authResp) {
                    console.log(authResp);
                    _this16.authStatusFlag = authResp;

                    _this16.getUserAuditData();

                    if (_this16.authStatusFlag) {
                      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                        text: "User is Authorized",
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
            return !isNaN(Number(event.key)) && event.key !== " ";
          }
        }, {
          key: "getUpdatedModifiedObject",
          value: function getUpdatedModifiedObject() {
            var _this17 = this;

            this.userApi.getUserObjModified(this.modifyUserObject.userId).subscribe(function (gettingBackendData) {
              //console.log('gettingBackendData', gettingBackendData);
              _this17.modifyUserObject = gettingBackendData; //console.log(this.modifyUserObject);
            });
          }
        }, {
          key: "onModifyFormSubmit",
          value: function onModifyFormSubmit() {
            var _this18 = this;

            this.modifyUserObject.userId = this.userForm.get('userId').value, this.modifyUserObject.userName = this.userForm.get('userName').value;
            this.modifyUserObject.encryptedPassword = this.userForm.get('password').value;
            this.modifyUserObject.mobile = this.userForm.get('mobile').value;
            this.modifyUserObject.statusForUser = this.userForm.get('statusForUser').value;
            this.modifyUserObject.email = this.userForm.get('email').value;
            this.modifyUserObject.department = this.userForm.get('department').value; // this.modifyUserObject.roleForUser = this.userForm.get('rolesForUser').value;

            this.modifyUserObject.newRoleForUser = this.userForm.get('newRoleForUser').value;
            this.modifyUserObject.creatorId = this.currentUser;

            if (this.modifyUserObject.intime > this.modifyUserObject.outtime) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                text: "From time should be lower and to time should be higher",
                icon: 'error'
              });
            }

            console.log("form value", this.modifyUserObject);
            this.userApi.modifyUserService(this.modifyUserObject).subscribe(function (data) {
              _this18.statusFlag = data;
              _this18.userObjWithAudit = _this18.statusFlag;

              if (_this18.statusFlag) {
                _this18.submit = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                  text: 'User is Updated',
                  icon: 'success'
                });

                _this18.getUserAuditData();

                _this18.editFlag = false;
              }

              if (!_this18.statusFlag) {
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
            var _this19 = this;

            console.log(this.userObjWithAudit);
            this.userApi.getUserAuditService(this.userObjWithAudit.userId).subscribe(function (data) {
              _this19.userObjWithAudit = data;
              console.log('dev code user audit: ', _this19.userObjWithAudit);
              console.log(_this19.userObjWithAudit);

              if (_this19.userObjWithAudit.verifiedStatus === 'U') {
                _this19.userObjWithAudit.verifiedStatus = 'UNAUTHORIZED';
              }

              if (_this19.userObjWithAudit.verifiedStatus === 'A') {
                _this19.userObjWithAudit.verifiedStatus = 'AUTHORIZED';
              }
              /*
              */


              if (_this19.userObjWithAudit.verifiedOnce === 'N') {
                _this19.userObjWithAudit.verifiedOnce = 'NO';
              }

              if (_this19.userObjWithAudit.verifiedOnce === 'Y') {
                _this19.userObjWithAudit.verifiedOnce = 'YES';
              }
              /**
               * setting record status
               */


              if (_this19.userObjWithAudit.recordStatus === 'O') {
                _this19.userObjWithAudit.recordStatus = 'OPEN';
              }

              if (_this19.userObjWithAudit.recordStatus === 'C') {
                _this19.userObjWithAudit.recordStatus = 'CLOSE';
              }
            });
          }
        }, {
          key: "onFormSubmit",
          value: function onFormSubmit(event) {
            var _this20 = this;

            // event.preventDefault();
            if (this.userForm.get('intime').value === this.userForm.get('outtime').value) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                text: 'Enter In time and Enter Out time should not be same',
                icon: 'info'
              });
              return;
            }

            console.log(this.userForm);
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
            console.log("Formsubmit", this.userObj);
            this.userApi.createUserService(this.userObj).subscribe(function (data) {
              console.log(_this20.userObj);
              _this20.statusFlag = data;
              _this20.userObjWithAudit = _this20.statusFlag;
              console.log(_this20.userObjWithAudit);

              if (_this20.statusFlag) {
                _this20.editFlag = false;
                _this20.submit = false;
                _this20.modifyScreen = true;

                _this20.getUserAuditData();

                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                  text: 'User is Created ',
                  icon: 'success'
                });

                _this20.getUserAuditData();

                _this20.editFlag = true;
              }

              if (!_this20.statusFlag) {
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
          } // async pageDeactivation(): Promise<Observable<boolean>> {

        }, {
          key: "pageDeactivation",
          value: function pageDeactivation() {
            console.log("pageDeactivation in user was called"); // return of (true);

            if (this.userForm.touched) {
              var swalMsg = '';
              var result = confirm('There are unsaved changes! Are you sure?');
              console.log("result: ", result);
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(result); // const retVal = Promise.all([Swal.fire(
              //     {
              //       text: ' Do you want to Exit?',
              //       showCancelButton: true,
              //       confirmButtonColor: '#E6224A',
              //       cancelButtonColor: '#011945',
              //       // confirmButtonText: 'PROCEED.'
              //       cancelButtonText: 'NO',
              //       confirmButtonText: 'YES',
              //       icon:'info',
              //       inputValidator: result => result
              //     } )]
              //   ).then((results) => {
              //     console.log(results);
              //     return results[0].isConfirmed
              //   }) ;
              //   setTimeout(() => {
              //   Swal.fire(
              //     {
              //       text: ' Do you want to Exit?',
              //       showCancelButton: true,
              //       confirmButtonColor: '#E6224A',
              //       cancelButtonColor: '#011945',
              //       // confirmButtonText: 'PROCEED.'
              //       cancelButtonText: 'NO',
              //       confirmButtonText: 'YES',
              //       icon:'info',
              //       timer: 1000
              //     }
              //   ).then((result => { 
              //     if (result.isConfirmed === true) {
              //       swalMsg = 'true' ;
              //     } else {
              //       swalMsg = 'false' ;
              //     }
              //     console.log(swalMsg,"Result");
              //     return of(result.isConfirmed)
              //   }
              //   ))
              // }, 500);
              // const retVal = Swal.fire(
              //   {
              //     text: ' Do you want to Exit?',
              //     showCancelButton: true,
              //     confirmButtonColor: '#E6224A',
              //     cancelButtonColor: '#011945',
              //     // confirmButtonText: 'PROCEED.'
              //     cancelButtonText: 'NO',
              //     confirmButtonText: 'YES',
              //     icon:'info',
              //     inputValidator: result => result
              //   } ) ;
              // console.log(retVal);
              // console.log(swalMsg);
              // return of (retVal.isConfirmed);
              // return of(true);
              // return of(result);
              // Swal.fire(
              //   {
              //     text: ' Do you want to Exit?',
              //     showCancelButton: true,
              //     confirmButtonColor: '#E6224A',
              //     cancelButtonColor: '#011945',
              //     // confirmButtonText: 'PROCEED.'
              //     cancelButtonText: 'NO',
              //     confirmButtonText: 'YES',
              //     icon:'info'
              //   }
              // ).then((result => { 
              //   if (result.isConfirmed === true) {
              //     swalMsg = 'true' ;
              //   } else {
              //     swalMsg = 'false' ;
              //   }
              //   console.log(swalMsg,"Result");
              //   return of(result.isConfirmed)
              //   console.log(swalMsg,"Result aft");
              //   // if(result.isConfirmed === true){
              //   //   console.log("Inside True",result);
              //   //   return of(true);
              //   // }
              //   // else{
              //   //   console.log("Inside False",result);
              //     // return of(false);
              //   // }
              // }
              // ))
              // console.log("am here..", swalMsg) ;
              // do {
              //   console.log("I am here..", swalMsg) ;
              //   if (swalMsg === 'true'){
              //     return of (true);
              //   } 
              //   if (swalMsg === 'false'){
              //     return of (false) ;
              //   }
              // } while ( swalMsg !== '')
              // console.log("here..", swalMsg) ;
            } else {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(true);
            } // return this.pageDeactivation();
            // console.log("The End")
            // return;

          }
        }]);

        return _UserNewComponent;
      }();

      _UserNewComponent.ɵfac = function UserNewComponent_Factory(t) {
        return new (t || _UserNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_security_policy_service__WEBPACK_IMPORTED_MODULE_5__.SecurityPolicyService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ng2_izitoast__WEBPACK_IMPORTED_MODULE_6__.Ng2IzitoastService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router));
      };

      _UserNewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _UserNewComponent,
        selectors: [["npr-user-new"]],
        decls: 79,
        vars: 27,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "dbCardStyle"], [1, "row", "gy-4"], [1, "col-lg-4"], ["for", "roleName", 1, "formLbl"], [1, "colorRed"], ["id", "usersId", "placeholder", "User Id", "required", "", "oninput", "this.value = this.value.toUpperCase()", "formControlName", "userId", "type", "text", 1, "form-control", 3, "readonly"], ["class", "errorColor", 4, "ngIf"], ["id", "usersName", "type", "text", "formControlName", "userName", "placeholder", "User Name", 1, "form-control", 3, "readonly"], ["id", "passwordGenerationType", "type", "text", "formControlName", "passwordGenerationType", "placeholder", "User Name", "readonly", "", 1, "form-control"], ["class", "col-lg-4", 4, "ngIf"], ["type", "email", "id", "usersPassword", "formControlName", "email", "placeholder", "Email", "value", "", 1, "form-control", 3, "readonly"], ["id", "usersPassword", "pattern", "^\\d{10}$", "name", "mobile", "maxLength", "10", "formControlName", "mobile", "placeholder", "Mobile Number", 1, "form-control", 3, "readonly", "keypress"], ["formControlName", "newRoleForUser", 1, "container", 3, "placeholder", "data", "settings", "disabled", "onFilterChange", "onDropDownClose", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll"], ["multiSelect", ""], ["id", "outlineNgSelect", "formControlName", "department", "aria-label", "Default select example", 1, "form-select", 3, "readonly"], ["hidden", "", "value", "", "disabled", "", "selected", ""], [3, "disabled", "value", 4, "ngFor", "ngForOf"], [1, "col-lg-8"], [1, "col-lg-6"], ["id", "timeStart", "value", "09:00", "type", "time", "formControlName", "intime", 1, "form-control", 3, "readonly"], ["id", "timeEnd", "type", "time", "formControlName", "outtime", "placeholder", "18:00", "value", "", 1, "form-control", 3, "readonly"], [1, "row", "g-2"], [1, "radio", "radioStyle"], ["id", "radio-1", "formControlName", "statusForUser", "value", "Enable", "type", "radio", "checked", "", 3, "disabled"], ["for", "radio-1", 1, "radio-label"], ["id", "radio-2", "formControlName", "statusForUser", "type", "radio", "value", "Disable", 3, "disabled"], ["for", "radio-2", 1, "radio-label"], ["class", "col-lg-12", 4, "ngIf"], ["class", "dbCardStyle mt-20", 4, "ngIf"], [1, "errorColor"], [4, "ngIf"], [1, "form-control", "d-flex"], ["id", "usersPassword", "type", "password", "formControlName", "password", "placeholder", "Password", 1, "noborder", 2, "width", "100%", 3, "type", "readonly"], ["toggle", "#pwdFld", 1, "visibility", 3, "click"], ["class", "showPwd", "src", "assets/images/show-icon.svg", "alt", "...", 4, "ngIf"], ["class", "hidePwd", "src", "assets/images/hide-icon.svg", "alt", "...", 4, "ngIf"], ["src", "assets/images/show-icon.svg", "alt", "...", 1, "showPwd"], ["src", "assets/images/hide-icon.svg", "alt", "...", 1, "hidePwd"], [3, "disabled", "value"], [1, "col-lg-12"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["class", "col-auto", 4, "ngIf"], [1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "hidden", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "hidden", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "hidden", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "dbCardStyle", "mt-20"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], ["src", "assets/images/maker-icon.svg", "alt", "..."], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], ["src", "assets/images/checker-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/auth-status-icon.svg", "alt", "..."]],
        template: function UserNewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "User Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "User Id ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, UserNewComponent_div_13_Template, 4, 3, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "User Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, UserNewComponent_div_20_Template, 2, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Password Genaration Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, UserNewComponent_div_25_Template, 9, 5, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "Email Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, UserNewComponent_div_30_Template, 3, 2, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "Mobile Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keypress", function UserNewComponent_Template_input_keypress_34_listener($event) {
              return ctx.numericOnly($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, UserNewComponent_div_35_Template, 3, 2, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "Roles For User ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "ng-multiselect-dropdown", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onFilterChange", function UserNewComponent_Template_ng_multiselect_dropdown_onFilterChange_41_listener($event) {
              return ctx.onFilterChange($event);
            })("onDropDownClose", function UserNewComponent_Template_ng_multiselect_dropdown_onDropDownClose_41_listener($event) {
              return ctx.onDropDownClose($event);
            })("onSelect", function UserNewComponent_Template_ng_multiselect_dropdown_onSelect_41_listener($event) {
              return ctx.onItemSelect($event);
            })("onDeSelect", function UserNewComponent_Template_ng_multiselect_dropdown_onDeSelect_41_listener($event) {
              return ctx.onDeSelect($event);
            })("onSelectAll", function UserNewComponent_Template_ng_multiselect_dropdown_onSelectAll_41_listener($event) {
              return ctx.onSelectAll($event);
            })("onDeSelectAll", function UserNewComponent_Template_ng_multiselect_dropdown_onDeSelectAll_41_listener($event) {
              return ctx.onDeSelectAll($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, UserNewComponent_div_43_Template, 2, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "Department");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "ng-select", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "ng-option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "Please select Department");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, UserNewComponent_ng_option_50_Template, 2, 3, "ng-option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, UserNewComponent_div_51_Template, 2, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, "Select the time range for operating (in hours)");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](57, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](58, UserNewComponent_div_58_Template, 2, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](60, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](61, UserNewComponent_div_61_Template, 2, 1, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64, "User Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](68, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "label", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](70, "Enable");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](73, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "label", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](75, "Disable");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](76, UserNewComponent_div_76_Template, 8, 3, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](77, UserNewComponent_div_77_Template, 11, 8, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](78, UserNewComponent_div_78_Template, 100, 14, "div", 32);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.userForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("readonly", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.userForm.get("userId").invalid && (ctx.userForm.get("userId").dirty || ctx.userForm.get("userId").touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("readonly", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.userForm.get("userName").invalid && (ctx.userForm.get("userName").dirty || ctx.userForm.get("userName").touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isPswd);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("readonly", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.userForm.get("email").invalid && (ctx.userForm.get("email").dirty || ctx.userForm.get("email").touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("readonly", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.userForm.get("mobile").invalid && (ctx.userForm.get("mobile").dirty || ctx.userForm.get("mobile").touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("placeholder", "Roles For User")("data", ctx.allRoleNames)("settings", ctx.settings)("disabled", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.userForm.get("newRoleForUser").invalid && (ctx.userForm.get("newRoleForUser").dirty || ctx.userForm.get("newRoleForUser").touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("readonly", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.allDeptNames);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.userForm.get("department").invalid && (ctx.userForm.get("department").dirty || ctx.userForm.get("department").touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("readonly", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.userForm.get("intime").invalid && (ctx.userForm.get("intime").dirty || ctx.userForm.get("intime").touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("readonly", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.userForm.get("outtime").invalid && (ctx.userForm.get("outtime").dirty || ctx.userForm.get("outtime").touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.modifyScreen);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.modifyScreen || ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.editUserScreen.queryParams.userId != null || ctx.userObjWithAudit);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.PatternValidator, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__.MultiSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgOptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RadioControlValueAccessor, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
        styles: [".errorColor[_ngcontent-%COMP%] {\n  color: #e6224a;\n}\n\n.noborder[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.visibility[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.form-class[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #797979;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-bottom: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-left: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-right: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbmV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtBQUVKOztBQUFBO0VBRUksZUFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFFQSx3RUFBQTtBQUVKIiwiZmlsZSI6InVzZXItbmV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yQ29sb3J7XHJcbiAgICBjb2xvcjogI2U2MjI0YTtcclxufVxyXG4ubm9ib3JkZXJ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLnZpc2liaWxpdHl7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogMTc1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmZvcm0tY2xhc3Mge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzc5Nzk3OTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dFxyXG59Il19 */"]
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
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _users_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsersRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, ng2_izitoast__WEBPACK_IMPORTED_MODULE_4__.Ng2IziToastModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__.NgMultiSelectDropDownModule.forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_UsersModule, {
          declarations: [_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_1__.UserListComponent, _user_new_user_new_component__WEBPACK_IMPORTED_MODULE_2__.UserNewComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _users_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsersRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, ng2_izitoast__WEBPACK_IMPORTED_MODULE_4__.Ng2IziToastModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule, ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__.NgMultiSelectDropDownModule]
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