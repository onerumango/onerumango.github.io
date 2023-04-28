(function () {
  "use strict";

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_rule-translation_rule-translation_module_ts"], {
    /***/
    62393:
    /*!*******************************************************************************************************!*\
      !*** ./src/app/views/rule-translation/rule-translation-details/rule-translation-details.component.ts ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RuleTranslationDetailsComponent": function RuleTranslationDetailsComponent() {
          return (
            /* binding */
            _RuleTranslationDetailsComponent
          );
        },

        /* harmony export */
        "msgTranslation": function msgTranslation() {
          return (
            /* binding */
            _msgTranslation
          );
        },

        /* harmony export */
        "translationDeatils": function translationDeatils() {
          return (
            /* binding */
            _translationDeatils
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
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


      var src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/add-system.service */
      91973);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/guards/can-deactivate.guard */
      50215);
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      31443);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ng-select/ng-select */
      88660);

      var _c0 = ["fileWrapper"];

      function RuleTranslationDetailsComponent_form_4_ng_option_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ng-option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var extsys_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", extsys_r22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", extsys_r22, " ");
        }
      }

      function RuleTranslationDetailsComponent_form_4_div_26_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var opt_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", opt_r24.headerValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", opt_r24.headerValue, " ");
        }
      }

      function RuleTranslationDetailsComponent_form_4_div_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "select", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, RuleTranslationDetailsComponent_form_4_div_26_option_4_Template, 2, 2, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.translationDataOperation);
        }
      }

      function RuleTranslationDetailsComponent_form_4_div_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleTranslationDetailsComponent_form_4_div_31_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var serv_r26 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", serv_r26.headerValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", serv_r26.headerValue, " ");
        }
      }

      function RuleTranslationDetailsComponent_form_4_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "select", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, RuleTranslationDetailsComponent_form_4_div_31_option_4_Template, 2, 2, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r5.translationDataService);
        }
      }

      function RuleTranslationDetailsComponent_form_4_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleTranslationDetailsComponent_form_4_div_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleTranslationDetailsComponent_form_4_div_33_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r28.chooseFile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 41, 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RuleTranslationDetailsComponent_form_4_div_33_Template_input_change_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r30.selectFileFORHTTPXMLIncoming($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r7.editValue);
        }
      }

      function RuleTranslationDetailsComponent_form_4_button_37_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleTranslationDetailsComponent_form_4_button_37_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r31.onFetch();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Fetch");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r8.editValue);
        }
      }

      function RuleTranslationDetailsComponent_form_4_ng_container_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Field No");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }
      }

      function RuleTranslationDetailsComponent_form_4_ng_container_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Tag");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }
      }

      function RuleTranslationDetailsComponent_form_4_ng_container_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "kEY");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }
      }

      function RuleTranslationDetailsComponent_form_4_ng_container_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Column Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }
      }

      function RuleTranslationDetailsComponent_form_4_ng_container_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Data type");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }
      }

      function RuleTranslationDetailsComponent_form_4_ng_container_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Data type");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }
      }

      function RuleTranslationDetailsComponent_form_4_tr_68_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("readonly", !ctx_r35.editValue);
        }
      }

      function RuleTranslationDetailsComponent_form_4_tr_68_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("id", "fieldNo_", i_r34, "");
        }
      }

      function RuleTranslationDetailsComponent_form_4_tr_68_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("readonly", !ctx_r37.editValue);
        }
      }

      function RuleTranslationDetailsComponent_form_4_tr_68_ng_container_6_option_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r46 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", data_r46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", data_r46, " ");
        }
      }

      function RuleTranslationDetailsComponent_form_4_tr_68_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "select", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, RuleTranslationDetailsComponent_form_4_tr_68_ng_container_6_option_2_Template, 2, 2, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("id", "fieldNo_", i_r34, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r38.editValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r38.messageBasisIso);
        }
      }

      function RuleTranslationDetailsComponent_form_4_tr_68_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("id", "db_", i_r34, "");
        }
      }

      function RuleTranslationDetailsComponent_form_4_tr_68_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "select", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "option", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " VARCHAR2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "option", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " NUMBER ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "option", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " DATE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("id", "dataType_", i_r34, "");
        }
      }

      function RuleTranslationDetailsComponent_form_4_tr_68_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "select", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Numeric ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " Alpha Numeric ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", "numeric");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", "alphaNumeric");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", "date");
        }
      }

      function RuleTranslationDetailsComponent_form_4_tr_68_ng_container_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "input", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("readonly", !ctx_r42.editValue);
        }
      }

      function RuleTranslationDetailsComponent_form_4_tr_68_a_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleTranslationDetailsComponent_form_4_tr_68_a_27_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r52);

            var i_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().index;

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r50.removeTranslation(i_r34);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", !ctx_r43.editValue ? "readonlyTrue" : "deleteIcon2;readonlyFalse");
        }
      }

      function RuleTranslationDetailsComponent_form_4_tr_68_Template(rf, ctx) {
        if (rf & 1) {
          var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](1, 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, RuleTranslationDetailsComponent_form_4_tr_68_ng_container_3_Template, 2, 1, "ng-container", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, RuleTranslationDetailsComponent_form_4_tr_68_ng_container_4_Template, 2, 1, "ng-container", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, RuleTranslationDetailsComponent_form_4_tr_68_ng_container_5_Template, 2, 1, "ng-container", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, RuleTranslationDetailsComponent_form_4_tr_68_ng_container_6_Template, 3, 3, "ng-container", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, RuleTranslationDetailsComponent_form_4_tr_68_ng_container_7_Template, 2, 1, "ng-container", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, RuleTranslationDetailsComponent_form_4_tr_68_ng_container_9_Template, 10, 1, "ng-container", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, RuleTranslationDetailsComponent_form_4_tr_68_ng_container_10_Template, 10, 3, "ng-container", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, RuleTranslationDetailsComponent_form_4_tr_68_ng_container_11_Template, 2, 1, "ng-container", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "select", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RuleTranslationDetailsComponent_form_4_tr_68_Template_select_change_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r54);

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r53.onSelectionOFMessageType($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "No Encryption");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, " BASE 64 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, " SHA 256 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "option", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, " SHA 512 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "td", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, RuleTranslationDetailsComponent_form_4_tr_68_a_27_Template, 2, 1, "a", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r33 = ctx.$implicit;
          var i_r34 = ctx.index;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", item_r33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r15.showFetch == "TCP/IP");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r15.showFetch == "JSON" && ctx_r15.showFormat === "JSON");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r15.showFetch == "XML" && ctx_r15.showFormat !== "JSON" && !ctx_r15.afterupload);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r15.showFetch == "XML" && ctx_r15.showFormat !== "JSON" && ctx_r15.afterupload);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r15.showFetch == "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r15.showFetch === "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r15.showFetch == "XML" || ctx_r15.showFetch == "JSON");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r15.showFetch == "TCP/IP");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("id", "responseIndicator_", i_r34, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("readonly", !ctx_r15.editValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("id", "encryption_", i_r34, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", "No Encryption");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", "BASE64");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", "SHA256");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", "SHA512");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r15.submit);
        }
      }

      function RuleTranslationDetailsComponent_form_4_button_71_Template(rf, ctx) {
        if (rf & 1) {
          var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleTranslationDetailsComponent_form_4_button_71_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r56);

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r55.addTransaltionGroup("");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleTranslationDetailsComponent_form_4_div_73_Template(rf, ctx) {
        if (rf & 1) {
          var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleTranslationDetailsComponent_form_4_div_73_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r58);

            var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r57.editValues();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r17.hideSubmit);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r17.roleCodes.edit.labelDescription);
        }
      }

      function RuleTranslationDetailsComponent_form_4_div_77_Template(rf, ctx) {
        if (rf & 1) {
          var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleTranslationDetailsComponent_form_4_div_77_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r60);

            var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r59.authorizeRuleTranslation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r18.hideSubmit);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r18.roleCodes.auth.labelDescription);
        }
      }

      function RuleTranslationDetailsComponent_form_4_div_78_Template(rf, ctx) {
        if (rf & 1) {
          var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleTranslationDetailsComponent_form_4_div_78_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r62);

            var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r61.closeRuleTranslation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r19.hideSubmit);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r19.roleCodes.close.labelDescription);
        }
      }

      function RuleTranslationDetailsComponent_form_4_div_79_Template(rf, ctx) {
        if (rf & 1) {
          var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleTranslationDetailsComponent_form_4_div_79_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r64);

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r63.openRuleTranslation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r20.hideSubmit);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r20.roleCodes.reopen.labelDescription);
        }
      }

      function RuleTranslationDetailsComponent_form_4_div_80_Template(rf, ctx) {
        if (rf & 1) {
          var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleTranslationDetailsComponent_form_4_div_80_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r66);

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r65.deleteRuleTranslation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", ctx_r21.hideSubmit);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r21.roleCodes["delete"].labelDescription);
        }
      }

      var _c1 = function _c1() {
        return ["/rule-translation/summary"];
      };

      function RuleTranslationDetailsComponent_form_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "fieldset", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Source System");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "ng-select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RuleTranslationDetailsComponent_form_4_Template_ng_select_change_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r68);

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r67.onSlectionExternalSystem($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "ng-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Please select System");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, RuleTranslationDetailsComponent_form_4_ng_option_12_Template, 2, 2, "ng-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Message Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "select", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function RuleTranslationDetailsComponent_form_4_Template_select_change_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r68);

            var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r69.onSelectionOFMessageType(ctx_r69.ruleTransForm.get("messageType").value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Incoming");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "OutGoing");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Operation");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, RuleTranslationDetailsComponent_form_4_div_26_Template, 5, 1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, RuleTranslationDetailsComponent_form_4_div_27_Template, 2, 0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Service");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, RuleTranslationDetailsComponent_form_4_div_31_Template, 5, 1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, RuleTranslationDetailsComponent_form_4_div_32_Template, 2, 0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, RuleTranslationDetailsComponent_form_4_div_33_Template, 6, 1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, RuleTranslationDetailsComponent_form_4_button_37_Template, 2, 1, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "fieldset", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "table", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](45, RuleTranslationDetailsComponent_form_4_ng_container_45_Template, 2, 0, "ng-container", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, RuleTranslationDetailsComponent_form_4_ng_container_46_Template, 2, 0, "ng-container", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](47, RuleTranslationDetailsComponent_form_4_ng_container_47_Template, 2, 0, "ng-container", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](48, RuleTranslationDetailsComponent_form_4_ng_container_48_Template, 2, 0, "ng-container", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](52, RuleTranslationDetailsComponent_form_4_ng_container_52_Template, 2, 0, "ng-container", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, RuleTranslationDetailsComponent_form_4_ng_container_53_Template, 2, 0, "ng-container", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "Default value");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](61, "Encryption");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](67, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](68, RuleTranslationDetailsComponent_form_4_tr_68_Template, 28, 17, "tr", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](71, RuleTranslationDetailsComponent_form_4_button_71_Template, 3, 0, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](73, RuleTranslationDetailsComponent_form_4_div_73_Template, 3, 2, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleTranslationDetailsComponent_form_4_Template_button_click_75_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r68);

            var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r70.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](77, RuleTranslationDetailsComponent_form_4_div_77_Template, 3, 2, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](78, RuleTranslationDetailsComponent_form_4_div_78_Template, 3, 2, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](79, RuleTranslationDetailsComponent_form_4_div_79_Template, 3, 2, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](80, RuleTranslationDetailsComponent_form_4_div_80_Template, 3, 2, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](83, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r0.ruleTransForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r0.editValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("readonly", !ctx_r0.editValue)("clearable", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.externalSystem);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.multipleOperation);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.multipleOperation);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r0.multipleService);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.multipleService);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.showFetch == "XML" && ctx_r0.showFormat !== "JSON");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.showFetch == "TCP/IP");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r0.editValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.showFetch == "TCP/IP");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.showFetch == "XML" && !ctx_r0.afterupload || ctx_r0.showFetch == "XML" && ctx_r0.afterupload);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.showFetch == "JSON");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.showFetch == "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.showFetch == "JSON" || ctx_r0.showFetch == "XML" || ctx_r0.showFetch == "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.showFetch == "TCP/IP");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r0.msgTransDetails.controls);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.submit);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !(ctx_r0.ruleTRespData.recordStatus == "C" || ctx_r0.ruleTRespData.recordStatus == "CLOSED") && ctx_r0.roleCodes.edit);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", !ctx_r0.hideSubmit);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx_r0.ruleTransForm.dirty);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r0.ruleTRespData.approvedStatus == "U" || ctx_r0.ruleTRespData.approvedStatus == "N" || ctx_r0.ruleTRespData.approvedStatus == "UNAUTHORIZED") && ctx_r0.roleCodes.auth);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r0.ruleTRespData.recordStatus == "O" || ctx_r0.ruleTRespData.recordStatus == "OPEN") && ctx_r0.ruleTRespData.approvedEver != "NO" && ctx_r0.ruleTRespData.approvedEver != "N" && ctx_r0.roleCodes.close);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r0.ruleTRespData.recordStatus == "C" || ctx_r0.ruleTRespData.recordStatus == "CLOSED") && ctx_r0.roleCodes.reopen);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx_r0.ruleTRespData.approvedEver == "NO" || ctx_r0.ruleTRespData.approvedEver == "N") && !ctx_r0.showdelete && ctx_r0.roleCodes["delete"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](28, _c1));
        }
      }

      function RuleTranslationDetailsComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "i", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 74);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "img", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 74);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "img", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 74);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "i", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "div", 74);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](56, "img", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "div", 74);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](69, "img", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73, "First Time Authorization");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](81, "img", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85, "Authorization Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](87);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](93, "img", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "div", 74);

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
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.ruleTRespData.creatorId);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](26, 8, ctx_r1.ruleTRespData.createdTime, "MM/dd/yyyy, h:mm a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.ruleTRespData.recordStatus == "O" ? "OPEN" : ctx_r1.ruleTRespData.recordStatus == "C" ? "CLOSED" : ctx_r1.ruleTRespData.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.ruleTRespData.approverId);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](63, 11, ctx_r1.ruleTRespData.approvedTime, "MM/dd/yyyy, h:mm a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.ruleTRespData.approvedEver == "N" ? "NO" : ctx_r1.ruleTRespData.approvedEver == "Y" ? "YES" : ctx_r1.ruleTRespData.approvedEver);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.ruleTRespData.approvedStatus == "N" || ctx_r1.ruleTRespData.approvedStatus == "U" ? "UNAUTHORIZED" : ctx_r1.ruleTRespData.approvedStatus == "Y" || ctx_r1.ruleTRespData.approvedStatus == "A" ? "AUTHORIZED" : ctx_r1.ruleTRespData.approvedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.ruleTRespData.versionNo);
        }
      }

      var _RuleTranslationDetailsComponent = /*#__PURE__*/function () {
        function _RuleTranslationDetailsComponent(rules, roleService, addSystem, router, cdr, _route, formBuilder, elementRef, canDeactivateGuard, toastService) {
          _classCallCheck(this, _RuleTranslationDetailsComponent);

          this.rules = rules;
          this.roleService = roleService;
          this.addSystem = addSystem;
          this.router = router;
          this.cdr = cdr;
          this._route = _route;
          this.formBuilder = formBuilder;
          this.elementRef = elementRef;
          this.canDeactivateGuard = canDeactivateGuard;
          this.toastService = toastService;
          this.submit = true;
          this.msgTranslation = new _msgTranslation();
          this.translationDeatils = [];
          this.translationDTO = new translationDTO();
          this.showAuditLog = true;
          this.displaySubmit = false;
          this.authorizeDone = false;
          this.hideSubmit = false;
          this.formTouched = true;
          this.showDialog = false;
          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
          this.isSelected = true;
          this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__.permissionsLabels();
          this.disableFields = false;
          this.columnNameDD = [];
        }

        _createClass(_RuleTranslationDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.currentUser = localStorage.getItem('userFromLogin');
            this.ruleTransForm = this.formBuilder.group({
              transId: this.transId,
              systemCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
              messageType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
              serviceName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
              operationName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
              msgTransDetails: this.formBuilder.array([])
            });
            this.gettingExternalsystem();
            this.fetchingHeadertag();
            this.getById(this._route.snapshot.params['id']);
            this.roleService.fetchScreenPermissions('Rule translation');
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this.roleCodes = message;
            });
            setTimeout(function () {
              console.log(_this.roleCodes);
            }, 100);
            this.ruleTransForm.disable();
            this.msgTransDetails.disable();
            console.log(this.msgTransDetails);
          }
        }, {
          key: "getById",
          value: function getById(transId) {
            var _this2 = this;

            this.rules.ruleTranslationBasedonId(transId).subscribe(function (resp) {
              console.log(resp);
              _this2.translationDeatils = resp;
              _this2.editRuleTransResp = resp;
              console.log("editRuleTransResp??", _this2.editRuleTransResp);
              _this2.ruleTRespData = _this2.editRuleTransResp;
              console.log(_this2.ruleTRespData);
              _this2.transId = _this2.ruleTRespData.transId;
              console.log(_this2.transId); // commenting beacuse below array data is not coming

              _this2.msgTranslation.systemCode = _this2.editRuleTransResp["systemCode"];
              _this2.msgTranslation.messageType = _this2.editRuleTransResp["messageType"];
              _this2.msgTranslation.operationName = _this2.editRuleTransResp["operationName"];
              _this2.msgTranslation.serviceName = _this2.editRuleTransResp["serviceName"];

              _this2.ruleTransForm.get('operationName').setValue(_this2.editRuleTransResp["operationName"]);

              _this2.ruleTransForm.patchValue(_this2.editRuleTransResp);

              for (var index = 0; index < _this2.editRuleTransResp.msgTransDetails.length; index++) {
                console.log(_this2.editRuleTransResp.msgTransDetails);

                _this2.addTransaltionGroup({});

                var item = _this2.editRuleTransResp.msgTransDetails[index];

                _this2.msgTransDetails.at(index).patchValue(Object.assign(Object.assign({}, item), {
                  formattedMessageBasis: "".concat(item.messageKey, " ").concat(item.messagebasis)
                }));
              }

              _this2.cdr.markForCheck();

              _this2.onSelectionOFMessageType(_this2.msgTranslation.messageType);

              _this2.onSlectionExternalSystem(_this2.msgTranslation.systemCode);

              _this2.gettingoperationAndService(_this2.msgTranslation.systemCode, _this2.msgTranslation.messageType, _this2.currentUser);

              _this2.translationDeatils = _this2.editRuleTransResp['msgTransDetails'];
              console.log(_this2.translationDeatils);

              if (_this2.ruleTRespData.recordStatus == "C") {
                console.log(_this2.ruleTRespData.recordStatus);
                _this2.reopenBtn = false;
                _this2.authBtnHide = true;
              }

              if (_this2.ruleTRespData.approvedStatus == "U") {
                console.log(_this2.ruleTRespData.approvedStatus);
                _this2.authBtnHide = false;
                _this2.authBtn = false;
              }
            });
          }
        }, {
          key: "gettingExternalsystem",
          value: function gettingExternalsystem() {
            var _this3 = this;

            this.rules.gettingExternalsystem().subscribe(function (extSysResp) {
              console.log(extSysResp);

              if (extSysResp) {
                _this3.externalSystem = extSysResp;
              }
            }, function (err) {
              console.log("err", err);
            });
          }
        }, {
          key: "onSlectionExternalSystem",
          value: function onSlectionExternalSystem(event) {
            console.log(event);
            this.sourcesystem = this.msgTranslation.messageType;
          }
        }, {
          key: "canExit",
          value: function canExit() {
            var _this4 = this;

            var isExit = false;

            if (this.ruleTransForm.touched && this.formTouched == true) {
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

                  _this4.cdr.markForCheck();

                  return isExit;
                } else {
                  isExit = false;

                  _this4.cdr.markForCheck();

                  return isExit;
                }
              });
            } else {
              isExit = true;
              return new Promise(function (resolve, reject) {
                if (isExit === true) {
                  isExit = true;

                  _this4.cdr.markForCheck();

                  resolve(true);
                }
              });
            }
          }
        }, {
          key: "onSelectionOFMessageType",
          value: function onSelectionOFMessageType(event) {
            console.log("Event", event);
            this.msgType = event;

            if (this.sourcesystem && this.msgType) {
              this.gettingoperationAndService(this.msgTranslation.systemCode, this.msgType, this.currentUser);
            } else {
              console.log("enter both msg and ext");
            }
          }
        }, {
          key: "gettingoperationAndService",
          value: function gettingoperationAndService(source, msgType, logginuser) {
            var _this5 = this;

            this.rules.gettingoperationAndService(source, msgType, logginuser).subscribe(function (translationResp) {
              console.log(translationResp);
              _this5.messageBasisData = translationResp.MdmtSystemService;
              _this5.mdmtSystemChannel = translationResp.MdmtSystemChannel;
              console.log("messageBasisData", _this5.messageBasisData);
              var keys = Object.keys(translationResp);
              console.log(keys);
              var x = keys[2];
              var y = keys[3];

              if (x == 'I' && Object.keys(translationResp).length == 3) {
                console.log("yes", x);

                if (translationResp.I.SERVICE.length !== 0) {
                  _this5.msgTranslation.serviceName = translationResp.I.SERVICE[0].headerValue;

                  if (translationResp.I.SERVICE.length <= 1) {
                    console.log(_this5.translationDataOperation, "1st if");
                    _this5.multipleService = true;
                  }

                  if (translationResp.I.SERVICE.length > 1) {
                    console.log(_this5.translationDataOperation, "2nd If");
                    _this5.multipleService = false;
                  } // this.ruleTransForm.get('serviceName').patchValue(translationResp.I.SERVICE[0].headerValue);

                }

                if (translationResp.I.OPERATION.length !== 0) {
                  _this5.msgTranslation.operationName = translationResp.I.OPERATION[0].headerValue; // this.ruleTransForm.get('operationName').patchValue(translationResp.I.OPERATION[0].headerValue);

                  _this5.translationDataOperation = translationResp.I.OPERATION;

                  if (_this5.translationDataOperation.length <= 1) {
                    console.log(_this5.translationDataOperation, "1st if");
                    _this5.multipleOperation = true;
                  }

                  if (_this5.translationDataOperation.length > 1) {
                    console.log(_this5.translationDataOperation, "2nd If");
                    _this5.multipleOperation = false;
                  }
                }

                _this5.translationDataService = translationResp.I.SERVICE;
              } else if (x == 'O' && Object.keys(translationResp).length == 3) {
                console.log("else if", x);

                if (translationResp.O.SERVICE.length !== 0) {
                  _this5.msgTranslation.serviceName = translationResp.O.SERVICE[0].headerValue;

                  if (translationResp.O.SERVICE.length <= 1) {
                    console.log(_this5.translationDataOperation, "1st if");
                    _this5.multipleService = true;
                  }

                  if (translationResp.O.SERVICE.length > 1) {
                    console.log(_this5.translationDataOperation, "2nd If");
                    _this5.multipleService = false;
                  } // this.ruleTransForm.get('serviceName').patchValue(translationResp.O.SERVICE[0].headerValue);

                }

                if (translationResp.O.OPERATION.length !== 0) {
                  _this5.msgTranslation.operationName = translationResp.O.OPERATION[0].headerValue; // this.ruleTransForm.get('operationName').patchValue(translationResp.O.OPERATION[0].headerValue);

                  _this5.translationDataOperation = translationResp.O.OPERATION;

                  if (_this5.translationDataOperation.length <= 1) {
                    console.log(_this5.translationDataOperation, "1st if");
                    _this5.multipleOperation = true;
                  }

                  if (_this5.translationDataOperation.length > 1) {
                    console.log(_this5.translationDataOperation, "2nd If");
                    _this5.multipleOperation = false;
                  }
                }

                _this5.translationDataService = translationResp.O.SERVICE;
              } else if (x == 'I' && _this5.msgTranslation.messageType == 'I' && Object.keys(translationResp).length == 4) {
                if (translationResp.I.SERVICE.length !== 0) {
                  _this5.msgTranslation.serviceName = translationResp.I.SERVICE[0].headerValue; // this.ruleTransForm.get('serviceName').patchValue(translationResp.I.SERVICE[0].headerValue);
                }

                if (translationResp.I.OPERATION.length !== 0) {
                  _this5.msgTranslation.operationName = translationResp.I.OPERATION[0].headerValue; // this.ruleTransForm.get('operationName').patchValue(translationResp.I.OPERATION[0].headerValue);

                  _this5.translationDataOperation = translationResp.I.OPERATION;
                }

                _this5.translationDataService = translationResp.I.SERVICE;
              } else if (y == 'O' && _this5.msgTranslation.messageType == 'O' && Object.keys(translationResp).length == 4) {
                if (translationResp.O.SERVICE.length !== 0) {
                  _this5.msgTranslation.serviceName = translationResp.O.SERVICE[0].headerValue; // this.ruleTransForm.get('serviceName').patchValue(translationResp.O.SERVICE[0].headerValue);
                }

                if (translationResp.O.OPERATION.length !== 0) {
                  _this5.msgTranslation.operationName = translationResp.O.OPERATION[0].headerValue; // this.ruleTransForm.get('operationName').patchValue(translationResp.O.OPERATION[0].headerValue);

                  _this5.translationDataOperation = translationResp.O.OPERATION;
                }

                _this5.translationDataService = translationResp.O.SERVICE;
              }

              _this5.showFetch = translationResp.MdmtSystemChannel[0].messageChannel;
              _this5.showFormat = translationResp.MdmtSystemChannel[0].messageFormat;

              if (_this5.showFetch == 'Https/Http') {
                // this.fetchingXMl();
                _this5.showFetch = translationResp.MdmtSystemChannel[0].messageFormat;
              } else if (_this5.showFetch == 'TCP/IP') {
                _this5.fetchingIso();
              } else if (_this5.showFetch == 'DB Connection') {
                _this5.addSystem.coulmnNameBasedonTableName(translationResp.MdmtSystemChannel[0].dbConnectString, translationResp.MdmtSystemChannel[0].dbServiceName, translationResp.MdmtSystemChannel[0].dbUsername, translationResp.MdmtSystemChannel[0].dbPassword, translationResp.MdmtSystemChannel[0].sysService[0].messageKey.split(",", 1)).subscribe(function (resp) {
                  resp.forEach(function (element) {
                    _this5.columnNameDD.push(element[1]);
                  });
                });
              }
            }, function (err) {
              console.log(err);
            });
          } //  temproary

        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this6 = this;

            console.log("Update?", this.ruleTransForm.value);
            var updatedFormData = Object.assign(Object.assign({}, this.ruleTransForm.value), {
              msgTransDetails: this.ruleTransForm.value.msgTransDetails.map(function (data) {
                var formattedMessageBasis = data.formattedMessageBasis,
                    rest = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__rest)(data, ["formattedMessageBasis"]);
                return rest;
              })
            });
            this.translationDTO.msgTranslation = this.msgTranslation;
            console.log("updatedFormData ", updatedFormData);
            this.translationDTO.msgTranslationDet = this.ruleRecord;
            console.log(this.translationDTO);
            this.rules.editruleTranslation("update", this.currentUser, updatedFormData).subscribe(function (ruleTranslationResp) {
              console.log(ruleTranslationResp);
              _this6.ruleTRespData = ruleTranslationResp;

              if (ruleTranslationResp) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  text: 'Record is Updated',
                  icon: 'success'
                });
                _this6.submit = false;
                _this6.showAuditLog = true;
                _this6.editValue = false;
                _this6.hideSubmit = false;
                _this6.formTouched = !_this6.ruleTransForm.touched;
              }
            }, function (err) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                text: "Server Error.",
                icon: 'error'
              });
            });
          }
        }, {
          key: "onFetch",
          value: function onFetch() {
            this.showRecords = true;
          }
        }, {
          key: "onReset",
          value: function onReset() {
            this.msgTranslation = new _msgTranslation();
            this.ruleRecord = [];
          }
        }, {
          key: "getTranslationItem",
          value: function getTranslationItem(item) {
            return this.formBuilder.group({
              messagebasis: [item.messagebasis ? item.messagebasis : ""],
              formattedMessageBasis: [item.formattedMessageBasis ? item.formattedMessageBasis : ""],
              headerTag: [item.headerTag ? item.headerTag : ""],
              defaultValue: [item.defaultValue ? item.defaultValue : ""],
              systemChannelId: [item.systemChannelId ? item.systemChannelId : ""],
              encryption: [item.encryption ? item.encryption : "No Encryption"],
              id: [item.id ? item.id : ''],
              dataType: [item.dataType ? item.dataType : ''],
              messageKey: [item.messageKey ? item.messageKey : '']
            });
          }
        }, {
          key: "msgTransDetails",
          get: function get() {
            return this.ruleTransForm.get('msgTransDetails');
          }
        }, {
          key: "addTransaltionGroup",
          value: function addTransaltionGroup(item) {
            this.msgTransDetails.push(this.getTranslationItem(item));
          }
        }, {
          key: "removeTranslation",
          value: function removeTranslation(index) {
            var _this7 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              title: 'are you sure, want to remove the record?',
              showDenyButton: true,
              showCancelButton: true,
              confirmButtonText: 'Yes',
              denyButtonText: "No"
            }).then(function (result) {
              if (result.isConfirmed) {
                _this7.msgTransDetails.removeAt(index);

                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Removed!', '', 'success');
              }
            });
          }
        }, {
          key: "selectFileFORHTTPXMLIncoming",
          value: function selectFileFORHTTPXMLIncoming(event) {
            var _this8 = this;

            console.log("here http and xML", event);
            this.selectedFiles = event.target.files;
            console.log("File selected", this.selectedFiles);
            console.log(this.selectedFiles[0].name);
            this.fileName = this.selectedFiles[0].name;
            this.fileUploadWrapper.nativeElement.setAttribute('data-text', this.fileName);
            this.currentFileUpload = this.selectedFiles.item(0);
            console.log(event.target.files);
            this.addSystem.gettingBodyOfXml(this.currentFileUpload).subscribe(function (xmlHttpResp) {
              console.log(xmlHttpResp);

              if (xmlHttpResp) {
                _this8.xmlRespData = xmlHttpResp;
                _this8.afterupload = true;

                if (xmlHttpResp) {
                  _this8.messageBasisIso = xmlHttpResp.nodeTagList;
                  _this8.showRecords = true;

                  _this8.addTransaltionGroup({});
                } // Swal.fire({ text: "File Uploaded Successfully" });

              }
            }, function (err) {// Swal.fire({ text: "Invalid Xml file provided" }); 
            });
          }
        }, {
          key: "fetchingHeadertag",
          value: function fetchingHeadertag() {
            var _this9 = this;

            this.addSystem.fetchingHeaderTag().subscribe(function (resp) {
              console.log("res", resp);
              _this9.headerTagData = resp;
            });
          }
        }, {
          key: "fetchingIso",
          value: function fetchingIso() {
            var _this10 = this;

            this.addSystem.fetchingIsoForTcp().subscribe(function (isoResp) {
              console.log(isoResp);
              _this10.matlabel1 = "Filed No"; // this.translationDeatils=isoResp;

              _this10.messageBasisIso = isoResp.map(function (data) {
                return data.fieldName;
              }); // for dropdown 2

              _this10.messageKeyIso = isoResp.map(function (data) {
                return data.fieldNo.toString();
              });
            });
          }
        }, {
          key: "fetchingXMl",
          value: function fetchingXMl() {
            var _this11 = this;

            this.addSystem.gettinXMLmsgIncoming().subscribe(function (xmlResp) {
              console.log(xmlResp);
              _this11.xmlRespData = xmlResp.map(function (data) {
                return data.messageBasis;
              });
            });
          } // fetchingColumnName() {
          //   this.addSystem.coulmnNameBasedonTableName(
          //     this.mdmtSystemChannel[0].dbConnectString,
          //     this.mdmtSystemChannel[0].dbServiceName,
          //     this.mdmtSystemChannel[0].dbUsername,
          //     this.mdmtSystemChannel[0].dbPassword,
          //     this.mdmtSystemChannel[0].sysService[0].messageKey.split(",", 1)
          //     ).subscribe((resp) => {
          //       resp.forEach(element => {
          //         this.columnNameDD.push(element[1]);
          //       });
          //       console.log(this.columnNameDD);
          //       this.tableData = this.columnNameDD.map((data) => {
          //         console.log(data);
          //         // return data.messageBasis;
          //       });
          //     });
          // }

        }, {
          key: "edit",
          value: function edit() {
            this.editValue = true;
            this.displaySubmit = true;
            this.onlysubmit = true;
            this.showAuditLog = false;
            console.log(this.ruleTRespData);

            if (this.ruleTRespData.approvedStatus == "U") {
              this.editValue = false; // Swal.fire("UnAuthorized record can't be edited.");
            }

            if (this.ruleTRespData.recordStatus == "C") {
              this.editValue = false; // Swal.fire("Closed record can't be edited.");
            }
          }
        }, {
          key: "chooseFile",
          value: function chooseFile() {
            console.log("heyy file");
            document.getElementById('chFile').click();
          }
        }, {
          key: "authorizeRuleTranslation",
          value: function authorizeRuleTranslation() {
            var _this12 = this;

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
                if (_this12.currentUser == _this12.ruleTRespData.creatorId) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Maker cannot authorize!');
                } else {
                  var RuleTranslationData = _this12.ruleTRespData;

                  _this12.addSystem.editruleTranslation("auth", _this12.currentUser, RuleTranslationData).subscribe(function (response) {
                    console.log(response);

                    if (response.approverId) {
                      _this12.authorizeDone = true;
                      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Record is Authorized ');
                      _this12.ruleTRespData = response;
                    }
                  });
                }
              }
            });
          }
        }, {
          key: "editValues",
          value: function editValues() {
            this.hideSubmit = true;
            this.editValue = true;
            this.displaySubmit = true;
            this.onlysubmit = true;
            this.showAuditLog = false;
            console.log(this.ruleTRespData);
            this.ruleTransForm.enable();
            this.msgTransDetails.enable();
          }
        }, {
          key: "openRuleTranslation",
          value: function openRuleTranslation() {
            var _this13 = this;

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
                console.log(_this13.ruleTRespData);
                console.log(_this13.currentUser);
                var RuleTranslationData = _this13.ruleTRespData;

                _this13.addSystem.editruleTranslation("open", _this13.currentUser, RuleTranslationData).subscribe(function (response) {
                  console.log(response);

                  if (response) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Record is Reopened');
                    _this13.ruleTRespData = response;
                    _this13.authBtnHide = false;
                    _this13.editBtn = false;
                    _this13.authBtn = false;
                  }
                });
              }
            });
          }
        }, {
          key: "closeRuleTranslation",
          value: function closeRuleTranslation() {
            var _this14 = this;

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
                var RuleTranslationData = _this14.ruleTRespData;

                _this14.addSystem.editruleTranslation("close", _this14.currentUser, RuleTranslationData).subscribe(function (response) {
                  console.log(response);

                  if (response) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: "Record is Closed",
                      icon: 'success'
                    });
                    _this14.ruleTRespData = response;
                    _this14.editBtn = true;
                    _this14.authBtn = true;
                    _this14.deleted = false;
                    _this14.reopenBtn = false;
                  }
                });
              }
            });
          }
        }, {
          key: "deleteRuleTranslation",
          value: function deleteRuleTranslation() {
            var _this15 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Delete record. ' + ' Do you want to proceed?',
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
                var RuleTranslationData = _this15.ruleTRespData;
                console.log(_this15.ruleTRespData);

                _this15.addSystem.deleteRuleTranslation(_this15.currentUser, RuleTranslationData.transId).subscribe(function (response) {// console.log(response.Text);
                  // if(response){
                  // }
                }, function (err) {
                  if (err.status == 200) {
                    _this15.showdelete = true;
                    _this15.editBtn = true;
                    _this15.authBtn = true;
                    _this15.closeBtn = true;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Record is Deleted!',
                      confirmButtonText: 'Ok'
                    }).then(function (result) {
                      if (result) {
                        _this15.router.navigateByUrl('/rule-translation/summary');
                      }
                    });
                  } else {// Swal.fire("Failed to delete the reocrd");
                  }
                });
              }
            });
          }
        }]);

        return _RuleTranslationDetailsComponent;
      }();

      _RuleTranslationDetailsComponent.ɵfac = function RuleTranslationDetailsComponent_Factory(t) {
        return new (t || _RuleTranslationDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_2__.RuleService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_4__.AddSystemService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__.CanDeactivateGuard), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService));
      };

      _RuleTranslationDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _RuleTranslationDetailsComponent,
        selectors: [["npr-rule-translation-details"]],
        viewQuery: function RuleTranslationDetailsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.fileUploadWrapper = _t.first);
          }
        },
        decls: 7,
        vars: 2,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["class", "formStyle", 3, "formGroup", 4, "ngIf"], ["class", "dbCardStyle", 4, "ngIf"], [1, "formStyle", 3, "formGroup"], [3, "disabled"], [1, "dbCardStyle"], [1, "row", "gy-4", "align-items-end"], [1, "col-lg-2"], ["for", "roleName", 1, "formLbl"], [1, "colorRed"], ["id", "outlineNgSelect", "id", "sysCode", "formControlName", "systemCode", "aria-label", "Default select example", "required", "", 3, "readonly", "clearable", "change"], ["hidden", "", "value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["id", "msgType", "formControlName", "messageType", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["value", "I"], ["value", "O"], [4, "ngIf"], ["class", "col-lg-4", 3, "click", 4, "ngIf"], [1, "col-lg-3"], ["class", "btn minWdSmBtn btnPrimary", 3, "disabled", "click", 4, "ngIf"], [1, "table-responsive"], ["id", "dbTable1", 1, "table", "tableStyle", "responsive", "nowrap", "vAlignMdl"], ["formArrayName", "msgTransDetails"], [4, "ngFor", "ngForOf"], ["class", "addIcon primarybg", 3, "click", 4, "ngIf"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto", 3, "hidden"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [3, "value"], ["id", "operationName", "formControlName", "operationName", "aria-label", "Default select example", 1, "form-select"], ["id", "operationName", "type", "text", "formControlName", "operationName", "value", "", 1, "form-control"], ["id", "serviceName", "formControlName", "serviceName", "aria-label", "Default select example", 1, "form-select"], ["id", "serviceName", "type", "text", "formControlName", "serviceName", "value", "", 1, "form-control"], [1, "col-lg-4", 3, "click"], [1, "fileUpload"], [1, "formS"], ["data-text", "File Upload", 1, "file-upload-wrapper"], ["fileWrapper", ""], ["id", "chFile", "name", "file-upload-field", "type", "file", 1, "file-upload-field", 3, "disabled", "change"], [1, "btn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], [3, "formGroup"], ["formControlName", "defaultValue", "type", "text", 1, "form-control", 3, "id", "readonly"], ["formControlName", "encryption", "aria-label", "Default select example", 1, "form-select", 3, "id", "change"], [1, "tblIcon"], [3, "ngClass", "click", 4, "ngIf"], ["name", "formattedMessageBasis", "formControlName", "formattedMessageBasis", 1, "form-control", 3, "readonly"], ["formControlName", "messagebasis", "aria-label", "Default select example", "required", "", 1, "form-control", 3, "id"], ["name", "messagebasis", "formControlName", "messagebasis", 1, "form-control", 3, "readonly"], ["formControlName", "messagebasis", "aria-label", "Default select example", "required", "", 1, "form-select", 3, "id", "disabled"], ["formControlName", "dataType", "aria-label", "Default select example", 1, "form-select", 3, "id"], ["value", "VARCHAR2"], ["value", "NUMBER"], ["value", "DATE"], ["formControlName", "dataType", "aria-label", "Default select example", 1, "form-select"], ["type", "text", "formControlName", "dataType", 1, "form-control", 3, "readonly"], [3, "ngClass", "click"], ["src", "assets/images/delete-icon.svg", "alt", "..."], [1, "addIcon", "primarybg", 3, "click"], ["src", "assets/images/plus-icon.svg", "alt", "..."], [1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "hidden", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "hidden", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "hidden", "click"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], [1, "fa", "fa-edit", "faClass"], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], [1, "fa", "fa-check-square-o", "faClassChecker"], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/authorize.svg", "alt", "...", 1, "modImage"], ["src", "assets/images/modification.svg", "alt", "...", 1, "modImage"]],
        template: function RuleTranslationDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Rule Translation");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, RuleTranslationDetailsComponent_form_4_Template, 84, 29, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, RuleTranslationDetailsComponent_div_6_Template, 100, 14, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.ruleTransForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showAuditLog);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgOptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormArrayName, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe],
        styles: [".readonlyTrue[_ngcontent-%COMP%] {\n  pointer-events: none !important;\n}\n\n.readonlyFalse[_ngcontent-%COMP%] {\n  pointer-events: visible !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUtdHJhbnNsYXRpb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQ0FBQTtBQUNKIiwiZmlsZSI6InJ1bGUtdHJhbnNsYXRpb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWFkb25seVRydWV7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmVhZG9ubHlGYWxzZXtcclxuICAgIHBvaW50ZXItZXZlbnRzOiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"]
      });

      var _msgTranslation = /*#__PURE__*/_createClass(function _msgTranslation() {
        _classCallCheck(this, _msgTranslation);
      }); // after fetch assign to this object


      var _translationDeatils = /*#__PURE__*/_createClass(function _translationDeatils() {
        _classCallCheck(this, _translationDeatils);
      });

      var translationDTO = /*#__PURE__*/_createClass(function translationDTO() {
        _classCallCheck(this, translationDTO);
      });
      /***/

    },

    /***/
    49833:
    /*!***************************************************************************!*\
      !*** ./src/app/views/rule-translation/rule-translation-routing.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RuleTranslationRoutingModule": function RuleTranslationRoutingModule() {
          return (
            /* binding */
            _RuleTranslationRoutingModule
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


      var _rule_translation_details_rule_translation_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./rule-translation-details/rule-translation-details.component */
      62393);
      /* harmony import */


      var _rule_translation_summary_rule_translation_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./rule-translation-summary/rule-translation-summary.component */
      7281);
      /* harmony import */


      var _rule_translation_rule_translation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./rule-translation/rule-translation.component */
      1575);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: 'create',
        component: _rule_translation_rule_translation_component__WEBPACK_IMPORTED_MODULE_3__.RuleTranslationComponent,
        canDeactivate: [src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__.CanDeactivateGuard]
      }, {
        path: 'edit/:id',
        component: _rule_translation_details_rule_translation_details_component__WEBPACK_IMPORTED_MODULE_1__.RuleTranslationDetailsComponent,
        canDeactivate: [src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__.CanDeactivateGuard]
      }, {
        path: 'summary',
        component: _rule_translation_summary_rule_translation_summary_component__WEBPACK_IMPORTED_MODULE_2__.RuleTranslationSummaryComponent
      }];

      var _RuleTranslationRoutingModule = /*#__PURE__*/_createClass(function _RuleTranslationRoutingModule() {
        _classCallCheck(this, _RuleTranslationRoutingModule);
      });

      _RuleTranslationRoutingModule.ɵfac = function RuleTranslationRoutingModule_Factory(t) {
        return new (t || _RuleTranslationRoutingModule)();
      };

      _RuleTranslationRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _RuleTranslationRoutingModule
      });
      _RuleTranslationRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_RuleTranslationRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    7281:
    /*!*******************************************************************************************************!*\
      !*** ./src/app/views/rule-translation/rule-translation-summary/rule-translation-summary.component.ts ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RuleTranslationSummaryComponent": function RuleTranslationSummaryComponent() {
          return (
            /* binding */
            _RuleTranslationSummaryComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
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


      var src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/config/app.constant */
      3118);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/rule.service */
      50511);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      77382);
      /* harmony import */


      var src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/add-system.service */
      91973);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular-datatables */
      50481);

      var _c0 = function _c0() {
        return ["/rule-translation/create"];
      };

      var _c1 = function _c1() {
        return ["active"];
      };

      function RuleTranslationSummaryComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](3, _c0))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](4, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.roleCodes["new"].labelDescription);
        }
      }

      function RuleTranslationSummaryComponent_tbody_28_tr_1_button_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleTranslationSummaryComponent_tbody_28_tr_1_button_18_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);

            var data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r9.close(data_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleTranslationSummaryComponent_tbody_28_tr_1_button_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleTranslationSummaryComponent_tbody_28_tr_1_button_19_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);

            var data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r12.open(data_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleTranslationSummaryComponent_tbody_28_tr_1_button_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleTranslationSummaryComponent_tbody_28_tr_1_button_20_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17);

            var data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r15["delete"](data_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleTranslationSummaryComponent_tbody_28_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleTranslationSummaryComponent_tbody_28_tr_1_Template_a_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19);

            var data_r5 = restoredCtx.$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r18.onGetId(data_r5);
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

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function RuleTranslationSummaryComponent_tbody_28_tr_1_Template_button_click_16_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19);

            var data_r5 = restoredCtx.$implicit;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

            return ctx_r20.auth(data_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, RuleTranslationSummaryComponent_tbody_28_tr_1_button_18_Template, 2, 0, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, RuleTranslationSummaryComponent_tbody_28_tr_1_button_19_Template, 2, 0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, RuleTranslationSummaryComponent_tbody_28_tr_1_button_20_Template, 2, 0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r5.systemCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r5.operationName);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r5.serviceName);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r5.approvedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](data_r5.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](14, 10, data_r5.createdTime, "medium"));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !(data_r5.approvedStatus == "U" || data_r5.approvedStatus == "UNAUTHORIZED" || data_r5.approvedStatus == "Unauthorized"));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (data_r5.recordStatus == "O" || data_r5.recordStatus == "Open" || data_r5.recordStatus == "OPEN") && (data_r5.approvedEver == "Y" || data_r5.approvedEver == "YES"));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (data_r5.recordStatus == "CLOSED" || data_r5.recordStatus == "Close" || data_r5.recordStatus == "c" || data_r5.recordStatus == "C") && (data_r5.approvedEver == "YES" || data_r5.approvedEver == "Y"));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", data_r5.approvedEver == "N" || data_r5.approvedEver == "NO");
        }
      }

      function RuleTranslationSummaryComponent_tbody_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, RuleTranslationSummaryComponent_tbody_28_tr_1_Template, 21, 13, "tr", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.translationList);
        }
      }

      function RuleTranslationSummaryComponent_tbody_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function RuleTranslationSummaryComponent_ng_container_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Please wait... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        }
      }

      var _c2 = function _c2() {
        return ["/dashboard"];
      };

      var _RuleTranslationSummaryComponent = /*#__PURE__*/function () {
        function _RuleTranslationSummaryComponent(ruleService, router, roleService, cdr, addSystem, http) {
          _classCallCheck(this, _RuleTranslationSummaryComponent);

          this.ruleService = ruleService;
          this.router = router;
          this.roleService = roleService;
          this.cdr = cdr;
          this.addSystem = addSystem;
          this.http = http;
          this.translationList = [];
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
          this.dtOptions = {};
          this.isLoading = false;
          this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__.permissionsLabels();
          this.statusArr = ['Authorized', 'Unauthorized', 'Open', 'Close'];
          this.API_URL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_2__.AppConstants.baseURL;
        }

        _createClass(_RuleTranslationSummaryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 5,
              columnDefs: [{
                type: 'date',
                'targets': [5]
              }],
              order: [[5, 'desc']],
              serverSide: true,
              // processing: true,
              lengthMenu: [[5, 10, 20, 30, -1], [5, 10, 20, 30, "ALL"]],
              ajax: function ajax(dataTablesParameters, callback) {
                dataTablesParameters.minNumber = dataTablesParameters.start + 1;
                dataTablesParameters.maxNumber = dataTablesParameters.start + dataTablesParameters.length;
                console.log(dataTablesParameters.minNumber, dataTablesParameters.maxNumber);
                var pageNo = Math.floor(dataTablesParameters.minNumber / dataTablesParameters.length);
                var pageSize = dataTablesParameters.length;
                var search = dataTablesParameters.search.value;

                _this16.http.get("".concat(_this16.API_URL) + "/msgApi/getTranslation?pageNo=".concat(pageNo, "&pageSize=").concat(pageSize, "&search=").concat(search)).subscribe(function (resp) {
                  ;
                  console.log(resp);

                  var _iterator = _createForOfIteratorHelper(resp.result),
                      _step;

                  try {
                    var _loop = function _loop() {
                      var data = _step.value;
                      data.approvedStatus = _this16.statusArr.find(function (i) {
                        return i.startsWith(data.approvedStatus);
                      });
                      data.recordStatus = _this16.statusArr.find(function (i) {
                        return i.startsWith(data.recordStatus);
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

                  _this16.totalPages = resp.totalNoOfPages;
                  _this16.totalRecords = resp.totalRecords;
                  _this16.translationList = resp.result;
                  _this16.isLoading = false;

                  _this16.cdr.markForCheck();

                  callback({
                    recordsTotal: resp.totalRecords,
                    recordsFiltered: resp.totalRecords,
                    data: []
                  });
                });
              } // columnDefs: [ { type: 'date', 'targets': [5] } ],
              // order: [[5, 'desc']],

            };
            this.currentUser = localStorage.getItem('userFromLogin'); // this.fetchRuleTranslationSummary();

            this.roleService.fetchScreenPermissions('Rule translation');
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this16.roleCodes = message;
            });
          }
        }, {
          key: "fetchRuleTranslationSummary",
          value: function fetchRuleTranslationSummary() {
            var _this17 = this;

            this.isLoading = true;
            this.ruleService.fetchingruleTranslation().subscribe(function (resp) {
              console.log(resp);

              var _iterator2 = _createForOfIteratorHelper(resp.result),
                  _step2;

              try {
                var _loop2 = function _loop2() {
                  var data = _step2.value;
                  data.approvedStatus = _this17.statusArr.find(function (i) {
                    return i.startsWith(data.approvedStatus);
                  });
                  data.recordStatus = _this17.statusArr.find(function (i) {
                    return i.startsWith(data.recordStatus);
                  });
                };

                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  _loop2();
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              _this17.translationList = resp.result;
              _this17.isLoading = false;

              _this17.cdr.markForCheck();

              _this17.dtTrigger.next();
            });
          }
        }, {
          key: "onGetId",
          value: function onGetId(row) {
            console.log(row);
            this.router.navigate(['/rule-translation/edit', row.transId]);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Do not forget to unsubscribe the event
            this.dtTrigger.unsubscribe();
          }
        }, {
          key: "close",
          value: function close(data) {
            var _this18 = this;

            this.ruleTRespData = data;
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
                var RuleTranslationData = _this18.ruleTRespData;

                _this18.addSystem.editruleTranslation("close", _this18.currentUser, RuleTranslationData).subscribe(function (response) {
                  console.log(response);

                  if (response) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: "Record is Closed",
                      icon: 'success'
                    }).then(function () {
                      return window.location.reload();
                    });
                    _this18.ruleTRespData = response;
                    _this18.editBtn = true;
                    _this18.authBtn = true;
                    _this18.deleted = false;
                    _this18.reopenBtn = false;
                  }
                });
              }
            });
          }
        }, {
          key: "open",
          value: function open(data) {
            var _this19 = this;

            this.ruleTRespData = data;
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
                var RuleTranslationData = _this19.ruleTRespData;

                _this19.addSystem.editruleTranslation("open", _this19.currentUser, RuleTranslationData).subscribe(function (response) {
                  console.log(response);

                  if (response) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Record is Reopened').then(function () {
                      return window.location.reload();
                    });
                    _this19.ruleTRespData = response;
                    _this19.authBtnHide = false;
                    _this19.editBtn = false;
                    _this19.authBtn = false;
                  }
                });
              }
            });
          }
        }, {
          key: "delete",
          value: function _delete(data) {
            var _this20 = this;

            this.ruleTRespData = data;
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Delete record. ' + ' Do you want to proceed?',
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
                var RuleTranslationData = _this20.ruleTRespData;
                console.log(_this20.ruleTRespData);

                _this20.addSystem.deleteRuleTranslation(_this20.currentUser, RuleTranslationData.transId).subscribe(function (response) {// console.log(response.Text);
                  // if(response){
                  // }
                }, function (err) {
                  if (err.status == 200) {
                    _this20.showdelete = true;
                    _this20.editBtn = true;
                    _this20.authBtn = true;
                    _this20.closeBtn = true;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Record is Deleted!',
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
            var _this21 = this;

            this.ruleTRespData = data;
            console.log(this.currentUser);
            console.log(this.ruleTRespData.creatorId);
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
                if (_this21.currentUser == _this21.ruleTRespData.creatorId) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Maker cannot authorize!');
                } else {
                  var RuleTranslationData = _this21.ruleTRespData;

                  _this21.addSystem.editruleTranslation("auth", _this21.currentUser, RuleTranslationData).subscribe(function (response) {
                    console.log(response);

                    if (response.approverId) {
                      _this21.authorizeDone = true;
                      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Record is Authorized ').then(function () {
                        return window.location.reload();
                      });
                      _this21.ruleTRespData = response;
                    }
                  });
                }
              }
            });
          }
        }]);

        return _RuleTranslationSummaryComponent;
      }();

      _RuleTranslationSummaryComponent.ɵfac = function RuleTranslationSummaryComponent_Factory(t) {
        return new (t || _RuleTranslationSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_3__.RuleService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_4__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_5__.AddSystemService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient));
      };

      _RuleTranslationSummaryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _RuleTranslationSummaryComponent,
        selectors: [["npr-rule-translation-summary"]],
        decls: 31,
        vars: 7,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [1, "table-responsive"], ["datatable", "", "id", "dbTable1", 1, "dataTable", "table", "tableStyleSelect", "tableStyle", "nowrap", "vAlignMdl", 2, "width", "100%", 3, "dtOptions"], [4, "ngIf"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "routerLink", "routerLinkActive"], [4, "ngFor", "ngForOf"], [1, "primaryColor", 2, "cursor", "pointer", 3, "click"], ["title", "Authorize", 1, "btn", 2, "color", "red", 3, "disabled", "click"], ["src", "assets/images/authorize.svg", "alt", "Authorize", 1, "summaryIcon"], ["class", "btn", "style", "color: red", "title", "Close", 3, "click", 4, "ngIf"], ["class", "btn", "style", "color: red", "title", "Reopen", 3, "click", 4, "ngIf"], ["class", "btn", "style", "color: red", "title", "Delete", 3, "click", 4, "ngIf"], ["title", "Close", 1, "btn", 2, "color", "red", 3, "click"], ["src", "assets/images/CROSS1.svg", "alt", "...", 1, "summaryIcon"], ["title", "Reopen", 1, "btn", 2, "color", "red", 3, "click"], ["src", "assets/images/open.svg", "alt", "...", 1, "summaryIcon"], ["title", "Delete", 1, "btn", 2, "color", "red", 3, "click"], ["src", "assets/images/delete.svg", "alt", "...", 1, "summaryIcon"], [1, "loading-page-center"], [1, "indicator-progress"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"]],
        template: function RuleTranslationSummaryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Rule Translation");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, RuleTranslationSummaryComponent_div_6_Template, 3, 5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "System Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Operation Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Service Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Auth Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Record Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, RuleTranslationSummaryComponent_tbody_28_Template, 2, 1, "tbody", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, RuleTranslationSummaryComponent_tbody_29_Template, 2, 0, "tbody", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, RuleTranslationSummaryComponent_ng_container_30_Template, 5, 0, "ng-container", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.roleCodes["new"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](6, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dtOptions", ctx.dtOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.translationList == null ? null : ctx.translationList.length) != 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.translationList == null ? null : ctx.translationList.length) == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, angular_datatables__WEBPACK_IMPORTED_MODULE_6__.DataTableDirective, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
        styles: ["th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 11px 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUtdHJhbnNsYXRpb24tc3VtbWFyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksNkJBQUE7QUFDSiIsImZpbGUiOiJydWxlLXRyYW5zbGF0aW9uLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0aCxcclxudGQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIHBhZGRpbmc6IDExcHggMjBweCAhaW1wb3J0YW50O1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    80646:
    /*!*******************************************************************!*\
      !*** ./src/app/views/rule-translation/rule-translation.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RuleTranslationModule": function RuleTranslationModule() {
          return (
            /* binding */
            _RuleTranslationModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _rule_translation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./rule-translation-routing.module */
      49833);
      /* harmony import */


      var _rule_translation_rule_translation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./rule-translation/rule-translation.component */
      1575);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-datatables */
      50481);
      /* harmony import */


      var _rule_translation_summary_rule_translation_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./rule-translation-summary/rule-translation-summary.component */
      7281);
      /* harmony import */


      var _rule_translation_details_rule_translation_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./rule-translation-details/rule-translation-details.component */
      62393);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-select/ng-select */
      88660);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _RuleTranslationModule = /*#__PURE__*/_createClass(function _RuleTranslationModule() {
        _classCallCheck(this, _RuleTranslationModule);
      });

      _RuleTranslationModule.ɵfac = function RuleTranslationModule_Factory(t) {
        return new (t || _RuleTranslationModule)();
      };

      _RuleTranslationModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _RuleTranslationModule
      });
      _RuleTranslationModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _rule_translation_routing_module__WEBPACK_IMPORTED_MODULE_0__.RuleTranslationRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_RuleTranslationModule, {
          declarations: [_rule_translation_rule_translation_component__WEBPACK_IMPORTED_MODULE_1__.RuleTranslationComponent, _rule_translation_summary_rule_translation_summary_component__WEBPACK_IMPORTED_MODULE_3__.RuleTranslationSummaryComponent, _rule_translation_details_rule_translation_details_component__WEBPACK_IMPORTED_MODULE_4__.RuleTranslationDetailsComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _rule_translation_routing_module__WEBPACK_IMPORTED_MODULE_0__.RuleTranslationRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectModule]
        });
      })();
      /***/

    },

    /***/
    1575:
    /*!***************************************************************************************!*\
      !*** ./src/app/views/rule-translation/rule-translation/rule-translation.component.ts ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RuleTranslationComponent": function RuleTranslationComponent() {
          return (
            /* binding */
            _RuleTranslationComponent
          );
        },

        /* harmony export */
        "msgTranslation": function msgTranslation() {
          return (
            /* binding */
            _msgTranslation2
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      1707);
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


      var src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/add-system.service */
      91973);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      77382);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/guards/can-deactivate.guard */
      50215);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ng-select/ng-select */
      88660);

      var _c0 = ["fileWrapper"];

      function RuleTranslationComponent_form_4_ng_option_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ng-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var extsys_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", extsys_r15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", extsys_r15, " ");
        }
      }

      function RuleTranslationComponent_form_4_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 21);
        }
      }

      function RuleTranslationComponent_form_4_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r4.messageArr, " ");
        }
      }

      function RuleTranslationComponent_form_4_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r5.messageArr, " ");
        }
      }

      function RuleTranslationComponent_form_4_div_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "select", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RuleTranslationComponent_form_4_div_21_Template_select_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r16.onSelectionOFMessageType($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Incoming");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Outgoing");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RuleTranslationComponent_form_4_div_25_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var opt_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", opt_r19.headerValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", opt_r19.headerValue, " ");
        }
      }

      function RuleTranslationComponent_form_4_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "select", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, RuleTranslationComponent_form_4_div_25_option_4_Template, 2, 2, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r7.translationDataOperation);
        }
      }

      function RuleTranslationComponent_form_4_div_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RuleTranslationComponent_form_4_div_30_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var serv_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", serv_r21.headerValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", serv_r21.headerValue, " ");
        }
      }

      function RuleTranslationComponent_form_4_div_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "select", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, RuleTranslationComponent_form_4_div_30_option_4_Template, 2, 2, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r9.translationDataService);
        }
      }

      function RuleTranslationComponent_form_4_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RuleTranslationComponent_form_4_div_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleTranslationComponent_form_4_div_32_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r23.chooseFile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 33, 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RuleTranslationComponent_form_4_div_32_Template_input_change_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r25.selectFileFORHTTPXMLIncoming($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RuleTranslationComponent_form_4_div_35_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleTranslationComponent_form_4_div_35_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r26.onFetch();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Fetch");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1() {
        return ["/rule-translation/summary"];
      };

      function RuleTranslationComponent_form_4_div_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c1));
        }
      }

      function RuleTranslationComponent_form_4_div_37_tr_5_th_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Field No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RuleTranslationComponent_form_4_div_37_tr_5_th_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Tag ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RuleTranslationComponent_form_4_div_37_tr_5_th_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Key ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RuleTranslationComponent_form_4_div_37_tr_5_th_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Column Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RuleTranslationComponent_form_4_div_37_tr_5_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Data type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }
      }

      function RuleTranslationComponent_form_4_div_37_tr_5_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0, " Data type ");
        }
      }

      function RuleTranslationComponent_form_4_div_37_tr_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RuleTranslationComponent_form_4_div_37_tr_5_th_1_Template, 4, 0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, RuleTranslationComponent_form_4_div_37_tr_5_th_2_Template, 4, 0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, RuleTranslationComponent_form_4_div_37_tr_5_th_3_Template, 4, 0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, RuleTranslationComponent_form_4_div_37_tr_5_th_4_Template, 4, 0, "th", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, RuleTranslationComponent_form_4_div_37_tr_5_ng_container_6_Template, 2, 0, "ng-container", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, RuleTranslationComponent_form_4_div_37_tr_5_ng_template_7_Template, 1, 0, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Default value");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Encryption");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](8);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r28.showFetch == "TCP/IP");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r28.showFetch == "XML");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r28.showFetch == "JSON");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r28.showFetch == "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r28.showFetch == "TCP/IP")("ngIfElse", _r42);
        }
      }

      function RuleTranslationComponent_form_4_div_37_tr_8_ng_container_3_ng_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ng-option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var iso2_r55 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", iso2_r55.messageKey);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", iso2_r55.messageKey, " ", iso2_r55.messagebasis, " ");
        }
      }

      function RuleTranslationComponent_form_4_div_37_tr_8_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ng-select", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RuleTranslationComponent_form_4_div_37_tr_8_ng_container_3_Template_ng_select_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r58);

            var i_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

            return ctx_r56.onselectOfFieldNo($event, i_r45);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "ng-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Please select Field No");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, RuleTranslationComponent_form_4_div_37_tr_8_ng_container_3_ng_option_4_Template, 2, 3, "ng-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("id", "fieldNo_", i_r45, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("clearable", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r46.fieldNoList);
        }
      }

      function RuleTranslationComponent_form_4_div_37_tr_8_ng_container_4_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r61 = ctx.$implicit;

          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r60.shouldDisableTagOption(data_r61))("value", data_r61);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", data_r61, "");
        }
      }

      function RuleTranslationComponent_form_4_div_37_tr_8_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "select", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RuleTranslationComponent_form_4_div_37_tr_8_ng_container_4_Template_select_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r64);

            var i_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

            return ctx_r62.onselectingTag($event, i_r45);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, RuleTranslationComponent_form_4_div_37_tr_8_ng_container_4_option_4_Template, 2, 3, "option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("id", "tag_", i_r45, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r47.messageBasisIso);
        }
      }

      function RuleTranslationComponent_form_4_div_37_tr_8_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "input", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("id", "fieldNo_", i_r45, "");
        }
      }

      function RuleTranslationComponent_form_4_div_37_tr_8_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "input", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("id", "db_", i_r45, "");
        }
      }

      function RuleTranslationComponent_form_4_div_37_tr_8_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "input", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("id", "dataType_", i_r45, "");
        }
      }

      function RuleTranslationComponent_form_4_div_37_tr_8_ng_container_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "select", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "option", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Numeric ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "option", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Alpha Numeric ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "option", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("id", "dataType_", i_r45, "");
        }
      }

      function RuleTranslationComponent_form_4_div_37_tr_8_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "select", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "option", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " VARCHAR2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "option", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " NUMBER ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "option", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " DATE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("id", "dataType_", i_r45, "");
        }
      }

      function RuleTranslationComponent_form_4_div_37_tr_8_a_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleTranslationComponent_form_4_div_37_tr_8_a_26_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r73);

            var i_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;

            var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

            return ctx_r71.removeTranslation(i_r45);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RuleTranslationComponent_form_4_div_37_tr_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](1, 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, RuleTranslationComponent_form_4_div_37_tr_8_ng_container_3_Template, 5, 3, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, RuleTranslationComponent_form_4_div_37_tr_8_ng_container_4_Template, 5, 2, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, RuleTranslationComponent_form_4_div_37_tr_8_ng_container_5_Template, 2, 1, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, RuleTranslationComponent_form_4_div_37_tr_8_ng_container_6_Template, 2, 1, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, RuleTranslationComponent_form_4_div_37_tr_8_ng_container_8_Template, 2, 1, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, RuleTranslationComponent_form_4_div_37_tr_8_ng_container_9_Template, 10, 1, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, RuleTranslationComponent_form_4_div_37_tr_8_ng_container_10_Template, 10, 1, "ng-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "select", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RuleTranslationComponent_form_4_div_37_tr_8_Template_select_change_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r75);

            var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

            return ctx_r74.onSelectionOFMessageType($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "option", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "No Encryption");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "option", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, " BASE 64 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, " SHA 256 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "option", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, " SHA 512 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "td", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, RuleTranslationComponent_form_4_div_37_tr_8_a_26_Template, 2, 0, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r44 = ctx.$implicit;
          var i_r45 = ctx.index;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", item_r44);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r29.showFetch == "TCP/IP");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r29.showFetch == "XML" && ctx_r29.showFormat !== "JSON");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r29.showFetch == "JSON" && ctx_r29.showFormat === "JSON");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r29.showFetch == "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r29.showFetch == "TCP/IP");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r29.showFetch == "JSON" || ctx_r29.showFetch == "XML");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r29.showFetch === "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("id", "responseIndicator_", i_r45, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("id", "encryption_", i_r45, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r29.submitFlag);
        }
      }

      function RuleTranslationComponent_form_4_div_37_button_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleTranslationComponent_form_4_div_37_button_11_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r77);

            var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

            return ctx_r76.addTransaltionGroup("");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RuleTranslationComponent_form_4_div_37_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleTranslationComponent_form_4_div_37_div_13_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r79);

            var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

            return ctx_r78.editValues();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r31.hideEdit);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r31.roleCodes.edit.labelDescription);
        }
      }

      function RuleTranslationComponent_form_4_div_37_div_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleTranslationComponent_form_4_div_37_div_17_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r81);

            var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

            return ctx_r80.auditChangeRuleTranslation("auth");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx_r32.hideSubmit);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r32.roleCodes.auth.labelDescription);
        }
      }

      function RuleTranslationComponent_form_4_div_37_div_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleTranslationComponent_form_4_div_37_div_18_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r83);

            var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

            return ctx_r82.auditChangeRuleTranslation("close");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx_r33.hideSubmit);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r33.roleCodes.close.labelDescription);
        }
      }

      function RuleTranslationComponent_form_4_div_37_div_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleTranslationComponent_form_4_div_37_div_19_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r85);

            var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

            return ctx_r84.auditChangeRuleTranslation("open");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx_r34.hideSubmit);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r34.roleCodes.reopen.labelDescription);
        }
      }

      function RuleTranslationComponent_form_4_div_37_div_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleTranslationComponent_form_4_div_37_div_20_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r87);

            var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

            return ctx_r86.deleteRuleTranslation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx_r35.hideSubmit);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r35.roleCodes["delete"].labelDescription);
        }
      }

      function RuleTranslationComponent_form_4_div_37_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c1));
        }
      }

      function RuleTranslationComponent_form_4_div_37_Template(rf, ctx) {
        if (rf & 1) {
          var _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "fieldset", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "table", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, RuleTranslationComponent_form_4_div_37_tr_5_Template, 21, 6, "tr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](7, 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, RuleTranslationComponent_form_4_div_37_tr_8_Template, 27, 11, "tr", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, RuleTranslationComponent_form_4_div_37_button_11_Template, 3, 0, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, RuleTranslationComponent_form_4_div_37_div_13_Template, 3, 2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RuleTranslationComponent_form_4_div_37_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r89);

            var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r88.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, RuleTranslationComponent_form_4_div_37_div_17_Template, 3, 2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, RuleTranslationComponent_form_4_div_37_div_18_Template, 3, 2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, RuleTranslationComponent_form_4_div_37_div_19_Template, 3, 2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, RuleTranslationComponent_form_4_div_37_div_20_Template, 3, 2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, RuleTranslationComponent_form_4_div_37_div_21_Template, 3, 2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r14.submitFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r14.msgTransDetails.controls);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r14.msgTransDetails.controls);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r14.submitFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !((ctx_r14.translationResp == null ? null : ctx_r14.translationResp.recordStatus) == "C" || (ctx_r14.translationResp == null ? null : ctx_r14.translationResp.recordStatus) == "CLOSED") && ctx_r14.roleCodes.edit);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r14.hideSubmit)("disabled", !ctx_r14.submitFlag || ctx_r14.ruleTransForm.invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((ctx_r14.translationResp == null ? null : ctx_r14.translationResp.approvedStatus) == "U" || (ctx_r14.translationResp == null ? null : ctx_r14.translationResp.approvedStatus) == "N" || (ctx_r14.translationResp == null ? null : ctx_r14.translationResp.approvedStatus) == "UNAUTHORIZED") && ctx_r14.roleCodes.auth);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((ctx_r14.translationResp == null ? null : ctx_r14.translationResp.recordStatus) == "O" || (ctx_r14.translationResp == null ? null : ctx_r14.translationResp.recordStatus) == "OPEN") && (ctx_r14.translationResp == null ? null : ctx_r14.translationResp.approvedEver) != "NO" && (ctx_r14.translationResp == null ? null : ctx_r14.translationResp.approvedEver) != "N" && ctx_r14.roleCodes.close);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((ctx_r14.translationResp == null ? null : ctx_r14.translationResp.recordStatus) == "C" || (ctx_r14.translationResp == null ? null : ctx_r14.translationResp.recordStatus) == "CLOSED") && ctx_r14.roleCodes.reopen);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((ctx_r14.translationResp == null ? null : ctx_r14.translationResp.approvedEver) == "NO" || (ctx_r14.translationResp == null ? null : ctx_r14.translationResp.approvedEver) == "N") && !ctx_r14.showdelete && ctx_r14.roleCodes["delete"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r14.showRecords);
        }
      }

      function RuleTranslationComponent_form_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "fieldset", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Source System ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "ng-select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function RuleTranslationComponent_form_4_Template_ng_select_change_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r91);

            var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r90.onSlectionExternalSystem($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "ng-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Please select System");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, RuleTranslationComponent_form_4_ng_option_12_Template, 2, 2, "ng-option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Message Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, RuleTranslationComponent_form_4_div_18_Template, 1, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, RuleTranslationComponent_form_4_div_19_Template, 2, 1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, RuleTranslationComponent_form_4_div_20_Template, 2, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, RuleTranslationComponent_form_4_div_21_Template, 8, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Operation");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, RuleTranslationComponent_form_4_div_25_Template, 5, 1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, RuleTranslationComponent_form_4_div_26_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Service");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, RuleTranslationComponent_form_4_div_30_Template, 5, 1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, RuleTranslationComponent_form_4_div_31_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, RuleTranslationComponent_form_4_div_32_Template, 6, 0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, RuleTranslationComponent_form_4_div_35_Template, 3, 0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, RuleTranslationComponent_form_4_div_36_Template, 3, 2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, RuleTranslationComponent_form_4_div_37_Template, 22, 12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r0.ruleTransForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r0.submitFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("clearable", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.externalSystem);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.forCheck == "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.forCheck === "I");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.forCheck === "O");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.forCheck === "A");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.multipleOperation);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.multipleOperation);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.multipleService);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.multipleService);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.showFetch == "XML" && ctx_r0.showFormat !== "JSON");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.showFetch === "TCP/IP" || ctx_r0.showFormat === "JSON" || ctx_r0.showFetch === "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.showRecords);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.showRecords);
        }
      }

      function RuleTranslationComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "i", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 84);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "img", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 84);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "img", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 84);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "i", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 84);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](56, "img", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div", 84);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](69, "img", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "First Time Authorization");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](81, "img", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85, "Authorization Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](93, "img", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "div", 84);

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
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.translationResp == null ? null : ctx_r1.translationResp.creatorId);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](26, 8, ctx_r1.translationResp == null ? null : ctx_r1.translationResp.createdTime, "MM/dd/yyyy, h:mm a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.translationResp == null ? null : ctx_r1.translationResp.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.translationResp == null ? null : ctx_r1.translationResp.approverId);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](63, 11, ctx_r1.translationResp == null ? null : ctx_r1.translationResp.approvedTime, "MM/dd/yyyy, h:mm a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.translationResp == null ? null : ctx_r1.translationResp.approvedEver);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.translationResp == null ? null : ctx_r1.translationResp.approvedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.translationResp == null ? null : ctx_r1.translationResp.versionNo);
        }
      }

      var _RuleTranslationComponent = /*#__PURE__*/function () {
        // transResp: any;
        function _RuleTranslationComponent(rules, addSystem, formBuilder, cdr, roleService, router, canDeactivateGuard) {
          _classCallCheck(this, _RuleTranslationComponent);

          this.rules = rules;
          this.addSystem = addSystem;
          this.formBuilder = formBuilder;
          this.cdr = cdr;
          this.roleService = roleService;
          this.router = router;
          this.canDeactivateGuard = canDeactivateGuard;
          this.submitFlag = true;
          this.isSelected = true;
          this.hideSubmit = false;
          this.hideEdit = true;
          this.formTouched = true;
          this.msgTranslation = new _msgTranslation2();
          this.recordSaved = false;
          this.disableSubmit = false;
          this.disableReset = false;
          this.desSystem = [];
          this.isoRespData = [];
          this.tempArrayList = [];
          this.fieldNoList = [];
          this.dbConnectionList = [];
          this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__.permissionsLabels();
          this.showDialog = false;
          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
          this.columnNameDD = [];
          this.messageBasisData = [];
          this.mdmtSystemChannel = [];
          this.multipleOperation = true;
          this.multipleService = true;
        }

        _createClass(_RuleTranslationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this22 = this;

            this.currentUser = localStorage.getItem('userFromLogin');
            this.ruleTransForm = this.formBuilder.group({
              transId: this.transId,
              systemCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              messageType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              serviceName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              operationName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              msgTransDetails: this.formBuilder.array([])
            });
            this.roleService.fetchScreenPermissions('Rule translation');
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this22.roleCodes = message;
            });
            setTimeout(function () {
              console.log(_this22.roleCodes);
            }, 100);
            this.addTransaltionGroup({}); // this.msgTranslation.messageType = "null";
            // this.addTransaltionGroup();

            this.gettingExternalsystem();
            this.fetchingHeadertag(); // this.fetchingIso();

            this.forCheck = '';
          }
        }, {
          key: "getTranslationItem",
          value: function getTranslationItem(item) {
            console.log(item);
            return this.formBuilder.group({
              messagebasis: [item.messagebasis ? item.messagebasis : ""],
              headerTag: [item.headerTag ? item.headerTag : ""],
              defaultValue: [item.defaultValue ? item.defaultValue : ""],
              systemChannelId: [item.systemChannelId ? item.systemChannelId : ""],
              encryption: [item.encryption ? item.encryption : "No Encryption"],
              id: [item.id ? item.id : ''],
              dataType: [item.dataType ? item.dataType : ''],
              messageKey: [item.messageKey ? item.messageKey : '']
            });
          }
        }, {
          key: "msgTransDetails",
          get: function get() {
            return this.ruleTransForm.get('msgTransDetails');
          }
        }, {
          key: "addTransaltionGroup",
          value: function addTransaltionGroup(item) {
            this.msgTransDetails.push(this.getTranslationItem(item));
          }
        }, {
          key: "removeTranslation",
          value: function removeTranslation(index) {
            var _this23 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              title: 'are you sure, want to remove the record?',
              showDenyButton: true,
              showCancelButton: true,
              confirmButtonText: 'Yes',
              denyButtonText: "No"
            }).then(function (result) {
              if (result.isConfirmed) {
                if (_this23.tempArrayList[index]) {
                  _this23.tempArrayList.splice(index, 1);
                }

                if (_this23.desSystem[index]) {
                  _this23.desSystem.splice(index, 1);
                }

                _this23.msgTransDetails.removeAt(index);

                console.log(_this23.tempArrayList);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Removed!', '', 'success');
              }
            });
          }
        }, {
          key: "canExit",
          value: function canExit() {
            var _this24 = this;

            var isExit = false;

            if (this.ruleTransForm.touched && this.formTouched == true) {
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

                  _this24.cdr.markForCheck();

                  return isExit;
                } else {
                  isExit = false;

                  _this24.cdr.markForCheck();

                  return isExit;
                }
              });
            } else {
              isExit = true;
              return new Promise(function (resolve, reject) {
                if (isExit === true) {
                  isExit = true;

                  _this24.cdr.markForCheck();

                  resolve(true);
                }
              });
            }
          }
        }, {
          key: "auditLog",
          value: function auditLog() {
            if (this.translationResp.approvedStatus === 'U') {
              this.translationResp.approvedStatus = 'UNAUTHORIZED';
            }

            if (this.translationResp.approvedStatus === 'A') {
              this.translationResp.approvedStatus = 'AUTHORIZED';
            }

            if (this.translationResp.recordStatus === 'O') {
              this.translationResp.recordStatus = 'OPEN';
            }

            if (this.translationResp.recordStatus === 'C') {
              this.translationResp.recordStatus = 'CLOSED';
            }

            if (this.translationResp.approvedEver === 'N') {
              this.translationResp.approvedEver = 'NO';
            }

            if (this.translationResp.approvedEver === 'Y') {
              this.translationResp.approvedEver = 'YES';
            }
          }
        }, {
          key: "gettingExternalsystem",
          value: function gettingExternalsystem() {
            var _this25 = this;

            this.rules.gettingExternalsystem().subscribe(function (extSysResp) {
              console.log(extSysResp);

              if (extSysResp) {
                _this25.externalSystem = extSysResp.sort();
                _this25.sourcesysData = _this25.externalSystem;
              }
            }, function (err) {
              console.log("err", err);
            });
          }
        }, {
          key: "onSlectionExternalSystem",
          value: function onSlectionExternalSystem(event) {
            var _this26 = this;

            this.ruleTransForm.get('operationName').patchValue("");
            this.ruleTransForm.get('serviceName').patchValue("");
            console.log(event);
            this.tempArrayList = [];
            this.sourcesystem = event;
            this.rules.getAddSystem(this.sourcesystem).subscribe(function (resp) {
              console.log("PAtch REsp", resp);

              if (resp) {
                _this26.forCheck = resp.messsageType;

                if (_this26.forCheck === 'I') {
                  _this26.messageArr = "Incoming";
                } else if (_this26.forCheck === 'O') {
                  _this26.messageArr = "Outgoing";
                }

                _this26.ruleTransForm.patchValue(resp);

                _this26.msgTranslation.messageType = resp.messsageType;
                _this26.msgTranslation.operationName = resp.operationName;
                _this26.msgTranslation.serviceName = resp.serviceName;

                if (resp.messsageType == 'A') {
                  _this26.msgTranslation.messageType = 'I';

                  _this26.ruleTransForm.get('messageType').patchValue(_this26.msgTranslation.messageType);
                }

                _this26.ruleTransForm.get('messageType').patchValue(_this26.msgTranslation.messageType);

                _this26.cdr.markForCheck();

                console.log(_this26.msgTranslation);

                _this26.gettingoperationAndService(_this26.sourcesystem, _this26.msgTranslation.messageType);
              }
            });
          }
        }, {
          key: "onSelectionOFMessageType",
          value: function onSelectionOFMessageType(event) {
            this.msgType = event.target.value;
            console.log(this.msgType, this.sourcesystem);

            if (this.sourcesystem && this.msgType) {
              this.gettingoperationAndService(this.sourcesystem, this.msgType);
            } else {
              console.log("enter both msg and ext");
            }
          }
        }, {
          key: "gettingoperationAndService",
          value: function gettingoperationAndService(sourcesystem, msgType) {
            var _this27 = this;

            this.rules.gettingoperationAndService(sourcesystem, msgType, this.currentUser).subscribe(function (translationResp) {
              console.log("translationResp - ", translationResp); // this.transResp=translationResp;
              // console.log("msgType - ",msgType);

              _this27.messageBasisData = translationResp.MdmtSystemService;
              _this27.mdmtSystemChannel = translationResp.MdmtSystemChannel;
              var keys = Object.keys(translationResp);
              console.log(_this27.messageBasisData);
              var x = keys[2];
              var y = keys[3];

              if (x == 'I' && Object.keys(translationResp).length == 3) {
                // console.log("yes", x);
                if (translationResp.I.SERVICE.length !== 0) {
                  // this.msgTranslation.serviceName = translationResp.I.SERVICE[0].headerValue
                  _this27.ruleTransForm.get('serviceName').patchValue(translationResp.I.SERVICE[0].headerValue);

                  if (translationResp.I.SERVICE.length <= 1) {
                    console.log(_this27.translationDataOperation, "1st if");
                    _this27.multipleService = true;
                  }

                  if (translationResp.I.SERVICE.length > 1) {
                    console.log(_this27.translationDataOperation, "2nd If");
                    _this27.multipleService = false;
                  }
                }

                if (translationResp.I.OPERATION.length !== 0) {
                  // this.msgTranslation.operationName = translationResp.I.OPERATION[0].headerValue
                  _this27.ruleTransForm.get('operationName').patchValue(translationResp.I.OPERATION[0].headerValue);

                  _this27.translationDataOperation = translationResp.I.OPERATION;

                  if (_this27.translationDataOperation.length <= 1) {
                    console.log(_this27.translationDataOperation, "1st if");
                    _this27.multipleOperation = true;
                  }

                  if (_this27.translationDataOperation.length > 1) {
                    console.log(_this27.translationDataOperation, "2nd If");
                    _this27.multipleOperation = false;
                  }
                }

                _this27.translationDataService = translationResp.I.SERVICE;
              } else if (x == 'O' && Object.keys(translationResp).length == 3) {
                // console.log("else if", x);
                if (translationResp.O.SERVICE.length !== 0) {
                  // this.msgTranslation.serviceName = translationResp.O.SERVICE[0].headerValue
                  _this27.ruleTransForm.get('serviceName').patchValue(translationResp.O.SERVICE[0].headerValue);

                  if (translationResp.O.SERVICE.length <= 1) {
                    console.log(_this27.translationDataOperation, "1st if");
                    _this27.multipleService = true;
                  }

                  if (translationResp.O.SERVICE.length > 1) {
                    console.log(_this27.translationDataOperation, "2nd If");
                    _this27.multipleService = false;
                  }
                }

                if (translationResp.O.OPERATION.length !== 0) {
                  // this.msgTranslation.operationName = translationResp.O.OPERATION[0].headerValue
                  _this27.ruleTransForm.get('operationName').patchValue(translationResp.O.OPERATION[0].headerValue);

                  _this27.translationDataOperation = translationResp.O.OPERATION;

                  if (_this27.translationDataOperation.length <= 1) {
                    console.log(_this27.translationDataOperation, "1st if");
                    _this27.multipleOperation = true;
                  }

                  if (_this27.translationDataOperation.length > 1) {
                    console.log(_this27.translationDataOperation, "2nd If");
                    _this27.multipleOperation = false;
                  }
                }

                _this27.translationDataService = translationResp.O.SERVICE;
              } else if (x == 'I' && _this27.msgTranslation.messageType == 'I' && Object.keys(translationResp).length == 4) {
                if (translationResp.I.SERVICE.length !== 0) {
                  // this.msgTranslation.serviceName = translationResp.I.SERVICE[0].headerValue
                  _this27.ruleTransForm.get('serviceName').patchValue(translationResp.I.SERVICE[0].headerValue);
                }

                if (translationResp.I.OPERATION.length !== 0) {
                  // this.msgTranslation.operationName = translationResp.I.OPERATION[0].headerValue
                  _this27.ruleTransForm.get('operationName').patchValue(translationResp.I.OPERATION[0].headerValue);

                  _this27.translationDataOperation = translationResp.I.OPERATION;
                }

                _this27.translationDataService = translationResp.I.SERVICE;
              } else if (y == 'O' && _this27.msgTranslation.messageType == 'O' && Object.keys(translationResp).length == 4) {
                if (translationResp.O.SERVICE.length !== 0) {
                  // this.msgTranslation.serviceName = translationResp.O.SERVICE[0].headerValue;
                  _this27.ruleTransForm.get('serviceName').patchValue(translationResp.O.SERVICE[0].headerValue);
                }

                if (translationResp.O.OPERATION.length !== 0) {
                  // this.msgTranslation.operationName = translationResp.O.OPERATION[0].headerValue;
                  _this27.ruleTransForm.get('operationName').patchValue(translationResp.O.OPERATION[0].headerValue);

                  _this27.translationDataOperation = translationResp.O.OPERATION;
                }

                _this27.translationDataService = translationResp.O.SERVICE;
              }

              for (var index = 0; index < translationResp.MdmtSystemChannel.length; index++) {
                if (translationResp.MdmtSystemChannel[index].messageType === msgType) {
                  _this27.showFetch = translationResp.MdmtSystemChannel[index].messageChannel;
                  _this27.showFormat = translationResp.MdmtSystemChannel[index].messageFormat;
                }
              } // console.log(this.showFetch);


              if (_this27.showFetch == 'Https/Http') {
                _this27.showFetch = translationResp.MdmtSystemChannel[0].messageFormat; // this.fetchingXMl();
                // for (let index = 0; index < translationResp.MdmtSystemChannel.length; index++) {
                //   if(translationResp.MdmtSystemChannel[index].messageType === 'I') {
                //     for (let subIndex = 0; subIndex < translationResp.MdmtSystemChannel[index].sysService.length; subIndex++) {
                //       let systemCode = translationResp.MdmtSystemChannel[index].sysService[subIndex].messageKey.split(",", 4);
                //       let item = {
                //         // messageKey: null, 
                //         // messagebasis: systemCode[1],
                //         // dataType: translationResp.MdmtSystemChannel[index].sysService[subIndex].dataType,
                //         // defaultValue:  systemCode[3],
                //       }
                //       this.addTransaltionGroup(item);
                //     }
                //     // console.log(this.ruleTransForm.value);
                //   }
                // }
              } else if (_this27.showFetch == 'TCP/IP') {
                _this27.fetchingIso();
              } else if (_this27.showFetch == 'DB Connection') {
                _this27.addSystem.coulmnNameBasedonTableName(translationResp.MdmtSystemChannel[0].dbConnectString, translationResp.MdmtSystemChannel[0].dbServiceName, translationResp.MdmtSystemChannel[0].dbUsername, translationResp.MdmtSystemChannel[0].dbPassword, translationResp.MdmtSystemChannel[0].sysService[0].messageKey.split(",", 1)).subscribe(function (resp) {
                  resp.forEach(function (element) {
                    _this27.columnNameDD.push(element[1]);
                  });
                });

                console.log(_this27.columnNameDD);

                if (msgType === 'I') {
                  console.log(translationResp.MdmtSystemChannel[0].messageType); // for (let index = 0; index < translationResp.MdmtSystemChannel.length; index++) {
                  //   if(translationResp.MdmtSystemChannel[index].messageType === 'I') {
                  //     for (let subIndex = 0; subIndex < translationResp.MdmtSystemChannel[index].sysService.length; subIndex++) {
                  //       let systemCode = translationResp.MdmtSystemChannel[index].sysService[subIndex].messageKey.split(",", 4);
                  //       let item = {
                  //         // messageKey: null, 
                  //         // messagebasis: systemCode[1],
                  //         // dataType: translationResp.MdmtSystemChannel[index].sysService[subIndex].dataType,
                  //         // defaultValue:  systemCode[3],
                  //       }
                  //       this.addTransaltionGroup(item);
                  //     }
                  //     console.log(this.ruleTransForm.value);
                  //   }
                  // }
                } else if (msgType === 'O') {
                  console.log(translationResp); // for (let index = 0; index < translationResp.MdmtSystemChannel.length; index++) {
                  //   // console.log(translationResp.MdmtSystemChannel[index].messageType)
                  //   if(translationResp.MdmtSystemChannel[index].messageType === 'O') {
                  //     for (let subIndex = 0; subIndex < translationResp.MdmtSystemChannel[index].sysService.length; subIndex++) {
                  //       let systemCode = translationResp.MdmtSystemChannel[index].sysService[subIndex].messageKey.split(",", 2);
                  //       console.log(systemCode);
                  //       let item = {
                  //         // messageKey: null, 
                  //         // messagebasis: systemCode[1],
                  //         // dataType: translationResp.MdmtSystemChannel[index].sysService[subIndex].dataType,
                  //         // defaultValue:  systemCode[3],
                  //       }
                  //       console.log(item);
                  //       this.addTransaltionGroup(item);
                  //     }
                  //     // console.log(this.ruleTransForm.value);
                  //   }
                  // }
                }
              }
            }, function (err) {// console.log(err);
              // Swal.fire({text:'External system Service data not present'})
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this28 = this;

            // console.log(this.ruleTransForm.value);
            // console.log(this.ruleTransForm.get('transId').value);
            if (this.ruleTransForm.get('transId').value) {
              this.rules.editruleTranslation("update", this.currentUser, this.ruleTransForm.value).subscribe(function (ruleTranslationResp) {
                console.log(ruleTranslationResp);
                _this28.translationResp = ruleTranslationResp;

                _this28.ruleTransForm.patchValue(ruleTranslationResp);

                _this28.auditLog();

                if (ruleTranslationResp) {
                  _this28.recordSaved = true;
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    text: "Record is updated!",
                    icon: 'success'
                  });

                  _this28.ruleTransForm.disable();

                  _this28.msgTransDetails.disable();

                  _this28.formTouched = !_this28.ruleTransForm.touched;
                  _this28.hideSubmit = true;
                  _this28.hideEdit = false;
                  _this28.showAuditLog = true;
                  _this28.submitFlag = false;
                  _this28.disableSubmit = true;
                  _this28.disableReset = true;
                }
              });
            } else {
              this.rules.submittingruleTranslation(this.currentUser, this.ruleTransForm.value).subscribe(function (ruleTranslationResp) {
                console.log(ruleTranslationResp);
                _this28.translationResp = ruleTranslationResp;

                _this28.ruleTransForm.patchValue(ruleTranslationResp);

                _this28.auditLog();

                if (ruleTranslationResp) {
                  _this28.recordSaved = true;
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    text: "Record is Created",
                    icon: 'success'
                  });

                  _this28.ruleTransForm.disable();

                  _this28.msgTransDetails.disable();

                  _this28.formTouched = !_this28.ruleTransForm.touched;
                  _this28.hideSubmit = true;
                  _this28.hideEdit = false;
                  _this28.showAuditLog = true;
                  _this28.submitFlag = false;
                  _this28.disableSubmit = true;
                  _this28.disableReset = true;
                }
              }, function (err) {
                _this28.disableSubmit = true;
                console.log("error: : ", err.error);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  text: 'Rule Translation already exist kindly recheck the data.',
                  icon: 'error'
                });
              });
            }
          }
        }, {
          key: "onFetch",
          value: function onFetch() {
            this.showRecords = true;
            console.log(this.showFetch);

            if (this.showFetch == 'DB Connection') {
              this.dbConnectionList = this.messageBasisData;
              console.log(this.dbConnectionList);

              for (var index = 0; index < this.dbConnectionList.length; index++) {
                this.tempArrayList[index] = this.dbConnectionList[index];
              }

              console.log("this.tempArrayList ", this.tempArrayList);
            }

            if (this.sourcesystem == 'E-ISO') {
              for (var _index = 0; _index < this.msgTransDetails.controls.length; _index++) {
                this.tempArrayList[_index] = this.msgTransDetails.at(_index).get('messageKey').value;
              }

              console.log(this.tempArrayList);
            }

            console.log("translationDeatils", this.msgTransDetails.value);
          }
        }, {
          key: "onReset",
          value: function onReset() {
            this.ruleTransForm.reset();
            this.msgTransDetails.clear();
            this.showRecords = false;
            this.disableSubmit = false;
          }
        }, {
          key: "selectFileFORHTTPXMLIncoming",
          value: function selectFileFORHTTPXMLIncoming(event) {
            var _this29 = this;

            // console.log("here http and xML", event);
            this.selectedFiles = event.target.files; // this.sizeOfFile = this.selectedFiles.item(0).size;
            // console.log(this.sizeOfFile);
            // console.log(this.selectedFiles);
            // console.log(this.selectedFiles[0].name);

            this.fileName = this.selectedFiles[0].name;
            this.fileUploadWrapper.nativeElement.setAttribute('data-text', this.fileName);
            this.currentFileUpload = this.selectedFiles.item(0);
            console.log(event.target.files);
            this.addSystem.gettingBodyOfXml(this.currentFileUpload).subscribe(function (xmlHttpResp) {
              console.log("XML", xmlHttpResp);
              _this29.msgTransDetails.controls.length = 0;
              _this29.uploadXmlResp = xmlHttpResp;

              if (xmlHttpResp) {
                _this29.messageBasisIso = xmlHttpResp.nodeTagList;
                _this29.showRecords = true;

                _this29.addTransaltionGroup({});
              }
            });
          }
        }, {
          key: "fetchingHeadertag",
          value: function fetchingHeadertag() {
            var _this30 = this;

            this.addSystem.fetchingHeaderTag().subscribe(function (resp) {
              console.log("res", resp);
              _this30.headerTagData = resp;
            });
          }
        }, {
          key: "onselectOfFieldNo",
          value: function onselectOfFieldNo(event, i) {
            console.log(event);
            console.log(this.tempArrayList[i]);

            if (this.tempArrayList[i]) {
              this.tempArrayList[i] = event;
            } else {
              this.tempArrayList.push(event);
            }
          }
        }, {
          key: "auditChangeRuleTranslation",
          value: function auditChangeRuleTranslation(operation) {
            var _this31 = this;

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
                if (_this31.currentUser == _this31.translationResp.creatorId) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Maker cannot ".concat(operationType, "!"));
                } else {
                  var RuleTranslationData = _this31.translationResp;

                  _this31.addSystem.editruleTranslation(operation, _this31.currentUser, RuleTranslationData).subscribe(function (response) {
                    console.log(response);

                    if (response) {
                      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Record is ".concat(message));
                      _this31.translationResp = response;
                    }
                  });
                }
              }
            });
          }
        }, {
          key: "editValues",
          value: function editValues() {
            this.hideSubmit = false;
            this.hideEdit = true;
            this.submitFlag = true;
            this.showAuditLog = false;
            this.ruleTransForm.enable();
            this.msgTransDetails.enable();
          }
        }, {
          key: "deleteRuleTranslation",
          value: function deleteRuleTranslation() {
            var _this32 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              text: 'You are trying to Delete record. ' + ' Do you want to proceed?',
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
                var RuleTranslationData = _this32.translationResp;
                console.log(_this32.translationResp);

                _this32.addSystem.deleteRuleTranslation(_this32.currentUser, RuleTranslationData.transId).subscribe(function (response) {}, function (err) {
                  if (err.status == 200) {
                    _this32.showdelete = true;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Record is Deleted!',
                      confirmButtonText: 'Ok'
                    }).then(function (result) {
                      if (result) {
                        _this32.router.navigateByUrl('/rule-translation/summary');
                      }
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "onselectingTag",
          value: function onselectingTag(event, i) {
            var _this33 = this;

            // if(this.tempArrayList[i]){
            //   this.tempArrayList[i] = event.target.value;
            // }
            // else{
            //   this.tempArrayList.push(event.target.value);
            // }
            console.log(this.uploadXmlResp);
            var result = Object.keys(this.uploadXmlResp.nodeValueMap).map(function (key) {
              return [key, _this33.uploadXmlResp.nodeValueMap[key]];
            });
            console.log("result", result);
            var x = result.find(function (item) {
              return item[0] == event.target.value;
            });
            console.log(x);
            this.msgTransDetails.at(i).get('defaultValue').patchValue(x[1]);
            this.desSystem.push(event.target.value); //   this.mdmtSystemService[i].dataType=x.dataType;
          }
        }, {
          key: "onselectingColumnName",
          value: function onselectingColumnName(event, i) {
            var _this34 = this;

            console.log(this.columnNameDD);
            var result = Object.keys(this.columnNameDD.nodeValueMap).map(function (key) {
              return [key, _this34.columnNameDD.nodeValueMap[key]];
            });
            console.log("result", result);
            var x = result.find(function (item) {
              return item[0] == event.target.value;
            });
            console.log(x);
            this.msgTransDetails.at(i).get('defaultValue').patchValue(x[1]);
            this.desSystem.push(event.target.value);
          }
        }, {
          key: "fetchingIso",
          value: function fetchingIso() {
            var _this35 = this;

            this.msgTransDetails.controls = [];
            this.addSystem.fetchingIsoForTcp().subscribe(function (isoResp) {
              console.log("isoResp", isoResp);
              _this35.isoRespData = isoResp;

              for (var index = 0; index < isoResp.length; index++) {
                _this35.addTransaltionGroup({});

                var item = {
                  messageKey: isoResp[index].fieldNo,
                  messagebasis: isoResp[index].fieldName,
                  dataType: isoResp[index].dataType,
                  defaultValue: null
                };

                _this35.msgTransDetails.at(index).patchValue(item);

                _this35.fieldNoList[index] = item;
              }

              console.log("arrayObj 3", _this35.msgTransDetails.value); // this.translationDeatils = arrayObj;
              // console.log("tra", this.translationDeatils);
              // for dropdown 2

              _this35.messageKeyIso = isoResp.map(function (data) {
                return data.messageKey;
              });
              _this35.messageBasisIso = isoResp.map(function (data) {
                return data.messageBasis;
              });
            });
          }
        }, {
          key: "onsearchingTablName",
          value: function onsearchingTablName(event) {
            console.log(event.target.value);
            console.log("this is arr", this.sourcesysData);

            if (this.sourcesysData) {
              var data = this.sourcesysData.filter(function (e) {
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
          key: "chooseFile",
          value: function chooseFile() {
            console.log("heyy file");
            document.getElementById('chFile').click();
          } //gettingxml records

        }, {
          key: "fetchingXMl",
          value: function fetchingXMl() {
            var _this36 = this;

            this.addSystem.gettinXMLmsgIncoming().subscribe(function (xmlResp) {
              console.log(xmlResp);
              _this36.xmlRespData = xmlResp; //  this.messageBasisIso=xmlResp.map((data)=>{
              //       return data.messageBasis;
              //     });
            });
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
          key: "check",
          value: function check(event, value) {
            console.log("ev", event.value);
            this.desSystem.push(event.value); // this.destination=event.value;
            // this.addSystem.gettingHederofXMl(this.currentFileUpload).subscribe(xmlResp=>{
            //   console.log(xmlResp);
            //   if(xmlResp)
            //   {
            //   this.messageBasisIso=xmlResp;
            //   Swal.fire({text:'File Uploaded Successfully'});
            //   }
            // },(err)=>{
            //   console.log(err);
            //   Swal.fire({text:'Invalid Xml file provided'});
            // })
          }
        }, {
          key: "shouldDisableTagOption",
          value: function shouldDisableTagOption(option) {
            // console.log(this.messageBasisIso);
            return this.desSystem.includes(option);
          }
        }]);

        return _RuleTranslationComponent;
      }();

      _RuleTranslationComponent.ɵfac = function RuleTranslationComponent_Factory(t) {
        return new (t || _RuleTranslationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_rule_service__WEBPACK_IMPORTED_MODULE_2__.RuleService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_3__.AddSystemService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_4__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_5__.CanDeactivateGuard));
      };

      _RuleTranslationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _RuleTranslationComponent,
        selectors: [["npr-rule-translation"]],
        viewQuery: function RuleTranslationComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.fileUploadWrapper = _t.first);
          }
        },
        decls: 7,
        vars: 2,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["class", "formStyle", 3, "formGroup", 4, "ngIf"], ["class", "dbCardStyle", 4, "ngIf"], [1, "formStyle", 3, "formGroup"], [3, "disabled"], [1, "dbCardStyle"], [1, "row", "gy-4", "align-items-end"], [1, "col-lg-2"], ["for", "roleName", 1, "formLbl"], [1, "colorRed"], ["id", "outlineNgSelect", "id", "sysCode", "formControlName", "systemCode", "aria-label", "Default select example", "required", "", 3, "clearable", "change"], ["hidden", "", "value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "form-select", 4, "ngIf"], ["class", "message_class", 4, "ngIf"], [4, "ngIf"], ["class", "col-lg-4", 3, "click", 4, "ngIf"], ["class", "col-auto", 4, "ngIf"], [3, "value"], [1, "form-select"], [1, "message_class"], ["id", "msgType", "formControlName", "messageType", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["value", "I"], ["value", "O"], ["id", "operationName", "formControlName", "operationName", "aria-label", "Default select example", 1, "form-select"], ["id", "operationName", "type", "text", "formControlName", "operationName", "value", "", 1, "form-control"], ["id", "serviceName", "formControlName", "serviceName", "aria-label", "Default select example", 1, "form-select"], ["id", "serviceName", "type", "text", "formControlName", "serviceName", "value", "", 1, "form-control"], [1, "col-lg-4", 3, "click"], [1, "fileUpload"], [1, "formS"], ["data-text", "File Upload", 1, "file-upload-wrapper"], ["fileWrapper", ""], ["id", "chFile", "name", "file-upload-field", "type", "file", 1, "file-upload-field", 3, "change"], [1, "col-auto"], [1, "btn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [1, "table-responsive"], ["id", "dbTable1", 1, "table", "tableStyle", "responsive", "nowrap", "vAlignMdl"], ["formArrayName", "msgTransDetails"], [4, "ngFor", "ngForOf"], ["class", "addIcon primarybg", 3, "click", 4, "ngIf"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "hidden", "disabled", "click"], [4, "ngIf", "ngIfElse"], ["showType", ""], [3, "formGroup"], ["formControlName", "defaultValue", "type", "text", "value", "", 1, "form-control", 3, "id"], ["formControlName", "encryption", "aria-label", "Default select example", 1, "form-select", 3, "id", "change"], ["value", "No Encryption"], ["value", "BASE64"], ["value", "SHA256"], ["value", "SHA512"], [1, "tblIcon"], ["class", "deleteIcon2", 3, "click", 4, "ngIf"], ["id", "outlineNgSelect", "formControlName", "messageKey", "aria-label", "Default select example", "required", "", 3, "id", "clearable", "change"], ["formControlName", "messagebasis", "aria-label", "Default select example", 1, "form-select", 3, "id", "change"], [3, "hidden", "value", 4, "ngFor", "ngForOf"], [3, "hidden", "value"], ["formControlName", "messagebasis", "aria-label", "Default select example", "required", "", 1, "form-control", 3, "id"], ["type", "text", "formControlName", "dataType", "value", "", 1, "form-control", 3, "id"], ["formControlName", "dataType", "aria-label", "Default select example", 1, "form-select", 3, "id"], ["value", "numeric"], ["value", "alphaNumeric"], ["value", "date"], ["value", "VARCHAR2"], ["value", "NUMBER"], ["value", "DATE"], [1, "deleteIcon2", 3, "click"], ["src", "assets/images/delete-icon.svg", "alt", "..."], [1, "addIcon", "primarybg", 3, "click"], ["src", "assets/images/plus-icon.svg", "alt", "..."], [1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "hidden", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "hidden", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "hidden", "click"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], [1, "fa", "fa-edit", "faClass"], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], [1, "fa", "fa-check-square-o", "faClassChecker"], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/authorize.svg", "alt", "...", 1, "modImage"], ["src", "assets/images/modification.svg", "alt", "...", 1, "modImage"]],
        template: function RuleTranslationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Rule Translation");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, RuleTranslationComponent_form_4_Template, 38, 16, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, RuleTranslationComponent_div_6_Template, 100, 14, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.ruleTransForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showAuditLog);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgOptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArrayName],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
        styles: [".message_class[_ngcontent-%COMP%] {\n  border: 1px solid #efefef;\n  height: 45px;\n  font-size: 13px;\n  color: black;\n  padding-left: 15px;\n  \n  padding-top: 7%;\n  border-radius: 5%;\n  background-color: #f8f9fa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGUtdHJhbnNsYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBQ0oiLCJmaWxlIjoicnVsZS10cmFuc2xhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlX2NsYXNze1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VmZWZlZjtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIC8qIHRvcDogYXV0bzsgKi9cclxuICAgIHBhZGRpbmctdG9wOiA3JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxufSJdfQ== */"]
      });

      var _msgTranslation2 = /*#__PURE__*/_createClass(function _msgTranslation2() {
        _classCallCheck(this, _msgTranslation2);
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_views_rule-translation_rule-translation_module_ts-es5.js.map