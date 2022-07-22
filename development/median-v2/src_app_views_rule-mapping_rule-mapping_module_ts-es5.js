(function () {
  "use strict";

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_rule-mapping_rule-mapping_module_ts"], {
    /***/
    74982:
    /*!***********************************************************************!*\
      !*** ./src/app/views/rule-mapping/conversion/conversion.component.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConversionComponent": function ConversionComponent() {
          return (
            /* binding */
            _ConversionComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/services/add-system.service */
      91973);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/rule.service */
      50511);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _c0 = function _c0() {
        return ["/excel-mapping"];
      };

      var _ConversionComponent = /*#__PURE__*/function () {
        function _ConversionComponent(rulelist, router, addSystem, fb) {
          _classCallCheck(this, _ConversionComponent);

          this.rulelist = rulelist;
          this.router = router;
          this.addSystem = addSystem;
          this.fb = fb;
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
          this.dtOptions = {};
          this.ruleMappingListResp = [];
        }

        _createClass(_ConversionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.conversionForm = this.fb.group({
              FCUBS_HEADER: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              Content_Type: [""]
            });
          }
        }, {
          key: "process",
          value: function process() {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("POST", "".concat(src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/message/readMessage"));
            var xmlDoc;
            var self = this;

            xmlhttp.onreadystatechange = function () {
              if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                console.log(xmlhttp);
                self.dataResp = this.response;
              } else if (xmlhttp.readyState == 4 && xmlhttp.status == 400) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  text: "Provided Input is incorrect",
                  icon: 'error'
                });
              }
            };

            if (this.conversionForm.value.Content_Type === "json") {
              xmlhttp.setRequestHeader("Content-Type", "application/json");
            } else if (this.conversionForm.value.Content_Type === "xml") {
              xmlhttp.setRequestHeader("Content-Type", "application/xml");
            }

            xmlhttp.send(this.conversionForm.value.FCUBS_HEADER);
          }
        }, {
          key: "onSelect",
          value: function onSelect(event) {
            this.conversionForm.get('FCUBS_HEADER').setValue('');
            this.dataResp = null;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Do not forget to unsubscribe the event
            this.dtTrigger.unsubscribe();
          }
        }]);

        return _ConversionComponent;
      }();

      _ConversionComponent.ɵfac = function ConversionComponent_Factory(t) {
        return new (t || _ConversionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_2__.RuleService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_0__.AddSystemService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder));
      };

      _ConversionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _ConversionComponent,
        selectors: [["npr-conversion"]],
        decls: 37,
        vars: 5,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], ["novalidate", "", 3, "formGroup"], [1, "col-lg-3"], [2, "font-weight", "bold"], ["formControlName", "Content_Type", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["value", "xml"], ["value", "json"], [2, "width", "100%"], [2, "margin-top", "2%"], ["id", "exampleFormControlTextarea1", "rows", "15", "formControlName", "FCUBS_HEADER", 1, "form-control", "rounded-0", 2, "width", "80%"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], ["id", "exampleFormControlTextarea1", "rows", "15", 1, "form-control", "rounded-0", 2, "width", "80%"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], [1, "col-auto"], ["routerLinkActive", "router-link-active", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"]],
        template: function ConversionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Conversion");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Content Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ConversionComponent_Template_select_change_10_listener($event) {
              return ctx.onSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Xml");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Json");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "table", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Request");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Response Body");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "tr", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "textarea", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConversionComponent_Template_button_click_28_listener() {
              return ctx.process();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, " Process ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "textarea", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.conversionForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.conversionForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.dataResp);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](4, _c0));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb252ZXJzaW9uLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    7622:
    /*!*****************************************************************************************!*\
      !*** ./src/app/views/rule-mapping/rule-mapping-create/rule-mapping-create.component.ts ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RuleMappingCreateComponent": function RuleMappingCreateComponent() {
          return (
            /* binding */
            _RuleMappingCreateComponent
          );
        },

        /* harmony export */
        "MdmtMessageMapping": function MdmtMessageMapping() {
          return (
            /* binding */
            _MdmtMessageMapping
          );
        },

        /* harmony export */
        "MdmtMessageMappingDet": function MdmtMessageMappingDet() {
          return (
            /* binding */
            _MdmtMessageMappingDet
          );
        },

        /* harmony export */
        "MdmtMsgTransDetails": function MdmtMsgTransDetails() {
          return (
            /* binding */
            _MdmtMsgTransDetails
          );
        },

        /* harmony export */
        "ruleMapDto": function ruleMapDto() {
          return (
            /* binding */
            _ruleMapDto
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      1707);
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


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/rule.service */
      50511);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      77382);
      /* harmony import */


      var src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/add-system.service */
      91973);
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      31443);
      /* harmony import */


      var src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/guards/can-deactivate.guard */
      50215);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ng-select/ng-select */
      88660);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function RuleMappingCreateComponent_ng_option_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ng-option", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var extsys_r12 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", extsys_r12)("hidden", extsys_r12 == ctx_r0.sourseSys);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", extsys_r12, " ");
        }
      }

      function RuleMappingCreateComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "select", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RuleMappingCreateComponent_div_25_Template_select_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r13.onSelectionOFMessageType($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Incoming ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " Outgoing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingCreateComponent_div_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingCreateComponent_div_51_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "select", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RuleMappingCreateComponent_div_51_Template_select_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r15.msgTypeOfDestination($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Incoming ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " Outgoing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingCreateComponent_div_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingCreateComponent_div_68_ng_container_2_label_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Source System");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingCreateComponent_div_68_ng_container_2_ng_container_9_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Field No");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingCreateComponent_div_68_ng_container_2_ng_container_9_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tag_r32 = ctx.$implicit;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r31["try"](tag_r32.messageKey))("value", tag_r32.messageKey);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", tag_r32.messageKey, " ", tag_r32.messagebasis, "");
        }
      }

      function RuleMappingCreateComponent_div_68_ng_container_2_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RuleMappingCreateComponent_div_68_ng_container_2_ng_container_9_label_1_Template, 2, 0, "label", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "select", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RuleMappingCreateComponent_div_68_ng_container_2_ng_container_9_Template_select_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35);

            var i_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r33.onselectOfFieldNo($event, i_r20);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, RuleMappingCreateComponent_div_68_ng_container_2_ng_container_9_option_3_Template, 2, 4, "option", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r20 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r22.updateRuleMappingSrc);
        }
      }

      function RuleMappingCreateComponent_div_68_ng_container_2_ng_container_10_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Tag");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingCreateComponent_div_68_ng_container_2_ng_container_10_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tag_r39 = ctx.$implicit;

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r38["try"](tag_r39.messageKey))("value", tag_r39.messageKey);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", tag_r39.messageKey, " ", tag_r39.messagebasis, "");
        }
      }

      function RuleMappingCreateComponent_div_68_ng_container_2_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RuleMappingCreateComponent_div_68_ng_container_2_ng_container_10_label_1_Template, 2, 0, "label", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "select", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RuleMappingCreateComponent_div_68_ng_container_2_ng_container_10_Template_select_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r42);

            var i_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r40.onselectOfFieldNo($event, i_r20);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, RuleMappingCreateComponent_div_68_ng_container_2_ng_container_10_option_3_Template, 2, 4, "option", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r20 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r23.updateRuleMappingSrc);
        }
      }

      function RuleMappingCreateComponent_div_68_ng_container_2_ng_container_11_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Table Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingCreateComponent_div_68_ng_container_2_ng_container_11_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tag_r46 = ctx.$implicit;

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r45["try"](tag_r46.messageKey))("value", tag_r46.messageKey);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](tag_r46.messageKey[1]);
        }
      }

      function RuleMappingCreateComponent_div_68_ng_container_2_ng_container_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RuleMappingCreateComponent_div_68_ng_container_2_ng_container_11_label_1_Template, 2, 0, "label", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "select", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RuleMappingCreateComponent_div_68_ng_container_2_ng_container_11_Template_select_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r49);

            var i_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r47.onselectOfFieldNo($event, i_r20);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, RuleMappingCreateComponent_div_68_ng_container_2_ng_container_11_option_3_Template, 2, 3, "option", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r20 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r24.sourceData);
        }
      }

      function RuleMappingCreateComponent_div_68_ng_container_2_label_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Destination system");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingCreateComponent_div_68_ng_container_2_ng_container_16_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Field No");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingCreateComponent_div_68_ng_container_2_ng_container_16_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var fname_r53 = ctx.$implicit;

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r52.try2(fname_r53.messageKey))("value", fname_r53.messageKey);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", fname_r53.messageKey, " ", fname_r53.messagebasis, "");
        }
      }

      function RuleMappingCreateComponent_div_68_ng_container_2_ng_container_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RuleMappingCreateComponent_div_68_ng_container_2_ng_container_16_label_1_Template, 2, 0, "label", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "select", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RuleMappingCreateComponent_div_68_ng_container_2_ng_container_16_Template_select_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r57);

            var i_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r55.onselectOfFieldNo2($event, i_r20);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, RuleMappingCreateComponent_div_68_ng_container_2_ng_container_16_option_3_Template, 2, 4, "option", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r20 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r26.updateRuleMappingDest);
        }
      }

      function RuleMappingCreateComponent_div_68_ng_container_2_ng_container_17_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Tag");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingCreateComponent_div_68_ng_container_2_ng_container_17_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var fname_r61 = ctx.$implicit;

          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r60.try2(fname_r61.messageKey))("value", fname_r61.messageKey);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", fname_r61.messageKey, " ", fname_r61.messagebasis, "");
        }
      }

      function RuleMappingCreateComponent_div_68_ng_container_2_ng_container_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RuleMappingCreateComponent_div_68_ng_container_2_ng_container_17_label_1_Template, 2, 0, "label", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "select", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RuleMappingCreateComponent_div_68_ng_container_2_ng_container_17_Template_select_change_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r65);

            var i_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r63.onselectOfFieldNo2($event, i_r20);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, RuleMappingCreateComponent_div_68_ng_container_2_ng_container_17_option_3_Template, 2, 4, "option", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r20 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r27.updateRuleMappingDest);
        }
      }

      function RuleMappingCreateComponent_div_68_ng_container_2_label_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Default value");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "first-image": a0,
          "image": true
        };
      };

      function RuleMappingCreateComponent_div_68_ng_container_2_a_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleMappingCreateComponent_div_68_ng_container_2_a_26_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r69);

            var i_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r67.deleteRuleMapGroup(i_r20);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](1, _c0, i_r20 === 0));
        }
      }

      var _c1 = function _c1(a0) {
        return {
          first: a0,
          "form-control": true,
          path: true
        };
      };

      function RuleMappingCreateComponent_div_68_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](1, 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, RuleMappingCreateComponent_div_68_ng_container_2_label_6_Template, 2, 0, "label", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, RuleMappingCreateComponent_div_68_ng_container_2_ng_container_9_Template, 4, 2, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, RuleMappingCreateComponent_div_68_ng_container_2_ng_container_10_Template, 4, 2, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, RuleMappingCreateComponent_div_68_ng_container_2_ng_container_11_Template, 4, 2, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, RuleMappingCreateComponent_div_68_ng_container_2_label_13_Template, 2, 0, "label", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, RuleMappingCreateComponent_div_68_ng_container_2_ng_container_16_Template, 4, 2, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, RuleMappingCreateComponent_div_68_ng_container_2_ng_container_17_Template, 4, 2, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, RuleMappingCreateComponent_div_68_ng_container_2_label_19_Template, 2, 0, "label", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, RuleMappingCreateComponent_div_68_ng_container_2_a_26_Template, 2, 3, "a", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r20 = ctx.index;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", i_r20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r20 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r17.sourceLabel == "TCP/IP");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r17.sourceLabel == "Https/Http");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r17.sourceLabel == "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r20 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r17.labelsDestination == "TCP/IP");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r17.labelsDestination == "Https/Http");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", i_r20 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](11, _c1, i_r20 === 0));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r17.submit);
        }
      }

      function RuleMappingCreateComponent_div_68_a_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleMappingCreateComponent_div_68_a_5_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r72);

            var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r71.addRuleDetail();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingCreateComponent_div_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, RuleMappingCreateComponent_div_68_ng_container_2_Template, 27, 13, "ng-container", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, RuleMappingCreateComponent_div_68_a_5_Template, 3, 0, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r5.rulemappingDetail.controls);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r5.submit);
        }
      }

      function RuleMappingCreateComponent_div_70_Template(rf, ctx) {
        if (rf & 1) {
          var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleMappingCreateComponent_div_70_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r74);

            var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r73.editValues();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r6.submit);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r6.roleCodes.edit.labelDescription, " ");
        }
      }

      function RuleMappingCreateComponent_div_74_Template(rf, ctx) {
        if (rf & 1) {
          var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleMappingCreateComponent_div_74_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r76);

            var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r75.auditChangeRuleTranslation("auth");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r7.hideFetch);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r7.roleCodes.auth.labelDescription);
        }
      }

      function RuleMappingCreateComponent_div_75_Template(rf, ctx) {
        if (rf & 1) {
          var _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleMappingCreateComponent_div_75_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r78);

            var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r77.auditChangeRuleTranslation("close");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r8.hideFetch);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r8.roleCodes.close.labelDescription);
        }
      }

      function RuleMappingCreateComponent_div_76_Template(rf, ctx) {
        if (rf & 1) {
          var _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleMappingCreateComponent_div_76_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r80);

            var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r79.auditChangeRuleTranslation("open");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r9.hideFetch);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r9.roleCodes.reopen.labelDescription);
        }
      }

      function RuleMappingCreateComponent_div_77_Template(rf, ctx) {
        if (rf & 1) {
          var _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleMappingCreateComponent_div_77_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r82);

            var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r81.deleteRuleMapping();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r10.hideFetch);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r10.roleCodes["delete"].labelDescription);
        }
      }

      function RuleMappingCreateComponent_div_81_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "i", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 67);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "img", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 67);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "i", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 67);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "i", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 67);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](56, "img", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "div", 67);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](69, "img", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "div", 67);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](81, "i", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "div", 67);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](93, "img", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "div", 67);

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
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r11.addSysRespData == null ? null : ctx_r11.addSysRespData.creatorId);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](26, 8, ctx_r11.addSysRespData == null ? null : ctx_r11.addSysRespData.createdTime, "MM/dd/yyyy, h:mm a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx_r11.addSysRespData == null ? null : ctx_r11.addSysRespData.recordStatus) == "O" ? "OPEN" : (ctx_r11.addSysRespData == null ? null : ctx_r11.addSysRespData.recordStatus) == "C" ? "CLOSED" : ctx_r11.addSysRespData == null ? null : ctx_r11.addSysRespData.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r11.addSysRespData == null ? null : ctx_r11.addSysRespData.approverId);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](63, 11, ctx_r11.addSysRespData == null ? null : ctx_r11.addSysRespData.approvedTime, "MM/dd/yyyy, h:mm a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx_r11.addSysRespData == null ? null : ctx_r11.addSysRespData.approvedEver) == "N" ? "NO" : (ctx_r11.addSysRespData == null ? null : ctx_r11.addSysRespData.approvedEver) == "Y" ? "YES" : ctx_r11.addSysRespData == null ? null : ctx_r11.addSysRespData.approvedEver);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"]((ctx_r11.addSysRespData == null ? null : ctx_r11.addSysRespData.approvedStatus) == "N" || (ctx_r11.addSysRespData == null ? null : ctx_r11.addSysRespData.approvedStatus) == "U" ? "UNAUTHORIZED" : (ctx_r11.addSysRespData == null ? null : ctx_r11.addSysRespData.approvedStatus) == "Y" || (ctx_r11.addSysRespData == null ? null : ctx_r11.addSysRespData.approvedStatus) == "A" ? "AUTHORIZED" : ctx_r11.addSysRespData == null ? null : ctx_r11.addSysRespData.approvedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r11.addSysRespData == null ? null : ctx_r11.addSysRespData.versionNo);
        }
      }

      var _c2 = function _c2() {
        return ["/rule-mapping/summary"];
      };

      var _RuleMappingCreateComponent = /*#__PURE__*/function () {
        function _RuleMappingCreateComponent(rulemap, router, roleService, fb, addSystem, formBuilder, cdr, toastService, canDeactivateGuard) {
          _classCallCheck(this, _RuleMappingCreateComponent);

          this.rulemap = rulemap;
          this.router = router;
          this.roleService = roleService;
          this.fb = fb;
          this.addSystem = addSystem;
          this.formBuilder = formBuilder;
          this.cdr = cdr;
          this.toastService = toastService;
          this.canDeactivateGuard = canDeactivateGuard;
          this.fieldNoData = [];
          this.disableFetchBtn = false;
          this.disableSubmitBtn = false;
          this.disableResetBtn = false;
          this.showAuditLog = false;
          this.isSelected = true;
          this.hideFetch = false;
          this.hideSubmit = false;
          this.fieldValueData = [];
          this.showFieldNoValue = 1;
          this.xmlLength = [];
          this.temparray = [];
          this.tempArrayList = [];
          this.tempArrayList2 = [];
          this.rulemappingDest = new _MdmtMessageMapping();
          this.mappingObj = new _MdmtMessageMapping();
          this.messageBasisIso = [];
          this.destinationData = [];
          this.sourceData = [];
          this.ruleDto = new _ruleMapDto();
          this.afterSubmit = false;
          this.submit = true;
          this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__.permissionsLabels();
          this.formTouched = true;
          this.showDialog = false;
          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject(); // externalsystem: any = [];

          this.externalCreateSystemFiltered = [];
          this.sourceMsg = true;
          this.destinationMsg = true;
        }

        _createClass(_RuleMappingCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.currentUser = localStorage.getItem('userFromLogin');
            this.gettingExternalsystem();
            this.ruleMappingForm = this.formBuilder.group({
              systemCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
              messageType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
              serviceName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
              operationName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
              destinationSystems: this.getDestinationItem(),
              rulemappingDetail: this.formBuilder.array([])
            });
            this.addRuleDetail();
            this.fetchingIso();
            this.roleService.fetchScreenPermissions('Rule Mapping');
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this.roleCodes = message;
            });
            setTimeout(function () {
              console.log(_this.roleCodes);
            }, 100);
          }
        }, {
          key: "getDestinationItem",
          value: function getDestinationItem() {
            return this.formBuilder.group({
              systemCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
              messageType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
              serviceName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
              operationName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]
            });
          }
        }, {
          key: "canExit",
          value: function canExit() {
            var _this2 = this;

            var isExit = false;

            if (this.ruleMappingForm.touched && this.formTouched == true) {
              return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
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

                  _this2.cdr.markForCheck();

                  return isExit;
                } else {
                  isExit = false;

                  _this2.cdr.markForCheck();

                  return isExit;
                }
              });
            } else {
              isExit = true;
              return new Promise(function (resolve, reject) {
                if (isExit === true) {
                  isExit = true;

                  _this2.cdr.markForCheck();

                  resolve(true);
                }
              });
            }
          }
        }, {
          key: "auditChangeRuleTranslation",
          value: function auditChangeRuleTranslation(operation) {
            var _this3 = this;

            var message = '';
            var operationType = '';

            switch (operation) {
              case 'open':
                message = 'opened';
                operationType = 'open';
                break;

              case 'close':
                message = 'closed';
                operationType = 'close';
                break;

              case 'auth':
                message = 'authorized';
                operationType = 'authorize';
                break;

              default:
                break;
            }

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              text: "You are trying to ".concat(operationType, " record. ") + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info'
            }).then(function (result) {
              if (result.isConfirmed === true) {
                if (_this3.currentUser == _this3.addSysRespData.creatorId) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Maker cannot ".concat(operationType, " the record!"));
                } else {
                  var payloadObj = {};
                  payloadObj = _this3.ruleMappingDataForPayload;
                  payloadObj.msgMappingDetails = _this3.rulemappingDetail;

                  _this3.rulemap.editRuleMapping(operation, _this3.currentUser, payloadObj).subscribe(function (resp) {
                    _this3.addSysRespData = resp;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: "Record is ".concat(message)
                    });
                  });
                }
              }
            });
          }
        }, {
          key: "deleteRuleMapping",
          value: function deleteRuleMapping() {
            var _this4 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              text: 'You are trying to delete record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3e54b8',
              cancelButtonColor: '#d33',
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info',
              iconColor: "#d33"
            }).then(function (result) {
              console.log("this is reopen ", result);

              if (result.isConfirmed === true) {
                _this4.rulemap.ondeleteMapping(_this4.addSysRespData.mappingId, _this4.currentUser).subscribe(function (resp) {
                  if (resp) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Record is Deleted',
                      confirmButtonText: 'Ok'
                    }).then(function (result) {
                      if (result) {
                        _this4.router.navigateByUrl('/rule-mapping/summary');
                      }
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Failed to delete the reocrd");
                  }
                });
              }
            });
          }
        }, {
          key: "editValues",
          value: function editValues() {
            this.hideFetch = true;
            this.hideSubmit = true;
            this.submit = true;
            this.ruleMappingForm.enable();
          }
        }, {
          key: "auditLog",
          value: function auditLog() {
            if (this.addSysRespData.authStatus == 'U' || this.addSysRespData.authStatus == 'Unauthorized') {
              this.addSysRespData.authStatus = 'UNAUTHORIZED';
            }

            if (this.addSysRespData.authStatus == 'A' || this.addSysRespData.authStatus == 'Authorized') {
              this.addSysRespData.authStatus = 'AUTHORIZED';
            }

            if (this.addSysRespData.recordStatus == 'O' || this.addSysRespData.recordStatus == 'Open') {
              this.addSysRespData.recordStatus = 'OPEN';
            }

            if (this.addSysRespData.recordStatus == 'C' || this.addSysRespData.recordStatus == 'Close') {
              this.addSysRespData.recordStatus = 'CLOSED';
            }

            if (this.addSysRespData.approvedEver == 'N' || this.addSysRespData.approvedEver == 'No') {
              this.addSysRespData.approvedEver = 'NO';
            }

            if (this.addSysRespData.approvedEver == 'Y') {
              this.addSysRespData.approvedEver = 'YES';
            }
          }
        }, {
          key: "getRuleMappingDetail",
          value: function getRuleMappingDetail() {
            return this.formBuilder.group({
              id: [''],
              defaultValue: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
              messageMappingId: [''],
              sourceTransDetId: [''],
              targetTransDetId: [''],
              sourceKey: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
              destinationKey: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]
            });
          }
        }, {
          key: "indexTracker",
          value: function indexTracker(index, value) {
            return index;
          }
        }, {
          key: "rulemappingDetail",
          get: function get() {
            return this.ruleMappingForm.get('rulemappingDetail');
          }
        }, {
          key: "addRuleDetail",
          value: function addRuleDetail() {
            this.rulemappingDetail.push(this.getRuleMappingDetail());
            console.log(this.rulemappingDetail.value);
          }
        }, {
          key: "deleteRuleMapGroup",
          value: function deleteRuleMapGroup(index) {
            if (this.tempArrayList[index]) {
              this.tempArrayList.splice(index, 1);
            }

            if (this.tempArrayList2[index]) {
              this.tempArrayList2.splice(index, 1);
            }

            this.rulemappingDetail.removeAt(index);
          }
        }, {
          key: "gettingExternalsystem",
          value: function gettingExternalsystem() {
            var _this5 = this;

            this.rulemap.gettingExternalsystem().subscribe(function (extSysResp) {
              console.log(extSysResp);
              _this5.externalSystem = extSysResp.sort();
              _this5.sourcesysdata = _this5.externalSystem;
              _this5.temparray = _this5.externalSystem;
              _this5.externalCreateSystemFiltered = _this5.externalSystem;
              console.log(_this5.externalSystem);
              console.log(_this5.externalCreateSystemFiltered);
            }, function (err) {
              console.log("err", err);
            });
          }
        }, {
          key: "fetchDestination",
          value: function fetchDestination() {
            console.log(this.rulemapping);
            console.log("Mapping", this.ruleMappingForm.value);
            this.disableFetchBtn = true;
            this.showfetchAll = true;
            this.showDestination = true;
            this.showSource = true; // this.rulemappingDetail = this.ruleMappingDataForPayload.msgMappingDetails;
            // for (let index = 0; index < this.rulemappingDetail.length; index++) {
            //   this.addRuleDetail();
            //   const item = this.rulemappingDetail[index];
            //   this.rulemappingDetails.at(index).patchValue(item);
            //   console.log("Rule Mapping: ", this.rulemappingDetails);
            // }
          }
        }, {
          key: "onFieldNameChange",
          value: function onFieldNameChange(event) {
            console.log(event.value);
            var value = event.value;

            if (event.value) {
              var item = this.sourceIsoResp.find(function (element) {
                return element.fieldValue == value;
              });
              console.log(item);
              this.showFieldNoValue = item.fieldNo;
              console.log("ssss", this.showFieldNoValue);
            }
          }
        }, {
          key: "fetchingIso",
          value: function fetchingIso() {
            var _this6 = this;

            this.addSystem.fetchingIsoForTcp().subscribe(function (isoResp) {
              console.log("iss", isoResp);
              _this6.isoRespData = isoResp; // this.fieldNoData=isoResp;

              _this6.messageBasisIso = isoResp.map(function (data) {
                return data.messageBasis;
              });
              _this6.fieldNoData = isoResp.map(function (data) {
                return data.messageBasis;
              });
              _this6.fieldValueData = isoResp.map(function (data) {
                return data.messageKey;
              });
            });
          }
        }, {
          key: "onSourseSelection",
          value: function onSourseSelection(event) {
            var _this7 = this;

            console.log(event);
            this.sourseSys = event;
            this.showSource = false;
            this.showDestination = false;
            console.log(this.externalSystem);
            console.log(this.sourseSys);
            this.externalCreateSystemFiltered = this.externalSystem.filter(function (system) {
              return system !== _this7.sourseSys;
            }); // this.externalCreateSystemFiltered = this.externalsystem
            // this.selectedExternalSystems = this.externalsystem.filter((system) => system !== this.sourseSys)
            // this.systemName = event.value;

            this.rulemap.gettingTranslationData(this.sourseSys).subscribe(function (resp) {
              console.log(resp);

              if (resp != null) {
                _this7.showfetchAll = false;
                _this7.rulemapping = resp;
                _this7.sourcesysdata = resp;
                console.log("RuleMapping Res::", _this7.rulemapping.messageType);

                if (_this7.rulemapping.messageType) {
                  if (_this7.rulemapping.messageType == 'I') {
                    _this7.rulemapping.messageType = 'Incoming';
                  }

                  if (_this7.rulemapping.messageType == 'O') {
                    _this7.rulemapping.messageType = 'OutGoing';
                  }

                  _this7.sourceMsg = false;
                }

                _this7.ruleMappingForm.patchValue(_this7.rulemapping);

                if (_this7.rulemapping.messageType) {
                  if (_this7.rulemapping.messageType == 'Incoming') {
                    _this7.rulemapping.messageType = 'I';
                  }

                  if (_this7.rulemapping.messageType == 'OutGoing') {
                    _this7.rulemapping.messageType = 'O';
                  }

                  _this7.sourceMsg = false;
                }

                _this7.gettingoperationAandserv(resp.systemCode, resp.messageType);

                _this7.rulemapping.sourceTranslationId = resp.transId; // this.rulemappingDetail=resp.msgTransDetails;

                resp.msgTransDetails.map(function (el) {
                  _this7.sourceTransDetId = el.translationId;
                });
              } else {
                _this7.showfetchAll = true;
              }
            }, function (err) {
              _this7.showfetchAll = true;
            });
            this.externalSystem = this.temparray;
          }
        }, {
          key: "onsearchingTablName",
          value: function onsearchingTablName(event) {
            console.log(event.target.value);
            console.log("this is arr", this.sourcesysdata);

            if (this.sourcesysdata) {
              var data = this.sourcesysdata.filter(function (e) {
                var extValue = e.toLowerCase();
                var value = event.target.value.toLowerCase();
                console.log(extValue, value); // return !extValue.indexOf(value);//changed this for 1192

                return extValue.search(value) > -1;
              });
              console.log(data);
              this.externalSystem = data;
            }
          }
        }, {
          key: "onSelectionOFMessageType",
          value: function onSelectionOFMessageType(event) {
            console.log("e", event);
            this.showSource = false;
            this.showDestination = false;
            this.gettingoperationAandserv(this.sourseSys, event.value);
          }
        }, {
          key: "gettingoperationAandserv",
          value: function gettingoperationAandserv(system, msgtype) {
            var _this8 = this;

            // console.log(system);
            this.rulemap.gettingoperationAndService(system, msgtype, this.currentUser).subscribe(function (sourceResp) {
              // console.log(sourceResp);
              _this8.showfetchAll = false;
              _this8.sourceoperation = sourceResp.OPERATION;
              _this8.sourceService = sourceResp.SERVICE;
              _this8.sourceData = sourceResp.MdmtSystemService; // console.log("SourceData",this.sourceData);
              // console.log("Rule Mapping Before",this.rulemapping.msgTransDetails);

              _this8.updateRuleMappingSrc = _this8.rulemapping.msgTransDetails;
              _this8.sourceLabel = sourceResp.MdmtSystemChannel[0].messageChannel;

              for (var g = 0; g < _this8.sourceData.length; g++) {
                // console.log("messageBasisIso", this.sourceData[g].dataType);
                _this8.updateRuleMappingSrc.push({
                  dataType: _this8.sourceData[g].dataType,
                  defaultValue: null,
                  encryption: _this8.sourceData[g].encryption,
                  id: _this8.sourceData[g].channelId,
                  messageKey: _this8.sourceData[g].messageKey,
                  messagebasis: _this8.sourceData[g].messageBasis,
                  transId: _this8.sourceData[g].serviceId,
                  translationId: 0,
                  versionNo: 1
                });
              } //  console.log("Rule Mapping After",this.updateRuleMappingSrc);


              if (_this8.sourceLabel == 'DB Connection') {
                for (var index = 0; index < _this8.sourceData.length; index++) {
                  _this8.sourceData[index].messageKey = _this8.sourceData[index].messageKey.split(",");
                }
              }

              if (_this8.sourceLabel == 'Https/Http') {
                _this8.matlabelSource1 = "Tag";
                _this8.matlabelSource2 = null;
              }

              if (_this8.sourceLabel == 'TCP/IP') {
                _this8.matlabelSource1 = "Filed No";
                _this8.matlabelSource2 = "Filed Name";
              } // this.translationData=translationResp;

            }, function (err) {
              console.log(err); // Swal.fire({ text: 'External system data not present.' });

              _this8.showfetchAll = true;
            });
          }
        }, {
          key: "ondestinationSource",
          value: function ondestinationSource(event) {
            var _this9 = this;

            console.log(event.value);
            this.showSource = false;
            this.showDestination = false;
            this.destinationSource = event;
            this.externalCreateSystemFiltered = this.externalSystem.filter(function (system) {
              return system !== _this9.sourseSys;
            });
            this.rulemap.gettingTranslationData(this.destinationSource).subscribe(function (resp) {
              console.log(resp);

              if (resp != null) {
                _this9.showfetchAll = false;
                _this9.rulemappingDest = resp;
                console.log(_this9.rulemappingDest);

                if (_this9.rulemappingDest.messageType) {
                  if (_this9.rulemappingDest.messageType == 'I') {
                    _this9.rulemappingDest.messageType = 'Incoming';
                  }

                  if (_this9.rulemappingDest.messageType == 'O') {
                    _this9.rulemappingDest.messageType = 'OutGoing';
                  }

                  _this9.destinationMsg = false;
                } // this.rulemapping.targetTranslationId = resp.transId;


                _this9.ruleMappingForm.get('destinationSystems').patchValue(_this9.rulemappingDest);

                resp.msgTransDetails.map(function (el) {
                  _this9.targetTransDetId = el.translationId;
                });

                if (_this9.rulemappingDest.messageType) {
                  if (_this9.rulemappingDest.messageType == 'Incoming') {
                    _this9.rulemappingDest.messageType = 'I';
                  }

                  if (_this9.rulemappingDest.messageType == 'OutGoing') {
                    _this9.rulemappingDest.messageType = 'O';
                  }

                  _this9.sourceMsg = false;
                }

                if (_this9.rulemappingDest.messageType) {
                  if (_this9.rulemappingDest.messageType == 'Incoming') {
                    _this9.rulemappingDest.messageType = 'I';
                  }

                  if (_this9.rulemappingDest.messageType == 'OutGoing') {
                    _this9.rulemappingDest.messageType = 'O';
                  }

                  _this9.sourceMsg = false;
                }

                _this9.gettingmsgTypeAndDestination(resp.systemCode, resp.messageType);
              } else {
                _this9.showfetchAll = true;
              }
            }, function (err) {
              _this9.showfetchAll = true;
            });
            this.externalSystem = this.temparray;
          }
        }, {
          key: "msgTypeOfDestination",
          value: function msgTypeOfDestination(event) {
            console.log(event.value);
            this.showDestination = false;
            this.showSource = false;
            this.gettingmsgTypeAndDestination(this.destinationSource, event.value);
          }
        }, {
          key: "gettingmsgTypeAndDestination",
          value: function gettingmsgTypeAndDestination(destinationSource, msgtype) {
            var _this10 = this;

            this.rulemap.gettingoperationAndService(destinationSource, msgtype, this.currentUser).subscribe(function (destinationResp) {
              console.log(destinationResp);
              _this10.showfetchAll = false;
              _this10.destinationOperation = destinationResp.OPERATION;
              _this10.destinationService = destinationResp.SERVICE;
              _this10.destinationData = destinationResp.MdmtSystemService;
              _this10.updateRuleMappingDest = _this10.rulemappingDest.msgTransDetails;
              console.log(_this10.destinationData, "destinationData");
              console.log(_this10.updateRuleMappingDest, "Before");

              for (var g = 0; g < _this10.destinationData.length; g++) {
                console.log("messageBasisIso", _this10.destinationData[g].dataType);

                _this10.updateRuleMappingDest.push({
                  dataType: _this10.destinationData[g].dataType,
                  defaultValue: null,
                  encryption: _this10.destinationData[g].encryption,
                  id: _this10.destinationData[g].channelId,
                  messageKey: _this10.destinationData[g].messageKey,
                  messagebasis: _this10.destinationData[g].messageBasis,
                  transId: _this10.destinationData[g].serviceId,
                  translationId: 0,
                  versionNo: 1
                });
              }

              console.log(_this10.updateRuleMappingDest, "After");
              _this10.labelsDestination = destinationResp.MdmtSystemChannel[0].messageChannel;

              if (_this10.labelsDestination == 'Https/Http') {
                _this10.matLabel = "Tag";
                _this10.matLabel2 = null;
              } else if (_this10.labelsDestination == 'TCP/IP') {
                _this10.matLabel = "Filed No";
                _this10.matLabel2 = "Filed Name";
              } // this.rulemappingData=[...this.sourceData,...this.destinationData]


              console.log(_this10.rulemappingData); // this.translationData=translationResp;
            }, function (err) {
              console.log(err); // Swal.fire({ text: 'External system data not present.' });

              _this10.showfetchAll = true;
            });
          }
        }, {
          key: "onReset",
          value: function onReset() {
            this.disableSubmitBtn = false;
            this.ruleMappingForm.reset();
          }
        }, {
          key: "try",
          value: function _try(value) {
            if (this.tempArrayList.find(function (item) {
              return item == value;
            })) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "try2",
          value: function try2(value) {
            if (this.tempArrayList2.find(function (item) {
              return item == value;
            })) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "onselectOfFieldNo",
          value: function onselectOfFieldNo(event, i) {
            console.log(event.target.value);
            console.log(this.tempArrayList[i]);

            if (this.tempArrayList[i]) {
              this.tempArrayList[i] = event.target.value;
            } else {
              this.tempArrayList.push(event.target.value);
            }
          }
        }, {
          key: "onselectOfFieldNo2",
          value: function onselectOfFieldNo2(event, i) {
            console.log(event.target.value);
            console.log(this.tempArrayList2[i]);

            if (this.tempArrayList2[i]) {
              this.tempArrayList2[i] = event.target.value;
            } else {
              this.tempArrayList2.push(event.target.value);
            }
          }
        }, {
          key: "onsaveRuleMapping",
          value: function onsaveRuleMapping() {
            var _this11 = this;

            this.mappingObj.msgMappingDetails = this.ruleMappingForm.value.rulemappingDetail;
            this.mappingObj.sourceTranslationId = this.rulemapping.sourceTranslationId;
            this.mappingObj.targetTranslationId = this.rulemapping.targetTranslationId;
            this.mappingObj.creatorId = this.currentUser.replace(/['"]+/g, '');

            if (this.mappingId) {
              this.mappingObj.mappingId = this.mappingId;
              this.mappingObj.createdTime = this.addSysRespData.createdTime;
              this.mappingObj.approverId = this.addSysRespData.approverId;
              this.mappingObj.approvedTime = this.addSysRespData.approvedTime;
              this.mappingObj.versionNo = this.addSysRespData.versionNo;
              this.mappingObj.approvedStatus = this.addSysRespData.approvedStatus;
              this.mappingObj.approvedEver = this.addSysRespData.approvedEver;
              this.mappingObj.recordStatus = this.addSysRespData.recordStatus;
              this.rulemap.updatingRuleMapping(this.mappingObj, this.currentUser).subscribe(function (resp) {
                console.log(resp);

                if (resp) {
                  _this11.mappingId = resp.mappingId;

                  _this11.rulemappingDetail.patchValue(resp.msgMappingDetails);

                  _this11.addSysRespData = resp;

                  _this11.auditLog();

                  _this11.showAuditLog = true;
                  _this11.afterSubmit = true;

                  _this11.ruleMappingForm.disable();

                  _this11.disableSubmitBtn = true;
                  _this11.disableResetBtn = true;
                  _this11.submit = false;
                  _this11.formTouched = !_this11.ruleMappingForm.touched;
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    text: "Record is Updated",
                    icon: 'success'
                  });
                }
              }, function (err) {
                console.log(err.error.text);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  text: 'Unable to update the record, server error!',
                  icon: 'error'
                });
              });
            } else {
              this.rulemap.submittingruleMapping(this.mappingObj, this.currentUser).subscribe(function (resp) {
                console.log(resp);

                if (resp) {
                  _this11.mappingId = resp.mappingId;

                  _this11.rulemappingDetail.patchValue(resp.msgMappingDetails);

                  _this11.addSysRespData = resp;

                  _this11.auditLog();

                  _this11.showAuditLog = true;
                  _this11.afterSubmit = true;

                  _this11.ruleMappingForm.disable();

                  _this11.disableSubmitBtn = true;
                  _this11.disableResetBtn = true;
                  _this11.submit = false;
                  _this11.formTouched = !_this11.ruleMappingForm.touched;
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    text: "Record is Created",
                    icon: 'success'
                  });
                }
              }, function (err) {
                console.log(err.error.text);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  text: 'Rule mapping data already present for source and destination systems.',
                  icon: 'error'
                });
              });
            }
          }
        }]);

        return _RuleMappingCreateComponent;
      }();

      _RuleMappingCreateComponent.ɵfac = function RuleMappingCreateComponent_Factory(t) {
        return new (t || _RuleMappingCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_2__.RuleService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_4__.AddSystemService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_6__.CanDeactivateGuard));
      };

      _RuleMappingCreateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _RuleMappingCreateComponent,
        selectors: [["npr-rule-mapping-create"]],
        decls: 82,
        vars: 19,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["novalidate", "", 1, "formStyle", 3, "formGroup"], [3, "disabled"], [1, "dbCardStyle"], [1, "addformCol"], [1, "row", "g-4", "align-items-center"], [1, "col"], [1, "row", "gy-4", "align-items-end"], [1, "col-lg-3"], ["for", "roleName", 1, "formLbl"], [1, "colorRed"], ["formControlName", "systemCode", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["hidden", "", "value", "", "disabled", "", "selected", ""], [3, "value", "hidden", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["type", "text", "id", "ruleName", "formControlName", "operationName", "name", "operationNameS", "placeholder", "Operation Name", 1, "form-control"], ["type", "text", "id", "ruleName", "name", "serviceNameS", "placeholder", "Service Name", "formControlName", "serviceName", 1, "form-control"], ["formGroupName", "destinationSystems"], ["formControlName", "systemCode", 1, "form-select", 3, "items", "change"], ["type", "text", "id", "ruleName", "name", "operationNameD", "placeholder", "Service Name", "formControlName", "operationName", 1, "form-control"], ["type", "text", "id", "ruleName", "name", "serviceNameD", "placeholder", "Service Name", "formControlName", "serviceName", 1, "form-control"], [1, "btn", "minWdSmBtn", "btnPrimary", 3, "click"], ["class", "dbCardStyle", 4, "ngIf"], [1, "row", "g-3", "pb-3", "pt-4", "justify-content-end"], ["class", "col-auto", 3, "hidden", 4, "ngIf"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "hidden", "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["class", "dbCardStyle mt-20", 4, "ngIf"], [3, "value", "hidden"], ["formControlName", "messageType", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["value", "I"], ["value", "O"], ["type", "text", "formControlName", "messageType", "placeholder", "Message Type", 1, "form-control"], ["formArrayName", "rulemappingDetail", 1, "addformCol"], [4, "ngFor", "ngForOf"], [1, "row", "g-3", "pt-4"], ["class", "addIcon primarybg", 3, "click", 4, "ngIf"], [3, "formGroupName"], [1, "row", "align-items-center"], [1, "row", "gy-4"], [1, "col-lg-4"], ["for", "roleName", "class", "formLbl", 4, "ngIf"], [1, "col-lg-12"], ["type", "text", "id", "defaultVal", "formControlName", "defaultValue", "placeholder", "Default value", 3, "ngClass"], ["class", "deleteIcon2", "style", "cursor: pointer;", 3, "click", 4, "ngIf"], ["formControlName", "sourceKey", "aria-label", "Default select example", 1, "form-select", 3, "change"], [3, "hidden", "value", 4, "ngFor", "ngForOf"], [3, "hidden", "value"], ["formControlName", "destinationKey", "aria-label", "Default select example", 1, "form-select", 3, "change"], [1, "deleteIcon2", 2, "cursor", "pointer", 3, "click"], ["src", "assets/images/delete-icon.svg", "alt", "...", 1, "image", 3, "ngClass"], [1, "addIcon", "primarybg", 3, "click"], ["src", "assets/images/plus-icon.svg", "alt", "..."], [1, "col-auto", 3, "hidden"], [1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "dbCardStyle", "mt-20"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], [1, "fa", "fa-edit", "faClass"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["aria-hidden", "true", 1, "fa", "fa-files-o", "faRecordStatus"], [1, "csCardStyleIcon", "csCardStyleIconBg4"], [1, "fa", "fa-check-square-o", "faClassChecker"], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/modification.svg", "alt", "...", 1, "modImage"], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], [1, "fa", "fa-shield", "faClassFirstTimeAuth"], ["src", "assets/images/authorize.svg", "alt", "...", 1, "modImage"]],
        template: function RuleMappingCreateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Rule Mapping ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "fieldset", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Source System");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "ng-select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RuleMappingCreateComponent_Template_ng_select_change_16_listener($event) {
              return ctx.onSourseSelection($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "ng-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "--Please select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, RuleMappingCreateComponent_ng_option_19_Template, 2, 3, "ng-option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Message Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, RuleMappingCreateComponent_div_25_Template, 8, 0, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, RuleMappingCreateComponent_div_26_Template, 2, 0, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Operation");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "Service");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](39, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "Destination System");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "ng-select", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RuleMappingCreateComponent_Template_ng_select_change_45_listener($event) {
              return ctx.ondestinationSource($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "Message Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, RuleMappingCreateComponent_div_51_Template, 8, 0, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](52, RuleMappingCreateComponent_div_52_Template, 2, 0, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "Operation");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](58, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](61, "Service");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](64, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleMappingCreateComponent_Template_button_click_66_listener() {
              return ctx.fetchDestination();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67, " Fetch ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](68, RuleMappingCreateComponent_div_68_Template, 6, 2, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](70, RuleMappingCreateComponent_div_70_Template, 3, 2, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleMappingCreateComponent_Template_button_click_72_listener() {
              return ctx.onsaveRuleMapping();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73, " Save ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](74, RuleMappingCreateComponent_div_74_Template, 3, 2, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](75, RuleMappingCreateComponent_div_75_Template, 3, 2, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](76, RuleMappingCreateComponent_div_76_Template, 3, 2, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](77, RuleMappingCreateComponent_div_77_Template, 3, 2, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](80, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](81, RuleMappingCreateComponent_div_81_Template, 100, 14, "div", 30);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.ruleMappingForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.submit);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.externalSystem);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.sourceMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.sourceMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("items", ctx.externalCreateSystemFiltered);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.destinationMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.destinationMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showSource || ctx.showDestination);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((ctx.addSysRespData == null ? null : ctx.addSysRespData.recordStatus) == "O" || (ctx.addSysRespData == null ? null : ctx.addSysRespData.recordStatus) == "OPEN") && ctx.roleCodes.edit);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", !ctx.submit)("disabled", ctx.ruleMappingForm.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((ctx.addSysRespData == null ? null : ctx.addSysRespData.approvedStatus) == "U" || (ctx.addSysRespData == null ? null : ctx.addSysRespData.approvedStatus) == "UNAUTHORIZED") && ctx.roleCodes.auth);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((ctx.addSysRespData == null ? null : ctx.addSysRespData.recordStatus) == "O" || (ctx.addSysRespData == null ? null : ctx.addSysRespData.recordStatus) == "OPEN") && (ctx.addSysRespData == null ? null : ctx.addSysRespData.approvedEver) != "NO" && (ctx.addSysRespData == null ? null : ctx.addSysRespData.approvedEver) != "N" && ctx.roleCodes.close);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((ctx.addSysRespData == null ? null : ctx.addSysRespData.recordStatus) == "C" || (ctx.addSysRespData == null ? null : ctx.addSysRespData.recordStatus) == "CLOSED") && (ctx.addSysRespData == null ? null : ctx.addSysRespData.approvedEver) != "NO" && (ctx.addSysRespData == null ? null : ctx.addSysRespData.approvedEver) != "N" && ctx.roleCodes.reopen);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((ctx.addSysRespData == null ? null : ctx.addSysRespData.approvedEver) == "NO" || (ctx.addSysRespData == null ? null : ctx.addSysRespData.approvedEver) == "N") && ctx.roleCodes["delete"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](18, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.submit);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgOptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupName, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe],
        styles: [".m-10[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.path[_ngcontent-%COMP%] {\n  vertical-align: top;\n  margin-top: 0px;\n  margin-bottom: 20px;\n  min-width: 120px;\n  border-spacing: 1.5;\n}\n\n.first[_ngcontent-%COMP%] {\n  margin-top: 31px;\n}\n\n.image[_ngcontent-%COMP%] {\n  vertical-align: top;\n  top: -8px;\n  position: relative;\n}\n\n.first-image[_ngcontent-%COMP%] {\n  top: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUtbWFwcGluZy1jcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFFQSxnQkFBQTtFQUVBLG1CQUFBO0FBQUo7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFNBQUE7QUFDSiIsImZpbGUiOiJydWxlLW1hcHBpbmctY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm0tMTB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4XHJcbn1cclxuLnBhdGh7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgLy8gZGlzcGxheTogaW5saW5lO1xyXG4gICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgLy93aWR0aDogNTBweDtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAxLjU7XHJcbn1cclxuLmZpcnN0IHtcclxuICAgIG1hcmdpbi10b3A6IDMxcHg7XHJcbn1cclxuXHJcbi5pbWFnZXtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICB0b3A6IC04cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5maXJzdC1pbWFnZSB7XHJcbiAgICB0b3A6IDI0cHg7XHJcbn1cclxuIl19 */"]
      });

      var _MdmtMessageMapping = /*#__PURE__*/_createClass(function _MdmtMessageMapping() {
        _classCallCheck(this, _MdmtMessageMapping);
      });

      var _MdmtMessageMappingDet = /*#__PURE__*/_createClass(function _MdmtMessageMappingDet() {
        _classCallCheck(this, _MdmtMessageMappingDet);
      });

      var _MdmtMsgTransDetails = /*#__PURE__*/_createClass(function _MdmtMsgTransDetails() {
        _classCallCheck(this, _MdmtMsgTransDetails);
      });

      var _ruleMapDto = /*#__PURE__*/_createClass(function _ruleMapDto() {
        _classCallCheck(this, _ruleMapDto);
      });
      /***/

    },

    /***/
    50531:
    /*!*******************************************************************************************!*\
      !*** ./src/app/views/rule-mapping/rule-mapping-details/rule-mapping-details.component.ts ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RuleMappingDetailsComponent": function RuleMappingDetailsComponent() {
          return (
            /* binding */
            _RuleMappingDetailsComponent
          );
        },

        /* harmony export */
        "MdmtMessageMapping": function MdmtMessageMapping() {
          return (
            /* binding */
            _MdmtMessageMapping2
          );
        },

        /* harmony export */
        "MdmtMessageMappingDet": function MdmtMessageMappingDet() {
          return (
            /* binding */
            _MdmtMessageMappingDet2
          );
        },

        /* harmony export */
        "ruleMapDto": function ruleMapDto() {
          return (
            /* binding */
            _ruleMapDto2
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/models/fmosNewRolePermissions */
      35383);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/rule.service */
      50511);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      77382);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/add-system.service */
      91973);
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      31443);

      function RuleMappingDetailsComponent_div_80_ng_container_3_label_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Source System");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_9_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Field No");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_9_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tag_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", tag_r23.messageKey);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", tag_r23.messageKey, " ", tag_r23.messageBasis, " ");
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_9_label_1_Template, 2, 0, "label", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "select", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_9_option_3_Template, 2, 3, "option", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          var i_r9 = ctx_r24.index;
          var item_r8 = ctx_r24.$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r9 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r11.edit)("value", item_r8.sourceKey);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r11.sourceData);
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_10_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Tag");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_10_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tag_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", tag_r27.messageKey);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", tag_r27.messageKey, " ");
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_10_label_1_Template, 2, 0, "label", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "select", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_10_option_3_Template, 2, 2, "option", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          var i_r9 = ctx_r28.index;
          var item_r8 = ctx_r28.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r9 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r12.edit)("value", item_r8.sourceKey);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r12.sourceData);
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_label_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Destination system");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_15_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Field No");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_15_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var fname_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", fname_r31.messageKey);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", fname_r31.messageKey, " ", fname_r31.messageBasis, "");
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_15_label_1_Template, 2, 0, "label", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "select", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_15_option_3_Template, 2, 3, "option", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          var i_r9 = ctx_r33.index;
          var item_r8 = ctx_r33.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r9 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", item_r8.destinationKey);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r14.destinationData);
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_16_label_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Tag");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_16_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var fname_r36 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", fname_r36.messageKey);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", fname_r36.messageKey, " ");
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_16_label_1_Template, 2, 0, "label", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "select", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_16_option_3_Template, 2, 2, "option", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          var i_r9 = ctx_r38.index;
          var item_r8 = ctx_r38.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r9 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", item_r8.destinationKey);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r15.destinationData);
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_label_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Default value");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_label_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "label", 71);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          first: a0,
          "form-control": true,
          path: true
        };
      };

      function RuleMappingDetailsComponent_div_80_ng_container_3_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c0, i_r9 === 0))("readonly", ctx_r18.edit);
        }
      }

      function RuleMappingDetailsComponent_div_80_ng_container_3_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "input", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c0, i_r9 === 0));
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "first-image": a0,
          "image": true
        };
      };

      function RuleMappingDetailsComponent_div_80_ng_container_3_a_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleMappingDetailsComponent_div_80_ng_container_3_a_26_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r43);

            var i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r41.deleteRuleMapGroup(i_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c1, i_r9 === 0));
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "margin-top": a0
        };
      };

      function RuleMappingDetailsComponent_div_80_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](1, 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, RuleMappingDetailsComponent_div_80_ng_container_3_label_6_Template, 2, 0, "label", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_9_Template, 4, 4, "ng-container", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_10_Template, 4, 4, "ng-container", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, RuleMappingDetailsComponent_div_80_ng_container_3_label_12_Template, 2, 0, "label", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_15_Template, 4, 3, "ng-container", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, RuleMappingDetailsComponent_div_80_ng_container_3_ng_container_16_Template, 4, 3, "ng-container", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, RuleMappingDetailsComponent_div_80_ng_container_3_label_18_Template, 2, 0, "label", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, RuleMappingDetailsComponent_div_80_ng_container_3_label_21_Template, 1, 0, "label", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, RuleMappingDetailsComponent_div_80_ng_container_3_div_22_Template, 2, 4, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, RuleMappingDetailsComponent_div_80_ng_container_3_div_23_Template, 2, 3, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, RuleMappingDetailsComponent_div_80_ng_container_3_a_26_Template, 2, 3, "a", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r9 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroupName", i_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r9 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.sourceLabel == "TCP/IP");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.sourceLabel == "Https/Http");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r9 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.labelsDestination == "TCP/IP");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.labelsDestination == "Https/Http");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r9 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r9 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx_r1.hideFetch)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](14, _c2, i_r9 === 0 ? "50px" : "10px"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.submit);
        }
      }

      function RuleMappingDetailsComponent_div_80_a_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleMappingDetailsComponent_div_80_a_6_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46);

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r45.addRuleDetail();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx_r2.hideFetch);
        }
      }

      function RuleMappingDetailsComponent_div_80_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleMappingDetailsComponent_div_80_div_11_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r48);

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r47.editValues();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r3.hideFetch);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r3.roleCodes.edit.labelDescription, " ");
        }
      }

      function RuleMappingDetailsComponent_div_80_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleMappingDetailsComponent_div_80_div_12_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r50);

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r49.onAuthOfRuleMapping();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r4.hideFetch);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r4.roleCodes.auth.labelDescription);
        }
      }

      function RuleMappingDetailsComponent_div_80_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleMappingDetailsComponent_div_80_div_13_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r52);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r51.onCloseOfRuleMapping();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r5.hideFetch);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r5.roleCodes.close.labelDescription);
        }
      }

      function RuleMappingDetailsComponent_div_80_div_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleMappingDetailsComponent_div_80_div_14_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r54);

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r53.onOpenRuleMapping();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r6.hideFetch);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r6.roleCodes.reopen.labelDescription);
        }
      }

      function RuleMappingDetailsComponent_div_80_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleMappingDetailsComponent_div_80_div_15_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r56);

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r55.deleteRuleMapping();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r7.hideFetch);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.roleCodes["delete"].labelDescription);
        }
      }

      function RuleMappingDetailsComponent_div_80_Template(rf, ctx) {
        if (rf & 1) {
          var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "fieldset", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, RuleMappingDetailsComponent_div_80_ng_container_3_Template, 28, 16, "ng-container", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, RuleMappingDetailsComponent_div_80_a_6_Template, 3, 1, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleMappingDetailsComponent_div_80_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r58);

            var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r57.onsaveRuleMapping();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, RuleMappingDetailsComponent_div_80_div_11_Template, 3, 2, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, RuleMappingDetailsComponent_div_80_div_12_Template, 3, 2, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, RuleMappingDetailsComponent_div_80_div_13_Template, 3, 2, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, RuleMappingDetailsComponent_div_80_div_14_Template, 3, 2, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, RuleMappingDetailsComponent_div_80_div_15_Template, 3, 2, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "a", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r0.submit);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.rulemappingDetails.controls);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.submit);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx_r0.hideSubmit);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r0.submit);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r0.addSysRespData.recordStatus == "O" || ctx_r0.addSysRespData.recordStatus == "OPEN") && ctx_r0.roleCodes.edit);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r0.addSysRespData.approvedStatus == "U" || ctx_r0.addSysRespData.approvedStatus == "UNAUTHORIZED" || ctx_r0.addSysRespData.approvedStatus == "Unauthorized" || ctx_r0.addSysRespData.approvedStatus == "N" || ctx_r0.addSysRespData.approvedEver == "N") && ctx_r0.roleCodes.auth);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r0.addSysRespData.recordStatus == "O" || ctx_r0.addSysRespData.recordStatus == "OPEN") && ctx_r0.addSysRespData.approvedEver != "NO" && ctx_r0.addSysRespData.approvedEver != "N" && ctx_r0.roleCodes.close);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r0.addSysRespData.recordStatus == "C" || ctx_r0.addSysRespData.recordStatus == "CLOSED") && ctx_r0.addSysRespData.approvedEver != "NO" && ctx_r0.addSysRespData.approvedEver != "N" && ctx_r0.roleCodes.reopen);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx_r0.addSysRespData.approvedEver == "NO" || (ctx_r0.addSysRespData == null ? null : ctx_r0.addSysRespData.approvedEver) == "N") && ctx_r0.roleCodes["delete"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", "/rule-mapping/summary");
        }
      }

      var _RuleMappingDetailsComponent = /*#__PURE__*/function () {
        function _RuleMappingDetailsComponent(rulemap, roleService, router, _location, _route, addSystem, toastService, cdr, formBuilder) {
          _classCallCheck(this, _RuleMappingDetailsComponent);

          this.rulemap = rulemap;
          this.roleService = roleService;
          this.router = router;
          this._location = _location;
          this._route = _route;
          this.addSystem = addSystem;
          this.toastService = toastService;
          this.cdr = cdr;
          this.formBuilder = formBuilder;
          this.fieldNoData = [];
          this.disableFetchBtn = false;
          this.disableSubmitBtn = false;
          this.deleted = false;
          this.disableFields = false;
          this.authorizeDone = false;
          this.fieldValueData = [];
          this.showFieldNoValue = 1;
          this.xmlLength = [];
          this.rulemapping = new _MdmtMessageMapping2();
          this.rulemappingdest = new _MdmtMessageMapping2();
          this.isSelected = true;
          this.rulemappingDetail = [];
          this.destinationData = [];
          this.sourceData = [];
          this.ruleDto = new _ruleMapDto2();
          this.submit = true;
          this.hideFetch = false;
          this.hideSubmit = false;
          this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__.permissionsLabels();
          this.formTouched = true;
          this.showDialog = false;
          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
          this.editFlag = false;
        }

        _createClass(_RuleMappingDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.currentUser = localStorage.getItem('userFromLogin');
            this.ruleMappingForm = this.formBuilder.group({
              systemCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              messageType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              serviceName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              operationName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              destinationSystems: this.getDestinationItem(),
              rulemappingDetails: this.formBuilder.array([])
            });
            this.navSubscription = this.addSystem.getNavParam.subscribe(function (data) {
              return _this12.editruleMappingResp = data;
            });
            console.log("Response ??", this.editruleMappingResp);
            this.ruleMappingDataForPayload = this.editruleMappingResp["responseData"];

            if (this.editruleMappingResp && Object.keys(this.editruleMappingResp).length === 0 && Object.getPrototypeOf(this.editruleMappingResp) === Object.prototype) {
              this._location.back();
            } else {
              this.addSysRespData = this.ruleMappingDataForPayload;
              this.auditLog();
              this.rulemapping.sourceTranslationId = this.editruleMappingResp["sourceTransDetId"];

              if (this.rulemapping.sourceTranslationId) {
                this.gettingTranslationData(this.rulemapping.sourceTranslationId);
              }

              this.rulemapping.targetTranslationId = this.editruleMappingResp["targetTransDetId"];

              if (this.rulemapping.targetTranslationId) {
                this.gettingTranslationDataForDest(this.rulemapping.targetTranslationId);
              }

              if (this.addSysRespData.recordStatus == "C") {
                console.log(this.addSysRespData.recordStatus);
                this.reopenBtn = false;
                this.authBtnHide = true;
              }

              this.rulemappingDetail = this.ruleMappingDataForPayload.msgMappingDetails;

              for (var index = 0; index < this.rulemappingDetail.length; index++) {
                this.addRuleDetail();
                var item = this.rulemappingDetail[index];
                this.rulemappingDetails.at(index).patchValue(item);
                console.log("Rule Mapping: ", this.rulemappingDetails);
              }

              console.log("from sum", this.ruleMappingDataForPayload);
              this.gettingExternalsystem();
              this.fetchingIso();
            }

            this.roleService.fetchScreenPermissions('Rule Mapping');
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this12.roleCodes = message;
            });
            setTimeout(function () {
              console.log(_this12.roleCodes);
            }, 100);
            this.ruleMappingForm.disable();
          }
        }, {
          key: "getDestinationItem",
          value: function getDestinationItem() {
            return this.formBuilder.group({
              systemCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              messageType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              serviceName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              operationName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]
            });
          }
        }, {
          key: "auditLog",
          value: function auditLog() {
            if (this.addSysRespData.approvedStatus == 'U' || this.addSysRespData.approvedStatus == 'Unauthorized') {
              this.addSysRespData.approvedStatus = 'UNAUTHORIZED';
            }

            if (this.addSysRespData.approvedStatus == 'A' || this.addSysRespData.approvedStatus == 'Authorized') {
              this.addSysRespData.approvedStatus = 'AUTHORIZED';
            }

            if (this.addSysRespData.recordStatus == 'O' || this.addSysRespData.recordStatus == 'Open') {
              this.addSysRespData.recordStatus = 'OPEN';
            }

            if (this.addSysRespData.recordStatus == 'C' || this.addSysRespData.recordStatus == 'Close') {
              this.addSysRespData.recordStatus = 'CLOSED';
            }

            if (this.addSysRespData.approvedEver == 'N' || this.addSysRespData.approvedEver == 'No') {
              this.addSysRespData.approvedEver = 'NO';
            }

            if (this.addSysRespData.approvedEver == 'Y') {
              this.addSysRespData.approvedEver = 'YES';
            }
          }
        }, {
          key: "canExit",
          value: function canExit() {
            var _this13 = this;

            var isExit = false;

            if (this.ruleMappingForm.touched && this.formTouched == true) {
              return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
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

                  _this13.cdr.markForCheck();

                  return isExit;
                } else {
                  isExit = false;

                  _this13.cdr.markForCheck();

                  return isExit;
                }
              });
            } else {
              isExit = true;
              return new Promise(function (resolve, reject) {
                if (isExit === true) {
                  isExit = true;

                  _this13.cdr.markForCheck();

                  resolve(true);
                }
              });
            }
          }
        }, {
          key: "getRuleMappingDetails",
          value: function getRuleMappingDetails() {
            return this.formBuilder.group({
              id: [''],
              defaultValue: [''],
              messageMappingId: [''],
              sourceTransDetId: [''],
              targetTransDetId: [''],
              sourceKey: [''],
              destinationKey: ['']
            });
          }
        }, {
          key: "indexTracker",
          value: function indexTracker(index, value) {
            return index;
          }
        }, {
          key: "rulemappingDetails",
          get: function get() {
            return this.ruleMappingForm.get('rulemappingDetails');
          }
        }, {
          key: "addRuleDetail",
          value: function addRuleDetail() {
            this.rulemappingDetails.push(this.getRuleMappingDetails());
            console.log(this.rulemappingDetails.value);
          }
        }, {
          key: "deleteRuleMapGroup",
          value: function deleteRuleMapGroup(index) {
            this.rulemappingDetails.removeAt(index);
          }
        }, {
          key: "gettingExternalsystem",
          value: function gettingExternalsystem() {
            var _this14 = this;

            this.rulemap.gettingExternalsystem().subscribe(function (extSysResp) {
              console.log("extSysResp", extSysResp);
              _this14.externalSystem = extSysResp;
            }, function (err) {
              console.log("err", err);
            });
          }
        }, {
          key: "EditFetch",
          value: function EditFetch() {
            this.editFetch = true;
            console.log("edit");

            if (this.addSysRespData.recordStatus == "C") {
              this.editFetch = false; // Swal.fire("Closed record can't be edited.");

              this.toastService.successMessage('Closed record can\'t be edited.', '');
            }
          }
        }, {
          key: "Edit",
          value: function Edit() {
            console.log("edit");

            if (this.addSysRespData.approvedStatus == "U") {
              this.edit = false; // Swal.fire("UnAuthorized record can't be  edited.");

              this.toastService.successMessage('UnAuthorized record can\'t be  edited', '');
            }

            if (this.addSysRespData.recordStatus == "C") {
              this.edit = false; // Swal.fire("Closed record can't be edited.");

              this.toastService.successMessage('Closed record can\'t be edited.', '');
            }

            this.edit = true;
          }
        }, {
          key: "gettingTranslationData",
          value: function gettingTranslationData(sourseSys) {
            var _this15 = this;

            this.sourseSys = sourseSys;
            this.rulemap.gettingTranslationData(this.sourseSys).subscribe(function (resp) {
              console.log("trans ?", resp);
              _this15.rulemapping = resp;

              _this15.ruleMappingForm.patchValue(resp);

              _this15.gettingoperationAandserv(resp.systemCode, resp.messageType);

              _this15.rulemapping.sourceTranslationId = resp.systemCode;
            });
            this.fetchDestination();
          }
        }, {
          key: "gettingTranslationDataForDest",
          value: function gettingTranslationDataForDest(destSys) {
            var _this16 = this;

            this.rulemap.gettingTranslationData(destSys).subscribe(function (resp) {
              console.log("Dset", resp);
              _this16.rulemappingdest = resp;

              _this16.ruleMappingForm.get('destinationSystems').patchValue(resp);

              _this16.gettingmsgTypeAndDestination(resp.systemCode, resp.messageType);

              _this16.rulemappingdest.targetTranslationId = resp.systemCode;
            });
          }
        }, {
          key: "onAuthOfRuleMapping",
          value: function onAuthOfRuleMapping() {
            var _this17 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Authorize record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info'
            }).then(function (result) {
              console.log("this is reopen ", result);

              if (result.isConfirmed === true) {
                if (_this17.currentUser == _this17.addSysRespData.creatorId) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Maker cannot authorize the record!'); // this.toastService.successMessage('Maker cannot authorize!', '');
                } else {
                  var payloadObj = {};
                  console.log(_this17.ruleMappingDataForPayload);
                  payloadObj = _this17.ruleMappingDataForPayload;
                  payloadObj.msgMappingDetails = _this17.rulemappingDetail;
                  console.log(payloadObj);

                  if (payloadObj.recordStatus == 'OPEN') {
                    payloadObj.recordStatus = 'O';
                  }

                  if (payloadObj.recordStatus == 'CLOSED') {
                    payloadObj.recordStatus = 'C';
                  }

                  console.log(payloadObj);

                  if (payloadObj.approvedEver == 'YES') {
                    payloadObj.approvedEver = 'Y';
                  }

                  _this17.rulemap.editRuleMapping("auth", _this17.currentUser, payloadObj).subscribe(function (resp) {
                    _this17.authorizeDone = true;
                    _this17.addSysRespData = resp;

                    _this17.auditLog();

                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: 'Record is Authorized'
                    }); // this.toastService.successMessage('Record Authorized!', '');
                  });
                }
              }
            });
          }
        }, {
          key: "onCloseOfRuleMapping",
          value: function onCloseOfRuleMapping() {
            var _this18 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to close record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3e54b8',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info',
              iconColor: "#d33"
            }).then(function (result) {
              console.log("this is reopen ", result);

              if (result.isConfirmed === true) {
                var payloadObj = {};
                payloadObj = _this18.ruleMappingDataForPayload;
                payloadObj.msgMappingDetails = _this18.rulemappingDetail;

                if (payloadObj.approvedEver == 'YES') {
                  payloadObj.approvedEver = 'Y';
                }

                _this18.rulemap.editRuleMapping("close", _this18.currentUser, payloadObj).subscribe(function (resp) {
                  _this18.addSysRespData = resp;

                  _this18.auditLog();

                  _this18.editBtn = true;
                  _this18.authBtn = true;
                  _this18.deleted = false;
                  _this18.reopenBtn = false;
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    text: 'Record is  Closed',
                    icon: 'success'
                  }); // this.toastService.successMessage('Record is Closed', '');
                });
              }
            });
          }
        }, {
          key: "onOpenRuleMapping",
          value: function onOpenRuleMapping() {
            var _this19 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to re-open record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3e54b8',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info',
              iconColor: "#d33"
            }).then(function (result) {
              console.log("this is reopen ", result);

              if (result.isConfirmed === true) {
                var payloadObj = {};
                payloadObj = _this19.ruleMappingDataForPayload;
                payloadObj.msgMappingDetails = _this19.rulemappingDetail;

                if (payloadObj.approvedEver == 'YES') {
                  payloadObj.approvedEver = 'Y';
                }

                _this19.rulemap.editRuleMapping("open", _this19.currentUser, payloadObj).subscribe(function (resp) {
                  _this19.addSysRespData = resp;

                  _this19.auditLog();

                  _this19.authBtnHide = false;
                  _this19.editBtn = false;
                  _this19.authBtn = false;
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    text: 'Record is Opened',
                    icon: 'success'
                  }); // this.toastService.successMessage('Record Opened!', '');
                });
              }
            });
          }
        }, {
          key: "deleteRuleMapping",
          value: function deleteRuleMapping() {
            var _this20 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to delete record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3e54b8',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info',
              iconColor: "#d33"
            }).then(function (result) {
              console.log("this is reopen ", result);

              if (result.isConfirmed === true) {
                console.log(_this20.addSysRespData.mappingId);

                _this20.rulemap.ondeleteMapping(_this20.addSysRespData.mappingId, _this20.currentUser).subscribe(function (resp) {
                  if (resp) {
                    _this20.deleted = true;
                    _this20.editBtn = true;
                    _this20.authBtn = true;
                    _this20.closeBtn = true;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record is Deleted',
                      confirmButtonText: 'Ok'
                    }).then(function (result) {
                      if (result) {
                        _this20.router.navigateByUrl('/rule-mapping/summary');
                      }
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire("Failed to delete the reocrd");
                  }
                });
              }
            });
          }
        }, {
          key: "fetchDestination",
          value: function fetchDestination() {
            console.log(this.rulemapping);
            console.log("Rule ,apping", this.ruleMappingForm);
            this.disableFetchBtn = true;
            this.showDestination = true;
            this.showSource = true;
          }
        }, {
          key: "onFieldNameChange",
          value: function onFieldNameChange(event) {
            console.log(event.value);
            var value = event.value;

            if (event.value) {
              var item = this.sourceIsoResp.find(function (element) {
                return element.fieldValue == value;
              });
              console.log(item);
              this.showFieldNoValue = item.fieldNo;
              console.log("ssss", this.showFieldNoValue);
            }
          }
        }, {
          key: "editValues",
          value: function editValues() {
            this.hideFetch = true;
            this.hideSubmit = true;
            this.ruleMappingForm.enable();
            this.editFlag = true; // this.authBtn=false;
            // this.openBtn=false;
            // this.closeBtn=false;
          }
        }, {
          key: "onSubmittingRuleMapping",
          value: function onSubmittingRuleMapping() {
            console.log("submit");
          }
        }, {
          key: "fetchingIso",
          value: function fetchingIso() {
            var _this21 = this;

            this.addSystem.fetchingIsoForTcp().subscribe(function (isoResp) {
              console.log("iss", isoResp);
              _this21.isoRespData = isoResp; // this.fieldNoData=isoResp;

              _this21.messageBasisIso = isoResp.map(function (data) {
                return data.messageBasis;
              });
              _this21.fieldNoData = isoResp.map(function (data) {
                return data.messageBasis;
              });
              _this21.fieldValueData = isoResp.map(function (data) {
                return data.messageKey;
              });
            });
          }
        }, {
          key: "onSourseSelection",
          value: function onSourseSelection(event) {
            console.log(event);
            this.sourseSys = event.value;
          }
        }, {
          key: "onSelectionOFMessageType",
          value: function onSelectionOFMessageType(source, event) {
            console.log("e", event);
            this.sourseSys = source;
            this.gettingoperationAandserv(this.sourseSys, event.value);
          }
        }, {
          key: "gettingoperationAandserv",
          value: function gettingoperationAandserv(system, msgtype) {
            var _this22 = this;

            console.log(system);
            this.rulemap.gettingoperationAndService(system, msgtype, this.currentUser).subscribe(function (sourceResp) {
              console.log("sourceResp", sourceResp);
              _this22.sourceoperation = sourceResp.OPERATION;
              _this22.sourceService = sourceResp.SERVICE;
              _this22.sourceData = sourceResp.MdmtSystemService;
              _this22.sourceLabel = sourceResp.MdmtSystemChannel[0].messageChannel; // this.sourceKey=this.sourceData[0].messageKey + ' ' +this.sourceData[0].messageBasis;

              console.log(_this22.sourceData); // console.log(this.ruleMappingForm.controls.rulemappingDetails.value[0].sourceKey)
              // this.ruleMappingForm.controls.rulemappingDetails.value[0].sourceKey.setValue(this.sourceKey);

              if (_this22.sourceLabel == 'Https/Http') {
                _this22.matlabelSource1 = "Node";
                _this22.matlabelSource2 = "TagName";
              }

              if (_this22.sourceLabel == 'TCP/IP') {
                _this22.matlabelSource1 = "Filed No";
                _this22.matlabelSource2 = "Filed Name";
              } // this.translationData=translationResp;

            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "ondestinationSource",
          value: function ondestinationSource(event) {
            console.log(event.value);
            this.destinationSource = event.value;
          }
        }, {
          key: "msgTypeOfDestination",
          value: function msgTypeOfDestination(event) {
            console.log(event.value);
            this.gettingmsgTypeAndDestination(this.destinationSource, event.value);
          }
        }, {
          key: "gettingmsgTypeAndDestination",
          value: function gettingmsgTypeAndDestination(destinationSource, msgtype) {
            var _this23 = this;

            this.rulemap.gettingoperationAndService(destinationSource, msgtype, this.currentUser).subscribe(function (destinationResp) {
              console.log("destinationResp", destinationResp);
              _this23.destinationOperation = destinationResp.OPERATION;
              _this23.destinationService = destinationResp.SERVICE;
              _this23.destinationData = destinationResp.MdmtSystemService;
              _this23.labelsDestination = destinationResp.MdmtSystemChannel[0].messageChannel;
              console.log(_this23.labelsDestination);

              if (_this23.labelsDestination == 'Https/Http') {
                _this23.matLabel = "Node";
                _this23.matLabel2 = "Tag Name";
              } else if (_this23.labelsDestination == 'TCP/IP') {
                _this23.matLabel = "Filed No";
                _this23.matLabel2 = "Filed Name";
              } // this.rulemappingData=[...this.sourceData,...this.destinationData]


              console.log(_this23.rulemappingData); // this.translationData=translationResp;
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "onSelectingMessageBasis",
          value: function onSelectingMessageBasis(event) {
            var _this24 = this;

            console.log("option for fieldno", event.value);
            console.log(event.value);
            var x = this.isoRespData.find(function (item) {
              return item.messageBasis == event.value;
            });
            this.isoRespData.forEach(function (data) {
              data.messageKey = x.messageKey;
              _this24.tagName = data.messageKey;
              data.dataType = x.dataType;
            });
          }
        }, {
          key: "onsaveRuleMapping",
          value: function onsaveRuleMapping() {
            var _this25 = this;

            var payloadObj = {};
            payloadObj = this.ruleMappingDataForPayload;
            payloadObj.creatorId = this.currentUser;
            payloadObj.msgMappingDetails = this.rulemappingDetails.value;
            this.rulemap.updatingRuleMapping(payloadObj, this.currentUser).subscribe(function (resp) {
              console.log(resp);

              if (resp) {
                _this25.addSysRespData = resp;

                _this25.auditLog();

                _this25.disableSubmitBtn = true;
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: 'Record is Updated',
                  icon: 'success'
                });
                _this25.submit = false;
                _this25.hideFetch = false;
                _this25.formTouched = !_this25.ruleMappingForm.touched;
              }
            }, function (err) {
              console.log(err.error.text);
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                text: 'Unable to update the record, server error!',
                icon: 'error'
              });
            });
          }
        }]);

        return _RuleMappingDetailsComponent;
      }();

      _RuleMappingDetailsComponent.ɵfac = function RuleMappingDetailsComponent_Factory(t) {
        return new (t || _RuleMappingDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_2__.RuleService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_4__.AddSystemService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder));
      };

      _RuleMappingDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _RuleMappingDetailsComponent,
        selectors: [["npr-rule-mapping-details"]],
        decls: 181,
        vars: 22,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "formStyle", 3, "formGroup"], [3, "disabled"], [1, "dbCardStyle"], [1, "addformCol"], [1, "row", "g-4", "align-items-center"], [1, "col"], [1, "row", "gy-4", "align-items-end"], [1, "col-lg-3"], ["for", "roleName", 1, "formLbl"], [1, "colorRed"], ["type", "text", "id", "ruleName", "name", "serviceNameS", "placeholder", "Service Name", "formControlName", "systemCode", "readonly", "", 1, "form-control"], ["formControlName", "messageType", "aria-label", "Default select example", 1, "form-select", 3, "disabled", "change"], ["hidden", "", "value", "", "disabled", "", "selected", ""], ["value", "I"], ["value", "O"], ["value", "A"], ["type", "text", "name", "operationName", "placeholder", "Operation Name", "formControlName", "operationName", "readonly", "", 1, "form-control"], ["type", "text", "name", "serviceName", "placeholder", "Service Name", "formControlName", "serviceName", "readonly", "", 1, "form-control"], ["formGroupName", "destinationSystems"], ["readonly", "", "formControlName", "messageType", "aria-label", "Default select example", 1, "form-select", 3, "disabled", "change"], ["readonly", "", "type", "text", "name", "operationName", "placeholder", "Operation Name", "formControlName", "operationName", "readonly", "", 1, "form-control"], ["readonly", "", "type", "text", "name", "serviceName", "placeholder", "Service Name", "formControlName", "serviceName", 1, "form-control", 3, "disabled"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], [1, "col-auto", 3, "hidden"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], ["class", "dbCardStyle", 4, "ngIf"], [1, "dbCardStyle", "mt-20"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "col-auto"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], [1, "fa", "fa-edit", "faClass"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["aria-hidden", "true", 1, "fa", "fa-files-o", "faRecordStatus"], [1, "csCardStyleIcon", "csCardStyleIconBg4"], [1, "fa", "fa-check-square-o", "faClassChecker"], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], [1, "fa", "fa-shield", "faClassFirstTimeAuth"], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/authorize.svg", "alt", "...", 1, "modImage"], ["src", "assets/images/modification.svg", "alt", "...", 1, "modImage"], ["formArrayName", "rulemappingDetails", 1, "addformCol"], [4, "ngFor", "ngForOf"], [1, "row", "g-3", "pt-4"], ["class", "addIcon primarybg", 3, "hidden", "click", 4, "ngIf"], [1, "row", "g-3", "pb-3", "pt-4", "justify-content-end"], ["class", "col-auto", 3, "hidden", 4, "ngIf"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [3, "formGroupName"], [1, "row", "gy-4"], [1, "col-lg-4"], ["for", "roleName", "class", "formLbl", 4, "ngIf"], [1, "col-lg-12"], [4, "ngIf"], ["for", "defaultValue", "class", "formLbl", 4, "ngIf"], [3, "hidden", "ngStyle"], ["class", "deleteIcon2", "style", "cursor: pointer;", 3, "click", 4, "ngIf"], ["formControlName", "sourceKey", "aria-label", "Default select example", 1, "form-select", 3, "disabled", "value"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["formControlName", "destinationKey", "aria-label", "Default select example", 1, "form-select", 3, "value"], ["for", "defaultValue", 1, "formLbl"], ["type", "text", "id", "defaultVal", "formControlName", "defaultValue", "placeholder", "Default value", 2, "background-color", "#F8F9FA", 3, "ngClass", "readonly"], ["type", "text", "id", "defaultVal", "formControlName", "defaultValue", "placeholder", "Default value", 2, "background-color", "#FFFFFF", 3, "ngClass"], [1, "deleteIcon2", 2, "cursor", "pointer", 3, "click"], ["src", "assets/images/delete-icon.svg", "alt", "...", 3, "ngClass"], [1, "addIcon", "primarybg", 3, "hidden", "click"], ["src", "assets/images/plus-icon.svg", "alt", "..."], [1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"]],
        template: function RuleMappingDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Rule Mapping");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "fieldset", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Source System");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Message Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RuleMappingDetailsComponent_Template_select_change_22_listener($event) {
              return ctx.onSelectionOFMessageType(ctx.rulemapping.sourceTranslationId, $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "--Please select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, " Incoming ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, " Outgoing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, " All ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Operation");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Service");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](43, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Destination System");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](49, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "Message Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "select", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RuleMappingDetailsComponent_Template_select_change_55_listener($event) {
              return ctx.msgTypeOfDestination($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "--Please select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, " Incoming ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, " Outgoing ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, " All ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, "Operation");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](69, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "Service");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](75, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleMappingDetailsComponent_Template_button_click_78_listener() {
              return ctx.fetchDestination();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, " Fetch ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](80, RuleMappingDetailsComponent_div_80_Template, 19, 11, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](88, "i", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](92, "Maker");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](94);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](100, "img", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](101, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](104, "Maker Time Stamp");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](106);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](107, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](111, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](113, "i", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](114, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](115, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](117, "Record Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](118, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](119);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](120, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](122, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](124, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](125, "i", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](126, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](127, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](128, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](129, "Checker");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](130, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](131);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](132, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](133, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](134, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](135, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](136, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](137, "img", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](138, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](139, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](140, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](141, "Checker Time Stamp");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](142, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](143);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](144, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](145, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](146, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](147, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](148, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](149, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](150, "i", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](151, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](152, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](153, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](154, "First Time Auth");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](155, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](156);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](157, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](158, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](159, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](160, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](161, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](162, "img", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](163, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](164, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](165, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](166, "Auth Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](167, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](168);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](169, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](170, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](171, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](172, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](173, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](174, "img", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](175, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](176, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](177, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](178, "Modification Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](179, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](180);

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
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.ruleMappingForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.disableFields);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.editFetch);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.editFetch);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.editFetch);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx.hideFetch);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.disableFetchBtn);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showSource || ctx.showDestination);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.addSysRespData.creatorId);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](107, 16, ctx.addSysRespData.createdTime, "MM/dd/yyyy, h:mm a"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.addSysRespData.recordStatus == "O" ? "OPEN" : ctx.addSysRespData.recordStatus == "C" ? "CLOSED" : ctx.addSysRespData.recordStatus);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.addSysRespData.approverId);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](144, 19, ctx.addSysRespData.approvedTime, "MM/dd/yyyy, h:mm a"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.addSysRespData.approvedEver == "N" ? "NO" : ctx.addSysRespData.approvedEver == "Y" ? "YES" : ctx.addSysRespData.approvedEver);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.addSysRespData.approvedStatus == "N" || ctx.addSysRespData.approvedStatus == "U" ? "UNAUTHORIZED" : ctx.addSysRespData.approvedStatus == "Y" || ctx.addSysRespData.approvedStatus == "A" ? "AUTHORIZED" : ctx.addSysRespData.approvedStatus);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.addSysRespData.versionNo);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
        styles: [".m-10[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.path[_ngcontent-%COMP%] {\n  vertical-align: top;\n  margin-top: 0px;\n  margin-bottom: 20px;\n  min-width: 120px;\n  border-spacing: 1.5;\n}\n\n.first[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.image[_ngcontent-%COMP%] {\n  vertical-align: top;\n  top: -8px;\n  position: relative;\n}\n\n.first-image[_ngcontent-%COMP%] {\n  top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUtbWFwcGluZy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBRUEsZ0JBQUE7RUFFQSxtQkFBQTtBQUFKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxRQUFBO0FBQ0oiLCJmaWxlIjoicnVsZS1tYXBwaW5nLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubS0xMHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHhcclxufVxyXG4ucGF0aHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAvLyBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAvL3dpZHRoOiA1MHB4O1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDEuNTtcclxufVxyXG4uZmlyc3Qge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmltYWdle1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIHRvcDogLThweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmZpcnN0LWltYWdlIHtcclxuICAgIHRvcDogOHB4O1xyXG59XHJcbiJdfQ== */"]
      });

      var _MdmtMessageMapping2 = /*#__PURE__*/_createClass(function _MdmtMessageMapping2() {
        _classCallCheck(this, _MdmtMessageMapping2);
      });

      var _MdmtMessageMappingDet2 = /*#__PURE__*/_createClass(function _MdmtMessageMappingDet2() {
        _classCallCheck(this, _MdmtMessageMappingDet2);
      });

      var _ruleMapDto2 = /*#__PURE__*/_createClass(function _ruleMapDto2() {
        _classCallCheck(this, _ruleMapDto2);
      });
      /***/

    },

    /***/
    9216:
    /*!*******************************************************************!*\
      !*** ./src/app/views/rule-mapping/rule-mapping-routing.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RuleMappingRoutingModule": function RuleMappingRoutingModule() {
          return (
            /* binding */
            _RuleMappingRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/guards/can-deactivate.guard */
      50215);
      /* harmony import */


      var _conversion_conversion_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./conversion/conversion.component */
      74982);
      /* harmony import */


      var _rule_mapping_create_rule_mapping_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./rule-mapping-create/rule-mapping-create.component */
      7622);
      /* harmony import */


      var _rule_mapping_details_rule_mapping_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./rule-mapping-details/rule-mapping-details.component */
      50531);
      /* harmony import */


      var _rule_mapping_rule_mapping_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./rule-mapping/rule-mapping.component */
      49);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: 'create',
        component: _rule_mapping_create_rule_mapping_create_component__WEBPACK_IMPORTED_MODULE_2__.RuleMappingCreateComponent,
        canDeactivate: [src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__.CanDeactivateGuard]
      }, {
        path: 'edit/:mapId',
        component: _rule_mapping_details_rule_mapping_details_component__WEBPACK_IMPORTED_MODULE_3__.RuleMappingDetailsComponent,
        canDeactivate: [src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__.CanDeactivateGuard]
      }, {
        path: 'summary',
        component: _rule_mapping_rule_mapping_component__WEBPACK_IMPORTED_MODULE_4__.RuleMappingComponent
      }, {
        path: 'conversion',
        component: _conversion_conversion_component__WEBPACK_IMPORTED_MODULE_1__.ConversionComponent
      }];

      var _RuleMappingRoutingModule = /*#__PURE__*/_createClass(function _RuleMappingRoutingModule() {
        _classCallCheck(this, _RuleMappingRoutingModule);
      });

      _RuleMappingRoutingModule.ɵfac = function RuleMappingRoutingModule_Factory(t) {
        return new (t || _RuleMappingRoutingModule)();
      };

      _RuleMappingRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _RuleMappingRoutingModule
      });
      _RuleMappingRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_RuleMappingRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    8690:
    /*!***********************************************************!*\
      !*** ./src/app/views/rule-mapping/rule-mapping.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RuleMappingModule": function RuleMappingModule() {
          return (
            /* binding */
            _RuleMappingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _rule_mapping_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./rule-mapping-routing.module */
      9216);
      /* harmony import */


      var _rule_mapping_rule_mapping_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./rule-mapping/rule-mapping.component */
      49);
      /* harmony import */


      var _rule_mapping_details_rule_mapping_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./rule-mapping-details/rule-mapping-details.component */
      50531);
      /* harmony import */


      var _rule_mapping_create_rule_mapping_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./rule-mapping-create/rule-mapping-create.component */
      7622);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular-datatables */
      50481);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _conversion_conversion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./conversion/conversion.component */
      74982);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-select/ng-select */
      88660);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _RuleMappingModule = /*#__PURE__*/_createClass(function _RuleMappingModule() {
        _classCallCheck(this, _RuleMappingModule);
      });

      _RuleMappingModule.ɵfac = function RuleMappingModule_Factory(t) {
        return new (t || _RuleMappingModule)();
      };

      _RuleMappingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: _RuleMappingModule
      });
      _RuleMappingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _rule_mapping_routing_module__WEBPACK_IMPORTED_MODULE_0__.RuleMappingRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_4__.DataTablesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](_RuleMappingModule, {
          declarations: [_rule_mapping_rule_mapping_component__WEBPACK_IMPORTED_MODULE_1__.RuleMappingComponent, _rule_mapping_details_rule_mapping_details_component__WEBPACK_IMPORTED_MODULE_2__.RuleMappingDetailsComponent, _rule_mapping_create_rule_mapping_create_component__WEBPACK_IMPORTED_MODULE_3__.RuleMappingCreateComponent, _conversion_conversion_component__WEBPACK_IMPORTED_MODULE_5__.ConversionComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _rule_mapping_routing_module__WEBPACK_IMPORTED_MODULE_0__.RuleMappingRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_4__.DataTablesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule]
        });
      })();
      /***/

    },

    /***/
    49:
    /*!***************************************************************************!*\
      !*** ./src/app/views/rule-mapping/rule-mapping/rule-mapping.component.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RuleMappingComponent": function RuleMappingComponent() {
          return (
            /* binding */
            _RuleMappingComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      79441);
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/rule.service */
      50511);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      77382);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/add-system.service */
      91973);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angular-datatables */
      50481);

      var _c0 = function _c0() {
        return ["/rule-mapping/create"];
      };

      var _c1 = function _c1() {
        return ["active"];
      };

      function RuleMappingComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](3, _c0))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](4, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.roleCodes["new"].labelDescription);
        }
      }

      function RuleMappingComponent_tr_27_button_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleMappingComponent_tr_27_button_16_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);

            var data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r7.close(data_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingComponent_tr_27_button_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleMappingComponent_tr_27_button_17_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);

            var data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r10.open(data_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingComponent_tr_27_button_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleMappingComponent_tr_27_button_18_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);

            var data_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r13["delete"](data_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RuleMappingComponent_tr_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleMappingComponent_tr_27_Template_a_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);

            var data_r3 = restoredCtx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r16.getById(data_r3);
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

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleMappingComponent_tr_27_Template_button_click_14_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);

            var data_r3 = restoredCtx.$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r18.auth(data_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, RuleMappingComponent_tr_27_button_16_Template, 2, 0, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, RuleMappingComponent_tr_27_button_17_Template, 2, 0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, RuleMappingComponent_tr_27_button_18_Template, 2, 0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r3.sourceTranslationId);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r3.targetTranslationId);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r3.approvedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r3.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](12, 9, data_r3.createdTime, "medium"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !(data_r3.approvedStatus == "U" || data_r3.approvedStatus == "UNAUTHORIZED" || data_r3.approvedStatus == "Unauthorized"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (data_r3.recordStatus == "O" || data_r3.recordStatus == "Open" || data_r3.recordStatus == "OPEN") && (data_r3.approvedEver == "Y" || data_r3.approvedEver == "YES"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (data_r3.recordStatus == "CLOSED" || data_r3.recordStatus == "Close") && (data_r3.approvedEver == "YES" || data_r3.approvedEver == "Y"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", data_r3.approvedEver == "N" || data_r3.approvedEver == "NO");
        }
      }

      function RuleMappingComponent_ng_container_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Please wait... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }
      }

      var _c2 = function _c2() {
        return ["/dashboard"];
      };

      var _RuleMappingComponent = /*#__PURE__*/function () {
        function _RuleMappingComponent(rulelist, roleService, router, addSystem, cdr) {
          _classCallCheck(this, _RuleMappingComponent);

          this.rulelist = rulelist;
          this.roleService = roleService;
          this.router = router;
          this.addSystem = addSystem;
          this.cdr = cdr;
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
          this.dtOptions = {};
          this.ruleMappingListResp = [];
          this.isLoading = false;
          this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__.permissionsLabels();
          this.statusArr = ['Authorized', 'Unauthorized', 'Open', 'Close'];
        }

        _createClass(_RuleMappingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this26 = this;

            this.currentUser = localStorage.getItem('userFromLogin');
            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 5,
              columnDefs: [{
                type: 'date',
                targets: [4]
              }],
              order: [[4, 'desc']],
              processing: true,
              lengthMenu: [[5, 10, 20, 30, -1], [5, 10, 20, 30, "ALL"]] // columnDefs: [ { type: 'date', 'targets': [5] } ],
              // order: [[5, 'desc']],

            };
            this.fetchinglistRuleMapping();
            this.roleService.fetchScreenPermissions('Rule Mapping');
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this26.roleCodes = message;
            });
            console.log(this.roleCodes);
          }
        }, {
          key: "fetchinglistRuleMapping",
          value: function fetchinglistRuleMapping() {
            var _this27 = this;

            this.isLoading = true;
            this.rulelist.fetchingruleMapping().subscribe(function (resp) {
              var _iterator = _createForOfIteratorHelper(resp.result),
                  _step;

              try {
                var _loop = function _loop() {
                  var item = _step.value;
                  item.recordStatus = _this27.statusArr.find(function (i) {
                    return i.startsWith(item.recordStatus);
                  });
                  item.approvedStatus = _this27.statusArr.find(function (i) {
                    return i.startsWith(item.approvedStatus);
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

              console.log(resp);
              _this27.ruleMappingListResp = resp.result;
              _this27.isLoading = false;

              _this27.cdr.markForCheck();

              _this27.dtTrigger.next();
            });
          }
        }, {
          key: "getById",
          value: function getById(data) {
            var _this28 = this;

            console.log('OnClick', data);
            var id = 0;

            if (data.msgMappingDetails.length > 0) {
              id = data.msgMappingDetails[0].messageMappingId;
            }

            this.rulelist.getruleMappingById(id, data.mappingId).subscribe(function (resp) {
              console.log(resp);
              var queryParams = {
                sourceTransDetId: resp.sourceTransDetId,
                targetTransDetId: resp.targetTransDetId,
                mdmtMessageMappingDet: resp.mdmtMessageMappingDet,
                responseData: data
              };
              console.log(queryParams);

              _this28.addSystem.sendNavParam(queryParams);

              _this28.router.navigate(['/rule-mapping/edit', data.mappingId]);
            });
          }
        }, {
          key: "open",
          value: function open(data) {
            var _this29 = this;

            console.log(data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to re-open record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3e54b8',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info',
              iconColor: "#d33"
            }).then(function (result) {
              console.log("this is reopen ", result);

              if (result.isConfirmed === true) {
                _this29.rulelist.editRuleMapping("open", _this29.currentUser, data).subscribe(function (resp) {
                  _this29.addSysRespData = resp;
                  _this29.authBtnHide = false;
                  _this29.editBtn = false;
                  _this29.authBtn = false;
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    text: 'Record is Opened',
                    icon: 'success'
                  }).then(function () {
                    return window.location.reload();
                  }); // this.toastService.successMessage('Record Opened!', '');
                });
              }
            });
          }
        }, {
          key: "close",
          value: function close(data) {
            var _this30 = this;

            console.log(data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to close record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3e54b8',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info',
              iconColor: "#d33"
            }).then(function (result) {
              console.log("this is reopen ", result);

              if (result.isConfirmed === true) {
                // let payloadObj: any = {};
                // payloadObj = this.ruleMappingDataForPayload;
                // payloadObj.msgMappingDetails = this.rulemappingDetail;
                _this30.rulelist.editRuleMapping("close", _this30.currentUser, data).subscribe(function (resp) {
                  _this30.addSysRespData = resp;
                  _this30.editBtn = true;
                  _this30.authBtn = true;
                  _this30.deleted = false;
                  _this30.reopenBtn = false;
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    text: 'Record is  Closed',
                    icon: 'success'
                  }).then(function () {
                    return window.location.reload();
                  }); // this.toastService.successMessage('Record is Closed', '');
                });
              }
            });
          }
        }, {
          key: "delete",
          value: function _delete(data) {
            var _this31 = this;

            console.log(data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to delete record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3e54b8',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info',
              iconColor: "#d33"
            }).then(function (result) {
              console.log("this is reopen ", result);

              if (result.isConfirmed === true) {
                _this31.rulelist.ondeleteMapping(data.mappingId, _this31.currentUser).subscribe(function (resp) {
                  if (resp) {
                    _this31.deleted = true;
                    _this31.editBtn = true;
                    _this31.authBtn = true;
                    _this31.closeBtn = true; // this.toastService.successMessage('Deleted Successfully!', '');

                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Record is Deleted',
                      confirmButtonText: 'Ok'
                    }).then(function () {
                      return window.location.reload();
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Failed to delete the reocrd");
                  }
                });
              }
            });
          }
        }, {
          key: "auth",
          value: function auth(data) {
            var _this32 = this;

            console.log(data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Authorize record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info'
            }).then(function (result) {
              console.log("this is reopen ", result);

              if (result.isConfirmed === true) {
                console.log(data.creatorId);

                if (_this32.currentUser == data.creatorId) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Maker cannot authorize the record!'); // this.toastService.successMessage('Maker cannot authorize!', '');
                } else {
                  _this32.rulelist.editRuleMapping("auth", _this32.currentUser, data).subscribe(function (resp) {
                    _this32.authorizeDone = true;
                    _this32.addSysRespData = resp;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: 'Record is Authorized'
                    }).then(function () {
                      return window.location.reload();
                    }); // this.toastService.successMessage('Record Authorized!', '');
                  });
                }
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Do not forget to unsubscribe the event
            this.dtTrigger.unsubscribe();
          }
        }]);

        return _RuleMappingComponent;
      }();

      _RuleMappingComponent.ɵfac = function RuleMappingComponent_Factory(t) {
        return new (t || _RuleMappingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_2__.RuleService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_4__.AddSystemService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
      };

      _RuleMappingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _RuleMappingComponent,
        selectors: [["npr-rule-mapping"]],
        decls: 29,
        vars: 7,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [1, "table-responsive"], ["datatable", "", "id", "dbTable1", 1, "dataTable", "table", "tableStyle", "nowrap", "vAlignMdl", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "routerLink", "routerLinkActive"], [1, "primaryColor", 2, "cursor", "pointer", 3, "click"], ["title", "Authorize", 1, "btn", 2, "color", "red", 3, "disabled", "click"], ["src", "assets/images/authorize.svg", "alt", "Authorize"], ["class", "btn", "style", "color: red", "title", "Close", 3, "click", 4, "ngIf"], ["class", "btn", "style", "color: red", "title", "Reopen", 3, "click", 4, "ngIf"], ["class", "btn", "style", "color: red", "title", "Delete", 3, "click", 4, "ngIf"], ["title", "Close", 1, "btn", 2, "color", "red", 3, "click"], ["src", "assets/images/CROSS1.svg", "alt", "..."], ["title", "Reopen", 1, "btn", 2, "color", "red", 3, "click"], ["src", "assets/images/open.svg", "alt", "..."], ["title", "Delete", 1, "btn", 2, "color", "red", 3, "click"], ["src", "assets/images/delete.svg", "alt", "..."], [1, "loading-page-center"], [1, "indicator-progress"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"]],
        template: function RuleMappingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Rule Mapping");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, RuleMappingComponent_div_6_Template, 3, 5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Source System");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Destination System");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Auth Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Record Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, RuleMappingComponent_tr_27_Template, 19, 12, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, RuleMappingComponent_ng_container_28_Template, 5, 0, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.roleCodes["new"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.ruleMappingListResp);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, angular_datatables__WEBPACK_IMPORTED_MODULE_5__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkActive],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJydWxlLW1hcHBpbmcuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_views_rule-mapping_rule-mapping_module_ts-es5.js.map