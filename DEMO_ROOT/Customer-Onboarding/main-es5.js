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
      /*! F:\muthu-onboard\Customer-OnBoarding\src\main.ts */
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
        // apiUrl: 'http://192.168.0.14:9003/Icust-Digital-Banking',
        apiUrl: 'http://192.168.0.14:8091/Icust-Digital-Banking',
        //     apiUrl: 'http://localhost:1212', // phase2 for local testing
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
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
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
      "zHaW");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "BTe0");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "ura0");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");

      var _c0 = ["input"];

      function SearchComponent_mat_card_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_mat_card_7_Template_mat_card_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var card_r5 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.onTabSelection(card_r5.label, card_r5.searchKey);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var card_r5 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.selectedTabName == card_r5.label ? "card-class-selected" : "card-class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.selectedTabName == card_r5.label ? "material-symbols-outlined-selected" : "material-symbols-outlined");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", card_r5.icon, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", card_r5.label, " ");
        }
      }

      function SearchComponent_div_8_div_1_button_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_div_8_div_1_button_7_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r11.handleClear();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SearchComponent_div_8_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchComponent_div_8_div_1_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r13.searchTerm = $event;
          })("keypress", function SearchComponent_div_8_div_1_Template_input_keypress_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r15._keyPress($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SearchComponent_div_8_div_1_button_7_Template, 3, 0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.searchTerm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.searchTerm);
        }
      }

      function SearchComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchComponent_div_8_div_1_Template, 8, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.showKYC);
        }
      }

      function SearchComponent_div_9_mat_list_item_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_div_9_mat_list_item_4_Template_mat_list_item_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var folder_r17 = ctx.$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r18.onImgClick(folder_r17);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var folder_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", folder_r17.firstName, " ", folder_r17.lastName, "");
        }
      }

      function SearchComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SearchComponent_div_9_mat_list_item_4_Template, 8, 2, "mat-list-item", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.folders);
        }
      }

      function SearchComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-progress-bar", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Searching Customer ", ctx_r3.searchTerm, "....");
        }
      }

      function SearchComponent_div_11_mat_list_item_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " chevron_right ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var kyc_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", kyc_r21.icon, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](kyc_r21.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", kyc_r21.updated, " ");
        }
      }

      function SearchComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_div_11_Template_mat_icon_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.closeDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SearchComponent_div_11_Template_input_keyup_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.onKYCSearching($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SearchComponent_div_11_mat_list_item_11_Template, 12, 3, "mat-list-item", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.KYCData);
        }
      }

      var SearchComponent = /*#__PURE__*/function () {
        function SearchComponent(dialogRef, cdr, apiService, sanitizer, router, ls, dataService, snack) {
          _classCallCheck(this, SearchComponent);

          this.dialogRef = dialogRef;
          this.cdr = cdr;
          this.apiService = apiService;
          this.sanitizer = sanitizer;
          this.router = router;
          this.ls = ls;
          this.dataService = dataService;
          this.snack = snack;
          this.folders = [];
          this.show4 = false;
          this.searchKey = 'customerName';
          this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.inputTouched = false;
          this.loading = false;
          this.searchTerm = '';
        }

        _createClass(SearchComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
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
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this4 = this;

            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.inputElement.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["pluck"])('target', 'value'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (value) {
              return value.length > 1;
            })).subscribe(function (value) {
              _this4.handleSearch(value);
            });
          }
        }, {
          key: "handleSearch",
          value: function handleSearch(inputValue) {
            var _this5 = this;

            var key = "";

            if (!isNaN(inputValue)) {
              this.apiService.getCustomerByCustomerID("accountId", inputValue).subscribe(function (resp) {
                if (resp) {
                  _this5.getCustomerData("accountId", inputValue);
                } else {
                  _this5.getCustomerData("customerId", inputValue);
                }
              });
            } else if (inputValue.substring(0, 3) == "KYC") {
              this.getCustomerData("kycReference", inputValue);
            } else {
              this.getCustomerData("customerName", inputValue);
            }
          }
        }, {
          key: "getCustomerData",
          value: function getCustomerData(key, value) {
            var _this6 = this;

            this.loading = true;

            if (this.apiService.getCustomerByCustomerID != null) {
              this.apiService.getCustomerByCustomerID(key, value).subscribe(function (items) {
                console.log(items);
                _this6.folders = items; // this.profileData = items[0];

                _this6.showKYC = false;
                _this6.loading = false;

                _this6.cdr.markForCheck();

                if (items == null) {
                  _this6.loading = false;

                  _this6.snack.open("Data is not found for Customer :", _this6.searchTerm, {
                    duration: 4000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right'
                  });

                  _this6.progressBar.mode = 'determinate';
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
            console.log("Customer ID -------- ", item.customerId);
            localStorage.setItem('customerId', item.customerId);
            this.router.navigateByUrl('/others/mainNavigation'); // this.gettingaCustomerDetails(customerId);

            var data = {
              customerId: item.customerId
            };
            this.dataService.shareSearchItem(data);
            this.dialogRef.close();
          } // gettingaCustomerDetails(customerId) {
          //   this.apiService.getCasaAccDetails(customerId).subscribe((allCustomerDEtails: any) => {
          //     console.log("All Customer Details", allCustomerDEtails);
          //     console.log(allCustomerDEtails.customerName);
          //   });
          // }

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
        }]);

        return SearchComponent;
      }();

      SearchComponent.ɵfac = function SearchComponent_Factory(t) {
        return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]));
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
        decls: 12,
        vars: 5,
        consts: [["fxLayout", "row", "fxLayoutAlign", "end stretch"], [1, "mat-18", 2, "cursor", "pointer", 3, "click"], ["fxLayout", "row", "fxFlex", "100", "fxLayoutAlign", "space-between"], ["fxLayout", "column", "fxLayoutAlign", "center center", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "class", "m-333", 4, "ngIf"], [4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "center center", 3, "ngClass", "click"], [1, "icon4", 3, "ngClass"], [1, "labelClass"], ["fxLayout", "row", 1, "m-333"], ["fxFlex", "100", "fxLayoutAlign", "start stretch", "fxLayoutGap", "space-around", 4, "ngIf"], ["fxFlex", "100", "fxLayoutAlign", "start stretch", "fxLayoutGap", "space-around"], ["appearance", "fill", 1, "full-width"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelChange", "keypress"], ["input", ""], ["matPrefix", "", "mat-icon-button", ""], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "label", "Clear", 3, "click", 4, "ngIf"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "label", "Clear", 3, "click"], ["fxLayout", "row"], ["fxFlex", "100", "fxLayoutAlign", "start stretch"], ["style", "width: 158%;", 3, "click", 4, "ngFor", "ngForOf"], [2, "width", "158%", 3, "click"], ["matListAvatar", "", "src", "./assets/images/face-7.jpg", "alt", "..."], ["mat-line", ""], ["fxLayoutAlign", "end ", 2, "margin-left", "500px", "cursor", "pointer"], ["src", "assets/images/colon-symbol.png", "alt", "", 1, "colonIcon"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxFlex", "30"], ["fxFlex", "40", "fxFlexAlign", "center"], [1, "text-center"], ["mode", "indeterminate"], ["fxLayout", "column wrap"], ["fxFlex", "100", "fxLayoutAlign", "end stretch"], ["fxFlex", "25", "fxLayoutAlign", "start stretch", "fxLayoutGap", "space-around"], ["type", "text", "placeholder", "icust search", 3, "keyup"], ["fxFlex", "25", "fxLayoutAlign", "start stretch"], ["id", "kycList", 4, "ngFor", "ngForOf"], ["id", "kycList"], ["id", "listmat"], ["color", "primary", "id", "ic"], ["mat-line", "", 2, "margin-left", "100px"], ["mat-line", "", 2, "margin-left", "100px", "color", "rgb(223, 217, 217)"], ["fxLayoutAlign", "end ", 2, "margin-left", "500px"]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " You can search by any specific tag.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SearchComponent_mat_card_7_Template, 5, 4, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SearchComponent_div_8_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SearchComponent_div_9_Template, 5, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SearchComponent_div_10_Template, 7, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SearchComponent_div_11_Template, 13, 1, "div", 5);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.operationTab);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showKYC);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchTerm != "" && (ctx.folders == null ? null : ctx.folders.length) > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showKYC);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatHint"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_16__["DefaultClassDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListItem"], _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListAvatarCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatLine"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__["MatDivider"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexAlignDirective"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBar"]],
        styles: [".card1[_ngcontent-%COMP%] {\n  border-radius: 20px;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: 0;\n  outline: 0;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\n.icon4[_ngcontent-%COMP%] {\n  color: gray;\n  margin-bottom: 10px;\n  height: 30px;\n  width: 30px;\n  font-size: 30px;\n}\n\n#listmat[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  background: #b4b3b3;\n  padding: 10px;\n  color: dodgerblue;\n  width: 45px;\n  height: 45px;\n  text-align: center;\n  justify-content: space-around;\n  position: fixed;\n}\n\n.searchInput[_ngcontent-%COMP%] {\n  padding: 15px 0px 15px 10px;\n  font-size: large;\n}\n\n.material-symbols-outlined-selected[_ngcontent-%COMP%] {\n  color: #1d5286;\n}\n\n.material-symbols-outlined[_ngcontent-%COMP%] {\n  color: #b0b0b0;\n}\n\n.card-class[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  min-width: 13.5%;\n  cursor: pointer;\n}\n\n.card-class-selected[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  min-width: 13.5%;\n  cursor: pointer;\n  border-top: #1d5286 solid 8px;\n}\n\n.selected-card[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  border-top: solid 8px #304156;\n  min-width: 13.5%;\n}\n\n.colonIcon[_ngcontent-%COMP%] {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksbUJBQW1CO0FBRHZCOztBQVFBO0VBQU8sU0FBUTtFQUFDLFVBQVM7QUFIekI7O0FBSUE7RUFBYSx3QkFBc0I7QUFBbkM7O0FBU0E7RUFFSSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtBQVBuQjs7QUFTQTtFQUNBLG1CQUFtQjtFQUNmLG1CQUE4QjtFQUM5QixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBRWxCLDZCQUE2QjtFQUM3QixlQUFjO0FBUGxCOztBQVVBO0VBQ0ksMkJBQTJCO0VBQzNCLGdCQUFnQjtBQVBwQjs7QUFVQTtFQUNJLGNBQWM7QUFQbEI7O0FBVUE7RUFDSSxjQUFjO0FBUGxCOztBQVVBO0VBQ0ksbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0FBUG5COztBQVVBO0VBQ0ksbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsNkJBQTZCO0FBUGpDOztBQVVBO0VBQ0ksbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFQcEI7O0FBVUE7RUFDSSxVQUFVO0FBUGQiLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQxXHJcbntcclxuICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBcclxufVxyXG4vLyAuZmlyc3REdlxyXG4vLyB7XHJcbi8vICAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG4vLyB9XHJcbmlucHV0IHtib3JkZXI6MDtvdXRsaW5lOjA7IH1cclxuaW5wdXQ6Zm9jdXMge291dGxpbmU6bm9uZSFpbXBvcnRhbnQ7fVxyXG4vLyAuaWNvbjRcclxuLy8ge1xyXG4vLyAgICAgY29sb3I6IGdyYXk7XHJcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDMwJVxyXG4vLyB9XHJcbi8vIC5pY29uNHtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXHJcbi8vIH1cclxuLmljb240XHJcbntcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbiNsaXN0bWF0e1xyXG53aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE4MCwgMTc5LCAxNzkpO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiBkb2RnZXJibHVlO1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxufVxyXG5cclxuLnNlYXJjaElucHV0IHtcclxuICAgIHBhZGRpbmc6IDE1cHggMHB4IDE1cHggMTBweDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkLXNlbGVjdGVkIHtcclxuICAgIGNvbG9yOiAjMWQ1Mjg2O1xyXG59XHJcblxyXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XHJcbiAgICBjb2xvcjogI2IwYjBiMDtcclxufVxyXG5cclxuLmNhcmQtY2xhc3Mge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1pbi13aWR0aDogMTMuNSU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWNsYXNzLXNlbGVjdGVkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBtaW4td2lkdGg6IDEzLjUlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXRvcDogIzFkNTI4NiBzb2xpZCA4cHg7XHJcbn1cclxuXHJcbi5zZWxlY3RlZC1jYXJkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItdG9wOiBzb2xpZCA4cHggIzMwNDE1NjtcclxuICAgIG1pbi13aWR0aDogMTMuNSU7XHJcbn1cclxuXHJcbi5jb2xvbkljb24ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxufSJdfQ== */"]
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
        // redirectUrl:'http://localhost:4500/#/others/dashboard',
        redirectUrl: 'http://icust.rumango.com/DEMO_ROOT/iCust-Teller/#/others/dashboard',
        eSignUrl: 'http://icust.rumango.com/DEMO_ROOT/iCust-Teller/#/sessions/signLater',
        baseAadhaarFrontUrl: 'https://nationalapi.docsumo.com/api/v1/national/extract/?side=front&save_data=false&return_redacted=false&fraud_check=true',
        baseAadhaarBackUrl: 'https://nationalapi.docsumo.com/api/v1/national/extract/?side=back&save_data=false&return_redacted=false&fraud_check=true',
        basePanUrl: 'https://panapi.docsumo.com/api/v1/pan/extract/?save_data=false&fraud_check=true',
        basePassportUrl: 'https://passportapi.docsumo.com/api/v1/passport/extract/?side=front&save_data=false&fraud_check=false',
        KYC_OCR_API_KEY: 'vpVmVFN6XoTdOQnJOaQvQIKrTl18036KiHQjBTyCZlxYDtneD1e6MZMOwmYo'
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
            var _this9 = this;

            // Check the authentication status
            return this.jwtAuth.check().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (authenticated) {
              console.log("check status", authenticated); // If the user is not authenticated...

              if (!authenticated) {
                // Redirect to the sign-in page
                _this9.router.navigate(["/sessions/signin"]); // Prevent the access


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
    "NN4w":
    /*!*******************************************!*\
      !*** ./src/app/views/home/url.service.ts ***!
      \*******************************************/

    /*! exports provided: API_URL, UrlService */

    /***/
    function NN4w(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "API_URL", function () {
        return API_URL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UrlService", function () {
        return UrlService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var app_config_app_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! app/config/app.constant */
      "ngOV");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var API_URL = app_config_app_constant__WEBPACK_IMPORTED_MODULE_1__["AppConstants"].baseURL;

      var UrlService = /*#__PURE__*/function () {
        function UrlService() {
          _classCallCheck(this, UrlService);

          this.previousUrl = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
          this.previousUrl$ = this.previousUrl.asObservable();
        }

        _createClass(UrlService, [{
          key: "setPreviousUrl",
          value: function setPreviousUrl(previousUrl) {
            this.previousUrl.next(previousUrl);
          }
        }]);

        return UrlService;
      }();

      UrlService.ɵfac = function UrlService_Factory(t) {
        return new (t || UrlService)();
      };

      UrlService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UrlService,
        factory: UrlService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UrlService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
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
      "8Y7J");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/services/data.service */
      "iiaH");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var _shared_services_theme_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/services/theme.service */
      "ETNk");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent(ls, snack, dataService, apiService, router, themeService) {
          _classCallCheck(this, ProfileComponent);

          this.ls = ls;
          this.snack = snack;
          this.dataService = dataService;
          this.apiService = apiService;
          this.router = router;
          this.themeService = themeService;
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.currentUser = this.ls.getItem("ICUST_USER");
            this.getProfile();
            this.dataService.getIcustUser().subscribe(function (data) {
              if (data) {
                _this10.currentUser = _this10.ls.getItem("ICUST_USER");
                setTimeout(function () {
                  _this10.snack.open("Email Changed Successfully!", "OK", {
                    duration: 4000,
                    verticalPosition: "top",
                    horizontalPosition: "right"
                  });
                }, 1000);
              }
            });
          }
        }, {
          key: "getProfile",
          value: function getProfile() {
            var _this11 = this;

            this.apiService.fetchTellerProfileInfo(this.currentUser.userId).subscribe(function (result) {
              _this11.profileInfo = result;
            });
          }
        }, {
          key: "language",
          value: function language() {
            var _this12 = this;

            this.apiService.fetchTellerProfileInfo(1).subscribe(function (result) {
              _this12.router.navigateByUrl('/settings/change-password');
            });
          }
        }, {
          key: "languagemail",
          value: function languagemail() {
            this.router.navigateByUrl('/settings/change-email');
          }
        }, {
          key: "onChangeTheme",
          value: function onChangeTheme(e) {
            // if (e.value == 'light') {
            //   this.ls.setItem('theme', 'light');
            //   this.themeService.changeTheme('egret-dark-purple','egret-navy');
            // } else {
            //   this.ls.setItem('theme', 'dark');
            //   this.themeService.changeTheme('egret-navy','egret-dark-purple');
            // }
            if (e.value === 'light') {
              this.themeService.changeTheme('egret-dark-purple', 'egret-blue');
            } else {
              this.themeService.changeTheme('egret-blue', 'egret-dark-purple');
            }
          }
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
        return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_6__["ThemeService"]));
      };

      ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProfileComponent,
        selectors: [["app-profile"]],
        decls: 43,
        vars: 4,
        consts: [[1, "profilecontainer", "mt-8"], [1, "text-center", "mat-bg-primary", "pt-16", "pb-16", "profileDiv"], [1, "m-0", "text-white"], ["role", "list", 1, "notification-list"], ["role", "listitem", "routerLinkActive", "open", 1, "notific-item"], ["color", "primary", 1, "notific-icon", "mr-16"], [1, "mat-list-text"], [1, "message"], [1, "message", 3, "click"], [1, "mx-60"], [1, "mt-4"], ["name", "theme", 3, "ngModel", "ngModelChange", "selectionChange"], ["value", "light"], ["value", "dark"]],
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-nav-list", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "person");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-list-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "language icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-list-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-list-item", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "adjust icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_h4_click_31_listener() {
              return ctx.getProfile();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Theme change");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "form", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Select Theme");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-select", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_mat_select_ngModelChange_38_listener($event) {
              return ctx.selectedTheme = $event;
            })("selectionChange", function ProfileComponent_Template_mat_select_selectionChange_38_listener($event) {
              return ctx.onChangeTheme($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Light ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Dark ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentUser.tellerName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentUser.language);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentUser.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedTheme);
          }
        },
        directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"]],
        styles: [".profilecontainer[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.profilevalid[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.profilemargin[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.profiletop[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\n.mx-60[_ngcontent-%COMP%] {\n  margin-right: 60px !important;\n  margin-left: 60px !important;\n}\n\n.Language[_ngcontent-%COMP%] {\n  margin-top: 6px !important;\n}\n\n.profileDiv[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVU7QUFDZDs7QUFDQTtFQUNJLGtCQUFrQjtBQUV0Qjs7QUFBQTtFQUNJLG9CQUFvQjtBQUd4Qjs7QUFEQTtFQUNJLGlCQUFpQjtBQUlyQjs7QUFEQTtFQUNJLDZCQUE2QjtFQUM3Qiw0QkFBNEI7QUFJaEM7O0FBREE7RUFDSSwwQkFBMEI7QUFJOUI7O0FBRkE7RUFDSSxnQkFBZ0I7QUFLcEIiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDMwJTtcclxufVxyXG4ucHJvZmlsZXZhbGlke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5wcm9maWxlbWFyZ2lue1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuLnByb2ZpbGV0b3B7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLm14LTYwIHtcclxuICAgIG1hcmdpbi1yaWdodDogNjBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLkxhbmd1YWdle1xyXG4gICAgbWFyZ2luLXRvcDogNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnByb2ZpbGVEaXZ7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59Il19 */"]
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
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__["LocalStoreService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
          }, {
            type: app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _shared_services_theme_service__WEBPACK_IMPORTED_MODULE_6__["ThemeService"]
          }];
        }, null);
      })();

      function language() {
        throw new Error('Function not implemented.');
      }
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
      /* harmony import */


      var _views_home_url_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./views/home/url.service */
      "NN4w");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(title, router, activeRoute, routePartsService, urlService) {
          _classCallCheck(this, AppComponent);

          this.title = title;
          this.router = router;
          this.activeRoute = activeRoute;
          this.routePartsService = routePartsService;
          this.urlService = urlService;
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
            var _this13 = this;

            this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
            })).subscribe(function (routeChange) {
              var routeParts = _this13.routePartsService.generateRouteParts(_this13.activeRoute.snapshot);

              _this13.previousUrl = _this13.currentUrl;
              _this13.currentUrl = routeChange.url;
              console.log("routeChange", routeChange);

              _this13.urlService.setPreviousUrl(_this13.previousUrl);

              if (!routeParts.length) {
                return _this13.title.setTitle(_this13.appTitle);
              } // Extract title from parts;


              _this13.pageTitle = routeParts.reverse().map(function (part) {
                return part.title;
              }).reduce(function (partA, partI) {
                return "".concat(partA, " > ").concat(partI);
              });
              _this13.pageTitle += " | ".concat(_this13.appTitle);

              _this13.title.setTitle(_this13.pageTitle);
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_route_parts_service__WEBPACK_IMPORTED_MODULE_3__["RoutePartsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_views_home_url_service__WEBPACK_IMPORTED_MODULE_5__["UrlService"]));
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
          }, {
            type: _views_home_url_service__WEBPACK_IMPORTED_MODULE_5__["UrlService"]
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
            var _this14 = this;

            this.iconTypeMenuTitle = this.navService.iconTypeMenuTitle;
            this.menuItemsSub = this.navService.menuItems$.subscribe(function (menuItem) {
              _this14.menuItems = menuItem; //Checks item list has any icon type.

              _this14.hasIconTypeMenuItem = !!_this14.menuItems.filter(function (item) {
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
            var _this15 = this;

            this.router.events.subscribe(function (routeChange) {
              if (routeChange instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this15.notificPanel.close();
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
        consts: [[1, "text-center", "mat-bg-primary", "pt-16", "pb-16"], [1, "m-0", "text-white", "mt-16"], ["role", "list", 1, "notification-list"], ["class", "notific-item", "role", "listitem", "routerLinkActive", "open", 4, "ngFor", "ngForOf"], ["class", "text-center mt-16", 4, "ngIf"], ["role", "listitem", "routerLinkActive", "open", 1, "notific-item"], [1, "notific-icon", "mr-16", 3, "color"], [3, "routerLink"], [1, "mat-list-text"], [1, "message"], [1, "time", "text-muted"], [1, "text-center", "mt-16"], ["href", "#", 3, "click"]],
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


      var _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @syncfusion/ej2-angular-schedule */
      "7qXh");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-toastr */
      "EApP");
      /* harmony import */


      var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-infinite-scroll */
      "MNke");
      /* harmony import */


      var _shared_shared_material_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./shared/shared-material.module */
      "zMWy");
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ng2-search-filter */
      "KeVr");
      /* harmony import */


      var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! angular-in-memory-web-api */
      "wzUX");
      /* harmony import */


      var _shared_inmemory_db_inmemory_db_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./shared/inmemory-db/inmemory-db.service */
      "Y9BQ");
      /* harmony import */


      var ngx_quicklink__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ngx-quicklink */
      "bYOv");
      /* harmony import */


      var _shared_interceptors_logging_interceptor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
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
        providers: [_syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_12__["DayService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_12__["WeekService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_12__["WorkWeekService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_12__["MonthService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_12__["MonthAgendaService"], {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
          useClass: _shared_services_error_handler_service__WEBPACK_IMPORTED_MODULE_11__["ErrorHandlerService"]
        }, // { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
        {
          provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PERFECT_SCROLLBAR_CONFIG"],
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }, // REQUIRED IF YOU USE JWT AUTHENTICATION

        /* {
           provide: HTTP_INTERCEPTORS,
           useClass: TokenInterceptor,
           multi: true,
         }, */
        {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
          useClass: _shared_interceptors_logging_interceptor__WEBPACK_IMPORTED_MODULE_20__["LoggingInterceptor"],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_14__["InfiniteScrollModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HammerModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ngx_quicklink__WEBPACK_IMPORTED_MODULE_19__["QuicklinkModule"], _shared_shared_material_module__WEBPACK_IMPORTED_MODULE_15__["SharedMaterialModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_16__["Ng2SearchPipeModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot(), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
          }
        }), angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_17__["InMemoryWebApiModule"].forRoot(_shared_inmemory_db_inmemory_db_service__WEBPACK_IMPORTED_MODULE_18__["InMemoryDataService"], {
          passThruUnknownUrl: true
        }), _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_5__["rootRouterConfig"], {
          preloadingStrategy: ngx_quicklink__WEBPACK_IMPORTED_MODULE_19__["QuicklinkStrategy"],
          useHash: true,
          relativeLinkResolution: 'legacy'
        }), _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_12__["ScheduleModule"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_12__["RecurrenceEditorModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_14__["InfiniteScrollModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HammerModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ngx_quicklink__WEBPACK_IMPORTED_MODULE_19__["QuicklinkModule"], _shared_shared_material_module__WEBPACK_IMPORTED_MODULE_15__["SharedMaterialModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_16__["Ng2SearchPipeModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_17__["InMemoryWebApiModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_12__["ScheduleModule"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_12__["RecurrenceEditorModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_14__["InfiniteScrollModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HammerModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ngx_quicklink__WEBPACK_IMPORTED_MODULE_19__["QuicklinkModule"], _shared_shared_material_module__WEBPACK_IMPORTED_MODULE_15__["SharedMaterialModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_16__["Ng2SearchPipeModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot(), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
              loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                useFactory: HttpLoaderFactory,
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
              }
            }), angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_17__["InMemoryWebApiModule"].forRoot(_shared_inmemory_db_inmemory_db_service__WEBPACK_IMPORTED_MODULE_18__["InMemoryDataService"], {
              passThruUnknownUrl: true
            }), _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_5__["rootRouterConfig"], {
              preloadingStrategy: ngx_quicklink__WEBPACK_IMPORTED_MODULE_19__["QuicklinkStrategy"],
              useHash: true,
              relativeLinkResolution: 'legacy'
            }), _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_12__["ScheduleModule"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_12__["RecurrenceEditorModule"]],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            providers: [_syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_12__["DayService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_12__["WeekService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_12__["WorkWeekService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_12__["MonthService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_12__["MonthAgendaService"], {
              provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"],
              useClass: _shared_services_error_handler_service__WEBPACK_IMPORTED_MODULE_11__["ErrorHandlerService"]
            }, // { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
            {
              provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PERFECT_SCROLLBAR_CONFIG"],
              useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }, // REQUIRED IF YOU USE JWT AUTHENTICATION

            /* {
               provide: HTTP_INTERCEPTORS,
               useClass: TokenInterceptor,
               multi: true,
             }, */
            {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
              useClass: _shared_interceptors_logging_interceptor__WEBPACK_IMPORTED_MODULE_20__["LoggingInterceptor"],
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
        redirectTo: '/others/Service',
        pathMatch: 'full'
      }, {
        path: '',
        component: _shared_components_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__["AuthLayoutComponent"],
        children: [{
          path: 'sessions',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-sessions-sessions-module */
            [__webpack_require__.e("default~views-card-account-card-account-module~views-document-upload-from-email-document-upload-from~b131eb4e"), __webpack_require__.e("default~views-card-account-card-account-module~views-others-others-module~views-sessions-sessions-mo~5ec51b27"), __webpack_require__.e("views-sessions-sessions-module")]).then(__webpack_require__.bind(null,
            /*! ./views/sessions/sessions.module */
            "VVaf")).then(function (m) {
              return m.SessionsModule;
            });
          },
          data: {
            preload: true
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
            [__webpack_require__.e("default~views-card-account-card-account-module~views-document-upload-from-email-document-upload-from~b131eb4e"), __webpack_require__.e("default~views-card-account-card-account-module~views-others-onboarding-corporate-onboarding-corporat~af09a1a5"), __webpack_require__.e("default~views-card-account-card-account-module~views-home-home-module~views-others-others-module~vie~f00deb83"), __webpack_require__.e("default~views-card-account-card-account-module~views-others-others-module~views-others-video-verific~e3216432"), __webpack_require__.e("default~views-card-account-card-account-module~views-document-upload-from-email-document-upload-from~820c10fe"), __webpack_require__.e("default~views-card-account-card-account-module~views-others-others-module~views-sessions-sessions-mo~5ec51b27"), __webpack_require__.e("default~views-card-account-card-account-module~views-others-others-module~views-tasks-tasks-module")]).then(__webpack_require__.bind(null,
            /*! ./views/others/others.module */
            "KVVp")).then(function (m) {
              return m.OthersModule;
            });
          },
          data: {
            preload: false
          }
        }, {
          path: 'home',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-home-home-module */
            [__webpack_require__.e("default~views-card-account-card-account-module~views-document-upload-from-email-document-upload-from~b131eb4e"), __webpack_require__.e("default~views-card-account-card-account-module~views-home-home-module~views-others-others-module~vie~f00deb83"), __webpack_require__.e("default~views-card-account-card-account-module~views-home-home-module~views-tasks-tasks-module"), __webpack_require__.e("default~views-home-home-module~views-tasks-tasks-module"), __webpack_require__.e("views-home-home-module")]).then(__webpack_require__.bind(null,
            /*! ./views/home/home.module */
            "XWda")).then(function (m) {
              return m.HomeModule;
            });
          },
          data: {
            preload: false,
            title: 'Home',
            breadcrumb: 'Home'
          }
        }, {
          path: 'document',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-document-upload-from-email-document-upload-from-email-module */
            [__webpack_require__.e("default~views-card-account-card-account-module~views-document-upload-from-email-document-upload-from~b131eb4e"), __webpack_require__.e("default~views-card-account-card-account-module~views-document-upload-from-email-document-upload-from~820c10fe"), __webpack_require__.e("views-document-upload-from-email-document-upload-from-email-module")]).then(__webpack_require__.bind(null,
            /*! ./views/document-upload-from-email/document-upload-from-email.module */
            "JEza")).then(function (m) {
              return m.DocumentUploadFromEmailModule;
            });
          },
          data: {
            preload: false,
            title: 'Document',
            breadcrumb: 'Document'
          }
        }, {
          path: 'loan',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-loan-account-loan-account-module */
            [__webpack_require__.e("default~views-card-account-card-account-module~views-document-upload-from-email-document-upload-from~b131eb4e"), __webpack_require__.e("views-loan-account-loan-account-module")]).then(__webpack_require__.bind(null,
            /*! ./views/loan-account/loan-account.module */
            "obtS")).then(function (m) {
              return m.LoanAccountModule;
            });
          },
          data: {
            preload: false,
            title: 'Loan Account',
            breadcrumb: 'Create Loan Account'
          }
        }, {
          path: 'video-verification',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-others-video-verification-video-verification-module */
            [__webpack_require__.e("default~views-card-account-card-account-module~views-document-upload-from-email-document-upload-from~b131eb4e"), __webpack_require__.e("default~views-card-account-card-account-module~views-others-onboarding-corporate-onboarding-corporat~af09a1a5"), __webpack_require__.e("default~views-card-account-card-account-module~views-others-others-module~views-others-video-verific~e3216432"), __webpack_require__.e("views-others-video-verification-video-verification-module")]).then(__webpack_require__.bind(null,
            /*! ./views/others/video-verification/video-verification.module */
            "ZQ1n")).then(function (m) {
              return m.VideoVerificationModule;
            });
          }
        }, {
          path: 'onboardingCorporate',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-others-onboarding-corporate-onboarding-corporate-module */
            [__webpack_require__.e("default~views-card-account-card-account-module~views-document-upload-from-email-document-upload-from~b131eb4e"), __webpack_require__.e("default~views-card-account-card-account-module~views-others-onboarding-corporate-onboarding-corporat~af09a1a5"), __webpack_require__.e("default~views-others-onboarding-corporate-onboarding-corporate-module~views-tasks-tasks-module")]).then(__webpack_require__.bind(null,
            /*! ./views/others/onboarding-corporate/onboarding-corporate.module */
            "WRcG")).then(function (m) {
              return m.OnboardingCorporateModule;
            });
          },
          data: {
            preload: false
          }
        }, {
          path: 'tasks',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-tasks-tasks-module */
            [__webpack_require__.e("default~views-card-account-card-account-module~views-document-upload-from-email-document-upload-from~b131eb4e"), __webpack_require__.e("default~views-card-account-card-account-module~views-others-onboarding-corporate-onboarding-corporat~af09a1a5"), __webpack_require__.e("default~views-card-account-card-account-module~views-home-home-module~views-others-others-module~vie~f00deb83"), __webpack_require__.e("default~views-card-account-card-account-module~views-others-others-module~views-others-video-verific~e3216432"), __webpack_require__.e("default~views-card-account-card-account-module~views-document-upload-from-email-document-upload-from~820c10fe"), __webpack_require__.e("default~views-card-account-card-account-module~views-others-others-module~views-sessions-sessions-mo~5ec51b27"), __webpack_require__.e("default~views-card-account-card-account-module~views-others-others-module~views-tasks-tasks-module"), __webpack_require__.e("default~views-card-account-card-account-module~views-home-home-module~views-tasks-tasks-module"), __webpack_require__.e("default~views-home-home-module~views-tasks-tasks-module"), __webpack_require__.e("default~views-others-onboarding-corporate-onboarding-corporate-module~views-tasks-tasks-module"), __webpack_require__.e("default~views-card-account-card-account-module~views-tasks-tasks-module"), __webpack_require__.e("views-tasks-tasks-module")]).then(__webpack_require__.bind(null,
            /*! ./views/tasks/tasks.module */
            "X7Rc")).then(function (m) {
              return m.TasksModule;
            });
          },
          data: {
            preload: false
          }
        }, {
          path: 'cardaccount',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-card-account-card-account-module */
            [__webpack_require__.e("default~views-card-account-card-account-module~views-document-upload-from-email-document-upload-from~b131eb4e"), __webpack_require__.e("default~views-card-account-card-account-module~views-others-onboarding-corporate-onboarding-corporat~af09a1a5"), __webpack_require__.e("default~views-card-account-card-account-module~views-home-home-module~views-others-others-module~vie~f00deb83"), __webpack_require__.e("default~views-card-account-card-account-module~views-others-others-module~views-others-video-verific~e3216432"), __webpack_require__.e("default~views-card-account-card-account-module~views-document-upload-from-email-document-upload-from~820c10fe"), __webpack_require__.e("default~views-card-account-card-account-module~views-others-others-module~views-sessions-sessions-mo~5ec51b27"), __webpack_require__.e("default~views-card-account-card-account-module~views-others-others-module~views-tasks-tasks-module"), __webpack_require__.e("default~views-card-account-card-account-module~views-home-home-module~views-tasks-tasks-module"), __webpack_require__.e("default~views-card-account-card-account-module~views-tasks-tasks-module"), __webpack_require__.e("views-card-account-card-account-module")]).then(__webpack_require__.bind(null,
            /*! ./views/card-account/card-account.module */
            "tPCj")).then(function (m) {
              return m.CardAccountModule;
            });
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


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "ura0");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "9gLZ");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "q7Ft");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "aLe/");
      /* harmony import */


      var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../notifications/notifications.component */
      "X2tk");
      /* harmony import */


      var _header_top_header_top_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../header-top/header-top.component */
      "urBs");
      /* harmony import */


      var _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../sidebar-side/sidebar-side.component */
      "UnY0");
      /* harmony import */


      var _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../sidebar-top/sidebar-top.component */
      "s0uO");
      /* harmony import */


      var _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../header-side/header-side.component */
      "Hkp+");

      function AdminLayoutComponent_app_header_top_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-top", 17);
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-sidebar-side", 18);

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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-side", 17);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notificPanel", _r7);
        }
      }

      function AdminLayoutComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AdminLayoutComponent_span_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 23);
        }
      }

      function AdminLayoutComponent_app_footer_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-footer", 24);
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "app-admin-wrap": a0,
          "app-admin-wrap1": a1
        };
      };

      var _c1 = function _c1(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return {
          "app-admin-container": a0,
          "app-admin-container1": a1,
          "navigation-top": a2,
          "sidebar-full": a3,
          "sidebar-compact": a4,
          "compact-toggle-active": a5,
          "sidebar-compact-big": a6,
          "sidebar-opened": a7,
          "sidebar-closed": a8,
          "fixed-topbar": a9
        };
      };

      var _c2 = function _c2() {
        return {
          "overflow": "hidden"
        };
      };

      var _c3 = function _c3() {
        return {
          "overflow": "auto"
        };
      };

      var _c4 = function _c4(a0) {
        return {
          "visible": a0
        };
      };

      var AdminLayoutComponent = /*#__PURE__*/function () {
        function AdminLayoutComponent(router, translate, themeService, layout, cdr, jwtAuth, apiService) {
          var _this16 = this;

          _classCallCheck(this, AdminLayoutComponent);

          // Check Auth Token is valid
          // this.jwtAuth.checkTokenIsValid().subscribe();
          this.router = router;
          this.translate = translate;
          this.themeService = themeService;
          this.layout = layout;
          this.cdr = cdr;
          this.jwtAuth = jwtAuth;
          this.apiService = apiService;
          this.isModuleLoading = false;
          this.scrollConfig = {};
          this.layoutConf = {};
          this.adminContainerClasses = {};
          this.isrefreshed = false;
          this.parentscroll = false; // Close sidenav after route change in mobile

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

            this.apiService.getTask().subscribe(function (data) {
              if (data == true) {
                var elements = document.getElementsByClassName('egret-blue');

                if (elements) {
                  elements[0].className = elements[0].className + ' ' + 'show-class';
                }

                _this17.parentscroll = data;
              } else _this17.parentscroll = false;
            });
            this.subscription = this.router.events.subscribe(function (event) {
              _this17.isrefreshed = false;
            }); // this.layoutConf = this.layout.layoutConf;

            this.layoutConfSub = this.layout.layoutConf$.subscribe(function (layoutConf) {
              _this17.layoutConf = layoutConf;
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

            window.scroll(0, 0);

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
          key: "onActive",
          value: function onActive(event) {
            this.isrefreshed = true;
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
        return new (t || AdminLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_6__["JwtAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]));
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
        vars: 39,
        consts: [["id", "app-admin-wrap", 3, "ngClass", "dir"], [3, "notificPanel", 4, "ngIf"], [3, "dir", "ngClass"], [3, "ngStyle"], [3, "mouseenter", "mouseleave", 4, "ngIf"], [4, "ngIf"], ["id", "main-content-wrap", 3, "perfectScrollbar", "disabled"], ["id", "rightside-content-hold", 1, "rightside-content-hold", 3, "perfectScrollbar", "disabled"], ["class", "view-loader", "style", "position:fixed;", "fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], [1, "container-dynamic"], [3, "activate"], ["class", "m-auto", 4, "ngIf"], ["style", "margin: 0 -.33rem -.33rem", 4, "ngIf"], [1, "sidebar-backdrop", 3, "ngClass", "click"], ["mode", "over", "position", "end", 1, ""], ["notificationPanel", ""], ["fxLayout", "column", 1, "nofication-panel"], [3, "notificPanel"], [3, "mouseenter", "mouseleave"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "view-loader", 2, "position", "fixed"], [1, "spinner"], [1, "double-bounce1", "mat-bg-accent"], [1, "double-bounce2", "mat-bg-primary"], [1, "m-auto"], [2, "margin", "0 -.33rem -.33rem"]],
        template: function AdminLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminLayoutComponent_app_header_top_1_Template, 1, 1, "app-header-top", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-content", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdminLayoutComponent_app_sidebar_side_4_Template, 1, 0, "app-sidebar-side", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AdminLayoutComponent_app_sidebar_top_5_Template, 1, 0, "app-sidebar-top", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminLayoutComponent_app_header_side_7_Template, 1, 1, "app-header-side", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AdminLayoutComponent_div_9_Template, 4, 0, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-breadcrumb", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "router-outlet", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function AdminLayoutComponent_Template_router_outlet_activate_11_listener($event) {
              return ctx.onActive($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AdminLayoutComponent_span_12_Template, 1, 0, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AdminLayoutComponent_app_footer_13_Template, 1, 0, "app-footer", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminLayoutComponent_Template_div_click_14_listener() {
              return ctx.closeSidebar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-sidenav", 14, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-notifications", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](21, _c0, !ctx.isrefreshed, ctx.isrefreshed))("dir", ctx.layoutConf == null ? null : ctx.layoutConf.dir);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.navigationPos === "top");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"](" app-side-nav-container mat-drawer-transition sidebar-", ctx.layoutConf == null ? null : ctx.layoutConf.sidebarColor, " topbar-", ctx.layoutConf == null ? null : ctx.layoutConf.topbarColor, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dir", ctx.layoutConf.dir)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunctionV"](24, _c1, [!ctx.isrefreshed, ctx.isrefreshed, ctx.layoutConf.navigationPos === "top", ctx.layoutConf.sidebarStyle === "full", ctx.layoutConf.sidebarStyle === "compact" && ctx.layoutConf.navigationPos === "side", ctx.layoutConf.sidebarCompactToggle, ctx.layoutConf.sidebarStyle === "compact-big" && ctx.layoutConf.navigationPos === "side", ctx.layoutConf.sidebarStyle !== "closed" && ctx.layoutConf.navigationPos === "side", ctx.layoutConf.sidebarStyle === "closed", ctx.layoutConf.topbarFixed && ctx.layoutConf.navigationPos === "side"]));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.parentscroll ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c2) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](37, _c4, ctx.layoutConf.sidebarStyle !== "closed" && ctx.layoutConf.isMobile));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notificPanel", _r7);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Dir"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultStyleDirective"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_12__["PerfectScrollbarDirective"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_13__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenav"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutDirective"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_15__["NotificationsComponent"], _header_top_header_top_component__WEBPACK_IMPORTED_MODULE_16__["HeaderTopComponent"], _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_17__["SidebarSideComponent"], _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_18__["SidebarTopComponent"], _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_19__["HeaderSideComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutAlignDirective"]],
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
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var DataService = /*#__PURE__*/function () {
        function DataService(http) {
          _classCallCheck(this, DataService);

          this.http = http;
          this.paramSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
          this.getNavParam = this.paramSource.asObservable();
          this.searchItem = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
          this.getSearchItem = this.searchItem.asObservable();
          this.sendCustomerId = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("");
          this.getCustomerId = this.sendCustomerId.asObservable();
          this.sendCifNumber = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("");
          this.getCifNumber = this.sendCifNumber.asObservable();
          this.subjectOfIcustUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }

        _createClass(DataService, [{
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
          key: "shareCifNumber",
          value: function shareCifNumber(cifNumber) {
            this.sendCifNumber.next(cifNumber);
          }
        }, {
          key: "getLogList",
          value: function getLogList() {
            return this.http.get('/api/apiLog/');
          }
        }, {
          key: "getLogById",
          value: function getLogById(id) {
            return this.http.get('/api/apiLog/' + id);
          }
        }, {
          key: "saveLog",
          value: function saveLog(data) {
            return this.http.post('/api/apiLog/', data);
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
        return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: DataService,
        factory: DataService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }];
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
      "PT0D");
      /* harmony import */


      var _profile_profile_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./profile/profile.component */
      "P6Hk"); // ONLY REQUIRED FOR **SIDE** NAVIGATION LAYOUT
      // ONLY REQUIRED FOR **TOP** NAVIGATION LAYOUT
      // ALWAYS REQUIRED 


      var components = [_header_top_header_top_component__WEBPACK_IMPORTED_MODULE_12__["HeaderTopComponent"], _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_13__["SidebarTopComponent"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__["SidenavComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__["NotificationsComponent"], _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_11__["SidebarSideComponent"], _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_10__["HeaderSideComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_14__["AdminLayoutComponent"], _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_15__["AuthLayoutComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__["BreadcrumbComponent"], _egret_sidebar_egret_sidebar_component__WEBPACK_IMPORTED_MODULE_23__["EgretSidebarComponent"], _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_19__["AppComfirmComponent"], _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_20__["AppLoaderComponent"], _button_loading_button_loading_component__WEBPACK_IMPORTED_MODULE_21__["ButtonLoadingComponent"], _bottom_sheet_share_bottom_sheet_share_component__WEBPACK_IMPORTED_MODULE_22__["BottomSheetShareComponent"], _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_24__["SidemenuComponent"], _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_25__["AvatarComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_26__["ProfileComponent"]];

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
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"], _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_7__["SharedPipesModule"], _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_9__["SharedDirectivesModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_2__["SharedMaterialModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedComponentsModule, {
          declarations: [_header_top_header_top_component__WEBPACK_IMPORTED_MODULE_12__["HeaderTopComponent"], _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_13__["SidebarTopComponent"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__["SidenavComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__["NotificationsComponent"], _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_11__["SidebarSideComponent"], _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_10__["HeaderSideComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_14__["AdminLayoutComponent"], _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_15__["AuthLayoutComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__["BreadcrumbComponent"], _egret_sidebar_egret_sidebar_component__WEBPACK_IMPORTED_MODULE_23__["EgretSidebarComponent"], _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_19__["AppComfirmComponent"], _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_20__["AppLoaderComponent"], _button_loading_button_loading_component__WEBPACK_IMPORTED_MODULE_21__["ButtonLoadingComponent"], _bottom_sheet_share_bottom_sheet_share_component__WEBPACK_IMPORTED_MODULE_22__["BottomSheetShareComponent"], _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_24__["SidemenuComponent"], _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_25__["AvatarComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_26__["ProfileComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"], _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_7__["SharedPipesModule"], _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_9__["SharedDirectivesModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_2__["SharedMaterialModule"]],
          exports: [_header_top_header_top_component__WEBPACK_IMPORTED_MODULE_12__["HeaderTopComponent"], _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_13__["SidebarTopComponent"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__["SidenavComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__["NotificationsComponent"], _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_11__["SidebarSideComponent"], _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_10__["HeaderSideComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_14__["AdminLayoutComponent"], _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_15__["AuthLayoutComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__["BreadcrumbComponent"], _egret_sidebar_egret_sidebar_component__WEBPACK_IMPORTED_MODULE_23__["EgretSidebarComponent"], _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_19__["AppComfirmComponent"], _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_20__["AppLoaderComponent"], _button_loading_button_loading_component__WEBPACK_IMPORTED_MODULE_21__["ButtonLoadingComponent"], _bottom_sheet_share_bottom_sheet_share_component__WEBPACK_IMPORTED_MODULE_22__["BottomSheetShareComponent"], _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_24__["SidemenuComponent"], _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_25__["AvatarComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_26__["ProfileComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedComponentsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"], _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_7__["SharedPipesModule"], _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_9__["SharedDirectivesModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_2__["SharedMaterialModule"]],
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
            var _this19 = this;

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
              if (_this19.mediaObserver.isActive(_this19.lockedBreakpoint)) {
                _this19.sidebarLockedOpen = true;
                _this19.opened = true;
              } else {
                _this19.sidebarLockedOpen = false;
                _this19.opened = false;
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
            var _this20 = this;

            this.backdrop = this._renderer.createElement("div");
            this.backdrop.classList.add("egret-sidebar-overlay");

            this._renderer.appendChild(this._elementRef.nativeElement.parentElement, this.backdrop); // Close sidebar onclick


            this.backdrop.addEventListener("click", function () {
              _this20.close();
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
            var _this21 = this;

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

              _this21.logDetails(message);
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
          var _this22;

          _classCallCheck(this, ErrorHandlerService);

          _this22 = _super.call(this);
          _this22.injector = injector;
          _this22.errorCount = 0;
          return _this22;
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
          var _this23 = this;

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
            return _this23["return"] = params['return'] || '/';
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
            var _this24 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({
              token: DEMO_TOKEN,
              user: DEMO_USER
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              _this24.setUserAndToken(res.token, res.user, !!res);

              _this24.signingIn = true;
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
            var _this25 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(DEMO_USER).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (profile) {
              _this25.setUserAndToken(_this25.getJwtToken(), profile, true);

              _this25.signingIn = false;
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


      var app_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! app/environments/environment.prod */
      "vSAV");

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
            // return environment.ICUST_URL;
            return app_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].ICUST_URL;
          }
        }, {
          key: "baseURL1",
          get: function get() {
            // return environment.ICUST_URL;
            return app_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].LINK_URL;
          }
        }, {
          key: "loanURL",
          get: function get() {
            return app_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].LOAN_ACCOUNT_URL;
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

    /*! exports provided: API_URL, LINK_URL, LOAN_URL, ICUST_URL, API_URL1, REDIRECT_HOST, eSign_URL, ApiService */

    /***/
    function nm5K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "API_URL", function () {
        return API_URL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LINK_URL", function () {
        return LINK_URL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LOAN_URL", function () {
        return LOAN_URL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ICUST_URL", function () {
        return ICUST_URL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "API_URL1", function () {
        return API_URL1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "REDIRECT_HOST", function () {
        return REDIRECT_HOST;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "eSign_URL", function () {
        return eSign_URL;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var app_config_app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! app/config/app.constant */
      "ngOV");
      /* harmony import */


      var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! environments/environment */
      "AytR");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _local_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./local-store.service */
      "tZUg");
      /* harmony import */


      var _showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./showMessage/show-message.service */
      "x/2q"); // import { AppConstants } from './config/app.constant';
      // import { OtpModel } from './views/others/kyc-screening/kyc-screening.component';


      var API_URL = app_config_app_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].baseURL;
      var LINK_URL = app_config_app_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].baseURL1;
      var LOAN_URL = app_config_app_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].loanURL;
      var ICUST_URL = app_config_app_constant__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].baseURL;
      var API_URL1 = 'http://localhost:1212';
      var REDIRECT_HOST = environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].redirectUrl;
      var eSign_URL = environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].eSignUrl;

      var ApiService = /*#__PURE__*/function () {
        function ApiService(http, ls, showMessageService) {
          var _this26 = this;

          _classCallCheck(this, ApiService);

          this.http = http;
          this.ls = ls;
          this.showMessageService = showMessageService;

          this.errorHandler = function (errorResp) {
            console.error('Error : ' + errorResp.message);
            console.error('status : ' + errorResp.status);

            _this26.showMessageService.errorMessage(errorResp.status, errorResp);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorResp);
          };

          this.newUser = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({
            prefix: '',
            firstName: '',
            lastName: '',
            primaryEmailAdress: '',
            phoneNumber: ''
          });
          this.name = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({
            name: ''
          });
          this.KycRef = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({
            kycReference: ''
          });
          this.verify = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({
            verify: '',
            type: ''
          });
          this.verify1 = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({
            verify: '',
            type: ''
          });
          this.OCR = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({
            namePancard: '',
            dob: '',
            panNumber: '',
            imageOCR: '',
            imageOCRBack: '',
            address: ''
          });
          this.Index = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({
            index: ''
          });
          this.Id = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({
            id: ''
          });
          this.AccountId = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({
            accountId: ''
          });
          this.AccountType = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({
            accountId: ''
          });
          this.Flag = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({
            flag: ''
          });
          this.chargeFlag = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({
            chargeflag: ''
          });
          this.finishFlag = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({
            finishFlag: true
          });
          this.approved = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
          this.subjectOfIcustUser = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.appEntryApproved = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false); // to send and recive data of approvalStaging

          this.paramSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({});
          this.getNavParam = this.paramSource.asObservable();
          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({});
          this.getaccParam = this.subject.asObservable();
          this.isKycDataFetched = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({});
          this.kycDataFetched = this.isKycDataFetched.asObservable();
          this.signData = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
          this.taskData = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        }

        _createClass(ApiService, [{
          key: "getEsignUrl",
          value: function getEsignUrl() {
            throw new Error('Method not implemented.');
          }
        }, {
          key: "updateCorporateService",
          value: function updateCorporateService(corporateId, arg1, arg2) {
            throw new Error('Method not implemented.');
          }
        }, {
          key: "sendApprovedStatus",
          value: function sendApprovedStatus(message) {
            console.log("message", message);
            this.approved.next(message);
          }
        }, {
          key: "getApprovedStatus",
          value: function getApprovedStatus() {
            return this.approved.asObservable();
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
        }, {
          key: "sendApprovedMessage",
          value: function sendApprovedMessage(message) {
            this.appEntryApproved.next(message);
          }
        }, {
          key: "getAppViewSummary",
          value: function getAppViewSummary() {
            return this.appEntryApproved.asObservable();
          }
        }, {
          key: "getCardApplicationEntrySummary",
          value: function getCardApplicationEntrySummary(cardId) {
            return this.http.get("".concat(LOAN_URL, "/cardOrigin/fetchApplnEntrySummaryInfo?cardId=").concat(cardId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getchargeFlag",
          value: function getchargeFlag() {
            return this.chargeFlag.asObservable();
          }
        }, {
          key: "setchargeFlag",
          value: function setchargeFlag(charge) {
            this.chargeFlag.next(charge);
          }
        }, {
          key: "getOCR",
          value: function getOCR() {
            return this.OCR.asObservable();
          }
        }, {
          key: "setOCR",
          value: function setOCR(ocr) {
            this.OCR.next(ocr);
          }
        }, {
          key: "getFinishFlag",
          value: function getFinishFlag() {
            return this.finishFlag.asObservable();
          }
        }, {
          key: "setName",
          value: function setName(name) {
            this.name.next(name);
          }
        }, {
          key: "getName",
          value: function getName() {
            return this.name.asObservable();
          }
        }, {
          key: "setFinishFlag",
          value: function setFinishFlag(finishFlag) {
            this.finishFlag.next(finishFlag);
          }
        }, {
          key: "getAccountType",
          value: function getAccountType() {
            return this.AccountType.asObservable();
          }
        }, {
          key: "setAccountType",
          value: function setAccountType(accountType) {
            this.AccountType.next(accountType);
          }
        }, {
          key: "getFlag",
          value: function getFlag() {
            return this.Flag.asObservable();
          }
        }, {
          key: "setFlag",
          value: function setFlag(flag) {
            this.Flag.next(flag);
          }
        }, {
          key: "getId",
          value: function getId() {
            return this.Id.asObservable();
          }
        }, {
          key: "setKycRef",
          value: function setKycRef(kycRef) {
            this.KycRef.next(kycRef);
          }
        }, {
          key: "getKycRef",
          value: function getKycRef() {
            return this.KycRef.asObservable();
          }
        }, {
          key: "setId",
          value: function setId(id) {
            this.Id.next(id);
          }
        }, {
          key: "getAccountId",
          value: function getAccountId() {
            return this.AccountId.asObservable();
          }
        }, {
          key: "setAccountId",
          value: function setAccountId(accId) {
            this.AccountId.next(accId);
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
          }
        }, {
          key: "setIndex",
          value: function setIndex(index) {
            this.ls.setItem('currentKycTabIndex', index.index);
            this.Index.next(index);
          }
        }, {
          key: "getIndex",
          value: function getIndex() {
            return this.Index.asObservable();
          }
        }, {
          key: "setVerify",
          value: function setVerify(verify) {
            this.verify.next(verify);
          }
        }, {
          key: "getverify",
          value: function getverify() {
            return this.verify.asObservable();
          } // email

        }, {
          key: "setVerify1",
          value: function setVerify1(verify) {
            this.verify1.next(verify);
          }
        }, {
          key: "getverify1",
          value: function getverify1() {
            return this.verify1.asObservable();
          }
        }, {
          key: "getAccountDetailsById",
          value: function getAccountDetailsById(accountId) {
            return this.http.get("".concat(API_URL, "/productAccount/account/").concat(accountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getDigitalsignById",
          value: function getDigitalsignById(accountId) {
            return this.http.get("".concat(API_URL, "/accountdata/fetchSignatureInfo?accountId=").concat(accountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAccountTransactionById",
          value: function getAccountTransactionById(accountId) {
            return this.http.get("".concat(API_URL, "/cash-deposit/api/fetchTransaction?accountNumber=").concat(accountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getScorecardQuestions",
          value: function getScorecardQuestions(accountType) {
            return this.http.get("".concat(API_URL, "/qualitative-scorecard/getQuestionDetails?accountType=").concat(accountType)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getScorecardQuestionsByCardId",
          value: function getScorecardQuestionsByCardId(cardId) {
            return this.http.get("".concat(API_URL, "/qualitative-scorecard/getQuestionDetails?cardId=").concat(cardId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getCustomerInformationDetailsById",
          value: function getCustomerInformationDetailsById(accountId) {
            return this.http.get("".concat(API_URL, "/productCustomer/").concat(accountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getOtp",
          value: function getOtp(otp) {
            return this.http.post("".concat(API_URL, "/rest/otp/generateOtp"), otp).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getOtpValidating",
          value: function getOtpValidating(obj) {
            return this.http.put("".concat(API_URL, "/rest/otp/validateOtp"), obj);
          }
        }, {
          key: "getCustomerDashBoardDetails",
          value: function getCustomerDashBoardDetails() {
            return this.http.get("".concat(API_URL, "/customerdata"), {
              responseType: 'text'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler)); //  .pipe(catchError(this.errorHandler));
          }
        }, {
          key: "getProfileDetails",
          value: function getProfileDetails(customerId) {
            return this.http.get("".concat(API_URL, "/customerdata/getProfileDetails?customerId=").concat(customerId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getCoropratedetails",
          value: function getCoropratedetails(corporateId) {
            if (corporateId) {
              return this.http.get("".concat(API_URL, "/corporateCustomer/fetchInfo?corporateId=").concat(corporateId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
            }
          }
        }, {
          key: "getApprovedDetails",
          value: function getApprovedDetails(loanAccountId) {
            return this.http.get("".concat(LOAN_URL, "/supervisor-apprstage-api/fetchApprovalDetails?loanAccountId=").concat(loanAccountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchSignatureInfo",
          value: function fetchSignatureInfo(customerId) {
            return this.http.get("".concat(API_URL, "/accountdata/fetchSignatureInfo?customerId=").concat(customerId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAccountDetail",
          value: function getAccountDetail(casaLink) {
            return this.http.get("".concat(API_URL, "/").concat(casaLink)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAlertSlots",
          value: function getAlertSlots(alerts) {
            return this.http.post("".concat(API_URL, "/customerdata"), alerts); //  .pipe(catchError(this.errorHandler));
          }
        }, {
          key: "getAccountInfoDetails",
          value: function getAccountInfoDetails(accountInfo) {
            return this.http.post("".concat(API_URL, "/customerdata"), accountInfo); //  .pipe(catchError(this.errorHandler));
          }
        }, {
          key: "getDigitalsignByCardId",
          value: function getDigitalsignByCardId(cardId) {
            return this.http.get("".concat(API_URL, "/accountdata/fetchSignatureInfo?cardId=").concat(cardId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getCasaAccDetails",
          value: function getCasaAccDetails(customerId) {
            return this.http.get("".concat(API_URL, "/customerdata/getProfileDetails?customerId=").concat(customerId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAccDetails",
          value: function getAccDetails(customerId) {
            return this.http.get("".concat(API_URL, "/accountdata/fetchAccount/").concat(customerId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getKycStatus",
          value: function getKycStatus(customerId) {
            return this.http.get("".concat(API_URL, "/customerdata/getCustomerInfo?customerId=").concat(customerId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getCasaDetails",
          value: function getCasaDetails(casaLink) {
            return this.http.get("".concat(API_URL).concat(casaLink)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getCasaDetailsScreen",
          value: function getCasaDetailsScreen(accountId) {
            return this.http.get("".concat(API_URL, "/accountdata/getAccountInfo?accountId=").concat(accountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getDependentsData",
          value: function getDependentsData(customerId) {
            return this.http.get("".concat(API_URL, "/customerdata/dashboard/fetchDependent?customerId=").concat(customerId));
          }
        }, {
          key: "getDropDownValues",
          value: function getDropDownValues(entityName) {
            return this.http.get("".concat(API_URL, "/rest/data/getMasterData?entityName=").concat(entityName)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getDropDownValues1",
          value: function getDropDownValues1(entityName, key) {
            return this.http.get("".concat(API_URL, "/rest/data/getMasterDataInfo?entityName=").concat(entityName, "&key=").concat(key)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getDropDownForStateCity",
          value: function getDropDownForStateCity(entityName, key) {
            return this.http.get("".concat(API_URL, "/rest/data/getMasterDataInfo1?entityName=").concat(entityName, "&key=").concat(key)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "countryFlaglists",
          value: function countryFlaglists(data) {
            return this.http.get("".concat(API_URL, "/currency/fetchInfo?countryName=").concat(data)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          } // countryCurrencyFlaglists(data:any){
          //   return this.http.get<any>(`${API_URL}/currencyMaint-api/fetchCurrencyMainByCountryCode?country=${data}`).pipe(catchError(this.errorHandler));
          // }
          // getCustInfo(custId: string) {
          //   return this.http.get<any>(`${API_URL}/customerdata/${custId}`).pipe(catchError(this.errorHandler));
          // }

        }, {
          key: "getCustInfo",
          value: function getCustInfo(cifNumber) {
            return this.http.get("".concat(API_URL, "/customerdata/getCustomerInfo?cifNumber=").concat(cifNumber)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getCardType",
          value: function getCardType(CardType) {
            return this.http.get("".concat(LOAN_URL, "/account-services-api/fetchCardTypeInfo?cardType=").concat(CardType)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "kycScreenBasicinfo",
          value: function kycScreenBasicinfo(data) {
            return this.http.post("".concat(API_URL, "/customerdata/upsertCustomerDetails"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "securedDraft",
          value: function securedDraft(data) {
            return this.http.post("".concat(API_URL, "/accountdata/upsertSecuredoverDraft"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchBySecurityNumber",
          value: function fetchBySecurityNumber(securityReferenceNum) {
            return this.http.get("".concat(API_URL, "/accountdata/getSecuredOverdraftDetails?securityReferenceNumber=").concat(securityReferenceNum)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteCollateral",
          value: function deleteCollateral(collateralId) {
            return this.http["delete"]("".concat(API_URL, "/accountdata/deleteSecuredOverdraft/collateral?id=").concat(collateralId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "uploadcollateralDoc",
          value: function uploadcollateralDoc(uploadData) {
            return this.http.post("".concat(API_URL, "/rest/upload/uploadCollateralDocument"), uploadData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          } // responseType : 'text' as 'json',
          // reportProgress: true,
          // observe: 'events',

        }, {
          key: "unsecuredDraft",
          value: function unsecuredDraft(data) {
            return this.http.post("".concat(API_URL, "/accountdata/upsertUnSecuredoverDraft"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "DocumentUplaod",
          value: function DocumentUplaod(file, content) {
            return this.http.post("".concat(API_URL, "/rest/upload/uploadDoc/").concat(content), file).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "insertNewUserOnboarding",
          value: function insertNewUserOnboarding(data) {
            return this.http.post("".concat(API_URL, "/customerdata/upsertCustomerDetails"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "uploadDocument",
          value: function uploadDocument(uploadData) {
            return this.http.post("".concat(API_URL, "/rest/upload/uploadDoc"), uploadData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "uploadCorporateDocument",
          value: function uploadCorporateDocument(uploadData) {
            return this.http.post("".concat(API_URL, "/rest/upload/uploadCorporateDocs"), uploadData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          } // uploadSignature(uploadData: any) {
          //   return this.http.post<any>(`${API_URL}/rest/upload/uploadSignature`, uploadData).pipe(catchError(this.errorHandler));
          // }

        }, {
          key: "uploadSignature",
          value: function uploadSignature(uploadData) {
            return this.http.post("".concat(API_URL, "/rest/upload/uploadSignature"), uploadData, {
              reportProgress: true,
              observe: 'events'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "chargeDetailsSave",
          value: function chargeDetailsSave(data) {
            return this.http.post("".concat(API_URL, "/accountdata/saveChargeDetails"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "intrestDetailsSave",
          value: function intrestDetailsSave(data) {
            return this.http.post("".concat(API_URL, "/accountdata/saveIntrestDetails"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "approvalAccountFetch",
          value: function approvalAccountFetch(accountId) {
            return this.http.get("".concat(API_URL, "/productAccount/account/").concat(accountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "approvalUpdate",
          value: function approvalUpdate(data) {
            return this.http.post("".concat(API_URL, "/productAccount"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "upload",
          value: function upload(uploadData) {
            return this.http.post("".concat(API_URL, "/rest/upload/uploadDoc"), uploadData, {
              reportProgress: true,
              observe: 'events'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "upload1",
          value: function upload1(uploadData) {
            return this.http.post("".concat(API_URL, "/rest/upload/uploadDoc"), uploadData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "saveDependents",
          value: function saveDependents(uploadData) {
            return this.http.post("".concat(API_URL, "/customerdata/upsertCustomerDependentInfo"), uploadData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "upsertfinancialDetails",
          value: function upsertfinancialDetails(financialDetails) {
            return this.http.post("".concat(API_URL, "/accountdata/upsertfinancialDetails"), financialDetails).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getFlexcubeDetails",
          value: function getFlexcubeDetails(eventType, accountType) {
            return this.http.get("".concat(API_URL, "/accountdata/getChargeIntrestDetails?eventType=").concat(eventType, "&accountType=").concat(accountType)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAssessmentReportDetails",
          value: function getAssessmentReportDetails(accountId) {
            return this.http.get("".concat(API_URL, "/application-assessment/getAssessmentReport/").concat(accountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getApplnAssessmentDetails",
          value: function getApplnAssessmentDetails(loanAccountId) {
            return this.http.get("".concat(API_URL, "/accountdata/getApplicationAssessmentSummary/").concat(loanAccountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "saveAssessmentReports",
          value: function saveAssessmentReports(data) {
            return this.http.post("".concat(API_URL, "/application-assessment"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "saveQualitativeScorecard",
          value: function saveQualitativeScorecard(data) {
            return this.http.post("".concat(API_URL, "/qualitative-scorecard"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "createCustomerInformation",
          value: function createCustomerInformation(nominee) {
            return this.http.post("".concat(API_URL, "/accountdata/upsertfinancialDetails"), nominee).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getListofNominess",
          value: function getListofNominess() {
            return this.http.get("".concat(API_URL, "/customerAccNominee")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "createNominee",
          value: function createNominee(userId, nomineeModel) {
            return this.http.post("".concat(API_URL, "/customerAccNominee/").concat(userId), nomineeModel).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "updateNominee",
          value: function updateNominee(userId, nomineeModel) {
            return this.http.post("".concat(API_URL, "/customerAccNominee/").concat(userId), nomineeModel).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "createAccountService",
          value: function createAccountService(userId, serviceModel) {
            return this.http.post("".concat(API_URL, "/customerAccServices/").concat(userId), serviceModel).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "updateAccountService",
          value: function updateAccountService(userId, serviceModel) {
            // return this.http.put<any>(`${API_URL}/customerAccServices/${userId}`, serviceModel).pipe(catchError(this.errorHandler));
            return this.http.post("".concat(API_URL, "/customerAccServices/").concat(userId), serviceModel).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "sendNavParam",
          value: function sendNavParam(params) {
            this.paramSource.next(params);
          }
        }, {
          key: "sendApprovalStgingData",
          value: function sendApprovalStgingData(params) {
            this.paramSource.next(params);
          }
        }, {
          key: "getIntrestValues",
          value: function getIntrestValues(accountId) {
            return this.http.get("".concat(API_URL, "/accountdata/getIntrestDetails?accountId=").concat(accountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getChargeValues",
          value: function getChargeValues(accountId) {
            return this.http.get("".concat(API_URL, "/accountdata/getChargeDetails?accountId=").concat(accountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getQualitativeScorecardDetails",
          value: function getQualitativeScorecardDetails(accountId) {
            return this.http.get("".concat(API_URL, "/qualitative-scorecard/getQualitativeScoreCard/").concat(accountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getLoanQualitativeScorecardDetails",
          value: function getLoanQualitativeScorecardDetails(loanAccountId) {
            return this.http.get("".concat(API_URL, "/qualitative-scorecard/getQualitativeScoreCardInfo?loanAccountId=").concat(loanAccountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getCardQualitativeScorecardDetails",
          value: function getCardQualitativeScorecardDetails(accountId) {
            return this.http.get("".concat(API_URL, "/qualitative-scorecard/getQualitativeScoreCardInfo?cardId=").concat(accountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "gettingMandateDetails",
          value: function gettingMandateDetails(accountId) {
            return this.http.get("".concat(API_URL, "/productMandate/").concat(accountId), accountId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "LimitEntrySummary",
          value: function LimitEntrySummary(id) {
            return this.http.get("".concat(API_URL, "/accountdata/getLimitEntrySummary?accountId=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "securedOverdraftSummary",
          value: function securedOverdraftSummary(id) {
            return this.http.get("".concat(API_URL, "/accountdata/getSecuredOverdraftDetails?accountId=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "UnsecuredOverdraftSummary",
          value: function UnsecuredOverdraftSummary(id) {
            return this.http.get("".concat(API_URL, "/accountdata/getUnsecuredOverdraftDetails?accountId=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getFinancialDetails",
          value: function getFinancialDetails(id) {
            return this.http.get("".concat(API_URL, "/accountdata/getFinancialDetails?accountId=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getLimitEntrySummary",
          value: function getLimitEntrySummary(id) {
            return this.http.get("".concat(API_URL, "/accountdata/getLimitEntrySummary?accountId=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "gettingNomineeDetails",
          value: function gettingNomineeDetails(productAccountId) {
            return this.http.get("".concat(API_URL, "/customerAccNominee/").concat(productAccountId), productAccountId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAccountIdByCusId",
          value: function getAccountIdByCusId(customerId) {
            return this.http.get("".concat(API_URL, "/accountdata/fetchAccount/").concat(customerId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "gettingAccountServiceDetails",
          value: function gettingAccountServiceDetails(productAccountId) {
            return this.http.get("".concat(API_URL, "/customerAccServices/fetchAccServiceDetails?productAccountId=").concat(productAccountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "gettingAccountServiceetails",
          value: function gettingAccountServiceetails(productAccountId) {
            return this.http.get("".concat(API_URL, "/customerAccServices/fetchAccServiceDetails?productAccountId=").concat(productAccountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "uploadDocLink",
          value: function uploadDocLink(LINK_URL, customerId) {
            var encodePwd = btoa(LINK_URL);
            console.log(LINK_URL);
            return this.http.post("".concat(API_URL, "/rest/upload/sendUploadLink?link=").concat(encodePwd, "&customerId=").concat(customerId), LINK_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "gettingallDetails",
          value: function gettingallDetails(productId) {
            return this.http.get("".concat(API_URL, "/accountEntryStage/").concat(productId), productId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "gettingCustomerDetails",
          value: function gettingCustomerDetails(cifNumber) {
            return this.http.get("".concat(API_URL, "/customerdata/getCustomerInfo?cifNumber=").concat(cifNumber)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getImage",
          value: function getImage(id) {
            return this.http.get("".concat(API_URL, "/customerdata/getProfileDetails?customerId=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getPrimaryInfo",
          value: function getPrimaryInfo(kycNum) {
            return this.http.get("".concat(API_URL, "/customerdata/getCustomerInfo?kycReference=KYC_").concat(kycNum)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getPrimaryInfoByCustomerId",
          value: function getPrimaryInfoByCustomerId(customerId) {
            return this.http.get("".concat(API_URL, "/customerdata/getCustomerInfo?customerId=").concat(customerId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "searchNames",
          value: function searchNames(name) {
            return this.http.get("".concat(API_URL, "/customerdata/fetchCustomers/").concat(name)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "dashboardProfile",
          value: function dashboardProfile(id) {
            return this.http.get("".concat(API_URL, "/customerdata/getCustomerInfo?customerId=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getCustOnboardingTaskSummaryList",
          value: function getCustOnboardingTaskSummaryList() {
            return this.http.get("".concat(API_URL, "/customerdata/getCustomerInfo/")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
            ;
          }
        }, {
          key: "getCustOnboardingTaskSummary",
          value: function getCustOnboardingTaskSummary(customerId) {
            return this.http.get("".concat(API_URL, "/customerdata/getCustomerInfo?customerId=").concat(customerId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
            ;
          } // getKycTaskSummaryList() {
          //   return this.http.get<any>(`${API_URL}/customerdata/getCustomerInfo`).pipe(catchError(this.errorHandler));
          // }

        }, {
          key: "getKycTaskSummaryList",
          value: function getKycTaskSummaryList(status, page, size) {
            return this.http.get("".concat(API_URL, "/customerdata/getCustomerInfo?status=").concat(status, "&page=").concat(page)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAllCustOnBoardingData",
          value: function getAllCustOnBoardingData(status, page, size) {
            return this.http.get("".concat(API_URL, "/customerdata/getCustomerInfo?status=").concat(status, "&page=").concat(page)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getKycDetails",
          value: function getKycDetails(params, status) {
            return this.http.get("".concat(API_URL, "/customerdata/getCustomerInfo?").concat(params, "&status=").concat(status)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getKycDetails1",
          value: function getKycDetails1(text) {
            return this.http.get("".concat(API_URL, "/customerdata/getCustomerInfo?cifNumber=").concat(text)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getKycDetails2",
          value: function getKycDetails2(text) {
            return this.http.get("".concat(API_URL, "/customerdata/getCustomerInfo?kycReference=").concat(text)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getKycTaskSummary",
          value: function getKycTaskSummary(value) {
            var params;
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append("customerId", value);
            return this.http.get("".concat(API_URL, "/customerdata/fetchCustomerDetails?").concat(params)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getKycTaskSummaryAll",
          value: function getKycTaskSummaryAll(paramKey, paramValue) {
            var params;
            var arr = ['customerId', 'firstName'];
            arr.filter(function (item) {
              if (item.includes(paramKey)) {
                console.log('item', item);
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append("".concat(item), paramValue);
              }
            });
            return this.http.get("".concat(API_URL, "/customerdata/fetchCustomerDetails?").concat(params)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getVideoTaskSummary",
          value: function getVideoTaskSummary(phoneNo, primaryEmail) {
            return this.http.get("".concat(API_URL, "/icust-video-verify/fetchInfo?phoneNo=").concat(phoneNo, "&primaryEmail=").concat(primaryEmail)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "gettingAvailableSlotsTeller",
          value: function gettingAvailableSlotsTeller(selectedDate, tellerId) {
            console.log("Hiiting");
            return this.http.get("".concat(API_URL, "/icust-video-verify/availableSlots?scheduledDate=").concat(selectedDate, "&tellerId=").concat(tellerId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "updateKycStatus",
          value: function updateKycStatus(data) {
            return this.http.post("".concat(API_URL, "/customerdata/upsertCustomerDetails"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getDashboardRecenetActivities",
          value: function getDashboardRecenetActivities(accountId) {
            return this.http.get("".concat(API_URL, "/accountdata/fetchAccount/").concat(accountId));
          }
        }, {
          key: "getDashBoardRecentTransactions",
          value: function getDashBoardRecentTransactions(customerId) {
            return this.http.get("".concat(API_URL, "/cash-deposit/api/fetchRecentTrans?customerId=").concat(customerId));
          }
        }, {
          key: "getRecentTransaction",
          value: function getRecentTransaction(accountNumber) {
            return this.http.get("".concat(API_URL, "/cash-deposit/api/fetchTransaction?accountNumber=").concat(accountNumber));
          }
        }, {
          key: "getDashboardAccountdata",
          value: function getDashboardAccountdata(customerId) {
            return this.http.get("".concat(API_URL, "/accountdata/fetchAccount/").concat(customerId));
          }
        }, {
          key: "getDashboardKycData",
          value: function getDashboardKycData(customerId) {
            return this.http.get("".concat(API_URL, "/customerdata/getCustomerInfo?customerId=").concat(customerId));
          }
        }, {
          key: "signInLater",
          value: function signInLater(data) {
            return this.http.post("".concat(API_URL, "/rest/esignURL/send"), data);
          }
        }, {
          key: "updateKycStatusByCustId",
          value: function updateKycStatusByCustId(customerId, kycStatus, custStatus) {
            console.log(customerId); // const id=
            // const updateStatus = new FormData();

            var data = {
              customerId: +customerId,
              kycStatus: kycStatus,
              custStatus: custStatus
            }; // updateStatus.append("data", JSON.stringify(data));

            return this.http.put("".concat(API_URL, "/customerdata/updateKycStatusByCustomerId"), data);
          }
        }, {
          key: "updateCorporateSatatus",
          value: function updateCorporateSatatus(corporateId, corporateStatus) {
            var data = {
              corporateId: +corporateId,
              corporateStatus: corporateStatus
            }; // updateStatus.append("data", JSON.stringify(data));

            return this.http.put("".concat(API_URL, "/corporateCustomer/updateCorporateStatus"), data);
          }
        }, {
          key: "getCustomerDocuments",
          value: function getCustomerDocuments(customerId, document_type) {
            console.log('in service');
            return this.http.get("".concat(API_URL, "/customerdata/fetchCustomerDocuments?customerId=").concat(customerId, "&documentType=").concat(document_type)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) {}));
          }
        }, {
          key: "getCustomerAllDocuments",
          value: function getCustomerAllDocuments(customerId, document_type) {
            console.log('in service');
            return this.http.get("".concat(API_URL, "/customerdata/fetchAllCustomerDocuments?customerId=").concat(customerId, "&documentType=").concat(document_type)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) {}));
          }
        }, {
          key: "getCustomerDocForIdProof",
          value: function getCustomerDocForIdProof(customerId, document_type, documentSide) {
            console.log('in service');
            return this.http.get("".concat(API_URL, "/customerdata/fetchCustomerDocuments?customerId=").concat(customerId, "&documentType=").concat(document_type, "&documentSide=").concat(documentSide)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) {}));
          }
        }, {
          key: "getSignatureDocuments",
          value: function getSignatureDocuments(customerId) {
            console.log('in service');
            return this.http.get("".concat(API_URL, "/accountdata/fetchSignatureInfo?customerId=").concat(customerId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) {}));
          }
        }, {
          key: "deleteCustomerDoc",
          value: function deleteCustomerDoc(customerId, id) {
            return this.http["delete"]("".concat(API_URL, "/customerdata/deleteCustDocument?customerId=").concat(customerId, "&id=").concat(id));
          }
        }, {
          key: "deleteCustDoc",
          value: function deleteCustDoc(customerId, documentName, documentSide) {
            return this.http["delete"]("".concat(API_URL, "/customerdata/deleteCustDocument?customerId=").concat(customerId, "&documentName=").concat(documentName, "&documentSide=").concat(documentSide));
          }
        }, {
          key: "delCustDoc",
          value: function delCustDoc(customerId, documentName) {
            return this.http["delete"]("".concat(API_URL, "/customerdata/deleteCustDocument?documentName=").concat(documentName, "&customerId=").concat(customerId));
          }
        }, {
          key: "delCorporateCustDoc",
          value: function delCorporateCustDoc(corporateId, documentName, id) {
            return this.http["delete"]("".concat(API_URL, "/corporateCustomer/deleteCorporateDocument?corporateId=").concat(corporateId, "&documentName=").concat(documentName, "&id=").concat(id));
          }
        }, {
          key: "deleteCustomerSign",
          value: function deleteCustomerSign(accountSignatureId) {
            return this.http["delete"]("".concat(API_URL, "/accountdata/deleteSignature?accountSignatureId=").concat(accountSignatureId));
          }
        }, {
          key: "getPendingActivities",
          value: function getPendingActivities(customerId) {
            console.log("customerId::", customerId);
            return this.http.get("".concat(API_URL, "/dashboard/getPendingActivities?customerId=").concat(customerId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) {
              console.log("result ::", result);
            }));
          }
        }, {
          key: "getCustomerByCustomerID",
          value: function getCustomerByCustomerID(key, value) {
            return this.http.get("".concat(API_URL, "/customerdata/fetchCustomers?").concat(key, "=").concat(value)); // .pipe(catchError(this.errorHandler));
          }
        }, {
          key: "fetchAccountBalanceByAccountId",
          value: function fetchAccountBalanceByAccountId(accountId) {
            return this.http.get("".concat(API_URL, "/accountdata/accountDetails/").concat(accountId));
          }
        }, {
          key: "fetchAccountIdByCustId",
          value: function fetchAccountIdByCustId(custId) {
            return this.http.get("".concat(API_URL, "/accountdata/account/").concat(custId));
          }
        }, {
          key: "deleteNomineeById",
          value: function deleteNomineeById(id, loggedInUser) {
            return this.http["delete"]("".concat(API_URL, "/customerAccNominee/").concat(id, "/").concat(loggedInUser)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "sendCIF",
          value: function sendCIF(message) {
            this.subject.next(message);
          }
        }, {
          key: "getCIf",
          value: function getCIf() {
            return this.subject.asObservable();
          }
        }, {
          key: "sendKycDataFetchedInfo",
          value: function sendKycDataFetchedInfo(message) {
            this.isKycDataFetched.next(message);
          }
        }, {
          key: "getKycDataFetchedInfo",
          value: function getKycDataFetchedInfo() {
            return this.isKycDataFetched.asObservable();
          }
        }, {
          key: "getAccountBranch",
          value: function getAccountBranch() {
            return this.http.get("".concat(API_URL, "/branch/fetchAuthBranchInfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) {}));
          }
        }, {
          key: "updateAssessment",
          value: function updateAssessment(data) {
            return this.http.post("".concat(LOAN_URL, "/loanAssessment/upsertDetails"), data); //return this.http.post<any>(`${API_URL}/rest/otp/generateOtp`, otp).pipe(catchError(this.errorHandler));
          }
        }, {
          key: "getAssessment",
          value: function getAssessment(loanAccountId) {
            console.log("loanAccountId::", loanAccountId);
            return this.http.get("".concat(LOAN_URL, "/loanAssessment/fetchLoanAssessmentById?loanAccountId=").concat(loanAccountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) {
              console.log("result ::", result);
            }));
          }
        }, {
          key: "saveAssessmentDetails",
          value: function saveAssessmentDetails(data) {
            return this.http.post("".concat(LOAN_URL, "/loanAssessment/upsertDetails"), data);
          }
        }, {
          key: "fetchLoanAssessment",
          value: function fetchLoanAssessment(loanAccountId) {
            console.log("loanAccountId::", loanAccountId);
            return this.http.get("".concat(LOAN_URL, "/application-entrystage-api/fetchAssessmentInfoByLoanAccId?loanAccountId=").concat(loanAccountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) {
              console.log("result ::", result);
            }));
          }
        }, {
          key: "updateAssessmentDetails",
          value: function updateAssessmentDetails(data) {
            return this.http.put("".concat(LOAN_URL, "/application-entrystage-api/updateApprovedLoanAmount"), data);
          }
        }, {
          key: "upsertOfferIssue",
          value: function upsertOfferIssue(data) {
            return this.http.post("".concat(LOAN_URL, "/offer-issueStage-api/upsertOfferIssue"), data);
          }
        }, {
          key: "getOfferIssueDetails",
          value: function getOfferIssueDetails(loanAccountId) {
            console.log("customerId::", loanAccountId);
            return this.http.get("".concat(LOAN_URL, "/offer-issueStage-api/fetchOfferIssueByLoanAccountId?loanAccountId=").concat(loanAccountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) {
              console.log("result ::", result);
            }));
          }
        }, {
          key: "loanintrestDetailsSave",
          value: function loanintrestDetailsSave(data) {
            return this.http.post("".concat(LOAN_URL, "/interest-api/upsertDetails"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "loanInterestFetchById",
          value: function loanInterestFetchById(accountId) {
            return this.http.get("".concat(LOAN_URL, "/interest-api/fetchLoanInterestById?loanAccountId=").concat(accountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "cardintrestDetailsSave",
          value: function cardintrestDetailsSave(data) {
            return this.http.post("".concat(LOAN_URL, "/interest-api/upsertCardDetails"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "cardInterestFetchById",
          value: function cardInterestFetchById(cardId) {
            return this.http.get("".concat(LOAN_URL, "/interest-api/fetchCardInterestById?cardId=").concat(cardId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "cardChargeDetailsSave",
          value: function cardChargeDetailsSave(data) {
            return this.http.post("".concat(LOAN_URL, "/charge_api/upsertCardChargeDetails"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "cardChargeFetchById",
          value: function cardChargeFetchById(cardId) {
            return this.http.get("".concat(LOAN_URL, "/charge_api/fetchCardChargeDetailsById?cardId=").concat(cardId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "loanDisbursementSave",
          value: function loanDisbursementSave(data) {
            return this.http.post("".concat(LOAN_URL, "/disbursement-api/upsertLoanDisbursementDetails"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "loanDisbursementFetchById",
          value: function loanDisbursementFetchById(accountId) {
            return this.http.get("".concat(LOAN_URL, "/disbursement-api/fetchLoanDisbursementById?loanAccountId=").concat(accountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "loanRepaymentSave",
          value: function loanRepaymentSave(data) {
            return this.http.post("".concat(LOAN_URL, "/repayment-api/upsertLoanRepaymentDeatils"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "loanRepaymentFetchById",
          value: function loanRepaymentFetchById(accountId) {
            return this.http.get("".concat(LOAN_URL, "/repayment-api/fetchLoanRepaymentDetailById?loanAccountId=").concat(accountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "loanchargeSave",
          value: function loanchargeSave(data) {
            return this.http.post("".concat(LOAN_URL, "/charge_api/upsertLoanChargeDetails"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "saveCreditDetails",
          value: function saveCreditDetails(data) {
            return this.http.post("".concat(LOAN_URL, "/underWritingStage/saveOrUpdateCreditRating"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "gettingCreditRatingDetails",
          value: function gettingCreditRatingDetails(loanAccId) {
            return this.http.get("".concat(LOAN_URL, "/underWritingStage/fetchCreditRatingDetails?loanAccId=").concat(loanAccId));
          }
        }, {
          key: "saveLegalOpinion",
          value: function saveLegalOpinion(data) {
            return this.http.post("".concat(LOAN_URL, "/underWritingStage/saveOrUpdateLegalOpinion"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "gettingLegalOpinionDetails",
          value: function gettingLegalOpinionDetails(loanAccId) {
            return this.http.get("".concat(LOAN_URL, "/underWritingStage/getLegalOpinionByLoanId/").concat(loanAccId));
          }
        }, {
          key: "saveValuationDetails",
          value: function saveValuationDetails(data) {
            return this.http.post("".concat(LOAN_URL, "/underWritingStage/saveOrValuationOfAsset"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "gettingValuationDetails",
          value: function gettingValuationDetails(loanAccId) {
            return this.http.get("".concat(LOAN_URL, "/underWritingStage/getValOfAsstByLoanId/").concat(loanAccId));
          }
        }, {
          key: "saveLoanDetails",
          value: function saveLoanDetails(data) {
            return this.http.post("".concat(LOAN_URL, "/application-entrystage-api/upsertLoanDetails"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "upsertAssetDetails",
          value: function upsertAssetDetails(data) {
            return this.http.post("".concat(LOAN_URL, "/application-entrystage-api/upsertAssetDetails"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getLoanDetails",
          value: function getLoanDetails(loanAccountId) {
            console.log("customerId::", loanAccountId);
            return this.http.get("".concat(LOAN_URL, "/application-entrystage-api/fetchLoanDetailsByLoanAccId?loanAccountId=").concat(loanAccountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) {
              console.log("result ::", result);
            }));
          }
        }, {
          key: "getAssetails",
          value: function getAssetails(loanAccountId) {
            console.log("customerId::", loanAccountId);
            return this.http.get("".concat(LOAN_URL, "/application-entrystage-api/fetchAssetDetailsByLoanAccId?loanAccountId=").concat(loanAccountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) {
              console.log("result ::", result);
            }));
          } //Admission details start

        }, {
          key: "getAdmissionDetailsByLoanAccId",
          value: function getAdmissionDetailsByLoanAccId(loanAccountId) {
            return this.http.get("".concat(LOAN_URL, "/application-entrystage-api/fetchAdmissionDetailsByLoanAccId?loanAccountId=").concat(loanAccountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) {
              console.log("result ::", result);
            }));
          }
        }, {
          key: "upsertAdmissionDetails",
          value: function upsertAdmissionDetails(data) {
            return this.http.post("".concat(LOAN_URL, "/application-entrystage-api/upsertAdmissionDetails"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          } //Admission details end
          //Mandate details start

        }, {
          key: "getMandateDetailsByLoanAccId",
          value: function getMandateDetailsByLoanAccId(loanAccountId) {
            return this.http.get("".concat(LOAN_URL, "/application-entrystage-api/fetchMandateDetailsByLoanAccId?loanAccountId=").concat(loanAccountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) {
              console.log("result ::", result);
            }));
          }
        }, {
          key: "upsertMandateDetails",
          value: function upsertMandateDetails(data) {
            return this.http.post("".concat(LOAN_URL, "/application-entrystage-api/upsertMandateDetails"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          } //Mandate details end
          //Financial details start

        }, {
          key: "getFinancialDetailsByLoanAccId",
          value: function getFinancialDetailsByLoanAccId(loanAccountId) {
            return this.http.get("".concat(LOAN_URL, "/application-entrystage-api/fetchFinancialDetails?loanAccountId=").concat(loanAccountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) {
              console.log("result ::", result);
            }));
          }
        }, {
          key: "upsertfinancialDetailsLoan",
          value: function upsertfinancialDetailsLoan(data) {
            return this.http.post("".concat(LOAN_URL, "/application-entrystage-api/upsertfinancialDetails"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          } //Financial details end
          //Guarantor details start

        }, {
          key: "getGuarantorByLoanAccId",
          value: function getGuarantorByLoanAccId(loanAccountId) {
            return this.http.get("".concat(LOAN_URL, "/application-entrystage-api/fetchGuarantorByLoanAccId?loanAccountId=").concat(loanAccountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) {
              console.log("result ::", result);
            }));
          }
        }, {
          key: "upsertGuarantorDetails",
          value: function upsertGuarantorDetails(data) {
            return this.http.post("".concat(LOAN_URL, "/application-entrystage-api/upsertGuarantorDetails"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          } //Guarantor details end
          //Collateral details start

        }, {
          key: "getCollateralByLoanAccId",
          value: function getCollateralByLoanAccId(loanAccountId) {
            return this.http.get("".concat(LOAN_URL, "/application-entrystage-api/fetchCollateralByLoanAccountId?loanAccountId=").concat(loanAccountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) {
              console.log("result ::", result);
            }));
          }
        }, {
          key: "upsertCollateralDetails",
          value: function upsertCollateralDetails(data) {
            return this.http.post("".concat(LOAN_URL, "/application-entrystage-api/upsertCollateralDetails"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          } //Collateral details end

        }, {
          key: "getBusinessProductName",
          value: function getBusinessProductName(business_product_name) {
            return this.http.get("".concat(API_URL, "/rest/data/getMasterData?entityName=").concat(business_product_name)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAccount",
          value: function getAccount(businessProductName) {
            console.log("customerId::", businessProductName);
            return this.http.get("".concat(ICUST_URL, "/maintenance/fetchAccountTypeByProductName?businessProductName=").concat(businessProductName)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) {
              console.log("result ::", result);
            }));
          }
        }, {
          key: "saveVehicleDetails",
          value: function saveVehicleDetails(data) {
            return this.http.post("".concat(LOAN_URL, "/application-entrystage-api/upsertVehicleDetails"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getVehicleDetails",
          value: function getVehicleDetails(loanAccountId) {
            return this.http.get("".concat(LOAN_URL, "/application-entrystage-api/fetchVehicleDetailsByLoanAccId?loanAccountId=").concat(loanAccountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) {}));
          }
        }, {
          key: "loanCahrgeFetchById",
          value: function loanCahrgeFetchById(accountId) {
            return this.http.get("".concat(LOAN_URL, "/charge_api/fetchLoanChargeDetailsById?loanAccountId=").concat(accountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "saveAccountService",
          value: function saveAccountService(obj) {
            return this.http.post("".concat(LOAN_URL, "/account-services-api/upsertAccountServices"), obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "AccountServicesFetchById",
          value: function AccountServicesFetchById(accountId) {
            return this.http.get("".concat(LOAN_URL, "/account-services-api/fetchAccountServicesByLoanAccountId?loanAccountId=").concat(accountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getLoanEnrichmentSummmary",
          value: function getLoanEnrichmentSummmary(loanAccountId) {
            return this.http.get("".concat(LOAN_URL, "/application-enrichment-api/fetchSummaryInfo?loanAccountId=").concat(loanAccountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "assessmentDetails",
          value: function assessmentDetails(data) {
            return this.http.post("".concat(LOAN_URL, "/loanAssessment/upsertDetails"), data);
          } //cardOrigination Assessment Report

        }, {
          key: "cardAssessmentDetails",
          value: function cardAssessmentDetails(data) {
            return this.http.post("".concat(LOAN_URL, "/cardAssessment/upsertDetails"), data);
          }
        }, {
          key: "fetchcardAssessmentDetailsById",
          value: function fetchcardAssessmentDetailsById(cardId) {
            return this.http.get("".concat(LOAN_URL, "/cardAssessment/fetchCardAssessmentById?cardId=").concat(cardId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchcardAssessmentDetails",
          value: function fetchcardAssessmentDetails() {
            return this.http.get("".concat(LOAN_URL, "/cardAssessment/fetchCardAssessmentDetails")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getCardEnrichmentSummmary",
          value: function getCardEnrichmentSummmary(cardId) {
            return this.http.get("".concat(LOAN_URL, "/application-enrichment-api/fetchCardSummaryInfo?cardAccountId=").concat(cardId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getCardCreditRatingDetails",
          value: function getCardCreditRatingDetails(cardId) {
            return this.http.get("".concat(LOAN_URL, "/underWritingStage/fetchCreditRatingDetails?cardId=").concat(cardId));
          }
        }, {
          key: "offerDetails",
          value: function offerDetails(data) {
            return this.http.post("".concat(LOAN_URL, "/offer-acceptOrReject-api/upsertOfferAcceptOrReject"), data);
          }
        }, {
          key: "getofferDetails",
          value: function getofferDetails(loanAccountId) {
            return this.http.get("".concat(LOAN_URL, "/offer-acceptOrReject-api/fetchOfferAcceptOrRejectDetailsById?loanAccountId=").concat(loanAccountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAssessmentDetails",
          value: function getAssessmentDetails(loanAccountId) {
            return this.http.get("".concat(LOAN_URL, "/loanAssessment/fetchLoanAssessmentById?loanAccountId=").concat(loanAccountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "UpdateLegalOpinion",
          value: function UpdateLegalOpinion(data) {
            return this.http.post("".concat(LOAN_URL, "/underWritingStage/saveOrUpdateLegalOpinion"), data);
          }
        }, {
          key: "UpdateCreditRating",
          value: function UpdateCreditRating(data) {
            return this.http.post("".concat(LOAN_URL, "/underWritingStage/saveOrUpdateCreditRating"), data);
          }
        }, {
          key: "updateOfferIssue",
          value: function updateOfferIssue(data) {
            return this.http.post("".concat(LOAN_URL, "/offer-issueStage-api/upsertOfferIssue"), data);
          }
        }, {
          key: "saveOrValuationOfAsset",
          value: function saveOrValuationOfAsset(data) {
            return this.http.post("".concat(LOAN_URL, "/underWritingStage/saveOrValuationOfAsset"), data);
          }
        }, {
          key: "getCreditRating",
          value: function getCreditRating(loanAccountId) {
            console.log("customerId::", loanAccountId);
            return this.http.get("".concat(LOAN_URL, "/underWritingStage/getCreditRatingByLoanId?loanAccountId=").concat(loanAccountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) {
              console.log("result ::", result);
            }));
          }
        }, {
          key: "getLegalOpinion",
          value: function getLegalOpinion(loanAccountId) {
            console.log("customerId::", loanAccountId);
            return this.http.get("".concat(LOAN_URL, "/underWritingStage/getLegalOpinionByLoanId/").concat(loanAccountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) {
              console.log("result ::", result);
            }));
          }
        }, {
          key: "getAssesmentDetails",
          value: function getAssesmentDetails(loanAccountId) {
            console.log("customerId::", loanAccountId);
            return this.http.get("".concat(LOAN_URL, "/loanAssessment/fetchLoanAssessmentById?loanAccountId=").concat(loanAccountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) {
              console.log("result ::", result);
            }));
          }
        }, {
          key: "getingOfferIssueDetails",
          value: function getingOfferIssueDetails(loanAccountId) {
            console.log("customerId::", loanAccountId);
            return this.http.get("".concat(LOAN_URL, "/offer-issueStage-api/fetchOfferIssueByLoanAccountId?loanAccountId=").concat(loanAccountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) {
              console.log("result ::", result);
            }));
          }
        }, {
          key: "getAssetValuation",
          value: function getAssetValuation(loanAccountId) {
            console.log("customerId::", loanAccountId);
            return this.http.get("".concat(LOAN_URL, "/underWritingStage/getValOfAsstByLoanId/").concat(loanAccountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (result) {
              console.log("result ::", result);
            }));
          }
        }, {
          key: "gettingUnderWritingSummary",
          value: function gettingUnderWritingSummary(loanAccId) {
            return this.http.get("".concat(LOAN_URL, "/underWritingStage/fetchSummaryInfo?loanAccountId=").concat(loanAccId));
          }
        }, {
          key: "saveOfferAcceptReject",
          value: function saveOfferAcceptReject(data) {
            return this.http.post("".concat(LOAN_URL, "/offer-acceptOrReject-api/upsertOfferAcceptOrReject"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "saveAccountCreateDetails",
          value: function saveAccountCreateDetails(data) {
            return this.http.post("".concat(LOAN_URL, "/accountCreate-api/upsertAccountCreate"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getOfferAcceptReject",
          value: function getOfferAcceptReject(loanAccountId) {
            return this.http.get("".concat(LOAN_URL, "/offer-acceptOrReject-api/fetchOfferAcceptOrRejectDetailsById?loanAccountId=").concat(loanAccountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAccountCreateDetails",
          value: function getAccountCreateDetails(loanAccountId) {
            return this.http.get("".concat(LOAN_URL, "/accountCreate-api/fetchAccountCreateByLoanAccountId?loanAccountId=").concat(loanAccountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "uploadPostOfferAmendmentDetails",
          value: function uploadPostOfferAmendmentDetails(data) {
            return this.http.post("".concat(LOAN_URL, "/post-offer-amendment-api/upsertPostOfferAmendment"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getOfferAmendmentDetails",
          value: function getOfferAmendmentDetails(loanAccountId) {
            return this.http.get("".concat(LOAN_URL, "/post-offer-amendment-api/fetchPostOfferAmendmentDetailsById?loanAccountId=").concat(loanAccountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getOfferAmendDetails",
          value: function getOfferAmendDetails(data) {
            return this.http.get("".concat(LOAN_URL, "/post-offer-amendment-api/fetchPostOfferAmendmentDetails"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "scheduleLink",
          value: function scheduleLink(data) {
            return this.http.post("".concat(LOAN_URL, "/repayment-api/fetchRepaymentScheduleInfo"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "updteApprovedDetails",
          value: function updteApprovedDetails(data) {
            return this.http.post("".concat(LOAN_URL, "/supervisor-apprstage-api/upsertApprovalDetails"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "uploadOfferDocument",
          value: function uploadOfferDocument(data) {
            return this.http.post("".concat(LOAN_URL, "/loan/upload/uploadLoanDocs"), data);
          }
        }, {
          key: "getcorporateSearchDetails",
          value: function getcorporateSearchDetails(params) {
            return this.http.get("".concat(API_URL, "/corporateCustomer/fetchCorporateInfo?").concat(params)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "gettingCardAccountServiceDetails",
          value: function gettingCardAccountServiceDetails(cardId) {
            return this.http.get("".concat(API_URL, "/customerAccServices/fetchAccServiceDetails?cardId=").concat(cardId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "uploadCardPrefrence",
          value: function uploadCardPrefrence(data) {
            return this.http.post("".concat(LOAN_URL, "/cardPreference-api/upsertCardPreferenceDetails"), data);
          }
        }, {
          key: "getCardPrefrence",
          value: function getCardPrefrence(cardId) {
            return this.http.get("".concat(LOAN_URL, "/cardPreference-api/fetchCardPreferenceByCardId?cardId=").concat(cardId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteCardPrefrence",
          value: function deleteCardPrefrence(id) {
            return this.http["delete"]("".concat(LOAN_URL, "/cardPreference-api/deleteCardPreference?id=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "uploadCardInitiation",
          value: function uploadCardInitiation(data) {
            return this.http.post("".concat(LOAN_URL, "/cardInitiation-api/upsertCardInitiationDetails"), data);
          }
        }, {
          key: "getCardInitiationDetails",
          value: function getCardInitiationDetails(cardId) {
            return this.http.get("".concat(LOAN_URL, "/cardInitiation-api/fetchCardInitiationByCardId?cardId=").concat(cardId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "upsertCardFinancialDetails",
          value: function upsertCardFinancialDetails(data) {
            return this.http.post("".concat(LOAN_URL, "/application-entrystage-api/upsertfinancialDetails"), data);
          }
        }, {
          key: "getCardFinancialDetails",
          value: function getCardFinancialDetails(cardId) {
            return this.http.get("".concat(LOAN_URL, "/application-entrystage-api/fetchFinancialDetails?cardId=").concat(cardId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "upsertApprovalDetails",
          value: function upsertApprovalDetails(data) {
            return this.http.post("".concat(LOAN_URL, "/card-apprstage-api/upsertApprovalDetails"), data);
          }
        }, {
          key: "getApprovalDetails",
          value: function getApprovalDetails(cardId) {
            return this.http.get("".concat(LOAN_URL, "/card-apprstage-api/fetchApprovalDetails?cardId=").concat(cardId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "updateLoanDetailsStatus",
          value: function updateLoanDetailsStatus(data) {
            return this.http.put("".concat(LOAN_URL, "/application-entrystage-api/updateStatus"), data);
          }
        }, {
          key: "fetchByLoanAccountId",
          value: function fetchByLoanAccountId(loanAccountId) {
            return this.http.get("".concat(LOAN_URL, "/application-entrystage-api/fetchLoanDetailsByLoanAccId?loanAccountId=").concat(loanAccountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchCustomerDetails",
          value: function fetchCustomerDetails(phoneNumber) {
            return this.http.get("".concat(API_URL, "/customerdata/fetchPhoneNoDetails?phoneNumber=").concat(phoneNumber)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "updateCardStatus",
          value: function updateCardStatus(data) {
            return this.http.put("".concat(LOAN_URL, "/cardInitiation-api/updateStatus"), data);
          }
        }, {
          key: "fetchLoanAccountDetails",
          value: function fetchLoanAccountDetails(params) {
            return this.http.get("".concat(LOAN_URL, "/loanAccount/fetchTaskSummaryDetails?").concat(params)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchCurrencyMaintAuthRecs",
          value: function fetchCurrencyMaintAuthRecs() {
            return this.http.get("".concat(ICUST_URL, "/currencyMaint-api/fetchCurrencyMaintAuthRecs")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getSignData",
          value: function getSignData() {
            return this.signData.asObservable();
          }
        }, {
          key: "setSignData",
          value: function setSignData(signData) {
            this.signData.next(signData);
          }
        }, {
          key: "getAllCountries",
          value: function getAllCountries() {
            return this.http.get("".concat(API_URL, "/countryMaint/fetchAllCountryInfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getStateByCountryId",
          value: function getStateByCountryId(id) {
            return this.http.get("".concat(API_URL, "/countryStateMaint/fetchStateInfoByCountryId?countryId=").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getBranchHolidayInfo",
          value: function getBranchHolidayInfo() {
            return this.http.get("".concat(API_URL, "/holiday/fetchBranchHolidayInfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getTask",
          value: function getTask() {
            return this.taskData.asObservable();
          }
        }, {
          key: "setTask",
          value: function setTask(taskData) {
            this.taskData.next(taskData);
          }
        }, {
          key: "getAuthCustomerCategory",
          value: function getAuthCustomerCategory() {
            return this.http.get("".concat(API_URL, "/maintenance/fetchAuthCustomerCategory")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAuthCustomerChargeCategory",
          value: function getAuthCustomerChargeCategory() {
            return this.http.get("".concat(API_URL, "/maintenance/fetchAuthChargeCategory")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAuthorizedBranchInfo",
          value: function getAuthorizedBranchInfo() {
            return this.http.get("".concat(API_URL, "/branch/fetchAuthBranchInfo")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchStateCityByZipcode",
          value: function fetchStateCityByZipcode(countryName, pincode) {
            return this.http.get("".concat(API_URL, "/iccity/fetchCityByCountryAndPincode?countryName=").concat(countryName, "&pinCode=").concat(pincode)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAuthorizedCityInfo",
          value: function getAuthorizedCityInfo() {
            return this.http.get("".concat(API_URL, "/iccity/fetchAllAuthCities")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "deleteCorporateDirector",
          value: function deleteCorporateDirector(corporateId, customerId) {
            return this.http["delete"]("".concat(API_URL, "/corporateCustomer/deleteCorporateDirectorInfo?corporateId=").concat(corporateId, "&customerId=").concat(customerId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchCurrencyInfo",
          value: function fetchCurrencyInfo(country) {
            return this.http.get("".concat(API_URL, "/currencyMaint-api/fetchCurrencyMainByCountryCode?country=").concat(country)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "countryCurrencyFlaglists",
          value: function countryCurrencyFlaglists(data) {
            return this.http.get("".concat(API_URL, "/currencyMaint-api/fetchCurrencyMainByCountryCode?country=").concat(data)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "updateTellerInfo",
          value: function updateTellerInfo(info) {
            return this.http.put("".concat(API_URL, "/loginApi/updatetellerProfileInfo"), info).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchTellerProfileInfo",
          value: function fetchTellerProfileInfo(tellerId) {
            return this.http.get("".concat(API_URL, "/loginApi/fetchTellerProfileInfo?tellerId=").concat(tellerId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchByBranchCode",
          value: function fetchByBranchCode(accountNo) {
            return this.http.get("".concat(API_URL, "/branch/account?accountNo=").concat(accountNo)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }]);

        return ApiService;
      }();

      ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_local_store_service__WEBPACK_IMPORTED_MODULE_6__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_7__["ShowMessageService"]));
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
            type: _local_store_service__WEBPACK_IMPORTED_MODULE_6__["LocalStoreService"]
          }, {
            type: _showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_7__["ShowMessageService"]
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


      var _local_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./local-store.service */
      "tZUg");
      /* harmony import */


      var _theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./theme.service */
      "ETNk");

      var LayoutService = /*#__PURE__*/function () {
        function LayoutService(themeService, ls) {
          _classCallCheck(this, LayoutService);

          this.themeService = themeService;
          this.ls = ls;
          this.layoutConf = {};
          this.layoutConfSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.layoutConf);
          this.layoutConf$ = this.layoutConfSubject.asObservable();
          this.fullWidthRoutes = ['shop'];
          var theme = this.ls.getItem('theme');
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
            matTheme: theme ? theme : 'egret-blue',
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
        return new (t || LayoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_local_store_service__WEBPACK_IMPORTED_MODULE_2__["LocalStoreService"]));
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
            type: _theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"]
          }, {
            type: _local_store_service__WEBPACK_IMPORTED_MODULE_2__["LocalStoreService"]
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


      var app_views_others_search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/views/others/search/search.component */
      "Adj1");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "ZFy/");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "jMqV");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/menu */
      "rJgo");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function HeaderTopComponent_button_34_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_button_34_Template_button_click_0_listener() {
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
        function HeaderTopComponent(layout, navService, themeService, translate, renderer, jwtAuth, dialog, ls, router) {
          _classCallCheck(this, HeaderTopComponent);

          this.layout = layout;
          this.navService = navService;
          this.themeService = themeService;
          this.translate = translate;
          this.renderer = renderer;
          this.jwtAuth = jwtAuth;
          this.dialog = dialog;
          this.ls = ls;
          this.router = router;
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
            var _this30 = this;

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
          key: "onSearch",
          value: function onSearch() {
            var dialogRef = this.dialog.open(app_views_others_search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"], {
              width: '1100px',
              disableClose: true,
              panelClass: "custom"
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("Dialog result: ".concat(result));
            });
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
        }, {
          key: "goToSettings",
          value: function goToSettings() {
            console.log("enter inside settings");
            this.router.navigate(["others/profile"]);
          }
        }]);

        return HeaderTopComponent;
      }();

      HeaderTopComponent.ɵfac = function HeaderTopComponent_Factory(t) {
        return new (t || HeaderTopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_5__["JwtAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_8__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]));
      };

      HeaderTopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderTopComponent,
        selectors: [["app-header-top"]],
        inputs: {
          notificPanel: "notificPanel"
        },
        decls: 35,
        vars: 5,
        consts: [[1, "header-topnav", "mat-elevation-z2", "mainDiv"], [1, "container"], [1, "topnav", 2, "margin-left", "1%", "margin-right", "-3%"], [1, "demoBankLabel"], ["fxFlex", ""], [1, "icons-padding"], [1, "widthIcon", 3, "click"], ["mat-icon-button", "", "matTooltip", "Notifications", 1, "topbar-button-right", 3, "click"], [1, "widthIcon"], [1, "calender-btn", "widthIcon", 3, "click"], [1, "toggle-btn", 3, "change"], ["mat-icon-button", "", 1, "topbar-button-right", "mr-4", "img-button"], ["src", "assets/images/face-7.jpg", "alt", ""], [2, "color", "white"], ["mat-icon-button", ""], [2, "color", "white", 3, "matMenuTriggerFor"], ["accountMenu", "matMenu"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], ["mat-icon-button", "", "class", "mr-16", 3, "click", 4, "ngIf"], ["mat-icon-button", "", 1, "mr-16", 3, "click"]],
        template: function HeaderTopComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "DemoBank");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_Template_mat_icon_click_7_listener() {
              return ctx.onSearch();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_Template_button_click_9_listener() {
              return ctx.toggleNotific();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "notifications_none");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_Template_mat_icon_click_12_listener() {
              return ctx.goToSettings();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-slide-toggle", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HeaderTopComponent_Template_mat_slide_toggle_change_14_listener($event) {
              return ctx.onChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "keyboard_arrow_down");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-menu", null, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "account_box");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_Template_button_click_29_listener() {
              return ctx.jwtAuth.signout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "exit_to_app");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Sign out");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, HeaderTopComponent_button_34_Template, 3, 0, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("overflow", "visible");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.tellerName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.isMobile);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltip"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggle"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuItem"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"]],
        styles: ["mat-icon[_ngcontent-%COMP%], mat-icon-button[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n\n.toggle-btn[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.calender-btn[_ngcontent-%COMP%] {\n  margin-left: 0px;\n}\n\n.icons-padding[_ngcontent-%COMP%] {\n  margin-right: -2.4%;\n  line-height: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.widthIcon[_ngcontent-%COMP%] {\n  width: 40px;\n  color: white;\n  cursor: pointer;\n}\n\n .mat-menu-panel {\n  width: 200px !important;\n}\n\n.demoBankLabel[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 200;\n  margin-bottom: 0px;\n}\n\n.mainDiv[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #051a2d 0%, #004c97 100%) 0% 0% no-repeat padding-box padding-box transparent !important;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGVhZGVyLXRvcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFDRjtBQUFBOztBQUVBO0VBQ0UsMkhBQTBJO0VBQzFJLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJoZWFkZXItdG9wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWljb24sXHJcbm1hdC1pY29uLWJ1dHRvbiB7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuLnRvZ2dsZS1idG4ge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5jYWxlbmRlci1idG4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5pY29ucy1wYWRkaW5nIHtcclxuICBtYXJnaW4tcmlnaHQ6IC0yLjQlO1xyXG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLndpZHRoSWNvbiB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1tZW51LXBhbmVsIHtcclxuICB3aWR0aDogMjAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRlbW9CYW5rTGFiZWwge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDBweFxyXG59XHJcblxyXG4ubWFpbkRpdiB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoNSwgMjYsIDQ1KSAwJSwgcmdiKDAsIDc2LCAxNTEpIDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveCBwYWRkaW5nLWJveCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn0iXX0= */"]
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
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_8__["LocalStoreService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
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
    "vSAV":
    /*!**************************************************!*\
      !*** ./src/app/environments/environment.prod.ts ***!
      \**************************************************/

    /*! exports provided: environment */

    /***/
    function vSAV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var environment = {
        production: true,

        /* For local url testing */
        // ICUST_URL: 'http://localhost:1212',
        // LOAN_ACCOUNT_URL: 'http://localhost:7171',

        /* For development branch url */
        ICUST_URL: "http://192.168.0.14:8091/Icust-Digital-Banking",
        LOAN_ACCOUNT_URL: "http://192.168.0.14:8091/Icust-Loan-Account-Staging",
        LINK_URL: "https://icust.rumango.com/DEMO_ROOT/Customer-Onboarding/#/document?customerId="
      };
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
      "8Y7J");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-toastr */
      "EApP");
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
          }, {
            "code": 204,
            "message": "No Content"
          }];
        }

        _createClass(ShowMessageService, [{
          key: "errorMessage",
          value: function errorMessage(status, errorResp) {
            console.log("API Response Status :", status);
            console.log(errorResp);
            console.log(errorResp.error.message);
            var msg = "";

            if (errorResp && errorResp.error && errorResp.error.message) {
              msg = errorResp.error.message;
            }

            var i = 0; // if(errorResp.error.responseMessage){
            // }
            // if(errorResp.error)
            // {
            //   Swal.fire({
            //     icon: 'error',
            //   //  title:"Error Code : "+this.errorData[i].code ,
            //    text:"Error message : "+errorResp.error,
            //     width:500,
            //     // timer: 10000,
            //     // timerProgressBar: true,
            //     confirmButtonText: "OK",
            //     confirmButtonColor:'#456EFE'
            //   })
            //   return false;
            // }

            while (i < this.errorData.length) {
              if (this.errorData[i].code === status) {
                var errCode = status.toString();

                if (msg == "") {
                  msg = this.errorData[i].message;
                }

                console.log("errcode :: ", errCode);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                  icon: 'error',
                  title: "Error Code : " + this.errorData[i].code,
                  //  text:"Error message : "+this.errorData[i].message,
                  text: "Error message : " + msg,
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
        }, {
          key: "errMsg",
          value: function errMsg(err) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
              icon: 'error',
              confirmButtonText: "OK",
              confirmButtonColor: '#456EFE'
            });
          }
        }, {
          key: "errorToast",
          value: function errorToast(code, message) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
              icon: 'error',
              title: "Status Code : " + code,
              text: "Message : " + message,
              confirmButtonText: "OK",
              confirmButtonColor: '#456EFE'
            });
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
      "TN/R");
      /* harmony import */


      var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular/cdk/stepper */
      "q59W"); // import { MatDatepickerModule } from "@angular/material/datepicker";


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
        imports: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_36__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_31__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_37__["CdkStepperModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_34__["MatMomentDateModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_19__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedMaterialModule, {
          exports: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_36__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_31__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_37__["CdkStepperModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_34__["MatMomentDateModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_19__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedMaterialModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_36__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_31__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_37__["CdkStepperModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_15__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_34__["MatMomentDateModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_19__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
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