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
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\OneRumangoGitProjects\Icust_Kiosk_Staging_Ui\src\main.ts */
      "zUnb");
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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "YES");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " \xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComfirmComponent_Template_button_click_9_listener() {
              return ctx.dialogRef.close(false);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "NO");

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
            template: "<h1 matDialogTitle class=\"mb-8\">{{ data.title }}</h1>\n    <div mat-dialog-content class=\"mb-16\">{{ data.message }}</div>\n    <div mat-dialog-actions>\n    <button \n    type=\"button\" \n    mat-raised-button\n    color=\"primary\" \n    (click)=\"dialogRef.close(true)\">YES</button>\n    &nbsp;\n    <span fxFlex></span>\n    <button \n    type=\"button\"\n    color=\"accent\"\n    mat-raised-button \n    (click)=\"dialogRef.close(false)\">NO</button>\n    </div>"
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
    "7o2P":
    /*!***************************************************!*\
      !*** ./src/app/shared/services/common.service.ts ***!
      \***************************************************/

    /*! exports provided: CommonService */

    /***/
    function o2P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonService", function () {
        return CommonService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var CommonService = /*#__PURE__*/function () {
        function CommonService() {
          _classCallCheck(this, CommonService);

          this.subjectName = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"](); //need to create a subject
        }

        _createClass(CommonService, [{
          key: "sendNotificationUpdate",
          value: function sendNotificationUpdate(message, messageCount) {
            this.subjectName.next({
              text: message,
              noOfMessages: messageCount
            }); //next() will feed the value in Subject
          }
        }, {
          key: "getNotificationUpdate",
          value: function getNotificationUpdate() {
            return this.subjectName.asObservable(); //it returns as an observable to which the receiver funtion will subscribe
          }
        }]);

        return CommonService;
      }();

      CommonService.ɵfac = function CommonService_Factory(t) {
        return new (t || CommonService)();
      };

      CommonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CommonService,
        factory: CommonService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonService, [{
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
    "8n/o":
    /*!***********************************************************************!*\
      !*** ./src/app/views/sessions/logout-popup/logout-popup.component.ts ***!
      \***********************************************************************/

    /*! exports provided: LogoutPopupComponent */

    /***/
    function nO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoutPopupComponent", function () {
        return LogoutPopupComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var LogoutPopupComponent = /*#__PURE__*/function () {
        function LogoutPopupComponent(router, dialogRef) {
          _classCallCheck(this, LogoutPopupComponent);

          this.router = router;
          this.dialogRef = dialogRef;
          this.titleMessage = "Are you sure you want to Log Out ?";
        }

        _createClass(LogoutPopupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToClose",
          value: function goToClose() {
            this.dialogRef.close();
            this.router.navigateByUrl('/others/kioskHome');
          }
        }, {
          key: "signOut",
          value: function signOut() {
            localStorage.removeItem("FromLogin");
            localStorage.removeItem("TransactionType");
            localStorage.removeItem("customerId");
            localStorage.removeItem("phonenumFromLogin");
            localStorage.removeItem("customerValidation");
            localStorage.removeItem("otpPhoneNum");
            localStorage.removeItem("AccountBal");
            localStorage.removeItem("AccountNumber");
            localStorage.removeItem("ProductCode");
            localStorage.removeItem("tokenNumer");
            localStorage.removeItem("estimatedTiming");
            localStorage.removeItem("userId");
            localStorage.removeItem("scannerData");
            localStorage.removeItem("custholderName");
            localStorage.removeItem("DenominationRequired");
            this.dialogRef.close(); // localStorage.removeItem("phonenumFromLogin");

            this.router.navigateByUrl('/sessions/login');
          }
        }]);

        return LogoutPopupComponent;
      }();

      LogoutPopupComponent.ɵfac = function LogoutPopupComponent_Factory(t) {
        return new (t || LogoutPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
      };

      LogoutPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LogoutPopupComponent,
        selectors: [["app-logout-popup"]],
        decls: 16,
        vars: 1,
        consts: [[1, "full-width"], ["fxLayout", "row", 1, "contain"], [1, "backIcon", 3, "click"], [1, "text"], ["fxLayout", "column", "fxLayoutGap", "5%", "fxLayoutAlign", "space-between center", 1, ""], [1, "text-inside"], [1, "para"], ["src", "assets/images/logout.png", "alt", "", 1, "imageLogout"], ["fxLayout", "row", "fxLayoutGap", "20px"], ["mat-flat-button", "", 1, "buttonScan", 3, "click"], ["mat-flat-button", "", 1, "buttonContinue", 3, "click"]],
        template: function LogoutPopupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogoutPopupComponent_Template_mat_icon_click_2_listener() {
              return ctx.goToClose();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogoutPopupComponent_Template_button_click_12_listener() {
              return ctx.signOut();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " YES, LOG OUT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogoutPopupComponent_Template_button_click_14_listener() {
              return ctx.goToClose();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "STAY LOGGED IN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleMessage);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
        styles: [".contain[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.text[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding-top: 15px;\n}\n\n.text-inside[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.para[_ngcontent-%COMP%] {\n  color: #000000;\n  opacity: 62%;\n  font-size: 16px;\n}\n\n.backIcon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 0% 0% 0% 0%;\n  font-size: 20px;\n  color: #000000;\n  opacity: 40%;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 24px;\n  text-align: center;\n  color: #000000;\n  opacity: 62%;\n  font-weight: bold;\n}\n\np[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: sans-serif;\n  font-size: 12px;\n}\n\n.buttonScan[_ngcontent-%COMP%] {\n  width: 170px;\n  border-radius: 25px;\n  background-color: #456EFE;\n  color: #FFFFFF;\n  font-family: sans-serif;\n}\n\n.buttonContinue[_ngcontent-%COMP%] {\n  width: 170px;\n  border-radius: 25px;\n  background-color: #1BCD9D;\n  color: #FFFFFF;\n  font-family: sans-serif;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.content-text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: sans-serif;\n  font-size: 24px;\n  color: #000000;\n  opacity: 20%;\n  font-weight: 600;\n}\n\n.time-text[_ngcontent-%COMP%] {\n  text-align: center;\n  font: normal normal bold 40px/20px SF Pro;\n  letter-spacing: -0.61px;\n  color: #000000;\n  opacity: 70%;\n  -webkit-text-fill-color: white;\n  -webkit-text-stroke-width: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9nb3V0LXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQTBCO0FBQzlCOztBQUNBO0VBQ0ksdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUVyQjs7QUFBQTtFQUdJLGtCQUFrQjtBQUN0Qjs7QUFFQTtFQUNJLGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZTtBQUNuQjs7QUFDQTtFQUNJLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0FBRWhCOztBQUNBO0VBQ0ksdUJBQXNCO0VBQ3RCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWixpQkFBaUI7QUFFckI7O0FBQUE7RUFDSSxjQUFjO0VBQ2QsdUJBQXNCO0VBQ3RCLGVBQWU7QUFHbkI7O0FBREE7RUFDSSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsdUJBQXNCO0FBSTFCOztBQUZFO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLHVCQUFzQjtBQUsxQjs7QUFIRTtFQUNFLG1CQUFtQjtBQU12Qjs7QUFKRTtFQUNFLGtCQUFrQjtFQUVsQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0VBQ1osZ0JBQWdCO0FBTXBCOztBQUpBO0VBQ1Esa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6Qyx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsOEJBQStCO0FBT3ZDIiwiZmlsZSI6ImxvZ291dC1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWlue1xyXG4gICAganVzdGlmeS1jb250ZW50OiAgZmxleC1lbmQ7XHJcbn1cclxuLnRleHR7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcbi50ZXh0LWluc2lkZXtcclxuICAgIC8vIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgLy8gb3BhY2l0eTogMzclO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGFyYXtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgb3BhY2l0eTogNjIlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5iYWNrSWNvbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDAlIDAlIDAlIDAlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBvcGFjaXR5OiA0MCU7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgb3BhY2l0eTogNjIlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxucHtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDsgXHJcbn1cclxuLmJ1dHRvblNjYW57XHJcbiAgICB3aWR0aDogMTcwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NkVGRTtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLmJ1dHRvbkNvbnRpbnVle1xyXG4gICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQkNEOUQ7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7ICBcclxuICB9XHJcbiAgLmZ1bGwtd2lkdGh7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICAuY29udGVudC10ZXh0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gZm9udDogbm9ybWFsIG5vcm1hbCBib2xkIDMycHgvNDNweCBTRiBQcm87XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgb3BhY2l0eTogMjAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4udGltZS10ZXh0e1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIGJvbGQgNDBweC8yMHB4IFNGIFBybztcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNjFweDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBvcGFjaXR5OiA3MCU7XHJcbiAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHdoaXRlOyBcclxuICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAxcHggO1xyXG4gICAgfVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoutPopupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-logout-popup',
            templateUrl: './logout-popup.component.html',
            styleUrls: ['./logout-popup.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
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

    /*! exports provided: REDIRECT_HOST, DEMO_TOKEN, TokenService */

    /***/
    function AG0e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "REDIRECT_HOST", function () {
        return REDIRECT_HOST;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEMO_TOKEN", function () {
        return DEMO_TOKEN;
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


      var _showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../showMessage/show-message.service */
      "x/2q");
      /* harmony import */


      var environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! environments/environment */
      "AytR"); // ================= only for demo purpose ===========


      var REDIRECT_HOST = environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].redirectUrl;
      var DEMO_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkNIQU5EUkFTRUtIQVIiLCJ1c2VySWQiOjEsInRlbGxlck5hbWUiOiJDaGFuZHJhIFNla2hhciJ9.mofN8SXiR8dW2KPFY6nOAIzv7FJhmE-KToocQ61W_yA"; // ================= you will get those data from server =======

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
        }]);

        return TokenService;
      }();

      TokenService.ɵfac = function TokenService_Factory(t) {
        return new (t || TokenService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_3__["ShowMessageService"]));
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
            type: _showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_3__["ShowMessageService"]
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


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb"); //import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
      //import { map } from 'highcharts';


      var _c0 = ["input"];

      function SearchComponent_div_3_div_1_button_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_div_3_div_1_button_7_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r8.handleClear();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SearchComponent_div_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchComponent_div_3_div_1_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r10.searchTerm = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SearchComponent_div_3_div_1_button_7_Template, 3, 0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.searchTerm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.searchTerm);
        }
      }

      function SearchComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchComponent_div_3_div_1_Template, 8, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.showKYC);
        }
      }

      function SearchComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "shopping_bag");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Create Deposit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "card_travel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Retail Operation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "file_copy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " KYC Screening ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "card_travel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Insights ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "In addition to searching in Icust,this search shows suggestion form the whole app and different section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SearchComponent_div_5_mat_list_item_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_div_5_mat_list_item_4_Template_mat_list_item_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var folder_r13 = ctx.$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r14.onImgClick(folder_r13);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " chevron_right ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var folder_r13 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](folder_r13.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", folder_r13.lastName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r12.DASHBOARD360, " ");
        }
      }

      function SearchComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SearchComponent_div_5_mat_list_item_4_Template, 12, 3, "mat-list-item", 23);

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

      function SearchComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-progress-bar", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Searching Customer ", ctx_r3.searchTerm, "....");
        }
      }

      function SearchComponent_div_7_mat_list_item_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " chevron_right ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var kyc_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", kyc_r17.icon, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](kyc_r17.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", kyc_r17.updated, " ");
        }
      }

      function SearchComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_div_7_Template_mat_icon_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.closeDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SearchComponent_div_7_Template_input_keyup_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.onKYCSearching($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SearchComponent_div_7_mat_list_item_11_Template, 12, 3, "mat-list-item", 38);

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
        function SearchComponent(dialogRef, cdr, apiService, sanitizer, router, ls, dataService, snack, jwtService) {
          _classCallCheck(this, SearchComponent);

          this.dialogRef = dialogRef;
          this.cdr = cdr;
          this.apiService = apiService;
          this.sanitizer = sanitizer;
          this.router = router;
          this.ls = ls;
          this.dataService = dataService;
          this.snack = snack;
          this.jwtService = jwtService;
          this.folders = [];
          this.show4 = false;
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
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(this.inputElement.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["pluck"])('target', 'value'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (value) {
              return value.length > 1;
            })).subscribe(function (value) {
              _this2.handleSearch(value);
            });
          }
        }, {
          key: "handleSearch",
          value: function handleSearch(inputValue) {
            var _this3 = this;

            var key = "";

            if (!isNaN(inputValue)) {
              this.apiService.getCustomerByCustomerID("accountId", inputValue).subscribe(function (resp) {
                if (resp) {
                  _this3.getCustomerData("accountId", inputValue);
                } else {
                  _this3.getCustomerData("customerId", inputValue);
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
            var _this4 = this;

            this.loading = true;

            if (this.apiService.getCustomerByCustomerID != null) {
              this.apiService.getCustomerByCustomerID(key, value).subscribe(function (items) {
                console.log(items);
                _this4.folders = items; // this.profileData = items[0];

                _this4.showKYC = false;
                _this4.loading = false;

                _this4.cdr.markForCheck();

                if (items == null) {
                  _this4.loading = false;

                  _this4.snack.open("Data is not found for Customer :", _this4.searchTerm, {
                    duration: 4000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right'
                  });

                  _this4.progressBar.mode = 'determinate';
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
            console.log("Customer ID -------- ", item);
            localStorage.setItem('customerId', item.customerId);
            var type = "DASHBOARD360";
            window.open("".concat(app_shared_services_token_service_token_service__WEBPACK_IMPORTED_MODULE_11__["REDIRECT_HOST"], "?code=").concat(this.jwtService.getEncryptedToken(), "&appType=").concat(type), "_blank"); //this.router.navigateByUrl('/others/mainNavigation');
            // this.gettingaCustomerDetails(customerId);

            var data = {
              customerId: item.customerId
            };
            this.dataService.shareSearchItem(data);
            this.dialogRef.close();
          }
        }]);

        return SearchComponent;
      }();

      SearchComponent.ɵfac = function SearchComponent_Factory(t) {
        return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_6__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_12__["JwtAuthService"]));
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
        decls: 8,
        vars: 5,
        consts: [["fxLayout", "row", "fxLayoutAlign", "end stretch"], [1, "mat-18", 2, "cursor", "pointer", 3, "click"], ["fxLayout", "row", "class", "m-333", 4, "ngIf"], [4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "row", 1, "m-333"], ["fxFlex", "100", "fxLayoutAlign", "start stretch", "fxLayoutGap", "space-around", 4, "ngIf"], ["fxFlex", "100", "fxLayoutAlign", "start stretch", "fxLayoutGap", "space-around"], ["appearance", "fill", 1, "full-width"], ["matInput", "", "type", "text", "placeholder", "iCust Search", 3, "ngModel", "ngModelChange"], ["input", ""], ["matPrefix", "", "mat-icon-button", ""], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "label", "Clear", 3, "click", 4, "ngIf"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "label", "Clear", 3, "click"], ["fxLayout", "row"], ["fxFlex", "100"], ["fxFlex", "25"], ["color", "primary", 1, "icon4"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxFlex", "20"], ["fxFlex", ""], [1, "text-muted", "text-center"], ["fxFlex", "100", "fxLayoutAlign", "start stretch"], ["class", "operation-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "operation-card", 3, "click"], ["matListAvatar", "", "src", "./assets/images/face-7.jpg", "alt", "..."], ["mat-line", ""], [1, "operation-font"], ["fxLayoutAlign", "end ", 2, "margin-left", "500px", "cursor", "pointer"], ["fxFlex", "30"], ["fxFlex", "40", "fxFlexAlign", "center"], [1, "text-center"], ["mode", "indeterminate"], ["fxLayout", "column wrap"], ["fxFlex", "100", "fxLayoutAlign", "end stretch"], ["fxFlex", "25", "fxLayoutAlign", "start stretch", "fxLayoutGap", "space-around"], ["type", "text", "placeholder", "icust search", 3, "keyup"], ["fxFlex", "25", "fxLayoutAlign", "start stretch"], ["id", "kycList", 4, "ngFor", "ngForOf"], ["id", "kycList"], ["id", "listmat"], ["color", "primary", "id", "ic"], ["mat-line", "", 2, "margin-left", "100px"], ["mat-line", "", 2, "margin-left", "100px", "color", "rgb(223, 217, 217)"], ["fxLayoutAlign", "end ", 2, "margin-left", "500px"]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchComponent_div_3_Template, 2, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SearchComponent_div_4_Template, 33, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchComponent_div_5_Template, 5, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SearchComponent_div_6_Template, 7, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SearchComponent_div_7_Template, 13, 1, "div", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showKYC);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchTerm == "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchTerm != "" && (ctx.folders == null ? null : ctx.folders.length) > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showKYC);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatSuffix"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCard"], _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListItem"], _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListAvatarCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatLine"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__["MatDivider"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultFlexAlignDirective"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBar"]],
        styles: [".card1[_ngcontent-%COMP%] {\n  border-radius: 20px;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: 0;\n  outline: 0;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n}\n\n.icon4[_ngcontent-%COMP%] {\n  color: gray;\n  padding-left: 30%;\n}\n\n.icon4[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n#listmat[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  background: #b4b3b3;\n  padding: 10px;\n  color: dodgerblue;\n  width: 45px;\n  height: 45px;\n  text-align: center;\n  justify-content: space-around;\n  position: fixed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksbUJBQW1CO0FBRHZCOztBQVFBO0VBQU8sU0FBUTtFQUFDLFVBQVM7QUFIekI7O0FBSUE7RUFBYSx3QkFBc0I7QUFBbkM7O0FBQ0E7RUFFSSxXQUFXO0VBQ1gsaUJBQ0o7QUFBQTs7QUFDQTtFQUNJLHVCQUNKO0FBQ0E7O0FBQUE7RUFDQSxtQkFBbUI7RUFDZixtQkFBOEI7RUFDOUIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUVsQiw2QkFBNkI7RUFDN0IsZUFBYztBQUVsQiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZDFcclxue1xyXG4gIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIFxyXG59XHJcbi8vIC5maXJzdER2XHJcbi8vIHtcclxuLy8gICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbi8vIH1cclxuaW5wdXQge2JvcmRlcjowO291dGxpbmU6MDsgfVxyXG5pbnB1dDpmb2N1cyB7b3V0bGluZTpub25lIWltcG9ydGFudDt9XHJcbi5pY29uNFxyXG57XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIHBhZGRpbmctbGVmdDogMzAlXHJcbn1cclxuLmljb240e1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxufVxyXG4jbGlzdG1hdHtcclxud2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxODAsIDE3OSwgMTc5KTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogZG9kZ2VyYmx1ZTtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbn0iXX0= */"]
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
          }, {
            type: app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_12__["JwtAuthService"]
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
      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `angular.json`.


      var environment = {
        production: true,
        // apiURL: config.apiUrl,
        //redirectUrl:'http://localhost:5200/#/sessions/callback', //local
        redirectUrl: "http://192.168.0.14:8091/Customer-Onboarding/#/sessions/callback",
        //  ICUST_URL: 'http://localhost:1212',
        ICUST_URL: "http://192.168.0.14:9003/Icust-Digital-Banking"
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
            var _this5 = this;

            this._router = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
            })).subscribe(function (event) {
              _this5.navlinks.forEach(function (link) {
                if (link.group) {
                  var routeUrl = _this5.getUrl();

                  var currentUrl = routeUrl.split('/');

                  if (currentUrl.indexOf(link.group) > 0) {
                    link.open = true;

                    _this5.closeOtherLinks(link);
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
            'baseColor': '#10174c',
            'isActive': false
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
            var _this6 = this;

            this.rumangoThemes.forEach(function (t) {
              t.isActive = false;

              if (t.name === themeName) {
                t.isActive = true;
                _this6.activatedTheme = t;
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


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/shared/services/common.service */
      "7o2P");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! app/shared/services/navigation.service */
      "LFK6");
      /* harmony import */


      var app_views_others_search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! app/views/others/search/search.component */
      "Adj1");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var HeaderSideComponent = /*#__PURE__*/function () {
        function HeaderSideComponent(layout, navService, themeService, translate, renderer, jwtAuth, apiService, ls, commonService, dialog) {
          var _this7 = this;

          _classCallCheck(this, HeaderSideComponent);

          this.layout = layout;
          this.navService = navService;
          this.themeService = themeService;
          this.translate = translate;
          this.renderer = renderer;
          this.jwtAuth = jwtAuth;
          this.apiService = apiService;
          this.ls = ls;
          this.commonService = commonService;
          this.dialog = dialog;
          this.rumangoThemes = [];
          this.currentLang = 'en';
          this.availableLangs = [{
            name: 'English',
            code: 'en'
          }, {
            name: 'Spanish',
            code: 'es'
          }];
          this.transactionBranch = 'Kasthuri Nagar';
          this.subscriptionName = this.commonService.getNotificationUpdate().subscribe(function (message) {
            console.log('message :: ', message);
            _this7.notificationCount = message.noOfMessages;
          });
        }

        _createClass(HeaderSideComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            console.log(this.transactionBranch);
            localStorage.setItem('TRANSACTIONBRANCH', this.transactionBranch);

            if (this.phoneNumber !== null) {
              this.gettingallTansactionDetails(this.phoneNumber);
            } else {
              this.fullname = localStorage.getItem("custholderName");
            }

            this.layoutConf = this.layout.layoutConf;
            this.rumangoThemes = this.themeService.rumangoThemes;
            this.menuItemSub = this.navService.menuItems$.subscribe(function (res) {
              res = res.filter(function (item) {
                return item.type !== 'icon' && item.type !== 'separator';
              });
              var limit = 4;
              var mainItems = res.slice(0, limit);

              if (res.length <= limit) {
                return _this8.menuItems = mainItems;
              }

              var subItems = res.slice(limit, res.length - 1);
              mainItems.push({
                name: 'More',
                type: 'dropDown',
                tooltip: 'More',
                icon: 'more_horiz',
                sub: subItems
              });
              _this8.menuItems = mainItems;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.menuItemSub.unsubscribe();
            this.subscriptionName.unsubscribe();
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
          } //search implementation

        }, {
          key: "onSearch",
          value: function onSearch() {
            var dialogRef = this.dialog.open(app_views_others_search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"], {
              width: '720px',
              disableClose: true,
              panelClass: "custom"
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("Dialog result: ".concat(result));
            });
          }
        }, {
          key: "gettingallTansactionDetails",
          value: function gettingallTansactionDetails(phoneNumber) {
            var _this9 = this;

            this.phoneNumber = localStorage.getItem("phonenumFromLogin");

            if (this.phoneNumber) {
              this.apiService.gettingTransactionDetails(this.phoneNumber).subscribe(function (allTransactionResp) {
                if (allTransactionResp) {
                  _this9.ls.setItem("customerId", allTransactionResp.customerId);

                  console.log("All Transaction Details in Header", allTransactionResp, allTransactionResp.firstName + ' ' + allTransactionResp.firstName);
                  _this9.fullname = (allTransactionResp.firstName ? allTransactionResp.firstName + ' ' : ' ') + (allTransactionResp.middleName ? allTransactionResp.middleName + ' ' : ' ') + (allTransactionResp.lastName ? allTransactionResp.lastName : ' ');
                }
              });
            }
          }
        }]);

        return HeaderSideComponent;
      }();

      HeaderSideComponent.ɵfac = function HeaderSideComponent_Factory(t) {
        return new (t || HeaderSideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_9__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__["JwtAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_8__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]));
      };

      HeaderSideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderSideComponent,
        selectors: [["app-header-side"]],
        inputs: {
          notificPanel: "notificPanel"
        },
        decls: 10,
        vars: 1,
        consts: [["fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "center center", 1, "topbar", "mat-blueGradient"], ["routerLink", "/others/kioskHome", 2, "padding-bottom", "20%", "font-size", "larger", "color", "white", "font-family", "Phosphate"], [2, "margin-inline", "29.5%"], [2, "margin-right", "65px", "font-size", "17px", "color", "#FFFFFF"]],
        template: function HeaderSideComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "DEMO BANK");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" KN - ", ctx.transactionBranch, "");
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"]],
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
            type: app_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_9__["NavigationService"]
          }, {
            type: _services_theme_service__WEBPACK_IMPORTED_MODULE_1__["ThemeService"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__["JwtAuthService"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_8__["LocalStoreService"]
          }, {
            type: app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
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
    "IXDm":
    /*!**********************************************************************!*\
      !*** ./src/app/shared/components/operations/operations.component.ts ***!
      \**********************************************************************/

    /*! exports provided: OperationsComponent */

    /***/
    function IXDm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OperationsComponent", function () {
        return OperationsComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/Dialog/dialog.service */
      "LP5l");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_extensions_select_country__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular-material-extensions/select-country */
      "6xI8");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function OperationsComponent_mat_option_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var test_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", test_r4.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", test_r4.viewValue, " ");
        }
      }

      function OperationsComponent_mat_option_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var test_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", test_r5.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", test_r5.viewValue, " ");
        }
      }

      function OperationsComponent_mat_option_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var test_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", test_r6.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", test_r6.viewValue, " ");
        }
      }

      var OperationsComponent = /*#__PURE__*/function () {
        function OperationsComponent(router, formBuilder, dialogService) {
          _classCallCheck(this, OperationsComponent);

          this.router = router;
          this.formBuilder = formBuilder;
          this.dialogService = dialogService;
          this.countryFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
          this.defaultValue = {
            name: 'Deutschland',
            alpha2Code: 'DE',
            alpha3Code: 'DEU',
            numericCode: '276',
            callingCode: '+49'
          };
          this.testing = [{
            value: 'Demo',
            viewValue: 'Demo 1'
          }, {
            value: 'Demo',
            viewValue: 'Demo 2'
          }, {
            value: 'Demo',
            viewValue: 'Demo 3'
          }];
        }

        _createClass(OperationsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.title);
            this.operationsForm = this.formBuilder.group({
              country: [{
                value: {
                  name: 'Deutschland',
                  alpha2Code: 'DE',
                  alpha3Code: 'DEU',
                  numericCode: '276',
                  callingCode: '+49'
                },
                disabled: false
              }]
            });
            this.operationsForm.get('country').valueChanges.subscribe(function (country) {
              return console.log('this.countryFormGroup.get(\'country\').valueChanges', country);
            });
            this.countryFormControl.valueChanges.subscribe(function (country) {
              return console.log('this.countryFormControl.valueChanges', country);
            });
          }
        }, {
          key: "onCountrySelected",
          value: function onCountrySelected($event) {
            console.log($event);
          }
        }, {
          key: "goToServiceScreens",
          value: function goToServiceScreens() {
            this.router.navigateByUrl('/others/kioskHome');
          }
        }, {
          key: "goToAuthenticate",
          value: function goToAuthenticate() {
            this.dialogService.authenticationDialog();
          }
        }]);

        return OperationsComponent;
      }();

      OperationsComponent.ɵfac = function OperationsComponent_Factory(t) {
        return new (t || OperationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]));
      };

      OperationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OperationsComponent,
        selectors: [["app-operations"]],
        inputs: {
          title: "title"
        },
        decls: 70,
        vars: 6,
        consts: [[1, "fullcard"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxFlex", "80%"], [1, "chequecard"], [2, "padding", "2%"], ["fxLayout", "row", "fxLayoutAlign", "start center"], [1, "backIcon", 3, "click"], [1, "card-title"], [1, "full-width", 2, "padding", "0% 0% 3% 2%"], ["operationsForm", "ngForm"], ["fxLayout", "column", "fxLayoutGap", "5%", "fxLayoutAlign", "space-between none"], ["fxLayout", "row wrap", 1, "flex-container", "stretch"], ["fxFlex", "33%", "fxFlex.xs", "100%"], [1, "totalAmount"], [1, "inputCard"], [1, "full-width", 2, "background-color", "#f9fafb"], [3, "value", 4, "ngFor", "ngForOf"], ["layout", "row"], ["flex", "", 1, "line"], [1, "inputCard", 2, "padding", "0% 6%"], ["label", "", "appearance", "none", 1, "full-width", "accountCurrencyClass", 3, "value", "onCountrySelected"], ["label", "", "appearance", "none", 1, "full-width", 3, "value", "onCountrySelected"], ["matInput", "", "type", "text", "name", "accountType", 1, "full-width"], ["fxFlex", "30%", "fxFlex.xs", "100%", 2, "padding", "0% 1%"], ["mat-flat-button", "", 1, "buttonCancel", "full-width", 3, "click"], ["fxFlex", "70%", "fxFlex.xs", "100%", 2, "padding", "0% 2%"], ["mat-flat-button", "", 1, "buttonNext", "full-width", 3, "click"], [3, "value"]],
        template: function OperationsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OperationsComponent_Template_mat_icon_click_7_listener() {
              return ctx.goToServiceScreens();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "keyboard_backspace");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", null, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Account Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-select", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, OperationsComponent_mat_option_25_Template, 2, 2, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Account Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-select", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, OperationsComponent_mat_option_31_Template, 2, 2, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Account Balance : $12,09470");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Holder Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-select", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, OperationsComponent_mat_option_39_Template, 2, 2, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "hr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Account Currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-card", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-select-country", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCountrySelected", function OperationsComponent_Template_mat_select_country_onCountrySelected_50_listener($event) {
              return ctx.onCountrySelected($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Transaction Currency ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-card", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-select-country", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCountrySelected", function OperationsComponent_Template_mat_select_country_onCountrySelected_55_listener($event) {
              return ctx.onCountrySelected($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-hint", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Transaction Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-card", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OperationsComponent_Template_button_click_65_listener() {
              return ctx.goToServiceScreens();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "CANCEL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OperationsComponent_Template_button_click_68_listener() {
              return ctx.goToAuthenticate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "CONTINUE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.testing);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.testing);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.testing);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.defaultValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.defaultValue);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatHint"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_extensions_select_country__WEBPACK_IMPORTED_MODULE_10__["MatSelectCountryComponent"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]],
        styles: [".fullcard[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 100%;\n  height: 110%;\n}\n\n.backIcon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-top: 8px;\n}\n\n.chequecard[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  height: auto;\n  border-radius: 10px;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 24px;\n}\n\n.outer-Div[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n}\n\n.content-Div[_ngcontent-%COMP%] {\n  padding: 6%;\n}\n\n.paddingright[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n\n.closeDrawerIcon[_ngcontent-%COMP%] {\n  font-size: xx-large;\n}\n\n.title-Class[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: sans-serif;\n  font-weight: bold;\n}\n\n.spaceDiv[_ngcontent-%COMP%] {\n  padding-right: 3%;\n}\n\n.spaceUserImage[_ngcontent-%COMP%] {\n  padding-left: 2%;\n  width: 12%;\n}\n\n.user-name-Div[_ngcontent-%COMP%] {\n  font-size: small;\n  font-weight: bolder;\n  font-family: sans-serif;\n  margin-top: 10px;\n  margin-bottom: -10px;\n}\n\n.title-Font[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  color: #000000;\n  width: 90%;\n  font-weight: bold;\n}\n\n.token-Div[_ngcontent-%COMP%] {\n  font-size: x-small;\n  color: #7e84a3;\n  font-family: sans-serif;\n}\n\n.token-id-class[_ngcontent-%COMP%] {\n  border: 1px solid #e6e6e6;\n  background-color: #fafafa;\n  border-radius: 4px;\n}\n\n.width100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.details-Div[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n}\n\n.mat-expansion-panel-spacing[_ngcontent-%COMP%] {\n  margin: 0px !important;\n}\n\n.icon[_ngcontent-%COMP%] {\n  float: right;\n  color: #000000;\n  font-weight: 700;\n}\n\n.btnConfirmClass[_ngcontent-%COMP%] {\n  background-color: #456efe;\n  color: white;\n  border-radius: 20px;\n  width: 120px;\n  font-family: sans-serif;\n  font-size: smaller;\n}\n\n.btnDiv[_ngcontent-%COMP%] {\n  padding-top: 15%;\n}\n\n.btnCancelClass[_ngcontent-%COMP%] {\n  background-color: #f8f8f8 !important;\n  color: #5d5d5d !important;\n  border-radius: 20px !important;\n  width: 120px !important;\n  font-family: sans-serif !important;\n  font-size: smaller !important;\n}\n\n.width50[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.line[_ngcontent-%COMP%] {\n  width: 940px;\n  align-self: center;\n  border-top-width: 1px;\n  border-top-style: solid;\n  border-top-color: #f5f5f5;\n  margin-left: 2%;\n}\n\n.buttonNext[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  background-color: #1BCD9D;\n  color: #FFFFFF;\n  font-family: sans-serif;\n}\n\n.buttonCancel[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  border-color: white;\n  background-color: #E3E3E3;\n  color: #FFFFFF;\n  font-family: sans-serif;\n}\n\n.inputCard[_ngcontent-%COMP%] {\n  background-color: #f9fafb;\n  box-sizing: border-box;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.pb1[_ngcontent-%COMP%] {\n  padding-bottom: 1%;\n}\n\n.operationTypeClass[_ngcontent-%COMP%] {\n  color: #A1A1A1;\n  margin: auto;\n}\n\n.quantityClass[_ngcontent-%COMP%] {\n  color: #000000;\n  margin: auto;\n  font-weight: 500;\n}\n\n.paddingclass[_ngcontent-%COMP%] {\n  padding: 2%;\n}\n\n.totalAmount[_ngcontent-%COMP%] {\n  font-size: smaller;\n  color: #7e84a3;\n  padding-left: 10px;\n}\n\n.inputCard[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0 2px 1px -1px #f8f8f8,\r 0 1px 0 #f8f8f8,\r 0 5px 8px 0 #e9e9e9;\n}\n\n.chargeDetailsTbl[_ngcontent-%COMP%] {\n  border: 1px solid #e6e6e6;\n  border-collapse: collapse;\n  border-radius: 10px;\n}\n\n.chargeDetailsDiv[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.thchargeDetailsTbl[_ngcontent-%COMP%] {\n  background-color: #f2f0f0;\n  color: #968e8e;\n  font-family: sans-serif;\n  text-align: center;\n  border-bottom-style: none;\n}\n\n.tbchargeDetailsTbl[_ngcontent-%COMP%] {\n  background-color: #f9f9f9;\n  font-size: x-small;\n  font-family: sans-serif;\n  text-align: center;\n  color: #726868;\n}\n\n.titleHead[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n[_nghost-%COMP%]     mat-select-country > mat-form-field {\n  width: 100% !important;\n}\n\n[_nghost-%COMP%]     mat-select-country > mat-form-field > div.mat-form-field-wrapper > div.mat-form-field-flex > div.mat-form-field-suffix > mat-icon > svg {\n  margin-bottom: -8px;\n}\n\n[_nghost-%COMP%]     mat-select-country > mat-form-field > div.mat-form-field-wrapper {\n  padding-bottom: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcb3BlcmF0aW9ucy5jb21wb25lbnQuc2NzcyIsIm9wZXJhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBb0M7RUFDcEMsV0FBVztFQUNYLFlBQVk7QUFDaEI7O0FBQ0E7RUFDSSxlQUFlO0VBQ2YsZUFBZTtBQUVuQjs7QUFBQTtFQUNJLGNBQWM7RUFDZCxZQUFZO0VBQ1osbUJBQW1CO0FBR3ZCOztBQURBO0VBQ0ksdUJBQXNCO0VBQ3RCLGVBQWU7QUFJbkI7O0FBREU7RUFDSSx5QkFBeUI7QUFJL0I7O0FBRkU7RUFDSSxXQUFXO0FBS2pCOztBQUZFO0VBQ0ksbUJBQW1CO0FBS3pCOztBQUZFO0VBQ0ksbUJBQW1CO0FBS3pCOztBQUZFO0VBQ0ksY0FBYztFQUNkLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFLdkI7O0FBRkU7RUFDSSxpQkFBaUI7QUFLdkI7O0FBSEU7RUFDSSxnQkFBZ0I7RUFDaEIsVUFBVTtBQU1oQjs7QUFIRTtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFNMUI7O0FBSEU7RUFDSSx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLFVBQVU7RUFDVixpQkFBaUI7QUFNdkI7O0FBRkU7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHVCQUF1QjtBQUs3Qjs7QUFIRTtFQUNJLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCO0FBTXhCOztBQUpFO0VBQ0ksV0FBVztBQU9qQjs7QUFMRTtFQUNJLHlCQUF5QjtBQVEvQjs7QUFORTtFQUNJLHNCQUFzQjtBQVM1Qjs7QUFORTtFQUNJLFlBQVk7RUFDWixjQUFjO0VBQ2QsZ0JBQWdCO0FBU3RCOztBQVBFO0VBQ0kseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFVeEI7O0FBUkU7RUFDSSxnQkFBZ0I7QUFXdEI7O0FBVEU7RUFDSSxvQ0FBb0M7RUFDcEMseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsa0NBQWtDO0VBQ2xDLDZCQUE2QjtBQVluQzs7QUFURTtFQUNJLFVBQVU7QUFZaEI7O0FBVkU7RUFDSSxZQUFZO0VBQ2Isa0JBQWtCO0VBQ2pCLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGVBQWU7QUFhckI7O0FBWEU7RUFDSSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCx1QkFBdUI7QUFjN0I7O0FBWEU7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQWdDO0VBQ2hDLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsdUJBQXVCO0FBYzNCOztBQVpFO0VBQ0kseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQWU1Qjs7QUFaRTtFQUNJLGFBQWE7QUFlbkI7O0FBWkU7RUFDSSxrQkFBa0I7QUFleEI7O0FBWkU7RUFDSSxjQUFjO0VBQ2QsWUFBWTtBQWVsQjs7QUFaRTtFQUNJLGNBQWM7RUFDZCxZQUFZO0VBQ1osZ0JBQWdCO0FBZXRCOztBQVpFO0VBQ0ksV0FBVztBQWVqQjs7QUFaRTtFQUNJLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0FBZXhCOztBQVpFO0VBQ0ksMEVDZ0JjO0FER3BCOztBQ0FBO0VER0UseUJBQW1CO0VBWG5CLHlCQUFBO0VDV0EsbUJBQW1CO0FER3JCOztBQVZFO0VDV0Esb0JBQW9CO0FER3RCOztBQ0FBO0VEVE0seUJBQXFCO0VBQ3hCLGNBQUE7RUFhRCx1QkFBQTtFQVhBLGtCQUFBO0VDV0EseUJBQXlCO0FERzNCOztBQ0FBO0VEVE0seUJBQWM7RUFDakIsa0JBQUE7RUFhRCx1QkFBYztFQVhkLGtCQUFBO0VDV0EsY0FBYztBREdoQjs7QUFUQTtFQ1VFLG9CQUFvQjtBREd0Qjs7QUFUQTtFQ1VFLHNCQUFzQjtBREd4Qjs7QUFUQTtFQ1VFLG1CQUFtQjtBREdyQjs7QUFFQTtFQ0RFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJvcGVyYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGxjYXJke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDExMCU7XHJcbn1cclxuLmJhY2tJY29ue1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcbi5jaGVxdWVjYXJke1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5jYXJkLXRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuICAub3V0ZXItRGl2e1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG4gIH1cclxuICAuY29udGVudC1EaXZ7XHJcbiAgICAgIHBhZGRpbmc6IDYlO1xyXG4gIH1cclxuICBcclxuICAucGFkZGluZ3JpZ2h0e1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuY2xvc2VEcmF3ZXJJY29ue1xyXG4gICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIH1cclxuICBcclxuICAudGl0bGUtQ2xhc3N7XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5zcGFjZURpdntcclxuICAgICAgcGFkZGluZy1yaWdodDogMyU7XHJcbiAgfVxyXG4gIC5zcGFjZVVzZXJJbWFnZXtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgICAgd2lkdGg6IDEyJTtcclxuICB9XHJcbiAgXHJcbiAgLnVzZXItbmFtZS1EaXZ7XHJcbiAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxlLUZvbnR7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC50b2tlbi1EaXZ7XHJcbiAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgICAgY29sb3I6ICM3ZTg0YTM7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAudG9rZW4taWQtY2xhc3N7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgLndpZHRoMTAwe1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmRldGFpbHMtRGl2e1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG4gIH1cclxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1zcGFjaW5ne1xyXG4gICAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuaWNvbntcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbiAgLmJ0bkNvbmZpcm1DbGFzc3tcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NmVmZTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgfVxyXG4gIC5idG5EaXZ7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxNSU7XHJcbiAgfVxyXG4gIC5idG5DYW5jZWxDbGFzc3tcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmOCAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogIzVkNWQ1ZCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiAxMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXNpemU6IHNtYWxsZXIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLndpZHRoNTB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gIC5saW5le1xyXG4gICAgICB3aWR0aDogOTQwcHg7XHJcbiAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XHJcbiAgICAgIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xyXG4gICAgICBib3JkZXItdG9wLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgfVxyXG4gIC5idXR0b25OZXh0e1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUJDRDlEO1xyXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uQ2FuY2Vse1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UzRTNFMztcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC5pbnB1dENhcmR7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0OmZvY3Vze1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICBcclxuICAucGIxe1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5vcGVyYXRpb25UeXBlQ2xhc3N7XHJcbiAgICAgIGNvbG9yOiAjQTFBMUExO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5xdWFudGl0eUNsYXNze1xyXG4gICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBcclxuICAucGFkZGluZ2NsYXNze1xyXG4gICAgICBwYWRkaW5nOiAyJTtcclxuICB9XHJcbiAgXHJcbiAgLnRvdGFsQW1vdW50e1xyXG4gICAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICAgIGNvbG9yOiAjN2U4NGEzO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dENhcmQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCAjZjhmOGY4LFxyXG4gICAgICAgICAgICAgICAgICAwIDFweCAwICNmOGY4ZjgsXHJcbiAgICAgICAgICAgICAgICAgIDAgNXB4IDhweCAwICNlOWU5ZTk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGFyZ2VEZXRhaWxzVGJse1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xyXG4gICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuY2hhcmdlRGV0YWlsc0RpdntcclxuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50aGNoYXJnZURldGFpbHNUYmx7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYwZjAgO1xyXG4gICAgICBjb2xvcjogIzk2OGU4ZTtcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnRiY2hhcmdlRGV0YWlsc1RibHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogIzcyNjg2ODtcclxuICB9XHJcblxyXG4gIC50aXRsZUhlYWR7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcblxyXG46aG9zdCA6Om5nLWRlZXAgbWF0LXNlbGVjdC1jb3VudHJ5ID4gbWF0LWZvcm0tZmllbGR7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgbWF0LXNlbGVjdC1jb3VudHJ5ID4gbWF0LWZvcm0tZmllbGQgPiBkaXYubWF0LWZvcm0tZmllbGQtd3JhcHBlciA+IGRpdi5tYXQtZm9ybS1maWVsZC1mbGV4ID4gZGl2Lm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCA+IG1hdC1pY29uID4gc3Zne1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLThweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIG1hdC1zZWxlY3QtY291bnRyeSA+IG1hdC1mb3JtLWZpZWxkID4gZGl2Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC44cmVtO1xyXG59IiwiLmZ1bGxjYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDExMCU7XG59XG5cbi5iYWNrSWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uY2hlcXVlY2FyZCB7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLm91dGVyLURpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG59XG5cbi5jb250ZW50LURpdiB7XG4gIHBhZGRpbmc6IDYlO1xufVxuXG4ucGFkZGluZ3JpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLmNsb3NlRHJhd2VySWNvbiB7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG5cbi50aXRsZS1DbGFzcyB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zcGFjZURpdiB7XG4gIHBhZGRpbmctcmlnaHQ6IDMlO1xufVxuXG4uc3BhY2VVc2VySW1hZ2Uge1xuICBwYWRkaW5nLWxlZnQ6IDIlO1xuICB3aWR0aDogMTIlO1xufVxuXG4udXNlci1uYW1lLURpdiB7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbn1cblxuLnRpdGxlLUZvbnQge1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHdpZHRoOiA5MCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udG9rZW4tRGl2IHtcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xuICBjb2xvcjogIzdlODRhMztcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbi50b2tlbi1pZC1jbGFzcyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLndpZHRoMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kZXRhaWxzLURpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLXNwYWNpbmcge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG4uaWNvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5idG5Db25maXJtQ2xhc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU2ZWZlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbn1cblxuLmJ0bkRpdiB7XG4gIHBhZGRpbmctdG9wOiAxNSU7XG59XG5cbi5idG5DYW5jZWxDbGFzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4ZjggIWltcG9ydGFudDtcbiAgY29sb3I6ICM1ZDVkNWQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTIwcHggIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiBzbWFsbGVyICFpbXBvcnRhbnQ7XG59XG5cbi53aWR0aDUwIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmxpbmUge1xuICB3aWR0aDogOTQwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xuICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2Y1ZjVmNTtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuXG4uYnV0dG9uTmV4dCB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxQkNEOUQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuLmJ1dHRvbkNhbmNlbCB7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFM0UzRTM7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuLmlucHV0Q2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnBiMSB7XG4gIHBhZGRpbmctYm90dG9tOiAxJTtcbn1cblxuLm9wZXJhdGlvblR5cGVDbGFzcyB7XG4gIGNvbG9yOiAjQTFBMUExO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5xdWFudGl0eUNsYXNzIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnBhZGRpbmdjbGFzcyB7XG4gIHBhZGRpbmc6IDIlO1xufVxuXG4udG90YWxBbW91bnQge1xuICBmb250LXNpemU6IHNtYWxsZXI7XG4gIGNvbG9yOiAjN2U4NGEzO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5pbnB1dENhcmQ6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiAwIDJweCAxcHggLTFweCAjZjhmOGY4LFxyIDAgMXB4IDAgI2Y4ZjhmOCxcciAwIDVweCA4cHggMCAjZTllOWU5O1xufVxuXG4uY2hhcmdlRGV0YWlsc1RibCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jaGFyZ2VEZXRhaWxzRGl2IHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi50aGNoYXJnZURldGFpbHNUYmwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMGYwO1xuICBjb2xvcjogIzk2OGU4ZTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogbm9uZTtcbn1cblxuLnRiY2hhcmdlRGV0YWlsc1RibCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM3MjY4Njg7XG59XG5cbi50aXRsZUhlYWQge1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG1hdC1zZWxlY3QtY291bnRyeSA+IG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIG1hdC1zZWxlY3QtY291bnRyeSA+IG1hdC1mb3JtLWZpZWxkID4gZGl2Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIgPiBkaXYubWF0LWZvcm0tZmllbGQtZmxleCA+IGRpdi5tYXQtZm9ybS1maWVsZC1zdWZmaXggPiBtYXQtaWNvbiA+IHN2ZyB7XG4gIG1hcmdpbi1ib3R0b206IC04cHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCBtYXQtc2VsZWN0LWNvdW50cnkgPiBtYXQtZm9ybS1maWVsZCA+IGRpdi5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDAuOHJlbTtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OperationsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-operations',
            templateUrl: './operations.component.html',
            styleUrls: ['./operations.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]
          }];
        }, {
          title: [{
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
            svgIcon: '',
            state: 'others/blank'
          }, {
            name: 'Login',
            type: 'link',
            svgIcon: '',
            state: 'others/login'
          }, {
            name: 'OTP',
            type: 'link',
            svgIcon: '',
            state: 'others/otp'
          },, {
            name: 'TokenGeneration',
            type: 'link',
            svgIcon: '',
            state: 'others/tokengeneration'
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
    "LP5l":
    /*!**********************************************************!*\
      !*** ./src/app/shared/services/Dialog/dialog.service.ts ***!
      \**********************************************************/

    /*! exports provided: TokenObjects, DialogService */

    /***/
    function LP5l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenObjects", function () {
        return TokenObjects;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialogService", function () {
        return DialogService;
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


      var app_views_others_authenticate_authenticate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! app/views/others/authenticate/authenticate.component */
      "ucp7");
      /* harmony import */


      var app_views_others_token_generation_token_generation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/views/others/token-generation/token-generation.component */
      "YfT7");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../api.service */
      "nm5K");
      /* harmony import */


      var app_views_sessions_logout_popup_logout_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/views/sessions/logout-popup/logout-popup.component */
      "8n/o");
      /* harmony import */


      var app_views_others_exit_screen_exit_screen_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/views/others/exit-screen/exit-screen.component */
      "gIfQ");
      /* harmony import */


      var app_views_others_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/views/others/feedback/feedback.component */
      "Y+ix");

      var TokenObjects = function TokenObjects() {
        _classCallCheck(this, TokenObjects);
      };

      var DialogService = /*#__PURE__*/function () {
        function DialogService(dialog, apiService) {
          _classCallCheck(this, DialogService);

          this.dialog = dialog;
          this.apiService = apiService;
          this.tokenObjects = new TokenObjects();
        }

        _createClass(DialogService, [{
          key: "authenticationDialog",
          value: function authenticationDialog() {
            console.log("test");
            var dialogRef = this.dialog.open(app_views_others_authenticate_authenticate_component__WEBPACK_IMPORTED_MODULE_2__["AuthenticateComponent"], {
              width: "55%",
              height: "68%",
              backdropClass: "dialog-bg-trans",
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("The dialog was closed");
            });
          }
        }, {
          key: "tokenGenerationDialog",
          value: function tokenGenerationDialog() {
            console.log(this.tokenResp, "Token Response");
            this.tokenObjects.entityCode = "entityCode1";
            var tokenDialog = this.dialog.open(app_views_others_token_generation_token_generation_component__WEBPACK_IMPORTED_MODULE_3__["TokenGenerationComponent"], {
              data: {},
              width: "55%",
              height: "72%",
              backdropClass: "dialog-bg-trans",
              disableClose: true
            });
            tokenDialog.afterClosed().subscribe(function (result) {
              console.log("The dialog was closed");
            });
          }
        }, {
          key: "logoutDialog",
          value: function logoutDialog() {
            console.log("Logout Response");
            var dialogBox = this.dialog.open(app_views_sessions_logout_popup_logout_popup_component__WEBPACK_IMPORTED_MODULE_5__["LogoutPopupComponent"], {
              data: {},
              width: "50%",
              height: "65%",
              backdropClass: "dialog-bg-trans",
              disableClose: true
            });
            dialogBox.afterClosed().subscribe(function (result) {
              console.log("The dialog was closed");
            });
          }
        }, {
          key: "clickExit",
          value: function clickExit() {
            console.log("exit Response");
            var dialogBox = this.dialog.open(app_views_others_exit_screen_exit_screen_component__WEBPACK_IMPORTED_MODULE_6__["ExitScreenComponent"], {
              data: {},
              width: "50%",
              height: "65%",
              backdropClass: "dialog-bg-trans",
              disableClose: true
            });
            dialogBox.afterClosed().subscribe(function (result) {
              console.log("The dialog was closed");
            });
          }
        }, {
          key: "feedBack",
          value: function feedBack() {
            console.log("exit Response");
            var dialogBox = this.dialog.open(app_views_others_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_7__["FeedbackComponent"], {
              data: {},
              width: "50%",
              height: "65%",
              backdropClass: "dialog-bg-trans",
              disableClose: true
            });
            dialogBox.afterClosed().subscribe(function (result) {
              console.log("The dialog was closed");
            });
          }
        }]);

        return DialogService;
      }();

      DialogService.ɵfac = function DialogService_Factory(t) {
        return new (t || DialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]));
      };

      DialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: DialogService,
        factory: DialogService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DialogService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]
          }, {
            type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
          }];
        }, {
          tokenResp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
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
            /* if (this.jwtAuth.isLoggedIn()) {
               return true;
             } else {
               this.router.navigate(["/sessions/signin"], {
                 queryParams: {
                   return: state.url
                 }
               });
              // return false; //commented by sneha
              return true;
             } */
            return true;
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
    "No+0":
    /*!************************************************************************!*\
      !*** ./src/app/shared/components/show-loader/show-loader.component.ts ***!
      \************************************************************************/

    /*! exports provided: ShowLoaderComponent */

    /***/
    function No0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowLoaderComponent", function () {
        return ShowLoaderComponent;
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


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      function ShowLoaderComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-spinner", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ShowLoaderComponent = /*#__PURE__*/function () {
        function ShowLoaderComponent() {
          _classCallCheck(this, ShowLoaderComponent);
        }

        _createClass(ShowLoaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ShowLoaderComponent;
      }();

      ShowLoaderComponent.ɵfac = function ShowLoaderComponent_Factory(t) {
        return new (t || ShowLoaderComponent)();
      };

      ShowLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ShowLoaderComponent,
        selectors: [["app-show-loader"]],
        inputs: {
          loading: "loading"
        },
        decls: 1,
        vars: 1,
        consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["mode", "indeterminate", "diameter", "30", "strokeWidth", "10"]],
        template: function ShowLoaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ShowLoaderComponent_div_0_Template, 2, 0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinner"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG93LWxvYWRlci5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowLoaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-show-loader',
            templateUrl: './show-loader.component.html',
            styleUrls: ['./show-loader.component.scss']
          }]
        }], function () {
          return [];
        }, {
          loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['loading']
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
      "mnDI");
      /* harmony import */


      var _services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./services/Dialog/dialog.service */
      "LP5l"); // SERVICES


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
        providers: [_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"], _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"], _services_route_parts_service__WEBPACK_IMPORTED_MODULE_4__["RoutePartsService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"], _guards_user_role_guard__WEBPACK_IMPORTED_MODULE_6__["UserRoleGuard"], _services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_7__["AppConfirmService"], _services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_8__["AppLoaderService"], _services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_12__["DialogService"]],
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
            providers: [_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"], _services_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"], _services_route_parts_service__WEBPACK_IMPORTED_MODULE_4__["RoutePartsService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"], _guards_user_role_guard__WEBPACK_IMPORTED_MODULE_6__["UserRoleGuard"], _services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_7__["AppConfirmService"], _services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_8__["AppLoaderService"], _services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_12__["DialogService"]],
            exports: [_components_shared_components_module__WEBPACK_IMPORTED_MODULE_9__["SharedComponentsModule"], _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_10__["SharedPipesModule"], _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_11__["SharedDirectivesModule"]]
          }]
        }], null, null);
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
      "fXoL");
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
            console.log('dep failed');
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "changePageTitle",
          value: function changePageTitle() {
            var _this10 = this;

            this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
            })).subscribe(function (routeChange) {
              var routeParts = _this10.routePartsService.generateRouteParts(_this10.activeRoute.snapshot);

              if (!routeParts.length) {
                return _this10.title.setTitle(_this10.appTitle);
              } // Extract title from parts;


              _this10.pageTitle = routeParts.reverse().map(function (part) {
                return part.title;
              }).reduce(function (partA, partI) {
                return "".concat(partA, " > ").concat(partI);
              });
              _this10.pageTitle += " | ".concat(_this10.appTitle);

              _this10.title.setTitle(_this10.pageTitle);
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
            var _this11 = this;

            this.iconTypeMenuTitle = this.navService.iconTypeMenuTitle;
            this.menuItemsSub = this.navService.menuItems$.subscribe(function (menuItem) {
              _this11.menuItems = menuItem; //Checks item list has any icon type.

              _this11.hasIconTypeMenuItem = !!_this11.menuItems.filter(function (item) {
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


      var app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! app/shared/services/common.service */
      "7o2P");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

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
        function NotificationsComponent(router, commonService) {
          _classCallCheck(this, NotificationsComponent);

          this.router = router;
          this.commonService = commonService; // Dummy notifications

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
            var _this12 = this;

            this.router.events.subscribe(function (routeChange) {
              if (routeChange instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this12.notificPanel.close();
              }
            });
            this.commonService.sendNotificationUpdate("on load", this.notifications.length);
          }
        }, {
          key: "clearAll",
          value: function clearAll(e) {
            e.preventDefault();
            this.notifications = [];
            this.commonService.sendNotificationUpdate('On clear', this.notifications.length);
          }
        }]);

        return NotificationsComponent;
      }();

      NotificationsComponent.ɵfac = function NotificationsComponent_Factory(t) {
        return new (t || NotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]));
      };

      NotificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotificationsComponent,
        selectors: [["app-notifications"]],
        inputs: {
          notificPanel: "notificPanel"
        },
        decls: 6,
        vars: 2,
        consts: [[1, "text-center", "mat-bg-primary", "pt-16", "pb-16"], [1, "m-0", "text-white"], ["role", "list", 1, "notification-list", 2, "pointer-events", "none"], ["class", "notific-item", "role", "listitem", "routerLinkActive", "open", 4, "ngFor", "ngForOf"], ["class", "text-center mt-16", 4, "ngIf"], ["role", "listitem", "routerLinkActive", "open", 1, "notific-item"], [1, "notific-icon", "mr-16", 3, "color"], [3, "routerLink"], [1, "mat-list-text"], [1, "message"], [1, "time", "text-muted"], [1, "text-center", "mt-16"], ["href", "#", 3, "click"]],
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
        directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
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
          }, {
            type: app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
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
    "Y+ix":
    /*!*************************************************************!*\
      !*** ./src/app/views/others/feedback/feedback.component.ts ***!
      \*************************************************************/

    /*! exports provided: FeedbackComponent */

    /***/
    function YIx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function () {
        return FeedbackComponent;
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


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/Dialog/dialog.service */
      "LP5l");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV"); // import { ApiService } from 'src/app/services/api.service';


      var FeedbackComponent = /*#__PURE__*/function () {
        function FeedbackComponent(router, dialogRef, dialogService, location, api) {
          _classCallCheck(this, FeedbackComponent);

          this.router = router;
          this.dialogRef = dialogRef;
          this.dialogService = dialogService;
          this.location = location;
          this.api = api;
          this.titleMessage = "Thank you for choosing DemoBank for your banking needs";
          this.rating = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        }

        _createClass(FeedbackComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.router.getCurrentNavigation() != null) {
              this.routerData = this.router.getCurrentNavigation().extras.state;
            }
          }
        }, {
          key: "handleChange",
          value: function handleChange(event) {
            console.log(event.value);
            this.ratingOfCustomer = event.value;
          } // goToClose() {
          //   this.dialogRef.close();
          //   this.router.navigateByUrl("/others/kioskHome");
          // }

        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this13 = this;

            console.log(this.ratingOfCustomer);
            var feedback = {
              customerId: localStorage.getItem("customerId") || "",
              feedback: this.ratingOfCustomer
            };
            console.log(feedback);
            this.api.storeFeedbackInfo(feedback).subscribe(function (resp) {
              console.log(resp);

              _this13.onSkip();
            }, function (err) {
              console.log("ERROR: ", err); // this.openToast('unable to save feedback')
            });
          }
        }, {
          key: "onSkip",
          value: function onSkip() {
            var _a;

            this.dialogRef.close();

            if ((_a = this.routerData) === null || _a === void 0 ? void 0 : _a.goBack) {
              this.location.back();
            } else {
              localStorage.clear();
              sessionStorage.clear(); // this.router.navigate(['login'], { replaceUrl: true });

              this.router.navigateByUrl("/sessions/login");
            }
          }
        }]);

        return FeedbackComponent;
      }();

      FeedbackComponent.ɵfac = function FeedbackComponent_Factory(t) {
        return new (t || FeedbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]));
      };

      FeedbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FeedbackComponent,
        selectors: [["app-feedback"]],
        decls: 29,
        vars: 3,
        consts: [[1, "full-width"], [1, "text"], ["fxLayout", "column", "fxLayoutGap", "5%", "fxLayoutAlign", "space-between center", 1, ""], [1, "text-inside"], [1, "para"], ["fxLayoutGap", "space-between", 1, "text-inside", "emoji_wrapper", 3, "formControl"], ["value", "1", 3, "change"], ["src", "assets/images/feedback1.png", "alt", ""], ["src", "assets/images/feedback-1-1.png", "alt", "", 1, "checked"], ["value", "2", 3, "change"], ["src", "assets/images/feedback2.png", "alt", ""], ["src", "assets/images/feedback-2-1.png", "alt", "", 1, "checked"], ["value", "3", 3, "change"], ["src", "assets/images/feedback3.png", "alt", ""], ["src", "assets/images/feedback-3-1.png", "alt", "", 1, "checked"], ["value", "4", 3, "change"], ["src", "assets/images/feedback4.png", "alt", ""], ["src", "assets/images/feedback-4-1.png", "alt", "", 1, "checked"], ["value", "5", 3, "change"], ["src", "assets/images/feedback5.png", "alt", ""], ["src", "assets/images/feedback-5-1.png", "alt", "", 1, "checked"], ["fxLayout", "row", "fxLayoutGap", "20px"], ["mat-button", "", 1, "buttonScan", 2, "background-color", "#ffff", 3, "click"], ["mat-button", "", 1, "buttonContinue", 3, "disabled", "click"]],
        template: function FeedbackComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-radio-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-radio-button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FeedbackComponent_Template_mat_radio_button_change_9_listener($event) {
              return ctx.handleChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-radio-button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FeedbackComponent_Template_mat_radio_button_change_12_listener($event) {
              return ctx.handleChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-radio-button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FeedbackComponent_Template_mat_radio_button_change_15_listener($event) {
              return ctx.handleChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-radio-button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FeedbackComponent_Template_mat_radio_button_change_18_listener($event) {
              return ctx.handleChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-radio-button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FeedbackComponent_Template_mat_radio_button_change_21_listener($event) {
              return ctx.handleChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedbackComponent_Template_button_click_25_listener() {
              return ctx.onSkip();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Skip ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedbackComponent_Template_button_click_27_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Submit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.rating);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.ratingOfCustomer);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]],
        styles: [".contain[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.text[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding-top: 15px;\n}\n\n.text-inside[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.para[_ngcontent-%COMP%] {\n  color: #000000;\n  opacity: 62%;\n  font-size: 25px;\n  font: normal normal medium 32px/48px Poppins;\n}\n\n.backIcon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 0% 0% 0% 0%;\n  font-size: 20px;\n  color: #000000;\n  opacity: 40%;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 24px;\n  text-align: center;\n  color: #000000;\n  opacity: 62%;\n  font-weight: bold;\n}\n\np[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: sans-serif;\n  font-size: 12px;\n}\n\n.buttonScan[_ngcontent-%COMP%] {\n  width: 170px;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 15px #00000017;\n  border-radius: 25px;\n  opacity: 1;\n}\n\n  .mat-button-focus-overlay {\n  display: none;\n}\n\n.buttonContinue[_ngcontent-%COMP%] {\n  width: 170px;\n  border-radius: 25px;\n  background: transparent linear-gradient(90deg, #051a2d 0%, #004c97 100%) 0% 0% no-repeat padding-box;\n  color: #ffffff;\n  font-family: sans-serif;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.content-text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: sans-serif;\n  font-size: 24px;\n  color: #000000;\n  opacity: 20%;\n  font-weight: 600;\n}\n\n.time-text[_ngcontent-%COMP%] {\n  text-align: center;\n  font: normal normal bold 40px/20px SF Pro;\n  letter-spacing: -0.61px;\n  color: #000000;\n  opacity: 70%;\n  -webkit-text-fill-color: white;\n  -webkit-text-stroke-width: 1px;\n}\n\n.emoji_wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px;\n  margin: 0 10px;\n}\n\n  .mat-radio-button .mat-radio-label .mat-radio-container {\n  display: none;\n}\n\n  .mat-radio-button .mat-radio-label-content img {\n  display: inline-block;\n}\n\n  .mat-radio-button .mat-radio-label-content img.checked {\n  display: none;\n}\n\n  .mat-radio-button.mat-radio-checked img {\n  display: none;\n}\n\n  .mat-radio-button.mat-radio-checked img.checked {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZmVlZGJhY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0FBRW5COztBQUFBO0VBR0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0VBQ2YsNENBQTRDO0FBQzlDOztBQUNBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsY0FBYztFQUNkLFlBQVk7QUFFZDs7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZO0VBQ1osaUJBQWlCO0FBRW5COztBQUFBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixlQUFlO0FBR2pCOztBQU1BO0VBQ0UsWUFBWTtFQUNaLCtDQUErQztFQUMvQyxrQ0FBa0M7RUFDbEMsbUJBQW1CO0VBQ25CLFVBQVU7QUFIWjs7QUFLQTtFQUNFLGFBQWE7QUFGZjs7QUFJQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFFbkIsb0dBQ3VCO0VBQ3ZCLGNBQWM7RUFDZCx1QkFBdUI7QUFIekI7O0FBS0E7RUFDRSxtQkFBbUI7QUFGckI7O0FBSUE7RUFDRSxrQkFBa0I7RUFFbEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixjQUFjO0VBQ2QsWUFBWTtFQUNaLGdCQUFnQjtBQUZsQjs7QUFJQTtFQUNFLGtCQUFrQjtFQUNsQix5Q0FBeUM7RUFDekMsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLDhCQUE4QjtBQURoQzs7QUFJQTtFQUVJLGFBQWE7RUFDYixjQUFjO0FBRmxCOztBQUtBO0VBR00sYUFBYTtBQUpuQjs7QUFDQTtFQVFNLHFCQUFxQjtBQUwzQjs7QUFIQTtFQVVRLGFBQWE7QUFIckI7O0FBUEE7RUFnQk0sYUFBYTtBQUxuQjs7QUFYQTtFQWtCUSxxQkFBcUI7QUFIN0IiLCJmaWxlIjoiZmVlZGJhY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG4udGV4dCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbn1cclxuLnRleHQtaW5zaWRlIHtcclxuICAvLyBjb2xvcjogIzAwMDAwMDtcclxuICAvLyBvcGFjaXR5OiAzNyU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGFyYSB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgb3BhY2l0eTogNjIlO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250OiBub3JtYWwgbm9ybWFsIG1lZGl1bSAzMnB4LzQ4cHggUG9wcGlucztcclxufVxyXG4uYmFja0ljb24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAwJSAwJSAwJSAwJTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgb3BhY2l0eTogNDAlO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBvcGFjaXR5OiA2MiU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxucCB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi8vIC5idXR0b25TY2FuIHtcclxuLy8gICB3aWR0aDogMTcwcHg7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4vLyAgIGNvbG9yOiAjNDE0MTQxO1xyXG4vLyAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4vLyB9XHJcbi5idXR0b25TY2FuIHtcclxuICB3aWR0aDogMTcwcHg7XHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxNXB4ICMwMDAwMDAxNztcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmJ1dHRvbkNvbnRpbnVlIHtcclxuICB3aWR0aDogMTcwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAvLyAgIGJhY2tncm91bmQtY29sb3I6ICMxYmNkOWQ7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDUxYTJkIDAlLCAjMDA0Yzk3IDEwMCUpIDAlIDAlXHJcbiAgICBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn1cclxuLmZ1bGwtd2lkdGgge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmNvbnRlbnQtdGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vIGZvbnQ6IG5vcm1hbCBub3JtYWwgYm9sZCAzMnB4LzQzcHggU0YgUHJvO1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBvcGFjaXR5OiAyMCU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4udGltZS10ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBib2xkIDQwcHgvMjBweCBTRiBQcm87XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjYxcHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgb3BhY2l0eTogNzAlO1xyXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB3aGl0ZTtcclxuICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAxcHg7XHJcbn1cclxuXHJcbi5lbW9qaV93cmFwcGVyIHtcclxuICBpbWcge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gIH1cclxufVxyXG46Om5nLWRlZXAgLm1hdC1yYWRpby1idXR0b24ge1xyXG4gIC5tYXQtcmFkaW8tbGFiZWwge1xyXG4gICAgLm1hdC1yYWRpby1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICAubWF0LXJhZGlvLWxhYmVsLWNvbnRlbnQge1xyXG4gICAgaW1nIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAmLmNoZWNrZWQge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgJi5tYXQtcmFkaW8tY2hlY2tlZCB7XHJcbiAgICBpbWcge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAmLmNoZWNrZWQge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-feedback",
            templateUrl: "./feedback.component.html",
            styleUrls: ["./feedback.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }, {
            type: app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "YJH2":
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/toastr/toastr.component.ts ***!
      \**************************************************************/

    /*! exports provided: ToastrComponent */

    /***/
    function YJH2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastrComponent", function () {
        return ToastrComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");

      var ToastrComponent = /*#__PURE__*/function () {
        function ToastrComponent(toastr) {
          _classCallCheck(this, ToastrComponent);

          this.toastr = toastr;
        }

        _createClass(ToastrComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "showSuccess",
          value: function showSuccess(message, title) {
            var _this14 = this;

            setTimeout(function () {
              _this14.toastr.success(message, title, {
                timeOut: 6000,
                progressBar: true,
                tapToDismiss: true,
                closeButton: true,
                easeTime: 900,
                extendedTimeOut: 3000
              });
            });
          }
        }, {
          key: "showError",
          value: function showError(message, title) {
            var _this15 = this;

            setTimeout(function () {
              _this15.toastr.error(message, title, {
                timeOut: 6000,
                progressBar: true,
                tapToDismiss: true,
                closeButton: true,
                easeTime: 900,
                extendedTimeOut: 3000
              });
            });
          }
        }, {
          key: "showInfo",
          value: function showInfo(message, title) {
            var _this16 = this;

            setTimeout(function () {
              _this16.toastr.info(message, title, {
                timeOut: 6000,
                progressBar: true,
                tapToDismiss: true,
                closeButton: true,
                easeTime: 900,
                extendedTimeOut: 3000
              });
            });
          }
        }, {
          key: "showWarning",
          value: function showWarning(message, title) {
            var _this17 = this;

            setTimeout(function () {
              _this17.toastr.warning(message, title, {
                timeOut: 6000,
                progressBar: true,
                tapToDismiss: true,
                closeButton: true,
                easeTime: 900,
                extendedTimeOut: 3000
              });
            });
          }
        }]);

        return ToastrComponent;
      }();

      ToastrComponent.ɵfac = function ToastrComponent_Factory(t) {
        return new (t || ToastrComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]));
      };

      ToastrComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ToastrComponent,
        selectors: [["app-toastr"]],
        decls: 2,
        vars: 0,
        template: function ToastrComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "toastr works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".toast-top-center[_ngcontent-%COMP%] {\n  top: 12px;\n  margin: 0 auto;\n  left: 50%;\n  margin-left: -150px;\n}\n\n\n\n#container[_ngcontent-%COMP%] {\n  margin: 25px;\n}\n\n#elementToastTime[_ngcontent-%COMP%]   .e-toast[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 147px;\n}\n\n#elementToastTime[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n#elementToastTime[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n}\n\n#elementToastTime[_ngcontent-%COMP%]   .e-toast-message[_ngcontent-%COMP%] {\n  width: inherit;\n}\n\n#sample_container[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\nbody[_ngcontent-%COMP%]    > #element[_ngcontent-%COMP%]   .e-toast[_ngcontent-%COMP%] {\n  width: 400px !important;\n}\n\n#template_toast[_ngcontent-%COMP%]   .horizontal-align[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n\n#template_toast[_ngcontent-%COMP%]   .horizontal-align[_ngcontent-%COMP%]   .toast-content[_ngcontent-%COMP%]   .toast-message[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n\n#template_toast[_ngcontent-%COMP%]   .horizontal-align[_ngcontent-%COMP%]   .toast-content[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex: 1;\n  flex-direction: column;\n  margin-left: 10px;\n}\n\n#loader[_ngcontent-%COMP%] {\n  color: #008cff;\n  height: 40px;\n  left: 45%;\n  position: absolute;\n  top: 45%;\n  width: 30%;\n}\n\n.progress[_ngcontent-%COMP%] {\n  height: 20px;\n  position: relative;\n  margin: 20px 0 20px 0;\n  background: #555;\n  border-radius: 25px;\n  box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);\n}\n\n.progress[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: #f0a3a3;\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #f0a3a3), color-stop(1, #f42323));\n  display: block;\n  height: 100%;\n  border-radius: 10px;\n  width: 50%;\n  position: relative;\n  overflow: hidden;\n}\n\n.progress[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  background-image: -webkit-gradient(linear, 0 0, 100% 100%, color-stop(0.25, rgba(255, 255, 255, 0.2)), color-stop(0.25, transparent), color-stop(0.5, transparent), color-stop(0.5, rgba(255, 255, 255, 0.2)), color-stop(0.75, rgba(255, 255, 255, 0.2)), color-stop(0.75, transparent), to(transparent));\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-size: 50px 50px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdG9hc3RyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksU0FBUztFQUNULGNBQWM7RUFDZCxTQUFTO0VBQ1QsbUJBQW1CO0FBQXZCOztBQUlBLHlCQUFBOztBQUNBO0VBQ0ksWUFBWTtBQURoQjs7QUFJQTtFQUNJLFlBQVk7RUFDWixhQUFhO0FBRGpCOztBQUlBO0VBQ0ksa0JBQWtCO0FBRHRCOztBQUlBO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7QUFEdEI7O0FBSUE7RUFDSSxjQUFjO0FBRGxCOztBQUlBO0VBQ0ksWUFBWTtBQURoQjs7QUFJQTtFQUNJLHVCQUF1QjtBQUQzQjs7QUFJQTtFQUNJLGNBQWM7QUFEbEI7O0FBSUE7RUFDSSxZQUFZO0FBRGhCOztBQUlBO0VBQ0ksb0JBQW9CO0VBQ3BCLE9BQU87RUFDUCxzQkFBc0I7RUFDdEIsaUJBQWlCO0FBRHJCOztBQUlBO0VBQ0ksY0FBYztFQUNkLFlBQVk7RUFDWixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0FBRGQ7O0FBSUE7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFHaEIsbUJBQW1CO0VBQ25CLHFEQUFxRDtBQUR6RDs7QUFJQTtFQUNJLHlCQUF5QjtFQUN6QixpSEFBaUg7RUFDakgsY0FBYztFQUNkLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFEcEI7O0FBSUE7RUFDSSwwU0FBaVM7RUFDalMsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRO0VBQ1IsMEJBQTBCO0VBQzFCLGdCQUFnQjtBQURwQiIsImZpbGUiOiJ0b2FzdHIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRvYXN0LXRvcC1jZW50ZXIgeyBcclxuICAgIHRvcDogMTJweDsgICBcclxuICAgIG1hcmdpbjogMCBhdXRvOyAgXHJcbiAgICBsZWZ0OiA1MCU7ICAgXHJcbiAgICBtYXJnaW4tbGVmdDogLTE1MHB4O1xyXG4gIH1cclxuXHJcbiAgXHJcbi8qIGNzc2xpbnQgaWdub3JlOnN0YXJ0ICovXHJcbiNjb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAyNXB4O1xyXG59XHJcblxyXG4jZWxlbWVudFRvYXN0VGltZSAuZS10b2FzdCB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDE0N3B4O1xyXG59XHJcblxyXG4jZWxlbWVudFRvYXN0VGltZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNlbGVtZW50VG9hc3RUaW1lIGltZyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4jZWxlbWVudFRvYXN0VGltZSAuZS10b2FzdC1tZXNzYWdlIHtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG59XHJcblxyXG4jc2FtcGxlX2NvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbmJvZHk+I2VsZW1lbnQgLmUtdG9hc3Qge1xyXG4gICAgd2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiN0ZW1wbGF0ZV90b2FzdCAuaG9yaXpvbnRhbC1hbGlnbiB7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxuI3RlbXBsYXRlX3RvYXN0IC5ob3Jpem9udGFsLWFsaWduIC50b2FzdC1jb250ZW50IC50b2FzdC1tZXNzYWdlIHtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxufVxyXG5cclxuI3RlbXBsYXRlX3RvYXN0IC5ob3Jpem9udGFsLWFsaWduIC50b2FzdC1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgZmxleDogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuI2xvYWRlciB7XHJcbiAgICBjb2xvcjogIzAwOGNmZjtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGxlZnQ6IDQ1JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDUlO1xyXG4gICAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLnByb2dyZXNzIHtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMjBweCAwIDIwcHggMDtcclxuICAgIGJhY2tncm91bmQ6ICM1NTU7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbn1cclxuXHJcbi5wcm9ncmVzcyBzcGFuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGEzYTM7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAsICNmMGEzYTMpLCBjb2xvci1zdG9wKDEsICNmNDIzMjMpKTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ucHJvZ3Jlc3Mgc3Bhbjo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIDAgMCwgMTAwJSAxMDAlLCBjb2xvci1zdG9wKC4yNSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMikpLCBjb2xvci1zdG9wKC4yNSwgdHJhbnNwYXJlbnQpLCBjb2xvci1zdG9wKC41LCB0cmFuc3BhcmVudCksIGNvbG9yLXN0b3AoLjUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpKSwgY29sb3Itc3RvcCguNzUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjIpKSwgY29sb3Itc3RvcCguNzUsIHRyYW5zcGFyZW50KSwgdG8odHJhbnNwYXJlbnQpKTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwcHggNTBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbiJdfQ== */"]
      });
      ToastrComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ToastrComponent,
        factory: ToastrComponent.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastrComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-toastr',
            templateUrl: './toastr.component.html',
            styleUrls: ['./toastr.component.scss']
          }]
        }, {
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
    "YfT7":
    /*!*****************************************************************************!*\
      !*** ./src/app/views/others/token-generation/token-generation.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: TokenGenerationComponent */

    /***/
    function YfT7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenGenerationComponent", function () {
        return TokenGenerationComponent;
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


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
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


      var app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/shared/services/Dialog/dialog.service */
      "LP5l");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var TokenGenerationComponent = /*#__PURE__*/function () {
        function TokenGenerationComponent(router, apiService, dialogService, dialogRef, fb, dataService, data) {
          _classCallCheck(this, TokenGenerationComponent);

          this.router = router;
          this.apiService = apiService;
          this.dialogService = dialogService;
          this.dialogRef = dialogRef;
          this.fb = fb;
          this.dataService = dataService;
          this.data = data;
          this.titleMessage = "Your token has been successfuly generated";
          this.contentMessage = "Your token number is given below";
          this.estimatedTime = "Estimated wait time";
        }

        _createClass(TokenGenerationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this18 = this;

            this.phoneNumber = localStorage.getItem("phonenumFromLogin");
            this.tokenNum = localStorage.getItem("tokenNumer");
            this.tokenNum = this.tokenNum.slice(3);
            this.waitingTime = localStorage.getItem("estimatedTiming");
            this.dataService.gettransactionFormdata.subscribe(function (transaction) {
              console.log(Object.keys(transaction).length === 0, transaction.constructor === Object);

              if (Object.keys(transaction).length != 0 && transaction.constructor === Object) {
                console.log("Account component?", transaction);
                _this18.transactiondata = transaction;
              }
            });
            this.dataService.getaccountFormdata.subscribe(function (account) {
              console.log(Object.keys(account).length === 0, account.constructor === Object);

              if (Object.keys(account).length != 0 && account.constructor === Object) {
                console.log("Account component?", account);
                _this18.accountData = account;
              }
            });
            this.dataService.getdenominationFormdata.subscribe(function (denomination) {
              if (denomination) {
                console.log("Account component?", denomination);
                _this18.denominationdata = denomination;
              }
            });
            this.dataService.getNavParam.subscribe(function (title) {
              console.log(title);
              _this18.titleData = title;
            });
          }
        }, {
          key: "feedBack",
          value: function feedBack() {
            this.dataService.removetransactionFormData(this.transactiondata);
            this.dataService.removeaccountFormData(this.accountData);
            this.dataService.removedenominationFormData(this.denominationdata);
            this.dataService.removeNavParam(this.titleData);
            this.dialogRef.close();
            this.dialogService.feedBack();
          } // goToClose() {
          //   this.dialogRef.close();
          //   this.dialogService.feedBack();
          // }

        }, {
          key: "goToScanner",
          value: function goToScanner() {
            this.dialogRef.close();
            this.router.navigateByUrl("/others/kioskHome");
          }
        }, {
          key: "OnClickOfLogout",
          value: function OnClickOfLogout() {
            localStorage.removeItem("FromLogin");
            localStorage.removeItem("TransactionType");
            localStorage.removeItem("customerId");
            localStorage.removeItem("phonenumFromLogin");
            localStorage.removeItem("customerValidation");
            localStorage.removeItem("otpPhoneNum");
            localStorage.removeItem("AccountBal");
            localStorage.removeItem("AccountNumber");
            localStorage.removeItem("ProductCode");
            localStorage.removeItem("tokenNumer");
            localStorage.removeItem("estimatedTiming");
            localStorage.removeItem("userId");
            localStorage.removeItem("scannerData");
            localStorage.removeItem("custholderName");
            this.dialogRef.close(); //this.dialogService.logoutDialog();

            this.router.navigateByUrl("/sessions/login");
          }
        }]);

        return TokenGenerationComponent;
      }();

      TokenGenerationComponent.ɵfac = function TokenGenerationComponent_Factory(t) {
        return new (t || TokenGenerationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
      };

      TokenGenerationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TokenGenerationComponent,
        selectors: [["app-token-generation"]],
        decls: 20,
        vars: 5,
        consts: [[1, "full-width"], ["fxLayout", "row", 1, "contain"], [1, "text"], ["fxLayout", "column", "fxLayoutGap", "5%", "fxLayoutAlign", "space-between center", 1, ""], [1, "text-inside"], [1, "card-title"], [1, "para"], [1, "token"], [1, "content-text"], [1, "time-text"], ["fxLayout", "row", "fxLayoutGap", "20px"], ["mat-flat-button", "", 1, "buttonScan", 3, "click"]],
        template: function TokenGenerationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TokenGenerationComponent_Template_button_click_18_listener() {
              return ctx.feedBack();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Exit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contentMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("#", ctx.tokenNum, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.estimatedTime);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.waitingTime);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
        styles: [".contain[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.text[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding-top: 25px;\n}\n\n.text-inside[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.backIcon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 0% 0% 0% 0%;\n  font-size: 20px;\n  color: #CCCCCC;\n}\n\n.para[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  color: #000000;\n  font: normal normal normal 18px/22px Poppins;\n}\n\n.token[_ngcontent-%COMP%] {\n  color: #004C97;\n  font-weight: bold;\n  height: 60px;\n  margin-top: -25px;\n  font: normal normal bold 60px/118px SF Pro;\n  opacity: 1;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-weight: 600;\n  font-size: 24px;\n  text-align: center;\n  color: #004C97;\n}\n\np[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: sans-serif;\n  font-size: 12px;\n}\n\n.buttonScan[_ngcontent-%COMP%] {\n  width: 228px;\n  border-radius: 28px;\n  background: transparent linear-gradient(90deg, #051A2D 0%, #004C97 100%) 0% 0% no-repeat padding-box;\n  color: #FFFFFF;\n  font-family: sans-serif;\n}\n\n.buttonContinue[_ngcontent-%COMP%] {\n  width: 170px;\n  border-radius: 25px;\n  background-color: #456EFE;\n  color: #FFFFFF;\n  font-family: sans-serif;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.content-text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 28px;\n  font: normal normal medium 32px/48px Poppins;\n  letter-spacing: -0.32px;\n  color: #CCCCCC;\n  font-weight: 400;\n}\n\n.time-text[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  text-align: center;\n  font: normal normal bold 61px/20px SF Pro;\n  letter-spacing: -0.61px;\n  color: #000000;\n  -webkit-text-fill-color: white;\n  -webkit-text-stroke-width: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdG9rZW4tZ2VuZXJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUEwQjtBQUM5Qjs7QUFDQTtFQUNJLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFFckI7O0FBQUE7RUFHSSxrQkFBa0I7QUFDdEI7O0FBQ0E7RUFDSSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixjQUFjO0FBRWxCOztBQUNBO0VBQ0ksb0JBQW1CO0VBQ25CLGNBQWM7RUFDZCw0Q0FBNEM7QUFFaEQ7O0FBQ0E7RUFDSSxjQUFjO0VBQ2QsaUJBQWlCO0VBRWpCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsMENBQTBDO0VBQzFDLFVBQVU7QUFDZDs7QUFDQTtFQUNJLG9CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0FBRWxCOztBQUNBO0VBQ0ksY0FBYztFQUNkLHVCQUFzQjtFQUN0QixlQUFlO0FBRW5COztBQUFBO0VBQ0ksWUFBWTtFQUNaLG1CQUFtQjtFQUVuQixvR0FBb0c7RUFDcEcsY0FBYztFQUNkLHVCQUFzQjtBQUUxQjs7QUFBRTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCx1QkFBc0I7QUFHMUI7O0FBREU7RUFDRSxtQkFBbUI7QUFJdkI7O0FBRkU7RUFDRSxrQkFBa0I7RUFHbEIsZUFBZTtFQUNmLDRDQUE0QztFQUM1Qyx1QkFBdUI7RUFDdkIsY0FBYztFQUVkLGdCQUFnQjtBQUVwQjs7QUFBQTtFQUVRLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUNBQXlDO0VBQ3pDLHVCQUF1QjtFQUN2QixjQUFjO0VBRWQsOEJBQThCO0VBQzlCLDhCQUErQjtBQUN2QyIsImZpbGUiOiJ0b2tlbi1nZW5lcmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW57XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICBmbGV4LWVuZDtcclxufVxyXG4udGV4dHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbn1cclxuLnRleHQtaW5zaWRle1xyXG4gICAgLy8gY29sb3I6ICMwMDAwMDA7XHJcbiAgICAvLyBvcGFjaXR5OiAzNyU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJhY2tJY29ue1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMCUgMCUgMCUgMCU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogI0NDQ0NDQztcclxuICAgIC8vIG9wYWNpdHk6IDQwJTtcclxufVxyXG4ucGFyYXtcclxuICAgIGZvbnQtZmFtaWx5OlBvcHBpbnM7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE4cHgvMjJweCBQb3BwaW5zO1xyXG4gICAgLy8gb3BhY2l0eTogMzclO1xyXG59XHJcbi50b2tlbntcclxuICAgIGNvbG9yOiAjMDA0Qzk3O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvLyBmb250LXNpemU6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjVweDtcclxuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgYm9sZCA2MHB4LzExOHB4IFNGIFBybztcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuLmNhcmQtdGl0bGV7XHJcbiAgICBmb250LWZhbWlseTpQb3BwaW5zO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDA0Qzk3O1xyXG4gICAgLy8gb3BhY2l0eTogNjIlO1xyXG59XHJcbnB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEycHg7IFxyXG59XHJcbi5idXR0b25TY2Fue1xyXG4gICAgd2lkdGg6IDIyOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjhweDtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMxQkNEOUQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwNTFBMkQgMCUsICMwMDRDOTcgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAuYnV0dG9uQ29udGludWV7XHJcbiAgICB3aWR0aDogMTcwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NkVGRTtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjsgIFxyXG4gIH1cclxuICAuZnVsbC13aWR0aHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIC5jb250ZW50LXRleHR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyBmb250OiBub3JtYWwgbm9ybWFsIGJvbGQgMzJweC80M3B4IFNGIFBybztcclxuICAgIC8vIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCBtZWRpdW0gMzJweC80OHB4IFBvcHBpbnM7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzJweDtcclxuICAgIGNvbG9yOiAjQ0NDQ0NDO1xyXG4gICAgLy8gb3BhY2l0eTogMjAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4udGltZS10ZXh0e1xyXG4gICAgICAgIC8vIGZvbnQtc2l6ZTogNjFweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCBib2xkIDYxcHgvMjBweCBTRiBQcm87XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjYxcHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgLy8gb3BhY2l0eTogNzAlO1xyXG4gICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB3aGl0ZTsgXHJcbiAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMXB4IDtcclxuICAgIH1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenGenerationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-token-generation",
            templateUrl: "./token-generation.component.html",
            styleUrls: ["./token-generation.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
          }, {
            type: app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }]
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


      var _shared_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./shared/interceptors/token.interceptor */
      "Sc0o");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var ng_otp_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-otp-input */
      "9OaD"); // import { GestureConfig } from '@angular/material/core';
      // import { ToastrModule } from 'ngx-toastr';
      // AoT requires an exported function for factories


      function HttpLoaderFactory(httpClient) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](httpClient, "./assets/i18n/", ".json");
      }

      var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true
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
        providers: [{
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
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ng_otp_input__WEBPACK_IMPORTED_MODULE_14__["NgOtpInputModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
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
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ng_otp_input__WEBPACK_IMPORTED_MODULE_14__["NgOtpInputModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ng_otp_input__WEBPACK_IMPORTED_MODULE_14__["NgOtpInputModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
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
            }, // REQUIRED IF YOU USE JWT AUTHENTICATION
            {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
              useClass: _shared_interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_12__["TokenInterceptor"],
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
        redirectTo: 'sessions/branch-login',
        pathMatch: 'full'
      }, {
        path: '',
        component: _shared_components_layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__["AuthLayoutComponent"],
        children: [{
          path: 'sessions',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-sessions-sessions-module */
            [__webpack_require__.e("default~views-others-others-module~views-sessions-sessions-module"), __webpack_require__.e("views-sessions-sessions-module")]).then(__webpack_require__.bind(null,
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
            [__webpack_require__.e("default~views-others-others-module~views-sessions-sessions-module"), __webpack_require__.e("views-others-others-module")]).then(__webpack_require__.bind(null,
            /*! ./views/others/others.module */
            "KVVp")).then(function (m) {
              return m.OthersModule;
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
    "gIfQ":
    /*!*******************************************************************!*\
      !*** ./src/app/views/others/exit-screen/exit-screen.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ExitScreenComponent */

    /***/
    function gIfQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExitScreenComponent", function () {
        return ExitScreenComponent;
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


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/Dialog/dialog.service */
      "LP5l");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var ExitScreenComponent = /*#__PURE__*/function () {
        function ExitScreenComponent(router, dialogRef, dialogService) {
          _classCallCheck(this, ExitScreenComponent);

          this.router = router;
          this.dialogRef = dialogRef;
          this.dialogService = dialogService;
          this.titleMessage = "Are you sure you want to Exit the Screen ?";
        }

        _createClass(ExitScreenComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToClose",
          value: function goToClose() {
            this.dialogRef.close(); // this.router.navigateByUrl("/others/kioskHome");
          }
        }, {
          key: "feedBack",
          value: function feedBack() {
            this.dialogRef.close();
            this.dialogService.feedBack();
          }
        }]);

        return ExitScreenComponent;
      }();

      ExitScreenComponent.ɵfac = function ExitScreenComponent_Factory(t) {
        return new (t || ExitScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]));
      };

      ExitScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ExitScreenComponent,
        selectors: [["app-exit-screen"]],
        decls: 13,
        vars: 1,
        consts: [[1, "full-width"], [1, "text"], ["fxLayout", "column", "fxLayoutGap", "5%", "fxLayoutAlign", "space-between center", 1, ""], [1, "text-inside"], [1, "para"], ["src", "assets/images/logout.png", "alt", "", 1, "imageLogout"], ["fxLayout", "row", "fxLayoutGap", "20px"], ["mat-flat-button", "", 1, "buttonScan", 3, "click"], ["mat-flat-button", "", 1, "buttonContinue", 3, "click"]],
        template: function ExitScreenComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExitScreenComponent_Template_button_click_9_listener() {
              return ctx.feedBack();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "YES, EXIT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExitScreenComponent_Template_button_click_11_listener() {
              return ctx.goToClose();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " STAY LOGGED IN ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleMessage);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
        styles: [".contain[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.text[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding-top: 15px;\n}\n\n.text-inside[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.para[_ngcontent-%COMP%] {\n  color: #000000;\n  opacity: 62%;\n  font-size: 16px;\n}\n\n.backIcon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 0% 0% 0% 0%;\n  font-size: 20px;\n  color: #000000;\n  opacity: 40%;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 24px;\n  text-align: center;\n  color: #000000;\n  opacity: 62%;\n  font-weight: bold;\n}\n\np[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: sans-serif;\n  font-size: 12px;\n}\n\n.buttonScan[_ngcontent-%COMP%] {\n  width: 170px;\n  border-radius: 25px;\n  background-color: #f1f2f7;\n  color: #111111;\n  font-family: sans-serif;\n}\n\n.buttonContinue[_ngcontent-%COMP%] {\n  width: 170px;\n  border-radius: 25px;\n  background: transparent linear-gradient(90deg, #051a2d 0%, #004c97 100%) 0% 0% no-repeat padding-box;\n  color: #ffffff;\n  font-family: sans-serif;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n\n.content-text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: sans-serif;\n  font-size: 24px;\n  color: #000000;\n  opacity: 20%;\n  font-weight: 600;\n}\n\n.time-text[_ngcontent-%COMP%] {\n  text-align: center;\n  font: normal normal bold 40px/20px SF Pro;\n  letter-spacing: -0.61px;\n  color: #000000;\n  opacity: 70%;\n  -webkit-text-fill-color: white;\n  -webkit-text-stroke-width: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZXhpdC1zY3JlZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0FBRW5COztBQUFBO0VBR0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsY0FBYztFQUNkLFlBQVk7QUFFZDs7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZO0VBQ1osaUJBQWlCO0FBRW5COztBQUFBO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixlQUFlO0FBR2pCOztBQURBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLHVCQUF1QjtBQUl6Qjs7QUFGQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFFbkIsb0dBQ3VCO0VBQ3ZCLGNBQWM7RUFDZCx1QkFBdUI7QUFHekI7O0FBREE7RUFDRSxtQkFBbUI7QUFJckI7O0FBRkE7RUFDRSxrQkFBa0I7RUFFbEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixjQUFjO0VBQ2QsWUFBWTtFQUNaLGdCQUFnQjtBQUlsQjs7QUFGQTtFQUNFLGtCQUFrQjtFQUNsQix5Q0FBeUM7RUFDekMsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLDhCQUE4QjtBQUtoQyIsImZpbGUiOiJleGl0LXNjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbi50ZXh0IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxufVxyXG4udGV4dC1pbnNpZGUge1xyXG4gIC8vIGNvbG9yOiAjMDAwMDAwO1xyXG4gIC8vIG9wYWNpdHk6IDM3JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYXJhIHtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBvcGFjaXR5OiA2MiU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5iYWNrSWNvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDAlIDAlIDAlIDAlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBvcGFjaXR5OiA0MCU7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIG9wYWNpdHk6IDYyJTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5wIHtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmJ1dHRvblNjYW4ge1xyXG4gIHdpZHRoOiAxNzBweDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYyZjc7XHJcbiAgY29sb3I6ICMxMTExMTE7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn1cclxuLmJ1dHRvbkNvbnRpbnVlIHtcclxuICB3aWR0aDogMTcwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAvLyAgIGJhY2tncm91bmQtY29sb3I6ICMxYmNkOWQ7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDUxYTJkIDAlLCAjMDA0Yzk3IDEwMCUpIDAlIDAlXHJcbiAgICBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn1cclxuLmZ1bGwtd2lkdGgge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmNvbnRlbnQtdGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vIGZvbnQ6IG5vcm1hbCBub3JtYWwgYm9sZCAzMnB4LzQzcHggU0YgUHJvO1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBvcGFjaXR5OiAyMCU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4udGltZS10ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBib2xkIDQwcHgvMjBweCBTRiBQcm87XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjYxcHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgb3BhY2l0eTogNzAlO1xyXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB3aGl0ZTtcclxuICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAxcHg7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExitScreenComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-exit-screen",
            templateUrl: "./exit-screen.component.html",
            styleUrls: ["./exit-screen.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }, {
            type: app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]
          }];
        }, null);
      })();
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


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../notifications/notifications.component */
      "X2tk");
      /* harmony import */


      var _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../header-side/header-side.component */
      "Hkp+");
      /* harmony import */


      var _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../sidebar-side/sidebar-side.component */
      "UnY0");
      /* harmony import */


      var _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../sidebar-top/sidebar-top.component */
      "s0uO");

      function AdminLayoutComponent_app_header_side_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-side", 15);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

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

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

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

      function AdminLayoutComponent_span_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 21);
        }
      }

      function AdminLayoutComponent_app_footer_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-footer", 22);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "visible": a0
        };
      };

      var AdminLayoutComponent = /*#__PURE__*/function () {
        function AdminLayoutComponent(router, translate, themeService, layout, cdr, jwtAuth) {
          var _this19 = this;

          _classCallCheck(this, AdminLayoutComponent);

          this.router = router;
          this.translate = translate;
          this.themeService = themeService;
          this.layout = layout;
          this.cdr = cdr;
          this.jwtAuth = jwtAuth;
          this.isModuleLoading = false;
          this.scrollConfig = {};
          this.layoutConf = {};
          this.adminContainerClasses = {}; // Check Auth Token is valid

          this.jwtAuth.checkTokenIsValid().subscribe(); // Close sidenav after route change in mobile

          this.routerEventSub = router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
          })).subscribe(function (routeChange) {
            _this19.layout.adjustLayout({
              route: routeChange.url
            });

            _this19.scrollToTop();
          }); // Translator init

          var browserLang = translate.getBrowserLang();
          translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
        }

        _createClass(AdminLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this20 = this;

            // this.layoutConf = this.layout.layoutConf;
            this.layoutConfSub = this.layout.layoutConf$.subscribe(function (layoutConf) {
              _this20.layoutConf = layoutConf; // console.log(this.layoutConf);

              _this20.adminContainerClasses = _this20.updateAdminContainerClasses(_this20.layoutConf);

              _this20.cdr.markForCheck();
            }); // FOR MODULE LOADER FLAG

            this.moduleLoaderSub = this.router.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadStart"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["ResolveStart"]) {
                _this20.isModuleLoading = true;
              }

              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouteConfigLoadEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["ResolveEnd"]) {
                _this20.isModuleLoading = false;
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
            var _this21 = this;

            if (document) {
              setTimeout(function () {
                var element;

                if (_this21.layoutConf.topbarFixed) {
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
        decls: 20,
        vars: 22,
        consts: [[1, "app-admin-wrap", 3, "dir"], [3, "notificPanel", 4, "ngIf"], [3, "dir", "ngClass"], [3, "mouseenter", "mouseleave", 4, "ngIf"], [4, "ngIf"], ["id", "main-content-wrap", 1, "main-content-wrap", 3, "perfectScrollbar", "disabled"], ["id", "rightside-content-hold", 1, "rightside-content-hold", 3, "perfectScrollbar", "disabled"], ["class", "view-loader", "style", "position:fixed;", "fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], [1, "container-dynamic"], ["class", "m-auto", 4, "ngIf"], ["style", "margin: 0 -.33rem -.33rem", 4, "ngIf"], [1, "sidebar-backdrop", 3, "ngClass", "click"], ["mode", "over", "position", "end", 1, ""], ["notificationPanel", ""], ["fxLayout", "column", 1, "nofication-panel"], [3, "notificPanel"], [3, "mouseenter", "mouseleave"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "view-loader", 2, "position", "fixed"], [1, "spinner"], [1, "double-bounce1", "mat-bg-accent"], [1, "double-bounce2", "mat-bg-primary"], [1, "m-auto"], [2, "margin", "0 -.33rem -.33rem"]],
        template: function AdminLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminLayoutComponent_app_header_side_1_Template, 1, 1, "app-header-side", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdminLayoutComponent_app_sidebar_side_4_Template, 1, 0, "app-sidebar-side", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AdminLayoutComponent_app_sidebar_top_5_Template, 1, 0, "app-sidebar-top", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminLayoutComponent_app_header_side_7_Template, 1, 1, "app-header-side", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AdminLayoutComponent_div_9_Template, 4, 0, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-breadcrumb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AdminLayoutComponent_span_13_Template, 1, 0, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AdminLayoutComponent_app_footer_14_Template, 1, 0, "app-footer", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminLayoutComponent_Template_div_click_15_listener() {
              return ctx.closeSidebar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-sidenav", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-notifications", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dir", ctx.layoutConf == null ? null : ctx.layoutConf.dir);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layoutConf.navigationPos === "top");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate3"]("app-admin-container app-side-nav-container mat-drawer-transition sidebar-", ctx.layoutConf == null ? null : ctx.layoutConf.sidebarColor, " topbar-", ctx.layoutConf == null ? null : ctx.layoutConf.topbarColor, " footer-", ctx.layoutConf == null ? null : ctx.layoutConf.footerColor, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dir", ctx.layoutConf.dir)("ngClass", ctx.adminContainerClasses);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.layoutConf.footerFixed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.layoutConf.footerFixed);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.layoutConf.sidebarStyle !== "closed" && ctx.layoutConf.isMobile));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("notificPanel", _r7);
          }
        },
        directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Dir"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavContainer"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["DefaultClassDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavContent"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarDirective"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenav"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_14__["NotificationsComponent"], _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_15__["HeaderSideComponent"], _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_16__["SidebarSideComponent"], _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_17__["SidebarTopComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutAlignDirective"]],
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

          this.paramSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.getNavParam = this.paramSource.asObservable();
          this.searchItem = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.getSearchItem = this.searchItem.asObservable();
          this.sendCustomerId = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("");
          this.getCustomerId = this.sendCustomerId.asObservable();
          this.accountFormData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.transactionFormData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.denominationFormData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.loanFormData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.loanRepaymentData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.forexTransTypeData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.paymentInfoFormData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
          this.getforexTransTypeData = this.forexTransTypeData.asObservable();
          this.getaccountFormdata = this.accountFormData.asObservable();
          this.gettransactionFormdata = this.transactionFormData.asObservable();
          this.getdenominationFormdata = this.denominationFormData.asObservable();
          this.getloanFormdata = this.loanFormData.asObservable();
          this.getpaymentInfoFormdata = this.paymentInfoFormData.asObservable();
          this.getloanRepaymentData = this.loanRepaymentData.asObservable();
        }

        _createClass(DataService, [{
          key: "sendNavParam",
          value: function sendNavParam(params) {
            this.paramSource.next(params);
          }
        }, {
          key: "sendNavforexTransType",
          value: function sendNavforexTransType(params) {
            this.forexTransTypeData.next(params);
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
          key: "sendaccountFormData",
          value: function sendaccountFormData(params) {
            this.accountFormData.next(params);
          }
        }, {
          key: "sendtransactionFormData",
          value: function sendtransactionFormData(params) {
            this.transactionFormData.next(params);
          }
        }, {
          key: "sendloanFormData",
          value: function sendloanFormData(params) {
            this.loanFormData.next(params);
          }
        }, {
          key: "sendloanRepaymentData",
          value: function sendloanRepaymentData(params) {
            this.loanRepaymentData.next(params);
          }
        }, {
          key: "sendPaymentInfoFormData",
          value: function sendPaymentInfoFormData(params) {
            this.paymentInfoFormData.next(params);
          }
        }, {
          key: "sendDenominationFormData",
          value: function sendDenominationFormData(params) {
            this.denominationFormData.next(params);
          }
        }, {
          key: "removetransactionFormData",
          value: function removetransactionFormData(params) {
            this.transactionFormData.next(rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]);
          }
        }, {
          key: "removedenominationFormData",
          value: function removedenominationFormData(params) {
            this.denominationFormData.next(rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]);
          }
        }, {
          key: "removeloanFormData",
          value: function removeloanFormData(params) {
            this.denominationFormData.next(rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]);
          }
        }, {
          key: "removeaccountFormData",
          value: function removeaccountFormData(params) {
            this.accountFormData.next(rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]);
          }
        }, {
          key: "removePaymentInfoFormData",
          value: function removePaymentInfoFormData(params) {
            this.paymentInfoFormData.next(rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]);
          }
        }, {
          key: "removeNavParam",
          value: function removeNavParam(params) {
            this.paramSource.next(rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]);
          }
        }, {
          key: "removeloanRepaymentData",
          value: function removeloanRepaymentData(params) {
            this.loanRepaymentData.next(rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]);
          }
        }, {
          key: "formatCurrency",
          value: function formatCurrency(amount, currency) {
            if (amount != null && currency != null && currency.length > 2) {
              console.log("to check?", amount, currency);
              return new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: currency
              }).format(amount);
            }
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


      var _operations_operations_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./operations/operations.component */
      "IXDm");
      /* harmony import */


      var _angular_material_extensions_select_country__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular-material-extensions/select-country */
      "6xI8");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _toastr_toastr_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./toastr/toastr.component */
      "YJH2");
      /* harmony import */


      var _show_loader_show_loader_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./show-loader/show-loader.component */
      "No+0"); // ONLY REQUIRED FOR **SIDE** NAVIGATION LAYOUT
      // ONLY REQUIRED FOR **TOP** NAVIGATION LAYOUT
      // ALWAYS REQUIRED 


      var components = [_header_top_header_top_component__WEBPACK_IMPORTED_MODULE_12__["HeaderTopComponent"], _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_13__["SidebarTopComponent"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__["SidenavComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__["NotificationsComponent"], _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_11__["SidebarSideComponent"], _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_10__["HeaderSideComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_14__["AdminLayoutComponent"], _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_15__["AuthLayoutComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__["BreadcrumbComponent"], _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_19__["AppComfirmComponent"], _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_20__["AppLoaderComponent"], _button_loading_button_loading_component__WEBPACK_IMPORTED_MODULE_21__["ButtonLoadingComponent"], _bottom_sheet_share_bottom_sheet_share_component__WEBPACK_IMPORTED_MODULE_22__["BottomSheetShareComponent"], _operations_operations_component__WEBPACK_IMPORTED_MODULE_23__["OperationsComponent"], _toastr_toastr_component__WEBPACK_IMPORTED_MODULE_26__["ToastrComponent"], _show_loader_show_loader_component__WEBPACK_IMPORTED_MODULE_27__["ShowLoaderComponent"]];

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
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"], _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_7__["SharedPipesModule"], _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_9__["SharedDirectivesModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_2__["SharedMaterialModule"], _angular_material_extensions_select_country__WEBPACK_IMPORTED_MODULE_24__["MatSelectCountryModule"].forRoot('de'), ngx_toastr__WEBPACK_IMPORTED_MODULE_25__["ToastrModule"].forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedComponentsModule, {
          declarations: [_header_top_header_top_component__WEBPACK_IMPORTED_MODULE_12__["HeaderTopComponent"], _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_13__["SidebarTopComponent"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__["SidenavComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__["NotificationsComponent"], _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_11__["SidebarSideComponent"], _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_10__["HeaderSideComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_14__["AdminLayoutComponent"], _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_15__["AuthLayoutComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__["BreadcrumbComponent"], _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_19__["AppComfirmComponent"], _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_20__["AppLoaderComponent"], _button_loading_button_loading_component__WEBPACK_IMPORTED_MODULE_21__["ButtonLoadingComponent"], _bottom_sheet_share_bottom_sheet_share_component__WEBPACK_IMPORTED_MODULE_22__["BottomSheetShareComponent"], _operations_operations_component__WEBPACK_IMPORTED_MODULE_23__["OperationsComponent"], _toastr_toastr_component__WEBPACK_IMPORTED_MODULE_26__["ToastrComponent"], _show_loader_show_loader_component__WEBPACK_IMPORTED_MODULE_27__["ShowLoaderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"], _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_7__["SharedPipesModule"], _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_9__["SharedDirectivesModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_2__["SharedMaterialModule"], _angular_material_extensions_select_country__WEBPACK_IMPORTED_MODULE_24__["MatSelectCountryModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_25__["ToastrModule"]],
          exports: [_header_top_header_top_component__WEBPACK_IMPORTED_MODULE_12__["HeaderTopComponent"], _sidebar_top_sidebar_top_component__WEBPACK_IMPORTED_MODULE_13__["SidebarTopComponent"], _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_17__["SidenavComponent"], _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_16__["NotificationsComponent"], _sidebar_side_sidebar_side_component__WEBPACK_IMPORTED_MODULE_11__["SidebarSideComponent"], _header_side_header_side_component__WEBPACK_IMPORTED_MODULE_10__["HeaderSideComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_14__["AdminLayoutComponent"], _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_15__["AuthLayoutComponent"], _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__["BreadcrumbComponent"], _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_19__["AppComfirmComponent"], _services_app_loader_app_loader_component__WEBPACK_IMPORTED_MODULE_20__["AppLoaderComponent"], _button_loading_button_loading_component__WEBPACK_IMPORTED_MODULE_21__["ButtonLoadingComponent"], _bottom_sheet_share_bottom_sheet_share_component__WEBPACK_IMPORTED_MODULE_22__["BottomSheetShareComponent"], _operations_operations_component__WEBPACK_IMPORTED_MODULE_23__["OperationsComponent"], _toastr_toastr_component__WEBPACK_IMPORTED_MODULE_26__["ToastrComponent"], _show_loader_show_loader_component__WEBPACK_IMPORTED_MODULE_27__["ShowLoaderComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedComponentsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"], _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_7__["SharedPipesModule"], _directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_9__["SharedDirectivesModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_2__["SharedMaterialModule"], _angular_material_extensions_select_country__WEBPACK_IMPORTED_MODULE_24__["MatSelectCountryModule"].forRoot('de'), ngx_toastr__WEBPACK_IMPORTED_MODULE_25__["ToastrModule"].forRoot()],
            declarations: components,
            exports: components
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

      var directives = [_scroll_to_directive__WEBPACK_IMPORTED_MODULE_2__["ScrollToDirective"], _dropdown_directive__WEBPACK_IMPORTED_MODULE_3__["AppDropdownDirective"], _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_4__["DropdownAnchorDirective"], _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_5__["DropdownLinkDirective"]];

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
          declarations: [_scroll_to_directive__WEBPACK_IMPORTED_MODULE_2__["ScrollToDirective"], _dropdown_directive__WEBPACK_IMPORTED_MODULE_3__["AppDropdownDirective"], _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_4__["DropdownAnchorDirective"], _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_5__["DropdownLinkDirective"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_scroll_to_directive__WEBPACK_IMPORTED_MODULE_2__["ScrollToDirective"], _dropdown_directive__WEBPACK_IMPORTED_MODULE_3__["AppDropdownDirective"], _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_4__["DropdownAnchorDirective"], _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_5__["DropdownLinkDirective"]]
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../Dialog/dialog.service */
      "LP5l");

      var DEMO_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlNha3RoaXZlbCBNIiwiaWF0IjoxNTE2MjM5MDIyfQ.bBICv7tbGE5acaOULVhq_q9O50dHiYDnSfQYg3_Av1k";
      var DEMO_USER = {
        id: "5b700c45639d2c0c54b354ba",
        displayName: "Sakthivel M",
        role: "SA"
      };

      var JwtAuthService = /*#__PURE__*/function () {
        function JwtAuthService(ls, http, router, route, dialogService) {
          var _this23 = this;

          _classCallCheck(this, JwtAuthService);

          this.ls = ls;
          this.http = http;
          this.router = router;
          this.route = route;
          this.dialogService = dialogService;
          this.user = {};
          this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](this.user);
          this.JWT_TOKEN = "JWT_TOKEN";
          this.APP_USER = "ICUST_USERS";
          this.route.queryParams.subscribe(function (params) {
            return _this23["return"] = params['return'] || '/';
          });
        }

        _createClass(JwtAuthService, [{
          key: "signin",
          value: function signin() {
            var _this24 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({
              token: DEMO_TOKEN,
              user: DEMO_USER
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              _this24.setUserAndToken(res.token, res.user, !!res);

              _this24.signingIn = false;
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
            this.setUserAndToken(null, null, false); // this.router.navigateByUrl("sessions/signin");

            this.dialogService.clickExit();
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
          key: "encodeData",
          value: function encodeData(data) {
            return btoa(data);
          }
        }, {
          key: "getEncryptedToken",
          value: function getEncryptedToken() {
            var user = this.getUser();
            var encodedUser = this.encodeData(JSON.stringify(user));
            return encodedUser;
          }
        }, {
          key: "setUserAndToken",
          value: function setUserAndToken(token, user, isAuthenticated) {
            this.isAuthenticated = isAuthenticated;
            this.token = token;
            this.user = user;
            this.user$.next(user);
            this.ls.setItem(this.JWT_TOKEN, token);
            console.log("user::", user);
            this.ls.setItem(this.APP_USER, user);
          }
        }]);

        return JwtAuthService;
      }();

      JwtAuthService.ɵfac = function JwtAuthService_Factory(t) {
        return new (t || JwtAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_local_store_service__WEBPACK_IMPORTED_MODULE_1__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]));
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
          }, {
            type: _Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]
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
      "AytR"); // import { environment } from "app/environments/environment.prod";


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
            return environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].ICUST_URL;
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
            prefix: "",
            firstName: "",
            lastName: "",
            primaryEmailAdress: "",
            phoneNumber: ""
          }); //   getOtp(otp:Object) {
          //     return this.http.post<any>(`${API_URL}/rest/opt/generateOtp`,otp);
          //   }
          //   getDropDownValues(entityName:string){
          //     return this.http.get<string[]>(`${API_URL}/rest/data/getMasterData?entityName=${entityName}`)
          // }
          //Error Handler

          this.errorHandler = function (errorResp) {
            console.error("Error : " + errorResp.message);
            console.error("status : " + errorResp.status);

            _this26.showMessageService.errorMessage(errorResp.status, errorResp);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorResp);
          };
        }

        _createClass(ApiService, [{
          key: "getOtp",
          value: function getOtp(data) {
            // return this.http.post<any>(`${API_URL}/rest/otp/generateOtp`,data).pipe(catchError(this.errorHandler));
            return this.http.post("".concat(API_URL, "/rest/otp/generateOtp"), data);
          }
        }, {
          key: "verifyOtp",
          value: function verifyOtp(data) {
            return this.http.put("".concat(API_URL, "/rest/otp/validateOtp"), data); // return this.http.put<any>(`${API_URL}/rest/otp/validateOtp`,data).pipe(catchError(this.errorHandler));
          }
        }, {
          key: "saveofCashWithdraw",
          value: function saveofCashWithdraw(data) {
            return this.http.post("".concat(API_URL, "/cash-withdrawal-service"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "saveofChequeWithdraw",
          value: function saveofChequeWithdraw(data) {
            // return this.http.post<any>(`${API_URL}/cheque-withdrawal`,data);
            return this.http.post("".concat(API_URL, "/cheque-withdrawal"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "chequeDepositSave",
          value: function chequeDepositSave(data) {
            return this.http.post("".concat(API_URL, "/cheque-deposit/api"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "gettingTransactionDetails",
          value: function gettingTransactionDetails(phoneNumber) {
            return this.http.get("".concat(API_URL, "/customerdata/getPhoneNo/").concat(phoneNumber), phoneNumber).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "gettingLoanAccDetails",
          value: function gettingLoanAccDetails(phoneNumber, module) {
            return this.http.get("".concat(API_URL, "/customerdata/fetchLoanInfo?phoneNumber=").concat(phoneNumber, "&module=").concat(module)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "generateToken",
          value: function generateToken(data) {
            return this.http.post("".concat(API_URL, "/token/api"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getTokenEstimatedWaitingTime",
          value: function getTokenEstimatedWaitingTime() {
            return this.http.get("".concat(API_URL, "/token/api/generate-token-slips")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "saveofChequeDeposit",
          value: function saveofChequeDeposit(data) {
            return this.http.post("".concat(API_URL, "/cheque-deposit/api"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "saveofCashDeposit",
          value: function saveofCashDeposit(data) {
            return this.http.post("".concat(API_URL, "/cash-deposit/api"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchBranchInfoByBranchName",
          value: function fetchBranchInfoByBranchName(branchName) {
            return this.http.get("".concat(API_URL, "/branch/fetchBranchInfoByBranchName?branchName=").concat(branchName)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler)); // http://192.168.0.14:8081/Icust-Digital-Banking/branch/fetchBranchInfoByBranchName?branchName=Koramangala
          }
        }, {
          key: "saveofCashwithdraw",
          value: function saveofCashwithdraw(data) {
            return this.http.post("".concat(API_URL, "/cash-deposit/api"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchingQRcodeforToken",
          value: function fetchingQRcodeforToken(accountId) {
            return this.http.get("".concat(API_URL, "/token/api/fetch-qr-code/").concat(accountId), accountId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "uploadingQRcodeforToken",
          value: function uploadingQRcodeforToken(data) {
            var payload = new FormData();
            payload.append("file", data);
            return this.http.post("".concat(API_URL, "/token/api/qr-code-reader"), payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getCountryValues",
          value: function getCountryValues() {
            return this.http.get("".concat(API_URL, "/currency")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchByaccNum",
          value: function fetchByaccNum(accNum) {
            return this.http.get("".concat(API_URL, "/accountdata/accountDetails/").concat(accNum)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchByLoanInfoByLoanId",
          value: function fetchByLoanInfoByLoanId(loanAccountId, module) {
            return this.http.get("".concat(API_URL, "/customerdata/fetchLoanInfoByLoanId?loanAccountId=").concat(loanAccountId, "&module=").concat(module)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "addNewAccountToDisburse",
          value: function addNewAccountToDisburse(model) {
            return this.http.post("".concat(API_URL, "/cash-deposit/api/saveDisbursementAccInfo"), model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchDisbursementAccInfo",
          value: function fetchDisbursementAccInfo(customerId) {
            return this.http.get("".concat(API_URL, "/cash-deposit/api/fetchDisbursementAccInfo?customerId=").concat(customerId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchByaccDeatilsoncustId",
          value: function fetchByaccDeatilsoncustId(cusId) {
            return this.http.get("".concat(API_URL, "/customerdata/fetchCustomerDetails?customerId=").concat(cusId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAppointmentId",
          value: function getAppointmentId(appointmentId) {
            return this.http.get("".concat(API_URL, "/cash-deposit/api/fetchTransactionInfoByAppointmentId?appointmentId=").concat(appointmentId));
          }
        }, {
          key: "fetchExchangeRateForCurrency",
          value: function fetchExchangeRateForCurrency(currency1, currency2) {
            return this.http.get("".concat(API_URL, "/currency-api/fetchExchangeRateForCurrency?currency1=").concat(currency1, "&currency2=").concat(currency2)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchBankInfoByBranchCode",
          value: function fetchBankInfoByBranchCode(branchCode) {
            return this.http.get("".concat(API_URL, "/bank/fetchBankInfoByBranchCode?branchCode=").concat(branchCode)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchChequeType",
          value: function fetchChequeType(entityName) {
            return this.http.get("".concat(API_URL, "/rest/data/getMasterData?entityName=").concat(entityName)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchChargeDetails",
          value: function fetchChargeDetails(accountId) {
            return this.http.get("".concat(API_URL, "/accountdata/getChargeDetails?accountId=").concat(accountId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "searchNames",
          value: function searchNames(name) {
            return this.http.get("".concat(API_URL, "/customerdata/fetchCustomers/").concat(name)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getCustomerByCustomerID",
          value: function getCustomerByCustomerID(key, value) {
            return this.http.get("".concat(API_URL, "/customerdata/fetchCustomers?").concat(key, "=").concat(value));
          }
        }, {
          key: "getBranchforKiosk",
          value: function getBranchforKiosk() {
            return this.http.get("".concat(API_URL, "/branch")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getTransactionBranch",
          value: function getTransactionBranch(account_branch) {
            return this.http.get("".concat(API_URL, "/rest/data/getMasterData?entityName=").concat(account_branch)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "storeFeedbackInfo",
          value: function storeFeedbackInfo(data) {
            return this.http.post("".concat(API_URL, "/customerdata/storeFeedbackInfo"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchKioskSystemDetails",
          value: function fetchKioskSystemDetails() {
            return this.http.get("".concat(API_URL, "/kioskSystem/fetchKioskSystemDetails")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "goToLogin",
          value: function goToLogin(data) {
            return this.http.post("".concat(API_URL, "/kioskSystem/login"), data);
          }
        }, {
          key: "generateOtp",
          value: function generateOtp(data) {
            return this.http.post("".concat(API_URL, "/kioskSystem/generateOtp"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
          }
        }, {
          key: "fetchMobileOrEmail",
          value: function fetchMobileOrEmail(sysCode) {
            return this.http.get("".concat(API_URL, "/kioskSystem/fetchMobileOrEmail?kioskSystemCode=").concat(sysCode)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
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
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: "root"
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
            var _this27 = this;

            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var sidebarStyle;
            this.isMobile = this.isSm();
            this.currentRoute = options.route || this.currentRoute;
            sidebarStyle = this.isMobile ? 'closed' : 'full';

            if (this.currentRoute) {
              this.fullWidthRoutes.forEach(function (route) {
                if (_this27.currentRoute.indexOf(route) !== -1) {
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
            var _this28 = this;

            this.menuItemsSub = this.navService.menuItems$.subscribe(function (menuItem) {
              _this28.menuItems = menuItem.filter(function (item) {
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
    "ucp7":
    /*!*********************************************************************!*\
      !*** ./src/app/views/others/authenticate/authenticate.component.ts ***!
      \*********************************************************************/

    /*! exports provided: AuthenticateComponent */

    /***/
    function ucp7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticateComponent", function () {
        return AuthenticateComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var AuthenticateComponent = /*#__PURE__*/function () {
        function AuthenticateComponent(router, dialogRef) {
          _classCallCheck(this, AuthenticateComponent);

          this.router = router;
          this.dialogRef = dialogRef;
          this.titleMessage = "Please use your fingerprint to authenticate";
          this.contentMessage = "Please place your thumb on the fingerprint reader to proceed.";
        }

        _createClass(AuthenticateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToClose",
          value: function goToClose() {
            this.dialogRef.close();
          }
        }, {
          key: "goToScanner",
          value: function goToScanner() {
            this.dialogRef.close(); // this.router.navigateByUrl('/others/scanner');
          }
        }]);

        return AuthenticateComponent;
      }();

      AuthenticateComponent.ɵfac = function AuthenticateComponent_Factory(t) {
        return new (t || AuthenticateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
      };

      AuthenticateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthenticateComponent,
        selectors: [["app-authenticate"]],
        decls: 19,
        vars: 2,
        consts: [[1, "full-width"], ["fxLayout", "row", 1, "contain"], [1, "backIcon", 3, "click"], [1, "text"], ["fxLayout", "column", "fxLayoutGap", "5%", "fxLayoutAlign", "space-between center", 1, ""], [1, "card-title"], [1, "para"], [1, "matIcon"], ["mat-flat-button", "", 1, "buttonScan", 3, "click"]],
        template: function AuthenticateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticateComponent_Template_mat_icon_click_2_listener() {
              return ctx.goToClose();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "fingerprint");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticateComponent_Template_button_click_17_listener() {
              return ctx.goToScanner();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "SCAN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contentMessage);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
        styles: [".contain[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.text[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding-top: 25px;\n}\n\n.backIcon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 0% 0% 0% 0%;\n  font-size: 20px;\n  color: #000000;\n  opacity: 40%;\n}\n\n.para[_ngcontent-%COMP%] {\n  color: #000000;\n  opacity: 37%;\n  text-align: center;\n}\n\n.matIcon[_ngcontent-%COMP%] {\n  color: #4BADF7;\n  padding-right: 4rem;\n  font-size: 6rem;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 24px;\n  text-align: center;\n  color: #000000;\n  opacity: 62%;\n}\n\np[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: sans-serif;\n  font-size: 12px;\n}\n\n.buttonScan[_ngcontent-%COMP%] {\n  width: 170px;\n  border-radius: 25px;\n  background-color: #456EFE;\n  color: #FFFFFF;\n  font-family: sans-serif;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXV0aGVudGljYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQTBCO0FBQzlCOztBQUNBO0VBQ0ksdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUVyQjs7QUFBQTtFQUNJLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0FBR2hCOztBQURBO0VBQ0ksY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7QUFJdEI7O0FBRkE7RUFDSSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7QUFLbkI7O0FBSEE7RUFDSSx1QkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsWUFBWTtBQU1oQjs7QUFKQTtFQUNJLGNBQWM7RUFDZCx1QkFBc0I7RUFDdEIsZUFBZTtBQU9uQjs7QUFMQTtFQUNJLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCx1QkFBc0I7QUFRMUI7O0FBTkU7RUFDRSxtQkFBbUI7QUFTdkIiLCJmaWxlIjoiYXV0aGVudGljYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW57XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICBmbGV4LWVuZDtcclxufVxyXG4udGV4dHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbn1cclxuLmJhY2tJY29ue1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMCUgMCUgMCUgMCU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIG9wYWNpdHk6IDQwJTtcclxufVxyXG4ucGFyYXtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgb3BhY2l0eTogMzclO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5tYXRJY29ue1xyXG4gICAgY29sb3I6ICM0QkFERjc7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cmVtO1xyXG4gICAgZm9udC1zaXplOiA2cmVtO1xyXG59XHJcbi5jYXJkLXRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgb3BhY2l0eTogNjIlO1xyXG59XHJcbnB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEycHg7IFxyXG59XHJcbi5idXR0b25TY2Fue1xyXG4gICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTZFRkU7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC5mdWxsLXdpZHRoe1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-authenticate',
            templateUrl: './authenticate.component.html',
            styleUrls: ['./authenticate.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }];
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


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/shared/services/common.service */
      "7o2P");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var app_views_others_search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! app/views/others/search/search.component */
      "Adj1");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var HeaderTopComponent = /*#__PURE__*/function () {
        function HeaderTopComponent(layout, navService, themeService, translate, renderer, jwtAuth, apiService, ls, commonService, dialog) {
          var _this29 = this;

          _classCallCheck(this, HeaderTopComponent);

          this.layout = layout;
          this.navService = navService;
          this.themeService = themeService;
          this.translate = translate;
          this.renderer = renderer;
          this.jwtAuth = jwtAuth;
          this.apiService = apiService;
          this.ls = ls;
          this.commonService = commonService;
          this.dialog = dialog;
          this.rumangoThemes = [];
          this.currentLang = 'en';
          this.availableLangs = [{
            name: 'English',
            code: 'en'
          }, {
            name: 'Spanish',
            code: 'es'
          }];
          this.subscriptionName = this.commonService.getNotificationUpdate().subscribe(function (message) {
            console.log('message :: ', message);
            _this29.notificationCount = message.noOfMessages;
          });
        }

        _createClass(HeaderTopComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this30 = this;

            if (this.phoneNumber !== null) {
              this.gettingallTansactionDetails(this.phoneNumber);
            } else {
              this.fullname = localStorage.getItem("custholderName");
            }

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
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.menuItemSub.unsubscribe();
            this.subscriptionName.unsubscribe();
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
          } //search implementation

        }, {
          key: "onSearch",
          value: function onSearch() {
            var dialogRef = this.dialog.open(app_views_others_search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"], {
              width: '720px',
              disableClose: true,
              panelClass: "custom"
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("Dialog result: ".concat(result));
            });
          }
        }, {
          key: "gettingallTansactionDetails",
          value: function gettingallTansactionDetails(phoneNumber) {
            var _this31 = this;

            this.phoneNumber = localStorage.getItem("phonenumFromLogin");
            this.apiService.gettingTransactionDetails(this.phoneNumber).subscribe(function (allTransactionResp) {
              _this31.ls.setItem("customerId", allTransactionResp.customerId);

              console.log("All Transaction Details in Header", allTransactionResp, allTransactionResp.firstName + ' ' + allTransactionResp.firstName);
              _this31.fullname = (allTransactionResp.firstName ? allTransactionResp.firstName + ' ' : ' ') + (allTransactionResp.middleName ? allTransactionResp.middleName + ' ' : ' ') + (allTransactionResp.lastName ? allTransactionResp.lastName : ' ');
            });
          }
        }]);

        return HeaderTopComponent;
      }();

      HeaderTopComponent.ɵfac = function HeaderTopComponent_Factory(t) {
        return new (t || HeaderTopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_2__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_5__["JwtAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_7__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]));
      };

      HeaderTopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderTopComponent,
        selectors: [["app-header-top"]],
        inputs: {
          notificPanel: "notificPanel"
        },
        decls: 9,
        vars: 0,
        consts: [[1, "header-topnav", "mat-elevation-z2", "hdrtopnav"], [1, "container"], [1, "icon"], ["title", "logout", 1, "fltrt"], [1, "logouticon", 3, "click"], [1, "branchName", 2, "margin-right", "5%", "width", "100%"]],
        template: function HeaderTopComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderTopComponent_Template_mat_icon_click_4_listener() {
              return ctx.jwtAuth.signout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "power_settings_new");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " KN - Kasthuri Nagar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"]],
        styles: [".topbar-branding[_ngcontent-%COMP%] {\n  line-height: 30px;\n  margin-left: 5%;\n}\n.icons-padding[_ngcontent-%COMP%] {\n  margin-right: 5%;\n  line-height: 60px;\n}\n.fltrt[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 10px;\n  padding-top: 10px;\n}\n.icon[_ngcontent-%COMP%] {\n  position: fixed;\n  background-color: white;\n  left: 0%;\n  right: 0%;\n}\n.logouticon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #2030e0;\n  margin-left: 50%;\n  position: relative;\n  overflow: hidden;\n  display: flex;\n}\n.branchName[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.hdrtopnav[_ngcontent-%COMP%] {\n  box-shadow: none;\n  background-color: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaGVhZGVyLXRvcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBQ0g7RUFDSSxpQkFBaUI7RUFDakIsZUFBZTtBQUNuQjtBQUNBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUVyQjtBQUFBO0VBRUksWUFBVztFQUVYLGtCQUFrQjtFQUNsQixpQkFBZ0I7QUFDcEI7QUFDQTtFQUNJLGVBQWM7RUFDZCx1QkFBdUI7RUFDdkIsUUFBUTtFQUNSLFNBQVE7QUFFWjtBQUFBO0VBRUksZUFBZTtFQUNmLGNBQWE7RUFDYixnQkFBZ0I7RUFDZixrQkFBaUI7RUFDakIsZ0JBQWU7RUFDZixhQUFZO0FBRWpCO0FBQUE7RUFDSSxnQkFBZTtBQUduQjtBQURBO0VBRUksZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUc3QiIsImZpbGUiOiJoZWFkZXItdG9wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmhlYWRlci10b3BuYXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU2RUZFO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG59ICovXHJcbi50b3BiYXItYnJhbmRpbmd7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG4uaWNvbnMtcGFkZGluZ3tcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICBsaW5lLWhlaWdodDogNjBweDtcclxufVxyXG4uZmx0cnRcclxue1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDoyMGNtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6MTBweDtcclxufVxyXG4uaWNvbntcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBsZWZ0OiAwJTtcclxuICAgIHJpZ2h0OjAlO1xyXG59XHJcbi5sb2dvdXRpY29uXHJcbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiMyMDMwZTA7XHJcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICBkaXNwbGF5OmZsZXg7XHJcbn1cclxuLmJyYW5jaE5hbWV7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbn1cclxuLmhkcnRvcG5hdlxyXG57XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcclxufVxyXG5cclxuIl19 */"]
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
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_7__["LocalStoreService"]
          }, {
            type: app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]
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
            var i = 0;

            while (i < this.errorData.length) {
              if (this.errorData[i].code === status) {
                var errCode = status.toString();
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
      /* harmony import */


      var _angular_material_extensions_select_country__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular-material-extensions/select-country */
      "6xI8");

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
        imports: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_36__["MatMomentDateModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_20__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"], _angular_material_extensions_select_country__WEBPACK_IMPORTED_MODULE_37__["MatSelectCountryModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedMaterialModule, {
          exports: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_36__["MatMomentDateModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_20__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"], _angular_material_extensions_select_country__WEBPACK_IMPORTED_MODULE_37__["MatSelectCountryModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedMaterialModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__["MatCheckboxModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_33__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_12__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_36__["MatMomentDateModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_20__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"], _angular_material_extensions_select_country__WEBPACK_IMPORTED_MODULE_37__["MatSelectCountryModule"]]
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