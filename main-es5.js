(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
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
      "SVse");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");

      function BreadcrumbComponent_div_1_ul_4_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);

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

      function BreadcrumbComponent_div_1_ul_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_div_1_ul_4_li_1_Template, 4, 4, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.routeParts);
        }
      }

      function BreadcrumbComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BreadcrumbComponent_div_1_ul_4_Template, 2, 1, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx_r0.routeParts[ctx_r0.routeParts.length - 1] == null ? null : ctx_r0.routeParts[ctx_r0.routeParts.length - 1].breadcrumb), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.routeParts.length > 1);
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
        decls: 2,
        vars: 1,
        consts: [[1, "container-dynamic"], ["class", "breadcrumb-title", 4, "ngIf"], [1, "breadcrumb-title"], [1, "bc-title"], ["class", "breadcrumb", 4, "ngIf"], [1, "breadcrumb"], [4, "ngFor", "ngForOf"], [1, "text-muted", 2, "color", "black", 3, "routerLink"]],
        template: function BreadcrumbComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_div_1_Template, 5, 4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
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
      "8Y7J");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout */
      "u9T3");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "q7Ft");

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
      /*! D:\iCust\icust-hub\src\main.ts */
      "zUnb");
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
        apiUrl: 'http://192.168.0.14:8081/Icust-Digital-Banking',
        //  ICUST_URL: 'http://localhost:1212', // phase2 for local testing
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
    "2Goh":
    /*!************************************************************!*\
      !*** ./src/app/shared/directives/only-number.directive.ts ***!
      \************************************************************/

    /*! exports provided: CUSTOM_INPUT_DATE_PICKER_CONTROL_VALUE_ACCESSOR, OnlyNumberDirective */

    /***/
    function Goh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_DATE_PICKER_CONTROL_VALUE_ACCESSOR", function () {
        return CUSTOM_INPUT_DATE_PICKER_CONTROL_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnlyNumberDirective", function () {
        return OnlyNumberDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");

      var CUSTOM_INPUT_DATE_PICKER_CONTROL_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return OnlyNumberDirective;
        }),
        multi: true
      };

      var OnlyNumberDirective = /*#__PURE__*/function () {
        function OnlyNumberDirective(elementRef, renderer) {
          _classCallCheck(this, OnlyNumberDirective);

          this.elementRef = elementRef;
          this.renderer = renderer;
        }

        _createClass(OnlyNumberDirective, [{
          key: "onInputChange",
          value: function onInputChange(value) {
            var filteredValue = filterValue(value);
            this.updateTextInput(filteredValue, this.value !== filteredValue);
          }
        }, {
          key: "onBlur",
          value: function onBlur() {
            this.onTouched();
          }
        }, {
          key: "updateTextInput",
          value: function updateTextInput(value, propagateChange) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'value', value);

            if (propagateChange) {
              this.onChange(value);
            }

            this.value = value;
          } // ControlValueAccessor Interface

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
          }
        }, {
          key: "writeValue",
          value: function writeValue(value) {
            value = value ? String(value) : '';
            this.updateTextInput(value, false);
          }
        }]);

        return OnlyNumberDirective;
      }();

      OnlyNumberDirective.ɵfac = function OnlyNumberDirective_Factory(t) {
        return new (t || OnlyNumberDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      OnlyNumberDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: OnlyNumberDirective,
        selectors: [["", "onlyNumber", ""]],
        hostBindings: function OnlyNumberDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function OnlyNumberDirective_input_HostBindingHandler($event) {
              return ctx.onInputChange($event.target.value);
            })("blur", function OnlyNumberDirective_blur_HostBindingHandler() {
              return ctx.onBlur();
            });
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CUSTOM_INPUT_DATE_PICKER_CONTROL_VALUE_ACCESSOR])]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnlyNumberDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[onlyNumber]',
            providers: [CUSTOM_INPUT_DATE_PICKER_CONTROL_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }];
        }, {
          onInputChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['input', ['$event.target.value']]
          }],
          onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['blur']
          }]
        });
      })();

      function filterValue(value) {
        return value.replace(/[^0-9]*/g, '');
      }
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
      "8Y7J");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout */
      "u9T3");
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
      "8Y7J");

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
      "iELJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");

      var AppComfirmComponent = function AppComfirmComponent(dialogRef, data) {
        _classCallCheck(this, AppComfirmComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      };

      AppComfirmComponent.ɵfac = function AppComfirmComponent_Factory(t) {
        return new (t || AppComfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]));
      };

      AppComfirmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AppComfirmComponent,
        selectors: [["app-confirm"]],
        decls: 11,
        vars: 2,
        consts: [["matDialogTitle", "", 1, "mb-8"], ["mat-dialog-content", "", 1, "mb-16"], ["mat-dialog-actions", ""], ["type", "button", "mat-button", "", "color", "primary", 3, "click"], ["fxFlex", ""], ["type", "button", "color", "accent", "mat-button", "", 3, "click"]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "YES");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComfirmComponent_Template_button_click_9_listener() {
              return ctx.dialogRef.close(false);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "CANCEL");

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
            template: "<h1 matDialogTitle class=\"mb-8\">{{ data.title }}</h1>\n    <div mat-dialog-content class=\"mb-16\">{{ data.message }}</div>\n    <div mat-dialog-actions>\n    <button \n    type=\"button\" \n    mat-button\n    color=\"primary\" \n    (click)=\"dialogRef.close(true)\">YES</button>\n    &nbsp;\n    <span fxFlex></span>\n    <button \n    type=\"button\"\n    color=\"accent\"\n    mat-button \n    (click)=\"dialogRef.close(false)\">CANCEL</button>\n    </div>"
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
      "iELJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
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
                message: data.message,
                ok: data.ok,
                cancel: data.cancel
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
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
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
            console.log('ref', this.dialogRef);

            if (this.dialogRef) {
              this.dialogRef.close();
              console.log('ifref', this.dialogRef);
            }
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
    "59kF":
    /*!***************************************************!*\
      !*** ./src/app/shared/pipes/remove-comma.pipe.ts ***!
      \***************************************************/

    /*! exports provided: RemoveCommaPipe */

    /***/
    function kF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RemoveCommaPipe", function () {
        return RemoveCommaPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var RemoveCommaPipe = /*#__PURE__*/function () {
        function RemoveCommaPipe() {
          _classCallCheck(this, RemoveCommaPipe);
        }

        _createClass(RemoveCommaPipe, [{
          key: "transform",
          value: function transform(value) {
            if (value !== undefined && value !== null) {
              return value.replace(/,/g, "");
            } else {
              return "";
            }
          }
        }]);

        return RemoveCommaPipe;
      }();

      RemoveCommaPipe.ɵfac = function RemoveCommaPipe_Factory(t) {
        return new (t || RemoveCommaPipe)();
      };

      RemoveCommaPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "removeComma",
        type: RemoveCommaPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RemoveCommaPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'removeComma'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "5NLl":
    /*!**************************************************************!*\
      !*** ./src/app/shared/directives/widget-toggle.directive.ts ***!
      \**************************************************************/

    /*! exports provided: RumWidgetToggleDirective */

    /***/
    function NLl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RumWidgetToggleDirective", function () {
        return RumWidgetToggleDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var RumWidgetToggleDirective =
      /**
       * Constructor
       *
       * @param {ElementRef} elementRef
       */
      function RumWidgetToggleDirective(elementRef) {
        _classCallCheck(this, RumWidgetToggleDirective);

        this.elementRef = elementRef;
      };

      RumWidgetToggleDirective.ɵfac = function RumWidgetToggleDirective_Factory(t) {
        return new (t || RumWidgetToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      RumWidgetToggleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: RumWidgetToggleDirective,
        selectors: [["", "rumWidgetToggle", ""]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RumWidgetToggleDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[rumWidgetToggle]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
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
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "pu8Q");

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
        apiURL: config__WEBPACK_IMPORTED_MODULE_0__["config"].apiUrl
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
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
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
            var _this4 = this;

            this._router = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
            })).subscribe(function (event) {
              _this4.navlinks.forEach(function (link) {
                if (link.group) {
                  var routeUrl = _this4.getUrl();

                  var currentUrl = routeUrl.split('/');

                  if (currentUrl.indexOf(link.group) > 0) {
                    link.open = true;

                    _this4.closeOtherLinks(link);
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
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      var ThemeService = /*#__PURE__*/function () {
        function ThemeService(document, rendererFactory) {
          _classCallCheck(this, ThemeService);

          this.document = document;
          this.onThemeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.rumangoThemes = [{
            'name': 'egret-blue',
            'baseColor': '#10174c',
            'isActive': true
          }];
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
            console.log(themeName);
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
          key: "flipActiveFlag",
          value: function flipActiveFlag(themeName) {
            var _this5 = this;

            this.rumangoThemes.forEach(function (t) {
              t.isActive = false;

              if (t.name === themeName) {
                t.isActive = true;
                _this5.activatedTheme = t;
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
    "GGwj":
    /*!******************************************************************!*\
      !*** ./src/app/shared/components/sidemenu/sidemenu.component.ts ***!
      \******************************************************************/

    /*! exports provided: SidemenuComponent */

    /***/
    function GGwj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidemenuComponent", function () {
        return SidemenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/menu */
      "rJgo");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");

      var _c0 = ["childMenu"];

      function SidemenuComponent_span_2_span_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidemenuComponent_span_2_span_1_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.selectedSubName(child_r2.displayName);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-sidemenu", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          var child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r3.displaySubName === child_r2.displayName ? "#000000" : "#000000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r5.childMenu);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r2.iconName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r2.displayName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", child_r2.children);
        }
      }

      function SidemenuComponent_span_2_span_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidemenuComponent_span_2_span_2_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.selectedSubName(child_r2.displayName);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r4.displaySubName === child_r2.displayName ? "blue" : "#000000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", child_r2.route);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r2.iconName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r2.displayName);
        }
      }

      function SidemenuComponent_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidemenuComponent_span_2_span_1_Template, 8, 6, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidemenuComponent_span_2_span_2_Template, 6, 5, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var child_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child_r2.children && child_r2.children.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !child_r2.children || child_r2.children.length === 0);
        }
      }

      var SidemenuComponent = /*#__PURE__*/function () {
        // @Output() isExpanded = new EventEmitter(true);
        function SidemenuComponent(router) {
          _classCallCheck(this, SidemenuComponent);

          this.router = router;
        } // public sideNavState: boolean = false;
        // public linkText: boolean = false;


        _createClass(SidemenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.isExpanded.emit(true);
          }
        }, {
          key: "selectedSubName",
          value: function selectedSubName(dispSubName) {
            console.log(dispSubName);
            this.displaySubName = dispSubName;
            console.log(this.displaySubName);
          }
        }]);

        return SidemenuComponent;
      }();

      SidemenuComponent.ɵfac = function SidemenuComponent_Factory(t) {
        return new (t || SidemenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      SidemenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SidemenuComponent,
        selectors: [["app-sidemenu"]],
        viewQuery: function SidemenuComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.childMenu = _t.first);
          }
        },
        inputs: {
          items: "items"
        },
        decls: 3,
        vars: 2,
        consts: [[3, "overlapTrigger"], ["childMenu", "matMenu"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["mat-menu-item", "", "color", "primary", 1, "buttons", 3, "matMenuTriggerFor", "click"], [3, "items"], ["menu", ""], ["mat-menu-item", "", 1, "buttons", 3, "routerLink", "click"]],
        template: function SidemenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-menu", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidemenuComponent_span_2_Template, 3, 2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("overlapTrigger", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
          }
        },
        directives: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], SidemenuComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
        styles: ["mat-menu[_ngcontent-%COMP%] {\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2lkZW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxZQUFZO0FBQWQiLCJmaWxlIjoic2lkZW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxubWF0LW1lbnV7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidemenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sidemenu',
            templateUrl: './sidemenu.component.html',
            styleUrls: ['./sidemenu.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, {
          items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          childMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['childMenu']
          }]
        });
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
      "8Y7J");

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
      "8Y7J");
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
      "TSSN");
      /* harmony import */


      var _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/auth/jwt-auth.service */
      "nZzT");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/menu */
      "rJgo");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "ZFy/");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");

      function HeaderSideComponent_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderSideComponent_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.toggleSidenav();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderSideComponent_button_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderSideComponent_button_9_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var lang_r6 = ctx.$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.setLang(lang_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var lang_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("flag-icon mr-8 ", lang_r6.flag, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lang_r6.name);
        }
      }

      var HeaderSideComponent = /*#__PURE__*/function () {
        function HeaderSideComponent(themeService, layout, translate, renderer, jwtAuth) {
          _classCallCheck(this, HeaderSideComponent);

          this.themeService = themeService;
          this.layout = layout;
          this.translate = translate;
          this.renderer = renderer;
          this.jwtAuth = jwtAuth;
          this.availableLangs = [{
            name: 'EN',
            code: 'en',
            flag: 'flag-icon-us'
          }, {
            name: 'ES',
            code: 'es',
            flag: 'flag-icon-es'
          }];
          this.currentLang = this.availableLangs[0];
        }

        _createClass(HeaderSideComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.rumangoThemes = this.themeService.rumangoThemes;
            this.layoutConf = this.layout.layoutConf;
            this.translate.use(this.currentLang.code);
          }
        }, {
          key: "setLang",
          value: function setLang(lng) {
            this.currentLang = lng;
            this.translate.use(lng.code);
          }
        }, {
          key: "toggleNotific",
          value: function toggleNotific() {
            this.notificPanel.toggle();
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
          }
        }, {
          key: "toggleCollapse",
          value: function toggleCollapse() {
            // compact --> full
            if (this.layoutConf.sidebarStyle === 'compact') {
              return this.layout.publishLayoutChange({
                sidebarStyle: 'full',
                sidebarCompactToggle: false
              }, {
                transitionClass: true
              });
            } // * --> compact


            this.layout.publishLayoutChange({
              sidebarStyle: 'compact',
              sidebarCompactToggle: true
            }, {
              transitionClass: true
            });
          }
        }]);

        return HeaderSideComponent;
      }();

      HeaderSideComponent.ɵfac = function HeaderSideComponent_Factory(t) {
        return new (t || HeaderSideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__["JwtAuthService"]));
      };

      HeaderSideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderSideComponent,
        selectors: [["app-header-side"]],
        inputs: {
          notificPanel: "notificPanel"
        },
        decls: 30,
        vars: 13,
        consts: [[1, "topbar", "mat-bg-card"], ["mat-icon-button", "", "id", "sidenavToggle", "matTooltip", "Toggle Hide/Open", 3, "click", 4, "ngIf"], ["fxFlex", ""], ["mat-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "matTooltip", "Notifications", 1, "topbar-button-right", 3, "click"], [1, "notification-number", "mat-bg-warn"], ["mat-icon-button", "", 1, "topbar-button-right", "img-button", 3, "matMenuTriggerFor"], ["src", "assets/images/face-7.jpg", "alt", ""], ["accountMenu", "matMenu"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], ["mat-icon-button", "", "id", "sidenavToggle", "matTooltip", "Toggle Hide/Open", 3, "click"]],
        template: function HeaderSideComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderSideComponent_button_1_Template, 3, 0, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-menu", null, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderSideComponent_button_9_Template, 4, 4, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderSideComponent_Template_button_click_10_listener() {
              return ctx.toggleNotific();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-menu", null, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "account_box");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderSideComponent_Template_button_click_24_listener() {
              return ctx.jwtAuth.signout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "exit_to_app");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.sidebarStyle !== "compact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("flag-icon ", ctx.currentLang.flag, " mr-8");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentLang.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.availableLangs);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("overflow", "visible");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 11, "SIGNOUT"));
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuItem"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
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
            type: _services_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]
          }, {
            type: _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__["JwtAuthService"]
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
      "8Y7J");

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
    "JC+M":
    /*!****************************************************!*\
      !*** ./src/app/shared/directives/date-ago.pipe.ts ***!
      \****************************************************/

    /*! exports provided: DateAgoPipe */

    /***/
    function JCM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DateAgoPipe", function () {
        return DateAgoPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var DateAgoPipe = /*#__PURE__*/function () {
        function DateAgoPipe() {
          _classCallCheck(this, DateAgoPipe);
        }

        _createClass(DateAgoPipe, [{
          key: "transform",
          value: function transform(value, args) {
            if (value) {
              var seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
              if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
                return 'Just now';
              var intervals = {
                'year': 31536000,
                'month': 2592000,
                'week': 604800,
                'day': 86400,
                'hour': 3600,
                'minute': 60,
                'second': 1
              };
              var counter;

              for (var i in intervals) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0) if (counter === 1) {
                  return counter + ' ' + i + ' ago'; // singular (1 day ago)
                } else {
                  return counter + ' ' + i + 's ago'; // plural (2 days ago)
                }
              }
            }

            return value;
          }
        }]);

        return DateAgoPipe;
      }();

      DateAgoPipe.ɵfac = function DateAgoPipe_Factory(t) {
        return new (t || DateAgoPipe)();
      };

      DateAgoPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "dateAgo",
        type: DateAgoPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateAgoPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'dateAgo',
            pure: true
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
      "8Y7J");
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
            name: 'headerbar',
            type: 'link',
            state: 'others/headerbar'
          }, {
            name: 'DashboardDark',
            type: 'link',
            state: 'others/dashboardDark'
          }, {
            name: 'DashboardLight',
            type: 'link',
            state: 'others/dashboardLight'
          }, {
            name: 'menubar',
            type: 'link',
            state: 'others/menubar'
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
    "LRBz":
    /*!*******************************************!*\
      !*** ./src/app/shared/inmemory-db/log.ts ***!
      \*******************************************/

    /*! exports provided: LogDB */

    /***/
    function LRBz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogDB", function () {
        return LogDB;
      });

      var LogDB = function LogDB() {
        _classCallCheck(this, LogDB);
      };

      LogDB.logCollection = [{
        id: 1,
        title: "API problem",
        note: "API is malfunctioning. kindly fix it",
        body: "",
        res: "",
        header: "",
        selected: false
      }];
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
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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
            return this._check();
          }
        }, {
          key: "_check",
          value: function _check() {
            var _this6 = this;

            // Check the authentication status
            return this.jwtAuth.check().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (authenticated) {
              console.log("check status", authenticated); // If the user is not authenticated...

              if (!authenticated) {
                // Redirect to the sign-in page
                _this6.router.navigate(["/sessions/signin"]); // Prevent the access


                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
              } // Allow the access


              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
            }));
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__["JwtAuthService"]));
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
            type: _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__["JwtAuthService"]
          }];
        }, null);
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
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
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


      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

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
            exports: [_components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"], _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_10__["SharedPipesModule"], _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_11__["SharedDirectivesModule"]],
            declarations: []
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "PT0D":
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/avatar/avatar.component.ts ***!
      \**************************************************************/

    /*! exports provided: AvatarComponent */

    /***/
    function PT0D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AvatarComponent", function () {
        return AvatarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "ura0");

      function AvatarComponent_img_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function AvatarComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.initials, " ");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "background-color": a0
        };
      };

      var AvatarComponent = /*#__PURE__*/function () {
        function AvatarComponent() {
          _classCallCheck(this, AvatarComponent);

          this.showInitials = false;
          this.colors = ['#24CCA7', '#24CCA7', '#24CCA7', '#24CCA7'];
        }

        _createClass(AvatarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.photoUrl) {
              this.showInitials = true;
              this.createInititals();
              var randomIndex = Math.floor(Math.random() * Math.floor(this.colors.length));
              this.circleColor = this.colors[randomIndex];
            }
          }
        }, {
          key: "createInititals",
          value: function createInititals() {
            var names = this.name.split(' '),
                initials = names[0].substring(0, 1).toUpperCase();

            if (names.length > 1) {
              initials += names[names.length - 1].substring(0, 1).toUpperCase();
            }

            this.initials = initials;
            console.log("this.name", this.name);
            console.log("this.initials", this.initials);
          }
        }]);

        return AvatarComponent;
      }();

      AvatarComponent.ɵfac = function AvatarComponent_Factory(t) {
        return new (t || AvatarComponent)();
      };

      AvatarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AvatarComponent,
        selectors: [["app-photo"]],
        inputs: {
          photoUrl: "photoUrl",
          name: "name"
        },
        decls: 3,
        vars: 5,
        consts: [[1, "circle", 3, "ngStyle"], [3, "src", 4, "ngIf"], ["class", "initials", 4, "ngIf"], [3, "src"], [1, "initials"]],
        template: function AvatarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AvatarComponent_img_1_Template, 1, 1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AvatarComponent_div_2_Template, 2, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.circleColor));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showInitials);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showInitials);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultStyleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: [".circle[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.circle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n}\n\n.circle[_ngcontent-%COMP%]   .initials[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 20px;\n  line-height: 19px;\n  letter-spacing: 0.2625px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXZhdGFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDdkI7O0FBUEE7RUFVUSxrQkFBa0I7RUFDbEIsV0FBbUI7RUFDbkIsWUFBbUI7QUFDM0I7O0FBYkE7RUFnQlEsY0FBdUI7RUFDdkIsZUFBb0I7RUFDcEIsaUJBQW9CO0VBQ3BCLHdCQUF3QjtBQUNoQyIsImZpbGUiOiJhdmF0YXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2lyY2xlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8vIG1hcmdpbi10b3A6IDhweDtcclxuXHJcbiAgICBpbWd7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHdpZHRoICAgICAgICA6IDYwcHg7XHJcbiAgICAgICAgaGVpZ2h0ICAgICAgIDogNjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5pdGlhbHMge1xyXG4gICAgICAgIGNvbG9yICAgICAgICAgOiAjRkZGRkZGO1xyXG4gICAgICAgIGZvbnQtc2l6ZSAgICAgOiAyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0ICAgOiAxOXB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjI2MjVweDtcclxuICAgIH1cclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AvatarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-photo',
            templateUrl: './avatar.component.html',
            styleUrls: ['./avatar.component.scss']
          }]
        }], null, {
          photoUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          name: [{
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
        "./en-SG": "zavE",
        "./en-SG.js": "zavE",
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
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
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
    "Sc0o":
    /*!**********************************************************!*\
      !*** ./src/app/shared/interceptors/token.interceptor.ts ***!
      \**********************************************************/

    /*! exports provided: TokenInterceptor */

    /***/
    function Sc0o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
        return TokenInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/auth/jwt-auth.service */
      "nZzT");

      var TokenInterceptor = /*#__PURE__*/function () {
        function TokenInterceptor(jwtAuth) {
          _classCallCheck(this, TokenInterceptor);

          this.jwtAuth = jwtAuth;
        }

        _createClass(TokenInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var token = this.jwtAuth.token || this.jwtAuth.getJwtToken();
            var changedReq;
            /*  SGIFPCapture :
             is for biometric url checking,
             no need to append our bearer token */

            if (token && req.url.indexOf('SGIFPCapture') == -1 && req.url.indexOf('SGIMatchScore') == -1) {
              changedReq = req.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(token)
                }
              });
            } else {
              changedReq = req;
            }

            return next.handle(changedReq);
          }
        }]);

        return TokenInterceptor;
      }();

      TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) {
        return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_1__["JwtAuthService"]));
      };

      TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TokenInterceptor,
        factory: TokenInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_1__["JwtAuthService"]
          }];
        }, null);
      })();
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
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
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
          this.previousUrl = null;
          this.currentUrl = null;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.changePageTitle();
            console.log('test');
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "changePageTitle",
          value: function changePageTitle() {
            var _this7 = this;

            this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
            })).subscribe(function (routeChange) {
              var routeParts = _this7.routePartsService.generateRouteParts(_this7.activeRoute.snapshot);

              _this7.previousUrl = _this7.currentUrl;
              _this7.currentUrl = routeChange.url;
              console.log("routeChange", routeChange);

              if (!routeParts.length) {
                return _this7.title.setTitle(_this7.appTitle);
              } // Extract title from parts;


              _this7.pageTitle = routeParts.reverse().map(function (part) {
                return part.title;
              }).reduce(function (partA, partI) {
                return "".concat(partA, " > ").concat(partI);
              });
              _this7.pageTitle += " | ".concat(_this7.appTitle);

              _this7.title.setTitle(_this7.pageTitle);
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
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
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
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../directives/dropdown.directive */
      "Bp9c");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "ura0");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "ZFy/");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
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
      "UhP/");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");

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
      "8Y7J");
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
      "8Y7J");
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
      "VDRc");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "aLe/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../sidenav/sidenav.component */
      "TgYD");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "ura0");

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
            var _this8 = this;

            this.iconTypeMenuTitle = this.navService.iconTypeMenuTitle;
            this.menuItemsSub = this.navService.menuItems$.subscribe(function (menuItem) {
              _this8.menuItems = menuItem; //Checks item list has any icon type.

              _this8.hasIconTypeMenuItem = !!_this8.menuItems.filter(function (item) {
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
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function NotificationsComponent_mat_list_item_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 7);

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
          var n_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", n_r2.color);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](n_r2.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, n_r2.route || "/dashboard"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](n_r2.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](n_r2.time);
        }
      }

      function NotificationsComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsComponent_div_5_Template_a_click_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.clearAll($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Clear all notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var NotificationsComponent = /*#__PURE__*/function () {
        function NotificationsComponent(router) {
          _classCallCheck(this, NotificationsComponent);

          this.router = router; // Dummy notifications

          this.notifications = [{
            message: 'New transaction found',
            icon: 'assignment_ind',
            time: '1 min ago',
            route: '/',
            color: 'primary'
          }, {
            message: 'New message',
            icon: 'chat',
            time: '4 min ago',
            route: '/',
            color: 'accent'
          }, {
            message: 'Server rebooted',
            icon: 'settings_backup_restore',
            time: '12 min ago',
            route: '/',
            color: 'warn'
          }];
        }

        _createClass(NotificationsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.router.events.subscribe(function (routeChange) {
              if (routeChange instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this9.notificPanel.close();
              }
            });
          }
        }, {
          key: "clearAll",
          value: function clearAll(e) {
            e.preventDefault();
            this.notifications = [];
          }
        }]);

        return NotificationsComponent;
      }();

      NotificationsComponent.ɵfac = function NotificationsComponent_Factory(t) {
        return new (t || NotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      NotificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotificationsComponent,
        selectors: [["app-notifications"]],
        inputs: {
          notificPanel: "notificPanel"
        },
        decls: 6,
        vars: 2,
        consts: [[1, "text-center", "mat-bg-primary", "pt-16", "pb-16"], [1, "m-0", "text-white"], ["role", "list", 1, "notification-list"], ["class", "notific-item", "role", "listitem", "routerLinkActive", "open", 4, "ngFor", "ngForOf"], ["class", "text-center mt-16", 4, "ngIf"], ["role", "listitem", "routerLinkActive", "open", 1, "notific-item"], [1, "notific-icon", "mr-16", 3, "color"], [3, "routerLink"], [1, "mat-list-text"], [1, "message"], [1, "time", "text-muted"], [1, "text-center", "mt-16"], ["href", "#", 3, "click"]],
        template: function NotificationsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Notifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-nav-list", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotificationsComponent_mat_list_item_4_Template, 9, 7, "mat-list-item", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotificationsComponent_div_5_Template, 4, 0, "div", 4);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notifications.length);
          }
        },
        directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-notifications',
            templateUrl: './notifications.component.html'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
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
      "8Y7J");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

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
    "Y9BQ":
    /*!***********************************************************!*\
      !*** ./src/app/shared/inmemory-db/inmemory-db.service.ts ***!
      \***********************************************************/

    /*! exports provided: InMemoryDataService */

    /***/
    function Y9BQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function () {
        return InMemoryDataService;
      });
      /* harmony import */


      var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./log */
      "LRBz");

      var InMemoryDataService = /*#__PURE__*/function () {
        function InMemoryDataService() {
          _classCallCheck(this, InMemoryDataService);
        }

        _createClass(InMemoryDataService, [{
          key: "createDb",
          value: function createDb() {
            return {
              'apiLog': _log__WEBPACK_IMPORTED_MODULE_0__["LogDB"].logCollection
            };
          }
        }]);

        return InMemoryDataService;
      }();
      /***/

    },

    /***/
    "Ya7Z":
    /*!****************************************************************!*\
      !*** ./src/app/shared/directives/uppercase-input.directive.ts ***!
      \****************************************************************/

    /*! exports provided: UppercaseInputDirective */

    /***/
    function Ya7Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UppercaseInputDirective", function () {
        return UppercaseInputDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var UppercaseInputDirective = /*#__PURE__*/function () {
        function UppercaseInputDirective(ref) {
          _classCallCheck(this, UppercaseInputDirective);

          this.ref = ref;
        }

        _createClass(UppercaseInputDirective, [{
          key: "onInput",
          value: function onInput($event) {
            var start = $event.target.selectionStart;
            var end = $event.target.selectionEnd;
            $event.target.value = $event.target.value.toUpperCase();
            $event.target.setSelectionRange(start, end);
            $event.preventDefault();

            if (!this.lastValue || this.lastValue && $event.target.value.length > 0 && this.lastValue !== $event.target.value) {
              this.lastValue = this.ref.nativeElement.value = $event.target.value; // Propagation

              var evt = document.createEvent('HTMLEvents');
              evt.initEvent('input', false, true);
              event.target.dispatchEvent(evt);
            }
          }
        }]);

        return UppercaseInputDirective;
      }();

      UppercaseInputDirective.ɵfac = function UppercaseInputDirective_Factory(t) {
        return new (t || UppercaseInputDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      UppercaseInputDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: UppercaseInputDirective,
        selectors: [["", "appUppercaseInput", ""]],
        hostBindings: function UppercaseInputDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function UppercaseInputDirective_input_HostBindingHandler($event) {
              return ctx.onInput($event);
            });
          }
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UppercaseInputDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[appUppercaseInput]',
            host: {
              '(input)': '$event'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          onInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['input', ['$event']]
          }]
        });
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
      "8Y7J");

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
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "aLe/");
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
      "IheW");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "k5Gf");
      /* harmony import */


      var _shared_services_error_handler_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./shared/services/error-handler.service */
      "nAk8");
      /* harmony import */


      var _shared_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./shared/interceptors/token.interceptor */
      "Sc0o");
      /* harmony import */


      var _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @syncfusion/ej2-angular-schedule */
      "7qXh");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-toastr */
      "EApP");
      /* harmony import */


      var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-infinite-scroll */
      "MNke");
      /* harmony import */


      var _shared_shared_material_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./shared/shared-material.module */
      "zMWy");
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng2-search-filter */
      "KeVr");
      /* harmony import */


      var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! angular-in-memory-web-api */
      "wzUX");
      /* harmony import */


      var _shared_inmemory_db_inmemory_db_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./shared/inmemory-db/inmemory-db.service */
      "Y9BQ");
      /* harmony import */


      var ngx_quicklink__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ngx-quicklink */
      "bYOv");
      /* harmony import */


      var _shared_interceptors_logging_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./shared/interceptors/logging-interceptor */
      "m6vz"); //import { KycVerificationMethodComponent } from './kyc-verification-method/kyc-verification-method.component';
      // import { IgxCalendarModule } from 'igniteui-angular';
      // AoT requires an exported function for factories


      function HttpLoaderFactory(httpClient) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](httpClient, "./assets/i18n/", ".json");
      }

      ;
      var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true,
        suppressScrollY: true,
        wheelPropagation: true
      };

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_13__["DayService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_13__["WeekService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_13__["WorkWeekService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_13__["MonthService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_13__["MonthAgendaService"], {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
          useClass: _shared_services_error_handler_service__WEBPACK_IMPORTED_MODULE_11__["ErrorHandlerService"]
        }, // { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
        {
          provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PERFECT_SCROLLBAR_CONFIG"],
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }, // REQUIRED IF YOU USE JWT AUTHENTICATION
        {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
          useClass: _shared_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_12__["TokenInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
          useClass: _shared_interceptors_logging_interceptor__WEBPACK_IMPORTED_MODULE_21__["LoggingInterceptor"],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_15__["InfiniteScrollModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HammerModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ngx_quicklink__WEBPACK_IMPORTED_MODULE_20__["QuicklinkModule"], _shared_shared_material_module__WEBPACK_IMPORTED_MODULE_16__["SharedMaterialModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_17__["Ng2SearchPipeModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"].forRoot(), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
          }
        }), angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_18__["InMemoryWebApiModule"].forRoot(_shared_inmemory_db_inmemory_db_service__WEBPACK_IMPORTED_MODULE_19__["InMemoryDataService"], {
          passThruUnknownUrl: true
        }), _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_5__["rootRouterConfig"], {
          preloadingStrategy: ngx_quicklink__WEBPACK_IMPORTED_MODULE_20__["QuicklinkStrategy"],
          useHash: true,
          relativeLinkResolution: 'legacy'
        }), _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_13__["ScheduleModule"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_13__["RecurrenceEditorModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_15__["InfiniteScrollModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HammerModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ngx_quicklink__WEBPACK_IMPORTED_MODULE_20__["QuicklinkModule"], _shared_shared_material_module__WEBPACK_IMPORTED_MODULE_16__["SharedMaterialModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_17__["Ng2SearchPipeModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_18__["InMemoryWebApiModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_13__["ScheduleModule"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_13__["RecurrenceEditorModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_15__["InfiniteScrollModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HammerModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ngx_quicklink__WEBPACK_IMPORTED_MODULE_20__["QuicklinkModule"], _shared_shared_material_module__WEBPACK_IMPORTED_MODULE_16__["SharedMaterialModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_17__["Ng2SearchPipeModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"].forRoot(), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
              loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                useFactory: HttpLoaderFactory,
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
              }
            }), angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_18__["InMemoryWebApiModule"].forRoot(_shared_inmemory_db_inmemory_db_service__WEBPACK_IMPORTED_MODULE_19__["InMemoryDataService"], {
              passThruUnknownUrl: true
            }), _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_5__["rootRouterConfig"], {
              preloadingStrategy: ngx_quicklink__WEBPACK_IMPORTED_MODULE_20__["QuicklinkStrategy"],
              useHash: true,
              relativeLinkResolution: 'legacy'
            }), _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_13__["ScheduleModule"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_13__["RecurrenceEditorModule"]],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            providers: [_syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_13__["DayService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_13__["WeekService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_13__["WorkWeekService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_13__["MonthService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_13__["MonthAgendaService"], {
              provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
              useClass: _shared_services_error_handler_service__WEBPACK_IMPORTED_MODULE_11__["ErrorHandlerService"]
            }, // { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
            {
              provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PERFECT_SCROLLBAR_CONFIG"],
              useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }, // REQUIRED IF YOU USE JWT AUTHENTICATION
            {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
              useClass: _shared_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_12__["TokenInterceptor"],
              multi: true
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
              useClass: _shared_interceptors_logging_interceptor__WEBPACK_IMPORTED_MODULE_21__["LoggingInterceptor"],
              multi: true
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
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
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
      /* harmony import */


      var _remove_comma_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./remove-comma.pipe */
      "59kF");

      var pipes = [_relative_time_pipe__WEBPACK_IMPORTED_MODULE_2__["RelativeTimePipe"], _excerpt_pipe__WEBPACK_IMPORTED_MODULE_3__["ExcerptPipe"], _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_4__["GetValueByKeyPipe"], _remove_comma_pipe__WEBPACK_IMPORTED_MODULE_5__["RemoveCommaPipe"]];

      var SharedPipesModule = function SharedPipesModule() {
        _classCallCheck(this, SharedPipesModule);
      };

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
          declarations: [_relative_time_pipe__WEBPACK_IMPORTED_MODULE_2__["RelativeTimePipe"], _excerpt_pipe__WEBPACK_IMPORTED_MODULE_3__["ExcerptPipe"], _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_4__["GetValueByKeyPipe"], _remove_comma_pipe__WEBPACK_IMPORTED_MODULE_5__["RemoveCommaPipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_relative_time_pipe__WEBPACK_IMPORTED_MODULE_2__["RelativeTimePipe"], _excerpt_pipe__WEBPACK_IMPORTED_MODULE_3__["ExcerptPipe"], _get_value_by_key_pipe__WEBPACK_IMPORTED_MODULE_4__["GetValueByKeyPipe"], _remove_comma_pipe__WEBPACK_IMPORTED_MODULE_5__["RemoveCommaPipe"]]
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

      var rootRouterConfig = [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | views-home-home-module */
          "views-home-home-module").then(__webpack_require__.bind(null,
          /*! ./views/home/home.module */
          "XWda")).then(function (m) {
            return m.HomeModule;
          });
        },
        data: {
          title: 'iCust Apps'
        }
      }, {
        path: '**',
        redirectTo: 'home'
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
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");
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


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "q7Ft");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "ura0");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "aLe/");
      /* harmony import */


      var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../notifications/notifications.component */
      "X2tk");
      /* harmony import */


      var _header_top_header_top_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../header-top/header-top.component */
      "urBs");
      /* harmony import */


      var _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../sidebar-side/sidebar-side.component */
      "UnY0");
      /* harmony import */


      var _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../sidebar-top/sidebar-top.component */
      "s0uO");
      /* harmony import */


      var _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../header-side/header-side.component */
      "Hkp+");

      function AdminLayoutComponent_app_header_top_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-top", 15);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notificPanel", _r7);
        }
      }

      function AdminLayoutComponent_app_sidebar_side_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-sidebar-side", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function AdminLayoutComponent_app_sidebar_side_4_Template_app_sidebar_side_mouseenter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.sidebarMouseenter($event);
          })("mouseleave", function AdminLayoutComponent_app_sidebar_side_4_Template_app_sidebar_side_mouseleave_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.sidebarMouseleave($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdminLayoutComponent_app_sidebar_top_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sidebar-top");
        }
      }

      function AdminLayoutComponent_app_header_side_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-side", 15);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notificPanel", _r7);
        }
      }

      function AdminLayoutComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdminLayoutComponent_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 21);
        }
      }

      function AdminLayoutComponent_app_footer_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-footer", 22);
        }
      }

      var _c0 = function _c0(a0, a1, a2, a3, a4, a5, a6, a7) {
        return {
          "navigation-top": a0,
          "sidebar-full": a1,
          "sidebar-compact": a2,
          "compact-toggle-active": a3,
          "sidebar-compact-big": a4,
          "sidebar-opened": a5,
          "sidebar-closed": a6,
          "fixed-topbar": a7
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "visible": a0
        };
      };

      var AdminLayoutComponent = /*#__PURE__*/function () {
        function AdminLayoutComponent(router, translate, themeService, layout, cdr, jwtAuth) {
          var _this10 = this;

          _classCallCheck(this, AdminLayoutComponent);

          // Check Auth Token is valid
          // this.jwtAuth.checkTokenIsValid().subscribe();
          this.router = router;
          this.translate = translate;
          this.themeService = themeService;
          this.layout = layout;
          this.cdr = cdr;
          this.jwtAuth = jwtAuth;
          this.isModuleLoading = false;
          this.scrollConfig = {};
          this.layoutConf = {};
          this.adminContainerClasses = {}; // Close sidenav after route change in mobile

          this.routerEventSub = router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
          })).subscribe(function (routeChange) {
            _this10.layout.adjustLayout({
              route: routeChange.url
            });

            _this10.scrollToTop();
          }); // Translator init

          var browserLang = translate.getBrowserLang();
          translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
        }

        _createClass(AdminLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            // this.layoutConf = this.layout.layoutConf;
            this.layoutConfSub = this.layout.layoutConf$.subscribe(function (layoutConf) {
              _this11.layoutConf = layoutConf; // console.log(this.layoutConf);

              _this11.adminContainerClasses = _this11.updateAdminContainerClasses(_this11.layoutConf);

              _this11.cdr.markForCheck();
            }); // FOR MODULE LOADER FLAG

            this.moduleLoaderSub = this.router.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadStart"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["ResolveStart"]) {
                _this11.isModuleLoading = true;
              }

              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["ResolveEnd"]) {
                _this11.isModuleLoading = false;
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
            var _this12 = this;

            if (document) {
              setTimeout(function () {
                var element;

                if (_this12.layoutConf.topbarFixed) {
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
        return new (t || AdminLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_6__["JwtAuthService"]));
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
        decls: 19,
        vars: 30,
        consts: [[1, "app-admin-wrap", 3, "dir"], [3, "notificPanel", 4, "ngIf"], [3, "dir", "ngClass"], [3, "mouseenter", "mouseleave", 4, "ngIf"], [4, "ngIf"], ["id", "main-content-wrap", 3, "perfectScrollbar", "disabled"], ["id", "rightside-content-hold", 1, "rightside-content-hold", 3, "perfectScrollbar", "disabled"], ["class", "view-loader", "style", "position:fixed;", "fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], [1, "container-dynamic"], ["class", "m-auto", 4, "ngIf"], ["style", "margin: 0 -.33rem -.33rem", 4, "ngIf"], [1, "sidebar-backdrop", 3, "ngClass", "click"], ["mode", "over", "position", "end", 1, ""], ["notificationPanel", ""], ["fxLayout", "column", 1, "nofication-panel"], [3, "notificPanel"], [3, "mouseenter", "mouseleave"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "view-loader", 2, "position", "fixed"], [1, "spinner"], [1, "double-bounce1", "mat-bg-accent"], [1, "double-bounce2", "mat-bg-primary"], [1, "m-auto"], [2, "margin", "0 -.33rem -.33rem"]],
        template: function AdminLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminLayoutComponent_app_header_top_1_Template, 1, 1, "app-header-top", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdminLayoutComponent_app_sidebar_side_4_Template, 1, 0, "app-sidebar-side", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AdminLayoutComponent_app_sidebar_top_5_Template, 1, 0, "app-sidebar-top", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminLayoutComponent_app_header_side_7_Template, 1, 1, "app-header-side", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AdminLayoutComponent_div_9_Template, 4, 0, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-breadcrumb", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AdminLayoutComponent_span_12_Template, 1, 0, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AdminLayoutComponent_app_footer_13_Template, 1, 0, "app-footer", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminLayoutComponent_Template_div_click_14_listener() {
              return ctx.closeSidebar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-sidenav", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-notifications", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dir", ctx.layoutConf == null ? null : ctx.layoutConf.dir);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.navigationPos === "top");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("app-admin-container app-side-nav-container mat-drawer-transition sidebar-", ctx.layoutConf == null ? null : ctx.layoutConf.sidebarColor, " topbar-", ctx.layoutConf == null ? null : ctx.layoutConf.topbarColor, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dir", ctx.layoutConf.dir)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction8"](19, _c0, ctx.layoutConf.navigationPos === "top", ctx.layoutConf.sidebarStyle === "full", ctx.layoutConf.sidebarStyle === "compact" && ctx.layoutConf.navigationPos === "side", ctx.layoutConf.sidebarCompactToggle, ctx.layoutConf.sidebarStyle === "compact-big" && ctx.layoutConf.navigationPos === "side", ctx.layoutConf.sidebarStyle !== "closed" && ctx.layoutConf.navigationPos === "side", ctx.layoutConf.sidebarStyle === "closed", ctx.layoutConf.topbarFixed && ctx.layoutConf.navigationPos === "side"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.navigationPos === "side");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.navigationPos === "top" && ctx.layoutConf.isMobile);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.layoutConf.topbarFixed || !ctx.layoutConf.perfectScrollbar);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.navigationPos === "side");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx.scrollConfig)("disabled", !ctx.layoutConf.topbarFixed || !ctx.layoutConf.perfectScrollbar);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isModuleLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.layoutConf.footerFixed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.layoutConf.footerFixed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c1, ctx.layoutConf.sidebarStyle !== "closed" && ctx.layoutConf.isMobile));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notificPanel", _r7);
          }
        },
        directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Dir"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavContainer"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["DefaultClassDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavContent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarDirective"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenav"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_14__["NotificationsComponent"], _header_top_header_top_component__WEBPACK_IMPORTED_MODULE_15__["HeaderTopComponent"], _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_16__["SidebarSideComponent"], _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_17__["SidebarTopComponent"], _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_18__["HeaderSideComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutAlignDirective"]],
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
      "8Y7J");

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
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _shared_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared-material.module */
      "zMWy");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "aLe/");
      /* harmony import */


      var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../pipes/shared-pipes.module */
      "aYsj");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout */
      "u9T3");
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


      var _egret_sidebar_egret_sidebar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./egret-sidebar/egret-sidebar.component */
      "l3Mw");
      /* harmony import */


      var _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./sidemenu/sidemenu.component */
      "GGwj");
      /* harmony import */


      var _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./avatar/avatar.component */
      "PT0D"); // ONLY REQUIRED FOR **SIDE** NAVIGATION LAYOUT
      // ONLY REQUIRED FOR **TOP** NAVIGATION LAYOUT
      // ALWAYS REQUIRED 


      var components = [_header_top_header_top_component__WEBPACK_IMPORTED_MODULE_12__["HeaderTopComponent"], _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_13__["SidebarTopComponent"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__["SidenavComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__["NotificationsComponent"], _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_11__["SidebarSideComponent"], _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_10__["HeaderSideComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_14__["AdminLayoutComponent"], _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_15__["AuthLayoutComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__["BreadcrumbComponent"], _egret_sidebar_egret_sidebar_component__WEBPACK_IMPORTED_MODULE_23__["EgretSidebarComponent"], _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_19__["AppComfirmComponent"], _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_20__["AppLoaderComponent"], _button_loading_button_loading_component__WEBPACK_IMPORTED_MODULE_21__["ButtonLoadingComponent"], _bottom_sheet_share_bottom_sheet_share_component__WEBPACK_IMPORTED_MODULE_22__["BottomSheetShareComponent"], _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_24__["SidemenuComponent"], _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_25__["AvatarComponent"]];

      var SharedComponentsModule = function SharedComponentsModule() {
        _classCallCheck(this, SharedComponentsModule);
      };

      SharedComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SharedComponentsModule
      });
      SharedComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SharedComponentsModule_Factory(t) {
          return new (t || SharedComponentsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"], _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_7__["SharedPipesModule"], _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_9__["SharedDirectivesModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_2__["SharedMaterialModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedComponentsModule, {
          declarations: [_header_top_header_top_component__WEBPACK_IMPORTED_MODULE_12__["HeaderTopComponent"], _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_13__["SidebarTopComponent"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__["SidenavComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__["NotificationsComponent"], _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_11__["SidebarSideComponent"], _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_10__["HeaderSideComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_14__["AdminLayoutComponent"], _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_15__["AuthLayoutComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__["BreadcrumbComponent"], _egret_sidebar_egret_sidebar_component__WEBPACK_IMPORTED_MODULE_23__["EgretSidebarComponent"], _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_19__["AppComfirmComponent"], _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_20__["AppLoaderComponent"], _button_loading_button_loading_component__WEBPACK_IMPORTED_MODULE_21__["ButtonLoadingComponent"], _bottom_sheet_share_bottom_sheet_share_component__WEBPACK_IMPORTED_MODULE_22__["BottomSheetShareComponent"], _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_24__["SidemenuComponent"], _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_25__["AvatarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"], _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_7__["SharedPipesModule"], _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_9__["SharedDirectivesModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_2__["SharedMaterialModule"]],
          exports: [_header_top_header_top_component__WEBPACK_IMPORTED_MODULE_12__["HeaderTopComponent"], _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_13__["SidebarTopComponent"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__["SidenavComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__["NotificationsComponent"], _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_11__["SidebarSideComponent"], _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_10__["HeaderSideComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_14__["AdminLayoutComponent"], _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_15__["AuthLayoutComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__["BreadcrumbComponent"], _egret_sidebar_egret_sidebar_component__WEBPACK_IMPORTED_MODULE_23__["EgretSidebarComponent"], _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_19__["AppComfirmComponent"], _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_20__["AppLoaderComponent"], _button_loading_button_loading_component__WEBPACK_IMPORTED_MODULE_21__["ButtonLoadingComponent"], _bottom_sheet_share_bottom_sheet_share_component__WEBPACK_IMPORTED_MODULE_22__["BottomSheetShareComponent"], _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_24__["SidemenuComponent"], _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_25__["AvatarComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedComponentsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"], _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_7__["SharedPipesModule"], _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_9__["SharedDirectivesModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_2__["SharedMaterialModule"]],
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
      "8Y7J");
      /* harmony import */


      var app_shared_services_match_media_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! app/shared/services/match-media.service */
      "30N5");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout */
      "u9T3");
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
            var _this13 = this;

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
              if (_this13.mediaObserver.isActive(_this13.lockedBreakpoint)) {
                _this13.sidebarLockedOpen = true;
                _this13.opened = true;
              } else {
                _this13.sidebarLockedOpen = false;
                _this13.opened = false;
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
            var _this14 = this;

            this.backdrop = this._renderer.createElement("div");
            this.backdrop.classList.add("egret-sidebar-overlay");

            this._renderer.appendChild(this._elementRef.nativeElement.parentElement, this.backdrop); // Close sidebar onclick


            this.backdrop.addEventListener("click", function () {
              _this14.close();
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
    "m6vz":
    /*!************************************************************!*\
      !*** ./src/app/shared/interceptors/logging-interceptor.ts ***!
      \************************************************************/

    /*! exports provided: LoggingInterceptor */

    /***/
    function m6vz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoggingInterceptor", function () {
        return LoggingInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var LoggingInterceptor = /*#__PURE__*/function () {
        function LoggingInterceptor() {
          _classCallCheck(this, LoggingInterceptor);
        }

        _createClass(LoggingInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var _this15 = this;

            var startTime = Date.now();
            var status;
            return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) {
              status = '';

              if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                status = 'succeeded';
              }
            }, function (error) {
              return status = 'failed';
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
              // console.log("REQ HTTP", req);
              var elapsedTime = Date.now() - startTime;
              var message = req.method + " " + req.urlWithParams + " " + status + " in " + elapsedTime + "ms";

              _this15.logDetails(message);
            }));
          }
        }, {
          key: "logDetails",
          value: function logDetails(msg) {// console.log(msg);
          }
        }]);

        return LoggingInterceptor;
      }();

      LoggingInterceptor.ɵfac = function LoggingInterceptor_Factory(t) {
        return new (t || LoggingInterceptor)();
      };

      LoggingInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LoggingInterceptor,
        factory: LoggingInterceptor.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoggingInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], null, null);
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
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
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
      /* harmony import */


      var _widget_toggle_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./widget-toggle.directive */
      "5NLl");
      /* harmony import */


      var _uppercase_input_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./uppercase-input.directive */
      "Ya7Z");
      /* harmony import */


      var _date_ago_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./date-ago.pipe */
      "JC+M");
      /* harmony import */


      var _only_number_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./only-number.directive */
      "2Goh");

      var directives = [_scroll_to_directive__WEBPACK_IMPORTED_MODULE_2__["ScrollToDirective"], _dropdown_directive__WEBPACK_IMPORTED_MODULE_3__["AppDropdownDirective"], _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_4__["DropdownAnchorDirective"], _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_5__["DropdownLinkDirective"], _egret_side_nav_toggle_directive__WEBPACK_IMPORTED_MODULE_6__["EgretSideNavToggleDirective"], _egret_sidenav_helper_egret_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_7__["EgretSidenavHelperDirective"], _egret_sidenav_helper_egret_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_7__["EgretSidenavTogglerDirective"], _widget_toggle_directive__WEBPACK_IMPORTED_MODULE_8__["RumWidgetToggleDirective"], _uppercase_input_directive__WEBPACK_IMPORTED_MODULE_9__["UppercaseInputDirective"], _date_ago_pipe__WEBPACK_IMPORTED_MODULE_10__["DateAgoPipe"], _only_number_directive__WEBPACK_IMPORTED_MODULE_11__["OnlyNumberDirective"]];

      var SharedDirectivesModule = function SharedDirectivesModule() {
        _classCallCheck(this, SharedDirectivesModule);
      };

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
          declarations: [_scroll_to_directive__WEBPACK_IMPORTED_MODULE_2__["ScrollToDirective"], _dropdown_directive__WEBPACK_IMPORTED_MODULE_3__["AppDropdownDirective"], _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_4__["DropdownAnchorDirective"], _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_5__["DropdownLinkDirective"], _egret_side_nav_toggle_directive__WEBPACK_IMPORTED_MODULE_6__["EgretSideNavToggleDirective"], _egret_sidenav_helper_egret_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_7__["EgretSidenavHelperDirective"], _egret_sidenav_helper_egret_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_7__["EgretSidenavTogglerDirective"], _widget_toggle_directive__WEBPACK_IMPORTED_MODULE_8__["RumWidgetToggleDirective"], _uppercase_input_directive__WEBPACK_IMPORTED_MODULE_9__["UppercaseInputDirective"], _date_ago_pipe__WEBPACK_IMPORTED_MODULE_10__["DateAgoPipe"], _only_number_directive__WEBPACK_IMPORTED_MODULE_11__["OnlyNumberDirective"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_scroll_to_directive__WEBPACK_IMPORTED_MODULE_2__["ScrollToDirective"], _dropdown_directive__WEBPACK_IMPORTED_MODULE_3__["AppDropdownDirective"], _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_4__["DropdownAnchorDirective"], _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_5__["DropdownLinkDirective"], _egret_side_nav_toggle_directive__WEBPACK_IMPORTED_MODULE_6__["EgretSideNavToggleDirective"], _egret_sidenav_helper_egret_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_7__["EgretSidenavHelperDirective"], _egret_sidenav_helper_egret_sidenav_helper_directive__WEBPACK_IMPORTED_MODULE_7__["EgretSidenavTogglerDirective"], _widget_toggle_directive__WEBPACK_IMPORTED_MODULE_8__["RumWidgetToggleDirective"], _uppercase_input_directive__WEBPACK_IMPORTED_MODULE_9__["UppercaseInputDirective"], _date_ago_pipe__WEBPACK_IMPORTED_MODULE_10__["DateAgoPipe"], _only_number_directive__WEBPACK_IMPORTED_MODULE_11__["OnlyNumberDirective"]]
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
      "8Y7J");

      var ErrorHandlerService = /*#__PURE__*/function (_angular_core__WEBPAC) {
        _inherits(ErrorHandlerService, _angular_core__WEBPAC);

        var _super = _createSuper(ErrorHandlerService);

        function ErrorHandlerService(injector) {
          var _this16;

          _classCallCheck(this, ErrorHandlerService);

          _this16 = _super.call(this);
          _this16.injector = injector;
          _this16.errorCount = 0;
          return _this16;
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

    /*! exports provided: DEMO_TOKEN, DEMO_USER, JwtAuthService */

    /***/
    function nZzT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEMO_TOKEN", function () {
        return DEMO_TOKEN;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEMO_USER", function () {
        return DEMO_USER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JwtAuthService", function () {
        return JwtAuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _local_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../local-store.service */
      "tZUg");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var DEMO_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlNha3RoaXZlbCBNIiwiaWF0IjoxNTE2MjM5MDIyfQ.bBICv7tbGE5acaOULVhq_q9O50dHiYDnSfQYg3_Av1k";
      var DEMO_USER = {
        "userName": "CHANDRASEKHAR",
        "userId": 1,
        "tellerName": "Chandra Sekhar"
      };

      var JwtAuthService = /*#__PURE__*/function () {
        function JwtAuthService(ls, http, router, route) {
          var _this17 = this;

          _classCallCheck(this, JwtAuthService);

          this.ls = ls;
          this.http = http;
          this.router = router;
          this.route = route;
          this.user = {};
          this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](this.user);
          this.JWT_TOKEN = "token";
          this.APP_USER = "ICUST_USER";
          this.route.queryParams.subscribe(function (params) {
            return _this17["return"] = params['return'] || '/';
          });
        }
        /**
        * Setter & getter for access token
        */


        _createClass(JwtAuthService, [{
          key: "accessToken",
          get: function get() {
            var _a;

            return (_a = localStorage.getItem('accessToken')) !== null && _a !== void 0 ? _a : '';
          },
          set: function set(token) {
            localStorage.setItem('accessToken', token);
          }
        }, {
          key: "signin",
          value: function signin() {
            var _this18 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({
              token: DEMO_TOKEN,
              user: DEMO_USER
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              _this18.setUserAndToken(res.token, res.user, !!res);

              _this18.signingIn = true;
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error);
            }));
          }
          /*
            checkTokenIsValid is called inside constructor of
            shared/components/layouts/admin-layout/admin-layout.component.ts
          */

        }, {
          key: "checkTokenIsValid",
          value: function checkTokenIsValid() {
            var _this19 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(DEMO_USER).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (profile) {
              _this19.setUserAndToken(_this19.getJwtToken(), profile, true);

              _this19.signingIn = false;
              return profile;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(error);
            }));
          }
        }, {
          key: "signout",
          value: function signout() {
            this.ls.clear();
            sessionStorage.clear();
            this.signingIn = false;
            this.router.navigate(["/sessions/signin"]);
          }
        }, {
          key: "isLoggedIn",
          value: function isLoggedIn() {
            return !!this.getJwtToken();
          }
        }, {
          key: "getJwtToken",
          value: function getJwtToken() {
            return this.ls.getItem(this.JWT_TOKEN);
          }
        }, {
          key: "getUser",
          value: function getUser() {
            return this.ls.getItem(this.APP_USER);
          }
        }, {
          key: "setUserAndToken",
          value: function setUserAndToken(token, user, isAuthenticated) {
            this.isAuthenticated = isAuthenticated;
            this.token = token;
            this.accessToken = token;
            this.user = user;
            this.user$.next(user);
            this.ls.setItem(this.JWT_TOKEN, token);
            this.ls.setItem(this.APP_USER, user);
            sessionStorage.clear();
          }
        }, {
          key: "check",
          value: function check() {
            // Check if the user is logged in
            if (this.accessToken) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(true);
            } else {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(false);
            }
          }
        }, {
          key: "encodeData",
          value: function encodeData(data) {
            return btoa(data);
          }
        }, {
          key: "decodeData",
          value: function decodeData(data) {
            console.log("data decr", data);
            var user = atob(data);
            console.log("decr", user);
            return JSON.parse(user);
          }
        }, {
          key: "getEncryptedToken",
          value: function getEncryptedToken() {
            var user = this.getUser();
            var encodedUser = this.encodeData(user);
            return encodedUser;
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
      "8Y7J");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "Km1n");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");

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
      "8Y7J");
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
      "q7Ft");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout */
      "u9T3");

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
            var _this20 = this;

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
              if (_this20.mediaObserver.isActive(_this20.isOpenBreakpoint)) {
                _this20.isOpen = true;
                _this20.matSidenav.mode = "side";

                _this20.matSidenav.toggle(true);
              } else {
                _this20.isOpen = false;
                _this20.matSidenav.mode = "over";

                _this20.matSidenav.toggle(false);
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
      "8Y7J");
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
      "8Y7J");
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
            navigationPos: 'top',
            sidebarStyle: 'full',
            sidebarColor: 'slate',
            sidebarCompactToggle: false,
            dir: 'ltr',
            useBreadcrumb: true,
            topbarFixed: false,
            footerFixed: false,
            topbarColor: 'white',
            footerColor: 'slate',
            matTheme: 'egret-blue',
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
            this.themeService.applyMatTheme(theme);
          }
        }, {
          key: "adjustLayout",
          value: function adjustLayout() {
            var _this21 = this;

            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var sidebarStyle;
            this.isMobile = this.isSm();
            this.currentRoute = options.route || this.currentRoute;
            sidebarStyle = this.isMobile ? 'closed' : 'full';

            if (this.currentRoute) {
              this.fullWidthRoutes.forEach(function (route) {
                if (_this21.currentRoute.indexOf(route) !== -1) {
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
      "8Y7J");
      /* harmony import */


      var _shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/services/navigation.service */
      "LFK6");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "aLe/");
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
            var _this22 = this;

            this.menuItemsSub = this.navService.menuItems$.subscribe(function (menuItem) {
              _this22.menuItems = menuItem.filter(function (item) {
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
      "8Y7J");

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
      "8Y7J");

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
        }, {
          key: "removeItem",
          value: function removeItem(key) {
            this.ls.removeItem(key);
          }
        }, {
          key: "getParameterByName",
          value: function getParameterByName(name) {
            var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.href;
            name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
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
      "8Y7J");
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
      "TSSN");
      /* harmony import */


      var _services_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/layout.service */
      "rmxa");
      /* harmony import */


      var app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/services/auth/jwt-auth.service */
      "nZzT");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "ZFy/");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "jMqV");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/menu */
      "rJgo");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function HeaderTopComponent_button_35_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_button_35_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.toggleSidenav();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var HeaderTopComponent = /*#__PURE__*/function () {
        function HeaderTopComponent(layout, navService, themeService, translate, renderer, jwtAuth, dialog, ls) {
          _classCallCheck(this, HeaderTopComponent);

          this.layout = layout;
          this.navService = navService;
          this.themeService = themeService;
          this.translate = translate;
          this.renderer = renderer;
          this.jwtAuth = jwtAuth;
          this.dialog = dialog;
          this.ls = ls;
          this.rumangoThemes = [];
          this.currentLang = 'en';
          this.availableLangs = [{
            name: 'English',
            code: 'en'
          }, {
            name: 'Spanish',
            code: 'es'
          }];
          this.isExpanded = false;
          this.showSubmenu = false;
          this.isShowing = false;
          this.showSubSubMenu = false;
          this.showChildMenu = false;
          this.isSelected = false;
          this.showBox = true;
          this.position = 'below';
          this.events = [];
          this.bankName = "XYZ Bank";
          this.navItems = [{
            displayName: 'Overview',
            iconName: 'widgets',
            route: 'overview'
          }, {
            displayName: 'Accounts',
            iconName: 'person_outline',
            children: [{
              displayName: 'Core',
              iconName: 'security',
              children: [{
                displayName: 'Branch',
                iconName: 'person_outline',
                route: 'branch-maint'
              }, {
                displayName: 'Currency',
                iconName: 'person_outline',
                route: 'currency-maint'
              }, {
                displayName: 'Holiday',
                iconName: 'person_outline',
                route: 'holiday',
                children: [{
                  displayName: 'Local',
                  iconName: 'person_outline',
                  route: 'local-hol'
                }, {
                  displayName: 'Currency',
                  iconName: 'person_outline',
                  route: 'ccy-hol'
                }, {
                  displayName: 'Clearing',
                  iconName: 'person_outline',
                  route: 'clearing-hol'
                }]
              }, {
                displayName: 'Customer',
                iconName: 'person_outline',
                route: 'customer-maint'
              }, {
                displayName: 'Accounts',
                iconName: 'person_outline',
                route: 'account-maint'
              }]
            }, {
              displayName: 'Security',
              iconName: 'person_outline',
              children: [{
                displayName: 'Role',
                iconName: 'person_outline',
                route: 'role-maint'
              }, {
                displayName: 'User',
                iconName: 'person_outline',
                route: 'user-maint'
              }, {
                displayName: 'System Config',
                iconName: 'person_outline',
                route: 'system-config'
              }, {
                displayName: 'Common Params',
                iconName: 'person_outline',
                route: 'common-param'
              }]
            }, {
              displayName: 'Teller',
              iconName: 'security',
              children: [{
                displayName: 'Till Operation',
                iconName: 'home',
                route: 'till-operation'
              }, {
                displayName: 'Till Balances',
                iconName: 'person_outline',
                route: 'till-balance'
              }, {
                displayName: 'Product',
                iconName: 'person_outline',
                route: 'product-maint'
              }, {
                displayName: 'Workflow',
                iconName: 'person_outline',
                route: 'teller-workflow'
              }]
            }]
          }, {
            displayName: 'Cards',
            iconName: 'style',
            children: [{
              displayName: 'Cash Transaction',
              iconName: 'cash',
              route: 'cash-trns'
            }, {
              displayName: 'Cheque Transaction',
              iconName: 'cheque',
              route: 'cheque-trns'
            }, {
              displayName: 'Transfers',
              iconName: 'transfers',
              route: 'teller-transfer'
            }, {
              displayName: 'Bill Payment',
              iconName: 'bill',
              route: 'bill-pay'
            }]
          }, {
            displayName: 'Investments',
            iconName: 'insert_chart_outlined',
            children: [{
              displayName: 'Customer',
              iconName: 'customer',
              children: [{
                displayName: 'Customer Onboarding',
                iconName: 'customer',
                route: 'customer-onboarding'
              }, {
                displayName: 'KYC Verify',
                iconName: 'verify',
                route: 'kyc-verify'
              }]
            }, {
              displayName: 'Accounts',
              iconName: 'account',
              children: [{
                displayName: 'Account Opening',
                iconName: 'open',
                route: 'account-open'
              }, {
                displayName: 'Account Modify',
                iconName: 'modify',
                route: 'account-modify'
              }]
            }, {
              displayName: 'Deposit Creation',
              iconName: 'deposit',
              route: 'deposit-create'
            }, {
              displayName: 'Loan Creation',
              iconName: 'loan',
              route: 'loan-create'
            }]
          }, {
            displayName: 'Loans',
            iconName: 'account_balance_wallet',
            children: [{
              displayName: 'Customer',
              iconName: 'customer',
              children: [{
                displayName: 'Customer Onboarding',
                iconName: 'customer',
                route: 'customer-onboarding'
              }, {
                displayName: 'KYC Verify',
                iconName: 'verify',
                route: 'kyc-verify'
              }]
            }, {
              displayName: 'Accounts',
              iconName: 'account',
              children: [{
                displayName: 'Account Opening',
                iconName: 'open',
                route: 'account-open'
              }, {
                displayName: 'Account Modify',
                iconName: 'modify',
                route: 'account-modify'
              }]
            }, {
              displayName: 'Deposit Creation',
              iconName: 'deposit',
              route: 'deposit-create'
            }, {
              displayName: 'Loan Creation',
              iconName: 'loan',
              route: 'loan-create'
            }]
          }, {
            displayName: 'Reports',
            iconName: 'content_copy',
            children: [{
              displayName: 'Customer',
              iconName: 'customer',
              children: [{
                displayName: 'Customer Onboarding',
                iconName: 'customer',
                route: 'customer-onboarding'
              }, {
                displayName: 'KYC Verify',
                iconName: 'verify',
                route: 'kyc-verify'
              }]
            }, {
              displayName: 'Accounts',
              iconName: 'account',
              children: [{
                displayName: 'Account Opening',
                iconName: 'open',
                route: 'account-open'
              }, {
                displayName: 'Account Modify',
                iconName: 'modify',
                route: 'account-modify'
              }]
            }, {
              displayName: 'Deposit Creation',
              iconName: 'deposit',
              route: 'deposit-create'
            }, {
              displayName: 'Loan Creation',
              iconName: 'loan',
              route: 'loan-create'
            }]
          }, {
            displayName: 'Settings',
            iconName: 'settings',
            children: [{
              displayName: 'Customer',
              iconName: 'customer',
              children: [{
                displayName: 'Customer Onboarding',
                iconName: 'customer',
                route: 'customer-onboarding'
              }, {
                displayName: 'KYC Verify',
                iconName: 'verify',
                route: 'kyc-verify'
              }]
            }, {
              displayName: 'Accounts',
              iconName: 'account',
              children: [{
                displayName: 'Account Opening',
                iconName: 'open',
                route: 'account-open'
              }, {
                displayName: 'Account Modify',
                iconName: 'modify',
                route: 'account-modify'
              }]
            }, {
              displayName: 'Deposit Creation',
              iconName: 'deposit',
              route: 'deposit-create'
            }, {
              displayName: 'Loan Creation',
              iconName: 'loan',
              route: 'loan-create'
            }]
          }];
        }

        _createClass(HeaderTopComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this23 = this;

            this.layoutConf = this.layout.layoutConf;
            this.user = this.ls.getItem('ICUST_USER');
            this.rumangoThemes = this.themeService.rumangoThemes;
            this.menuItemSub = this.navService.menuItems$.subscribe(function (res) {
              res = res.filter(function (item) {
                return item.type !== 'icon' && item.type !== 'separator';
              });
              var limit = 4;
              var mainItems = res.slice(0, limit);

              if (res.length <= limit) {
                return _this23.menuItems = mainItems;
              }

              var subItems = res.slice(limit, res.length - 1);
              mainItems.push({
                name: 'More',
                type: 'dropDown',
                tooltip: 'More',
                icon: 'more_horiz',
                sub: subItems
              });
              _this23.menuItems = mainItems;
            });
          }
        }, {
          key: "changeTheme",
          value: function changeTheme(theme) {
            this.layout.applyMatTheme(theme);
          }
        }, {
          key: "onChange",
          value: function onChange(e) {
            console.log("e", e);

            if (e.checked) {
              this.themeService.changeTheme('egret-blue', 'egret-dark-purple');
            } else {
              this.themeService.changeTheme('egret-dark-purple', 'egret-blue');
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.menuItemSub.unsubscribe();
          } // public pages: Page[] = [
          //   { name: 'Overview', link: 'some-link', icon: 'widgets' },
          //   { name: 'Accounts', link: 'some-link', icon: 'person_outline' },
          //   { name: 'Investment', link: 'some-link', icon: 'style' },
          //   { name: 'Loans', link: 'some-link', icon: 'insert_chart_outlined' },
          //   { name: 'Settings', link: 'some-link', icon: 'settings' },
          // ]

        }, {
          key: "onClickedOutside",
          value: function onClickedOutside(e) {
            this.showBox = false;
            this.displayName = '';
            this.displaySubName = '';
            console.log(this.displayName, 'displayName');
            console.log(this.showBox);
          }
        }, {
          key: "mouseenter",
          value: function mouseenter() {
            console.log("mouse enter " + this.isExpanded);
            this.showSubmenu = false;

            if (!this.isExpanded) {
              this.isShowing = true;
              this.isExpanded = true;
              console.log(this.isExpanded);
            }

            this.onClickedOutside(event);
          }
        }, {
          key: "mouseleave",
          value: function mouseleave() {
            console.log("mouse leave " + this.isExpanded);
            console.log("submenu " + this.showSubmenu);

            if (this.isExpanded) {
              this.isShowing = false;
              this.isExpanded = false; // this.showSubmenu = false;
            }
          }
        }, {
          key: "selectmenu",
          value: function selectmenu(navItem) {
            console.log(navItem, "Childrens");
            this.showChildMenu = true;
            this.navChilds = navItem;
            this.showBox = true;
          }
        }, {
          key: "selectSubmenu",
          value: function selectSubmenu(navItem) {
            console.log(navItem, "Childrens");
            this.showChildMenu = true;
            this.navChilds = navItem;
          }
        }, {
          key: "selectedName",
          value: function selectedName(dispName) {
            this.displayName = dispName;
          }
        }, {
          key: "selectedSubName",
          value: function selectedSubName(dispSubName) {
            console.log(dispSubName);
            this.displaySubName = dispSubName;
            console.log(this.displaySubName);
          }
        }, {
          key: "setLang",
          value: function setLang() {
            this.translate.use(this.currentLang);
          }
        }, {
          key: "toggleNotific",
          value: function toggleNotific() {
            this.notificPanel.toggle();
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
          }
        }, {
          key: "selectChildSubName",
          value: function selectChildSubName(dispChildSubName) {
            this.displayChildSubName = dispChildSubName;
          }
        }]);

        return HeaderTopComponent;
      }();

      HeaderTopComponent.ɵfac = function HeaderTopComponent_Factory(t) {
        return new (t || HeaderTopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_5__["JwtAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_7__["LocalStoreService"]));
      };

      HeaderTopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderTopComponent,
        selectors: [["app-header-top"]],
        inputs: {
          notificPanel: "notificPanel"
        },
        decls: 36,
        vars: 6,
        consts: [[1, "header-topnav", "mat-elevation-z2"], [1, "container"], [1, "topnav"], [2, "color", "white", "font-weight", "200"], ["fxFlex", ""], [2, "cursor", "pointer", "color", "white"], ["mat-icon-button", "", "matTooltip", "Notifications", 1, "topbar-button-right", 3, "click"], [2, "color", "white"], [2, "color", "white", "font-size", "23px"], [1, "calender-btn", 2, "color", "white"], [1, "toggle-btn", 3, "change"], ["mat-icon-button", "", 1, "topbar-button-right", "mr-16", "img-button", 3, "matMenuTriggerFor"], ["src", "assets/images/face-7.jpg", "alt", ""], ["mat-icon-button", ""], [2, "color", "white", 3, "matMenuTriggerFor"], ["accountMenu", "matMenu"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], ["mat-icon-button", "", "class", "mr-16", 3, "click", 4, "ngIf"], ["mat-icon-button", "", 1, "mr-16", 3, "click"]],
        template: function HeaderTopComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "XYZ BANK");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_Template_button_click_8_listener() {
              return ctx.toggleNotific();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "notifications_none");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "calendar_today");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-slide-toggle", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HeaderTopComponent_Template_mat_slide_toggle_change_15_listener($event) {
              return ctx.onChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "keyboard_arrow_down");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-menu", null, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "account_box");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_Template_button_click_30_listener() {
              return ctx.jwtAuth.signout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "exit_to_app");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sign out");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, HeaderTopComponent_button_35_Template, 3, 0, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("overflow", "visible");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.tellerName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.isMobile);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltip"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggle"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuItem"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"]],
        styles: ["mat-icon[_ngcontent-%COMP%], mat-icon-button[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n\n.toggle-btn[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.calender-btn[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGVhZGVyLXRvcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxtQkFBbUI7QUFDdkI7O0FBRUE7RUFDSSxtQkFBbUI7QUFDdkI7O0FBQ0E7RUFDSSxpQkFBaUI7QUFFckIiLCJmaWxlIjoiaGVhZGVyLXRvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1pY29uLFxyXG5tYXQtaWNvbi1idXR0b24ge1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuLnRvZ2dsZS1idG4ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uY2FsZW5kZXItYnRue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuIl19 */"]
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
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_7__["LocalStoreService"]
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
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

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
      "8Y7J");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "ura0");

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
      "8Y7J");
      /* harmony import */


      var _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/badge */
      "8Qe2");
      /* harmony import */


      var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/bottom-sheet */
      "Km1n");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "Ynp+");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/chips */
      "f44v");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/expansion */
      "o4Yh");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/paginator */
      "5QHs");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "BTe0");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "pu8Q");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/sort */
      "LUZP");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/stepper */
      "hzfI");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/table */
      "OaSA");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/tabs */
      "M9ds");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "ZFy/");
      /* harmony import */


      var _angular_material_tree__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/tree */
      "OLiY");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "vrAh");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "pMoy");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "40+f");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/menu */
      "rJgo");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/radio */
      "zQhy");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "q7Ft");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "jMqV");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/slider */
      "mPVK");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material-moment-adapter */
      "DejY");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "TN/R"); // import { MatDatepickerModule } from "@angular/material/datepicker";


      var SharedMaterialModule = function SharedMaterialModule() {
        _classCallCheck(this, SharedMaterialModule);
      };

      SharedMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SharedMaterialModule
      });
      SharedMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SharedMaterialModule_Factory(t) {
          return new (t || SharedMaterialModule)();
        },
        imports: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_36__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_31__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_34__["MatMomentDateModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_19__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedMaterialModule, {
          exports: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_36__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_31__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_34__["MatMomentDateModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_19__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedMaterialModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_36__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_31__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_34__["MatMomentDateModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_19__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"]]
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
      "8Y7J");
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
      "cUpR");

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
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/auth/jwt-auth.service */
      "nZzT");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");

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