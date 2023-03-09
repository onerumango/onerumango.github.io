(function () {
  function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+803":
    /*!**********************************************************************!*\
      !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.ts ***!
      \**********************************************************************/

    /*! exports provided: BreadcrumbComponent */

    /***/
    function _(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
        return BreadcrumbComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/services/route-parts.service */
      "vafs");
      /* harmony import */


      var _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/services/layout.service */
      "rmxa");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function BreadcrumbComponent_div_1_li_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var part_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", part_r3.url, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, part_r3.breadcrumb));
        }
      }

      function BreadcrumbComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadcrumbComponent_div_1_li_2_Template, 4, 4, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.routeParts);
        }
      }

      function BreadcrumbComponent_div_2_ul_4_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var part_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", part_r6.url, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, part_r6.breadcrumb));
        }
      }

      function BreadcrumbComponent_div_2_ul_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_div_2_ul_4_li_1_Template, 4, 4, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.routeParts);
        }
      }

      function BreadcrumbComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BreadcrumbComponent_div_2_ul_4_Template, 2, 1, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx_r1.routeParts[ctx_r1.routeParts.length - 1] == null ? null : ctx_r1.routeParts[ctx_r1.routeParts.length - 1].breadcrumb), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.routeParts.length > 1);
        }
      }

      var BreadcrumbComponent = /*#__PURE__*/function () {
        // public isEnabled: boolean = true;
        function BreadcrumbComponent(router, routePartsService, activeRoute, layout) {
          var _this = this;

          _classCallCheck(this, BreadcrumbComponent);

          this.router = router;
          this.routePartsService = routePartsService;
          this.activeRoute = activeRoute;
          this.layout = layout;
          this.routeParts = this.routePartsService.generateRouteParts(this.activeRoute.snapshot);
          this.routerEventSub = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
          })).subscribe(function (routeChange) {
            _this.routeParts = _this.routePartsService.generateRouteParts(_this.activeRoute.snapshot); // generate url from parts

            _this.routeParts.reverse().map(function (item, i) {
              item.breadcrumb = _this.parseText(item);
              item.urlSegments.forEach(function (urlSegment, j) {
                if (j === 0) {
                  return item.url = "".concat(urlSegment.path);
                }

                item.url += "/".concat(urlSegment.path);
              });

              if (i === 0) {
                return item;
              } // prepend previous part to current part


              item.url = "".concat(_this.routeParts[i - 1].url, "/").concat(item.url);
              return item;
            });
          });
        }

        _createClass(BreadcrumbComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.routerEventSub) {
              this.routerEventSub.unsubscribe();
            }
          }
        }, {
          key: "parseText",
          value: function parseText(part) {
            if (!part.breadcrumb) {
              return '';
            }

            part.breadcrumb = part.breadcrumb.replace(/{{([^{}]*)}}/g, function (a, b) {
              var r = part.params[b];
              return typeof r === 'string' ? r : a;
            });
            return part.breadcrumb;
          }
        }]);

        return BreadcrumbComponent;
      }();

      BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
        return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_2__["RoutePartsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]));
      };

      BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BreadcrumbComponent,
        selectors: [["app-breadcrumb"]],
        decls: 3,
        vars: 2,
        consts: [[1, "container-dynamic"], ["class", "breadcrumb-bar", 4, "ngIf"], ["class", "breadcrumb-title", 4, "ngIf"], [1, "breadcrumb-bar"], [1, "breadcrumb"], [4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "breadcrumb-title"], [1, "bc-title"], ["class", "breadcrumb", 4, "ngIf"], [1, "text-muted", 3, "routerLink"]],
        template: function BreadcrumbComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_div_1_Template, 3, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadcrumbComponent_div_2_Template, 5, 4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layout.layoutConf.useBreadcrumb && ctx.layout.layoutConf.breadcrumb === "simple");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layout.layoutConf.useBreadcrumb && ctx.layout.layoutConf.breadcrumb === "title");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-breadcrumb',
            templateUrl: './breadcrumb.component.html',
            styleUrls: ['./breadcrumb.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_2__["RoutePartsService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _shared_services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "+MiJ":
    /*!************************************************************************!*\
      !*** ./src/app/shared/components/date-picker/date-picker.component.ts ***!
      \************************************************************************/

    /*! exports provided: DatePickerComponent */

    /***/
    function MiJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function () {
        return DatePickerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _date_picker_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./date-picker-service.service */
      "MTQd");
      /* harmony import */


      var app_views_others_demo_datePickerDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! app/views/others/demo/datePickerDetails */
      "0ue+");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function DatePickerComponent_div_10_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.datePickerDetailsObj.errorMsg, "");
        }
      }

      function DatePickerComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatePickerComponent_div_10_div_1_Template, 3, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);
        }
      }

      var DatePickerComponent = /*#__PURE__*/function () {
        function DatePickerComponent(dateService) {
          _classCallCheck(this, DatePickerComponent);

          this.dateService = dateService;
          this.datePickerDetailsObj = new app_views_others_demo_datePickerDetails__WEBPACK_IMPORTED_MODULE_2__["DatePickerDetails"]();
        }

        _createClass(DatePickerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("after", this.datePickerDetailsObj.defaultValue);
          }
        }, {
          key: "onDateChange",
          value: function onDateChange(event) {
            // this.dateChange.emit();
            console.log(event.value._d);
          }
        }, {
          key: "updateCalcs",
          value: function updateCalcs(event) {
            console.log(event.value);
          }
        }]);

        return DatePickerComponent;
      }();

      DatePickerComponent.ɵfac = function DatePickerComponent_Factory(t) {
        return new (t || DatePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_date_picker_service_service__WEBPACK_IMPORTED_MODULE_1__["DatePickerServiceService"]));
      };

      DatePickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DatePickerComponent,
        selectors: [["app-date-picker"]],
        inputs: {
          datePickerDetailsObj: "datePickerDetailsObj"
        },
        decls: 11,
        vars: 5,
        consts: [["date", "ngForm"], ["matInput", "", "ngModel", "", "name", "Exec_Date", "required", "", 3, "matDatepicker", "ngModel", "ngModelChange", "dateChange"], ["Exec_Date", "ngModel"], ["matSuffix", "", 3, "for"], [3, "selectionChange"], ["picker", ""], [4, "ngIf"], [2, "color", "red"]],
        template: function DatePickerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", null, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatePickerComponent_Template_input_ngModelChange_5_listener($event) {
              return ctx.datePickerDetailsObj.defaultValue = $event;
            })("dateChange", function DatePickerComponent_Template_input_dateChange_5_listener($event) {
              return ctx.onDateChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-datepicker-toggle", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-datepicker", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function DatePickerComponent_Template_mat_datepicker_selectionChange_8_listener($event) {
              return ctx.updateCalcs($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DatePickerComponent_div_10_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.datePickerDetailsObj.datePickerLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r2)("ngModel", ctx.datePickerDetailsObj.defaultValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepicker"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
        styles: [".date[_ngcontent-%COMP%] {\n  z-index: 10000;\n  width: 255px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  position: absolute;\n  display: none;\n  top: calc(100% + 10px);\n  left: 0;\n}\n\n.date.isActive[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.month-container[_ngcontent-%COMP%] {\n  background: #0a95ff;\n  border-top-left-radius: 0.25em;\n  border-top-right-radius: 0.25em;\n}\n\n.week-container[_ngcontent-%COMP%] {\n  background: #EBF6FF;\n  padding: 0 5px;\n}\n\n.month[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.week[_ngcontent-%COMP%], .day[_ngcontent-%COMP%] {\n  width: 2.5em;\n  padding: 0.625em 0;\n  text-align: center;\n}\n\n.day-container[_ngcontent-%COMP%] {\n  padding: 5px;\n  background: #fff;\n}\n\n.day[_ngcontent-%COMP%] {\n  border-radius: 100%;\n}\n\n.day[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n\n.day.isSelected[_ngcontent-%COMP%] {\n  background: #0a95ff;\n  color: #fff;\n}\n\n.blue--dark[_ngcontent-%COMP%] {\n  color: #00457a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZGF0ZS1waWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLHdFQUN5QztFQUN6QyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixPQUFPO0FBQVQ7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QiwrQkFBK0I7QUFFakM7O0FBQUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUdoQjs7QUFEQTtFQUNFLFdBQVc7QUFJYjs7QUFGQTs7RUFFRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUtwQjs7QUFIQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFNbEI7O0FBSkE7RUFDRSxtQkFBbUI7QUFPckI7O0FBTEE7RUFDRSxtQkFBbUI7QUFRckI7O0FBTkE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztBQVNiOztBQVBBO0VBQ0UsY0FBYztBQVVoQiIsImZpbGUiOiJkYXRlLXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRlIHtcclxuICB6LWluZGV4OiAxMDAwMDtcclxuICB3aWR0aDogMjU1cHg7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksXHJcbiAgICAgICAgICAgICAgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgdG9wOiBjYWxjKDEwMCUgKyAxMHB4KTtcclxuICBsZWZ0OiAwO1xyXG59XHJcbi5kYXRlLmlzQWN0aXZlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4ubW9udGgtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMGE5NWZmO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuMjVlbTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4yNWVtO1xyXG59XHJcbi53ZWVrLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogI0VCRjZGRjtcclxuICBwYWRkaW5nOiAwIDVweDtcclxufVxyXG4ubW9udGgge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi53ZWVrLFxyXG4uZGF5IHtcclxuICB3aWR0aDogMi41ZW07XHJcbiAgcGFkZGluZzogMC42MjVlbSAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZGF5LWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLmRheSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG4uZGF5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG59XHJcbi5kYXkuaXNTZWxlY3RlZCB7XHJcbiAgYmFja2dyb3VuZDogIzBhOTVmZjtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4uYmx1ZS0tZGFyayB7XHJcbiAgY29sb3I6ICMwMDQ1N2E7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatePickerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-date-picker',
            templateUrl: './date-picker.component.html',
            styleUrls: ['./date-picker.component.scss']
          }]
        }], function () {
          return [{
            type: _date_picker_service_service__WEBPACK_IMPORTED_MODULE_1__["DatePickerServiceService"]
          }];
        }, {
          datePickerDetailsObj: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "/1WF":
    /*!**********************************************************************!*\
      !*** ./src/app/shared/directives/egret-side-nav-toggle.directive.ts ***!
      \**********************************************************************/

    /*! exports provided: EgretSideNavToggleDirective */

    /***/
    function WF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EgretSideNavToggleDirective", function () {
        return EgretSideNavToggleDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");

      var EgretSideNavToggleDirective = /*#__PURE__*/function () {
        function EgretSideNavToggleDirective(mediaObserver, sideNav) {
          _classCallCheck(this, EgretSideNavToggleDirective);

          this.mediaObserver = mediaObserver;
          this.sideNav = sideNav;
        }

        _createClass(EgretSideNavToggleDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initSideNav();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.screenSizeWatcher) {
              this.screenSizeWatcher.unsubscribe();
            }
          }
        }, {
          key: "updateSidenav",
          value: function updateSidenav() {
            var self = this;
            setTimeout(function () {
              self.sideNav.opened = !self.isMobile;
              self.sideNav.mode = self.isMobile ? 'over' : 'side';
            });
          }
        }, {
          key: "initSideNav",
          value: function initSideNav() {
            var _this2 = this;

            this.isMobile = this.mediaObserver.isActive('xs') || this.mediaObserver.isActive('sm'); // console.log(this.isMobile)

            this.updateSidenav();
            this.screenSizeWatcher = this.mediaObserver.media$.subscribe(function (change) {
              _this2.isMobile = change.mqAlias == 'xs' || change.mqAlias == 'sm';

              _this2.updateSidenav();
            });
          }
        }]);

        return EgretSideNavToggleDirective;
      }();

      EgretSideNavToggleDirective.ɵfac = function EgretSideNavToggleDirective_Factory(t) {
        return new (t || EgretSideNavToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"], 11));
      };

      EgretSideNavToggleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: EgretSideNavToggleDirective,
        selectors: [["", "EgretSideNavToggle", ""]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EgretSideNavToggleDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[EgretSideNavToggle]'
          }]
        }], function () {
          return [{
            type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]
          }, {
            type: _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! F:\muthu-onboard\Icust-Frontend\icust\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0ue+":
    /*!********************************************************!*\
      !*** ./src/app/views/others/demo/datePickerDetails.ts ***!
      \********************************************************/

    /*! exports provided: DatePickerDetails */

    /***/
    function ue(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatePickerDetails", function () {
        return DatePickerDetails;
      });

      var DatePickerDetails = /*#__PURE__*/_createClass(function DatePickerDetails() {
        _classCallCheck(this, DatePickerDetails);
      });
      /***/

    },

    /***/
    "1wtQ":
    /*!***********************!*\
      !*** ./src/config.ts ***!
      \***********************/

    /*! exports provided: config */

    /***/
    function wtQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "config", function () {
        return config;
      });

      var config = {
        apiUrl: '',
        authRoles: {
          sa: ['SA'],
          admin: ['SA', 'Admin'],
          editor: ['SA', 'Admin', 'Editor'],
          user: ['SA', 'Admin', 'Editor', 'User'],
          guest: ['SA', 'Admin', 'Editor', 'User', 'Guest'] // Everyone has access

        }
      };
      /***/
    },

    /***/
    "30N5":
    /*!********************************************************!*\
      !*** ./src/app/shared/services/match-media.service.ts ***!
      \********************************************************/

    /*! exports provided: MatchMediaService */

    /***/
    function N5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatchMediaService", function () {
        return MatchMediaService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var MatchMediaService = /*#__PURE__*/function () {
        function MatchMediaService(mediaObserver) {
          _classCallCheck(this, MatchMediaService);

          this.mediaObserver = mediaObserver;
          this.onMediaChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
          this.activeMediaQuery = '';
          this.init();
        }

        _createClass(MatchMediaService, [{
          key: "init",
          value: function init() {
            var _this3 = this;

            this.mediaObserver.media$.subscribe(function (change) {
              if (_this3.activeMediaQuery !== change.mqAlias) {
                _this3.activeMediaQuery = change.mqAlias;

                _this3.onMediaChange.next(change.mqAlias);
              }
            });
          }
        }]);

        return MatchMediaService;
      }();

      MatchMediaService.ɵfac = function MatchMediaService_Factory(t) {
        return new (t || MatchMediaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]));
      };

      MatchMediaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MatchMediaService,
        factory: MatchMediaService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatchMediaService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["MediaObserver"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "336X":
    /*!****************************************************!*\
      !*** ./src/app/shared/pipes/relative-time.pipe.ts ***!
      \****************************************************/

    /*! exports provided: RelativeTimePipe */

    /***/
    function X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RelativeTimePipe", function () {
        return RelativeTimePipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RelativeTimePipe = /*#__PURE__*/function () {
        function RelativeTimePipe() {
          _classCallCheck(this, RelativeTimePipe);
        }

        _createClass(RelativeTimePipe, [{
          key: "transform",
          value: function transform(value) {
            if (!(value instanceof Date)) value = new Date(value);
            var seconds = Math.floor((new Date().getTime() - value.getTime()) / 1000);
            var interval = Math.floor(seconds / 31536000);

            if (interval > 1) {
              return interval + " years ago";
            }

            interval = Math.floor(seconds / 2592000);

            if (interval > 1) {
              return interval + " months ago";
            }

            interval = Math.floor(seconds / 86400);

            if (interval > 1) {
              return interval + " days ago";
            }

            interval = Math.floor(seconds / 3600);

            if (interval > 1) {
              return interval + " hours ago";
            }

            interval = Math.floor(seconds / 60);

            if (interval > 1) {
              return interval + " minutes ago";
            }

            return Math.floor(seconds) + " seconds ago";
          }
        }]);

        return RelativeTimePipe;
      }();

      RelativeTimePipe.ɵfac = function RelativeTimePipe_Factory(t) {
        return new (t || RelativeTimePipe)();
      };

      RelativeTimePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "relativeTime",
        type: RelativeTimePipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RelativeTimePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'relativeTime'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "3BvT":
    /*!**********************************************************************!*\
      !*** ./src/app/shared/services/app-confirm/app-confirm.component.ts ***!
      \**********************************************************************/

    /*! exports provided: AppComfirmComponent */

    /***/
    function BvT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComfirmComponent", function () {
        return AppComfirmComponent;
      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");

      var AppComfirmComponent = /*#__PURE__*/_createClass(function AppComfirmComponent(dialogRef, data) {
        _classCallCheck(this, AppComfirmComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      });

      AppComfirmComponent.ɵfac = function AppComfirmComponent_Factory(t) {
        return new (t || AppComfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]));
      };

      AppComfirmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AppComfirmComponent,
        selectors: [["app-confirm"]],
        decls: 11,
        vars: 2,
        consts: [["matDialogTitle", "", 1, "mb-8"], ["mat-dialog-content", "", 1, "mb-16"], ["mat-dialog-actions", ""], ["type", "button", "mat-raised-button", "", "color", "primary", 3, "click"], ["fxFlex", ""], ["type", "button", "color", "accent", "mat-raised-button", "", 3, "click"]],
        template: function AppComfirmComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComfirmComponent_Template_button_click_5_listener() {
              return ctx.dialogRef.close(true);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "OK");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComfirmComponent_Template_button_click_9_listener() {
              return ctx.dialogRef.close(false);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.message);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComfirmComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-confirm',
            template: "<h1 matDialogTitle class=\"mb-8\">{{ data.title }}</h1>\n    <div mat-dialog-content class=\"mb-16\">{{ data.message }}</div>\n    <div mat-dialog-actions>\n    <button \n    type=\"button\" \n    mat-raised-button\n    color=\"primary\" \n    (click)=\"dialogRef.close(true)\">OK</button>\n    &nbsp;\n    <span fxFlex></span>\n    <button \n    type=\"button\"\n    color=\"accent\"\n    mat-raised-button \n    (click)=\"dialogRef.close(false)\">Cancel</button>\n    </div>"
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "3kSh":
    /*!********************************************************************!*\
      !*** ./src/app/shared/services/app-confirm/app-confirm.service.ts ***!
      \********************************************************************/

    /*! exports provided: AppConfirmService */

    /***/
    function kSh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppConfirmService", function () {
        return AppConfirmService;
      });
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_confirm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-confirm.component */
      "3BvT");

      var AppConfirmService = /*#__PURE__*/function () {
        function AppConfirmService(dialog) {
          _classCallCheck(this, AppConfirmService);

          this.dialog = dialog;
        }

        _createClass(AppConfirmService, [{
          key: "confirm",
          value: function confirm() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            data.title = data.title || 'Confirm';
            data.message = data.message || 'Are you sure?';
            var dialogRef;
            dialogRef = this.dialog.open(_app_confirm_component__WEBPACK_IMPORTED_MODULE_2__["AppComfirmComponent"], {
              width: '380px',
              disableClose: true,
              data: {
                title: data.title,
                message: data.message
              }
            });
            return dialogRef.afterClosed();
          }
        }]);

        return AppConfirmService;
      }();

      AppConfirmService.ɵfac = function AppConfirmService_Factory(t) {
        return new (t || AppConfirmService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]));
      };

      AppConfirmService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AppConfirmService,
        factory: AppConfirmService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppConfirmService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "3sEA":
    /*!******************************************************************!*\
      !*** ./src/app/shared/services/app-loader/app-loader.service.ts ***!
      \******************************************************************/

    /*! exports provided: AppLoaderService */

    /***/
    function sEA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppLoaderService", function () {
        return AppLoaderService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _app_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-loader.component */
      "5alQ");

      var AppLoaderService = /*#__PURE__*/function () {
        function AppLoaderService(dialog) {
          _classCallCheck(this, AppLoaderService);

          this.dialog = dialog;
        }

        _createClass(AppLoaderService, [{
          key: "open",
          value: function open() {
            var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Please wait';
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
              width: '200px'
            };
            this.dialogRef = this.dialog.open(_app_loader_component__WEBPACK_IMPORTED_MODULE_2__["AppLoaderComponent"], {
              disableClose: true,
              backdropClass: 'light-backdrop'
            });
            this.dialogRef.updateSize(config.width);
            this.dialogRef.componentInstance.title = title;
            return this.dialogRef.afterClosed();
          }
        }, {
          key: "close",
          value: function close() {
            if (this.dialogRef) this.dialogRef.close();
          }
        }]);

        return AppLoaderService;
      }();

      AppLoaderService.ɵfac = function AppLoaderService_Factory(t) {
        return new (t || AppLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]));
      };

      AppLoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AppLoaderService,
        factory: AppLoaderService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppLoaderService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "5alQ":
    /*!********************************************************************!*\
      !*** ./src/app/shared/services/app-loader/app-loader.component.ts ***!
      \********************************************************************/

    /*! exports provided: AppLoaderComponent */

    /***/
    function alQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppLoaderComponent", function () {
        return AppLoaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      var AppLoaderComponent = /*#__PURE__*/function () {
        function AppLoaderComponent(dialogRef) {
          _classCallCheck(this, AppLoaderComponent);

          this.dialogRef = dialogRef;
        }

        _createClass(AppLoaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppLoaderComponent;
      }();

      AppLoaderComponent.ɵfac = function AppLoaderComponent_Factory(t) {
        return new (t || AppLoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
      };

      AppLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppLoaderComponent,
        selectors: [["app-app-loader"]],
        decls: 5,
        vars: 3,
        consts: [[1, "text-center"], [1, "m-0", "pb-16", 2, "white-space", "pre-wrap", "line-height", "1.4"], ["mat-dialog-content", ""]],
        template: function AppLoaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-spinner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin", "auto");
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__["MatSpinner"]],
        styles: [".mat-dialog-content[_ngcontent-%COMP%] {\r\n  min-height: 122px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1sb2FkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJhcHAtbG9hZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICBtaW4taGVpZ2h0OiAxMjJweDtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppLoaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-app-loader',
            templateUrl: './app-loader.component.html',
            styleUrls: ['./app-loader.component.css']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AG0e":
    /*!****************************************************************!*\
      !*** ./src/app/shared/services/token-service/token.service.ts ***!
      \****************************************************************/

    /*! exports provided: REDIRECT_HOST, TokenService */

    /***/
    function AG0e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "REDIRECT_HOST", function () {
        return REDIRECT_HOST;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenService", function () {
        return TokenService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators_catchError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators/catchError */
      "dKBr");
      /* harmony import */


      var rxjs_operators_catchError__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators_catchError__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../showMessage/show-message.service */
      "x/2q");
      /* harmony import */


      var environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! environments/environment */
      "AytR");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M"); // ================= only for demo purpose ===========


      var REDIRECT_HOST = environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].redirectUrl;

      var TokenService = /*#__PURE__*/function () {
        function TokenService(httpClient, showMessageService) {
          _classCallCheck(this, TokenService);

          this.httpClient = httpClient;
          this.showMessageService = showMessageService; // private baseUrl = "http://localhost:1212";

          this.newUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            prefix: '',
            firstName: '',
            lastName: '',
            primaryEmailAdress: '',
            phoneNumber: ''
          });
          this.verify = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            verify: '',
            type: ''
          });
          this.Index = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            index: ''
          });
          this.Id = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            id: ''
          }); // private baseUrl = 'http://192.168.0.14:8081/Icust-Digital-Banking';

          this.baseUrl = environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].DESKTOP_URL;
          this.pauseTrans = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            pauseTrans: false
          });
          this.holdTokenVariable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            holdTokenVariable: ''
          });
        }

        _createClass(TokenService, [{
          key: "getverify",
          value: function getverify() {
            return this.verify.asObservable();
          }
        }, {
          key: "setVerify",
          value: function setVerify(verify) {
            this.verify.next(verify);
          }
        }, {
          key: "getId",
          value: function getId() {
            return this.Id.asObservable();
          }
        }, {
          key: "setId",
          value: function setId(id) {
            this.Id.next(id);
          }
        }, {
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
          key: "setNewUserInfo",
          value: function setNewUserInfo(user) {
            this.newUser.next(user);
          }
        }, {
          key: "getNewUserInfo",
          value: function getNewUserInfo() {
            return this.newUser.asObservable();
          } //Error Handler

        }, {
          key: "errorHandler",
          value: function errorHandler(error) {
            if (error.status === 0) {
              // A client-side or network error occurred. Handle it accordingly.
              console.error('An error occurred:', error.error);
              this.showMessageService.errorMessage('An Error Occured', error.error);
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong.
              console.error("Backend returned code ".concat(error.status, ", body was: "), error.error);
              this.showMessageService.errorMessage("".concat(error.status), error.error);
            } // Return an observable with a user-facing error message.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
          }
        }, {
          key: "getCounterDashBoard",
          value: function getCounterDashBoard(id) {
            return this.httpClient.get("".concat(this.baseUrl, "/counter-service/api/counter-dash-board/?tellerId=").concat(id)); //  .pipe(catchError(this.errorHandler));
          }
        }, {
          key: "getTellerTokens",
          value: function getTellerTokens(id) {
            return this.httpClient.get("".concat(this.baseUrl, "/dashboard/token?tellerId=").concat(id)); //  .pipe(catchError(this.errorHandler));
          }
        }, {
          key: "saveCashWithdrawalData",
          value: function saveCashWithdrawalData(cw) {
            return this.httpClient.post("".concat(this.baseUrl, "/cash-withdrawal-service"), cw); // .pipe(catchError(this.errorHandler));
          }
        }, {
          key: "saveChequeWithdrawalData",
          value: function saveChequeWithdrawalData(cw) {
            return this.httpClient.post("".concat(this.baseUrl, "/cheque-withdrawal"), cw); // .pipe(catchError(this.errorHandler));
          }
        }, {
          key: "saveCashDepositData",
          value: function saveCashDepositData(cd) {
            return this.httpClient.post("".concat(this.baseUrl, "/cash-deposit/api"), cd);
          }
        }, {
          key: "saveDepositTopUpData",
          value: function saveDepositTopUpData(dtu) {
            return this.httpClient.post("".concat(this.baseUrl, "/deposit-topUp"), dtu); // .pipe(catchError(this.errorHandler));
          }
        }, {
          key: "saveChequeDepositData",
          value: function saveChequeDepositData(cd) {
            return this.httpClient.post("".concat(this.baseUrl, "/cheque-deposit/api"), cd); // .pipe(catchError(this.errorHandler));
          }
        }, {
          key: "profile",
          value: function profile(key, value) {
            return this.httpClient.get("".concat(this.baseUrl, "/loginApi/fetchTellerProfileInfo/").concat(key, "=").concat(value)); // .pipe(catchError(this.errorHandler));
          }
        }, {
          key: "saveForexTransaction",
          value: function saveForexTransaction(ft) {
            return this.httpClient.post("".concat(this.baseUrl, "/forex-transaction/api"), ft); // .pipe(catchError(this.errorHandler));
          }
        }, {
          key: "saveLoanpayment",
          value: function saveLoanpayment(lp) {
            return this.httpClient.post("".concat(this.baseUrl, "/loan-payment/api"), lp); // .pipe(catchError(this.errorHandler));
          }
        }, {
          key: "saveUtilityBillPayment",
          value: function saveUtilityBillPayment(up) {
            return this.httpClient.post("".concat(this.baseUrl, "/utility-bill-payment/api"), up); // .pipe(catchError(this.errorHandler));
          }
        }, {
          key: "getOperationData",
          value: function getOperationData(id) {
            return this.httpClient.get("".concat(this.baseUrl, "/cash-withdrawal-service/withdraw/").concat(id)); // .pipe(catchError(this.errorHandler));
          }
        }, {
          key: "getTokenList",
          value: function getTokenList(parentTokenNo) {
            return this.httpClient.get("".concat(this.baseUrl, "/cash-deposit/api/get/childTokens?parentTokenNo=").concat(parentTokenNo)); // .pipe(catchError(this.errorHandler));
          }
        }, {
          key: "getAllRevertTransactionData",
          value: function getAllRevertTransactionData(transactionStatus, page, size, isOnlyTransactionStatus) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append('transactionStatus', transactionStatus).append('page', page).append('isOnlyTransactionStatus', isOnlyTransactionStatus);
            return this.httpClient.get("".concat(this.baseUrl, "/cash-withdrawal-service/getAllTransactionInfo/?").concat(params));
          }
        }, {
          key: "getTransactionDataByTransactionId",
          value: function getTransactionDataByTransactionId(params) {
            return this.httpClient.get("".concat(this.baseUrl, "/cash-withdrawal-service/getAllTransactionInfo/?").concat(params));
          }
        }, {
          key: "updateRequestForRevertTransaction",
          value: function updateRequestForRevertTransaction(data) {
            return this.httpClient.put("".concat(this.baseUrl, "/cash-withdrawal-service/revertTransaction"), data);
          }
        }, {
          key: "approveOrRejectRequestForRevertTransaction",
          value: function approveOrRejectRequestForRevertTransaction(data) {
            return this.httpClient.put("".concat(this.baseUrl, "/cash-withdrawal-service/approveOrRejectRevertTransaction"), data);
          }
        }, {
          key: "getCustomerByCustomerID",
          value: function getCustomerByCustomerID(key, value) {
            return this.httpClient.get("".concat(this.baseUrl, "/customerdata/fetchCustomers?").concat(key, "=").concat(value)); // .pipe(catchError(this.errorHandler));
          }
        }, {
          key: "getCustomerDetailsByCustomerId",
          value: function getCustomerDetailsByCustomerId(id) {
            return this.httpClient.get("".concat(this.baseUrl, "/customerdata/getCustomerInfo/?customerId=").concat(id)); // .pipe(catchError(this.errorHandler));
          }
        }, {
          key: "getTransactionCount",
          value: function getTransactionCount() {
            return this.httpClient.get("".concat(this.baseUrl, "/tran/transactioncount"));
          }
        }, {
          key: "saveChargeDetails",
          value: function saveChargeDetails(cd) {
            return this.httpClient.post("".concat(this.baseUrl, "/accountdata/saveChargeDetails"), cd);
          }
        }, {
          key: "getBillerName",
          value: function getBillerName() {
            return this.httpClient.get("".concat(this.baseUrl, "/utility-bill-payment/api")); // .pipe(catchError(this.errorHandler));     
          }
        }, {
          key: "getOtpValidating",
          value: function getOtpValidating(obj) {
            return this.httpClient.put("".concat(this.baseUrl, "/rest/otp/validateOtp"), obj);
          }
        }, {
          key: "getUtilityBillPayment",
          value: function getUtilityBillPayment(billName) {
            return this.httpClient.get("".concat(this.baseUrl, "/utility-bill-payment/api/").concat(billName)).pipe(Object(rxjs_operators_catchError__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getRecordsBasedOnOperation",
          value: function getRecordsBasedOnOperation(operationNum) {
            return this.httpClient.get("".concat(this.baseUrl, "/tran/transaction/").concat(operationNum));
          }
        }, {
          key: "getTillBalancebyTillId",
          value: function getTillBalancebyTillId(id) {
            return this.httpClient.get("".concat(this.baseUrl, "/dashboard/getall/tillamount/").concat(id));
          }
        }, {
          key: "getAllTranaction",
          value: function getAllTranaction() {
            return this.httpClient.get("".concat(this.baseUrl, "/transactionType"));
          }
        }, {
          key: "getDashboardData",
          value: function getDashboardData(tellerId, opertaton) {
            return this.httpClient.get("".concat(this.baseUrl, "/dashboard/getalldataJson/").concat(tellerId, "/").concat(opertaton));
          }
        }, {
          key: "getDashboardDataNew",
          value: function getDashboardDataNew(tellerId) {
            return this.httpClient.get("".concat(this.baseUrl, "/teller-service/api/dashboard/").concat(tellerId));
          } // getCountofDenominations(id: any, currency: any) {
          //   return this.httpClient.get<any>(`${this.baseUrl}/dashboard/getall/count/${id}/${currency}`)
          // }

        }, {
          key: "getChargeDetails",
          value: function getChargeDetails(accountId) {
            return this.httpClient.get("".concat(this.baseUrl, "/accountdata/getChargeDetails?accountId=").concat(accountId));
          }
        }, {
          key: "insertNewUserOnboarding",
          value: function insertNewUserOnboarding(data) {
            return this.httpClient.post("".concat(this.baseUrl, "/customerdata/upsertCustomerDetails"), data);
          }
        }, {
          key: "uploadDocument",
          value: function uploadDocument(uploadData) {
            return this.httpClient.post("".concat(this.baseUrl, "/rest/upload/uploadDoc"), uploadData);
          }
        }, {
          key: "getDropDownValues",
          value: function getDropDownValues(entityName) {
            return this.httpClient.get("".concat(this.baseUrl, "/rest/data/getMasterData?entityName=").concat(entityName));
          }
        }, {
          key: "getOtp",
          value: function getOtp(otp) {
            return this.httpClient.post("".concat(this.baseUrl, "/rest/otp/generateOtp"), otp);
          }
        }, {
          key: "kycScreenBasicinfo",
          value: function kycScreenBasicinfo(data) {
            return this.httpClient.post("".concat(this.baseUrl, "/customerdata/upsertCustomerDetails"), data);
          }
        }, {
          key: "DocumentUplaod",
          value: function DocumentUplaod(file, content) {
            return this.httpClient.post("".concat(this.baseUrl, "/rest/upload/uploadDoc/").concat(content), file);
          }
        }, {
          key: "upload",
          value: function upload(uploadData) {
            return this.httpClient.post("".concat(this.baseUrl, "/rest/upload/uploadDoc"), uploadData);
          } // new changes

        }, {
          key: "saveofNewCashDeposit",
          value: function saveofNewCashDeposit(data) {
            console.log(data);
            return this.httpClient.post("".concat(this.baseUrl, "/cash-deposit/api/serviceTransactions"), data);
          }
        }, {
          key: "getCountryValues",
          value: function getCountryValues() {
            return this.httpClient.get("".concat(this.baseUrl, "/currency"));
          }
        }, {
          key: "saveofChequeDeposit",
          value: function saveofChequeDeposit(data) {
            return this.httpClient.post("".concat(this.baseUrl, "/cheque-deposit/api"), data);
          }
        }, {
          key: "getCountryFlagByCountryName",
          value: function getCountryFlagByCountryName(countryName) {
            return this.httpClient.post("https://countriesnow.space/api/v0.1/countries/flag/images", countryName);
          } // fetching holder name -->new cash withdrawal and other screens

        }, {
          key: "fetchingDetailsForCash",
          value: function fetchingDetailsForCash(accountId) {
            return this.httpClient.get("".concat(this.baseUrl, "/accountdata/accountDetails/").concat(accountId));
          }
        }, {
          key: "getAccountBranch",
          value: function getAccountBranch() {
            return this.httpClient.get("".concat(this.baseUrl, "/branch")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (result) {
              console.log('result :: ', result);
            }));
          }
        }, {
          key: "pauseTransaction",
          value: function pauseTransaction(tokenNumber, isPausedTrans) {
            return this.httpClient.put("".concat(this.baseUrl, "/cash-deposit/api/updatePauseResumeStatus?tokenNumber=").concat(tokenNumber, "&isPausedTrans=").concat(isPausedTrans), '').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (result) {
              console.log('result :: ', result);
            }));
          }
        }, {
          key: "checkPauseTransaction",
          value: function checkPauseTransaction(tellerId) {
            return this.httpClient.get("".concat(this.baseUrl, "/cash-deposit/api/fetchPausedTransactions?tellerId=").concat(tellerId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (result) {
              console.log('result :: ', result);
            }));
          }
        }, {
          key: "cancelOrLock",
          value: function cancelOrLock(tokenNumber, cancel, tellerId) {
            return this.httpClient.put("".concat(this.baseUrl, "/tokendata/updateToken/tellerId?tokenNumber=").concat(tokenNumber, "&cancel=").concat(cancel, "&tellerId=").concat(tellerId), '').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (result) {
              console.log('result :: ', result);
            }));
          }
        }, {
          key: "getPauseTrans",
          value: function getPauseTrans() {
            return this.pauseTrans.asObservable();
          }
        }, {
          key: "setPauseTrans",
          value: function setPauseTrans(pauseTrans) {
            this.pauseTrans.next(pauseTrans);
          }
        }, {
          key: "getHoldTokenVariable",
          value: function getHoldTokenVariable() {
            return this.holdTokenVariable.asObservable();
          }
        }, {
          key: "setHoldTokenVariable",
          value: function setHoldTokenVariable(holdTokenVariable) {
            this.holdTokenVariable.next(holdTokenVariable);
          }
        }]);

        return TokenService;
      }();

      TokenService.ɵfac = function TokenService_Factory(t) {
        return new (t || TokenService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_4__["ShowMessageService"]));
      };

      TokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: TokenService,
        factory: TokenService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TokenService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }, {
            type: _showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_4__["ShowMessageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Adj1":
    /*!*********************************************************!*\
      !*** ./src/app/views/others/search/search.component.ts ***!
      \*********************************************************/

    /*! exports provided: SearchComponent */

    /***/
    function Adj1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
        return SearchComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/services/data.service */
      "iiaH");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var app_shared_services_token_service_token_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! app/shared/services/token-service/token.service */
      "AG0e");
      /* harmony import */


      var app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! app/shared/services/auth/jwt-auth.service */
      "nZzT");
      /* harmony import */


      var app_shared_services_voice_recognition_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! app/shared/services/voice-recognition.service */
      "j/fj");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1"); //import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
      //import { map } from 'highcharts';


      var _c0 = ["input"];

      function SearchComponent_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please check your microhone and audio levels.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SearchComponent_mat_card_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_mat_card_9_Template_mat_card_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var card_r6 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.onTabSelection(card_r6.label, card_r6.searchKey);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var card_r6 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.selectedTabName == card_r6.label ? "card-class-selected" : "card-class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.selectedTabName == card_r6.label ? "material-symbols-outlined-selected" : "material-symbols-outlined");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", card_r6.icon, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", card_r6.label, " ");
        }
      }

      function SearchComponent_div_10_div_1_button_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SearchComponent_div_10_div_1_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 28, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchComponent_div_10_div_1_div_3_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r15.searchTerm = $event;
          })("keypress", function SearchComponent_div_10_div_1_div_3_Template_input_keypress_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r17._keyPress($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r12.searchTerm);
        }
      }

      function SearchComponent_div_10_div_1_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Speak now! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SearchComponent_div_10_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchComponent_div_10_div_1_button_2_Template, 3, 0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchComponent_div_10_div_1_div_3_Template, 3, 1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_div_10_div_1_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r18.speechRecording();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "mic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Search by voice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SearchComponent_div_10_div_1_span_10_Template, 2, 0, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.recordingSpeech);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.recordingSpeech);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r9.recordingSpeech ? "iconColor" : "searchIcon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.recordingSpeech);
        }
      }

      function SearchComponent_div_10_div_2_div_3_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var folder_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, folder_r21.firstName), 0, 1), "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 12, folder_r21.lastName), 0, 1), "");
        }
      }

      function SearchComponent_div_10_div_2_div_3_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var folder_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", folder_r21.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function SearchComponent_div_10_div_2_div_3_div_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_div_10_div_2_div_3_div_20_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

            var action_r30 = ctx.$implicit;

            var folder_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r31.onClickAction(folder_r21, action_r30.type, folder_r21.firstName + " " + folder_r21.lastName);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " trip_origin ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var action_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](action_r30.label);
        }
      }

      function SearchComponent_div_10_div_2_div_3_mat_divider_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-divider");
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "folderDiv-selected": a0
        };
      };

      function SearchComponent_div_10_div_2_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_div_10_div_2_div_3_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var i_r22 = ctx.index;
            var folder_r21 = ctx.$implicit;

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r34.onClickFolder(i_r22, folder_r21);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SearchComponent_div_10_div_2_div_3_div_4_Template, 7, 14, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchComponent_div_10_div_2_div_3_div_5_Template, 2, 1, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-menu", 48, 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SearchComponent_div_10_div_2_div_3_div_20_Template, 7, 1, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SearchComponent_div_10_div_2_div_3_mat_divider_21_Template, 1, 0, "mat-divider", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var folder_r21 = ctx.$implicit;
          var i_r22 = ctx.index;

          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx_r20.selectedFolderIndex == i_r22));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !folder_r21.profileImage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", folder_r21.profileImage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](folder_r21.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](folder_r21.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", folder_r21.customerId, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r20.actions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r22 != ctx_r20.folders.length - 1);
        }
      }

      function SearchComponent_div_10_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchComponent_div_10_div_2_div_3_Template, 22, 11, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.folders);
        }
      }

      function SearchComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchComponent_div_10_div_1_Template, 11, 4, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchComponent_div_10_div_2_Template, 4, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.showKYC);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.searchTerm != "" && (ctx_r2.folders == null ? null : ctx_r2.folders.length) > 0);
        }
      }

      function SearchComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " info_outlined ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "In addition to searching in Icust,this search shows suggestion form the whole app and different section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SearchComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-progress-bar", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Searching Customer ", ctx_r4.searchTerm, "....");
        }
      }

      function SearchComponent_div_14_mat_list_item_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var kyc_r37 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", kyc_r37.icon, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](kyc_r37.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", kyc_r37.updated, " ");
        }
      }

      function SearchComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_div_14_Template_mat_icon_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r38.closeDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SearchComponent_div_14_Template_input_keyup_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r40.onKYCSearching($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SearchComponent_div_14_mat_list_item_11_Template, 12, 3, "mat-list-item", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.KYCData);
        }
      }

      var SearchComponent = /*#__PURE__*/function () {
        function SearchComponent(dialogRef, cdr, apiService, sanitizer, router, ls, dataService, jwtService, tokenService, service, snack) {
          _classCallCheck(this, SearchComponent);

          this.dialogRef = dialogRef;
          this.cdr = cdr;
          this.apiService = apiService;
          this.sanitizer = sanitizer;
          this.router = router;
          this.ls = ls;
          this.dataService = dataService;
          this.jwtService = jwtService;
          this.tokenService = tokenService;
          this.service = service;
          this.snack = snack;
          this.recordingSpeech = false;
          this.showText = false;
          this.folders = [];
          this.show4 = false;
          this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.inputTouched = false;
          this.loading = false;
          this.searchTerm = '';
          this.searchKey = 'customerName';
          this.service.init();
        }

        _createClass(SearchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.selectedTabName = 'Name';
            this.operationTab = [{
              label: 'Name',
              icon: 'person',
              searchKey: 'customerName'
            }, {
              label: 'Phone Number',
              icon: 'call',
              searchKey: 'phoneNumber'
            }, {
              label: 'Email Id',
              icon: 'email',
              searchKey: 'primaryEmailAdress'
            }, {
              label: 'Customer Id ',
              icon: 'assignment_ind',
              searchKey: 'customerId'
            }, {
              label: 'National Id',
              icon: 'language',
              searchKey: 'nationalId'
            }, {
              label: 'Account Id',
              icon: 'contacts',
              searchKey: 'accountId' // imageUrl:'assets/images/account-id-icon.png',
              // selectedImageUrl:'assets/images/account-id-selected.png'

            }];
            this.serviceList = [{
              label: 'Kyc Screening',
              serviceName: 'kycScreening',
              type: 'KYCTASKS'
            }, {
              label: 'Customer Onboarding',
              serviceName: 'customerOnboarding',
              type: 'CUSTOMERTASKS'
            }, {
              label: 'Card Origination',
              serviceName: 'cardOrigination',
              type: 'CARDACCTASKS'
            }, {
              label: 'Loan Account',
              serviceName: 'loanAccount',
              type: 'LOANACCTASKS'
            }, {
              label: 'Create Account',
              serviceName: 'createAccount',
              type: 'TASKS'
            }, {
              label: 'Customer 360',
              serviceName: 'customer360',
              type: 'DASHBOARD360'
            }];
            this.KYCData = [{
              name: 'KYC screening',
              updated: 'customer Operation',
              icon: 'content_copy'
            }, {
              name: 'KYC documents',
              updated: '',
              icon: ''
            }, {
              name: 'KYC Guide',
              updated: '',
              icon: ''
            }, {
              name: 'What are KYC Documents',
              updated: '',
              icon: ''
            }, {
              name: 'KYC updation for customers',
              updated: '',
              icon: ''
            }];
            this.kyc = this.KYCData;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this4 = this;

            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.inputElement.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["pluck"])('target', 'value'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (value) {
              return value.length > 1;
            })).subscribe(function (value) {
              _this4.searchbyWord(value);
            });
          }
        }, {
          key: "onTabSelection",
          value: function onTabSelection(tabName, searchkey) {
            this.selectedTabName = tabName;
            this.searchTerm = '';
            this.searchKey = searchkey;
            this.folders = [];
          }
        }, {
          key: "_keyPress",
          value: function _keyPress(event) {
            var charCode = event.which ? event.which : event.keyCode;

            if (this.selectedTabName == 'Phone Number' || this.selectedTabName == 'Customer Id' || this.selectedTabName == 'National Id' || this.selectedTabName == 'Account Id') {
              if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                return false;
              }

              return true;
            } else if (this.selectedTabName == 'Name') {
              if (charCode > 64 && charCode < 91 || charCode > 96 && charCode < 123 || charCode == 8) return true;else return false;
            }
          }
        }, {
          key: "searchbyWord",
          value: function searchbyWord(value) {
            console.log(this.searchTerm);
            this.selectedFolderIndex = null;
            this.showText = false;
            console.log(this.searchKey); // this.handleSearch(value);

            if (this.searchKey == 'primaryEmailAdress') {
              console.log('email');

              if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)) {
                this.getCustomerData(this.searchKey, value);
              }
            } else if (this.searchKey == 'phoneNumber') {
              console.log('phione');

              if (value.length == 10) {
                this.getCustomerData(this.searchKey, value);
              } // 

            } else {
              console.log('else');

              if (value.length > 1) {
                this.getCustomerData(this.searchKey, value);
              }
            }
          } // handleSearch(inputValue: any){
          //   let key :  string = "";
          //   if (!isNaN(inputValue)) {
          //     this.tokenService.getCustomerByCustomerID("accountId", inputValue).subscribe((resp) => {
          //       this.searchResult = resp;
          //       if (this.searchResult) {
          //         this.getCustomerData("accountId", inputValue);
          //       }
          //       else {
          //         this.getCustomerData("customerId", inputValue);
          //       }
          //     });
          //   }
          //   else if (inputValue.substring(0, 3) == "KYC") {
          //     this.getCustomerData("kycReference", inputValue);
          //   }
          //   else {
          //     this.getCustomerData("customerName", inputValue);
          //   }
          // }

        }, {
          key: "getCustomerData",
          value: function getCustomerData(key, value) {
            var _this5 = this;

            this.loading = true;

            if (this.tokenService.getCustomerByCustomerID != null) {
              this.tokenService.getCustomerByCustomerID(key, value).subscribe(function (items) {
                console.log(items);
                _this5.loading = false;
                _this5.folders = items; // this.profileData = items[0];

                _this5.showKYC = false;

                _this5.cdr.markForCheck();

                if (items == null) {
                  _this5.loading = false;

                  if (_this5.searchKey == 'nationalId') {
                    _this5.snack.open("The National Id is not found :", _this5.searchTerm, {
                      duration: 4000,
                      verticalPosition: 'top',
                      horizontalPosition: 'right'
                    });
                  } else if (_this5.searchKey == 'accountId') {
                    _this5.snack.open("The Account Id is not found :", _this5.searchTerm, {
                      duration: 4000,
                      verticalPosition: 'top',
                      horizontalPosition: 'right'
                    });
                  } else if (_this5.searchKey == 'phoneNumber') {
                    _this5.snack.open("Mobile Number is not found :", _this5.searchTerm, {
                      duration: 4000,
                      verticalPosition: 'top',
                      horizontalPosition: 'right'
                    });
                  } else if (_this5.searchKey == 'customerId') {
                    _this5.snack.open("Customer Id is not found :", _this5.searchTerm, {
                      duration: 4000,
                      verticalPosition: 'top',
                      horizontalPosition: 'right'
                    });
                  } else if (_this5.searchKey == 'primaryEmailAdress') {
                    _this5.snack.open("Email Id is not found :", _this5.searchTerm, {
                      duration: 4000,
                      verticalPosition: 'top',
                      horizontalPosition: 'right'
                    });
                  } else if (_this5.searchKey == 'customerName') {
                    _this5.snack.open("Name is not found :", _this5.searchTerm, {
                      duration: 4000,
                      verticalPosition: 'top',
                      horizontalPosition: 'right'
                    });
                  } else {
                    _this5.snack.open("Data is not found for Customer :", _this5.searchTerm, {
                      duration: 4000,
                      verticalPosition: 'top',
                      horizontalPosition: 'right'
                    });
                  }

                  _this5.progressBar.mode = 'determinate';
                }
              });
            }
          }
        }, {
          key: "handleClear",
          value: function handleClear() {
            this.searchTerm = '';
            this.folders = [];
            this.cdr.markForCheck();
            this.loading = false;
          }
        }, {
          key: "onlySearch",
          value: function onlySearch(event) {
            this.showingonlySerach = false;

            if (this.folders.length > 0) {
              var result = this.folders.filter(function (s) {
                return s.name.toLowerCase().includes(event.target.value.toLowerCase()) || s.name.toLowerCase().includes(event.target.value.toLowerCase());
              });
              this.folders = result;
            }
          }
        }, {
          key: "closeDialog",
          value: function closeDialog() {
            this.dialogRef.close();
          }
        }, {
          key: "onImgClick",
          value: function onImgClick(item) {
            // others/mainNavigation
            localStorage.setItem('customerId', item.customerId); //  this.router.navigateByUrl('/others/mainNavigation');
            // this.gettingaCustomerDetails(customerId);

            var data = {
              customerId: item.customerId
            };
            this.dataService.shareSearchItem(data);
            var type = "DASHBOARD360";
            window.open("".concat(app_shared_services_token_service_token_service__WEBPACK_IMPORTED_MODULE_11__["REDIRECT_HOST"], "?code=").concat(this.jwtService.getEncryptedToken(), "&appType=").concat(type, "&CID_360=").concat(item.customerId), "_blank");
            this.dialogRef.close();
          } // gettingaCustomerDetails(customerId) {
          //   this.apiService.getCasaAccDetails(customerId).subscribe((allCustomerDEtails: any) => {
          //     console.log("All Customer Details", allCustomerDEtails);
          //     console.log(allCustomerDEtails.customerName);
          //   });
          // }

        }, {
          key: "speechRecording",
          value: function speechRecording() {
            var _this6 = this;

            this.showText = false;
            this.service.start();
            this.recordingSpeech = true;
            this.service.speechStop.subscribe(function (resp) {
              if (resp) {
                _this6.recordingSpeech = false;
                _this6.searchTerm = _this6.service.text;

                if (_this6.searchTerm) {
                  _this6.getCustomerData(_this6.searchKey, _this6.searchTerm);
                } else {
                  _this6.showText = true;
                }
              }
            }); // this.recordingSpeech = !this.recordingSpeech;
            // if(this.recordingSpeech){
            //   this.service.start();
            // }
          }
        }, {
          key: "onClickFolder",
          value: function onClickFolder(index, folder) {
            this.selectedFolderIndex = index;
            this.actions = [];

            for (var i = 0; i < this.serviceList.length; i++) {
              for (var _i = 0, _Object$entries = Object.entries(folder.servicesInfo); _i < _Object$entries.length; _i++) {
                var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                    key = _Object$entries$_i[0],
                    value = _Object$entries$_i[1];

                if (key == this.serviceList[i].serviceName && value == true) {
                  this.actions.push(this.serviceList[i]);
                  break;
                }
              }
            }
          }
        }, {
          key: "onClickAction",
          value: function onClickAction(folder, type, searchTerm) {
            if (type == 'DASHBOARD360') {
              this.onImgClick(folder);
            } else {
              var theme = this.ls.getItem('theme');
              window.open("".concat(app_shared_services_token_service_token_service__WEBPACK_IMPORTED_MODULE_11__["REDIRECT_HOST"], "?code=").concat(this.jwtService.getEncryptedToken(), "&appType=").concat(type, "&theme=").concat(theme, "&searchTerm=").concat(searchTerm), '_blank');
            }

            this.dialogRef.close();
          }
        }]);

        return SearchComponent;
      }();

      SearchComponent.ɵfac = function SearchComponent_Factory(t) {
        return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_12__["JwtAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_token_service_token_service__WEBPACK_IMPORTED_MODULE_11__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_voice_recognition_service__WEBPACK_IMPORTED_MODULE_13__["VoiceRecognitionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]));
      };

      SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SearchComponent,
        selectors: [["app-search"]],
        viewQuery: function SearchComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBar"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.progressBar = _t.first);
          }
        },
        outputs: {
          search: "search"
        },
        decls: 15,
        vars: 6,
        consts: [["fxLayout", "row", "fxLayoutAlign", "end stretch"], [1, "mat-18", 2, "cursor", "pointer", 3, "click"], ["class", "errorMsg", 4, "ngIf"], ["fxLayout", "row", "fxFlex", "100", "fxLayoutAlign", "space-between"], ["fxLayout", "column", "fxLayoutAlign", "center center", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "m-333", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "start center", "class", "infoDiv", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngIf"], [4, "ngIf"], [1, "errorMsg"], ["fxLayout", "column", "fxLayoutAlign", "center center", 3, "ngClass", "click"], [1, "icon4", 3, "ngClass"], [1, "labelClass"], [1, "m-333"], ["fxLayoutAlign", "center center", "fxLayoutGap", "space-around", "class", "searchBox", 4, "ngIf"], ["class", "main-folder-div", 4, "ngIf"], ["fxLayoutAlign", "center center", "fxLayoutGap", "space-around", 1, "searchBox"], ["fxFlex", "7%", 1, "searchIcon-div"], ["matPrefix", "", "mat-icon-button", "", 4, "ngIf"], ["fxFlex", "90%", "class", "full-width", "class", "searchInput", 4, "ngIf"], [1, "tooltip", "searchMainDiv"], ["matPrefix", "", "mat-icon-button", "", 1, "searchButton", 3, "click"], [3, "ngClass"], [1, "tooltiptext"], ["class", "speakNow", 4, "ngIf"], ["matPrefix", "", "mat-icon-button", ""], [1, "searchIcon"], ["fxFlex", "90%", 1, "searchInput"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelChange", "keypress"], ["input", ""], [1, "speakNow"], [1, "main-folder-div"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", 1, "full-width"], ["class", "operation-card", "fxLayout", "column", 4, "ngFor", "ngForOf"], ["fxLayout", "column", 1, "operation-card"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "folderDiv", 3, "ngClass", "click"], ["fxLayout", "row"], ["mat-card-avatar", ""], ["fxLayout", "row", "fxLayoutAlign", "center center", "class", "defaultImage", 4, "ngIf"], ["fxLayout", "row", "class", "defaultImage", 4, "ngIf"], ["fxLayout", "column", 1, "folder-details"], ["fxLayout", "row", "fxLayoutGap", "5px", 1, "label-font"], [1, "label1"], [1, "label2"], [1, "id-font"], ["fxLayoutAlign", "center", 1, "icon"], [1, "colon-icon", 3, "matMenuTriggerFor"], ["src", "assets/images/colon-symbol.png", "alt", "", 1, "colonIcon"], ["xPosition", "before"], ["menu", "matMenu"], ["fxLayout", "column", "fxLayoutGap", "10px"], ["class", "actionList", 3, "click", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "defaultImage"], [1, "imageText"], ["fxLayout", "row", 1, "defaultImage"], ["alt", "", 1, "defaultImage", 3, "src"], [1, "actionList", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "10px"], [1, "actionIcon"], [1, "actionTitle"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "infoDiv"], [1, "infoIcon"], [1, "infoText"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxFlex", "30"], ["fxFlex", "40", "fxFlexAlign", "center"], [1, "text-center"], ["mode", "indeterminate"], ["fxLayout", "column wrap"], ["fxFlex", "100", "fxLayoutAlign", "end stretch"], ["fxFlex", "25", "fxLayoutAlign", "start stretch", "fxLayoutGap", "space-around"], ["type", "text", "placeholder", "icust search", 3, "keyup"], ["fxFlex", "25", "fxLayoutAlign", "start stretch"], ["id", "kycList", 4, "ngFor", "ngForOf"], ["id", "kycList"], ["id", "listmat"], ["color", "primary", "id", "ic"], ["mat-line", "", 2, "margin-left", "100px"], ["mat-line", "", 2, "margin-left", "100px", "color", "rgb(223, 217, 217)"], ["fxLayoutAlign", "end ", 2, "margin-left", "500px"], ["src", "assets/images/colon-symbol.png", "alt", ""]],
        template: function SearchComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_mat_icon_click_1_listener() {
              return ctx.closeDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " You can search any specific tag.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchComponent_span_5_Template, 2, 0, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SearchComponent_mat_card_9_Template, 5, 4, "mat-card", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SearchComponent_div_10_Template, 3, 2, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SearchComponent_div_11_Template, 5, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SearchComponent_div_13_Template, 7, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SearchComponent_div_14_Template, 13, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showText);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.operationTab);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showKYC);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchTerm == "" && !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showKYC);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatHint"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__["DefaultClassDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatPrefix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["NgModel"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardAvatar"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenu"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__["MatDivider"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultFlexAlignDirective"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatLine"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["UpperCasePipe"]],
        styles: [".card1[_ngcontent-%COMP%] {\n  border-radius: 20px;\n}\n\n  .mat-form-field-underline {\n  display: none;\n}\n\n.mat-focused[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  color: transparent;\n  font-size: 0px;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: 0;\n  outline: 0;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\n.icon4[_ngcontent-%COMP%] {\n  color: gray;\n  margin-bottom: 10px;\n  height: 30px;\n  width: 30px;\n  font-size: 30px;\n}\n\n.searchButton[_ngcontent-%COMP%] {\n  padding-left: 2%;\n}\n\n#listmat[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  background: #b4b3b3;\n  padding: 10px;\n  color: dodgerblue;\n  width: 50px;\n  height: 55px;\n  text-align: center;\n  justify-content: space-around;\n  position: fixed;\n}\n\n.textAlign[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.searchDiv[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.searchBox[_ngcontent-%COMP%] {\n  border-width: thin;\n  border-radius: 40px;\n  border-color: #a5a5a5;\n  box-shadow: 0 1px 1px 1px #e2e2e2;\n  position: relative;\n  z-index: 1;\n}\n\n.mat-icon1[_ngcontent-%COMP%] {\n  transform: translateY(-20px);\n}\n\n.icon[_ngcontent-%COMP%] {\n  margin-left: 34rem;\n  cursor: pointer;\n}\n\n.labal1[_ngcontent-%COMP%] {\n  padding-left: 26px;\n}\n\n.labal2[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: hidden;\n  width: 100px;\n  background-color: #4d4d4d;\n  color: white;\n  font-size: 8px;\n  text-align: center;\n  border-radius: 4px;\n  padding: 1px;\n  padding-top: 2px;\n  \n  z-index: 2;\n}\n\n.searchButton[_ngcontent-%COMP%] {\n  width: 24px !important;\n}\n\n.searchMainDiv[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n\n.iconColor[_ngcontent-%COMP%] {\n  color: red;\n  text-align: center;\n}\n\n.errorMsg[_ngcontent-%COMP%] {\n  color: red;\n  text-align: center;\n  padding-left: 25%;\n}\n\n.mat-hint[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding-left: 2%;\n  color: #c1c1c1;\n}\n\n.material-symbols-outlined-selected[_ngcontent-%COMP%] {\n  color: #1d5286;\n}\n\n.material-symbols-outlined[_ngcontent-%COMP%] {\n  color: #b0b0b0;\n}\n\n.labelClass[_ngcontent-%COMP%] {\n  font-size: smaller;\n  font-weight: 600;\n}\n\n.colonIcon[_ngcontent-%COMP%] {\n  width: 60%;\n}\n\n.colon-icon[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n}\n\n.card-class[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  min-width: 13.5%;\n  cursor: pointer;\n}\n\n.card-class-selected[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  min-width: 13.5%;\n  cursor: pointer;\n  border-top: #1d5286 solid 8px;\n}\n\n.selected-card[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  border-top: solid 8px #304156;\n  min-width: 13.5%;\n}\n\n.main-folder-div[_ngcontent-%COMP%] {\n  position: relative;\n  top: -30px;\n  padding: 40px 15px 10px 15px;\n  box-shadow: 0 1px 0px 1px #e2e2e2;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n\n.searchIcon-div[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.searchIcon[_ngcontent-%COMP%] {\n  color: #b0b0b0;\n  font-size: 14px;\n}\n\n.searchInput[_ngcontent-%COMP%] {\n  padding: 15px 0px 15px 10px;\n  font-size: large;\n}\n\n.folderDiv[_ngcontent-%COMP%] {\n  padding: 5px 15px 5px 10px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n\n.folderDiv-selected[_ngcontent-%COMP%] {\n  background-color: #b9c4d670;\n  border-top-left-radius: 25px;\n  border-bottom-left-radius: 25px;\n}\n\n.defaultImage[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-color: #1d5286;\n}\n\n.imageText[_ngcontent-%COMP%] {\n  color: white;\n  margin-top: 10px;\n  font-weight: lighter;\n}\n\n.folder-details[_ngcontent-%COMP%] {\n  align-items: start;\n  margin-left: 10px;\n}\n\n.label-font[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.id-font[_ngcontent-%COMP%] {\n  font-size: smaller;\n  color: #b0b0b0;\n}\n\n.actionList[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.actionIcon[_ngcontent-%COMP%] {\n  font-size: smaller;\n  color: #b9c4d670;\n}\n\n.actionList[_ngcontent-%COMP%]:hover   .actionIcon[_ngcontent-%COMP%] {\n  color: #1d5286;\n}\n\n.actionTitle[_ngcontent-%COMP%] {\n  font-size: small;\n  font-weight: 600;\n  font-family: sans-serif;\n  color: #1d5286;\n}\n\n.infoIcon[_ngcontent-%COMP%] {\n  color: orange;\n  font-size: large;\n  height: auto;\n}\n\n.infoText[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  font-size: smaller;\n  color: #544c4c;\n  font-weight: 500;\n}\n\n.infoDiv[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-left: 10px;\n}\n\n  .mat-menu-panel {\n  margin-right: 25px;\n  padding: 10px;\n}\n\n  .cdk-overlay-backdrop {\n  -webkit-backdrop-filter: blur(3px);\n          backdrop-filter: blur(3px);\n}\n\n  .mat-button-focus-overlay {\n  background-color: transparent !important;\n}\n\n.speakNow[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQW1CO0FBQXZCOztBQUdBO0VBQ0ksYUFBYTtBQUFqQjs7QUFFQTtFQUNJLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2xCOztBQUdBO0VBQU8sU0FBUTtFQUFDLFVBQVM7QUFFekI7O0FBREE7RUFBYSx3QkFBc0I7QUFLbkM7O0FBSkE7RUFFSSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtBQU1uQjs7QUFKQTtFQUNJLGdCQUFnQjtBQU9wQjs7QUFMQTtFQUNJLG1CQUFtQjtFQUNuQixtQkFBOEI7RUFDOUIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUVsQiw2QkFBNkI7RUFDN0IsZUFBYztBQU9sQjs7QUFMQTtFQUNJLGlCQUFpQjtBQVFyQjs7QUFOQTtFQUNJLGdCQUFnQjtBQVNwQjs7QUFQQTtFQUdJLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBRXJCLGlDQUE0QztFQUM1QyxrQkFBa0I7RUFDbEIsVUFBVTtBQU9kOztBQUpBO0VBQ0ksNEJBQTRCO0FBT2hDOztBQUpBO0VBQ0ksa0JBQWlCO0VBQ2pCLGVBQWU7QUFPbkI7O0FBQ0E7RUFDSSxrQkFBa0I7QUFFdEI7O0FBQ0E7RUFDSSxpQkFBaUI7QUFFckI7O0FBQUE7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlCQUFpQztFQUNqQyxZQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBRWhCLHlCQUFBO0VBRUEsVUFBVTtBQUNkOztBQUNFO0VBQ0Usc0JBQ0Y7QUFDRjs7QUFBRTtFQUNFLHVCQUF1QjtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBRy9COztBQURFO0VBQ0UsbUJBQW1CO0FBSXZCOztBQUZFO0VBQ0ksVUFBVTtFQUNWLGtCQUFrQjtBQUt4Qjs7QUFIRTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBTXJCOztBQUpFO0VBQ0ksdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixjQUNKO0FBTUY7O0FBSkU7RUFDSSxjQUFjO0FBT3BCOztBQUpFO0VBQ0ksY0FBYztBQU9wQjs7QUFKRTtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFPdEI7O0FBSkU7RUFDSSxVQUFVO0FBT2hCOztBQUpFO0VBQ0ksbUJBQW1CO0VBQ25CLGFBQWE7QUFPbkI7O0FBSkU7RUFDSSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFPckI7O0FBSkU7RUFDSSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiw2QkFBNkI7QUFPbkM7O0FBSkU7RUFDSSxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQU90Qjs7QUFKRTtFQUNJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsNEJBQTRCO0VBQzVCLGlDQUE0QztFQUM1QywrQkFBK0I7RUFDL0IsZ0NBQWdDO0FBT3RDOztBQUhFO0VBQ0ksa0JBQWtCO0FBTXhCOztBQUhFO0VBQ0ksY0FBYztFQUNkLGVBQWU7QUFNckI7O0FBSEU7RUFDSSwyQkFBMkI7RUFDM0IsZ0JBQWdCO0FBTXRCOztBQUhFO0VBQ0ksMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtBQU1yQjs7QUFIRTtFQUNJLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsK0JBQStCO0FBTXJDOztBQUhFO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0FBTS9COztBQUhFO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFNMUI7O0FBSEU7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBTXZCOztBQUpFO0VBQ0UsZ0JBQWdCO0FBT3BCOztBQUxFO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFRbEI7O0FBTkE7RUFDSSxlQUFlO0FBU25COztBQVBFO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQVV0Qjs7QUFSRTtFQUNHLGNBQWM7QUFXbkI7O0FBUkU7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixjQUFjO0FBV3BCOztBQVJFO0VBQ0ksYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0FBV2xCOztBQVRFO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0FBWXBCOztBQVRFO0VBQ0ksZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQVl2Qjs7QUFIRTtFQUNNLGtCQUFrQjtFQUN0QixhQUFhO0FBTWpCOztBQUhFO0VBQ0Usa0NBQTBCO1VBQTFCLDBCQUEwQjtBQU05Qjs7QUFKRTtFQUNFLHdDQUF3QztBQU81Qzs7QUFMSTtFQUNKLGVBQ0k7QUFPSiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZDFcclxue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIFxyXG59XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm1hdC1mb2N1c2VkIC5wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LXNpemU6IDBweDtcclxuXHJcbn1cclxuXHJcbmlucHV0IHtib3JkZXI6MDtvdXRsaW5lOjA7IH1cclxuaW5wdXQ6Zm9jdXMge291dGxpbmU6bm9uZSFpbXBvcnRhbnQ7fVxyXG4uaWNvbjRcclxue1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLnNlYXJjaEJ1dHRvbntcclxuICAgIHBhZGRpbmctbGVmdDogMiU7XHJcbn1cclxuI2xpc3RtYXR7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE4MCwgMTc5LCAxNzkpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiBkb2RnZXJibHVlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxufVxyXG4udGV4dEFsaWdue1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnNlYXJjaERpdntcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuLnNlYXJjaEJveHtcclxuICAgIC8vIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIGJvcmRlci1jb2xvcjogI2E1YTVhNTtcclxuICAgLy8gYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IDFweCByZ2IoMjI2LCAyMjYsIDIyNik7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ubWF0LWljb24xe1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcclxufVxyXG5cclxuLmljb257XHJcbiAgICBtYXJnaW4tbGVmdDozNHJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLy8gLmxhYmFse1xyXG4vLyAgICAgcGFkZGluZy10b3A6IDI1cHggIWltcG9ydGFudDtcclxuLy8gICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4ubGFiYWwxe1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNnB4O1xyXG59XHJcblxyXG4ubGFiYWwye1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3NywgNzcsIDc3KTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgXHJcbiAgICAvKiBQb3NpdGlvbiB0aGUgdG9vbHRpcCAqL1xyXG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcbiAgLnNlYXJjaEJ1dHRvbntcclxuICAgIHdpZHRoOiAyNHB4ICFpbXBvcnRhbnRcclxuICB9XHJcbiAgLnNlYXJjaE1haW5EaXZ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG4gIC5pY29uQ29sb3J7XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgfVxyXG4gIC5lcnJvck1zZ3tcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgcGFkZGluZy1sZWZ0OiAyNSU7IFxyXG4gIH1cclxuICAubWF0LWhpbnQge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgICAgY29sb3I6ICNjMWMxYzFcclxuICB9XHJcblxyXG4gIC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkLXNlbGVjdGVkIHtcclxuICAgICAgY29sb3I6ICMxZDUyODY7XHJcbiAgfVxyXG5cclxuICAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XHJcbiAgICAgIGNvbG9yOiAjYjBiMGIwO1xyXG4gIH1cclxuXHJcbiAgLmxhYmVsQ2xhc3Mge1xyXG4gICAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICAuY29sb25JY29uIHtcclxuICAgICAgd2lkdGg6IDYwJTtcclxuICB9XHJcblxyXG4gIC5jb2xvbi1pY29uIHtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcblxyXG4gIC5jYXJkLWNsYXNzIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgbWluLXdpZHRoOiAxMy41JTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtY2xhc3Mtc2VsZWN0ZWQge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICBtaW4td2lkdGg6IDEzLjUlO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGJvcmRlci10b3A6ICMxZDUyODYgc29saWQgOHB4O1xyXG4gIH1cclxuXHJcbiAgLnNlbGVjdGVkLWNhcmQge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICBib3JkZXItdG9wOiBzb2xpZCA4cHggIzMwNDE1NjtcclxuICAgICAgbWluLXdpZHRoOiAxMy41JTtcclxuICB9XHJcblxyXG4gIC5tYWluLWZvbGRlci1kaXYge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogLTMwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDQwcHggMTVweCAxMHB4IDE1cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDBweCAxcHggcmdiKDIyNiwgMjI2LCAyMjYpO1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuXHJcbiAgfVxyXG5cclxuICAuc2VhcmNoSWNvbi1kaXYge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoSWNvbiB7XHJcbiAgICAgIGNvbG9yOiAjYjBiMGIwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoSW5wdXQge1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDBweCAxNXB4IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgfVxyXG5cclxuICAuZm9sZGVyRGl2IHtcclxuICAgICAgcGFkZGluZzogNXB4IDE1cHggNXB4IDEwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5mb2xkZXJEaXYtc2VsZWN0ZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjljNGQ2NzA7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgfVxyXG5cclxuICAuZGVmYXVsdEltYWdlIHtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQ1Mjg2O1xyXG4gIH1cclxuXHJcbiAgLmltYWdlVGV4dCB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgfVxyXG5cclxuICAuZm9sZGVyLWRldGFpbHMge1xyXG4gICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICAubGFiZWwtZm9udHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIC5pZC1mb250e1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgY29sb3I6ICNiMGIwYjA7XHJcbiAgfVxyXG4uYWN0aW9uTGlzdHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4gIC5hY3Rpb25JY29uIHtcclxuICAgICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgICBjb2xvcjogI2I5YzRkNjcwO1xyXG4gIH1cclxuICAuYWN0aW9uTGlzdDpob3ZlciAuYWN0aW9uSWNvbntcclxuICAgICBjb2xvcjogIzFkNTI4NjtcclxuICB9XHJcblxyXG4gIC5hY3Rpb25UaXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICBjb2xvcjogIzFkNTI4NjtcclxuICB9XHJcblxyXG4gIC5pbmZvSWNvbiB7XHJcbiAgICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgLmluZm9UZXh0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgIGNvbG9yOiAjNTQ0YzRjO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDsgXHJcbiAgfVxyXG5cclxuICAuaW5mb0RpdiB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuXHJcbi8vICAgOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1wYW5lIHtcclxuLy8gICAgICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG4vLyAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4vLyAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4vLyAgIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5tYXQtbWVudS1wYW5lbCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwcHggMCAxMHB4IDEwcHg7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAuY2RrLW92ZXJsYXktYmFja2Ryb3B7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkgeyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7IFxyXG4gICAgfVxyXG4gICAgLnNwZWFrTm93e1xyXG5mb250LXNpemU6MTBweFxyXG4gICAgfSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-search',
            templateUrl: './search.component.html',
            styleUrls: ['./search.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__["LocalStoreService"]
          }, {
            type: app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
          }, {
            type: app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_12__["JwtAuthService"]
          }, {
            type: app_shared_services_token_service_token_service__WEBPACK_IMPORTED_MODULE_11__["TokenService"]
          }, {
            type: app_shared_services_voice_recognition_service__WEBPACK_IMPORTED_MODULE_13__["VoiceRecognitionService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]
          }];
        }, {
          inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['input']
          }],
          search: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          progressBar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBar"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });
      /* harmony import */


      var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! config */
      "1wtQ"); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `angular.json`.


      var environment = {
        production: false,
        apiURL: config__WEBPACK_IMPORTED_MODULE_0__["config"].apiUrl,
        // redirectUrl:'http://localhost:4200/#/sessions/callback', //local
        redirectUrl: "http://icust.rumango.com/DEMO_ROOT/Customer-Onboarding/#/sessions/callback",
        // redirectUrl: "http://localhost:49374/#/sessions/callback",
        DESKTOP_URL: 'http://192.168.0.14:8091/Icust-Digital-Banking',
        // DESKTOP_URL : "http://localhost:1212",
        chatBotRedirect: 'http://icust.rumango.com/DEMO_ROOT/Customer-Onboarding/#/others/mainNavigation'
      };
      /***/
    },

    /***/
    "Bp9c":
    /*!*********************************************************!*\
      !*** ./src/app/shared/directives/dropdown.directive.ts ***!
      \*********************************************************/

    /*! exports provided: AppDropdownDirective */

    /***/
    function Bp9c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppDropdownDirective", function () {
        return AppDropdownDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var AppDropdownDirective = /*#__PURE__*/function () {
        function AppDropdownDirective(router) {
          _classCallCheck(this, AppDropdownDirective);

          this.router = router;
          this.navlinks = [];
        }

        _createClass(AppDropdownDirective, [{
          key: "closeOtherLinks",
          value: function closeOtherLinks(openLink) {
            this.navlinks.forEach(function (link) {
              if (link !== openLink) {
                link.open = false;
              }
            });
          }
        }, {
          key: "addLink",
          value: function addLink(link) {
            this.navlinks.push(link);
          }
        }, {
          key: "removeGroup",
          value: function removeGroup(link) {
            var index = this.navlinks.indexOf(link);

            if (index !== -1) {
              this.navlinks.splice(index, 1);
            }
          }
        }, {
          key: "getUrl",
          value: function getUrl() {
            return this.router.url;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this._router = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
            })).subscribe(function (event) {
              _this7.navlinks.forEach(function (link) {
                if (link.group) {
                  var routeUrl = _this7.getUrl();

                  var currentUrl = routeUrl.split('/');

                  if (currentUrl.indexOf(link.group) > 0) {
                    link.open = true;

                    _this7.closeOtherLinks(link);
                  }
                }
              });
            });
          }
        }]);

        return AppDropdownDirective;
      }();

      AppDropdownDirective.ɵfac = function AppDropdownDirective_Factory(t) {
        return new (t || AppDropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AppDropdownDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: AppDropdownDirective,
        selectors: [["", "appDropdown", ""]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppDropdownDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[appDropdown]'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ETNk":
    /*!**************************************************!*\
      !*** ./src/app/shared/services/theme.service.ts ***!
      \**************************************************/

    /*! exports provided: ThemeService */

    /***/
    function ETNk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThemeService", function () {
        return ThemeService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var ThemeService = /*#__PURE__*/function () {
        function ThemeService(document, rendererFactory) {
          _classCallCheck(this, ThemeService);

          this.document = document;
          this.onThemeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.rumangoThemes = [{
            'name': 'egret-navy',
            'baseColor': '#cacaca',
            'isActive': false
          }, {
            'name': 'egret-dark-purple',
            'baseColor': '#000000',
            'isActive': false
          } // {
          //   'name': 'blue',
          //   'baseColor': '#0000FF',
          //   'isActive': false
          // },
          // {
          //   'name': 'red',
          //   'baseColor': '#FF0000',
          //   'isActive': false
          // },
          // {
          //   'name': 'yellow',
          //   'baseColor': '#FFFF00',
          //   'isActive': false
          ];
          this.renderer = rendererFactory.createRenderer(null, null);
        } // Invoked in AppComponent and apply 'activatedTheme' on startup


        _createClass(ThemeService, [{
          key: "applyMatTheme",
          value: function applyMatTheme(themeName) {
            this.activatedTheme = this.rumangoThemes.find(function (t) {
              return t.name === themeName;
            });
            this.flipActiveFlag(themeName); // this.changeTheme(themeName);

            this.renderer.addClass(this.document.body, themeName);
          }
        }, {
          key: "changeTheme",
          value: function changeTheme(prevTheme, themeName) {
            this.renderer.removeClass(this.document.body, prevTheme);
            this.renderer.addClass(this.document.body, themeName);
            this.flipActiveFlag(themeName);
            this.onThemeChange.emit(this.activatedTheme);
          }
        }, {
          key: "changeTheme1",
          value: function changeTheme1(themeName) {
            // this.renderer.removeClass(this.document.body, prevTheme);
            this.renderer.addClass(this.document.body, themeName);
            this.flipActiveFlag(themeName);
            this.onThemeChange.emit(this.activatedTheme);
          }
        }, {
          key: "flipActiveFlag",
          value: function flipActiveFlag(themeName) {
            var _this8 = this;

            this.rumangoThemes.forEach(function (t) {
              t.isActive = false;

              if (t.name === themeName) {
                t.isActive = true;
                _this8.activatedTheme = t;
              }
            });
          }
        }]);

        return ThemeService;
      }();

      ThemeService.ɵfac = function ThemeService_Factory(t) {
        return new (t || ThemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]));
      };

      ThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ThemeService,
        factory: ThemeService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "GyvL":
    /*!**********************************************************!*\
      !*** ./src/app/shared/directives/scroll-to.directive.ts ***!
      \**********************************************************/

    /*! exports provided: ScrollToDirective */

    /***/
    function GyvL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScrollToDirective", function () {
        return ScrollToDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ScrollToDirective = /*#__PURE__*/function () {
        function ScrollToDirective(elmID, el) {
          _classCallCheck(this, ScrollToDirective);

          this.elmID = elmID;
          this.el = el;
        }

        _createClass(ScrollToDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "currentYPosition",
          value: function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset; // Internet Explorer 6 - standards mode

            if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop; // Internet Explorer 6, 7 and 8

            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
          }
        }, {
          key: "elmYPosition",
          value: function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;

            while (node.offsetParent && node.offsetParent != document.body) {
              node = node.offsetParent;
              y += node.offsetTop;
            }

            return y;
          }
        }, {
          key: "smoothScroll",
          value: function smoothScroll() {
            if (!this.elmID) return;
            var startY = this.currentYPosition();
            var stopY = this.elmYPosition(this.elmID);
            var distance = stopY > startY ? stopY - startY : startY - stopY;

            if (distance < 100) {
              scrollTo(0, stopY);
              return;
            }

            var speed = Math.round(distance / 50);
            if (speed >= 20) speed = 20;
            var step = Math.round(distance / 25);
            var leapY = stopY > startY ? startY + step : startY - step;
            var timer = 0;

            if (stopY > startY) {
              for (var i = startY; i < stopY; i += step) {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                leapY += step;
                if (leapY > stopY) leapY = stopY;
                timer++;
              }

              return;
            }

            for (var i = startY; i > stopY; i -= step) {
              setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
              leapY -= step;
              if (leapY < stopY) leapY = stopY;
              timer++;
            }

            return false;
          }
        }]);

        return ScrollToDirective;
      }();

      ScrollToDirective.ɵfac = function ScrollToDirective_Factory(t) {
        return new (t || ScrollToDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('scrollTo'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      ScrollToDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ScrollToDirective,
        selectors: [["", "scrollTo", ""]],
        hostBindings: function ScrollToDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollToDirective_click_HostBindingHandler($event) {
              return ctx.smoothScroll($event);
            });
          }
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollToDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[scrollTo]'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
              args: ['scrollTo']
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          smoothScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "Hkp+":
    /*!************************************************************************!*\
      !*** ./src/app/shared/components/header-side/header-side.component.ts ***!
      \************************************************************************/

    /*! exports provided: HeaderSideComponent */

    /***/
    function Hkp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderSideComponent", function () {
        return HeaderSideComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/theme.service */
      "ETNk");
      /* harmony import */


      var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/layout.service */
      "rmxa");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/auth/jwt-auth.service */
      "nZzT");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/shared/services/navigation.service */
      "LFK6");
      /* harmony import */


      var app_views_others_search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! app/views/others/search/search.component */
      "Adj1");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function HeaderSideComponent_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderSideComponent_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.toggleProfile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderSideComponent_span_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderSideComponent_mat_grid_tile_26_mat_icon_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "check");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderSideComponent_mat_grid_tile_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderSideComponent_mat_grid_tile_26_Template_mat_grid_tile_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var theme_r7 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.changeTheme(theme_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderSideComponent_mat_grid_tile_26_mat_icon_3_Template, 2, 0, "mat-icon", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var theme_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", theme_r7.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", theme_r7.baseColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", theme_r7.isActive);
        }
      }

      var HeaderSideComponent = /*#__PURE__*/function () {
        function HeaderSideComponent(layout, router, navService, themeService, translate, renderer, jwtAuth, ls, dialog, apiService) {
          _classCallCheck(this, HeaderSideComponent);

          this.layout = layout;
          this.router = router;
          this.navService = navService;
          this.themeService = themeService;
          this.translate = translate;
          this.renderer = renderer;
          this.jwtAuth = jwtAuth;
          this.ls = ls;
          this.dialog = dialog;
          this.apiService = apiService;
          this.rumangoThemes = [];
          this.currentLang = 'en';
          this.availableLangs = [{
            name: 'English',
            code: 'en'
          }, {
            name: 'Spanish',
            code: 'es'
          }];
          this.maintenance = 'Maintenance';
          this.compPermissions = [];
        }

        _createClass(HeaderSideComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.currentUser = this.ls.getItem('ICUST_USER');
            this.flag = this.ls.getItem('notification');
            this.flag1 = this.ls.getItem('profile');
            this.layoutConf = this.layout.layoutConf;
            this.rumangoThemes = this.themeService.rumangoThemes;
            this.menuItemSub = this.navService.menuItems$.subscribe(function (res) {
              res = res.filter(function (item) {
                return item.type !== 'icon' && item.type !== 'separator';
              });
              var limit = 4;
              var mainItems = res.slice(0, limit);

              if (res.length <= limit) {
                return _this9.menuItems = mainItems;
              }

              var subItems = res.slice(limit, res.length - 1);
              mainItems.push({
                name: 'More',
                type: 'dropDown',
                tooltip: 'More',
                icon: 'more_horiz',
                sub: subItems
              });
              _this9.menuItems = mainItems;
            });
            this.user = this.ls.getItem('ICUST_USER');
            this.apiService.fetchTellerProfileInfo(this.user.id).subscribe(function (result) {// this.compPermissions = result?.icustRoleInfoModel?.parentPermission
              //   .split(',')
              // .reduce(
              //   (compArr: String[], comp: String) =>
              //     compArr.includes(comp.trim())
              //       ? compArr
              //       : [...compArr, comp.trim()],
              //   []
              // );
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.menuItemSub.unsubscribe();
          }
        }, {
          key: "setLang",
          value: function setLang() {
            this.translate.use(this.currentLang);
          }
        }, {
          key: "changeTheme",
          value: function changeTheme(theme) {
            this.layout.publishLayoutChange({
              matTheme: theme.name
            });
          }
        }, {
          key: "toggleNotific",
          value: function toggleNotific() {
            this.ls.setItem('notification', true);
            this.flag = this.ls.getItem('notification');
            this.notificPanel.toggle();
          }
        }, {
          key: "toggleProfile",
          value: function toggleProfile() {
            console.log('call profile');
            this.ls.setItem('profile', true);
            this.flag1 = this.ls.getItem('profile');
            this.profilePanel.toggle();
            console.log('next one');
          }
        }, {
          key: "toggleSidenav",
          value: function toggleSidenav() {
            if (this.layoutConf.sidebarStyle === 'closed') {
              return this.layout.publishLayoutChange({
                sidebarStyle: 'full'
              });
            }

            this.layout.publishLayoutChange({
              sidebarStyle: 'closed'
            });
          } //search implementation

        }, {
          key: "onSearch",
          value: function onSearch() {
            var dialogRef = this.dialog.open(app_views_others_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"], {
              width: '80%',
              disableClose: true,
              panelClass: "custom"
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("Dialog result: ".concat(result));
            });
          }
        }, {
          key: "onReports",
          value: function onReports() {
            console.log("enter inside settings");
            this.router.navigate(["/settings/report/reportDetails"]);
          }
        }, {
          key: "goToSettings",
          value: function goToSettings() {
            console.log("enter inside settings");
            this.router.navigate(["/settings/profile"]);
          }
        }, {
          key: "goToPassword",
          value: function goToPassword() {
            this.router.navigate(['/settings/change-password']);
          }
        }, {
          key: "goToMaintenance",
          value: function goToMaintenance() {
            this.router.navigate(['/maintenance']);
          }
        }, {
          key: "gotoEmailchange",
          value: function gotoEmailchange() {
            this.router.navigate(['/settings/change-email']);
          }
        }, {
          key: "goToThemeChange",
          value: function goToThemeChange() {
            this.router.navigate(['/settings/theme-change']);
          }
        }]);

        return HeaderSideComponent;
      }();

      HeaderSideComponent.ɵfac = function HeaderSideComponent_Factory(t) {
        return new (t || HeaderSideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_8__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__["JwtAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_7__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"]));
      };

      HeaderSideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderSideComponent,
        selectors: [["app-header-side"]],
        inputs: {
          notificPanel: "notificPanel",
          profilePanel: "profilePanel"
        },
        decls: 82,
        vars: 13,
        consts: [[1, "topbar", "toolbarBackground", 2, "background", "transparent linear-gradient(90deg, #051A2D 0%, #004C97 100%) 0% 0% no-repeat padding-box !important"], ["mat-icon-button", "", "id", "sidenavToggle", "matTooltip", "Toggle Hide/Open", 3, "click", 4, "ngIf"], [1, "topbar-branding"], ["routerLink", "/others/dashboard", 2, "padding-bottom", "20%", "font-size", "larger", "color", "white"], ["fxFlex", ""], [1, "icons-padding"], ["mat-icon-button", ""], [3, "click"], ["mat-icon-button", "", "matTooltip", "Notifications", 1, "topbar-button-right", 3, "click"], ["class", "notification-number mat-bg-warn", 4, "ngIf"], ["mat-icon-button", "", "id", "schemeToggle", "matTooltip", "Theme Change", 1, "topbar-button-right", 3, "matMenuTriggerFor"], ["themeMenu", "matMenu"], ["cols", "2", "rowHeight", "48px", 1, "theme-list"], [3, "click", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", 1, "topbar-button-right", "mr-4", "img-button"], ["src", "assets/images/face-7.jpg", "alt", ""], [3, "matMenuTriggerFor"], ["accountMenu", "matMenu"], ["role", "list", 1, "notification-list"], ["matRipple", "", 1, "d-flex", "mb-16", "mx-8"], [1, "w-40", "h-40", "mr-16", "rounded-circle", "mat-bg-chip", "d-flex", "align-items-center", "justify-content-center"], [1, "d-flex", "flex-column", "justify-content-center", "flex-grow-1"], [1, "mb-4"], [1, "text-muted"], ["mat-icon-button", "", 3, "click"], ["color", "primary", 1, "text-muted"], ["role", "listitem", "routerLinkActive", "open", 1, "notific-item"], ["color", "primary", 1, "notific-icon", "mr-16"], ["fxLayout", "row"], [1, "message", "mx-4"], ["color", "primary", 1, "editbutton", 3, "click"], ["color", "primary", 1, "editlang", 3, "click"], ["mat-menu-item", "", 3, "click"], [2, "font-size", "medium"], ["mat-icon-button", "", "id", "sidenavToggle", "matTooltip", "Toggle Hide/Open", 3, "click"], [1, "notification-number", "mat-bg-warn"], ["mat-menu-item", "", 3, "title"], [1, "egret-swatch"], ["class", "active-icon", 4, "ngIf"], [1, "active-icon"]],
        template: function HeaderSideComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderSideComponent_button_1_Template, 3, 0, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "DemoBank");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderSideComponent_Template_mat_icon_click_8_listener() {
              return ctx.onReports();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "pending_actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderSideComponent_Template_mat_icon_click_11_listener() {
              return ctx.onSearch();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderSideComponent_Template_button_click_13_listener() {
              return ctx.toggleNotific();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "notifications_none");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HeaderSideComponent_span_16_Template, 2, 0, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderSideComponent_Template_mat_icon_click_18_listener() {
              return ctx.goToSettings();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "format_color_fill");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-menu", null, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-grid-list", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HeaderSideComponent_mat_grid_tile_26_Template, 4, 4, "mat-grid-tile", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "keyboard_arrow_down");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-menu", null, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-nav-list", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h6", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "small", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderSideComponent_Template_button_click_44_listener() {
              return ctx.gotoEmailchange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-icon", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-list-item", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-icon", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Password Change");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-icon", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderSideComponent_Template_mat_icon_click_55_listener() {
              return ctx.goToPassword();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-list-item", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-icon", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "language icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h4", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-icon", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderSideComponent_Template_mat_icon_click_65_listener() {
              return ctx.gotoEmailchange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-list-item", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-icon", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "adjust icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h4", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Theme change");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-icon", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderSideComponent_Template_mat_icon_click_75_listener() {
              return ctx.goToThemeChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderSideComponent_Template_button_click_77_listener() {
              return ctx.jwtAuth.signout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "exit_to_app");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Sign out");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.sidebarStyle !== "compact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("overflow", "visible");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.flag);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("overflow", "visible");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rumangoThemes);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.tellerName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentUser.tellerName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentUser.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Language-", ctx.currentUser.language, "");
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltip"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenu"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatNavList"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatRipple"], _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuItem"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_18__["MatGridTile"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderSideComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header-side',
            templateUrl: './header-side.template.html'
          }]
        }], function () {
          return [{
            type: _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }, {
            type: app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_8__["NavigationService"]
          }, {
            type: _services_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__["JwtAuthService"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_7__["LocalStoreService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"]
          }];
        }, {
          notificPanel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          profilePanel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "IZEZ":
    /*!**********************************************!*\
      !*** ./src/app/shared/pipes/excerpt.pipe.ts ***!
      \**********************************************/

    /*! exports provided: ExcerptPipe */

    /***/
    function IZEZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExcerptPipe", function () {
        return ExcerptPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ExcerptPipe = /*#__PURE__*/function () {
        function ExcerptPipe() {
          _classCallCheck(this, ExcerptPipe);
        }

        _createClass(ExcerptPipe, [{
          key: "transform",
          value: function transform(text) {
            var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
            if (text.length <= limit) return text;
            return text.substring(0, limit) + '...';
          }
        }]);

        return ExcerptPipe;
      }();

      ExcerptPipe.ɵfac = function ExcerptPipe_Factory(t) {
        return new (t || ExcerptPipe)();
      };

      ExcerptPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "excerpt",
        type: ExcerptPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExcerptPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'excerpt'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "LFK6":
    /*!*******************************************************!*\
      !*** ./src/app/shared/services/navigation.service.ts ***!
      \*******************************************************/

    /*! exports provided: NavigationService */

    /***/
    function LFK6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationService", function () {
        return NavigationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var NavigationService = /*#__PURE__*/function () {
        function NavigationService() {
          _classCallCheck(this, NavigationService);

          this.iconMenu = [{
            type: 'separator',
            name: 'Main Items'
          }, {
            name: 'Blank',
            type: 'link',
            // svgIcon: 'ulb_server',
            state: 'others/blank'
          }, {
            name: "DASHBOARD",
            type: "link",
            // svgIcon: 'ulb_server',
            icon: "dashboard",
            state: 'dashboard'
          }];
          this.separatorMenu = [{
            type: "separator",
            name: "Custom components"
          }];
          this.iconTypeMenuTitle = ''; // sets iconMenu as default;

          this.menuItems = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.iconMenu); // navigation component has subscribed to this Observable

          this.menuItems$ = this.menuItems.asObservable();
        } // different user type.


        _createClass(NavigationService, [{
          key: "publishNavigationChange",
          value: function publishNavigationChange(menuType) {
            this.menuItems.next(this.iconMenu);
          }
        }]);

        return NavigationService;
      }();

      NavigationService.ɵfac = function NavigationService_Factory(t) {
        return new (t || NavigationService)();
      };

      NavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NavigationService,
        factory: NavigationService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "LjFu":
    /*!*********************************************!*\
      !*** ./src/app/shared/guards/auth.guard.ts ***!
      \*********************************************/

    /*! exports provided: AuthGuard */

    /***/
    function LjFu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/auth/jwt-auth.service */
      "nZzT");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, jwtAuth) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.jwtAuth = jwtAuth;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (this.jwtAuth.isLoggedIn()) {
              return true;
            } else {
              this.router.navigate(["/sessions/signin"], {
                queryParams: {
                  "return": state.url
                }
              });
              return false;
            }
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__["JwtAuthService"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__["JwtAuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "MTQd":
    /*!******************************************************************************!*\
      !*** ./src/app/shared/components/date-picker/date-picker-service.service.ts ***!
      \******************************************************************************/

    /*! exports provided: DatePickerServiceService */

    /***/
    function MTQd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatePickerServiceService", function () {
        return DatePickerServiceService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var DatePickerServiceService = /*#__PURE__*/function () {
        function DatePickerServiceService() {
          _classCallCheck(this, DatePickerServiceService);

          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }

        _createClass(DatePickerServiceService, [{
          key: "sendMessage",
          value: function sendMessage(message) {
            console.log("message", message);
            this.subject.next({
              text: message
            });
          }
        }, {
          key: "getMessage",
          value: function getMessage() {
            return this.subject.asObservable();
          }
        }]);

        return DatePickerServiceService;
      }();

      DatePickerServiceService.ɵfac = function DatePickerServiceService_Factory(t) {
        return new (t || DatePickerServiceService)();
      };

      DatePickerServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DatePickerServiceService,
        factory: DatePickerServiceService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatePickerServiceService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "P6Hk":
    /*!****************************************************************!*\
      !*** ./src/app/shared/components/profile/profile.component.ts ***!
      \****************************************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function P6Hk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/auth/jwt-auth.service */
      "nZzT");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../directives/dropdown.directive */
      "Bp9c");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../directives/dropdown-link.directive */
      "UGQK");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _directives_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../directives/dropdown-anchor.directive */
      "r/oB");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");

      function ProfileComponent_li_16_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.name);
        }
      }

      function ProfileComponent_li_16_div_2_a_1_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.icon);
        }
      }

      function ProfileComponent_li_16_div_2_a_1_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 29);
        }

        if (rf & 2) {
          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", item_r2.svgIcon);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          background: a0
        };
      };

      function ProfileComponent_li_16_div_2_a_1_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var badge_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("menuitem-badge mat-bg-", badge_r15.color, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, badge_r15.color));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r15.value);
        }
      }

      function ProfileComponent_li_16_div_2_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_li_16_div_2_a_1_mat_icon_1_Template, 2, 1, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_li_16_div_2_a_1_mat_icon_2_Template, 1, 1, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileComponent_li_16_div_2_a_1_span_6_Template, 2, 7, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", item_r2.state, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.svgIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r2.badges);
        }
      }

      function ProfileComponent_li_16_div_2_a_2_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.icon);
        }
      }

      function ProfileComponent_li_16_div_2_a_2_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var badge_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("menuitem-badge mat-bg-", badge_r20.color, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, badge_r20.color));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r20.value);
        }
      }

      function ProfileComponent_li_16_div_2_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_li_16_div_2_a_2_mat_icon_1_Template, 2, 1, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProfileComponent_li_16_div_2_a_2_span_5_Template, 2, 7, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r2.state, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r2.badges);
        }
      }

      function ProfileComponent_li_16_div_2_a_3_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.icon);
        }
      }

      function ProfileComponent_li_16_div_2_a_3_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 29);
        }

        if (rf & 2) {
          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", item_r2.svgIcon);
        }
      }

      function ProfileComponent_li_16_div_2_a_3_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var badge_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("menuitem-badge mat-bg-", badge_r27.color, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, badge_r27.color));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r27.value);
        }
      }

      function ProfileComponent_li_16_div_2_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_li_16_div_2_a_3_mat_icon_1_Template, 2, 1, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_li_16_div_2_a_3_mat_icon_2_Template, 1, 1, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileComponent_li_16_div_2_a_3_span_6_Template, 2, 7, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "keyboard_arrow_right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.svgIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r2.badges);
        }
      }

      function ProfileComponent_li_16_div_2_ul_4_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var itemLvL2_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "", item_r2.state ? "/" + item_r2.state : "", "/", itemLvL2_r30.state, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](itemLvL2_r30.name);
        }
      }

      function ProfileComponent_li_16_div_2_ul_4_li_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "keyboard_arrow_right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var itemLvL2_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](itemLvL2_r30.name);
        }
      }

      function ProfileComponent_li_16_div_2_ul_4_li_1_ul_3_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var itemLvL3_r38 = ctx.$implicit;

          var itemLvL2_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate3"]("routerLink", "", item_r2.state ? "/" + item_r2.state : "", "", itemLvL2_r30.state ? "/" + itemLvL2_r30.state : "", "/", itemLvL3_r38.state, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](itemLvL3_r38.name);
        }
      }

      function ProfileComponent_li_16_div_2_ul_4_li_1_ul_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_li_16_div_2_ul_4_li_1_ul_3_li_1_Template, 4, 4, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var itemLvL2_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", itemLvL2_r30.sub);
        }
      }

      function ProfileComponent_li_16_div_2_ul_4_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_li_16_div_2_ul_4_li_1_a_1_Template, 4, 3, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_li_16_div_2_ul_4_li_1_a_2_Template, 6, 1, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileComponent_li_16_div_2_ul_4_li_1_ul_3_Template, 2, 1, "ul", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var itemLvL2_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", itemLvL2_r30.type !== "dropDown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", itemLvL2_r30.type === "dropDown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", itemLvL2_r30.type === "dropDown");
        }
      }

      function ProfileComponent_li_16_div_2_ul_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_li_16_div_2_ul_4_li_1_Template, 4, 3, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r2.sub);
        }
      }

      function ProfileComponent_li_16_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_li_16_div_2_a_1_Template, 7, 5, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_li_16_div_2_a_2_Template, 6, 4, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProfileComponent_li_16_div_2_a_3_Template, 9, 4, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileComponent_li_16_div_2_ul_4_Template, 2, 1, "ul", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.type === "extLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.type === "dropDown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.type === "dropDown");
        }
      }

      function ProfileComponent_li_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileComponent_li_16_div_1_Template, 4, 1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileComponent_li_16_div_2_Template, 5, 4, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.type === "separator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r2.disabled && item_r2.type !== "separator" && item_r2.type !== "icon");
        }
      }

      function ProfileComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Matching Record");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent(router, apiService, jwtService) {
          _classCallCheck(this, ProfileComponent);

          this.router = router;
          this.apiService = apiService;
          this.jwtService = jwtService;
          this.menuItems = []; // Dummy notifications

          this.notifications = [{
            message: 'Language',
            icon: ' language icon',
            route: '/',
            color: 'primary',
            click: 'language()'
          }, {
            message: 'User Name',
            icon: 'person',
            route: '/',
            color: 'accent'
          }, {
            message: 'Password Change',
            icon: 'password',
            route: '/',
            color: 'warn'
          }, {
            message: 'Email',
            icon: 'email',
            route: '/',
            color: 'warn'
          }, {
            message: 'Theme change',
            icon: 'adjust icon',
            route: '/',
            color: 'warn'
          }];
          this.flag = false;
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            var user = this.jwtService.getUser();
            console.log("need to check api");
            this.menuItems = this.setMenuItem(); // ,{
            //   name: 'Role Maintenance',
            //   type: 'link',
            //   tooltip: 'Item',
            //   icon: 'done',
            //   state: 'material',
            // },
            // {
            //   name: 'User Maintenance',
            //   type: 'link',
            //   tooltip: 'Item',
            //   icon: 'done',
            //   state: '/maintenance/main/userMaintenance',
            // },
            // {
            //   name: 'Country and State Maintenance',
            //   type: 'link',
            //   tooltip: 'Item',
            //   icon: 'done',
            //   state: '/maintenance/main/countryState',
            // },
            // {
            //   name: 'Entity Maintenance',
            //   type: 'link',
            //   tooltip: 'Item',
            //   icon: 'done',
            //   state: 'maintenance/main/entity/list',
            // },
            // {
            //   name: 'Bank Maintenance',
            //   type: 'link',
            //   tooltip: 'Item',
            //   icon: 'done',
            //   state: 'maintenance/main/bank/list',
            // },
            // {
            //   name: 'Branch Maintenance',
            //   type: 'link',
            //   tooltip: 'Item',
            //   icon: 'done',
            //   state: 'maintenance/main/branch',
            // },
            // {
            //   name: 'Currency Maintenance',
            //   type: 'link',
            //   tooltip: 'Item',
            //   icon: 'done',
            //   state: 'maintenance/main/currencyMaint',
            // },
            // {
            //   name: 'Holiday Maintenance',
            //   type: 'dropDown',
            //   tooltip: 'Item',
            //   icon: 'done',
            //   state: 'maintenance/main/holiday',
            //   sub: [
            //     {name: 'Branch Holidays', state: 'maintenance/main/holiday/BranchHoliday'},
            //     {name: 'Currency Holidays', state: 'maintenance/main/holiday/currencyholiday'},
            //     {name: 'Clearing Holidays', state: 'maintenance/main/holiday/clearingholiday'}
            //   ]
            // },
            // {
            //   name: 'Product Maintenance',
            //   type: 'link',
            //   tooltip: 'Item',
            //   icon: 'done',
            //   state: 'material',
            // },
            // {
            //   name: 'Workflow Maintenance',
            //   type: 'link',
            //   tooltip: 'Item',
            //   icon: 'done',
            //   state: 'material',
            // },
            // {
            //   name: 'Customer Maintenance',
            //   type: 'link',
            //   tooltip: 'Item',
            //   icon: 'done',
            //   state: 'material',
            // },
            // {
            //   name: 'Account Maintenance',
            //   type: 'link',
            //   tooltip: 'Item',
            //   icon: 'done',
            //   state: 'material',
            // },
            // {
            //   name: 'Biller Maintenance',
            //   type: 'link',
            //   tooltip: 'Item',
            //   icon: 'done',
            //   state: 'maintenance/main/billerInfoMaint',
            // },
            // {
            //   name: 'Till/Vault Maintenance',
            //   type: 'link',
            //   tooltip: 'Item',
            //   icon: 'done',
            //   state: 'maintenance/main/tillVaultltMaster',
            // },
            // {
            //   name: 'Till/Vault Branch Mapping Maintenance',
            //   type: 'link',
            //   tooltip: 'Item',
            //   icon: 'done',
            //   state: 'maintenance/main/tillVaultltBranch',
            // },
            // {
            //   name: 'Till/Vault Configuaration Maintenance',
            //   type: 'link',
            //   tooltip: 'Item',
            //   icon: 'done',
            //   state: 'maintenance/main/tillVaultConfig',
            // },
            // {
            //   name: 'Denomination Maintenance',
            //   type: 'link',
            //   tooltip: 'Item',
            //   icon: 'done',
            //   state: 'maintenance/main/denominationMaster',
            // },
            // {
            //   name: 'Till/Vault Currency Balance Maintenance',
            //   type: 'link',
            //   tooltip: 'Item',
            //   icon: 'done',
            //   state: 'maintenance/main/tillVaultCcyBal',
            // },
            // {
            //   name: 'Till/Vault Status Maintenance',
            //   type: 'link',
            //   tooltip: 'Item',
            //   icon: 'done',
            //   state: 'maintenance/main/tillVaultStatus',
            // },
            // {
            //   name: 'Till/Vault Denomination Maintenance',
            //   type: 'link',
            //   tooltip: 'Item',
            //   icon: 'done',
            //   state: 'maintenance/main/tillVaultDenom',
            // },
            // {
            //   name: 'Transaction Cash Master Maintenance',
            //   type: 'link',
            //   tooltip: 'Item',
            //   icon: 'done',
            //   state: 'maintenance/main/transactionCashMaster',
            // },
            // {
            //   name: 'Account Type Maintenance',
            //   type: 'link',
            //   tooltip: 'Item',
            //   icon: 'done',
            //   state: 'maintenance/main/accountType',
            // },
            // {
            //   name: 'Base Denomination Maintenance',
            //   type: 'link',
            //   tooltip: 'Item',
            //   icon: 'done',
            //   state: 'maintenance/main/baseDenomination',
            // },
            // {
            //   name: 'Teller',
            //   type: 'dropDown',
            //   tooltip: 'Item',
            //   icon: 'done',
            //   state: 'material',
            //   sub: [
            //     {name: 'Branch Maintenance', state: 'cards'},
            //     {name: 'Branch Operations', state: 'buttons'},
            //     {name: 'Dynamic Menu', state: ''}
            //   ]
            // },
            // );

            this.router.events.subscribe(function (routeChange) {
              if (routeChange instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this10.profilePanel.close();
              }
            });
            this.apiService.fetchTellerProfileInfo(user.id).subscribe(function (result) {
              console.log("result ::", result);
              _this10.tellerprofileresult = result;
            });
          }
        }, {
          key: "setMenuItem",
          value: function setMenuItem() {
            return [{
              name: 'Dashboard',
              type: 'link',
              tooltip: 'Item',
              icon: 'done',
              state: 'others/dashboard'
            }, {
              name: 'Maintenance',
              type: 'dropDown',
              tooltip: 'Item',
              icon: 'done',
              state: '/maintenance/main/',
              sub: [{
                name: 'Security Policy',
                type: 'link',
                state: 'securityPolicy'
              }, {
                name: 'Workflow Maintenance',
                type: 'link',
                state: 'workflow'
              }, {
                name: 'General Maintenance',
                type: 'link',
                state: 'material'
              }, {
                name: 'Menus Maintenance',
                type: 'link',
                state: 'menu-config'
              }, {
                name: 'Role Maintenance',
                type: 'link',
                state: 'roleMaintenance'
              }, {
                name: 'User Maintenance',
                type: 'link',
                state: 'userMaintenance'
              }, {
                name: 'Country and State Maintenance',
                "typeof": 'link',
                state: 'countryState'
              }, {
                name: 'City Maintenance',
                "typeof": 'link',
                state: 'cityMaintenance'
              }, {
                name: 'Entity Maintenance',
                type: 'link',
                state: 'entity/list'
              }, {
                name: 'Bank Maintenance',
                type: 'link',
                state: 'bank/list'
              }, {
                name: 'Branch Maintenance',
                type: 'link',
                state: 'branch'
              }, {
                name: 'Currency Maintenance',
                type: 'link',
                state: 'currencyMaint'
              }, {
                name: 'Charge Maintenance',
                type: 'link',
                state: 'chargeMaint'
              }, {
                name: 'Customer Category',
                type: 'link',
                state: 'customerCategory'
              }, {
                name: 'Customer Charge Category',
                type: 'link',
                state: 'customerChargeCategory'
              }, {
                name: 'Currency Pair Maintenance',
                type: 'link',
                state: 'currencyPairMaintenance'
              }, {
                name: 'Currency Pair Rate Maintenance',
                type: 'link',
                state: 'currencyPairRateMaintenance'
              }, {
                name: 'Holiday Maintenance',
                type: 'dropDown',
                state: 'holiday/',
                sub: [{
                  name: 'Branch Holidays',
                  type: 'link',
                  state: 'BranchHoliday'
                }, {
                  name: 'Currency Holidays',
                  type: 'link',
                  state: 'currencyholiday'
                }, {
                  name: 'Clearing Holidays',
                  type: 'link',
                  state: 'clearingholiday'
                }]
              }, {
                name: 'Kiosk Login',
                type: 'link',
                state: 'kioskLogin'
              }, {
                name: 'Product Maintenance',
                type: 'link',
                state: 'product'
              }, {
                name: 'Workflow Maintenance',
                type: 'link',
                state: 'material'
              }, {
                name: 'Customer Maintenance',
                type: 'link',
                state: 'material'
              }, {
                name: 'Account Maintenance',
                type: 'link',
                state: 'material'
              }, {
                name: 'Biller Maintenance',
                type: 'link',
                state: 'billerInfoMaint'
              }, {
                name: 'Till/Vault Maintenance',
                type: 'link',
                state: 'tillVaultltMaster'
              }, {
                name: 'Till/Vault Branch Mapping Maintenance',
                type: 'link',
                state: 'tillVaultltBranch'
              }, {
                name: 'Till/Vault Configuaration Maintenance',
                type: 'link',
                state: 'tillVaultConfig'
              }, {
                name: 'Denomination Maintenance',
                type: 'link',
                state: 'denominationMaster'
              }, {
                name: 'Till/Vault Currency Balance Maintenance',
                type: 'link',
                state: 'tillVaultCcyBal'
              }, {
                name: 'Till/Vault Status Maintenance',
                type: 'link',
                state: 'tillVaultStatus'
              }, {
                name: 'Till/Vault Currency Denomination Balance Maintenance',
                type: 'link',
                state: 'tillVaultCcyDenomBal'
              }, {
                name: 'Till/Vault Denomination Maintenance',
                type: 'link',
                state: 'tillVaultDenom'
              }, {
                name: 'Transaction Cash Master Maintenance',
                type: 'link',
                state: 'transactionCashMaster'
              }, {
                name: 'Transaction Charges Maintenance',
                type: 'link',
                state: 'transactionCharges'
              }, {
                name: 'Account Type Maintenance',
                type: 'link',
                state: 'accountType'
              }, {
                name: 'Base Denomination Maintenance',
                type: 'link',
                state: 'baseDenomination'
              }, {
                name: 'Teller',
                type: 'dropDown',
                state: 'material',
                sub: [{
                  name: 'Branch Maintenance',
                  state: 'cards'
                }, {
                  name: 'Branch Operations',
                  state: 'buttons'
                }, {
                  name: 'Dynamic Menu',
                  state: ''
                }]
              }]
            }];
          }
        }, {
          key: "letterOnly",
          value: function letterOnly(event) {
            var charCode = event.keyCode;
            if (charCode > 64 && charCode < 91 || charCode > 96 && charCode < 123 || charCode == 8) return true;else return false;
          }
        }, {
          key: "onSearch",
          value: function onSearch(event) {
            var _this11 = this;

            var value = event.target.value;
            value = value.toLowerCase();
            console.log(value);
            this.flag = false;
            this.menuItems = this.setMenuItem();

            if (value.length > 0) {
              this.menuItems = this.menuItems.filter(function (item) {
                return item.name.slice(0, value.length).toLowerCase() == value || item.type == 'dropDown';
              });
              this.menuItems.map(function (item) {
                if (item.type == 'dropDown') {
                  item.sub = item.sub.filter(function (sub) {
                    return sub.name.slice(0, value.length).toLowerCase() == value || sub.type == 'dropDown';
                  });
                  item.sub.map(function (sub) {
                    if (sub.type == 'dropDown') {
                      sub.sub = sub.sub.filter(function (underSub) {
                        return underSub.name.slice(0, value.length).toLowerCase() == value;
                      });

                      if (sub.name.slice(0, value.length).toLowerCase() == value && (sub === null || sub === void 0 ? void 0 : sub.sub.length) == 0) {
                        var subMenu = _this11.setMenuItem();

                        if (sub.name == 'Teller') {
                          sub.sub = subMenu[1].sub[29].sub;
                        } else if (sub.name == 'Holiday Maintenance') {
                          sub.sub = subMenu[1].sub[11].sub;
                        }
                      }

                      item.sub = item.sub.filter(function (i) {
                        return !i.sub || (i === null || i === void 0 ? void 0 : i.sub.length) != 0 || i.name.slice(0, value.length).toLowerCase() == value;
                      });
                    }
                  });

                  if (item.name.slice(0, value.length).toLowerCase() == value && (item === null || item === void 0 ? void 0 : item.sub.length) == 0) {
                    var maintenance = _this11.setMenuItem();

                    item.sub = maintenance[1].sub;
                  }

                  _this11.menuItems = _this11.menuItems.filter(function (item) {
                    return !item.sub || (item === null || item === void 0 ? void 0 : item.sub.length) != 0 || item.name.slice(0, value.length).toLowerCase() == value;
                  });
                }
              });

              if (this.menuItems.length == 0) {
                this.flag = true;
              } else {
                this.flag = false;
              }
            } else {
              this.flag = false;
            }
          }
        }, {
          key: "clearAll",
          value: function clearAll(e) {
            e.preventDefault();
            this.notifications = [];
          }
        }, {
          key: "language",
          value: function language() {
            console.log("click event");
            this.apiService.fetchTellerProfileInfo(1).subscribe(function (result) {
              console.log("result ::", result);
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.flag = false;
            this.menuItems = this.setMenuItem();
            this.profilePanel.close();
          }
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
        return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_3__["JwtAuthService"]));
      };

      ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProfileComponent,
        selectors: [["app-profile"]],
        inputs: {
          profilePanel: "profilePanel"
        },
        decls: 18,
        vars: 2,
        consts: [[1, "sidebar-panel"], ["id", "scroll-area", "fxLayout", "column", 1, "navigation-hold", 3, "perfectScrollbar"], [1, "sidebar-hold"], [1, "sidenav-hold"], ["fxLayout", "row", "fxLayoutGap", "5px"], ["appearance", "outline", 1, "searchbar", "ml-16"], ["matInput", "", "placeholder", "search", 3, "keypress", "keyup"], ["matSuffix", ""], ["fxFlex", ""], ["mat-icon-button", "", 3, "click"], ["appDropdown", "", 1, "sidenav"], ["appDropdownLink", "", "routerLinkActive", "open", 4, "ngFor", "ngForOf"], ["class", "errmsg", 4, "ngIf"], ["appDropdownLink", "", "routerLinkActive", "open"], ["class", "nav-item-sep", 4, "ngIf"], ["class", "lvl1", 4, "ngIf"], [1, "nav-item-sep"], [1, "text-muted"], [1, "lvl1"], ["appDropdownToggle", "", "matRipple", "", 3, "routerLink", 4, "ngIf"], ["appDropdownToggle", "", "matRipple", "", "target", "_blank", 3, "href", 4, "ngIf"], ["appDropdownToggle", "", "matRipple", "", 4, "ngIf"], ["class", "submenu lvl2", "appDropdown", "", 4, "ngIf"], ["appDropdownToggle", "", "matRipple", "", 3, "routerLink"], ["class", "sidenav-mat-icon", 4, "ngIf"], ["class", "svgIcon", 3, "svgIcon", 4, "ngIf"], [1, "item-name", "lvl1"], [3, "class", "ngStyle", 4, "ngFor", "ngForOf"], [1, "sidenav-mat-icon"], [1, "svgIcon", 3, "svgIcon"], [3, "ngStyle"], ["appDropdownToggle", "", "matRipple", "", "target", "_blank", 3, "href"], ["appDropdownToggle", "", "matRipple", ""], [1, "menu-caret"], ["appDropdown", "", 1, "submenu", "lvl2"], ["class", "submenu lvl3", "appDropdown", "", 4, "ngIf"], [1, "item-name", "lvl2"], ["appDropdown", "", 1, "submenu", "lvl3"], [1, "item-name", "lvl3"], [1, "errmsg"]],
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function ProfileComponent_Template_input_keypress_8_listener($event) {
              return ctx.letterOnly($event);
            })("keyup", function ProfileComponent_Template_input_keyup_8_listener($event) {
              return ctx.onSearch($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_12_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProfileComponent_li_16_Template, 3, 2, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProfileComponent_div_17_Template, 3, 0, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flag);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_10__["AppDropdownDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_12__["DropdownLinkDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDivider"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _directives_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_14__["DropdownAnchorDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatRipple"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_16__["DefaultStyleDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatHint"]],
        styles: [".searchbar[_ngcontent-%COMP%] {\n  width: 200px !important;\n}\n\n.errmsg[_ngcontent-%COMP%] {\n  margin-left: 10%;\n  font-size: small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUF1QjtBQUMzQjs7QUFDQTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFFcEIiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2hiYXJ7XHJcbiAgICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcclxufVxyXG4uZXJybXNne1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
          }, {
            type: app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_3__["JwtAuthService"]
          }];
        }, {
          profilePanel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services/theme.service */
      "ETNk");
      /* harmony import */


      var _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./services/navigation.service */
      "LFK6");
      /* harmony import */


      var _services_route_parts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/route-parts.service */
      "vafs");
      /* harmony import */


      var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./guards/auth.guard */
      "LjFu");
      /* harmony import */


      var _guards_user_role_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./guards/user-role.guard */
      "zt0U");
      /* harmony import */


      var _services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./services/app-confirm/app-confirm.service */
      "3kSh");
      /* harmony import */


      var _services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services/app-loader/app-loader.service */
      "3sEA");
      /* harmony import */


      var _components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/shared-components.module */
      "jgPy");
      /* harmony import */


      var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pipes/shared-pipes.module */
      "aYsj");
      /* harmony import */


      var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./directives/shared-directives.module */
      "mnDI"); // SERVICES


      var SharedModule = /*#__PURE__*/_createClass(function SharedModule() {
        _classCallCheck(this, SharedModule);
      });

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        providers: [_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"], _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"], _services_route_parts_service__WEBPACK_IMPORTED_MODULE_4__["RoutePartsService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"], _guards_user_role_guard__WEBPACK_IMPORTED_MODULE_6__["UserRoleGuard"], _services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_7__["AppConfirmService"], _services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_8__["AppLoaderService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"], _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_10__["SharedPipesModule"], _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_11__["SharedDirectivesModule"]], _components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"], _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_10__["SharedPipesModule"], _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_11__["SharedDirectivesModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"], _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_10__["SharedPipesModule"], _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_11__["SharedDirectivesModule"]],
          exports: [_components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"], _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_10__["SharedPipesModule"], _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_11__["SharedDirectivesModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"], _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_10__["SharedPipesModule"], _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_11__["SharedDirectivesModule"]],
            providers: [_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"], _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"], _services_route_parts_service__WEBPACK_IMPORTED_MODULE_4__["RoutePartsService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"], _guards_user_role_guard__WEBPACK_IMPORTED_MODULE_6__["UserRoleGuard"], _services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_7__["AppConfirmService"], _services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_8__["AppLoaderService"]],
            exports: [_components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"], _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_10__["SharedPipesModule"], _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_11__["SharedDirectivesModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "QlUG":
    /*!************************************************************!*\
      !*** ./src/app/shared/components/input/input.component.ts ***!
      \************************************************************/

    /*! exports provided: InputComponent */

    /***/
    function QlUG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InputComponent", function () {
        return InputComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./input */
      "SOHV");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");

      var InputComponent = /*#__PURE__*/function () {
        function InputComponent(formBuilder) {
          _classCallCheck(this, InputComponent);

          this.formBuilder = formBuilder; // inputs=new Inputs();
          // inputs: Inputs = new Inputs();

          this.inputsObj = new _input__WEBPACK_IMPORTED_MODULE_2__["Inputs"]();
          this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
          this.inputMethod = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.value1 = '';
        }

        _createClass(InputComponent, [{
          key: "setvalue",
          value: function setvalue() {
            this.myControl.setValue(this.inputdefaultvalue);
            this.inputMethod.emit(this.inputdefaultvalue);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {// this.form = this.formBuilder.group({
            //   formInput1: ['', Validators.compose([Validators.required])],
            //   formInput2: ['', Validators.required]
            // })
            // this.form2 = this.formBuilder.group({
            //   multiSelect: ['', Validators.required]
            // })
          }
        }, {
          key: "inputreset",
          value: function inputreset() {
            this.inputMethod.emit();
            this.myControl.reset('');
          }
        }, {
          key: "onChange",
          value: function onChange(searchValue) {
            this.inputMethod.emit(searchValue);
          }
        }]);

        return InputComponent;
      }();

      InputComponent.ɵfac = function InputComponent_Factory(t) {
        return new (t || InputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      InputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InputComponent,
        selectors: [["app-input"]],
        inputs: {
          inputsObj: "inputsObj",
          inputlabel: "inputlabel",
          type: "type",
          readonly: "readonly",
          required: "required",
          placeholder: "placeholder",
          inputdefaultvalue: "inputdefaultvalue",
          item: "item"
        },
        outputs: {
          inputMethod: "inputMethod"
        },
        decls: 6,
        vars: 6,
        consts: [["input", "ngForm"], ["appearance", "outline"], ["matInput", "", 3, "type", "formControl", "required", "placeholder", "readonly", "input"]],
        template: function InputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", null, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function InputComponent_Template_input_input_5_listener($event) {
              return ctx.onChange($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.inputlabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type)("formControl", ctx.myControl)("required", ctx.required)("placeholder", ctx.placeholder)("readonly", ctx.readonly);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-input',
            templateUrl: './input.component.html'
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, {
          inputsObj: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          inputlabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          inputdefaultvalue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          inputMethod: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "SOHV":
    /*!**************************************************!*\
      !*** ./src/app/shared/components/input/input.ts ***!
      \**************************************************/

    /*! exports provided: Inputs */

    /***/
    function SOHV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Inputs", function () {
        return Inputs;
      });

      var Inputs = /*#__PURE__*/_createClass(function Inputs() {
        _classCallCheck(this, Inputs);
      });
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared/services/route-parts.service */
      "vafs");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(title, router, activeRoute, routePartsService) {
          _classCallCheck(this, AppComponent);

          this.title = title;
          this.router = router;
          this.activeRoute = activeRoute;
          this.routePartsService = routePartsService;
          this.appTitle = 'Rumango';
          this.pageTitle = '';
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.changePageTitle();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "changePageTitle",
          value: function changePageTitle() {
            var _this12 = this;

            this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
            })).subscribe(function (routeChange) {
              var routeParts = _this12.routePartsService.generateRouteParts(_this12.activeRoute.snapshot);

              if (!routeParts.length) {
                return _this12.title.setTitle(_this12.appTitle);
              } // Extract title from parts;


              _this12.pageTitle = routeParts.reverse().map(function (part) {
                return part.title;
              }).reduce(function (partA, partI) {
                return "".concat(partA, " > ").concat(partI);
              });
              _this12.pageTitle += " | ".concat(_this12.appTitle);

              _this12.title.setTitle(_this12.pageTitle);
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_3__["RoutePartsService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: [".mat-header-cell {\r\n    font-weight: 900 !important;\r\n    background-color: #dfe8f1 !important;\r\n    color: black !important;\r\n    font-size: 13px !important;\r\n    font-family: 'Archivo' !important;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLG9DQUFvQztJQUNwQyx1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLGlDQUFpQztFQUNuQyIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAgLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICBmb250LXdlaWdodDogOTAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlOGYxICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6ICdBcmNoaXZvJyAhaW1wb3J0YW50O1xyXG4gIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: _shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_3__["RoutePartsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "TgYD":
    /*!****************************************************************!*\
      !*** ./src/app/shared/components/sidenav/sidenav.component.ts ***!
      \****************************************************************/

    /*! exports provided: SidenavComponent */

    /***/
    function TgYD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidenavComponent", function () {
        return SidenavComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../directives/dropdown.directive */
      "Bp9c");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../directives/dropdown-link.directive */
      "UGQK");
      /* harmony import */


      var _directives_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../directives/dropdown-anchor.directive */
      "r/oB");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      function SidenavComponent_div_1_div_5_button_1_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.icon);
        }
      }

      function SidenavComponent_div_1_div_5_button_1_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 15);
        }

        if (rf & 2) {
          var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", item_r3.svgIcon);
        }
      }

      function SidenavComponent_div_1_div_5_button_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_div_1_div_5_button_1_mat_icon_1_Template, 2, 1, "mat-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidenavComponent_div_1_div_5_button_1_mat_icon_2_Template, 1, 1, "mat-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", item_r3.state, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", item_r3.tooltip);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.svgIcon);
        }
      }

      function SidenavComponent_div_1_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_div_1_div_5_button_1_Template, 3, 4, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r3.disabled && item_r3.type === "icon");
        }
      }

      var _c0 = function _c0() {
        return {
          margin: "0 -24px"
        };
      };

      function SidenavComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-divider", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidenavComponent_div_1_div_5_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.iconTypeMenuTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.menuItems);
        }
      }

      function SidenavComponent_li_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, item_r10.name));
        }
      }

      function SidenavComponent_li_3_div_2_a_1_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.icon);
        }
      }

      function SidenavComponent_li_3_div_2_a_1_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 15);
        }

        if (rf & 2) {
          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", item_r10.svgIcon);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          background: a0
        };
      };

      function SidenavComponent_li_3_div_2_a_1_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var badge_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("menuitem-badge mat-bg-", badge_r23.color, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, badge_r23.color));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r23.value);
        }
      }

      function SidenavComponent_li_3_div_2_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_li_3_div_2_a_1_mat_icon_1_Template, 2, 1, "mat-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidenavComponent_li_3_div_2_a_1_mat_icon_2_Template, 1, 1, "mat-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SidenavComponent_li_3_div_2_a_1_span_7_Template, 2, 7, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", item_r10.state, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.svgIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, item_r10.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r10.badges);
        }
      }

      function SidenavComponent_li_3_div_2_a_2_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.icon);
        }
      }

      function SidenavComponent_li_3_div_2_a_2_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var badge_r28 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("menuitem-badge mat-bg-", badge_r28.color, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, badge_r28.color));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r28.value);
        }
      }

      function SidenavComponent_li_3_div_2_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_li_3_div_2_a_2_mat_icon_1_Template, 2, 1, "mat-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidenavComponent_li_3_div_2_a_2_span_6_Template, 2, 7, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r10.state, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, item_r10.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r10.badges);
        }
      }

      function SidenavComponent_li_3_div_2_a_3_mat_icon_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.icon);
        }
      }

      function SidenavComponent_li_3_div_2_a_3_mat_icon_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 15);
        }

        if (rf & 2) {
          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", item_r10.svgIcon);
        }
      }

      function SidenavComponent_li_3_div_2_a_3_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var badge_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("menuitem-badge mat-bg-", badge_r35.color, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, badge_r35.color));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r35.value);
        }
      }

      function SidenavComponent_li_3_div_2_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_li_3_div_2_a_3_mat_icon_1_Template, 2, 1, "mat-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidenavComponent_li_3_div_2_a_3_mat_icon_2_Template, 1, 1, "mat-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SidenavComponent_li_3_div_2_a_3_span_7_Template, 2, 7, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "keyboard_arrow_right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.svgIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, item_r10.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r10.badges);
        }
      }

      function SidenavComponent_li_3_div_2_ul_4_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var itemLvL2_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "", item_r10.state ? "/" + item_r10.state : "", "/", itemLvL2_r38.state, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, itemLvL2_r38.name));
        }
      }

      function SidenavComponent_li_3_div_2_ul_4_li_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "keyboard_arrow_right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var itemLvL2_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, itemLvL2_r38.name));
        }
      }

      function SidenavComponent_li_3_div_2_ul_4_li_1_ul_3_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var itemLvL3_r46 = ctx.$implicit;

          var itemLvL2_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate3"]("routerLink", "", item_r10.state ? "/" + item_r10.state : "", "", itemLvL2_r38.state ? "/" + itemLvL2_r38.state : "", "/", itemLvL3_r46.state, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, itemLvL3_r46.name));
        }
      }

      function SidenavComponent_li_3_div_2_ul_4_li_1_ul_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_li_3_div_2_ul_4_li_1_ul_3_li_1_Template, 5, 6, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var itemLvL2_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", itemLvL2_r38.sub);
        }
      }

      function SidenavComponent_li_3_div_2_ul_4_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_li_3_div_2_ul_4_li_1_a_1_Template, 5, 5, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidenavComponent_li_3_div_2_ul_4_li_1_a_2_Template, 7, 3, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidenavComponent_li_3_div_2_ul_4_li_1_ul_3_Template, 2, 1, "ul", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var itemLvL2_r38 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", itemLvL2_r38.type !== "dropDown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", itemLvL2_r38.type === "dropDown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", itemLvL2_r38.type === "dropDown");
        }
      }

      function SidenavComponent_li_3_div_2_ul_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_li_3_div_2_ul_4_li_1_Template, 4, 3, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r10.sub);
        }
      }

      function SidenavComponent_li_3_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_li_3_div_2_a_1_Template, 8, 7, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidenavComponent_li_3_div_2_a_2_Template, 7, 6, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidenavComponent_li_3_div_2_a_3_Template, 10, 6, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidenavComponent_li_3_div_2_ul_4_Template, 2, 1, "ul", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.type === "extLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.type === "dropDown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.type === "dropDown");
        }
      }

      function SidenavComponent_li_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_li_3_div_1_Template, 5, 3, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidenavComponent_li_3_div_2_Template, 5, 4, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.type === "separator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r10.disabled && item_r10.type !== "separator" && item_r10.type !== "icon");
        }
      }

      var SidenavComponent = /*#__PURE__*/function () {
        function SidenavComponent() {
          _classCallCheck(this, SidenavComponent);

          this.menuItems = [];
        }

        _createClass(SidenavComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // Only for demo purpose

        }, {
          key: "addMenuItem",
          value: function addMenuItem() {
            this.menuItems.push({
              name: 'ITEM',
              type: 'dropDown',
              tooltip: 'Item',
              icon: 'done',
              state: 'material',
              sub: [{
                name: 'SUBITEM',
                state: 'cards'
              }, {
                name: 'SUBITEM',
                state: 'buttons'
              }]
            });
          }
        }]);

        return SidenavComponent;
      }();

      SidenavComponent.ɵfac = function SidenavComponent_Factory(t) {
        return new (t || SidenavComponent)();
      };

      SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SidenavComponent,
        selectors: [["app-sidenav"]],
        inputs: {
          menuItems: ["items", "menuItems"],
          hasIconTypeMenuItem: ["hasIconMenu", "hasIconTypeMenuItem"],
          iconTypeMenuTitle: ["iconMenuTitle", "iconTypeMenuTitle"]
        },
        decls: 4,
        vars: 2,
        consts: [[1, "sidenav-hold"], ["class", "icon-menu mb-16", 4, "ngIf"], ["appDropdown", "", 1, "sidenav"], ["appDropdownLink", "", "routerLinkActive", "open", 4, "ngFor", "ngForOf"], [1, "icon-menu", "mb-16"], [1, "mb-16", "nav-item-sep"], [3, "ngStyle"], [1, "text-muted", "icon-menu-title"], ["class", "icon-menu-item", 4, "ngFor", "ngForOf"], [1, "icon-menu-item"], ["mat-raised-button", "", "routerLinkActive", "mat-bg-primary", 3, "matTooltip", "routerLink", 4, "ngIf"], ["mat-raised-button", "", "routerLinkActive", "mat-bg-primary", 3, "matTooltip", "routerLink"], ["class", "sidenav-mat-icon", 4, "ngIf"], ["class", "svgIcon", 3, "svgIcon", 4, "ngIf"], [1, "sidenav-mat-icon"], [1, "svgIcon", 3, "svgIcon"], ["appDropdownLink", "", "routerLinkActive", "open"], ["class", "nav-item-sep", 4, "ngIf"], ["class", "lvl1", 4, "ngIf"], [1, "nav-item-sep"], [1, "text-muted"], [1, "lvl1"], ["appDropdownToggle", "", "matRipple", "", 3, "routerLink", 4, "ngIf"], ["appDropdownToggle", "", "matRipple", "", "target", "_blank", 3, "href", 4, "ngIf"], ["appDropdownToggle", "", "matRipple", "", 4, "ngIf"], ["class", "submenu lvl2", "appDropdown", "", 4, "ngIf"], ["appDropdownToggle", "", "matRipple", "", 3, "routerLink"], [1, "item-name", "lvl1"], ["fxFlex", ""], [3, "class", "ngStyle", 4, "ngFor", "ngForOf"], ["appDropdownToggle", "", "matRipple", "", "target", "_blank", 3, "href"], ["appDropdownToggle", "", "matRipple", ""], [1, "menu-caret"], ["appDropdown", "", 1, "submenu", "lvl2"], ["class", "submenu lvl3", "appDropdown", "", 4, "ngIf"], [1, "item-name", "lvl2"], ["appDropdown", "", 1, "submenu", "lvl3"], [1, "item-name", "lvl3"]],
        template: function SidenavComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidenavComponent_div_1_Template, 6, 4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidenavComponent_li_3_Template, 3, 2, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasIconTypeMenuItem);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_2__["AppDropdownDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultStyleDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _directives_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_9__["DropdownLinkDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _directives_dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_10__["DropdownAnchorDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRipple"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sidenav',
            templateUrl: './sidenav.template.html'
          }]
        }], function () {
          return [];
        }, {
          menuItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['items']
          }],
          hasIconTypeMenuItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['hasIconMenu']
          }],
          iconTypeMenuTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['iconMenuTitle']
          }]
        });
      })();
      /***/

    },

    /***/
    "UGQK":
    /*!**************************************************************!*\
      !*** ./src/app/shared/directives/dropdown-link.directive.ts ***!
      \**************************************************************/

    /*! exports provided: DropdownLinkDirective */

    /***/
    function UGQK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownLinkDirective", function () {
        return DropdownLinkDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _dropdown_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dropdown.directive */
      "Bp9c");

      var DropdownLinkDirective = /*#__PURE__*/function () {
        function DropdownLinkDirective(nav) {
          _classCallCheck(this, DropdownLinkDirective);

          this.nav = nav;
        }

        _createClass(DropdownLinkDirective, [{
          key: "open",
          get: function get() {
            return this._open;
          },
          set: function set(value) {
            this._open = value; // if (value) {
            //   this.nav.closeOtherLinks(this);
            // }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.nav.addLink(this);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.nav.removeGroup(this);
          }
        }, {
          key: "toggle",
          value: function toggle() {
            this.open = !this.open;
          }
        }]);

        return DropdownLinkDirective;
      }();

      DropdownLinkDirective.ɵfac = function DropdownLinkDirective_Factory(t) {
        return new (t || DropdownLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__["AppDropdownDirective"]));
      };

      DropdownLinkDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DropdownLinkDirective,
        selectors: [["", "appDropdownLink", ""]],
        hostVars: 2,
        hostBindings: function DropdownLinkDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.open);
          }
        },
        inputs: {
          group: "group",
          open: "open"
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownLinkDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[appDropdownLink]'
          }]
        }], function () {
          return [{
            type: _dropdown_directive__WEBPACK_IMPORTED_MODULE_1__["AppDropdownDirective"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__["AppDropdownDirective"]]
            }]
          }];
        }, {
          group: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.open']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "UnY0":
    /*!**************************************************************************!*\
      !*** ./src/app/shared/components/sidebar-side/sidebar-side.component.ts ***!
      \**************************************************************************/

    /*! exports provided: SidebarSideComponent */

    /***/
    function UnY0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarSideComponent", function () {
        return SidebarSideComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/services/navigation.service */
      "LFK6");
      /* harmony import */


      var _services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/theme.service */
      "ETNk");
      /* harmony import */


      var app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/layout.service */
      "rmxa");
      /* harmony import */


      var app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/services/auth/jwt-auth.service */
      "nZzT");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../sidenav/sidenav.component */
      "TgYD");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");

      function SidebarSideComponent_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 13);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          active: a0
        };
      };

      function SidebarSideComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarSideComponent_div_7_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.toggleCollapse();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r1.layoutConf.sidebarCompactToggle));
        }
      }

      var SidebarSideComponent = /*#__PURE__*/function () {
        function SidebarSideComponent(navService, themeService, layout, jwtAuth) {
          _classCallCheck(this, SidebarSideComponent);

          this.navService = navService;
          this.themeService = themeService;
          this.layout = layout;
          this.jwtAuth = jwtAuth;
        }

        _createClass(SidebarSideComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.iconTypeMenuTitle = this.navService.iconTypeMenuTitle;
            this.menuItemsSub = this.navService.menuItems$.subscribe(function (menuItem) {
              _this13.menuItems = menuItem; //Checks item list has any icon type.

              _this13.hasIconTypeMenuItem = !!_this13.menuItems.filter(function (item) {
                return item.type === "icon";
              }).length;
            });
            this.layoutConf = this.layout.layoutConf;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.menuItemsSub) {
              this.menuItemsSub.unsubscribe();
            }
          }
        }, {
          key: "toggleCollapse",
          value: function toggleCollapse() {
            if (this.layoutConf.sidebarCompactToggle) {
              this.layout.publishLayoutChange({
                sidebarCompactToggle: false
              });
            } else {
              this.layout.publishLayoutChange({
                // sidebarStyle: "compact",
                sidebarCompactToggle: true
              });
            }
          }
        }]);

        return SidebarSideComponent;
      }();

      SidebarSideComponent.ɵfac = function SidebarSideComponent_Factory(t) {
        return new (t || SidebarSideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__["JwtAuthService"]));
      };

      SidebarSideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SidebarSideComponent,
        selectors: [["app-sidebar-side"]],
        decls: 16,
        vars: 6,
        consts: [[1, "sidebar-panel"], ["id", "scroll-area", "fxLayout", "column", 1, "navigation-hold", 3, "perfectScrollbar"], [1, "sidebar-hold"], [1, "branding"], [1, "app-logo-text"], ["style", "margin: auto", 4, "ngIf"], ["class", "sidebar-compact-switch", 3, "ngClass", "click", 4, "ngIf"], [1, "app-user"], [1, "app-user-photo"], ["src", "assets/images/face-7.jpg", "alt", "", 1, "mat-elevation-z1"], [1, "app-user-name", "mb-8"], [1, "icon-xs", "text-muted"], [3, "items", "hasIconMenu", "iconMenuTitle"], [2, "margin", "auto"], [1, "sidebar-compact-switch", 3, "ngClass", "click"]],
        template: function SidebarSideComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Rumango");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidebarSideComponent_span_6_Template, 1, 0, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SidebarSideComponent_div_7_Template, 2, 3, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "lock");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-sidenav", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.sidebarStyle !== "compact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.sidebarStyle !== "compact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.jwtAuth == null ? null : ctx.jwtAuth.user == null ? null : ctx.jwtAuth.user.displayName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.menuItems)("hasIconMenu", ctx.hasIconTypeMenuItem)("iconMenuTitle", ctx.iconTypeMenuTitle);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__["SidenavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["DefaultClassDirective"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarSideComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-sidebar-side",
            templateUrl: "./sidebar-side.component.html"
          }]
        }], function () {
          return [{
            type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]
          }, {
            type: _services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]
          }, {
            type: app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]
          }, {
            type: app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__["JwtAuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "X2tk":
    /*!****************************************************************************!*\
      !*** ./src/app/shared/components/notifications/notifications.component.ts ***!
      \****************************************************************************/

    /*! exports provided: NotificationsComponent */

    /***/
    function X2tk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function () {
        return NotificationsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/auth/jwt-auth.service */
      "nZzT");
      /* harmony import */


      var app_shared_services_token_service_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/services/token-service/token.service */
      "AG0e");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function NotificationsComponent_mat_list_item_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var n_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", n_r3.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](n_r3.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](n_r3.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](n_r3.time);
        }
      }

      function NotificationsComponent_mat_list_item_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsComponent_mat_list_item_5_Template_mat_list_item_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var notification_r4 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.callTokenMethod(notification_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "watch_later");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsComponent_mat_list_item_5_Template_mat_icon_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var i_r5 = ctx.index;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.deleteIndividualTokenNotification(i_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "highlight_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var notification_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r4.notificationMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 2, notification_r4.createdTime));
        }
      }

      function NotificationsComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsComponent_div_6_Template_a_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.clearAll($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Clear all notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var NotificationsComponent = /*#__PURE__*/function () {
        function NotificationsComponent(router, jwtService, tokenService, api) {
          _classCallCheck(this, NotificationsComponent);

          this.router = router;
          this.jwtService = jwtService;
          this.tokenService = tokenService;
          this.api = api; // Dummy notifications

          this.notifications = [{
            message: "New transaction found",
            icon: "assignment_ind",
            time: "1 min ago",
            route: "/views/others/dashboard",
            color: "primary"
          }, {
            message: "New message",
            icon: "chat",
            time: "4 min ago",
            route: "/",
            color: "accent"
          }, {
            message: "Server rebooted",
            icon: "settings_backup_restore",
            time: "12 min ago",
            route: "/",
            color: "warn"
          }];
          this.slipEnable = false;
        }

        _createClass(NotificationsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            var user = this.jwtService.getUser();

            if (user) {
              this.userRole = user.roleId;
              this.tellerId = user.id;
            }

            this.router.events.subscribe(function (routeChange) {
              if (routeChange instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this14.notificPanel.close();
              }
            });
            this.getNotifications();
          }
        }, {
          key: "getNotifications",
          value: function getNotifications() {
            var _this15 = this;

            this.api.fetchNotification(this.tellerId).subscribe(function (resp) {
              _this15.tokenNotifications = resp;
            }); //   this.tokenNotifications=[
            //     {
            //        "notificationId":53763,
            //        "notificationMessage":"VidyashreeAcharya Has assigned a token CHD4265 to you.",
            //        "createdTime":1671775751212,
            //        "tellerId":19954,
            //        "tokenId":44518
            //     },
            //     {
            //       "notificationId":53762,
            //       "notificationMessage":"VidyashreeAcharya Has assigned a token CHD4264 to you.",
            //       "createdTime":1671775751215,
            //       "tellerId":19954,
            //       "tokenId":44518
            //    },
            //    {
            //     "notificationId":53763,
            //     "notificationMessage":"VidyashreeAcharya Has assigned a token CHD4265 to you.",
            //     "createdTime":1671775751212,
            //     "tellerId":19954,
            //     "tokenId":44518
            //  },
            //  {
            //    "notificationId":53762,
            //    "notificationMessage":"VidyashreeAcharya Has assigned a token CHD4264 to you.",
            //    "createdTime":1671775751215,
            //    "tellerId":19954,
            //    "tokenId":44518
            // },
            // {
            //   "notificationId":53763,
            //   "notificationMessage":"VidyashreeAcharya Has assigned a token CHD4265 to you.",
            //   "createdTime":1671775751212,
            //   "tellerId":19954,
            //   "tokenId":44518
            // },
            // {
            //  "notificationId":53762,
            //  "notificationMessage":"VidyashreeAcharya Has assigned a token CHD4264 to you.",
            //  "createdTime":1671775751215,
            //  "tellerId":19954,
            //  "tokenId":44518
            // },
            // {
            //   "notificationId":53763,
            //   "notificationMessage":"VidyashreeAcharya Has assigned a token CHD4265 to you.",
            //   "createdTime":1671775751212,
            //   "tellerId":19954,
            //   "tokenId":44518
            // },
            // {
            //  "notificationId":53762,
            //  "notificationMessage":"VidyashreeAcharya Has assigned a token CHD4264 to you.",
            //  "createdTime":1671775751215,
            //  "tellerId":19954,
            //  "tokenId":44518
            // },
            // {
            //   "notificationId":10002,
            //   "notificationMessage":"VidyashreeAcharya Has assigned a token CHW4967 to you.",
            //   "createdTime":1671775751212,
            //   "tellerId":19954,
            //   "tokenId":'CHW4967'
            // },
            // {
            //  "notificationId":10001,
            //  "notificationMessage":"VidyashreeAcharya Has assigned a token CHD4264 to you.",
            //  "createdTime":1671775751215,
            //  "tellerId":19954,
            //  "tokenId":44518
            // },
            //  ]
          }
        }, {
          key: "clearAll",
          value: function clearAll(e) {
            e.preventDefault();
            this.notifications = [];
            this.tokenNotifications = [];
            this.api.deleteAllToken(this.tellerId).subscribe(function (resp) {}, function (error) {});
          }
        }, {
          key: "deleteIndividualTokenNotification",
          value: function deleteIndividualTokenNotification(index) {
            this.tokenNotifications.splice(index, 1);
            this.api.deleteIndividualToken(this.tellerId).subscribe(function (resp) {}, function (error) {});
          }
        }, {
          key: "callTokenMethod",
          value: function callTokenMethod(tellerNotification) {
            // this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
            //   this.router.navigate(["others/dashboard"]);
            // });
            this.notificPanel.close();
            this.api.setToken({
              token: tellerNotification.tokenNumber
            });
          }
        }]);

        return NotificationsComponent;
      }();

      NotificationsComponent.ɵfac = function NotificationsComponent_Factory(t) {
        return new (t || NotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_3__["JwtAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_token_service_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]));
      };

      NotificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotificationsComponent,
        selectors: [["app-notifications"]],
        inputs: {
          notificPanel: "notificPanel"
        },
        decls: 7,
        vars: 3,
        consts: [[1, "text-center", "mat-bg-primary", "pt-16", "pb-16"], [1, "m-0", "text-white"], ["role", "list", 1, "notification-list"], ["class", "notific-item", "role", "listitem", "routerLinkActive", "open", 4, "ngFor", "ngForOf"], ["class", "notific-item", "role", "listitem", "routerLinkActive", "open", 3, "click", 4, "ngFor", "ngForOf"], ["class", "text-center mt-16", 4, "ngIf"], ["role", "listitem", "routerLinkActive", "open", 1, "notific-item"], [1, "notific-icon", "mr-16", 3, "color"], [1, "mat-list-text"], [1, "message"], [1, "time", "text-muted"], ["role", "listitem", "routerLinkActive", "open", 1, "notific-item", 3, "click"], ["color", "warn", 1, "notific-icon", "mr-16"], [1, "deleteButton"], [1, "notific-icon", "mr-14", "fontSize", 3, "click"], [1, "text-center", "mt-16"], ["href", "#", 1, "box", 3, "click"]],
        template: function NotificationsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-nav-list", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotificationsComponent_mat_list_item_4_Template, 9, 4, "mat-list-item", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotificationsComponent_mat_list_item_5_Template, 13, 4, "mat-list-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NotificationsComponent_div_6_Template, 4, 0, "div", 5);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tokenNotifications);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notifications.length);
          }
        },
        directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
        styles: [".box[_ngcontent-%COMP%] {\n  border: 1px solid blue;\n  background-color: lightblue;\n  padding-top: 10px;\n  padding-right: 50px;\n  padding-bottom: 10px;\n  padding-left: 50px;\n}\n\n.deleteButton[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  background-color: white;\n}\n\n.deleteIcon[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 10px;\n  font-size: 20px;\n}\n\n.fontSize[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbm90aWZpY2F0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3RCOztBQUNBO0VBQ0ksYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFDSjtBQUNBOztBQUFBO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0FBR25COztBQURBO0VBQ0ksZUFBZTtBQUluQiIsImZpbGUiOiJub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxufVxyXG4uZGVsZXRlQnV0dG9ue1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlXHJcbn1cclxuLmRlbGV0ZUljb257XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uZm9udFNpemV7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-notifications",
            templateUrl: "./notifications.component.html",
            styleUrls: ["./notifications.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_3__["JwtAuthService"]
          }, {
            type: app_shared_services_token_service_token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
          }];
        }, {
          notificPanel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "XsgX":
    /*!********************************************************************************!*\
      !*** ./src/app/shared/components/layouts/auth-layout/auth-layout.component.ts ***!
      \********************************************************************************/

    /*! exports provided: AuthLayoutComponent */

    /***/
    function XsgX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function () {
        return AuthLayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthLayoutComponent = /*#__PURE__*/function () {
        function AuthLayoutComponent(translate) {
          _classCallCheck(this, AuthLayoutComponent);

          this.translate = translate; // Translator init

          var browserLang = translate.getBrowserLang();
          translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
        }

        _createClass(AuthLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AuthLayoutComponent;
      }();

      AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) {
        return new (t || AuthLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]));
      };

      AuthLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthLayoutComponent,
        selectors: [["app-auth-layout"]],
        decls: 1,
        vars: 0,
        template: function AuthLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthLayoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-auth-layout',
            templateUrl: './auth-layout.component.html'
          }]
        }], function () {
          return [{
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "YyUd":
    /*!*******************************************************!*\
      !*** ./src/app/shared/pipes/get-value-by-key.pipe.ts ***!
      \*******************************************************/

    /*! exports provided: GetValueByKeyPipe */

    /***/
    function YyUd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GetValueByKeyPipe", function () {
        return GetValueByKeyPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var GetValueByKeyPipe = /*#__PURE__*/function () {
        function GetValueByKeyPipe() {
          _classCallCheck(this, GetValueByKeyPipe);
        }

        _createClass(GetValueByKeyPipe, [{
          key: "transform",
          value: function transform(value, id, property) {
            var filteredObj = value.find(function (item) {
              if (item.id !== undefined) {
                return item.id === id;
              }

              return false;
            });

            if (filteredObj) {
              return filteredObj[property];
            }
          }
        }]);

        return GetValueByKeyPipe;
      }();

      GetValueByKeyPipe.ɵfac = function GetValueByKeyPipe_Factory(t) {
        return new (t || GetValueByKeyPipe)();
      };

      GetValueByKeyPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "getValueByKey",
        type: GetValueByKeyPipe,
        pure: false
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetValueByKeyPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: "getValueByKey",
            pure: false
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: HttpLoaderFactory, AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
        return HttpLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.routing */
      "beVS");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shared/shared.module */
      "PCNd");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "mqiu");
      /* harmony import */


      var _shared_services_error_handler_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./shared/services/error-handler.service */
      "nAk8");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _shared_shared_material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./shared/shared-material.module */
      "zMWy"); // import { GestureConfig } from '@angular/material/core';
      //
      // AoT requires an exported function for factories


      function HttpLoaderFactory(httpClient) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](httpClient, "./assets/i18n/", ".json");
      }

      var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true
      };

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
          useClass: _shared_services_error_handler_service__WEBPACK_IMPORTED_MODULE_11__["ErrorHandlerService"]
        }, // { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
        {
          provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PERFECT_SCROLLBAR_CONFIG"],
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _shared_shared_material_module__WEBPACK_IMPORTED_MODULE_13__["SharedMaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot({
          preventDuplicates: true
        }), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
          }
        }), _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_5__["rootRouterConfig"], {
          useHash: true,
          relativeLinkResolution: 'legacy'
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _shared_shared_material_module__WEBPACK_IMPORTED_MODULE_13__["SharedMaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _shared_shared_material_module__WEBPACK_IMPORTED_MODULE_13__["SharedMaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot({
              preventDuplicates: true
            }), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
              loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                useFactory: HttpLoaderFactory,
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
              }
            }), _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_5__["rootRouterConfig"], {
              useHash: true,
              relativeLinkResolution: 'legacy'
            })],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            providers: [{
              provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
              useClass: _shared_services_error_handler_service__WEBPACK_IMPORTED_MODULE_11__["ErrorHandlerService"]
            }, // { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
            {
              provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PERFECT_SCROLLBAR_CONFIG"],
              useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "aYsj":
    /*!*****************************************************!*\
      !*** ./src/app/shared/pipes/shared-pipes.module.ts ***!
      \*****************************************************/

    /*! exports provided: SharedPipesModule */

    /***/
    function aYsj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedPipesModule", function () {
        return SharedPipesModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _relative_time_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./relative-time.pipe */
      "336X");
      /* harmony import */


      var _excerpt_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./excerpt.pipe */
      "IZEZ");
      /* harmony import */


      var _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./get-value-by-key.pipe */
      "YyUd");

      var pipes = [_relative_time_pipe__WEBPACK_IMPORTED_MODULE_2__["RelativeTimePipe"], _excerpt_pipe__WEBPACK_IMPORTED_MODULE_3__["ExcerptPipe"], _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_4__["GetValueByKeyPipe"]];

      var SharedPipesModule = /*#__PURE__*/_createClass(function SharedPipesModule() {
        _classCallCheck(this, SharedPipesModule);
      });

      SharedPipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SharedPipesModule
      });
      SharedPipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SharedPipesModule_Factory(t) {
          return new (t || SharedPipesModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedPipesModule, {
          declarations: [_relative_time_pipe__WEBPACK_IMPORTED_MODULE_2__["RelativeTimePipe"], _excerpt_pipe__WEBPACK_IMPORTED_MODULE_3__["ExcerptPipe"], _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_4__["GetValueByKeyPipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_relative_time_pipe__WEBPACK_IMPORTED_MODULE_2__["RelativeTimePipe"], _excerpt_pipe__WEBPACK_IMPORTED_MODULE_3__["ExcerptPipe"], _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_4__["GetValueByKeyPipe"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedPipesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: pipes,
            exports: pipes
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "beVS":
    /*!********************************!*\
      !*** ./src/app/app.routing.ts ***!
      \********************************/

    /*! exports provided: rootRouterConfig */

    /***/
    function beVS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "rootRouterConfig", function () {
        return rootRouterConfig;
      });
      /* harmony import */


      var _shared_components_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./shared/components/layouts/admin-layout/admin-layout.component */
      "hOig");
      /* harmony import */


      var _shared_components_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shared/components/layouts/auth-layout/auth-layout.component */
      "XsgX");
      /* harmony import */


      var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared/guards/auth.guard */
      "LjFu");

      var rootRouterConfig = [{
        path: '',
        redirectTo: 'sessions/signin',
        pathMatch: 'full'
      }, {
        path: '',
        component: _shared_components_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__["AuthLayoutComponent"],
        children: [{
          path: 'sessions',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-sessions-sessions-module */
            [__webpack_require__.e("default~views-maintenance-maintenance-module~views-others-others-module~views-sessions-sessions-module"), __webpack_require__.e("common"), __webpack_require__.e("views-sessions-sessions-module")]).then(__webpack_require__.bind(null,
            /*! ./views/sessions/sessions.module */
            "VVaf")).then(function (m) {
              return m.SessionsModule;
            });
          },
          data: {
            title: 'Session'
          }
        }]
      }, {
        path: '',
        component: _shared_components_layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"],
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: [{
          path: 'others',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-others-others-module */
            [__webpack_require__.e("default~views-others-others-module~views-settings-settings-module~views-video-verification-video-ver~6754191d"), __webpack_require__.e("default~views-maintenance-maintenance-module~views-others-others-module~views-sessions-sessions-module"), __webpack_require__.e("default~views-maintenance-maintenance-module~views-others-others-module"), __webpack_require__.e("default~views-others-others-module~views-video-verification-video-verification-module"), __webpack_require__.e("common"), __webpack_require__.e("views-others-others-module")]).then(__webpack_require__.bind(null,
            /*! ./views/others/others.module */
            "KVVp")).then(function (m) {
              return m.OthersModule;
            });
          }
        }, {
          path: 'settings',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-settings-settings-module */
            [__webpack_require__.e("default~views-others-others-module~views-settings-settings-module~views-video-verification-video-ver~6754191d"), __webpack_require__.e("views-settings-settings-module")]).then(__webpack_require__.bind(null,
            /*! ./views/settings/settings.module */
            "Ty4v")).then(function (m) {
              return m.SettingsModule;
            });
          }
        }, {
          path: 'video-verification',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-video-verification-video-verification-module */
            [__webpack_require__.e("default~views-others-others-module~views-settings-settings-module~views-video-verification-video-ver~6754191d"), __webpack_require__.e("default~views-others-others-module~views-video-verification-video-verification-module"), __webpack_require__.e("views-video-verification-video-verification-module")]).then(__webpack_require__.bind(null,
            /*! ./views/video-verification/video-verification.module */
            "Qc9N")).then(function (m) {
              return m.VideoVerificationModule;
            });
          }
        }, {
          path: 'maintenance',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-maintenance-maintenance-module */
            [__webpack_require__.e("default~views-maintenance-maintenance-module~views-others-others-module~views-sessions-sessions-module"), __webpack_require__.e("default~views-maintenance-maintenance-module~views-others-others-module"), __webpack_require__.e("views-maintenance-maintenance-module")]).then(__webpack_require__.bind(null,
            /*! ./views/maintenance/maintenance.module */
            "eXOA")).then(function (m) {
              return m.MaintenanceModule;
            });
          },
          data: {
            title: '',
            breadcrumb: ''
          }
        }]
      }, {
        path: '**',
        redirectTo: 'sessions/404'
      }];
      /***/
    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "hOig":
    /*!**********************************************************************************!*\
      !*** ./src/app/shared/components/layouts/admin-layout/admin-layout.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: AdminLayoutComponent */

    /***/
    function hOig(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function () {
        return AdminLayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _services_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/theme.service */
      "ETNk");
      /* harmony import */


      var _services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/layout.service */
      "rmxa");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/auth/jwt-auth.service */
      "nZzT");
      /* harmony import */


      var app_shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/shared/services/loader/loader.service */
      "sTnX");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../profile/profile.component */
      "P6Hk");
      /* harmony import */


      var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../notifications/notifications.component */
      "X2tk");
      /* harmony import */


      var _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../header-side/header-side.component */
      "Hkp+");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");

      function AdminLayoutComponent_app_header_side_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-side", 18);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notificPanel", _r6)("profilePanel", _r5);
        }
      }

      function AdminLayoutComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdminLayoutComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-bar", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdminLayoutComponent_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 25);
        }
      }

      function AdminLayoutComponent_app_footer_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-footer", 26);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "visible": a0
        };
      };

      var AdminLayoutComponent = /*#__PURE__*/function () {
        function AdminLayoutComponent(router, translate, themeService, layout, cdr, jwtAuth, loaderService) {
          var _this16 = this;

          _classCallCheck(this, AdminLayoutComponent);

          this.router = router;
          this.translate = translate;
          this.themeService = themeService;
          this.layout = layout;
          this.cdr = cdr;
          this.jwtAuth = jwtAuth;
          this.loaderService = loaderService;
          this.isModuleLoading = false;
          this.scrollConfig = {};
          this.layoutConf = {};
          this.adminContainerClasses = {}; // Close sidenav after route change in mobile

          this.routerEventSub = router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
          })).subscribe(function (routeChange) {
            _this16.layout.adjustLayout({
              route: routeChange.url
            });

            _this16.scrollToTop();
          }); // Translator init

          var browserLang = translate.getBrowserLang();
          translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
        }

        _createClass(AdminLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            // this.layoutConf = this.layout.layoutConf;
            this.layoutConfSub = this.layout.layoutConf$.subscribe(function (layoutConf) {
              _this17.layoutConf = layoutConf; // console.log(this.layoutConf);

              _this17.adminContainerClasses = _this17.updateAdminContainerClasses(_this17.layoutConf);

              _this17.cdr.markForCheck();
            }); // FOR MODULE LOADER FLAG

            this.moduleLoaderSub = this.router.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadStart"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["ResolveStart"]) {
                _this17.isModuleLoading = true;
              }

              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["ResolveEnd"]) {
                _this17.isModuleLoading = false;
              }
            });
          }
        }, {
          key: "onResize",
          value: function onResize(event) {
            this.layout.adjustLayout(event);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "scrollToTop",
          value: function scrollToTop() {
            var _this18 = this;

            if (document) {
              setTimeout(function () {
                var element;

                if (_this18.layoutConf.topbarFixed) {
                  element = document.querySelector('#rightside-content-hold');
                } else {
                  element = document.querySelector('#main-content-wrap');
                }

                element.scrollTop = 0;
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.moduleLoaderSub) {
              this.moduleLoaderSub.unsubscribe();
            }

            if (this.layoutConfSub) {
              this.layoutConfSub.unsubscribe();
            }

            if (this.routerEventSub) {
              this.routerEventSub.unsubscribe();
            }
          }
        }, {
          key: "closeSidebar",
          value: function closeSidebar() {
            this.layout.publishLayoutChange({
              sidebarStyle: 'closed'
            });
          }
        }, {
          key: "sidebarMouseenter",
          value: function sidebarMouseenter(e) {
            // console.log(this.layoutConf);
            if (this.layoutConf.sidebarStyle === 'compact') {
              this.layout.publishLayoutChange({
                sidebarStyle: 'full'
              }, {
                transitionClass: true
              });
            }
          }
        }, {
          key: "sidebarMouseleave",
          value: function sidebarMouseleave(e) {
            // console.log(this.layoutConf);
            if (this.layoutConf.sidebarStyle === 'full' && this.layoutConf.sidebarCompactToggle) {
              this.layout.publishLayoutChange({
                sidebarStyle: 'compact'
              }, {
                transitionClass: true
              });
            }
          }
        }, {
          key: "updateAdminContainerClasses",
          value: function updateAdminContainerClasses(layoutConf) {
            return {
              'navigation-top': layoutConf.navigationPos === 'top',
              'sidebar-full': layoutConf.sidebarStyle === 'full',
              'sidebar-compact': layoutConf.sidebarStyle === 'compact' && layoutConf.navigationPos === 'side',
              'compact-toggle-active': layoutConf.sidebarCompactToggle,
              'sidebar-compact-big': layoutConf.sidebarStyle === 'compact-big' && layoutConf.navigationPos === 'side',
              'sidebar-opened': layoutConf.sidebarStyle !== 'closed' && layoutConf.navigationPos === 'side',
              'sidebar-closed': layoutConf.sidebarStyle === 'closed',
              'fixed-topbar': layoutConf.topbarFixed && layoutConf.navigationPos === 'side'
            };
          }
        }]);

        return AdminLayoutComponent;
      }();

      AdminLayoutComponent.ɵfac = function AdminLayoutComponent_Factory(t) {
        return new (t || AdminLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_6__["JwtAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]));
      };

      AdminLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdminLayoutComponent,
        selectors: [["app-admin-layout"]],
        hostBindings: function AdminLayoutComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AdminLayoutComponent_resize_HostBindingHandler($event) {
              return ctx.onResize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
          }
        },
        decls: 23,
        vars: 23,
        consts: [[1, "app-admin-wrap", 3, "dir"], [3, "dir", "ngClass"], ["id", "main-content-wrap", 1, "main-content-wrap", 3, "perfectScrollbar", "disabled"], [3, "notificPanel", "profilePanel", 4, "ngIf"], ["id", "rightside-content-hold", 1, "rightside-content-hold", 3, "perfectScrollbar", "disabled"], ["class", "view-loader", "style", "position:fixed;", "fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], ["style", "\n        position:fixed;\n        width:100%;\n        z-index:99;\n        padding-top: 12px;\n        margin-left: -15px;\n        ", 4, "ngIf"], [1, "container-dynamic"], ["class", "m-auto", 4, "ngIf"], ["style", "margin: 0 -.33rem -.33rem", 4, "ngIf"], [1, "sidebar-backdrop", 3, "ngClass", "click"], ["mode", "over", "position", "top", 1, "right-side"], ["profilePagePanel", ""], ["fxLayout", "column", 1, "nofication-panel"], [3, "profilePanel"], ["mode", "over", "position", "end", 1, "left-side"], ["notificationPanel", ""], [3, "notificPanel"], [3, "notificPanel", "profilePanel"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "view-loader", 2, "position", "fixed"], [1, "spinner"], [1, "double-bounce1", "mat-bg-accent"], [1, "double-bounce2", "mat-bg-primary"], [2, "position", "fixed", "width", "100%", "z-index", "99", "padding-top", "12px", "margin-left", "-15px"], ["mode", "indeterminate"], [1, "m-auto"], [2, "margin", "0 -.33rem -.33rem"]],
        template: function AdminLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdminLayoutComponent_app_header_side_4_Template, 1, 2, "app-header-side", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AdminLayoutComponent_div_6_Template, 4, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminLayoutComponent_div_7_Template, 2, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AdminLayoutComponent_span_12_Template, 1, 0, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AdminLayoutComponent_app_footer_13_Template, 1, 0, "app-footer", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminLayoutComponent_Template_div_click_14_listener() {
              return ctx.closeSidebar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-sidenav", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-profile", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-sidenav", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-notifications", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dir", ctx.layoutConf == null ? null : ctx.layoutConf.dir);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate3"]("app-admin-container app-side-nav-container mat-drawer-transition sidebar-", ctx.layoutConf == null ? null : ctx.layoutConf.sidebarColor, " topbar-", ctx.layoutConf == null ? null : ctx.layoutConf.topbarColor, " footer-", ctx.layoutConf == null ? null : ctx.layoutConf.footerColor, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dir", ctx.layoutConf.dir)("ngClass", ctx.adminContainerClasses);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.layoutConf.topbarFixed || !ctx.layoutConf.perfectScrollbar);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.navigationPos === "side");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx.scrollConfig)("disabled", !ctx.layoutConf.topbarFixed || !ctx.layoutConf.perfectScrollbar);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isModuleLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 19, ctx.loaderService.isLoading));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.layoutConf.footerFixed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.layoutConf.footerFixed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.layoutConf.sidebarStyle !== "closed" && ctx.layoutConf.isMobile));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("profilePanel", _r5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notificPanel", _r6);
          }
        },
        directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Dir"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavContainer"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavContent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenav"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutDirective"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__["NotificationsComponent"], _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_17__["HeaderSideComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutAlignDirective"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__["MatProgressBar"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminLayoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-admin-layout',
            templateUrl: './admin-layout.template.html'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
          }, {
            type: _services_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"]
          }, {
            type: _services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_6__["JwtAuthService"]
          }, {
            type: app_shared_services_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__["LoaderService"]
          }];
        }, {
          onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "iSAc":
    /*!****************************************************************************************!*\
      !*** ./src/app/shared/directives/egret-sidenav-helper/egret-sidenav-helper.service.ts ***!
      \****************************************************************************************/

    /*! exports provided: EgretSidenavHelperService */

    /***/
    function iSAc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EgretSidenavHelperService", function () {
        return EgretSidenavHelperService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EgretSidenavHelperService = /*#__PURE__*/function () {
        function EgretSidenavHelperService() {
          _classCallCheck(this, EgretSidenavHelperService);

          this.sidenavList = [];
        }

        _createClass(EgretSidenavHelperService, [{
          key: "setSidenav",
          value: function setSidenav(id, sidenav) {
            this.sidenavList[id] = sidenav;
          }
        }, {
          key: "getSidenav",
          value: function getSidenav(id) {
            return this.sidenavList[id];
          }
        }]);

        return EgretSidenavHelperService;
      }();

      EgretSidenavHelperService.ɵfac = function EgretSidenavHelperService_Factory(t) {
        return new (t || EgretSidenavHelperService)();
      };

      EgretSidenavHelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: EgretSidenavHelperService,
        factory: EgretSidenavHelperService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EgretSidenavHelperService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "iiaH":
    /*!*************************************************!*\
      !*** ./src/app/shared/services/data.service.ts ***!
      \*************************************************/

    /*! exports provided: DataService */

    /***/
    function iiaH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataService", function () {
        return DataService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var DataService = /*#__PURE__*/function () {
        function DataService() {
          _classCallCheck(this, DataService);

          this.auditLogData = {};
          this.paramSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.getNavParam = this.paramSource.asObservable();
          this.searchItem = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.getSearchItem = this.searchItem.asObservable();
          this.sendCustomerId = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("");
          this.getCustomerId = this.sendCustomerId.asObservable();
          this.item = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.getBankItem = this.item.asObservable();
          this.navSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.currentNav = this.navSource.asObservable();
          this.items = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.getTillVaultMap = this.items.asObservable();
          this.vaultStatus = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.getTillVaultStatus = this.vaultStatus.asObservable();
          this.TrxnCashStatus = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.getTrxnCashMaster = this.TrxnCashStatus.asObservable();
          this.denomMasterStatus = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.getDenomMasterStatus = this.denomMasterStatus.asObservable();
          this.CcyBalStatus = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.getCcyBal = this.CcyBalStatus.asObservable();
          this.accTypeStatus = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.getAccType = this.accTypeStatus.asObservable();
          this.baseDenomStatus = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.getBaseDenom = this.baseDenomStatus.asObservable();
          this.vaultConfig = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.getTillVaultConfig = this.vaultConfig.asObservable();
          this.menuSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("");
          this.getMenus = this.menuSource.asObservable();
          this.childMenuData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.subjectOfIcustUser = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }

        _createClass(DataService, [{
          key: "getchildMenuDetails",
          value: function getchildMenuDetails() {
            return this.childMenuData.asObservable();
          }
        }, {
          key: "setchildMenuDetails",
          value: function setchildMenuDetails(childMenuData) {
            this.childMenuData.next(childMenuData);
          }
        }, {
          key: "changeNav",
          value: function changeNav(message) {
            this.navSource.next(message);
          }
        }, {
          key: "sendNavParam",
          value: function sendNavParam(params) {
            this.paramSource.next(params);
          }
        }, {
          key: "shareSearchItem",
          value: function shareSearchItem(params) {
            this.searchItem.next(params);
          }
        }, {
          key: "shareCustomerId",
          value: function shareCustomerId(customerId) {
            this.sendCustomerId.next(customerId);
          }
        }, {
          key: "shareBankItem",
          value: function shareBankItem(item) {
            this.item.next(item);
          }
        }, {
          key: "setAuditLogData",
          value: function setAuditLogData(data) {
            console.log(data);
            this.auditLogData = data;
          }
        }, {
          key: "getAuditLogData",
          value: function getAuditLogData() {
            return this.auditLogData;
          }
        }, {
          key: "sendClickEvent",
          value: function sendClickEvent() {
            this.subject.next();
          }
        }, {
          key: "getClickEvent",
          value: function getClickEvent() {
            return this.subject.asObservable();
          }
        }, {
          key: "shareAccTypeItem",
          value: function shareAccTypeItem(item) {
            this.item.next(item);
          }
        }, {
          key: "shareTillVaultItem",
          value: function shareTillVaultItem(item) {
            this.item.next(item);
          }
        }, {
          key: "shareTillVaultStatus",
          value: function shareTillVaultStatus(item) {
            this.item.next(item);
          }
        }, {
          key: "onChangeOfIcustUser",
          value: function onChangeOfIcustUser(value) {
            this.subjectOfIcustUser.next(value);
          }
        }, {
          key: "getIcustUser",
          value: function getIcustUser() {
            return this.subjectOfIcustUser.asObservable();
          }
        }]);

        return DataService;
      }();

      DataService.ɵfac = function DataService_Factory(t) {
        return new (t || DataService)();
      };

      DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DataService,
        factory: DataService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "j/fj":
    /*!**************************************************************!*\
      !*** ./src/app/shared/services/voice-recognition.service.ts ***!
      \**************************************************************/

    /*! exports provided: VoiceRecognitionService */

    /***/
    function jFj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VoiceRecognitionService", function () {
        return VoiceRecognitionService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var VoiceRecognitionService = /*#__PURE__*/function () {
        function VoiceRecognitionService() {
          _classCallCheck(this, VoiceRecognitionService);

          this.recognition = new webkitSpeechRecognition();
          this.isStoppedSpeechRecog = false;
          this.text = '';
          this.speechStop = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }

        _createClass(VoiceRecognitionService, [{
          key: "init",
          value: function init() {
            var _this19 = this;

            this.recognition.interimResults = true;
            this.recognition.lang = 'en-US';
            this.recognition.addEventListener('result', function (e) {
              var transcript = Array.from(e.results).map(function (result) {
                return result[0];
              }).map(function (result) {
                return result.transcript;
              }).join('');
              _this19.tempWords = transcript;
              console.log(transcript, "first one, tempword", _this19.tempWords);
            });
          }
        }, {
          key: "start",
          value: function start() {
            var _this20 = this;

            this.tempWords = '';
            this.isStoppedSpeechRecog = false;
            this.recognition.start();
            console.log("Speech recognition started");
            this.recognition.addEventListener('end', function (condition) {
              console.log(condition);

              _this20.pauseTimer();

              if (_this20.isStoppedSpeechRecog) {
                _this20.recognition.stop();

                _this20.wordConcat(); // this.text =  this.tempWords;


                console.log("End speech recognition");
              } else {
                // this.wordConcat();
                _this20.text = _this20.tempWords;

                _this20.startTimer();
              }
            });
          }
        }, {
          key: "stop",
          value: function stop() {
            this.pauseTimer();
            this.isStoppedSpeechRecog = true;
            this.recognition.stop();
            this.speechStop.next(true);
            console.log("End speech recognition");
          }
        }, {
          key: "wordConcat",
          value: function wordConcat() {
            this.text = this.tempWords;
            this.tempWords = '';
            console.log(" Last binding text", this.text);
          }
        }, {
          key: "startTimer",
          value: function startTimer() {
            var _this21 = this;

            this.interval = setInterval(function () {
              _this21.stop();
            }, 1000);
          }
        }, {
          key: "pauseTimer",
          value: function pauseTimer() {
            clearInterval(this.interval);
          }
        }]);

        return VoiceRecognitionService;
      }();

      VoiceRecognitionService.ɵfac = function VoiceRecognitionService_Factory(t) {
        return new (t || VoiceRecognitionService)();
      };

      VoiceRecognitionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: VoiceRecognitionService,
        factory: VoiceRecognitionService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoiceRecognitionService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "jgPy":
    /*!***************************************************************!*\
      !*** ./src/app/shared/components/shared-components.module.ts ***!
      \***************************************************************/

    /*! exports provided: SharedComponentsModule */

    /***/
    function jgPy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedComponentsModule", function () {
        return SharedComponentsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared-material.module */
      "zMWy");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/shared-pipes.module */
      "aYsj");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../directives/shared-directives.module */
      "mnDI");
      /* harmony import */


      var _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./header-side/header-side.component */
      "Hkp+");
      /* harmony import */


      var _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./sidebar-side/sidebar-side.component */
      "UnY0");
      /* harmony import */


      var _header_top_header_top_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./header-top/header-top.component */
      "urBs");
      /* harmony import */


      var _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./sidebar-top/sidebar-top.component */
      "s0uO");
      /* harmony import */


      var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./layouts/admin-layout/admin-layout.component */
      "hOig");
      /* harmony import */


      var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./layouts/auth-layout/auth-layout.component */
      "XsgX");
      /* harmony import */


      var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./notifications/notifications.component */
      "X2tk");
      /* harmony import */


      var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./sidenav/sidenav.component */
      "TgYD");
      /* harmony import */


      var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../services/app-confirm/app-confirm.component */
      "3BvT");
      /* harmony import */


      var _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../services/app-loader/app-loader.component */
      "5alQ");
      /* harmony import */


      var _button_loading_button_loading_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./button-loading/button-loading.component */
      "wl2U");
      /* harmony import */


      var _bottom_sheet_share_bottom_sheet_share_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./bottom-sheet-share/bottom-sheet-share.component */
      "qj9C");
      /* harmony import */


      var _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./date-picker/date-picker.component */
      "+MiJ");
      /* harmony import */


      var _input_input_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./input/input.component */
      "QlUG");
      /* harmony import */


      var _profile_profile_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./profile/profile.component */
      "P6Hk");
      /* harmony import */


      var _speech_recognition_speech_recognition_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./speech-recognition/speech-recognition.component */
      "w8r1");
      /* harmony import */


      var _egret_sidebar_egret_sidebar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./egret-sidebar/egret-sidebar.component */
      "l3Mw"); // ONLY REQUIRED FOR **SIDE** NAVIGATION LAYOUT
      // ONLY REQUIRED FOR **TOP** NAVIGATION LAYOUT
      // ALWAYS REQUIRED 


      var components = [_header_top_header_top_component__WEBPACK_IMPORTED_MODULE_12__["HeaderTopComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_25__["ProfileComponent"], _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_13__["SidebarTopComponent"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__["SidenavComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__["NotificationsComponent"], _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_11__["SidebarSideComponent"], _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_10__["HeaderSideComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_14__["AdminLayoutComponent"], _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_15__["AuthLayoutComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__["BreadcrumbComponent"], _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_19__["AppComfirmComponent"], _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_20__["AppLoaderComponent"], _button_loading_button_loading_component__WEBPACK_IMPORTED_MODULE_21__["ButtonLoadingComponent"], _bottom_sheet_share_bottom_sheet_share_component__WEBPACK_IMPORTED_MODULE_22__["BottomSheetShareComponent"], _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_23__["DatePickerComponent"], _input_input_component__WEBPACK_IMPORTED_MODULE_24__["InputComponent"], _speech_recognition_speech_recognition_component__WEBPACK_IMPORTED_MODULE_26__["SpeechRecognitionComponent"], _egret_sidebar_egret_sidebar_component__WEBPACK_IMPORTED_MODULE_27__["EgretSidebarComponent"]];

      var SharedComponentsModule = /*#__PURE__*/_createClass(function SharedComponentsModule() {
        _classCallCheck(this, SharedComponentsModule);
      });

      SharedComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SharedComponentsModule
      });
      SharedComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SharedComponentsModule_Factory(t) {
          return new (t || SharedComponentsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"], _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_7__["SharedPipesModule"], _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_9__["SharedDirectivesModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_2__["SharedMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedComponentsModule, {
          declarations: [_header_top_header_top_component__WEBPACK_IMPORTED_MODULE_12__["HeaderTopComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_25__["ProfileComponent"], _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_13__["SidebarTopComponent"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__["SidenavComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__["NotificationsComponent"], _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_11__["SidebarSideComponent"], _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_10__["HeaderSideComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_14__["AdminLayoutComponent"], _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_15__["AuthLayoutComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__["BreadcrumbComponent"], _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_19__["AppComfirmComponent"], _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_20__["AppLoaderComponent"], _button_loading_button_loading_component__WEBPACK_IMPORTED_MODULE_21__["ButtonLoadingComponent"], _bottom_sheet_share_bottom_sheet_share_component__WEBPACK_IMPORTED_MODULE_22__["BottomSheetShareComponent"], _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_23__["DatePickerComponent"], _input_input_component__WEBPACK_IMPORTED_MODULE_24__["InputComponent"], _speech_recognition_speech_recognition_component__WEBPACK_IMPORTED_MODULE_26__["SpeechRecognitionComponent"], _egret_sidebar_egret_sidebar_component__WEBPACK_IMPORTED_MODULE_27__["EgretSidebarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"], _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_7__["SharedPipesModule"], _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_9__["SharedDirectivesModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_2__["SharedMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
          exports: [_header_top_header_top_component__WEBPACK_IMPORTED_MODULE_12__["HeaderTopComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_25__["ProfileComponent"], _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_13__["SidebarTopComponent"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__["SidenavComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__["NotificationsComponent"], _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_11__["SidebarSideComponent"], _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_10__["HeaderSideComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_14__["AdminLayoutComponent"], _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_15__["AuthLayoutComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__["BreadcrumbComponent"], _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_19__["AppComfirmComponent"], _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_20__["AppLoaderComponent"], _button_loading_button_loading_component__WEBPACK_IMPORTED_MODULE_21__["ButtonLoadingComponent"], _bottom_sheet_share_bottom_sheet_share_component__WEBPACK_IMPORTED_MODULE_22__["BottomSheetShareComponent"], _date_picker_date_picker_component__WEBPACK_IMPORTED_MODULE_23__["DatePickerComponent"], _input_input_component__WEBPACK_IMPORTED_MODULE_24__["InputComponent"], _speech_recognition_speech_recognition_component__WEBPACK_IMPORTED_MODULE_26__["SpeechRecognitionComponent"], _egret_sidebar_egret_sidebar_component__WEBPACK_IMPORTED_MODULE_27__["EgretSidebarComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedComponentsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"], _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_7__["SharedPipesModule"], _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_9__["SharedDirectivesModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_2__["SharedMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
            declarations: components,
            exports: components
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "l3Mw":
    /*!****************************************************************************!*\
      !*** ./src/app/shared/components/egret-sidebar/egret-sidebar.component.ts ***!
      \****************************************************************************/

    /*! exports provided: EgretSidebarComponent, EgretSidebarTogglerDirective */

    /***/
    function l3Mw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EgretSidebarComponent", function () {
        return EgretSidebarComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EgretSidebarTogglerDirective", function () {
        return EgretSidebarTogglerDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var app_shared_services_match_media_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! app/shared/services/match-media.service */
      "30N5");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _egret_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./egret-sidebar-helper.service */
      "slWk");

      var _c0 = ["*"];

      var EgretSidebarComponent = /*#__PURE__*/function () {
        function EgretSidebarComponent(matchMediaService, mediaObserver, sidebarHelperService, _renderer, _elementRef, cdr) {
          _classCallCheck(this, EgretSidebarComponent);

          this.matchMediaService = matchMediaService;
          this.mediaObserver = mediaObserver;
          this.sidebarHelperService = sidebarHelperService;
          this._renderer = _renderer;
          this._elementRef = _elementRef;
          this.cdr = cdr;
          this.backdrop = null;
          this.lockedBreakpoint = "gt-sm";
          this.unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        }

        _createClass(EgretSidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this22 = this;

            this.sidebarHelperService.setSidebar(this.name, this);

            if (this.mediaObserver.isActive(this.lockedBreakpoint)) {
              this.sidebarLockedOpen = true;
              this.opened = true;
            } else {
              this.sidebarLockedOpen = false;
              this.opened = false;
            }

            this.matchMediaService.onMediaChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribeAll)).subscribe(function () {
              // console.log("medua sub");
              if (_this22.mediaObserver.isActive(_this22.lockedBreakpoint)) {
                _this22.sidebarLockedOpen = true;
                _this22.opened = true;
              } else {
                _this22.sidebarLockedOpen = false;
                _this22.opened = false;
              }
            });
          }
        }, {
          key: "open",
          value: function open() {
            this.opened = true;

            if (!this.sidebarLockedOpen && !this.backdrop) {
              this.showBackdrop();
            }
          }
        }, {
          key: "close",
          value: function close() {
            this.opened = false;
            this.hideBackdrop();
          }
        }, {
          key: "toggle",
          value: function toggle() {
            if (this.opened) {
              this.close();
            } else {
              this.open();
            }
          }
        }, {
          key: "showBackdrop",
          value: function showBackdrop() {
            var _this23 = this;

            this.backdrop = this._renderer.createElement("div");
            this.backdrop.classList.add("egret-sidebar-overlay");

            this._renderer.appendChild(this._elementRef.nativeElement.parentElement, this.backdrop); // Close sidebar onclick


            this.backdrop.addEventListener("click", function () {
              _this23.close();
            });
            this.cdr.markForCheck();
          }
        }, {
          key: "hideBackdrop",
          value: function hideBackdrop() {
            if (this.backdrop) {
              this.backdrop.parentNode.removeChild(this.backdrop);
              this.backdrop = null;
            }

            this.cdr.markForCheck();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscribeAll.next();
            this.unsubscribeAll.complete();
            this.sidebarHelperService.removeSidebar(this.name);
          }
        }]);

        return EgretSidebarComponent;
      }();

      EgretSidebarComponent.ɵfac = function EgretSidebarComponent_Factory(t) {
        return new (t || EgretSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_match_media_service__WEBPACK_IMPORTED_MODULE_1__["MatchMediaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_egret_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_5__["EgretSidebarHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      EgretSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EgretSidebarComponent,
        selectors: [["egret-sidebar"]],
        hostVars: 8,
        hostBindings: function EgretSidebarComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("position-right", ctx.right)("open", ctx.opened)("sidebar-locked-open", ctx.sidebarLockedOpen)("is-over", ctx.isOver);
          }
        },
        inputs: {
          name: "name",
          right: "right"
        },
        ngContentSelectors: _c0,
        decls: 2,
        vars: 0,
        template: function EgretSidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZ3JldC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EgretSidebarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "egret-sidebar",
            templateUrl: "./egret-sidebar.component.html",
            styleUrls: ["./egret-sidebar.component.scss"]
          }]
        }], function () {
          return [{
            type: app_shared_services_match_media_service__WEBPACK_IMPORTED_MODULE_1__["MatchMediaService"]
          }, {
            type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"]
          }, {
            type: _egret_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_5__["EgretSidebarHelperService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          right: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.position-right"]
          }],
          opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.open"]
          }],
          sidebarLockedOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.sidebar-locked-open"]
          }],
          isOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.is-over"]
          }]
        });
      })();

      var EgretSidebarTogglerDirective = /*#__PURE__*/function () {
        function EgretSidebarTogglerDirective(egretSidebarHelperService) {
          _classCallCheck(this, EgretSidebarTogglerDirective);

          this.egretSidebarHelperService = egretSidebarHelperService;
        }

        _createClass(EgretSidebarTogglerDirective, [{
          key: "onClick",
          value: function onClick() {
            this.egretSidebarHelperService.getSidebar(this.id).toggle();
          }
        }]);

        return EgretSidebarTogglerDirective;
      }();

      EgretSidebarTogglerDirective.ɵfac = function EgretSidebarTogglerDirective_Factory(t) {
        return new (t || EgretSidebarTogglerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_egret_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_5__["EgretSidebarHelperService"]));
      };

      EgretSidebarTogglerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: EgretSidebarTogglerDirective,
        selectors: [["", "egretSidebarToggler", ""]],
        hostBindings: function EgretSidebarTogglerDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EgretSidebarTogglerDirective_click_HostBindingHandler() {
              return ctx.onClick();
            });
          }
        },
        inputs: {
          id: ["egretSidebarToggler", "id"]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EgretSidebarTogglerDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: "[egretSidebarToggler]"
          }]
        }], function () {
          return [{
            type: _egret_sidebar_helper_service__WEBPACK_IMPORTED_MODULE_5__["EgretSidebarHelperService"]
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["egretSidebarToggler"]
          }],
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["click"]
          }]
        });
      })();
      /***/

    },

    /***/
    "mnDI":
    /*!***************************************************************!*\
      !*** ./src/app/shared/directives/shared-directives.module.ts ***!
      \***************************************************************/

    /*! exports provided: SharedDirectivesModule */

    /***/
    function mnDI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedDirectivesModule", function () {
        return SharedDirectivesModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _scroll_to_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./scroll-to.directive */
      "GyvL");
      /* harmony import */


      var _dropdown_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dropdown.directive */
      "Bp9c");
      /* harmony import */


      var _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./dropdown-anchor.directive */
      "r/oB");
      /* harmony import */


      var _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dropdown-link.directive */
      "UGQK");
      /* harmony import */


      var _egret_side_nav_toggle_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./egret-side-nav-toggle.directive */
      "/1WF");
      /* harmony import */


      var _egret_sidenav_helper_egret_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./egret-sidenav-helper/egret-sidenav-helper.directive */
      "qrO7");

      var directives = [_scroll_to_directive__WEBPACK_IMPORTED_MODULE_2__["ScrollToDirective"], _dropdown_directive__WEBPACK_IMPORTED_MODULE_3__["AppDropdownDirective"], _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_4__["DropdownAnchorDirective"], _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_5__["DropdownLinkDirective"], _egret_side_nav_toggle_directive__WEBPACK_IMPORTED_MODULE_6__["EgretSideNavToggleDirective"], _egret_sidenav_helper_egret_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_7__["EgretSidenavHelperDirective"], _egret_sidenav_helper_egret_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_7__["EgretSidenavTogglerDirective"]];

      var SharedDirectivesModule = /*#__PURE__*/_createClass(function SharedDirectivesModule() {
        _classCallCheck(this, SharedDirectivesModule);
      });

      SharedDirectivesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SharedDirectivesModule
      });
      SharedDirectivesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SharedDirectivesModule_Factory(t) {
          return new (t || SharedDirectivesModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedDirectivesModule, {
          declarations: [_scroll_to_directive__WEBPACK_IMPORTED_MODULE_2__["ScrollToDirective"], _dropdown_directive__WEBPACK_IMPORTED_MODULE_3__["AppDropdownDirective"], _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_4__["DropdownAnchorDirective"], _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_5__["DropdownLinkDirective"], _egret_side_nav_toggle_directive__WEBPACK_IMPORTED_MODULE_6__["EgretSideNavToggleDirective"], _egret_sidenav_helper_egret_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_7__["EgretSidenavHelperDirective"], _egret_sidenav_helper_egret_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_7__["EgretSidenavTogglerDirective"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_scroll_to_directive__WEBPACK_IMPORTED_MODULE_2__["ScrollToDirective"], _dropdown_directive__WEBPACK_IMPORTED_MODULE_3__["AppDropdownDirective"], _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_4__["DropdownAnchorDirective"], _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_5__["DropdownLinkDirective"], _egret_side_nav_toggle_directive__WEBPACK_IMPORTED_MODULE_6__["EgretSideNavToggleDirective"], _egret_sidenav_helper_egret_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_7__["EgretSidenavHelperDirective"], _egret_sidenav_helper_egret_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_7__["EgretSidenavTogglerDirective"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedDirectivesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: directives,
            exports: directives
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "nAk8":
    /*!**********************************************************!*\
      !*** ./src/app/shared/services/error-handler.service.ts ***!
      \**********************************************************/

    /*! exports provided: ErrorHandlerService */

    /***/
    function nAk8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorHandlerService", function () {
        return ErrorHandlerService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ErrorHandlerService = /*#__PURE__*/function (_angular_core__WEBPAC) {
        _inherits(ErrorHandlerService, _angular_core__WEBPAC);

        var _super = _createSuper(ErrorHandlerService);

        function ErrorHandlerService(injector) {
          var _this24;

          _classCallCheck(this, ErrorHandlerService);

          _this24 = _super.call(this);
          _this24.injector = injector;
          _this24.errorCount = 0;
          return _this24;
        } // https://github.com/angular/angular/issues/17010


        _createClass(ErrorHandlerService, [{
          key: "handleError",
          value: function handleError(error) {
            var increment = 5;
            var max = 50; // Prevents change detection

            var debugCtx = error['ngDebugContext'];
            var changeDetectorRef = debugCtx && debugCtx.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]);
            if (changeDetectorRef) changeDetectorRef.detach();
            this.errorCount = this.errorCount + 1;

            if (this.errorCount % increment === 0) {
              console.log(' ');
              console.log("errorHandler() was called ".concat(this.errorCount, " times."));
              console.log(' ');

              _get(_getPrototypeOf(ErrorHandlerService.prototype), "handleError", this).call(this, error);

              if (this.errorCount === max) {
                console.log(' ');
                console.log("Preventing recursive error after ".concat(this.errorCount, " recursive errors."));
                console.log(' ');
                var appRef = this.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]);
                appRef.tick();
              }
            } else if (this.errorCount === 1) {
              _get(_getPrototypeOf(ErrorHandlerService.prototype), "handleError", this).call(this, error);
            }
          }
        }]);

        return ErrorHandlerService;
      }(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]);

      ErrorHandlerService.ɵfac = function ErrorHandlerService_Factory(t) {
        return new (t || ErrorHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
      };

      ErrorHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ErrorHandlerService,
        factory: ErrorHandlerService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorHandlerService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "nZzT":
    /*!**********************************************************!*\
      !*** ./src/app/shared/services/auth/jwt-auth.service.ts ***!
      \**********************************************************/

    /*! exports provided: JwtAuthService */

    /***/
    function nZzT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JwtAuthService", function () {
        return JwtAuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _local_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../local-store.service */
      "tZUg");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! environments/environment */
      "AytR");

      var JwtAuthService = /*#__PURE__*/function () {
        function JwtAuthService(ls, http, router, route) {
          var _this25 = this;

          _classCallCheck(this, JwtAuthService);

          this.ls = ls;
          this.http = http;
          this.router = router;
          this.route = route;
          this.user = {};
          this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.user);
          this.APP_USER = "ICUST_USER";
          this.baseUrl = environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].DESKTOP_URL;
          this.route.queryParams.subscribe(function (params) {
            return _this25["return"] = params['return'] || '/';
          });
        }

        _createClass(JwtAuthService, [{
          key: "signout",
          value: function signout() {
            this.setUserAndToken(null, false);
            this.ls.setItem("notification", false);
            this.ls.setItem("browserId", null);
            this.ls.setItem("denomRequired", null);
            this.router.navigateByUrl("sessions/signin");
          }
        }, {
          key: "isLoggedIn",
          value: function isLoggedIn() {
            return !!this.getAuthStatus();
          }
        }, {
          key: "getAuthStatus",
          value: function getAuthStatus() {
            return this.ls.getItem('isAuthenticated');
          }
        }, {
          key: "getUser",
          value: function getUser() {
            return this.ls.getItem(this.APP_USER);
          }
        }, {
          key: "encodeData",
          value: function encodeData(data) {
            return btoa(data);
          }
        }, {
          key: "decodeData",
          value: function decodeData(data) {
            return atob(data);
          }
        }, {
          key: "getEncryptedToken",
          value: function getEncryptedToken() {
            var user = this.getUser();
            var encodedUser = this.encodeData(JSON.stringify(user));
            return encodedUser;
          }
        }, {
          key: "getAccessToken",
          value: function getAccessToken() {
            var _a;

            var user = this.getUser();
            var accessToken = (_a = user['jwtResp']) === null || _a === void 0 ? void 0 : _a.accessToken;

            if (accessToken != null) {
              return accessToken || null;
            }
          }
        }, {
          key: "setUserAndToken",
          value: function setUserAndToken(user, isAuthenticated) {
            this.isAuthenticated = isAuthenticated;
            this.ls.setItem("isAuthenticated", isAuthenticated);
            this.ls.setItem(this.APP_USER, user);
            this.user$.next(user);
          }
        }, {
          key: "loginIcut",
          value: function loginIcut(login) {
            return this.http.post("".concat(this.baseUrl, "/loginApi/credentials"), login);
          }
        }]);

        return JwtAuthService;
      }();

      JwtAuthService.ɵfac = function JwtAuthService_Factory(t) {
        return new (t || JwtAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_local_store_service__WEBPACK_IMPORTED_MODULE_1__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
      };

      JwtAuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: JwtAuthService,
        factory: JwtAuthService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtAuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [{
            type: _local_store_service__WEBPACK_IMPORTED_MODULE_1__["LocalStoreService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ngOV":
    /*!****************************************!*\
      !*** ./src/app/config/app.constant.ts ***!
      \****************************************/

    /*! exports provided: AppConstants */

    /***/
    function ngOV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppConstants", function () {
        return AppConstants;
      });
      /* harmony import */


      var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! environments/environment */
      "AytR");

      var AppConstants = /*#__PURE__*/function () {
        function AppConstants() {
          _classCallCheck(this, AppConstants);
        }

        _createClass(AppConstants, null, [{
          key: "baseURL",
          get:
          /*
          *Base URL is not used anywhere so dont change it and dont delete it
          */
          function get() {
            return environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].DESKTOP_URL;
          }
        }]);

        return AppConstants;
      }();
      /***/

    },

    /***/
    "nm5K":
    /*!************************************************!*\
      !*** ./src/app/shared/services/api.service.ts ***!
      \************************************************/

    /*! exports provided: API_URL, ApiService */

    /***/
    function nm5K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "API_URL", function () {
        return API_URL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var app_config_app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! app/config/app.constant */
      "ngOV");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./showMessage/show-message.service */
      "x/2q"); // export const API_URL1 = 'http://localhost:1212';


      var API_URL = app_config_app_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].baseURL;

      var ApiService = /*#__PURE__*/function () {
        function ApiService(http, showMessageService) {
          var _this26 = this;

          _classCallCheck(this, ApiService);

          this.http = http;
          this.showMessageService = showMessageService;
          this.newUser = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({
            prefix: '',
            firstName: '',
            lastName: '',
            primaryEmailAdress: '',
            phoneNumber: ''
          }); //   getOtp(otp:Object) {
          //     return this.http.post<any>(`${API_URL}/rest/opt/generateOtp`,otp);
          //   }
          //   getDropDownValues(entityName:string){
          //     return this.http.get<string[]>(`${API_URL}/rest/data/getMasterData?entityName=${entityName}`)
          // }
          //Error Handler

          this.errorHandler = function (errorResp) {
            console.error('Error : ' + errorResp.message);
            console.error('status : ' + errorResp.status);

            _this26.showMessageService.errorMessage(errorResp.status, errorResp);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorResp);
          }; // getOtp(data){
          //   // return this.http.post<any>(`${API_URL}/rest/otp/generateOtp`,data).pipe(catchError(this.errorHandler));
          //   return this.http.post<any>(`${API_URL}/rest/otp/generateOtp`,data);
          // }
          // verifyOtp(data){
          //   return this.http.put<any>(`${API_URL}/rest/otp/validateOtp`,data);
          //   // return this.http.put<any>(`${API_URL}/rest/otp/validateOtp`,data).pipe(catchError(this.errorHandler));
          // }
          // saveofCashWithdraw(data)
          // {
          //   return this.http.post<any>(`${API_URL}/cash-withdrawal-service`,data).pipe(catchError(this.errorHandler));
          // }
          // saveofChequeWithdraw(data)
          // {
          //   // return this.http.post<any>(`${API_URL}/cheque-withdrawal`,data);
          //   return this.http.post<any>(`${API_URL}/cheque-withdrawal`,data).pipe(catchError(this.errorHandler));


          this.token = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({
            token: ''
          });
          this.pickToken = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({
            pickToken: false
          });
          this.holidayData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        }

        _createClass(ApiService, [{
          key: "getToken",
          value: function getToken() {
            return this.token.asObservable();
          }
        }, {
          key: "setToken",
          value: function setToken(token) {
            this.token.next(token);
          }
        }, {
          key: "getPickToken",
          value: function getPickToken() {
            return this.pickToken.asObservable();
          }
        }, {
          key: "setPickToken",
          value: function setPickToken(pickToken) {
            this.pickToken.next(pickToken);
          }
        }, {
          key: "saveoftillVaultConfig",
          value: function saveoftillVaultConfig(tillVault) {
            return this.http.post("".concat(API_URL, "/maintenance/upsertTillVaultConfig"), tillVault).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchtillVaultConfigById",
          value: function fetchtillVaultConfigById(id) {
            return this.http.get("".concat(API_URL, "/maintenance/fetchTillVaultConfigById?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "gettillVaultResp",
          value: function gettillVaultResp() {
            return this.http.get("".concat(API_URL, "/maintenance/fetchTillVaultConfigInfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getTillVaultMaster",
          value: function getTillVaultMaster() {
            return this.http.get("".concat(API_URL, "/icTillVault/fetchTillVaultDetails")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getTillVaultById",
          value: function getTillVaultById(id) {
            return this.http.get("".concat(API_URL, "/icTillVault/fetchTillVaultById?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          } /////CountryState Starts

        }, {
          key: "getAllCountries",
          value: function getAllCountries() {
            return this.http.get("".concat(API_URL, "/countryMaint/fetchAllCountry")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "upsertCountryDetails",
          value: function upsertCountryDetails(payload) {
            return this.http.post("".concat(API_URL, "/countryMaint/upsertCountry"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getCountryById",
          value: function getCountryById(id) {
            return this.http.get("".concat(API_URL, "/countryMaint/fetchCountryById?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAllState",
          value: function getAllState() {
            return this.http.get("".concat(API_URL, "/countryStateMaint/fetchAllCountryState")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getStateByCountry",
          value: function getStateByCountry(id) {
            return this.http.get("".concat(API_URL, "/countryStateMaint/fetchStateInfoByCountryId?countryId=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "upsertStateDetails",
          value: function upsertStateDetails(payload) {
            return this.http.post("".concat(API_URL, "/countryStateMaint/upsertCountryState"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getStateById",
          value: function getStateById(id) {
            return this.http.get("".concat(API_URL, "/countryStateMaint/fetchCountryStateById?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "isCountryCodePresent",
          value: function isCountryCodePresent(country) {
            return this.http.get("".concat(API_URL, "/countryMaint/isCountryCodePresent?countryCode=").concat(country)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "isCountryCode2Present",
          value: function isCountryCode2Present(country) {
            return this.http.get("".concat(API_URL, "/countryMaint/isCountryCode2Present?countryCode2=").concat(country)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "isStateCodePresent",
          value: function isStateCodePresent(country, state) {
            return this.http.get("".concat(API_URL, "/countryStateMaint/isStateCodePresent?countryCode=").concat(country, "&stateCode=").concat(state)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "isStateCode2Present",
          value: function isStateCode2Present(state) {
            return this.http.get("".concat(API_URL, "/countryStateMaint/isStateCode2Present?stateCode2=").concat(state)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteCountry",
          value: function deleteCountry(id) {
            return this.http["delete"]("".concat(API_URL, "/countryMaint/deleteCountry?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteSecurityPolicy",
          value: function deleteSecurityPolicy(id) {
            return this.http["delete"]("".concat(API_URL, "/maintenance/deleteSecuriryPolicy?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteState",
          value: function deleteState(id) {
            return this.http["delete"]("".concat(API_URL, "/countryStateMaint/deleteCountryState?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "upsertSecurityPolicy",
          value: function upsertSecurityPolicy(policy) {
            return this.http.post("".concat(API_URL, "/maintenance/upsertSecurityPolicy"), policy).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
            ;
          }
        }, {
          key: "fetchSecurityPolicy",
          value: function fetchSecurityPolicy(id) {
            return this.http.get("".concat(API_URL, "/maintenance/fetchSecurityPolicyById?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
            ;
          }
        }, {
          key: "getMainModuleInfo",
          value: function getMainModuleInfo() {
            return this.http.get("".concat(API_URL, "/workflow/getMainModuleInfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getRoleId",
          value: function getRoleId() {
            return this.http.get("".concat(API_URL, "/workflow/getWorkflowRoleDetails")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "saveWorkflowRecord",
          value: function saveWorkflowRecord(data) {
            return this.http.post("".concat(API_URL, "/workflow/saveWorkflowScreenDetails"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchSubmoduleById",
          value: function fetchSubmoduleById(id) {
            return this.http.get("".concat(API_URL, "/workflow/getSubModuleInfo?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
            ;
          } /////CountryState ends
          //City Maintenance 

        }, {
          key: "fetchAllCity",
          value: function fetchAllCity() {
            return this.http.get("".concat(API_URL, "/iccity/fetchAllCities")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getCityById",
          value: function getCityById(id) {
            return this.http.get("".concat(API_URL, "/iccity/fetchById?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "upsertCities",
          value: function upsertCities(payload) {
            return this.http.post("".concat(API_URL, "/iccity/upsertCities"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteCity",
          value: function deleteCity(id) {
            return this.http["delete"]("".concat(API_URL, "/iccity/deleteCity?id=").concat(id), {
              responseType: 'text'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "updateCityAuditLog",
          value: function updateCityAuditLog(payload) {
            return this.http.put("".concat(API_URL, "/iccity/updateCityAuditLog"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          } //City Ends

        }, {
          key: "removetillVaultConfig",
          value: function removetillVaultConfig(tillvaultconfigId) {
            return this.http["delete"]("".concat(API_URL, "/maintenance/deleteTillVaultConfig?id=").concat(tillvaultconfigId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          } // Till Vault Currency Balance

        }, {
          key: "saveoftillVaultCurrencyBal",
          value: function saveoftillVaultCurrencyBal(tillVault) {
            return this.http.post("".concat(API_URL, "/maintenance/upsertTillVaultCcyBal"), tillVault).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "gettillCurrencyBalResp",
          value: function gettillCurrencyBalResp() {
            return this.http.get("".concat(API_URL, "/maintenance/fetchTillVaultCcyBalInfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchCurrencyBalId",
          value: function fetchCurrencyBalId(id) {
            return this.http.get("".concat(API_URL, "/maintenance/fetchTillVaultCcyBalById?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "removetillVaultCurrencyBal",
          value: function removetillVaultCurrencyBal(tillvaultccyBalId) {
            return this.http["delete"]("".concat(API_URL, "/maintenance/deleteTillVaultCcyBal?id=").concat(tillvaultccyBalId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          } // Till Vault Currency Balance History

        }, {
          key: "saveoftillVaultCurrencyBalHistory",
          value: function saveoftillVaultCurrencyBalHistory(tillVault) {
            return this.http.post("".concat(API_URL, "/maintenance/upsertTillVaultCcyBalHist"), tillVault).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "gettillCurrencyBalHistoryResp",
          value: function gettillCurrencyBalHistoryResp() {
            return this.http.get("".concat(API_URL, "/maintenance/fetchTillVaultCcyBalHistInfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "removetillVaultCurrencyBalHistory",
          value: function removetillVaultCurrencyBalHistory(tillvaultccyBalHistId) {
            return this.http["delete"]("".concat(API_URL, "/maintenance/deleteTillVaultCcyBalHist?id=").concat(tillvaultccyBalHistId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          } //Currency Pair Maintenance

        }, {
          key: "saveCurrencyPair",
          value: function saveCurrencyPair(data) {
            return this.http.post("".concat(API_URL, "/currency-api/upsertCurrencyPair"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "saveCurrencyPairRates",
          value: function saveCurrencyPairRates(data) {
            return this.http.post("".concat(API_URL, "/currency-api/upsertCurrencyPairRates"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getCurrencyPair",
          value: function getCurrencyPair() {
            return this.http.get("".concat(API_URL, "/currency-api/fetchCurrencyPairInfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getCurrencyPairRates",
          value: function getCurrencyPairRates() {
            return this.http.get("".concat(API_URL, "/currency-api/fetchCurrencyPairRatesInfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getCurrencyPairById",
          value: function getCurrencyPairById(id) {
            return this.http.get("".concat(API_URL, "/currency-api/fetchCurrencyPairById?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getCurrencyPairRatesById",
          value: function getCurrencyPairRatesById(id) {
            return this.http.get("".concat(API_URL, "/currency-api/fetchCurrencyPairRatesById?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAuditLogsForCurrencyPair",
          value: function getAuditLogsForCurrencyPair(payload) {
            return this.http.put("".concat(API_URL, "/currency-api/updateCurrencyPairAuditLog"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "updateAuditLogsForCurrencyPairRates",
          value: function updateAuditLogsForCurrencyPairRates(payload) {
            return this.http.put("".concat(API_URL, "/currency-api/updateCurrencyPairRatesAuditLog"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteCurrencyPair",
          value: function deleteCurrencyPair(id) {
            return this.http["delete"]("".concat(API_URL, "/currency-api/deleteCurrencyPair?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteCurrencyPairRates",
          value: function deleteCurrencyPairRates(id) {
            return this.http["delete"]("".concat(API_URL, "/currency-api/deleteCurrencyPairRates?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getTransactionDenomination",
          value: function getTransactionDenomination() {
            return this.http.get("".concat(API_URL, "/maintenance/fetchTxtDenomHistInfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "saveoftransDenom",
          value: function saveoftransDenom(transDenom) {
            return this.http.post("".concat(API_URL, "/maintenance/upsertTxtDenomHist"), transDenom).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteTransactionDenomination",
          value: function deleteTransactionDenomination(id) {
            return this.http["delete"]("".concat(API_URL, "/maintenance/deleteTxtDenomHist?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getTellerVaultDenomination",
          value: function getTellerVaultDenomination() {
            return this.http.get("".concat(API_URL, "/maintenance/fetchTillVaultDenomInfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getTellerVaultBranchMap",
          value: function getTellerVaultBranchMap() {
            return this.http.get("".concat(API_URL, "/maintenance/fetchTillVaultBrnMapInfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchTellerVaultBranchMap",
          value: function fetchTellerVaultBranchMap(id) {
            return this.http.get("".concat(API_URL, "/maintenance/fetchTillVaultBrnMapById?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "saveTellerVaultDenomination",
          value: function saveTellerVaultDenomination(tellerDenomination) {
            return this.http.post("".concat(API_URL, "/maintenance/upsertTillVaultDenom"), tellerDenomination).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getTellerVaultDenomById",
          value: function getTellerVaultDenomById(id) {
            return this.http.get("".concat(API_URL, "/maintenance/fetchTillVaultDenomById?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "saveTellerVaultBranchMap",
          value: function saveTellerVaultBranchMap(tellerVaultBrnMap) {
            return this.http.post("".concat(API_URL, "/maintenance/upsertTillVaultBrnMap"), tellerVaultBrnMap).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteTellerVaultDenomination",
          value: function deleteTellerVaultDenomination(id) {
            return this.http["delete"]("".concat(API_URL, "/maintenance/deleteTillVaultDenom?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteTellerVaultBrnMap",
          value: function deleteTellerVaultBrnMap(id) {
            return this.http["delete"]("".concat(API_URL, "/maintenance/deleteTillVaultBrnMap?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getTillVaultDenomById",
          value: function getTillVaultDenomById(id) {
            return this.http.get("".concat(API_URL, "/maintenance/fetchTillVaultDenomById?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          } // }
          // chequeDepositSave(data:object)
          // {
          //   return this.http.post<any>(`${API_URL}/cheque-deposit/api`,data).pipe(catchError(this.errorHandler));
          // }
          // gettingTransactionDetails(phoneNumber){
          //   return this.http.get(`${API_URL}/customerdata/getPhoneNo/${phoneNumber}`,phoneNumber).pipe(catchError(this.errorHandler));
          // }
          // generateToken(data){
          //   return this.http.post(`${API_URL}/token/api`,data).pipe(catchError(this.errorHandler));
          // }
          // getTokenEstimatedWaitingTime(){
          //   return this.http.get(`${API_URL}/token/api/generate-token-slips`).pipe(catchError(this.errorHandler));
          // }
          // saveofChequeDeposit(data){
          //   return this.http.post<any>(`${API_URL}/cheque-deposit/api`,data).pipe(catchError(this.errorHandler));
          // }
          // saveofCashDeposit(data){
          //     return this.http.post<any>(`${API_URL}/cash-deposit/api`,data).pipe(catchError(this.errorHandler));
          // }
          // fetchingQRcodeforToken(accountId){
          //   return this.http.get(`${RL}/token/api/fetch-qr-code/${accountId}`,accountId).pipe(catchError(this.errorHandler));
          // }
          // uploadingQRcodeforToken(data){
          //   const payload : any = new FormData();
          //   payload.append('file',data);
          //   return this.http.post<any>(`${API_URL}/token/api/qr-code-reader`,payload).pipe(catchError(this.errorHandler));
          // }

        }, {
          key: "getCountryValues",
          value: function getCountryValues() {
            return this.http.get("".concat(API_URL, "/currency")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getEntityCode",
          value: function getEntityCode() {
            return this.http.get("".concat(API_URL, "/entity/fetchAuthrorizedEntityDetails")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getBankCode",
          value: function getBankCode() {
            return this.http.get("".concat(API_URL, "/bank")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getBankCode1",
          value: function getBankCode1(entityCode) {
            return this.http.get("".concat(API_URL, "/bank/fetchBankInfoByEntityCode?entityCode=").concat(entityCode)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchAuthBankInfo",
          value: function fetchAuthBankInfo() {
            return this.http.get("".concat(API_URL, "/bank/fetchAuthBankInfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getBranchCode",
          value: function getBranchCode() {
            return this.http.get("".concat(API_URL, "/branch")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getBranchCode1",
          value: function getBranchCode1(entityCode, bankCode) {
            return this.http.get("".concat(API_URL, "/branch/fetchBranchInfo?entityCode=").concat(entityCode, "&bankCode=").concat(bankCode)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getBankInfoByEntityCode",
          value: function getBankInfoByEntityCode(key) {
            return this.http.get("".concat(API_URL, "/bank/fetchBankInfoByEntityCode?entityCode=").concat(key)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getDropDownValues",
          value: function getDropDownValues(entityName) {
            return this.http.get("".concat(API_URL, "/rest/data/getMasterData?entityName=").concat(entityName)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getDropDownValues1",
          value: function getDropDownValues1(entityName, key) {
            return this.http.get("".concat(API_URL, "/rest/data/getMasterDataInfo?entityName=").concat(entityName, "&key=").concat(key)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          } //Audit log starts

        }, {
          key: "getAuditLogsForBranch",
          value: function getAuditLogsForBranch(payload) {
            return this.http.put("".concat(API_URL, "/branch/updateBranchAuditLog"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAuditLogsForAccountType",
          value: function getAuditLogsForAccountType(payload) {
            return this.http.put("".concat(API_URL, "/maintenance/updateAccountTypeAuditLog"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAuditLogsForDenominationMaster",
          value: function getAuditLogsForDenominationMaster(payload) {
            return this.http.put("".concat(API_URL, "/maintenance/updateDenomMasterAuditLog"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAuditLogsForBaseDenomination",
          value: function getAuditLogsForBaseDenomination(payload) {
            return this.http.put("".concat(API_URL, "/maintenance/updateBaseDenomAuditLog"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAuditLogsFortillvaultStatus",
          value: function getAuditLogsFortillvaultStatus(payload) {
            return this.http.put("".concat(API_URL, "/maintenance/updateTillVaultStatusAuditLog"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAuditLogsFortillvaultdenomination",
          value: function getAuditLogsFortillvaultdenomination(payload) {
            return this.http.put("".concat(API_URL, "/maintenance/updateTillVaultDenomAuditLog"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAuditLogsForTransactionCashMaster",
          value: function getAuditLogsForTransactionCashMaster(payload) {
            return this.http.put("".concat(API_URL, "/maintenance/updateTxnCashMasterAuditLog"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAuditLogsFortillvaultMaster",
          value: function getAuditLogsFortillvaultMaster(payload) {
            return this.http.put("".concat(API_URL, "/icTillVault/updateTillVaultAuditLog"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAuditLogsForTransactioncharge",
          value: function getAuditLogsForTransactioncharge(payload) {
            return this.http.put("".concat(API_URL, "/txnChargesMaint/updateTxnChargesAuditLog"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAuditLogsForHolidayBranch",
          value: function getAuditLogsForHolidayBranch(payload) {
            return this.http.put("".concat(API_URL, "/holiday/updateBranchHolidayAuditLog"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAuditLogsForCurrencybal",
          value: function getAuditLogsForCurrencybal(payload) {
            return this.http.put("".concat(API_URL, "/maintenance/updateTillVaultCcyBalAuditLog"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAuditLogsFortillvaultmaster",
          value: function getAuditLogsFortillvaultmaster(payload) {
            return this.http.put("".concat(API_URL, "/maintenance/updateTillVaultMasterAuditLog"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAuditLogsFortillvaultconfig",
          value: function getAuditLogsFortillvaultconfig(payload) {
            return this.http.put("".concat(API_URL, "/maintenance/updateTillVaultConfigAuditLog"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAuditLogsFortillvaulmap",
          value: function getAuditLogsFortillvaulmap(payload) {
            return this.http.put("".concat(API_URL, "/maintenance/updateTillVaultBrnMapAuditLog"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAuditLogsForEntity",
          value: function getAuditLogsForEntity(payload) {
            return this.http.put("".concat(API_URL, "/entity/updateEntityAuditLog"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAuditLogsForProductMaintenance",
          value: function getAuditLogsForProductMaintenance(payload) {
            return this.http.put("".concat(API_URL, "/maintenance/updateProductAuditLog"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAuditLogsForCountry",
          value: function getAuditLogsForCountry(payload) {
            return this.http.put("".concat(API_URL, "/countryMaint/updateCountryAuditLog"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAuditLogsSecurityPolicy",
          value: function getAuditLogsSecurityPolicy(payload) {
            return this.http.put("".concat(API_URL, "/maintenance/updateSecurityPolicyAuditLog"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAuditLogsForState",
          value: function getAuditLogsForState(payload) {
            return this.http.put("".concat(API_URL, "/countryStateMaint/updateStateAuditLog"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAuditLogsForBank",
          value: function getAuditLogsForBank(payload) {
            return this.http.put("".concat(API_URL, "/bank/updateBankAuditLog"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "allCountryCode",
          value: function allCountryCode() {
            return this.http.get("".concat(API_URL, "/countryMaint/fetchCountryInfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          } //Audit log ends
          // Branch Endpoints Start

        }, {
          key: "getAllBranch",
          value: function getAllBranch() {
            return this.http.get("".concat(API_URL, "/branch")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteBranch",
          value: function deleteBranch(branchId, currentUserId) {
            return this.http["delete"]("".concat(API_URL, "/branch/").concat(branchId, "/").concat(currentUserId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getBranchByCity",
          value: function getBranchByCity(city) {
            return this.http.get("".concat(API_URL, "/branch/fetchbranch/").concat(city)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getBranchById",
          value: function getBranchById(branchId) {
            return this.http.get("".concat(API_URL, "/branch/").concat(branchId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getBranchListByBankName",
          value: function getBranchListByBankName(bankName) {
            return this.http.get("".concat(API_URL, "/branch/fetchBranchListByBank?bankName=").concat(bankName)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "createOrUpdateBranch",
          value: function createOrUpdateBranch(branchModel, currentUserId) {
            return this.http.post("".concat(API_URL, "/branch/upsertDetails/").concat(currentUserId), branchModel).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "createOrUpdateBank",
          value: function createOrUpdateBank(bankModel, currentUserId) {
            return this.http.post("".concat(API_URL, "/bank/").concat(currentUserId), bankModel).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteBank",
          value: function deleteBank(Id, currentUserId) {
            return this.http["delete"]("".concat(API_URL, "/bank/").concat(Id, "/").concat(currentUserId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchBankInfoByBranchCode",
          value: function fetchBankInfoByBranchCode(branchCode) {
            return this.http.get("".concat(API_URL, "/bank/fetchBankInfoByBranchCode?branchCode=").concat(branchCode)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          } // Branch Endpoints END

        }, {
          key: "getTillId",
          value: function getTillId() {
            return this.http.get("".concat(API_URL, "/till-service")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getTillData",
          value: function getTillData(tillOrVault) {
            return this.http.get("".concat(API_URL, "/icTillVault/fetchTillOrVault?tillOrVault=").concat(tillOrVault)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getDenomMaster",
          value: function getDenomMaster() {
            return this.http.get("".concat(API_URL, "/maintenance/fetchDenomMasterInfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchDenomMasterAuthRecs",
          value: function fetchDenomMasterAuthRecs() {
            return this.http.get("".concat(API_URL, "/maintenance/fetchDenomMasterAuthRecs")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchDenomMasterById",
          value: function fetchDenomMasterById(id) {
            return this.http.get("".concat(API_URL, "/maintenance/fetchDenomMasterById?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "saveDenomMaster",
          value: function saveDenomMaster(dtu) {
            return this.http.post("".concat(API_URL, "/maintenance/upsertDenomMaster"), dtu); // .pipe(catchError(this.errorHandler));
          }
        }, {
          key: "saveTillVaultMaster",
          value: function saveTillVaultMaster(dtu) {
            return this.http.post("".concat(API_URL, "/icTillVault/upsertDetails"), dtu); // .pipe(catchError(this.errorHandler));
          }
        }, {
          key: "deleteDenomMaster",
          value: function deleteDenomMaster(id) {
            return this.http["delete"]("".concat(API_URL, "/maintenance/deleteDenomMaster?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "searchNames",
          value: function searchNames(name) {
            return this.http.get("".concat(API_URL, "/customerdata/fetchCustomers/").concat(name)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchTellerProfileInfo",
          value: function fetchTellerProfileInfo(tellerId) {
            return this.http.get("".concat(API_URL, "/loginApi/fetchTellerProfileInfo?tellerId=").concat(tellerId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "changeTellerPassword",
          value: function changeTellerPassword(passwordInfo) {
            return this.http.post("".concat(API_URL, "/loginApi/changePassword"), passwordInfo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "updateTellerInfo",
          value: function updateTellerInfo(info) {
            return this.http.put("".concat(API_URL, "/loginApi/updatetellerProfileInfo"), info).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          } // getcurrencyDropDown(entityName: string) {
          // /maintenance/fetchTillVaultConfigInfo
          //  /maintenance/fetchTillVaultDenomById
          //   return this.http.get<string[]>(`${API_URL}/rest/data/getMasterData?entityName=${entityName}`).pipe(catchError(this.errorHandler))
          // }

        }, {
          key: "deleteTillVaultMaster",
          value: function deleteTillVaultMaster(id) {
            return this.http["delete"]("".concat(API_URL, "/icTillVault/deleteTillVault?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchTransactionTypeInfo",
          value: function fetchTransactionTypeInfo() {
            return this.http.get("".concat(API_URL, "/maintenance/fetchTransactiobTypeInfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "upsertTransactionType",
          value: function upsertTransactionType(info) {
            return this.http.post("".concat(API_URL, "/maintenance/upsertTransactionType"), info).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchAccountTypeInfo",
          value: function fetchAccountTypeInfo() {
            return this.http.get("".concat(API_URL, "/maintenance/fetchAccountTypeInfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchAccountTypeById",
          value: function fetchAccountTypeById(id) {
            return this.http.get("".concat(API_URL, "/maintenance/fetchAccountTypeById?accountTypeId=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchTillVaultStatusInfoList",
          value: function fetchTillVaultStatusInfoList() {
            return this.http.get("".concat(API_URL, "/maintenance/fetchTillVaultStatusInfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getTillVaultStatusById",
          value: function getTillVaultStatusById(id) {
            return this.http.get("".concat(API_URL, "/maintenance/fetchTillVaultStatusById?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "upsertTillVaultStatus",
          value: function upsertTillVaultStatus(payloadObj) {
            return this.http.post("".concat(API_URL, "/maintenance/upsertTillVaultStatus"), payloadObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteTillVaultStatusById",
          value: function deleteTillVaultStatusById(id) {
            return this.http["delete"]("".concat(API_URL, "/maintenance/deleteTillVaultStatus?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getDenomInfoList",
          value: function getDenomInfoList() {
            return this.http.get("".concat(API_URL, "/maintenance/fetchBaseDenominationInfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getDenomInfoById",
          value: function getDenomInfoById(baseDenominationId) {
            return this.http.get("".concat(API_URL, "/maintenance/fetchBaseDenominationById?baseDenominationId=").concat(baseDenominationId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "saveBaseDenomination",
          value: function saveBaseDenomination(baseDenom) {
            return this.http.post("".concat(API_URL, "/maintenance/upsertBaseDenomination"), baseDenom).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "removeBaseDenominationById",
          value: function removeBaseDenominationById(baseDenominationId) {
            return this.http["delete"]("".concat(API_URL, "/maintenance/deleteBaseDenomination?baseDenominationId=").concat(baseDenominationId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "upsertAccountType",
          value: function upsertAccountType(info) {
            return this.http.post("".concat(API_URL, "/maintenance/upsertAccountType"), info).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteTransactionType",
          value: function deleteTransactionType(transactionTypeId) {
            return this.http["delete"]("".concat(API_URL, "/maintenance/deleteTransactionType?transactionTypeId=").concat(transactionTypeId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteAccountType",
          value: function deleteAccountType(accountTypeId) {
            return this.http["delete"]("".concat(API_URL, "/maintenance/deleteAccountType?accountTypeId=").concat(accountTypeId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchTxnCashMasterInfo",
          value: function fetchTxnCashMasterInfo() {
            return this.http.get("".concat(API_URL, "/maintenance/fetchTxnCashMasterInfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchTxnCashMasterById",
          value: function fetchTxnCashMasterById(id) {
            return this.http.get("".concat(API_URL, "/maintenance/fetchTxnCashMasterById?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "upsertTxnCashMaster",
          value: function upsertTxnCashMaster(info) {
            return this.http.post("".concat(API_URL, "/maintenance/upsertTxnCashMaster"), info).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteTxnCashMaster",
          value: function deleteTxnCashMaster(id) {
            return this.http["delete"]("".concat(API_URL, "/maintenance/deleteTxnCashMaster?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchAccountInfo",
          value: function fetchAccountInfo(accountId) {
            return this.http.get("".concat(API_URL, "/accountdata/getAccountInfo?accountId=").concat(accountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "updateTokenStatus",
          value: function updateTokenStatus(tokenInfo) {
            return this.http.put("".concat(API_URL, "/cash-deposit/api/updateTokenStatus"), tokenInfo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "updateEntityDetails",
          value: function updateEntityDetails(data) {
            return this.http.post("".concat(API_URL, "/entity/upsertDetails"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchEntityDetails",
          value: function fetchEntityDetails() {
            return this.http.get("".concat(API_URL, "/entity/fetchEntityDetails")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteEntity",
          value: function deleteEntity(id) {
            return this.http["delete"]("".concat(API_URL, "/entity/deleteEntity?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "editEntityById",
          value: function editEntityById(id) {
            return this.http.get("".concat(API_URL, "/entity/fetchEntityById?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getBillerInfoById",
          value: function getBillerInfoById(id) {
            return this.http.get("".concat(API_URL, "/billerInfoApi/getBillerInfoById?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAllBillerInfoId",
          value: function getAllBillerInfoId() {
            return this.http.get("".concat(API_URL, "/billerInfoApi/fetchBillerDetails")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteBillerInfo",
          value: function deleteBillerInfo(id) {
            return this.http["delete"]("".concat(API_URL, "/billerInfoApi/deleteBillerInfoById?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "saveOrUpdateBillerInfo",
          value: function saveOrUpdateBillerInfo(data) {
            return this.http.post("".concat(API_URL, "/billerInfoApi/saveOrUpdateBillerInfo"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getBranchHolidayInfo",
          value: function getBranchHolidayInfo() {
            return this.http.get("".concat(API_URL, "/holiday/fetchBranchHolidayInfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "findByCalenderYearAndEntityCodeAndBankCodeAndBranchCode",
          value: function findByCalenderYearAndEntityCodeAndBankCodeAndBranchCode(params) {
            return this.http.get("".concat(API_URL, "/holiday/fetchBranchHolidayInfoByParams/?").concat(params)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "findByCalenderYearAndEntityCodeAndBankCodeAndCurrencyCode",
          value: function findByCalenderYearAndEntityCodeAndBankCodeAndCurrencyCode(params) {
            return this.http.get("".concat(API_URL, "/holiday/fetchCurrencyHolidayInfoByParams/?").concat(params)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getClearingHolidayInfo",
          value: function getClearingHolidayInfo() {
            return this.http.get("".concat(API_URL, "/holiday/fetchClearingHolidayInfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getCurrencyHolidayInfo",
          value: function getCurrencyHolidayInfo() {
            return this.http.get("".concat(API_URL, "/holiday/fetchCurrencyHolidayInfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteBranchHoliday",
          value: function deleteBranchHoliday(id) {
            return this.http["delete"]("".concat(API_URL, "/holiday/deleteBranchHoliday?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteClearingHoliday",
          value: function deleteClearingHoliday(id) {
            return this.http["delete"]("".concat(API_URL, "/holiday/deleteClearingHoliday?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteCurrencyHoliday",
          value: function deleteCurrencyHoliday(id) {
            return this.http["delete"]("".concat(API_URL, "/holiday/deleteCurrencyHoliday?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "updateBranchHolidayDetails",
          value: function updateBranchHolidayDetails(data, isEdit) {
            return this.http.post("".concat(API_URL, "/holiday/upsertBranchHolidayDetails/").concat(isEdit), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchBranchHolidayByCalendarDateDetails",
          value: function fetchBranchHolidayByCalendarDateDetails() {
            return this.http.get("".concat(API_URL, "/holiday/fetchHolidayPerCalendarYear")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "upsertClearingHolidayDetails",
          value: function upsertClearingHolidayDetails(data) {
            return this.http.post("".concat(API_URL, "/holiday/upsertClearingHolidayDetails"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "upsertCurrencyHolidayDetails",
          value: function upsertCurrencyHolidayDetails(data) {
            return this.http.post("".concat(API_URL, "/holiday/upsertCurrencyHolidayDetails"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "updateBranchDetails",
          value: function updateBranchDetails(data, loggedInUser) {
            return this.http.post("".concat(API_URL, "/branch/upsertDetails/").concat(loggedInUser), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getMaintenanceMenu",
          value: function getMaintenanceMenu() {
            return this.http.get("".concat(API_URL, "/screen/fetchDynamicScreenInfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getMaintenanceParentMenu",
          value: function getMaintenanceParentMenu() {
            return this.http.get("".concat(API_URL, "/screen/fetchInfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "upsertMenu",
          value: function upsertMenu(model) {
            return this.http.post("".concat(API_URL, "/screen/upsertMenuDetails"), model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteMenu",
          value: function deleteMenu(id) {
            return this.http["delete"]("".concat(API_URL, "/screen/deleteData?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getBankDetails",
          value: function getBankDetails(id) {
            return this.http.get("".concat(API_URL, "/bank/{id}?Id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getEntityDropdown",
          value: function getEntityDropdown() {
            return this.http.get("".concat(API_URL, "/entity/fetchEntityDetails ")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAuthEntityDropdown",
          value: function getAuthEntityDropdown() {
            return this.http.get("".concat(API_URL, "/entity/fetchAuthrorizedEntityDetails ")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "editeditBranchHoliday",
          value: function editeditBranchHoliday(id) {
            return this.http.get("".concat(API_URL, "/holiday/fetchBranchHolidayById?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "editCurrencyHoliday",
          value: function editCurrencyHoliday(id) {
            return this.http.get("".concat(API_URL, "/holiday/fetchCurrencyHolidayById?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "updateTxnChargeDetails",
          value: function updateTxnChargeDetails(data) {
            return this.http.post("".concat(API_URL, "/txnChargesMaint/upsertTxnCharges"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getTxnChargesById",
          value: function getTxnChargesById(id) {
            return this.http.get("".concat(API_URL, "/txnChargesMaint/fetchTxnChargesById?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteTxnChargesById",
          value: function deleteTxnChargesById(id) {
            return this.http["delete"]("".concat(API_URL, "/txnChargesMaint/deleteTxnCharges?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getTxnChargeDetails",
          value: function getTxnChargeDetails() {
            return this.http.get("".concat(API_URL, "/txnChargesMaint/fetchAllTxnCharges")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getSecurityPolicyDetails",
          value: function getSecurityPolicyDetails() {
            return this.http.get("".concat(API_URL, "/maintenance/fetchSecurityPolicynfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "updateTillVaultCcyDemonBalDetails",
          value: function updateTillVaultCcyDemonBalDetails(data) {
            return this.http.post("".concat(API_URL, "/tillVaultCcyDemonBalApi/saveOrUpdateTillVaultCcyDemonBal"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteTillVaultCcyDemonById",
          value: function deleteTillVaultCcyDemonById(id) {
            return this.http["delete"]("".concat(API_URL, "/tillVaultCcyDemonBalApi/deleteTillVaultCcyDemonBalByTvcId?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getTillVaultCcyDemonById",
          value: function getTillVaultCcyDemonById(tvcId) {
            return this.http.get("".concat(API_URL, "/tillVaultCcyDemonBalApi/getTillVaultCcyDemonBalByTvcId?tvcId=").concat(tvcId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchTillVaultCcyDemonBal",
          value: function fetchTillVaultCcyDemonBal() {
            return this.http.get("".concat(API_URL, "/tillVaultCcyDemonBalApi/fetchTillVaultCcyDemonBalDetails")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getProductDetails",
          value: function getProductDetails() {
            return this.http.get("".concat(API_URL, "/maintenance/fetchProductInfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteProductById",
          value: function deleteProductById(id) {
            return this.http["delete"]("".concat(API_URL, "/maintenance/deleteProduct?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "updateProductDetails",
          value: function updateProductDetails(data) {
            return this.http.post("".concat(API_URL, "/maintenance/upsertProduct"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getProductById",
          value: function getProductById(id) {
            return this.http.get("".concat(API_URL, "/maintenance/fetchProductById?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "uploadTxnChargesFile",
          value: function uploadTxnChargesFile(data) {
            return this.http.post("".concat(API_URL, "/upload-api/uploadDoc"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "isProductCodePresent",
          value: function isProductCodePresent(productCode) {
            return this.http.get("".concat(API_URL, "/maintenance/productCodePresent?productCode=").concat(productCode)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchCurrencyMaintDetails",
          value: function fetchCurrencyMaintDetails() {
            return this.http.get("".concat(API_URL, "/currencyMaint-api/fetchCurrencyMaintInfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchChargeMaintDetails",
          value: function fetchChargeMaintDetails() {
            return this.http.get("".concat(API_URL, "/chargeMaint/fetchChargeMaint")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchAccountClassDetails",
          value: function fetchAccountClassDetails() {
            return this.http.get("".concat(API_URL, "/rest/data/fetchAccountClassInfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchCustomerGroupDetails",
          value: function fetchCustomerGroupDetails() {
            return this.http.get("".concat(API_URL, "/maintenance/fetchAuthCustomerCategory")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchTerminalDetails",
          value: function fetchTerminalDetails() {
            return this.http.get("".concat(API_URL, "/rest/data/fetchTerminalInfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "editCurrencyMaintById",
          value: function editCurrencyMaintById(currencyCode) {
            console.log(currencyCode);
            return this.http.get("".concat(API_URL, "/currencyMaint-api/fetchCurrencyMaintByCurrencyCode?currencyCode=").concat(currencyCode)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "editChargeMaintById",
          value: function editChargeMaintById(id) {
            console.log(id);
            return this.http.get("".concat(API_URL, "/chargeMaint/fetchChargeMaintById?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "upsertCurrencyMaintDetails",
          value: function upsertCurrencyMaintDetails(data) {
            return this.http.post("".concat(API_URL, "/currencyMaint-api/upsertCurrencyMaint"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "upsertChargeMaintDetails",
          value: function upsertChargeMaintDetails(data) {
            return this.http.post("".concat(API_URL, "/chargeMaint/upsertChargeMaint"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "updateAuditLogForCurrencyMaint",
          value: function updateAuditLogForCurrencyMaint(payload) {
            return this.http.put("".concat(API_URL, "/currencyMaint-api/updateCurrencyMaintAuditLog"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "updateAuditLogForChargeMaint",
          value: function updateAuditLogForChargeMaint(payload) {
            return this.http.put("".concat(API_URL, "/chargeMaint/updateChargeMaintAuditLog"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteCurrencyMaint",
          value: function deleteCurrencyMaint(id) {
            return this.http["delete"]("".concat(API_URL, "/currencyMaint-api/deleteCurrencyMaint?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteChargeMaint",
          value: function deleteChargeMaint(id) {
            return this.http["delete"]("".concat(API_URL, "/chargeMaint/deleteChargeMaint?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getCurrencyDetails",
          value: function getCurrencyDetails() {
            return this.http.get("".concat(API_URL, "/currencyMaint-api/fetchCurrencyMaintAuthRecs")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "uploadFile",
          value: function uploadFile(data) {
            return this.http.post("".concat(API_URL, "/upload-api/uploadDoc"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "uploadexcelFile",
          value: function uploadexcelFile(data) {
            return this.http.post("".concat(API_URL, "/upload-api/uploadDoc"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getTillVaultConfigUpload",
          value: function getTillVaultConfigUpload(file) {
            return this.http.post("".concat(API_URL, "/upload-api/uploadDoc"), file).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "uploadExelFile",
          value: function uploadExelFile(data) {
            return this.http.post("".concat(API_URL, "/upload-api/uploadDoc"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getRoleInfo",
          value: function getRoleInfo() {
            return this.http.get("".concat(API_URL, "/role-api/fetchRoleInfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchScreenPermissions",
          value: function fetchScreenPermissions() {
            return this.http.get("".concat(API_URL, "/role-api/fetchAllTabs")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchRolePermissionByTabID",
          value: function fetchRolePermissionByTabID(tabId) {
            return this.http.get("".concat(API_URL, "/role-api/fetchScreenInfoByTabId?tabId=").concat(tabId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "saveRole",
          value: function saveRole(data) {
            return this.http.post("".concat(API_URL, "/role-api/upsertRole"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchRoleSummary",
          value: function fetchRoleSummary() {
            return this.http.get("".concat(API_URL, "/role-api/fetchRoleInfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchRoleById",
          value: function fetchRoleById(id) {
            return this.http.get("".concat(API_URL, "/role-api/fetchRoleById?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteRole",
          value: function deleteRole(id) {
            return this.http["delete"]("".concat(API_URL, "/role-api/deleteRole?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAuditLogsForRoleMaintenance",
          value: function getAuditLogsForRoleMaintenance(payload) {
            return this.http.put("".concat(API_URL, "/role-api/updateRoleAuditLog"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "upsertUserMaintenance",
          value: function upsertUserMaintenance(data) {
            return this.http.post("".concat(API_URL, "/users/upsertUser"), data);
          }
        }, {
          key: "getUserInfo",
          value: function getUserInfo() {
            return this.http.get("".concat(API_URL, "/users/fetchUserInfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteUserById",
          value: function deleteUserById(id) {
            return this.http["delete"]("".concat(API_URL, "/users/deleteUser?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getUserId",
          value: function getUserId(id) {
            return this.http.get("".concat(API_URL, "/users/fetchUserById?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAuditLogsForUserMaintenance",
          value: function getAuditLogsForUserMaintenance(payload) {
            return this.http.put("".concat(API_URL, "/users/updateUserAuditLog"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "appLogout",
          value: function appLogout(username) {
            return this.http.put("".concat(API_URL, "/loginApi/logoutUser"), username).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "editMenuMaintenance",
          value: function editMenuMaintenance(id) {
            return this.http.get("".concat(API_URL, "/screen/fetchInfoByParentId?parentId=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAuditLogsForTillVaultCcyDenomBal",
          value: function getAuditLogsForTillVaultCcyDenomBal(payload) {
            return this.http.put("".concat(API_URL, "/tillVaultCcyDemonBalApi/updateTillVaultCcyDemonBalAuditLog"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "updateBiller",
          value: function updateBiller(data) {
            return this.http.put("".concat(API_URL, "/billerInfoApi/updateBillerAuditLog"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAuditLogsForMenu",
          value: function getAuditLogsForMenu(payload) {
            return this.http.put("".concat(API_URL, "/screen/updateDynamicMenuAuditLog"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getExchangeRateforCurrency",
          value: function getExchangeRateforCurrency(currency1, currency2) {
            return this.http.get("".concat(API_URL, "/currency-api/fetchExchangeRateForCurrency?currency1=").concat(currency1, "&currency2=").concat(currency2)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "transferToken",
          value: function transferToken(payload, loggedInTellerId) {
            return this.http.post("".concat(API_URL, "/tellerToken/transferToken?loggedInTellerId=").concat(loggedInTellerId), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getReport",
          value: function getReport(report, customerId, fromDate, endDate, branch) {
            var bip;
            if (report == 'Uc_206') bip = "http://192.168.0.14:8081/Icust-Digital-Banking/birt/ucreport?fileName=".concat(report, "&tellerId=", 7, "&txnDate=", '2020-01-01');else if (report == 'Uc_307') bip = "http://192.168.0.14:8081/Icust-Digital-Banking/birt/ucreport?fileName=".concat(report, "&branch=").concat(branch, "&refNo=", 61757);else if (report == 'Uc_170') bip = "http://192.168.0.14:8081/Icust-Digital-Banking/birt/ucreport?fileName=".concat(report, "&AccountNo=", 2345);else if (report == 'Uc_185') bip = "http://192.168.0.14:8081/Icust-Digital-Banking/birt/ucreport?fileName=".concat(report, "&custId=").concat(customerId, "&fromDate=").concat(fromDate, "&toDate=").concat(endDate);else if (report == 'TransactionDetails1') bip = "http://192.168.0.14:8081/Icust-Digital-Banking/birt/ucreport?fileName=".concat(report, "&tellerId=", 7, "&fromDate=").concat(fromDate, "&toDate=").concat(endDate); // console.log("reportid,date",reportid,date)
            //console.log(data)
            // let reportid = 'HRRATTD';
            // let date = '2022-08-23';
            // var bip = `http://192.168.0.14:8071/Icust-Digital-Banking/birt/downloadTransactionReport?tellerId=${tellerId}&fromDate=${fromDate}&toDate=${endDate}`;

            window.open(bip);
            /*return this.http.get<any>(`http://192.168.0.14:8071/Datamart/bipTest/getReportIdAndDate/${reportid}/${date}`).pipe(catchError(this.errorHandler));
             http://192.168.0.14:8071/Datamart/bipTest/getReportIdAndDate/${HRRATTD}/${2022-08-23}
            return this.http.get<any>(`${API_URL}/bip/getReport?data=${data}`).pipe(catchError(this.errorHandler)); */
          }
        }, {
          key: "getAuditLogsForCurrencyBranch",
          value: function getAuditLogsForCurrencyBranch(payload) {
            return this.http.put("".concat(API_URL, "/holiday/updateCurrencyHolidayAuditLog"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getHolidayData",
          value: function getHolidayData() {
            return this.holidayData.asObservable();
          }
        }, {
          key: "setHolidayData",
          value: function setHolidayData(holidayData) {
            this.holidayData.next(holidayData);
          }
        }, {
          key: "fetchAuthrorizedRoleInfo",
          value: function fetchAuthrorizedRoleInfo() {
            return this.http.get("".concat(API_URL, "/role-api/fetchAuthrorizedRoleInfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchNotification",
          value: function fetchNotification(tellerId) {
            return this.http.get("".concat(API_URL, "/teller/notifications/getTellerNotifications?tellerId=").concat(tellerId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteIndividualToken",
          value: function deleteIndividualToken(tellerId) {
            return this.http["delete"]("".concat(API_URL, "/teller/notifications/delete?notificationId=").concat(tellerId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteAllToken",
          value: function deleteAllToken(tellerId) {
            return this.http["delete"]("".concat(API_URL, "/teller/notifications/deleteAll?tellerId=").concat(tellerId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getCustomerCategory",
          value: function getCustomerCategory() {
            return this.http.get("".concat(API_URL, "/maintenance/fetchCustomerCategoryDetails")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteCustomerCategory",
          value: function deleteCustomerCategory(id) {
            return this.http["delete"]("".concat(API_URL, "/maintenance/deleteCustomerCategoryById?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "saveCustomerCategory",
          value: function saveCustomerCategory(dtu) {
            return this.http.post("".concat(API_URL, "/maintenance/UpsertCustomerCategoryDetails"), dtu); // .pipe(catchError(this.errorHandler));
          }
        }, {
          key: "updateCustomerAuditLog",
          value: function updateCustomerAuditLog(payload) {
            return this.http.put("".concat(API_URL, "/maintenance/updateCustomerAuditLog"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getCustomerCategoryById",
          value: function getCustomerCategoryById(id) {
            return this.http.get("".concat(API_URL, "/maintenance/fetchCustomerCategoryById?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getCustomerChargeCategory",
          value: function getCustomerChargeCategory() {
            return this.http.get("".concat(API_URL, "/maintenance/fetchCustomerChargeCategoryDetails")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteCustomerChargeCategory",
          value: function deleteCustomerChargeCategory(id) {
            return this.http["delete"]("".concat(API_URL, "/maintenance/deleteCustomerChargeCategoryById?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "saveCustomerChargeCategory",
          value: function saveCustomerChargeCategory(dtu) {
            return this.http.post("".concat(API_URL, "/maintenance/upsertCustomerChargeCategory"), dtu); // .pipe(catchError(this.errorHandler));
          }
        }, {
          key: "getCustomerChargeCategoryById",
          value: function getCustomerChargeCategoryById(id) {
            return this.http.get("".concat(API_URL, "/maintenance/fetchCustomerChargeCategoryById?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "updateCustomerChargeAuditLog",
          value: function updateCustomerChargeAuditLog(payload) {
            return this.http.put("".concat(API_URL, "/maintenance/updateCustomerChargeAuditLog"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "createKioskBranch",
          value: function createKioskBranch(data) {
            return this.http.post("".concat(API_URL, "/kioskSystem/upsertDetails"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getKioskLoginDetails",
          value: function getKioskLoginDetails() {
            return this.http.get("".concat(API_URL, "/kioskSystem/fetchKioskSystemDetails")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteKioskLoginById",
          value: function deleteKioskLoginById(id) {
            return this.http["delete"]("".concat(API_URL, "/kioskSystem/deleteKioskSystem?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAuditLogsForKioskMaintenance",
          value: function getAuditLogsForKioskMaintenance(payload) {
            return this.http.put("".concat(API_URL, "/kioskSystem/updateKioskSystemAuditLog"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getKioskDataById",
          value: function getKioskDataById(id) {
            return this.http.get("".concat(API_URL, "/kioskSystem/fetchKioskSystemById?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "downloadReportConfiguration",
          value: function downloadReportConfiguration(tellerId, fromDate, toDate) {
            return this.http.get("http://192.168.0.14:8081/BirtReport/downloadTransactionReport?tellerId=7&fromDate=2023-01-10&toDate=2023-01-10").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getRecentTransactionFilter",
          value: function getRecentTransactionFilter(tellerId, filterOption) {
            return this.http.get("".concat(API_URL, "/cash-deposit/api/fetchTellerRecentTrans?tellerId=").concat(tellerId, "&filterOption=").concat(filterOption)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getRecentTransactionFilterBasedOnDate",
          value: function getRecentTransactionFilterBasedOnDate(tellerId, fromDate, toDate) {
            return this.http.get("".concat(API_URL, "/cash-deposit/api/fetchTellerRecentTrans?tellerId=").concat(tellerId, "&fromDate=").concat(fromDate, "&toDate=").concat(toDate)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "searchRecentTrans",
          value: function searchRecentTrans(tellerId, search) {
            return this.http.get("".concat(API_URL, "/cash-deposit/api/searchRecentTransactionInfo?search=").concat(search)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }]);

        return ApiService;
      }();

      ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_5__["ShowMessageService"]));
      };

      ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ApiService,
        factory: ApiService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }, {
            type: _showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_5__["ShowMessageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "qj9C":
    /*!**************************************************************************************!*\
      !*** ./src/app/shared/components/bottom-sheet-share/bottom-sheet-share.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: BottomSheetShareComponent */

    /***/
    function qj9C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BottomSheetShareComponent", function () {
        return BottomSheetShareComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "2ChS");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      var BottomSheetShareComponent = /*#__PURE__*/function () {
        function BottomSheetShareComponent(bottomSheetRef) {
          _classCallCheck(this, BottomSheetShareComponent);

          this.bottomSheetRef = bottomSheetRef;
        }

        _createClass(BottomSheetShareComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "openLink",
          value: function openLink(event) {
            this.bottomSheetRef.dismiss();
          }
        }]);

        return BottomSheetShareComponent;
      }();

      BottomSheetShareComponent.ɵfac = function BottomSheetShareComponent_Factory(t) {
        return new (t || BottomSheetShareComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"]));
      };

      BottomSheetShareComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BottomSheetShareComponent,
        selectors: [["app-bottom-sheet-share"]],
        decls: 5,
        vars: 0,
        consts: [["mat-list-item", "", "href", "#"], ["mat-line", ""]],
        template: function BottomSheetShareComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-nav-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Test");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatLine"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib3R0b20tc2hlZXQtc2hhcmUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BottomSheetShareComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-bottom-sheet-share',
            templateUrl: './bottom-sheet-share.component.html',
            styleUrls: ['./bottom-sheet-share.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "qrO7":
    /*!******************************************************************************************!*\
      !*** ./src/app/shared/directives/egret-sidenav-helper/egret-sidenav-helper.directive.ts ***!
      \******************************************************************************************/

    /*! exports provided: EgretSidenavHelperDirective, EgretSidenavTogglerDirective */

    /***/
    function qrO7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EgretSidenavHelperDirective", function () {
        return EgretSidenavHelperDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EgretSidenavTogglerDirective", function () {
        return EgretSidenavTogglerDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var app_shared_services_match_media_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/match-media.service */
      "30N5");
      /* harmony import */


      var _egret_sidenav_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./egret-sidenav-helper.service */
      "iSAc");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");

      var EgretSidenavHelperDirective = /*#__PURE__*/function () {
        function EgretSidenavHelperDirective(matchMediaService, egretSidenavHelperService, matSidenav, mediaObserver) {
          _classCallCheck(this, EgretSidenavHelperDirective);

          this.matchMediaService = matchMediaService;
          this.egretSidenavHelperService = egretSidenavHelperService;
          this.matSidenav = matSidenav;
          this.mediaObserver = mediaObserver; // Set the default value

          this.isOpen = true;
          this.unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }

        _createClass(EgretSidenavHelperDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this27 = this;

            this.egretSidenavHelperService.setSidenav(this.id, this.matSidenav);

            if (this.mediaObserver.isActive(this.isOpenBreakpoint)) {
              this.isOpen = true;
              this.matSidenav.mode = "side";
              this.matSidenav.toggle(true);
            } else {
              this.isOpen = false;
              this.matSidenav.mode = "over";
              this.matSidenav.toggle(false);
            }

            this.matchMediaService.onMediaChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribeAll)).subscribe(function () {
              if (_this27.mediaObserver.isActive(_this27.isOpenBreakpoint)) {
                _this27.isOpen = true;
                _this27.matSidenav.mode = "side";

                _this27.matSidenav.toggle(true);
              } else {
                _this27.isOpen = false;
                _this27.matSidenav.mode = "over";

                _this27.matSidenav.toggle(false);
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscribeAll.next();
            this.unsubscribeAll.complete();
          }
        }]);

        return EgretSidenavHelperDirective;
      }();

      EgretSidenavHelperDirective.ɵfac = function EgretSidenavHelperDirective_Factory(t) {
        return new (t || EgretSidenavHelperDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_match_media_service__WEBPACK_IMPORTED_MODULE_3__["MatchMediaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_egret_sidenav_helper_service__WEBPACK_IMPORTED_MODULE_4__["EgretSidenavHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["MediaObserver"]));
      };

      EgretSidenavHelperDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: EgretSidenavHelperDirective,
        selectors: [["", "egretSidenavHelper", ""]],
        hostVars: 2,
        hostBindings: function EgretSidenavHelperDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-open", ctx.isOpen);
          }
        },
        inputs: {
          id: ["egretSidenavHelper", "id"],
          isOpenBreakpoint: ["isOpen", "isOpenBreakpoint"]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EgretSidenavHelperDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: "[egretSidenavHelper]"
          }]
        }], function () {
          return [{
            type: app_shared_services_match_media_service__WEBPACK_IMPORTED_MODULE_3__["MatchMediaService"]
          }, {
            type: _egret_sidenav_helper_service__WEBPACK_IMPORTED_MODULE_4__["EgretSidenavHelperService"]
          }, {
            type: _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"]
          }, {
            type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["MediaObserver"]
          }];
        }, {
          isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.is-open"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["egretSidenavHelper"]
          }],
          isOpenBreakpoint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["isOpen"]
          }]
        });
      })();

      var EgretSidenavTogglerDirective = /*#__PURE__*/function () {
        function EgretSidenavTogglerDirective(egretSidenavHelperService) {
          _classCallCheck(this, EgretSidenavTogglerDirective);

          this.egretSidenavHelperService = egretSidenavHelperService;
        }

        _createClass(EgretSidenavTogglerDirective, [{
          key: "onClick",
          value: function onClick() {
            // console.log(this.egretSidenavHelperService.getSidenav(this.id))
            this.egretSidenavHelperService.getSidenav(this.id).toggle();
          }
        }]);

        return EgretSidenavTogglerDirective;
      }();

      EgretSidenavTogglerDirective.ɵfac = function EgretSidenavTogglerDirective_Factory(t) {
        return new (t || EgretSidenavTogglerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_egret_sidenav_helper_service__WEBPACK_IMPORTED_MODULE_4__["EgretSidenavHelperService"]));
      };

      EgretSidenavTogglerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: EgretSidenavTogglerDirective,
        selectors: [["", "egretSidenavToggler", ""]],
        hostBindings: function EgretSidenavTogglerDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EgretSidenavTogglerDirective_click_HostBindingHandler() {
              return ctx.onClick();
            });
          }
        },
        inputs: {
          id: ["egretSidenavToggler", "id"]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EgretSidenavTogglerDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: "[egretSidenavToggler]"
          }]
        }], function () {
          return [{
            type: _egret_sidenav_helper_service__WEBPACK_IMPORTED_MODULE_4__["EgretSidenavHelperService"]
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["egretSidenavToggler"]
          }],
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["click"]
          }]
        });
      })();
      /***/

    },

    /***/
    "r/oB":
    /*!****************************************************************!*\
      !*** ./src/app/shared/directives/dropdown-anchor.directive.ts ***!
      \****************************************************************/

    /*! exports provided: DropdownAnchorDirective */

    /***/
    function rOB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownAnchorDirective", function () {
        return DropdownAnchorDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dropdown-link.directive */
      "UGQK");

      var DropdownAnchorDirective = /*#__PURE__*/function () {
        function DropdownAnchorDirective(navlink) {
          _classCallCheck(this, DropdownAnchorDirective);

          this.navlink = navlink;
        }

        _createClass(DropdownAnchorDirective, [{
          key: "onClick",
          value: function onClick(e) {
            this.navlink.toggle();
          }
        }]);

        return DropdownAnchorDirective;
      }();

      DropdownAnchorDirective.ɵfac = function DropdownAnchorDirective_Factory(t) {
        return new (t || DropdownAnchorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__["DropdownLinkDirective"]));
      };

      DropdownAnchorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DropdownAnchorDirective,
        selectors: [["", "appDropdownToggle", ""]],
        hostBindings: function DropdownAnchorDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownAnchorDirective_click_HostBindingHandler($event) {
              return ctx.onClick($event);
            });
          }
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownAnchorDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[appDropdownToggle]'
          }]
        }], function () {
          return [{
            type: _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__["DropdownLinkDirective"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_1__["DropdownLinkDirective"]]
            }]
          }];
        }, {
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "rmxa":
    /*!***************************************************!*\
      !*** ./src/app/shared/services/layout.service.ts ***!
      \***************************************************/

    /*! exports provided: LayoutService */

    /***/
    function rmxa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutService", function () {
        return LayoutService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./theme.service */
      "ETNk");

      var LayoutService = /*#__PURE__*/function () {
        function LayoutService(themeService) {
          _classCallCheck(this, LayoutService);

          this.themeService = themeService;
          this.layoutConf = {};
          this.layoutConfSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.layoutConf);
          this.layoutConf$ = this.layoutConfSubject.asObservable();
          this.fullWidthRoutes = ['shop'];
          this.setAppLayout({
            navigationPos: 'side',
            sidebarStyle: 'full',
            sidebarColor: 'slate',
            sidebarCompactToggle: false,
            dir: 'ltr',
            useBreadcrumb: true,
            topbarFixed: false,
            footerFixed: false,
            topbarColor: 'white',
            footerColor: 'slate',
            matTheme: 'egret-navy',
            breadcrumb: 'simple',
            perfectScrollbar: true
          });
        }

        _createClass(LayoutService, [{
          key: "setAppLayout",
          value: function setAppLayout(layoutConf) {
            this.layoutConf = Object.assign(Object.assign({}, this.layoutConf), layoutConf);
            this.applyMatTheme(this.layoutConf.matTheme);
          }
        }, {
          key: "publishLayoutChange",
          value: function publishLayoutChange(lc) {
            var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (this.layoutConf.matTheme !== lc.matTheme && lc.matTheme) {
              this.themeService.changeTheme(this.layoutConf.matTheme, lc.matTheme);
            }

            this.layoutConf = Object.assign(this.layoutConf, lc);
            this.layoutConfSubject.next(this.layoutConf);
          }
        }, {
          key: "applyMatTheme",
          value: function applyMatTheme(theme) {
            this.themeService.applyMatTheme(this.layoutConf.matTheme);
          }
        }, {
          key: "adjustLayout",
          value: function adjustLayout() {
            var _this28 = this;

            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var sidebarStyle;
            this.isMobile = this.isSm();
            this.currentRoute = options.route || this.currentRoute;
            sidebarStyle = this.isMobile ? 'closed' : 'full';

            if (this.currentRoute) {
              this.fullWidthRoutes.forEach(function (route) {
                if (_this28.currentRoute.indexOf(route) !== -1) {
                  sidebarStyle = 'closed';
                }
              });
            }

            this.publishLayoutChange({
              isMobile: this.isMobile,
              sidebarStyle: sidebarStyle
            });
          }
        }, {
          key: "isSm",
          value: function isSm() {
            return window.matchMedia("(max-width: 959px)").matches;
          }
        }]);

        return LayoutService;
      }();

      LayoutService.ɵfac = function LayoutService_Factory(t) {
        return new (t || LayoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]));
      };

      LayoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LayoutService,
        factory: LayoutService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "s0uO":
    /*!************************************************************************!*\
      !*** ./src/app/shared/components/sidebar-top/sidebar-top.component.ts ***!
      \************************************************************************/

    /*! exports provided: SidebarTopComponent */

    /***/
    function s0uO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarTopComponent", function () {
        return SidebarTopComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/services/navigation.service */
      "LFK6");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../sidenav/sidenav.component */
      "TgYD"); // import PerfectScrollbar from 'perfect-scrollbar';


      var SidebarTopComponent = /*#__PURE__*/function () {
        function SidebarTopComponent(navService) {
          _classCallCheck(this, SidebarTopComponent);

          this.navService = navService;
        }

        _createClass(SidebarTopComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this29 = this;

            this.menuItemsSub = this.navService.menuItems$.subscribe(function (menuItem) {
              _this29.menuItems = menuItem.filter(function (item) {
                return item.type !== 'icon' && item.type !== 'separator';
              });
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {// setTimeout(() => {
            //   this.sidebarPS = new PerfectScrollbar('#sidebar-top-scroll-area', {
            //     suppressScrollX: true
            //   })
            // })
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // if(this.sidebarPS) {
            //   this.sidebarPS.destroy();
            // }
            if (this.menuItemsSub) {
              this.menuItemsSub.unsubscribe();
            }
          }
        }]);

        return SidebarTopComponent;
      }();

      SidebarTopComponent.ɵfac = function SidebarTopComponent_Factory(t) {
        return new (t || SidebarTopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]));
      };

      SidebarTopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SidebarTopComponent,
        selectors: [["app-sidebar-top"]],
        decls: 3,
        vars: 1,
        consts: [[1, "sidebar-panel"], ["id", "sidebar-top-scroll-area", "fxLayout", "column", 1, "navigation-hold", 3, "perfectScrollbar"], [3, "items"]],
        template: function SidebarTopComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidenav", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.menuItems);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarDirective"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_4__["SidenavComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarTopComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sidebar-top',
            templateUrl: './sidebar-top.component.html'
          }]
        }], function () {
          return [{
            type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "sTnX":
    /*!**********************************************************!*\
      !*** ./src/app/shared/services/loader/loader.service.ts ***!
      \**********************************************************/

    /*! exports provided: LoaderService */

    /***/
    function sTnX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoaderService", function () {
        return LoaderService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var LoaderService = /*#__PURE__*/_createClass(function LoaderService() {
        _classCallCheck(this, LoaderService);

        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
      });

      LoaderService.ɵfac = function LoaderService_Factory(t) {
        return new (t || LoaderService)();
      };

      LoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LoaderService,
        factory: LoaderService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "slWk":
    /*!*********************************************************************************!*\
      !*** ./src/app/shared/components/egret-sidebar/egret-sidebar-helper.service.ts ***!
      \*********************************************************************************/

    /*! exports provided: EgretSidebarHelperService */

    /***/
    function slWk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EgretSidebarHelperService", function () {
        return EgretSidebarHelperService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EgretSidebarHelperService = /*#__PURE__*/function () {
        function EgretSidebarHelperService() {
          _classCallCheck(this, EgretSidebarHelperService);

          this.sidebarList = [];
        }

        _createClass(EgretSidebarHelperService, [{
          key: "setSidebar",
          value: function setSidebar(name, sidebar) {
            this.sidebarList[name] = sidebar;
          }
        }, {
          key: "getSidebar",
          value: function getSidebar(name) {
            return this.sidebarList[name];
          }
        }, {
          key: "removeSidebar",
          value: function removeSidebar(name) {
            if (!this.sidebarList[name]) {
              console.warn("The sidebar with name '".concat(name, "' doesn't exist."));
            } // remove sidebar


            delete this.sidebarList[name];
          }
        }]);

        return EgretSidebarHelperService;
      }();

      EgretSidebarHelperService.ɵfac = function EgretSidebarHelperService_Factory(t) {
        return new (t || EgretSidebarHelperService)();
      };

      EgretSidebarHelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: EgretSidebarHelperService,
        factory: EgretSidebarHelperService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EgretSidebarHelperService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "tZUg":
    /*!********************************************************!*\
      !*** ./src/app/shared/services/local-store.service.ts ***!
      \********************************************************/

    /*! exports provided: LocalStoreService */

    /***/
    function tZUg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalStoreService", function () {
        return LocalStoreService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LocalStoreService = /*#__PURE__*/function () {
        function LocalStoreService() {
          _classCallCheck(this, LocalStoreService);

          this.ls = window.localStorage;
        }

        _createClass(LocalStoreService, [{
          key: "setItem",
          value: function setItem(key, value) {
            value = JSON.stringify(value);
            this.ls.setItem(key, value);
            return true;
          }
        }, {
          key: "getItem",
          value: function getItem(key) {
            var value = this.ls.getItem(key);

            try {
              return JSON.parse(value);
            } catch (e) {
              return null;
            }
          }
        }, {
          key: "clear",
          value: function clear() {
            this.ls.clear();
          }
        }]);

        return LocalStoreService;
      }();

      LocalStoreService.ɵfac = function LocalStoreService_Factory(t) {
        return new (t || LocalStoreService)();
      };

      LocalStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LocalStoreService,
        factory: LocalStoreService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStoreService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "urBs":
    /*!**********************************************************************!*\
      !*** ./src/app/shared/components/header-top/header-top.component.ts ***!
      \**********************************************************************/

    /*! exports provided: HeaderTopComponent */

    /***/
    function urBs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderTopComponent", function () {
        return HeaderTopComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/services/navigation.service */
      "LFK6");
      /* harmony import */


      var _shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/services/theme.service */
      "ETNk");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/layout.service */
      "rmxa");
      /* harmony import */


      var app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/services/auth/jwt-auth.service */
      "nZzT");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var app_views_others_search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/views/others/search/search.component */
      "Adj1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1"); //import { User } from 'app/shared/models/user.model';


      function HeaderTopComponent_span_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderTopComponent_mat_grid_tile_27_mat_icon_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "check");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderTopComponent_mat_grid_tile_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_mat_grid_tile_27_Template_mat_grid_tile_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var theme_r5 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.onChange(theme_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderTopComponent_mat_grid_tile_27_mat_icon_3_Template, 2, 0, "mat-icon", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var theme_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", theme_r5.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", theme_r5.baseColor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", theme_r5.isActive);
        }
      }

      function HeaderTopComponent_button_83_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_button_83_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.toggleSidenav();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var HeaderTopComponent = /*#__PURE__*/function () {
        function HeaderTopComponent(layout, router, navService, themeService, translate, renderer, jwtAuth, ls, dialog, apiService) {
          _classCallCheck(this, HeaderTopComponent);

          this.layout = layout;
          this.router = router;
          this.navService = navService;
          this.themeService = themeService;
          this.translate = translate;
          this.renderer = renderer;
          this.jwtAuth = jwtAuth;
          this.ls = ls;
          this.dialog = dialog;
          this.apiService = apiService;
          this.rumangoThemes = [];
          this.currentLang = 'en';
          this.availableLangs = [{
            name: 'English',
            code: 'en'
          }, {
            name: 'Spanish',
            code: 'es'
          }];
        }

        _createClass(HeaderTopComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this30 = this;

            this.currentUser = this.ls.getItem("ICUST_USER");
            this.flag = this.ls.getItem("notification");
            this.flag1 = this.ls.getItem("profile");
            this.layoutConf = this.layout.layoutConf;
            this.rumangoThemes = this.themeService.rumangoThemes;
            this.menuItemSub = this.navService.menuItems$.subscribe(function (res) {
              res = res.filter(function (item) {
                return item.type !== 'icon' && item.type !== 'separator';
              });
              var limit = 4;
              var mainItems = res.slice(0, limit);

              if (res.length <= limit) {
                return _this30.menuItems = mainItems;
              }

              var subItems = res.slice(limit, res.length - 1);
              mainItems.push({
                name: 'More',
                type: 'dropDown',
                tooltip: 'More',
                icon: 'more_horiz',
                sub: subItems
              });
              _this30.menuItems = mainItems;
            });
            this.user = this.ls.getItem('ICUST_USER');
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.menuItemSub.unsubscribe();
          }
        }, {
          key: "setLang",
          value: function setLang() {
            this.translate.use(this.currentLang);
          }
        }, {
          key: "changeTheme",
          value: function changeTheme(theme) {
            //this.layout.publishLayoutChange({ matTheme: theme.name }) 
            this.layout.applyMatTheme(theme);
          }
        }, {
          key: "onChange",
          value: function onChange(t) {
            console.log("t", t);

            if (t.checked) {
              this.themeService.changeTheme('egret-navy', 'egret-dark-purple');
            } else {
              this.themeService.changeTheme('egret-dark-purple', 'egret-navy');
            }
          }
        }, {
          key: "toggleNotific",
          value: function toggleNotific() {
            this.ls.setItem("notification", true);
            this.flag = this.ls.getItem('notification');
            this.notificPanel.toggle();
          }
        }, {
          key: "toggleProfile",
          value: function toggleProfile() {
            console.log("call profile");
            this.ls.setItem("profile", true);
            this.flag1 = this.ls.getItem('profile');
            this.profilePanel.toggle();
            console.log("next one");
          }
        }, {
          key: "toggleSidenav",
          value: function toggleSidenav() {
            if (this.layoutConf.sidebarStyle === 'closed') {
              return this.layout.publishLayoutChange({
                sidebarStyle: 'full'
              });
            }

            this.layout.publishLayoutChange({
              sidebarStyle: 'closed'
            });
          } //search implementation

        }, {
          key: "onSearch",
          value: function onSearch() {
            var dialogRef = this.dialog.open(app_views_others_search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"], {
              width: '50%',
              disableClose: true,
              panelClass: "custom"
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("Dialog result: ".concat(result));
            });
          }
        }, {
          key: "goToSettings",
          value: function goToSettings() {
            console.log("enter inside settings");
            this.router.navigate(["/settings/profile"]);
          }
        }, {
          key: "goToPassword",
          value: function goToPassword() {
            this.router.navigate(['/settings/change-password']);
          }
        }, {
          key: "goToMaintenance",
          value: function goToMaintenance() {
            this.router.navigate(['/maintenance']);
          }
        }, {
          key: "gotoEmailchange",
          value: function gotoEmailchange() {
            this.router.navigate(['/settings/change-email']);
          }
        }, {
          key: "goToThemeChange",
          value: function goToThemeChange() {
            this.router.navigate(['/settings/theme-change']);
          }
        }, {
          key: "onSignout",
          value: function onSignout(username) {
            var _this31 = this;

            console.log("Inside signout method");
            this.apiService.appLogout(username).subscribe(function (resp) {
              console.log("resp ", resp);

              if (resp != null) {
                _this31.jwtAuth.signout();
              }
            });
          }
        }]);

        return HeaderTopComponent;
      }();

      HeaderTopComponent.ɵfac = function HeaderTopComponent_Factory(t) {
        return new (t || HeaderTopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_5__["JwtAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"]));
      };

      HeaderTopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderTopComponent,
        selectors: [["app-header-top"]],
        inputs: {
          notificPanel: "notificPanel",
          profilePanel: "profilePanel"
        },
        decls: 84,
        vars: 13,
        consts: [[1, "header-topnav", "mat-elevation-z2"], [1, "container"], [1, "topnav"], ["mat-icon-button", "", 1, "ml-16", 3, "click"], [1, "topbar-branding"], ["routerLink", "/others/dashboard", 2, "padding-bottom", "20%", "font-size", "larger", "color", "white"], ["fxFlex", ""], [1, "icons-padding"], ["mat-icon-button", ""], [3, "click"], ["mat-icon-button", "", "matTooltip", "Notifications", 1, "topbar-button-right", 3, "click"], ["class", "notification-number mat-bg-warn", 4, "ngIf"], ["mat-icon-button", "", "id", "schemeToggle", "matTooltip", "Color Schemes", 1, "topbar-button-right", 3, "matMenuTriggerFor"], ["themeMenu", "matMenu"], ["cols", "2", "rowHeight", "48px", 1, "theme-list"], [3, "click", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", 1, "topbar-button-right", "mr-4", "img-button"], ["src", "assets/images/face-7.jpg", "alt", ""], [3, "matMenuTriggerFor"], ["accountMenu", "matMenu"], ["role", "list", 1, "notification-list"], ["matRipple", "", 1, "d-flex", "mb-16", "mx-8"], [1, "w-40", "h-40", "mr-16", "rounded-circle", "mat-bg-chip", "d-flex", "align-items-center", "justify-content-center"], [1, "d-flex", "flex-column", "justify-content-center", "flex-grow-1"], [1, "mb-4"], [1, "text-muted"], ["mat-icon-button", "", 3, "click"], ["color", "primary", 1, "text-muted"], ["role", "listitem", "routerLinkActive", "open", 1, "notific-item"], ["color", "primary", 1, "notific-icon", "mr-16"], ["fxLayout", "row"], [1, "message", "mx-4"], ["color", "primary", 1, "editbutton", 3, "click"], ["color", "primary", 1, "editlang", 3, "click"], ["mat-menu-item", "", 3, "click"], [2, "font-size", "medium"], ["mat-icon-button", "", "class", "mr-16", 3, "click", 4, "ngIf"], [1, "notification-number", "mat-bg-warn"], ["mat-menu-item", "", 3, "title"], [1, "egret-swatch"], ["class", "active-icon", 4, "ngIf"], [1, "active-icon"], ["mat-icon-button", "", 1, "mr-16", 3, "click"]],
        template: function HeaderTopComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_Template_button_click_3_listener() {
              return ctx.toggleProfile();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "YES BANK 6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_Template_mat_icon_click_12_listener() {
              return ctx.onSearch();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_Template_button_click_14_listener() {
              return ctx.toggleNotific();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "notifications_none");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HeaderTopComponent_span_17_Template, 2, 0, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_Template_mat_icon_click_19_listener() {
              return ctx.goToSettings();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "format_color_fill");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-menu", null, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-grid-list", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, HeaderTopComponent_mat_grid_tile_27_Template, 4, 4, "mat-grid-tile", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "keyboard_arrow_down");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-menu", null, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-nav-list", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h6", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "small", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_Template_button_click_45_listener() {
              return ctx.gotoEmailchange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-icon", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-list-item", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-icon", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h4", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Password Change");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-icon", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_Template_mat_icon_click_56_listener() {
              return ctx.goToPassword();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-list-item", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-icon", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "language icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h4", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-icon", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_Template_mat_icon_click_66_listener() {
              return ctx.gotoEmailchange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-list-item", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-icon", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "adjust icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h4", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Theme change");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-icon", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_Template_mat_icon_click_76_listener() {
              return ctx.goToThemeChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_Template_button_click_78_listener() {
              return ctx.onSignout(ctx.currentUser.tellerName);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "exit_to_app");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Sign out");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, HeaderTopComponent_button_83_Template, 3, 0, "button", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("overflow", "visible");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.flag);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("overflow", "visible");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.rumangoThemes);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.tellerName, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentUser.tellerName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentUser.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Language-", ctx.currentUser.language, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.isMobile);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultFlexDirective"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenu"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatNavList"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRipple"], _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkActive"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuItem"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridTile"]],
        styles: [".header-topnav[_ngcontent-%COMP%] {\n  color: white;\n  height: 60px;\n}\n\n.topbar-branding[_ngcontent-%COMP%] {\n  line-height: 30px;\n}\n\n.icons-padding[_ngcontent-%COMP%] {\n  margin-right: 5%;\n  line-height: 60px;\n}\n\n.editright[_ngcontent-%COMP%] {\n  float: left;\n}\n\n#link[_ngcontent-%COMP%]:hover {\n  background-color: #eff2f5;\n  cursor: pointer;\n}\n\n.editbutton[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding-left: 59px;\n}\n\n.editlang[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding-left: 55px;\n}\n\n.editemail[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding-left: -15px;\n}\n\n.mat-menu-content[_ngcontent-%COMP%] {\n  padding: 30px;\n}\n\n.mat-menu-panel[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGVhZGVyLXRvcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixZQUFZO0FBQ2hCOztBQUNBO0VBQ0ksaUJBQWlCO0FBRXJCOztBQUNBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUVyQjs7QUFBQTtFQUNJLFdBQVc7QUFHZjs7QUFBQTtFQUNJLHlCQUEwQjtFQUMxQixlQUFlO0FBR25COztBQURBO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQjtBQUl0Qjs7QUFEQTtFQUNJLGVBQWU7RUFDZixrQkFBa0I7QUFJdEI7O0FBRkE7RUFDSSxlQUFlO0VBQ2YsbUJBQW1CO0FBS3ZCOztBQUhBO0VBQ0ksYUFBYTtBQU1qQjs7QUFIQTtFQUNJLGVBQWU7QUFNbkIiLCJmaWxlIjoiaGVhZGVyLXRvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItdG9wbmF2e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcbi50b3BiYXItYnJhbmRpbmd7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG4uaWNvbnMtcGFkZGluZ3tcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICBsaW5lLWhlaWdodDogNjBweDtcclxufVxyXG4uZWRpdHJpZ2h0e1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbiNsaW5rOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICNlZmYyZjU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmVkaXRidXR0b257XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDU5cHg7XHJcblxyXG59XHJcbi5lZGl0bGFuZ3tcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNTVweDtcclxufVxyXG4uZWRpdGVtYWlse1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAtMTVweDtcclxufVxyXG4ubWF0LW1lbnUtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcblxyXG4ubWF0LW1lbnUtcGFuZWwge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderTopComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header-top',
            templateUrl: './header-top.component.html',
            styleUrls: ['./header-top.component.scss']
          }]
        }], function () {
          return [{
            type: _services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
          }, {
            type: _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]
          }, {
            type: _shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_5__["JwtAuthService"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__["LocalStoreService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"]
          }];
        }, {
          notificPanel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          profilePanel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "vafs":
    /*!********************************************************!*\
      !*** ./src/app/shared/services/route-parts.service.ts ***!
      \********************************************************/

    /*! exports provided: RoutePartsService */

    /***/
    function vafs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoutePartsService", function () {
        return RoutePartsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var RoutePartsService = /*#__PURE__*/function () {
        function RoutePartsService(router) {
          _classCallCheck(this, RoutePartsService);

          this.router = router;
        }

        _createClass(RoutePartsService, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "generateRouteParts",
          value: function generateRouteParts(snapshot) {
            var routeParts = [];

            if (snapshot) {
              if (snapshot.firstChild) {
                routeParts = routeParts.concat(this.generateRouteParts(snapshot.firstChild));
              }

              if (snapshot.data['title'] && snapshot.url.length) {
                // console.log(snapshot.data['title'], snapshot.url)
                routeParts.push({
                  title: snapshot.data['title'],
                  breadcrumb: snapshot.data['breadcrumb'],
                  url: snapshot.url[0].path,
                  urlSegments: snapshot.url,
                  params: snapshot.params
                });
              }
            }

            return routeParts;
          }
        }]);

        return RoutePartsService;
      }();

      RoutePartsService.ɵfac = function RoutePartsService_Factory(t) {
        return new (t || RoutePartsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      RoutePartsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RoutePartsService,
        factory: RoutePartsService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoutePartsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "w8r1":
    /*!**************************************************************************************!*\
      !*** ./src/app/shared/components/speech-recognition/speech-recognition.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: SpeechRecognitionComponent */

    /***/
    function w8r1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpeechRecognitionComponent", function () {
        return SpeechRecognitionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var app_shared_services_voice_recognition_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! app/shared/services/voice-recognition.service */
      "j/fj");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var SpeechRecognitionComponent = /*#__PURE__*/function () {
        function SpeechRecognitionComponent(service) {
          _classCallCheck(this, SpeechRecognitionComponent);

          this.service = service;
          this.service.init();
        }

        _createClass(SpeechRecognitionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "startService",
          value: function startService() {
            this.service.start();
          }
        }, {
          key: "stopService",
          value: function stopService() {
            this.service.stop();
          }
        }]);

        return SpeechRecognitionComponent;
      }();

      SpeechRecognitionComponent.ɵfac = function SpeechRecognitionComponent_Factory(t) {
        return new (t || SpeechRecognitionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_voice_recognition_service__WEBPACK_IMPORTED_MODULE_1__["VoiceRecognitionService"]));
      };

      SpeechRecognitionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SpeechRecognitionComponent,
        selectors: [["app-speech-recognition"]],
        decls: 8,
        vars: 1,
        consts: [[1, "tooltip"], ["matPrefix", "", "mat-icon-button", "", 3, "mousedown", "mouseup"], [1, "tooltiptext"], [1, "voiceText"]],
        template: function SpeechRecognitionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function SpeechRecognitionComponent_Template_button_mousedown_1_listener() {
              return ctx.startService();
            })("mouseup", function SpeechRecognitionComponent_Template_button_mouseup_1_listener() {
              return ctx.stopService();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "mic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Search by voice");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.service.text);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatPrefix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
        styles: [".tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: hidden;\n  width: 100px;\n  background-color: white;\n  color: #2b2b2b;\n  font-size: 11px;\n  text-align: center;\n  border-radius: 4px;\n  padding: 1px;\n  \n  position: absolute;\n  z-index: 1;\n}\n\n.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n\n.voiceText[_ngcontent-%COMP%] {\n  text-align: start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3BlZWNoLXJlY29nbml0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix1QkFBb0M7RUFDcEMsY0FBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUVaLHlCQUFBO0VBQ0Esa0JBQWtCO0VBQ2xCLFVBQVU7QUFBZDs7QUFHRTtFQUNFLG1CQUFtQjtBQUF2Qjs7QUFFRTtFQUNFLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcGVlY2gtcmVjb2duaXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgY29sb3I6IHJnYig0MywgNDMsIDQzKTtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDFweDtcclxuICBcclxuICAgIC8qIFBvc2l0aW9uIHRoZSB0b29sdGlwICovXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICBcclxuICAudG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9XHJcbiAgLnZvaWNlVGV4dHtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpeechRecognitionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-speech-recognition',
            templateUrl: './speech-recognition.component.html',
            styleUrls: ['./speech-recognition.component.scss']
          }]
        }], function () {
          return [{
            type: app_shared_services_voice_recognition_service__WEBPACK_IMPORTED_MODULE_1__["VoiceRecognitionService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "wl2U":
    /*!******************************************************************************!*\
      !*** ./src/app/shared/components/button-loading/button-loading.component.ts ***!
      \******************************************************************************/

    /*! exports provided: ButtonLoadingComponent */

    /***/
    function wl2U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonLoadingComponent", function () {
        return ButtonLoadingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");

      function ButtonLoadingComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
        }
      }

      function ButtonLoadingComponent_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ButtonLoadingComponent_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.loadingText);
        }
      }

      var _c0 = function _c0(a0, a1, a2) {
        return {
          loading: a0,
          "mat-button": a1,
          "mat-raised-button": a2
        };
      };

      var _c1 = ["*"];

      var ButtonLoadingComponent = /*#__PURE__*/function () {
        function ButtonLoadingComponent() {
          _classCallCheck(this, ButtonLoadingComponent);

          this.raised = true;
          this.loadingText = 'Please wait';
          this.type = 'submit';
        }

        _createClass(ButtonLoadingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ButtonLoadingComponent;
      }();

      ButtonLoadingComponent.ɵfac = function ButtonLoadingComponent_Factory(t) {
        return new (t || ButtonLoadingComponent)();
      };

      ButtonLoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ButtonLoadingComponent,
        selectors: [["button-loading"]],
        inputs: {
          loading: "loading",
          btnClass: "btnClass",
          raised: "raised",
          loadingText: "loadingText",
          type: "type",
          color: "color"
        },
        ngContentSelectors: _c1,
        decls: 4,
        vars: 14,
        consts: [["mat-button", "", 3, "color", "type", "disabled", "ngClass"], ["class", "btn-spinner", 4, "ngIf"], [4, "ngIf"], [1, "btn-spinner"]],
        template: function ButtonLoadingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonLoadingComponent_div_1_Template, 1, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonLoadingComponent_span_2_Template, 2, 0, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ButtonLoadingComponent_span_3_Template, 2, 1, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button-loading ", ctx.btnClass, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color)("type", ctx.type)("disabled", ctx.loading)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](10, _c0, ctx.loading, !ctx.raised, ctx.raised));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b24tbG9hZGluZy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonLoadingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'button-loading',
            templateUrl: './button-loading.component.html',
            styleUrls: ['./button-loading.component.scss']
          }]
        }], function () {
          return [];
        }, {
          loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['loading']
          }],
          btnClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['btnClass']
          }],
          raised: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['raised']
          }],
          loadingText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['loadingText']
          }],
          type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['type']
          }],
          color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['color']
          }]
        });
      })();
      /***/

    },

    /***/
    "x/2q":
    /*!*********************************************************************!*\
      !*** ./src/app/shared/services/showMessage/show-message.service.ts ***!
      \*********************************************************************/

    /*! exports provided: ShowMessageService */

    /***/
    function x2q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowMessageService", function () {
        return ShowMessageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);

      var ShowMessageService = /*#__PURE__*/function () {
        function ShowMessageService(toast) {
          _classCallCheck(this, ShowMessageService);

          this.toast = toast;
          this.errorData = [{
            "code": 400,
            "message": "Bad Request"
          }, {
            "code": 401,
            "message": "Unauthorized"
          }, {
            "code": 403,
            "message": "Forbidden"
          }, {
            "code": 404,
            "message": "Not Found"
          }, {
            "code": 500,
            "message": "Internal Server Error"
          }, {
            "code": 502,
            "message": "Bad Gateway"
          }, {
            "code": 503,
            "message": "Service Unavailable"
          }, {
            "code": 504,
            "message": "Gateway Timeout"
          }, {
            "code": 0,
            "message": "Error"
          }];
        }

        _createClass(ShowMessageService, [{
          key: "errorMessage",
          value: function errorMessage(status, errorResp) {
            console.log("show msg", status);
            console.log(errorResp);
            var i = 0;

            while (i < this.errorData.length) {
              if (this.errorData[i].code === status) {
                var errCode = status.toString(); // this.toast.error(this.errorData[i].message, '', {
                //   timeOut: 3000,
                //   progressBar: true,
                //   tapToDismiss: true,
                //   closeButton: true,
                //   easeTime: 300,
                //   extendedTimeOut: 1000
                // });
                // Swal.fire('Oops', this.errorData[i].message, 'error');
                // Swal.fire({
                //   title: this.errorData[i].message ,
                //   text:"<p style='font-size: 20px>status</p>",
                //   width: 600
                // })

                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                  icon: 'error',
                  title: "Error Code : " + this.errorData[i].code,
                  text: "Error message : " + this.errorData[i].message,
                  width: 500,
                  // timer: 10000,
                  // timerProgressBar: true,
                  confirmButtonText: "OK",
                  confirmButtonColor: '#456EFE'
                });
              }

              i++;
            }
          }
        }]);

        return ShowMessageService;
      }();

      ShowMessageService.ɵfac = function ShowMessageService_Factory(t) {
        return new (t || ShowMessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]));
      };

      ShowMessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ShowMessageService,
        factory: ShowMessageService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowMessageService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zMWy":
    /*!**************************************************!*\
      !*** ./src/app/shared/shared-material.module.ts ***!
      \**************************************************/

    /*! exports provided: SharedMaterialModule */

    /***/
    function zMWy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedMaterialModule", function () {
        return SharedMaterialModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/badge */
      "TU8p");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "2ChS");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "jaxi");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/chips */
      "A5z7");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "bv9b");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/sort */
      "Dh3D");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_tree__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/tree */
      "8yBR");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "/1cH");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/slider */
      "5RNC");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/material-moment-adapter */
      "1yaQ");

      var SharedMaterialModule = /*#__PURE__*/_createClass(function SharedMaterialModule() {
        _classCallCheck(this, SharedMaterialModule);
      });

      SharedMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SharedMaterialModule
      });
      SharedMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SharedMaterialModule_Factory(t) {
          return new (t || SharedMaterialModule)();
        },
        imports: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_36__["MatMomentDateModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_20__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedMaterialModule, {
          exports: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_36__["MatMomentDateModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_20__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedMaterialModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_36__["MatMomentDateModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_20__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/

    },

    /***/
    "zt0U":
    /*!**************************************************!*\
      !*** ./src/app/shared/guards/user-role.guard.ts ***!
      \**************************************************/

    /*! exports provided: UserRoleGuard */

    /***/
    function zt0U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserRoleGuard", function () {
        return UserRoleGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/auth/jwt-auth.service */
      "nZzT");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");

      var UserRoleGuard = /*#__PURE__*/function () {
        function UserRoleGuard(router, jwtAuth, snack) {
          _classCallCheck(this, UserRoleGuard);

          this.router = router;
          this.jwtAuth = jwtAuth;
          this.snack = snack;
        }

        _createClass(UserRoleGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var user = this.jwtAuth.getUser();

            if (user && route.data && route.data.roles && route.data.roles.includes(user.role)) {
              return true;
            } else {
              this.snack.open('You do not have access to this page!', 'OK');
              return false;
            }
          }
        }]);

        return UserRoleGuard;
      }();

      UserRoleGuard.ɵfac = function UserRoleGuard_Factory(t) {
        return new (t || UserRoleGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__["JwtAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]));
      };

      UserRoleGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UserRoleGuard,
        factory: UserRoleGuard.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserRoleGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__["JwtAuthService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map