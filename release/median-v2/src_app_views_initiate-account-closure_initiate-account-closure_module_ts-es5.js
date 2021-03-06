(function () {
  "use strict";

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_initiate-account-closure_initiate-account-closure_module_ts"], {
    /***/
    58179:
    /*!*********************************************************************!*\
      !*** ./src/app/shared/models/FetchUserForSingleAccClosureReqDTO.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FetchUserForSingleAccClosureReqDTO": function FetchUserForSingleAccClosureReqDTO() {
          return (
            /* binding */
            _FetchUserForSingleAccClosureReqDTO
          );
        }
        /* harmony export */

      });

      var _FetchUserForSingleAccClosureReqDTO = /*#__PURE__*/function () {
        function _FetchUserForSingleAccClosureReqDTO() {
          _classCallCheck(this, _FetchUserForSingleAccClosureReqDTO);
        }

        _createClass(_FetchUserForSingleAccClosureReqDTO, [{
          key: "map",
          value: function map(arg0) {
            throw new Error("Method not implemented.");
          }
        }]);

        return _FetchUserForSingleAccClosureReqDTO;
      }();
      /***/

    },

    /***/
    47833:
    /*!*************************************************************************************************************!*\
      !*** ./src/app/views/initiate-account-closure/account-closure-details/account-closure-details.component.ts ***!
      \*************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AccountClosureDetailsComponent": function AccountClosureDetailsComponent() {
          return (
            /* binding */
            _AccountClosureDetailsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var src_app_shared_models_FetchUserForSingleAccClosureReqDTO__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/models/FetchUserForSingleAccClosureReqDTO */
      58179);
      /* harmony import */


      var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/models/fmosNewRolePermissions */
      35383);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_services_account_closure_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/account-closure-service.service */
      60965);
      /* harmony import */


      var src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/guards/can-deactivate.guard */
      50215);
      /* harmony import */


      var ng2_izitoast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-izitoast */
      27218);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      77382);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function AccountClosureDetailsComponent_div_33_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " Please Select Account Type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }
      }

      function AccountClosureDetailsComponent_div_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](1, AccountClosureDetailsComponent_div_33_div_1_Template, 2, 0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r0.accountClosureForm.get("accountType").errors.required);
        }
      }

      function AccountClosureDetailsComponent_div_34_div_6_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " Please Enter Account Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }
      }

      function AccountClosureDetailsComponent_div_34_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](1, AccountClosureDetailsComponent_div_34_div_6_div_1_Template, 2, 0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r8.accountClosureForm.get("accountNumber").errors.required);
        }
      }

      function AccountClosureDetailsComponent_div_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Account Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](3, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](4, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](5, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](6, AccountClosureDetailsComponent_div_34_div_6_Template, 2, 1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("readonly", ctx_r1.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r1.accountClosureForm.get("accountNumber").invalid && (ctx_r1.accountClosureForm.get("accountNumber").dirty || ctx_r1.accountClosureForm.get("accountNumber").touched));
        }
      }

      function AccountClosureDetailsComponent_div_35_div_6_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " Please Enter Branch Code ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }
      }

      function AccountClosureDetailsComponent_div_35_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](1, AccountClosureDetailsComponent_div_35_div_6_div_1_Template, 2, 0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r10.accountClosureForm.get("branchCode").errors.required);
        }
      }

      function AccountClosureDetailsComponent_div_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Branch Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](3, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](4, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](5, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](6, AccountClosureDetailsComponent_div_35_div_6_Template, 2, 1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("readonly", ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r2.accountClosureForm.get("branchCode").invalid && (ctx_r2.accountClosureForm.get("branchCode").dirty || ctx_r2.accountClosureForm.get("branchCode").touched));
        }
      }

      function AccountClosureDetailsComponent_div_36_div_6_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " Please Enter Reason For Closure ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }
      }

      function AccountClosureDetailsComponent_div_36_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](1, AccountClosureDetailsComponent_div_36_div_6_div_1_Template, 2, 0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r12.accountClosureForm.get("reasonForClosure").errors.required);
        }
      }

      function AccountClosureDetailsComponent_div_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Reason For Closure");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](3, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](4, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](5, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](6, AccountClosureDetailsComponent_div_36_div_6_Template, 2, 1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("readonly", ctx_r3.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r3.accountClosureForm.get("reasonForClosure").invalid && (ctx_r3.accountClosureForm.get("reasonForClosure").dirty || ctx_r3.accountClosureForm.get("reasonForClosure").touched));
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "--display": a0
        };
      };

      function AccountClosureDetailsComponent_div_37_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](3, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("change", function AccountClosureDetailsComponent_div_37_Template_input_change_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

            return ctx_r14.selectFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????styleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](5, _c0, ctx_r4.fileName ? "none" : "flex"));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????attribute"]("data-text", ctx_r4.fetchUserSingle.fileName ? ctx_r4.fetchUserSingle.fileName : ctx_r4.fileName ? ctx_r4.fileName : "Upload File");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("readonly", ctx_r4.editFlag)("disabled", ctx_r4.accountClosureForm.disabled);
        }
      }

      function AccountClosureDetailsComponent_div_38_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function AccountClosureDetailsComponent_div_38_div_2_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);

            return ctx_r18.onSubmitFile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Submit File");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("disabled", ctx_r16.submitFile && ctx_r16.accountClosureForm.controls["accountType"].invalid);
        }
      }

      function AccountClosureDetailsComponent_div_38_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function AccountClosureDetailsComponent_div_38_div_3_Template_button_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);

            return ctx_r20.onSubmitSingle($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("disabled", ctx_r17.accountClosureForm.invalid);
        }
      }

      function AccountClosureDetailsComponent_div_38_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](2, AccountClosureDetailsComponent_div_38_div_2_Template, 3, 1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](3, AccountClosureDetailsComponent_div_38_div_3_Template, 3, 1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](5, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function AccountClosureDetailsComponent_div_38_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

            return ctx_r22.generateExcel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](6, "View Report");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](7, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](8, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](9, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", !ctx_r5.singleCall);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r5.singleCall);
        }
      }

      function AccountClosureDetailsComponent_div_39_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function AccountClosureDetailsComponent_div_39_div_2_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r34);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);

            return ctx_r33.editValues();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, " Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }
      }

      function AccountClosureDetailsComponent_div_39_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function AccountClosureDetailsComponent_div_39_div_3_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r36);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);

            return ctx_r35.onSubmitFile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Submit File");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("disabled", ctx_r25.submitFile && ctx_r25.accountClosureForm.controls["accountType"].invalid);
        }
      }

      function AccountClosureDetailsComponent_div_39_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function AccountClosureDetailsComponent_div_39_div_4_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r38);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);

            return ctx_r37.onSubmitOfSingleClosure();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("disabled", ctx_r26.accountClosureForm.invalid);
        }
      }

      function AccountClosureDetailsComponent_div_39_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function AccountClosureDetailsComponent_div_39_div_5_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r40);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);

            return ctx_r39.onclickOfAuth();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", ctx_r27.roleCodes.auth.labelDescription, "");
        }
      }

      function AccountClosureDetailsComponent_div_39_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function AccountClosureDetailsComponent_div_39_div_6_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r42);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);

            return ctx_r41.onclickOfReopen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", ctx_r28.roleCodes.reopen.labelDescription, "");
        }
      }

      function AccountClosureDetailsComponent_div_39_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function AccountClosureDetailsComponent_div_39_div_7_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r44);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);

            return ctx_r43.onclickOfClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"](" ", ctx_r29.roleCodes.close.labelDescription, "");
        }
      }

      function AccountClosureDetailsComponent_div_39_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx_r30.roleCodes["delete"].labelDescription);
        }
      }

      function AccountClosureDetailsComponent_div_39_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function AccountClosureDetailsComponent_div_39_div_9_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r46);

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);

            return ctx_r45.onClickOfViewToData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "View Report");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }
      }

      function AccountClosureDetailsComponent_div_39_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function AccountClosureDetailsComponent_div_39_div_10_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r48);

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);

            return ctx_r47.onClickOfViewToDatabulk();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "View Report");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }
      }

      function AccountClosureDetailsComponent_div_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](2, AccountClosureDetailsComponent_div_39_div_2_Template, 3, 0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](3, AccountClosureDetailsComponent_div_39_div_3_Template, 3, 1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](4, AccountClosureDetailsComponent_div_39_div_4_Template, 3, 1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](5, AccountClosureDetailsComponent_div_39_div_5_Template, 3, 1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](6, AccountClosureDetailsComponent_div_39_div_6_Template, 3, 1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](7, AccountClosureDetailsComponent_div_39_div_7_Template, 3, 1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](8, AccountClosureDetailsComponent_div_39_div_8_Template, 3, 1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](9, AccountClosureDetailsComponent_div_39_div_9_Template, 3, 0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](10, AccountClosureDetailsComponent_div_39_div_10_Template, 3, 0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](11, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](12, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](13, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", !ctx_r6.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", !ctx_r6.singleCall && ctx_r6.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r6.singleCall && ctx_r6.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", (ctx_r6.fetchUserSingle.verifiedStatus == "UNAUTHORIZED" || ctx_r6.fetchUserSingle.verifiedStatus == "U" || ctx_r6.fetchUserSingle.verifiedStatus == "Unauthorized") && ctx_r6.roleCodes.auth);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", (ctx_r6.fetchUserSingle.recordStatus == "CLOSE" || ctx_r6.fetchUserSingle.recordStatus == "C" || ctx_r6.fetchUserSingle.recordStatus == "Close") && (ctx_r6.fetchUserSingle.verifiedOnce == "YES" || ctx_r6.fetchUserSingle.verifiedOnce == "Y") && ctx_r6.roleCodes.reopen);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", (ctx_r6.fetchUserSingle.recordStatus == "OPEN" || ctx_r6.fetchUserSingle.recordStatus == "O" || ctx_r6.fetchUserSingle.recordStatus == "Open") && (ctx_r6.fetchUserSingle.verifiedOnce == "YES" || ctx_r6.fetchUserSingle.verifiedOnce == "Y") && ctx_r6.roleCodes.close);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", (ctx_r6.fetchUserSingle.verifiedOnce == "NO" || ctx_r6.fetchUserSingle.verifiedOnce == "N") && ctx_r6.roleCodes["delete"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r6.fetchUserSingle.closureType == "SINGLE");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r6.fetchUserSingle.closureType == "BULK");
        }
      }

      var _AccountClosureDetailsComponent = /*#__PURE__*/function () {
        function _AccountClosureDetailsComponent(formBuilder, cdr, router, accClosure, canDeactivateGuard, iziToast, route, roleService) {
          _classCallCheck(this, _AccountClosureDetailsComponent);

          this.formBuilder = formBuilder;
          this.cdr = cdr;
          this.router = router;
          this.accClosure = accClosure;
          this.canDeactivateGuard = canDeactivateGuard;
          this.iziToast = iziToast;
          this.route = route;
          this.roleService = roleService;
          this.fetchUserSingle = new src_app_shared_models_FetchUserForSingleAccClosureReqDTO__WEBPACK_IMPORTED_MODULE_0__.FetchUserForSingleAccClosureReqDTO();
          this.fetch = new src_app_shared_models_FetchUserForSingleAccClosureReqDTO__WEBPACK_IMPORTED_MODULE_0__.FetchUserForSingleAccClosureReqDTO();
          this.editFlag = false;
          this.selected = 'dormant';
          this.accountClosure = new src_app_shared_models_FetchUserForSingleAccClosureReqDTO__WEBPACK_IMPORTED_MODULE_0__.FetchUserForSingleAccClosureReqDTO();
          this.submitFile = true;
          this.bulk = true;
          this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__.permissionsLabels();
          this.formTouched = true;
          this.showDialog = false;
          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
          this.modifyScreen = false;
        }

        _createClass(_AccountClosureDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.accClosureNavObj = localStorage.getItem('AccountClosureNavObj');
            this.accClosureNavigationObject = JSON.parse(this.accClosureNavObj);
            this.accClosure.getIndexValue().subscribe(function (resp) {
              _this.paramScreen = resp;

              if (resp.index === '') {
                _this.createAccClosure();
              }
            });
            this.currentUser = localStorage.getItem('currentUser').replace(/['"]+/g, '');
            this.navSubscription = this.roleService.getNavParam.subscribe(function (data) {
              return _this.initiateAccClosure = data;
            });
            console.log(this.initiateAccClosure, "Initiate Account Closure");
            console.log(this.accClosureNavigationObject, "accClosureNavigationObject");
            this.fetchUserSingle.id = this.initiateAccClosure.queryParams.id;
            this.fetchUserSingle.modNo = this.initiateAccClosure.queryParams.modNo;
            this.fetchUserSingle.closureType = this.initiateAccClosure.queryParams.closureType;
            this.fetchUserSingle.accountNumber = this.initiateAccClosure.queryParams.accountNumber;
            this.fetchUserSingle.accountType = this.initiateAccClosure.queryParams.accountType;
            this.fetchUserSingle.recordStatus = this.initiateAccClosure.queryParams.recordStatus;
            this.fetchUserSingle.verifiedStatus = this.initiateAccClosure.queryParams.verifiedStatus;
            this.fetchUserSingle.inputBy = this.initiateAccClosure.queryParams.inputBy;
            this.fetchUserSingle.inputTime = this.initiateAccClosure.queryParams.inputTime; // this.fetchUserSingle.modNo = params.modNo

            this.fetchUserSingle.verifiedOnce = this.initiateAccClosure.queryParams.verifiedfirst;
            this.fetchUserSingle.verifiedBy = this.initiateAccClosure.queryParams.verifiedBy;
            this.fetchUserSingle.fileName = this.initiateAccClosure.queryParams.fileName;
            this.fetchUserSingle.branchCode = this.initiateAccClosure.queryParams.branch;
            this.fetchUserSingle.reasonForClosure = this.initiateAccClosure.queryParams.reason;
            this.fetchUserSingle.processStatus = this.initiateAccClosure.queryParams.processStatus;
            this.fetchUserSingle.accountLinkageDesc = this.initiateAccClosure.queryParams.Desc; //--------------------------------------------

            this.fetchUserSingle.closeStatusInputBy = this.initiateAccClosure.queryParams.closeStatusInputBy;
            this.fetchUserSingle.closeStatusInputTime = this.initiateAccClosure.queryParams.closeStatusInputTime;
            this.fetchUserSingle.closeStatus = this.initiateAccClosure.queryParams.closeStatus;
            this.fetchUserSingle.icliqAvlBal = this.initiateAccClosure.queryParams.icliqAvlBal;
            this.fetchUserSingle.icliqBalance = this.initiateAccClosure.queryParams.icliqBalance;
            this.fetchUserSingle.icliqStatus = this.initiateAccClosure.queryParams.icliqStatus;
            this.fetchUserSingle.makerId = this.initiateAccClosure.queryParams.makerId;
            this.fetchUserSingle.makerInputTime = this.initiateAccClosure.queryParams.makerInputTime;
            this.fetchUserSingle.accls = this.initiateAccClosure.queryParams.accls;
            this.fetchUserSingle.lastTransactionDetail = this.initiateAccClosure.queryParams.lastTransactionDetail;
            this.fetchUserSingle.blockedAmount = this.initiateAccClosure.queryParams.blockedAmount;
            this.fetchUserSingle.deStatus = this.initiateAccClosure.queryParams.deStatus;
            this.fetchUserSingle.linkedAccounts = this.initiateAccClosure.queryParams.linkedAccounts;
            this.fetchUserSingle.checkerId = this.initiateAccClosure.queryParams.checkerId;
            this.fetchUserSingle.checkerInputTime = this.initiateAccClosure.queryParams.checkerInputTime; //--------------------------------------------

            console.log(this.roleCodes);

            if (this.fetchUserSingle.closureType == 'SINGLE') {
              this.data = 'SINGLE';
            } else {
              this.data = 'BULK';
              this.data = this.singleCall;
            }

            this.cdr.markForCheck();
            this.selected = this.fetchUserSingle.accountType;
            this.radioSelectred = this.fetchUserSingle.closureType;
            console.log('inside bulk', this.fetchUserSingle);
            this.cdr.markForCheck();

            if (this.fetchUserSingle.closureType == undefined) {
              this.buildAccClosureForm(this.fetchUserSingle, false);
            }

            if (this.fetchUserSingle.closureType == 'BULK' || this.fetchUserSingle.closureType == 'SINGLE' || this.fetchUserSingle.closureType == undefined) {
              if (this.fetchUserSingle.closureType == 'BULK') {
                this.bulk = true;
              }

              if (this.fetchUserSingle.closureType == 'SINGLE') {
                this.bulk = false;
              }

              console.log("YJHGJH");
              this.buildAccClosureForm(this.fetchUserSingle, true);
            }

            console.log(this.initiateAccClosure);

            if (this.initiateAccClosure.queryParams.closureType != 'BULK' || this.initiateAccClosure.queryParams.closureType != 'SINGLE') {
              if (JSON.parse(this.accClosureNavObj) != null && this.paramScreen.index != 'new') {
                this.fetchUserSingle = this.accClosureNavigationObject;
                console.log("YJHGJH");
                this.buildAccClosureForm(this.accClosureNavigationObject);
                this.fileName = this.accClosureNavigationObject.fileName;
                this.accountClosureForm.disable();
              }
            }

            this.accountClosureForm.get('closureType').setValue('BULK');
            localStorage.setItem('CLOSURETYPE', this.accountClosureForm.value.closureType);
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this.roleCodes = message;
            });
            setTimeout(function () {}, 100);
            console.log(this.fetchUserSingle);
            this.auditLog();
          }
        }, {
          key: "auditLog",
          value: function auditLog() {
            if (this.fetchUserSingle.recordStatus == 'C' || this.fetchUserSingle.recordStatus == 'CLOSE') {
              this.fetchUserSingle.recordStatus = 'CLOSE';
            }

            if (this.fetchUserSingle.recordStatus == 'O' || this.fetchUserSingle.recordStatus == 'OPEN') {
              this.fetchUserSingle.recordStatus = 'OPEN';
            }

            if (this.fetchUserSingle.verifiedStatus == 'U') {
              this.fetchUserSingle.verifiedStatus = 'UNAUTHORIZED';
            }

            if (this.fetchUserSingle.verifiedOnce == 'A') {
              this.fetchUserSingle.verifiedOnce = 'AUTHORIZED';
            }

            if (this.fetchUserSingle.verifiedOnce == 'Y') {
              this.fetchUserSingle.verifiedOnce = 'YES';
            }

            if (this.fetchUserSingle.verifiedOnce == 'N') {
              this.fetchUserSingle.verifiedOnce = 'NO';
            }
          }
        }, {
          key: "onClickOfBulk",
          value: function onClickOfBulk() {
            this.singleCall = false;
            this.accountClosureForm.get('closureType').setValue('BULK');
            localStorage.setItem('CLOSURETYPE', this.accountClosureForm.value.closureType);
          }
        }, {
          key: "onclickOfSingle",
          value: function onclickOfSingle() {
            this.singleCall = true;
            this.accountClosureForm.get('closureType').setValue('SINGLE');
            localStorage.setItem('CLOSURETYPE', this.accountClosureForm.value.closureType);
          }
        }, {
          key: "buildAccClosureForm",
          value: function buildAccClosureForm(data, isResponse) {
            console.log(data);
            this.accountClosureForm = this.formBuilder.group({
              closureType: [data.closureType ? data.closureType : '', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
              accountType: [data.accountType ? data.accountType : '', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
              accountNumber: [data.accountNumber ? data.accountNumber : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern('^[0-9 \-\']+')]],
              branchCode: [data.branchCode ? data.branchCode : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern('^[0-9 \-\']+')]],
              reasonForClosure: [data.reasonForClosure ? data.reasonForClosure : '', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]
            });
          }
        }, {
          key: "selectFile",
          value: function selectFile(event) {
            if (!this.accountClosureForm.get('accountType').value) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                text: "Please enter Account Type",
                icon: 'error'
              });
            } else {
              this.selectedFiles = event.target.files;
              this.sizeOfFile = this.selectedFiles.item(0).size;
              this.fileName = this.selectedFiles[0].name; // Swal.fire(
              //   {
              //     text:"File Uploaded Successfully",
              //     icon:'success'
              //   });
              // this.showProgressBar=true;

              setTimeout(function () {// this.showProgressBar=false;
              }, 8000);
              this.submitFile = false;
            }
          }
        }, {
          key: "onSubmitSingle",
          value: function onSubmitSingle(data) {
            var _this2 = this;

            // this.accountClosure.accountNumber = this.accountClosureForm.get('accountNumber').value;
            // this.accountClosure.accountType = this.accountClosureForm.get('accountType').value;
            // this.accountClosure.branchCode = this.accountClosureForm.get('branchCode').value;
            // this.accountClosure.reasonForClosure = this.accountClosureForm.get('reasonForClosure').value;
            this.fetchUserSingle.inputBy = this.currentUser; // this.showProgressBarSingle=true;

            this.accClosure.onSingleClosure(this.accountClosureForm.value, this.fetchUserSingle.inputBy).subscribe(function (singleClosureData) {
              if (singleClosureData) {
                var responseMsg = singleClosureData.errorDesc;

                if (responseMsg == 'S' || responseMsg === "S") {
                  _this2.fetchUserSingle = singleClosureData;

                  _this2.auditLog(); // if(this.fetchUserSingle.recordStatus=='O')
                  // {
                  //   this.fetchUserSingle.recordStatus='OPEN'
                  // }
                  // if(this.fetchUserSingle.verifiedStatus=='U')
                  // {
                  //   this.fetchUserSingle.verifiedStatus='UNAUTHORIZED'
                  // }
                  // if(this.fetchUserSingle.verifiedOnce=='N')
                  // {
                  //   this.fetchUserSingle.verifiedOnce='NO'
                  // }


                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    text: "Record Successfully Uploaded" // type: "success"

                  });
                  _this2.formTouched = !_this2.accountClosureForm.touched;
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    text: responseMsg,
                    icon: "warning"
                  });
                }
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                  text: "Server Error",
                  icon: "error"
                });
              } // this.showProgressBarSingle=false; 

            });
          }
        }, {
          key: "editValues",
          value: function editValues() {
            this.editFlag = true;
            this.accountClosureForm.enable();
          }
        }, {
          key: "onClickOfViewToDatabulk",
          value: function onClickOfViewToDatabulk() {
            // else{
            if (this.fetchUserSingle.closureType == 'BULK') {
              var navigationExtras = {
                queryParams: {
                  'closureTypeViewBulk': this.fetchUserSingle.closureType,
                  'fileName': this.fetchUserSingle.fileName,
                  'accountTypeBulk': this.fetchUserSingle.accountType,
                  'record': this.fetchUserSingle.recordStatus,
                  'authorizer': this.fetchUserSingle.verifiedBy,
                  'authFirsTime': this.fetchUserSingle.verifiedOnce,
                  'authStatus': this.fetchUserSingle.verifiedStatus,
                  'authDate': this.fetchUserSingle.verifiedTime,
                  'creator': this.fetchUserSingle.inputBy,
                  'creatorDate': this.fetchUserSingle.inputTime,
                  'modficationNo': this.fetchUserSingle.modNo,
                  'processStatus': this.fetchUserSingle.processStatus,
                  'Desc': this.fetchUserSingle.accountLinkageDesc,
                  'closeStatusInputBy': this.fetchUserSingle.closeStatusInputBy,
                  'closeStatusInputTime': this.fetchUserSingle.closeStatusInputTime,
                  'closeStatus': this.fetchUserSingle.closeStatus,
                  'icliqAvlBal': this.fetchUserSingle.icliqAvlBal,
                  'icliqBalance': this.fetchUserSingle.icliqBalance,
                  'icliqStatus': this.fetchUserSingle.icliqStatus,
                  'makerId': this.fetchUserSingle.makerId,
                  'makerInputTime': this.fetchUserSingle.makerInputTime,
                  'accls': this.fetchUserSingle.accls,
                  'lastTransactionDetail': this.fetchUserSingle.lastTransactionDetail,
                  'blockedAmount': this.fetchUserSingle.blockedAmount,
                  'deStatus': this.fetchUserSingle.deStatus,
                  'linkedAccounts': this.fetchUserSingle.linkedAccounts,
                  'checkerId': this.fetchUserSingle.checkerId,
                  'checkerInputTime': this.fetchUserSingle.checkerInputTime //----------------------------------

                }
              };
              this.accClosure.sendNavParam(navigationExtras);
              this.router.navigate(['initiate-account-closure/viewReport']); // this.router.navigate(['account-closure/viewReportOfAccountClosure'],navigationExtras);
            }
          }
        }, {
          key: "onClickOfViewToData",
          value: function onClickOfViewToData() {
            var _this3 = this;

            localStorage.setItem("accountTypeForProcess", this.fetchUserSingle.accountType);
            localStorage.setItem("closureTypeForBulk", this.fetchUserSingle.closureType);

            if (this.fetchUserSingle.closureType == "SINGLE") {
              this.accClosure.onViewOfSingleClsureType(this.fetchUserSingle.accountType, this.fetchUserSingle.closureType, this.fetchUserSingle.accountNumber).subscribe(function (viewReportOfSingleResp) {
                _this3.fetch = viewReportOfSingleResp;
                var navigationExtras = {
                  queryParams: {
                    'closureTypeView': _this3.fetch.closureType,
                    'accountNumberView': _this3.fetch.accountNumber,
                    'accountTypeview': _this3.fetch.accountType,
                    'creator': _this3.fetch.inputBy,
                    'record': _this3.fetch.recordStatus,
                    'authStatus': _this3.fetch.verifiedStatus,
                    'modficationNo': _this3.fetch.modNo,
                    'creatorDate': _this3.fetch.inputTime,
                    'authDate': _this3.fetch.verifiedTime,
                    'authFirsTime': _this3.fetch.verifiedOnce,
                    'authorizer': _this3.fetch.verifiedBy,
                    'acyCurrBalance': _this3.fetch.acyCurrBalance,
                    'frozenView': _this3.fetch.frozen,
                    'branchCode': _this3.fetch.branchCode,
                    'dorm': _this3.fetch.dorm,
                    'lcyCurrBalance': _this3.fetch.lcyCurrBalance,
                    'acSatNoCr': _this3.fetch.acSatNoCr,
                    'acyAvlBal': _this3.fetch.acyAvlBal,
                    'fileName': _this3.fetch.fileName,
                    'accStatus': _this3.fetch.accountStatus,
                    'flexRecord': _this3.fetch.recordStatusFromFlexCube,
                    'custId': _this3.fetch.customerId,
                    'valueDate': _this3.fetch.valueDate,
                    'debit': _this3.fetch.acStatNoDr,
                    'file': _this3.fetch.fileName,
                    'processStatus': _this3.fetch.processStatus,
                    'Desc': _this3.fetch.accountLinkageDesc,
                    'closeStatusInputBy': _this3.fetch.closeStatusInputBy,
                    'closeStatusInputTime': _this3.fetch.closeStatusInputTime,
                    'closeStatus': _this3.fetch.closeStatus,
                    'icliqAvlBal': _this3.fetch.icliqAvlBal,
                    'icliqBalance': _this3.fetch.icliqBalance,
                    'icliqStatus': _this3.fetch.icliqStatus,
                    'makerId': _this3.fetch.makerId,
                    'makerInputTime': _this3.fetch.makerInputTime,
                    'accls': _this3.fetch.accls,
                    'lastTransactionDetail': _this3.fetch.lastTransactionDetail,
                    'blockedAmount': _this3.fetch.blockedAmount,
                    'deStatus': _this3.fetch.deStatus,
                    'linkedAccounts': _this3.fetch.linkedAccounts,
                    'checkerId': _this3.fetch.checkerId,
                    'checkerInputTime': _this3.fetch.checkerInputTime //------------------------------

                  }
                }; // console.log("edit data",this.fetch);
                // localStorage.setItem('singledta',JSON.stringify(this.fetch));
                // this.router.navigate(['account-closure/viewReportOfAccountClosure']);

                _this3.router.navigate(['initiate-account-closure/viewReport']);
              });
            }

            ;
          }
        }, {
          key: "onSubmitFile",
          value: function onSubmitFile() {
            var _this4 = this;

            this.accountClosureForm.get('closureType').setValue('BULK');
            console.log(this.accountClosureForm.value);
            console.log(this.accountClosureForm.controls.accountType.value);
            this.sendAccountType = this.accountClosureForm.controls.accountType.value;
            console.log(this.accountClosureForm.controls.closureType.value);
            this.sendClosureType = this.accountClosureForm.controls.closureType.value;
            this.currentFileUpload = this.selectedFiles.item(0);
            this.showSubmitProgressBar = true;

            if (!this.sendAccountType) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                text: "AccountType is Mandatory",
                icon: 'warning'
              }); // this.iziToast.show({
              //   message: `AccountType is Mandatory`,
              //   image: "assets/images/user.png",
              //   icon: 'ico ico-success',
              //   theme:"dark",
              //   layout: 2,
              //   // imageWidth:50,
              //   balloon: false,
              //   position: "topRight",
              //   progressBarColor: "red",
              //   pauseOnHover: true,
              // });

              this.showSubmitProgressBar = false;
            } else {
              this.accClosure.onFileUpload(this.currentFileUpload, this.sendAccountType, this.sendClosureType, this.currentUser).subscribe(function (fileResp) {
                // ------------For upload Percentage------------
                // if (fileResp.type === HttpEventType.UploadProgress) {
                //   this.percentDone = Math.round(100 * fileResp.loaded / fileResp.total);
                // } else if (event instanceof HttpResponse) {
                //   this.uploadSuccess = true;
                // }
                if (fileResp) {
                  _this4.fetchUserSingle = fileResp;
                  console.log(_this4.fetchUserSingle);

                  if (_this4.fetchUserSingle.errorDesc == 'S') {
                    _this4.enableView = true;
                    _this4.submitFile = true; // this.iziToast.show({
                    //   message: `File uploaded sucessfully`,
                    //   image: "assets/images/user.png",
                    //   icon: 'ico ico-success',
                    //   theme:"dark",
                    //   layout: 2,
                    //   // imageWidth:50,
                    //   balloon: false,
                    //   position: "topRight",
                    //   progressBarColor: "green",
                    //   pauseOnHover: true,
                    // });

                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                      text: "File uploaded sucessfully",
                      icon: 'success'
                    });
                    _this4.formTouched = !_this4.accountClosureForm.touched;
                    _this4.showSubmitProgressBar = false;
                    _this4.showAuditlog = true;
                  } else {
                    _this4.accountClosureForm.get('accountType').setValue(_this4.sendAccountType);

                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                      text: _this4.fetchUserSingle.errorDesc,
                      icon: 'error'
                    }); // this.iziToast.show({
                    //   message: this.fetchUserSingle.errorDesc,
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

                    _this4.showSubmitProgressBar = false;
                  }
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    text: "Server Error",
                    icon: "error"
                  });
                }
              });
            }
          }
        }, {
          key: "canExit",
          value: function canExit() {
            var _this5 = this;

            var isExit = false;

            if (this.accountClosureForm.touched && this.formTouched == true) {
              return sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
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

                  _this5.cdr.markForCheck();

                  return isExit;
                } else {
                  isExit = false;

                  _this5.cdr.markForCheck();

                  return isExit;
                }
              });
            } else {
              isExit = true;
              return new Promise(function (resolve, reject) {
                if (isExit === true) {
                  isExit = true;

                  _this5.cdr.markForCheck();

                  resolve(true);
                }
              });
            }
          }
        }, {
          key: "generateExcel",
          value: function generateExcel() {
            this.router.navigate(['initiate-account-closure/viewReport']); // this.accClosure.generateExcel(this.excel);
            // else{

            if (this.fetchUserSingle.closureType == 'BULK') {
              console.log("insdie bulk", this.fetchUserSingle);
              console.log("accont Type", this.fetchUserSingle.accountType);
              console.log("closure Tpye", this.fetchUserSingle.closureType);
              console.log("finle Name", this.fetchUserSingle.fileName);
              var navigationExtras = {
                queryParams: {
                  closureTypeViewBulk: this.fetchUserSingle.closureType,
                  fileNmaeBulk: this.fetchUserSingle.fileName,
                  accountTypeBulk: this.fetchUserSingle.accountType,
                  record: this.fetchUserSingle.recordStatus,
                  authorizer: this.fetchUserSingle.verifiedBy,
                  authFirsTime: this.fetchUserSingle.verifiedOnce,
                  authStatus: this.fetchUserSingle.verifiedStatus,
                  authDate: this.fetchUserSingle.verifiedTime,
                  creator: this.fetchUserSingle.inputBy,
                  creatorDate: this.fetchUserSingle.inputTime,
                  modficationNo: this.fetchUserSingle.modNo,
                  processStatus: this.fetchUserSingle.processStatus
                }
              };
              this.router.navigate(['initiate-account-closure/viewReport'], navigationExtras);
            }
          }
        }, {
          key: "onSubmitOfSingleClosure",
          value: function onSubmitOfSingleClosure() {
            var _this6 = this;

            // this.editFalg=false;
            this.accClosure.submiitingSingleClosureRecordAfterEdit(this.fetchUserSingle, this.currentUser, this.fetchUserSingle.id).subscribe(function (backendResp) {
              console.log(backendResp.errorDesc);
              _this6.fetchUserSingle = backendResp;
              /****if bckend Resp.closeCustAcErrorDesc == 's' print success else direct print the backend response*/

              if (_this6.fetchUserSingle.errorDesc == 'S') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                  title: 'Record successfuly modified and uploaded' // type:'success'

                });
              } else {
                /** */
                var responseMsg = backendResp.errorDesc;
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                  title: responseMsg,
                  icon: 'warning'
                });
              }

              _this6.cdr.markForCheck();
            });
          }
        }, {
          key: "onclickOfAuth",
          value: function onclickOfAuth() {
            console.log("this is auth");
            console.log(this.fetchUserSingle.accountNumber);
            this.accClosure.onAuthorizingTheRecord(this.fetchUserSingle.accountNumber, this.currentUser).subscribe(function (authResp) {
              console.log(authResp);

              if (!authResp) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                  title: 'Authorization Failed',
                  icon: 'warning'
                });
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                  title: 'Record is Authorized' // type: 'success',

                });
              }
            });
          }
        }, {
          key: "onclickOfClose",
          value: function onclickOfClose() {
            var _this7 = this;

            console.log("this is close");
            this.accClosure.onClosingTheRecord(this.fetchUserSingle.accountNumber, this.currentUser).subscribe(function (recordStatusResp) {
              console.log(recordStatusResp);
              _this7.fetchUserSingle = recordStatusResp;

              _this7.auditLog(); // if(this.fetchUserSingle.recordStatus=='C')
              // {
              //   this.fetchUserSingle.recordStatus='CLOSE'
              // }
              // if(this.fetchUserSingle.recordStatus=='O')
              // {
              //   this.fetchUserSingle.recordStatus='OPEN'
              // }
              // if(this.fetchUserSingle.verifiedStatus=='A')
              // {
              //   this.fetchUserSingle.verifiedStatus='AUTHORIZED'
              // }
              // if(this.fetchUserSingle.verifiedStatus=='U')
              // {
              //   this.fetchUserSingle.verifiedStatus='UNAUTHORIZED'
              // }
              // if(this.fetchUserSingle.verifiedOnce=='Y')
              // {
              //   this.fetchUserSingle.verifiedOnce='YES'
              // }
              // if(this.fetchUserSingle.verifiedOnce=='N')
              // {
              //   this.fetchUserSingle.verifiedOnce='NO'
              // }

            });
          }
        }, {
          key: "onclickOfReopen",
          value: function onclickOfReopen() {
            var _this8 = this;

            console.log("this is reopen");
            this.accClosure.onReopningTheRecord(this.fetchUserSingle.accountNumber, this.currentUser).subscribe(function (openResp) {
              console.log(openResp);
              _this8.fetchUserSingle = openResp;

              if (_this8.fetchUserSingle.recordStatus == 'C') {
                _this8.fetchUserSingle.recordStatus = 'CLOSE';
              }

              if (_this8.fetchUserSingle.recordStatus == 'O') {
                _this8.fetchUserSingle.recordStatus = 'OPEN';
              }
            });
          }
        }, {
          key: "createAccClosure",
          value: function createAccClosure() {
            var navigationExtras = {
              queryParams: {}
            };
            this.roleService.sendNavParam(navigationExtras);
          }
        }]);

        return _AccountClosureDetailsComponent;
      }();

      _AccountClosureDetailsComponent.??fac = function AccountClosureDetailsComponent_Factory(t) {
        return new (t || _AccountClosureDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](src_app_shared_services_account_closure_service_service__WEBPACK_IMPORTED_MODULE_3__.AccountClosureServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_4__.CanDeactivateGuard), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](ng2_izitoast__WEBPACK_IMPORTED_MODULE_5__.Ng2IzitoastService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_6__.RoleService));
      };

      _AccountClosureDetailsComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineComponent"]({
        type: _AccountClosureDetailsComponent,
        selectors: [["npr-account-closure-details"]],
        decls: 41,
        vars: 12,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "dbCardStyle", "cardWidth"], [1, "row", "gy-4", "justify-content-center"], [1, "col-12"], [1, "row", "g-2", "justify-content-center"], [1, "col-sm-4", "col-5"], [1, "radio", "radioStyle"], ["id", "radio-1", "name", "radio", "type", "radio", 3, "readonly", "checked", "click"], ["for", "radio-1", 1, "radio-label"], ["id", "radio-2", "name", "radio", "type", "radio", 3, "readonly", "checked", "click"], ["for", "radio-2", 1, "radio-label"], ["for", "roleName", 1, "formLbl"], [1, "colorRed"], ["formControlName", "accountType", "aria-label", "Default select example", 1, "form-select"], ["hidden", "", "value", "", "disabled", "", "selected", ""], ["value", "dormant"], ["value", "overDrawn"], ["value", "unclaimed"], ["class", "errorColor", 4, "ngIf"], ["class", "col-12", 4, "ngIf"], [1, "errorColor"], [4, "ngIf"], ["id", "accountNumber", "placeholder", "Account Number", "required", "", "formControlName", "accountNumber", "value", "", 1, "form-control", 3, "readonly"], ["id", "branchCode", "placeholder", "Branch Code", "required", "", "formControlName", "branchCode", "value", "", 1, "form-control", 3, "readonly"], ["id", "", "placeholder", "Reason For Closure", "required", "", "formControlName", "reasonForClosure", "value", "", 1, "form-control", 3, "readonly"], [1, "fileUpload"], [1, "formS"], [1, "file-upload-wrapper", "upIcon"], ["name", "file-upload-field", "type", "file", "value", "", 1, "file-upload-field", 3, "readonly", "disabled", "change"], [1, "row", "g-3", "pb-3", "justify-content-center", "pt-3"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["routerLink", "/initiate-account-closure", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"]],
        template: function AccountClosureDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, "Initiate Account Closure");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](11, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function AccountClosureDetailsComponent_Template_input_click_11_listener() {
              return ctx.onClickOfBulk();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](12, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](13, "Bulk");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](16, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function AccountClosureDetailsComponent_Template_input_click_16_listener() {
              return ctx.onclickOfSingle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](17, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](18, "Single");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](19, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](20, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](21, "Account Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](22, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](23, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](24, "select", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](25, "option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](26, "--Please select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](27, "option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](28, "Dormant ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](29, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](30, "OverDrawn Accounts");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](31, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](32, "Unclaimed ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](33, AccountClosureDetailsComponent_div_33_Template, 2, 1, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](34, AccountClosureDetailsComponent_div_34_Template, 7, 2, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](35, AccountClosureDetailsComponent_div_35_Template, 7, 2, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](36, AccountClosureDetailsComponent_div_36_Template, 7, 2, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](37, AccountClosureDetailsComponent_div_37_Template, 5, 7, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](38, AccountClosureDetailsComponent_div_38_Template, 10, 2, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](39, AccountClosureDetailsComponent_div_39_Template, 14, 9, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](40, "br");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("formGroup", ctx.accountClosureForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("readonly", ctx.editFlag)("checked", ctx.bulk);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("readonly", ctx.editFlag)("checked", !ctx.bulk);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.accountClosureForm.get("accountType").invalid && (ctx.accountClosureForm.get("accountType").dirty || ctx.accountClosureForm.get("accountType").touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.singleCall);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.singleCall);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.singleCall);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", !ctx.singleCall);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.fetchUserSingle.closureType == null);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.fetchUserSingle.closureType != null);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["??NgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink],
        styles: [".errorColor[_ngcontent-%COMP%] {\n  color: #e6224a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQtY2xvc3VyZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKIiwiZmlsZSI6ImFjY291bnQtY2xvc3VyZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yQ29sb3J7XHJcbiAgICBjb2xvcjogI2U2MjI0YTtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    32291:
    /*!*******************************************************************************************!*\
      !*** ./src/app/views/initiate-account-closure/initiate-account-closure-routing.module.ts ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InitiateAccountClosureRoutingModule": function InitiateAccountClosureRoutingModule() {
          return (
            /* binding */
            _InitiateAccountClosureRoutingModule
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


      var _account_closure_details_account_closure_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./account-closure-details/account-closure-details.component */
      47833);
      /* harmony import */


      var _initiate_account_closure_initiate_account_closure_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./initiate-account-closure/initiate-account-closure.component */
      65355);
      /* harmony import */


      var _view_report_acc_closure_view_report_acc_closure_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./view-report-acc-closure/view-report-acc-closure.component */
      17272);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: "",
        component: _initiate_account_closure_initiate_account_closure_component__WEBPACK_IMPORTED_MODULE_2__.InitiateAccountClosureComponent
      }, {
        path: "create",
        component: _account_closure_details_account_closure_details_component__WEBPACK_IMPORTED_MODULE_1__.AccountClosureDetailsComponent,
        canDeactivate: [src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__.CanDeactivateGuard]
      }, {
        path: "viewReport",
        component: _view_report_acc_closure_view_report_acc_closure_component__WEBPACK_IMPORTED_MODULE_3__.ViewReportAccClosureComponent
      }];

      var _InitiateAccountClosureRoutingModule = /*#__PURE__*/_createClass(function _InitiateAccountClosureRoutingModule() {
        _classCallCheck(this, _InitiateAccountClosureRoutingModule);
      });

      _InitiateAccountClosureRoutingModule.??fac = function InitiateAccountClosureRoutingModule_Factory(t) {
        return new (t || _InitiateAccountClosureRoutingModule)();
      };

      _InitiateAccountClosureRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({
        type: _InitiateAccountClosureRoutingModule
      });
      _InitiateAccountClosureRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](_InitiateAccountClosureRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    69628:
    /*!***********************************************************************************!*\
      !*** ./src/app/views/initiate-account-closure/initiate-account-closure.module.ts ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InitiateAccountClosureModule": function InitiateAccountClosureModule() {
          return (
            /* binding */
            _InitiateAccountClosureModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _initiate_account_closure_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./initiate-account-closure-routing.module */
      32291);
      /* harmony import */


      var _initiate_account_closure_initiate_account_closure_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./initiate-account-closure/initiate-account-closure.component */
      65355);
      /* harmony import */


      var _account_closure_details_account_closure_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./account-closure-details/account-closure-details.component */
      47833);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular-datatables */
      50481);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _view_report_acc_closure_view_report_acc_closure_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./view-report-acc-closure/view-report-acc-closure.component */
      17272);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _InitiateAccountClosureModule = /*#__PURE__*/_createClass(function _InitiateAccountClosureModule() {
        _classCallCheck(this, _InitiateAccountClosureModule);
      });

      _InitiateAccountClosureModule.??fac = function InitiateAccountClosureModule_Factory(t) {
        return new (t || _InitiateAccountClosureModule)();
      };

      _InitiateAccountClosureModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({
        type: _InitiateAccountClosureModule
      });
      _InitiateAccountClosureModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _initiate_account_closure_routing_module__WEBPACK_IMPORTED_MODULE_0__.InitiateAccountClosureRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](_InitiateAccountClosureModule, {
          declarations: [_initiate_account_closure_initiate_account_closure_component__WEBPACK_IMPORTED_MODULE_1__.InitiateAccountClosureComponent, _account_closure_details_account_closure_details_component__WEBPACK_IMPORTED_MODULE_2__.AccountClosureDetailsComponent, _view_report_acc_closure_view_report_acc_closure_component__WEBPACK_IMPORTED_MODULE_4__.ViewReportAccClosureComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _initiate_account_closure_routing_module__WEBPACK_IMPORTED_MODULE_0__.InitiateAccountClosureRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule]
        });
      })();
      /***/

    },

    /***/
    65355:
    /*!***************************************************************************************************************!*\
      !*** ./src/app/views/initiate-account-closure/initiate-account-closure/initiate-account-closure.component.ts ***!
      \***************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InitiateAccountClosureComponent": function InitiateAccountClosureComponent() {
          return (
            /* binding */
            _InitiateAccountClosureComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_account_closure_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/account-closure-service.service */
      60965);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      77382);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular-datatables */
      50481);

      function InitiateAccountClosureComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function InitiateAccountClosureComponent_div_6_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

            return ctx_r2.createAccClosure();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r0.roleCodes["new"].labelDescription);
        }
      }

      function InitiateAccountClosureComponent_tr_31_button_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function InitiateAccountClosureComponent_tr_31_button_20_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r10);

            var users_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]().$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

            return ctx_r8.close(users_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](1, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }
      }

      function InitiateAccountClosureComponent_tr_31_button_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function InitiateAccountClosureComponent_tr_31_button_21_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r13);

            var users_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]().$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

            return ctx_r11.open(users_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](1, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }
      }

      function InitiateAccountClosureComponent_tr_31_button_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function InitiateAccountClosureComponent_tr_31_button_22_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r16);

            var users_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]().$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

            return ctx_r14["delete"](users_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](1, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }
      }

      function InitiateAccountClosureComponent_tr_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function InitiateAccountClosureComponent_tr_31_Template_a_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r18);

            var users_r4 = restoredCtx.$implicit;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

            return ctx_r17.getDataFromSummary(users_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipe"](16, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](18, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function InitiateAccountClosureComponent_tr_31_Template_button_click_18_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r18);

            var users_r4 = restoredCtx.$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

            return ctx_r19.auth(users_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](19, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](20, InitiateAccountClosureComponent_tr_31_button_20_Template, 2, 0, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](21, InitiateAccountClosureComponent_tr_31_button_21_Template, 2, 0, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](22, InitiateAccountClosureComponent_tr_31_button_22_Template, 2, 0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var users_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate1"]("routerLink", "/initiate-account-closure/create/", users_r4.closureType, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](users_r4.closureType);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](users_r4.accountType);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](users_r4.status);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](users_r4.makerId);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](users_r4.verifiedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](users_r4.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipeBind2"](16, 12, users_r4.inputTime, "medium"));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", !(users_r4.verifiedStatus == "U" || users_r4.verifiedStatus == "UNAUTHORIZED" || users_r4.verifiedStatus == "Unauthorized"));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", (users_r4.recordStatus == "O" || users_r4.recordStatus == "Open" || users_r4.recordStatus == "OPEN") && (users_r4.verifiedOnce == "Y" || users_r4.verifiedOnce == "YES"));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", (users_r4.recordStatus == "CLOSED" || users_r4.recordStatus == "Close" || users_r4.recordStatus == "C") && (users_r4.verifiedOnce == "YES" || users_r4.verifiedOnce == "Y"));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", users_r4.verifiedOnce == "N" || users_r4.verifiedOnce == "NO");
        }
      }

      var _c0 = function _c0() {
        return ["/dashboard"];
      };

      var _InitiateAccountClosureComponent = /*#__PURE__*/function () {
        function _InitiateAccountClosureComponent(accClosureServiceSum, roleService, router) {
          _classCallCheck(this, _InitiateAccountClosureComponent);

          this.accClosureServiceSum = accClosureServiceSum;
          this.roleService = roleService;
          this.router = router;
          this.dtOptions = {};
          this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__.permissionsLabels(); // this.dtOptions = {};

          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
          this.statusArr = ['Authorized', 'Unauthorized', 'Open', 'Close'];
        }

        _createClass(_InitiateAccountClosureComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            setTimeout(function () {
              _this9.newRolePermissions();
            }, 2000);
            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 5,
              columnDefs: [{
                type: 'date',
                'targets': [6]
              }],
              order: [[6, 'desc']],
              processing: true,
              lengthMenu: [[5, 10, 20, 30, -1], [5, 10, 20, 30, "ALL"]]
            };
            this.currentUser = localStorage.getItem('currentUser').replace(/['"]+/g, '');
            this.gettingAccClosureSummary(this.currentUser);
            this.roleService.fetchScreenPermissions('Initiate Account Closure');
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this9.roleCodes = message;
            });
            console.log(this.roleCodes);
          }
        }, {
          key: "createAccClosure",
          value: function createAccClosure() {
            this.router.navigate(['/initiate-account-closure/create']);
            var navigationExtras = {
              queryParams: {}
            };
            this.roleService.sendNavParam(navigationExtras);
            this.accClosureServiceSum.setIndexValue({
              index: "new"
            });
          }
        }, {
          key: "getDataFromSummary",
          value: function getDataFromSummary(row) {
            console.log("this is row", row);
            this.fileName = row.fileName;
            localStorage.setItem("fileName", this.fileName);
            this.viewAccountType = row.accountType;
            localStorage.setItem("typeOfAccount", this.viewAccountType); //  if(row.closureType=="SINGLE")
            //  {
            //  }

            var navigationExtras = {
              queryParams: {
                modifyNo: row.modNo,
                closureType: row.closureType,
                accountNumber: row.accountNumber,
                accountType: row.accountType,
                recordStatus: row.recordStatus,
                verifiedStatus: row.verifiedStatus,
                inputBy: row.inputBy,
                inputTime: row.inputTime,
                modNo: row.modNo,
                authorizedTime: row.authorizedTime,
                verifiedfirst: row.verifiedOnce,
                verifiedBy: row.verifiedBy,
                fileName: row.fileName,
                branch: row.branchCode,
                reason: row.reasonForClosure,
                id: row.id,
                processStatus: row.processStatus,
                Desc: row.accountLinkageDesc,
                //-----------------------------------------
                closeStatusInputBy: row.closeStatusInputBy,
                closeStatusInputTime: row.closeStatusInputTime,
                closeStatus: row.closeStatus,
                icliqAvlBal: row.icliqAvlBal,
                icliqBalance: row.icliqBalance,
                icliqStatus: row.icliqStatus,
                makerId: row.makerId,
                makerInputTime: row.makerInputTime,
                accls: row.accls,
                lastTransactionDetail: row.lastTransactionDetail,
                blockedAmount: row.blockedAmount,
                deStatus: row.deStatus,
                linkedAccounts: row.linkedAccounts,
                checkerId: row.checkerId,
                checkerInputTime: row.checkerInputTime //-------------------------------------

              }
            };
            console.log('navigationExtras', navigationExtras);
            localStorage.setItem('AccountClosureNavObj', JSON.stringify(row));
            this.roleService.sendNavParam(navigationExtras);
            this.router.navigate(['/initiate-account-closure/create']);
            this.accClosureServiceSum.setIndexValue({
              index: "edit"
            });
          }
        }, {
          key: "newRolePermissions",
          value: function newRolePermissions() {
            this.roleService.fetchScreenPermissions('Initiate Account Closure');
          }
        }, {
          key: "gettingAccClosureSummary",
          value: function gettingAccClosureSummary(currentUser) {
            var _this10 = this;

            console.log("this account closure Summary");
            this.accClosureServiceSum.gettingAccountClosureSummary(currentUser).subscribe(function (backendResp) {
              console.log(backendResp);
              _this10.SummaryData = backendResp;

              var _iterator = _createForOfIteratorHelper(_this10.SummaryData),
                  _step;

              try {
                var _loop = function _loop() {
                  var users = _step.value;
                  users.verifiedStatus = _this10.statusArr.find(function (i) {
                    return i.startsWith(users.verifiedStatus);
                  });
                  users.recordStatus = _this10.statusArr.find(function (i) {
                    return i.startsWith(users.recordStatus);
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

              _this10.summaryDetails = backendResp;

              _this10.dtTrigger.next(); // this.dataSource = new MatTableDataSource<FetchUserForSingleAccClosureReqDTO>(this.summaryDetails);
              // this.dataSource.paginator = this.paginator.toArray()[0];;
              // console.log(this.summaryDetails);

            });
          }
        }, {
          key: "auth",
          value: function auth(users) {
            console.log(users);
            console.log("this is auth");
            console.log(users.accountNumber);
            this.accClosureServiceSum.onAuthorizingTheRecord(users.accountNumber, this.currentUser).subscribe(function (authResp) {
              console.log(authResp);

              if (!authResp) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  title: 'Authorization Failed',
                  icon: 'warning'
                });
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  title: 'Record is Authorized' // type: 'success',

                }).then(function () {
                  return window.location.reload();
                });
              }
            });
          }
        }, {
          key: "open",
          value: function open(users) {
            var _this11 = this;

            console.log("this is reopen");
            this.accClosureServiceSum.onReopningTheRecord(this.fetchUserSingle.accountNumber, this.currentUser).subscribe(function (openResp) {
              console.log(openResp);
              _this11.fetchUserSingle = openResp;

              if (_this11.fetchUserSingle.recordStatus == 'C') {
                _this11.fetchUserSingle.recordStatus = 'CLOSE';
              }

              if (_this11.fetchUserSingle.recordStatus == 'O') {
                _this11.fetchUserSingle.recordStatus = 'OPEN';
              }
            });
          }
        }, {
          key: "close",
          value: function close(users) {
            var _this12 = this;

            console.log("this is close");
            this.accClosureServiceSum.onClosingTheRecord(users.accountNumber, this.currentUser).subscribe(function (recordStatusResp) {
              console.log(recordStatusResp);
              _this12.fetchUserSingle = recordStatusResp;

              _this12.auditLog(); // if(this.fetchUserSingle.recordStatus=='C')
              // {
              //   this.fetchUserSingle.recordStatus='CLOSE'
              // }
              // if(this.fetchUserSingle.recordStatus=='O')
              // {
              //   this.fetchUserSingle.recordStatus='OPEN'
              // }
              // if(this.fetchUserSingle.verifiedStatus=='A')
              // {
              //   this.fetchUserSingle.verifiedStatus='AUTHORIZED'
              // }
              // if(this.fetchUserSingle.verifiedStatus=='U')
              // {
              //   this.fetchUserSingle.verifiedStatus='UNAUTHORIZED'
              // }
              // if(this.fetchUserSingle.verifiedOnce=='Y')
              // {
              //   this.fetchUserSingle.verifiedOnce='YES'
              // }
              // if(this.fetchUserSingle.verifiedOnce=='N')
              // {
              //   this.fetchUserSingle.verifiedOnce='NO'
              // }

            });
          }
        }, {
          key: "delete",
          value: function _delete(users) {}
        }, {
          key: "auditLog",
          value: function auditLog() {
            if (this.fetchUserSingle.recordStatus == 'C' || this.fetchUserSingle.recordStatus == 'CLOSE') {
              this.fetchUserSingle.recordStatus = 'CLOSE';
            }

            if (this.fetchUserSingle.recordStatus == 'O' || this.fetchUserSingle.recordStatus == 'OPEN') {
              this.fetchUserSingle.recordStatus = 'OPEN';
            }

            if (this.fetchUserSingle.verifiedStatus == 'U') {
              this.fetchUserSingle.verifiedStatus = 'UNAUTHORIZED';
            }

            if (this.fetchUserSingle.verifiedOnce == 'A') {
              this.fetchUserSingle.verifiedOnce = 'AUTHORIZED';
            }

            if (this.fetchUserSingle.verifiedOnce == 'Y') {
              this.fetchUserSingle.verifiedOnce = 'YES';
            }

            if (this.fetchUserSingle.verifiedOnce == 'N') {
              this.fetchUserSingle.verifiedOnce = 'NO';
            }
          }
        }]);

        return _InitiateAccountClosureComponent;
      }();

      _InitiateAccountClosureComponent.??fac = function InitiateAccountClosureComponent_Factory(t) {
        return new (t || _InitiateAccountClosureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](src_app_shared_services_account_closure_service_service__WEBPACK_IMPORTED_MODULE_2__.AccountClosureServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
      };

      _InitiateAccountClosureComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({
        type: _InitiateAccountClosureComponent,
        selectors: [["npr-initiate-account-closure"]],
        decls: 32,
        vars: 6,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [1, "table-responsive"], ["datatable", "", 1, "dataTable", "table", "tableStyle", "nowrap", "vAlignMdl", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "primaryColor", 3, "routerLink", "click"], ["title", "Authorize", 1, "btn", 2, "color", "red", 3, "disabled", "click"], ["src", "assets/images/authorize.svg", "alt", "Authorize"], ["class", "btn", "style", "color: red", "title", "Close", 3, "click", 4, "ngIf"], ["class", "btn", "style", "color: red", "title", "Reopen", 3, "click", 4, "ngIf"], ["class", "btn", "style", "color: red", "title", "Delete", 3, "click", 4, "ngIf"], ["title", "Close", 1, "btn", 2, "color", "red", 3, "click"], ["src", "assets/images/CROSS1.svg", "alt", "..."], ["title", "Reopen", 1, "btn", 2, "color", "red", 3, "click"], ["src", "assets/images/open.svg", "alt", "..."], ["title", "Delete", 1, "btn", 2, "color", "red", 3, "click"], ["src", "assets/images/delete.svg", "alt", "..."]],
        template: function InitiateAccountClosureComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](3, "Initiate Account Closure ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](6, InitiateAccountClosureComponent_div_6_Template, 3, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](9, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](11, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](12, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](13, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](14, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](15, "closure type");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](17, "account type");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](18, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](19, "status");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](21, "maker id");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](23, "auth status");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](24, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](25, "record status");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](26, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](27, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](28, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](29, "action");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](30, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](31, InitiateAccountClosureComponent_tr_31_Template, 23, 15, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.roleCodes["new"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction0"](5, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx.summaryDetails);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, angular_datatables__WEBPACK_IMPORTED_MODULE_4__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbml0aWF0ZS1hY2NvdW50LWNsb3N1cmUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    17272:
    /*!*************************************************************************************************************!*\
      !*** ./src/app/views/initiate-account-closure/view-report-acc-closure/view-report-acc-closure.component.ts ***!
      \*************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewReportAccClosureComponent": function ViewReportAccClosureComponent() {
          return (
            /* binding */
            _ViewReportAccClosureComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_shared_models_FetchUserForSingleAccClosureReqDTO__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/models/FetchUserForSingleAccClosureReqDTO */
      58179);
      /* harmony import */


      var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! jspdf */
      75585);
      /* harmony import */


      var jspdf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! jspdf-autotable */
      56587);
      /* harmony import */


      var jspdf_autotable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_account_closure_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/account-closure-service.service */
      60965);
      /* harmony import */


      var ng2_izitoast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-izitoast */
      27218);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      77382);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angular-datatables */
      50481);

      function ViewReportAccClosureComponent_div_5_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](1, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????listener"]("click", function ViewReportAccClosureComponent_div_5_div_11_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["????restoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????nextContext"](2);

            return ctx_r4.onProcessingTheBulkAccount();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](2, "Process");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        }
      }

      function ViewReportAccClosureComponent_div_5_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](1, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????listener"]("click", function ViewReportAccClosureComponent_div_5_div_12_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["????restoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????nextContext"](2);

            return ctx_r6.onProcessingTheSingleAccount();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](2, "Process");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        }
      }

      function ViewReportAccClosureComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](2, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](3, "Export As");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](4, "select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????listener"]("change", function ViewReportAccClosureComponent_div_5_Template_select_change_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["????restoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????nextContext"]();

            return ctx_r8.modo($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](5, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](6, "Excel");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](7, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](8, "PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](10, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????template"](11, ViewReportAccClosureComponent_div_5_div_11_Template, 3, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????template"](12, ViewReportAccClosureComponent_div_5_div_12_Template, 3, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](13, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](14, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????listener"]("click", function ViewReportAccClosureComponent_div_5_Template_a_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["????restoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????nextContext"]();

            return ctx_r10.onCancelingTheRecord();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](15, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](16, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](17, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](18, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("ngIf", ctx_r0.closureTypes == "BULK");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("ngIf", ctx_r0.closureTypes == "SINGLE");
        }
      }

      function ViewReportAccClosureComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](2, "table", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](3, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](4, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](6, "Account Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](8, "Closure Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](10, "Branch Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](12, "Account Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](13, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](14, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](23, "table", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](24, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](25, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](26, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](27, "Current Balance [ACY]");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](28, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](29, "Current Balance [LCY]");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](30, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](31, "Available Balance");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](32, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](33, " No Debit");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](34, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](35, "No Credit");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](36, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](37, "Frozen");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](38, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](39, "Dormant");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](40, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](41, "Account Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](42, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](43, "Record Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](44, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](45, "Customer Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](46, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](47, "Value Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](48, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](49, "Account Block");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](50, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](51, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](52, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](54, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](56, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](58, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](59);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](60, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](61);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](62, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](63);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](64, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](65);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](66, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](67);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](68, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](69);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](70, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](71);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](72, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](73);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](74, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](75, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](76, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](77, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????listener"]("click", function ViewReportAccClosureComponent_div_6_Template_button_click_77_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["????restoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????nextContext"]();

            return ctx_r11.onProcessingTheSingleAccount();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](78, "Process");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](79, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](80, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????listener"]("click", function ViewReportAccClosureComponent_div_6_Template_button_click_80_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["????restoreView"](_r12);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????nextContext"]();

            return ctx_r13.onCancelingTheSingleRecord();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](81, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](82, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](83, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](84, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](85, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](86, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](87, "Export As");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](88, "select", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](89, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????listener"]("click", function ViewReportAccClosureComponent_div_6_Template_option_click_89_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["????restoreView"](_r12);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????nextContext"]();

            return ctx_r14.downloadReportForSingle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](90, "Excel");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](91, "option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????listener"]("click", function ViewReportAccClosureComponent_div_6_Template_option_click_91_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["????restoreView"](_r12);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????nextContext"]();

            return ctx_r15.convertReportForSingle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](92, "PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("dtOptions", ctx_r1.dtOptions)("dtTrigger", ctx_r1.dtTrigger);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????textInterpolate"](ctx_r1.fetchUserSingle.accountType);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????textInterpolate"](ctx_r1.fetchUserSingle.closureType);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????textInterpolate"](ctx_r1.fetchUserSingle.branchCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????textInterpolate"](ctx_r1.fetchUserSingle.accountNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("dtOptions", ctx_r1.dtOptions)("dtTrigger", ctx_r1.dtTrigger);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????textInterpolate"](ctx_r1.fetchUserSingle.acyCurrBalance);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????textInterpolate1"](" ", ctx_r1.fetchUserSingle.lcyCurrBalance, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????textInterpolate"](ctx_r1.fetchUserSingle.acyAvlBal);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????textInterpolate"](ctx_r1.fetchUserSingle.acStatNoDr);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????textInterpolate"](ctx_r1.fetchUserSingle.acSatNoCr);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????textInterpolate"](ctx_r1.fetchUserSingle.frozen);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????textInterpolate"](ctx_r1.fetchUserSingle.dorm);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????textInterpolate"](ctx_r1.fetchUserSingle.accountStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????textInterpolate"](ctx_r1.fetchUserSingle.recordStatusFromFlexCube);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????textInterpolate"](ctx_r1.fetchUserSingle.customerId);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_8__["????textInterpolate"](ctx_r1.fetchUserSingle.valueDate);
        }
      }

      var _ViewReportAccClosureComponent = /*#__PURE__*/function () {
        function _ViewReportAccClosureComponent(excelService, ref, iziToast, roleService, router) {
          _classCallCheck(this, _ViewReportAccClosureComponent);

          this.excelService = excelService;
          this.ref = ref;
          this.iziToast = iziToast;
          this.roleService = roleService;
          this.router = router;
          this.fetchUserSingle = new src_app_shared_models_FetchUserForSingleAccClosureReqDTO__WEBPACK_IMPORTED_MODULE_0__.FetchUserForSingleAccClosureReqDTO();
          this.accountTypeForBulk = "";
          this.excel = [];
          this.sendFileName = "";
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
          this.dtOptions = {};
          this.singleExcel = Array();
        }

        _createClass(_ViewReportAccClosureComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            console.log("Inside View Report");
            this.closureTypes = localStorage.getItem("CLOSURETYPE");
            console.log(this.closureTypes);
            this.navSubscription = this.excelService.getNavParam.subscribe(function (data) {
              return _this13.ViewAccClosure = data;
            });
            console.log(this.ViewAccClosure);
            this.fetchUserSingle.accountTypeBulk = this.ViewAccClosure.queryParams.accountTypeBulk;
            this.fetchUserSingle.modNo = this.ViewAccClosure.queryParams.modNo;
            this.fetchUserSingle.closureType = this.ViewAccClosure.queryParams.closureType;
            this.fetchUserSingle.accountNumber = this.ViewAccClosure.queryParams.accountNumber;
            this.fetchUserSingle.accountType = this.ViewAccClosure.queryParams.accountType;
            this.fetchUserSingle.recordStatus = this.ViewAccClosure.queryParams.record;
            this.fetchUserSingle.verifiedStatus = this.ViewAccClosure.queryParams.verifiedStatus;
            this.fetchUserSingle.inputBy = this.ViewAccClosure.queryParams.inputBy;
            this.fetchUserSingle.inputTime = this.ViewAccClosure.queryParams.inputTime; // this.fetchUserSingle.modNo = params.modNo

            this.fetchUserSingle.verifiedOnce = this.ViewAccClosure.queryParams.verifiedfirst;
            this.fetchUserSingle.verifiedBy = this.ViewAccClosure.queryParams.verifiedBy;
            this.fetchUserSingle.fileName = this.ViewAccClosure.queryParams.fileName;
            this.fetchUserSingle.branchCode = this.ViewAccClosure.queryParams.branch;
            this.fetchUserSingle.reasonForClosure = this.ViewAccClosure.queryParams.reason;
            this.fetchUserSingle.processStatus = this.ViewAccClosure.queryParams.processStatus;
            this.fetchUserSingle.accountLinkageDesc = this.ViewAccClosure.queryParams.Desc; //--------------------------------------------

            this.fetchUserSingle.closeStatusInputBy = this.ViewAccClosure.queryParams.closeStatusInputBy;
            this.fetchUserSingle.closeStatusInputTime = this.ViewAccClosure.queryParams.closeStatusInputTime;
            this.fetchUserSingle.closeStatus = this.ViewAccClosure.queryParams.closeStatus;
            this.fetchUserSingle.icliqAvlBal = this.ViewAccClosure.queryParams.icliqAvlBal;
            this.fetchUserSingle.icliqBalance = this.ViewAccClosure.queryParams.icliqBalance;
            this.fetchUserSingle.icliqStatus = this.ViewAccClosure.queryParams.icliqStatus;
            this.fetchUserSingle.makerId = this.ViewAccClosure.queryParams.makerId;
            this.fetchUserSingle.makerInputTime = this.ViewAccClosure.queryParams.makerInputTime;
            this.fetchUserSingle.accls = this.ViewAccClosure.queryParams.accls;
            this.fetchUserSingle.lastTransactionDetail = this.ViewAccClosure.queryParams.lastTransactionDetail;
            this.fetchUserSingle.blockedAmount = this.ViewAccClosure.queryParams.blockedAmount;
            this.fetchUserSingle.deStatus = this.ViewAccClosure.queryParams.deStatus;
            this.fetchUserSingle.linkedAccounts = this.ViewAccClosure.queryParams.linkedAccounts;
            this.fetchUserSingle.checkerId = this.ViewAccClosure.queryParams.checkerId;
            this.fetchUserSingle.checkerInputTime = this.ViewAccClosure.queryParams.checkerInputTime;
            console.log(this.fetchUserSingle);
          }
        }, {
          key: "exportAsXLSX",
          value: function exportAsXLSX() {
            var _this14 = this;

            console.log("this is on click of download"); // this.showProgressBar = true;

            setTimeout(function () {// this.showProgressBar = false;
            }, 2000); // console.log(this.excel);
            // this.bulkDataInExcel=this.excel;
            // console.log("bulkDataInExcel",this.bulkDataInExcel);
            //let fin=this.sendFileName.split('.').slice(0, -1).join('.');

            console.log(this.fetchUserSingle.fileName);
            var fin = this.fetchUserSingle.fileName.split('.').slice(0, -1).join('.');
            this.excelService.getExcel(fin, this.fetchUserSingle.accountType).subscribe(function (data) {
              console.log("this is backend data for excel", data);
              _this14.excel = data;
              data.forEach(function (element) {//this.excel.push(element);
              }); //console.log("vidya",this.excel);

              _this14.excelService.exportAsExcelFile(_this14.excel, 'BULK_ACCOUNT_CLOSURE');
            });
            console.log(this.excel); // --passing two arguments --1)is getting data from backend --i.e is excel data
            // 2)what name i should give for file
          } //downloding records in pdf

        }, {
          key: "convert",
          value: function convert() {
            var _this15 = this;

            var doc = new (jspdf__WEBPACK_IMPORTED_MODULE_1___default())();
            var col = [["AccountNo", "branchCode", "closureReason", "customerId", "fileName", "frozen"]];
            var rows = [];
            console.log(this.fetchUserSingle);
            /* The following array of object as response from the API req  */

            var fin = this.fetchUserSingle.fileName.split('.').slice(0, -1).join('.'); //let fin=this.fetchUserSingle.fileName.split('.').slice(0, -1).join('.');

            this.excelService.getExcel(fin, this.fetchUserSingle.accountType).subscribe(function (data) {
              console.log("this is backend data for excel");
              _this15.excel = data;
              var itemNew = _this15.excel;
              itemNew.forEach(function (element) {
                var date = new Date(element.timeForExport).toLocaleDateString("en-us");
                console.log(date);
                var temp = [element.accountNo, element.branchCode, element.closureReason, element.customerId, element.fileName, element.frozen];
                rows.push(temp);
              });
              var doc = new (jspdf__WEBPACK_IMPORTED_MODULE_1___default())(); //doc.autoTable(col, rows);

              doc.autoTable({
                head: col,
                body: rows
              });
              doc.save('BULK_Account_Closure.pdf');
            });
          }
        }, {
          key: "modo",
          value: function modo(event) {
            console.log(event);

            if (event == 'PDF') {
              this.convert();
            }

            if (event == 'Excel') {
              this.exportAsXLSX();
            }
          } // ---------------------Process The Bulk-----------------------------

        }, {
          key: "onProcessingTheBulkAccount",
          value: function onProcessingTheBulkAccount() {
            var _this16 = this;

            console.log("this is bulk process", this.fetchUserSingle.fileName);
            this.excelService.processTheBulkRecord(this.fetchUserSingle.fileName, this.fetchUserSingle.accountType, this.fetchUserSingle.inputBy).subscribe(function (processResp) {
              console.log(processResp);
              var msg = processResp.errorDesc;

              if (processResp.var1 == true) {
                _this16.process = true;

                _this16.ref.markForCheck();

                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                  text: 'Record Processed SuccessFully',
                  icon: "success"
                });
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                  text: msg,
                  icon: "warning"
                }); // this.process=true;
              }
            });
          }
        }, {
          key: "onCancelingTheRecord",
          value: function onCancelingTheRecord() {
            var _this17 = this;

            console.log("this is deleteing the record", this.fetchUserSingle.fileName);
            this.excelService.onDeletingTheReocrd(this.fetchUserSingle.fileName, this.fetchUserSingle.accountTypeBulk, this.fetchUserSingle.makerId).subscribe(function (deleteResp) {
              console.log(deleteResp);

              if (deleteResp == true) {
                _this17["delete"] = true;
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                  text: 'Record is Deleted',
                  icon: "success"
                });

                _this17.router.navigate(['/initiate-account-closure']);
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                  text: 'Failed To Delete The Record',
                  icon: "warning"
                });
              }
            });
          }
        }, {
          key: "onProcessingTheSingleAccount",
          value: function onProcessingTheSingleAccount() {
            var _this18 = this;

            console.log("this is single process", this.fetchUserSingle.accountNumber);
            this.excelService.processTheSingleRecord(this.fetchUserSingle.accountNumber, this.fetchUserSingle.inputBy).subscribe(function (processResp) {
              console.log(processResp);
              var msg = processResp.errorDesc;

              if (processResp.var1 == true) {
                _this18.process = true;

                _this18.ref.markForCheck();

                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                  text: 'Record Processed SuccessFully',
                  icon: "success"
                });
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                  text: msg,
                  icon: "warning"
                }); // this.process=true;
              }
            });
          }
        }, {
          key: "onCancelingTheSingleRecord",
          value: function onCancelingTheSingleRecord() {
            var _this19 = this;

            console.log("deleting Single", this.fetchUserSingle.accountNumber);
            console.log("deleting Single", this.fetchUserSingle.accountType);
            console.log("deleting Single", this.fetchUserSingle.closureType);
            console.log("deleting Single", this.fetchUserSingle.inputBy);
            this.excelService.onDeletingSingle(this.fetchUserSingle.accountNumber, this.fetchUserSingle.accountType, this.fetchUserSingle.closureType, this.fetchUserSingle.inputBy).subscribe(function (singledeleteResp) {
              console.log(singledeleteResp);
              _this19.deleteSingle = true;

              if (singledeleteResp == true) {
                // this.iziToast.show({
                //   message: `Record Deleted successFully`,
                //   image: "assets/images/user.png",
                //   icon: 'ico ico-success',
                //   theme:"dark",
                //   layout: 2,
                //   // imageWidth:50,
                //   balloon: false,
                //   position: "topRight",
                //   progressBarColor: "green",
                //   pauseOnHover: true,
                // });
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                  text: 'Record is Deleted',
                  icon: "success"
                });

                _this19.router.navigate(['/initiate-account-closure']);
              } else {
                // this.iziToast.show({
                //   message: `Failed To Delete The Record`,
                //   image: "assets/images/user.png",
                //   icon: 'ico ico-warning',
                //   theme:"dark",
                //   layout: 2,
                //   // imageWidth:50,
                //   balloon: false,
                //   position: "topRight",
                //   progressBarColor: "green",
                //   pauseOnHover: true,
                // });
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
                  text: 'Failed To Delete The Record',
                  icon: "warning"
                });
              }
            });
          } // ================geneerate Excel For Single==================

        }, {
          key: "downloadReportForSingle",
          value: function downloadReportForSingle() {
            console.log("download for single");
            this.singleExcel.push(this.fetchUserSingle);
            console.log(this.fetchUserSingle);
            console.log(this.singleExcel);
            this.excelService.exportAsExcelForSingleAccount(this.singleExcel, 'SINGLE_ACCOUNT_CLOSURE');
            console.log("this is single", this.singleExcel);
          } // ================geneerate PDF For Single==================

        }, {
          key: "convertReportForSingle",
          value: function convertReportForSingle() {
            var _this20 = this;

            console.log(this.fetchUserSingle);
            var doc = new (jspdf__WEBPACK_IMPORTED_MODULE_1___default())();
            var col = [["Conolidated Report"]];
            var rows = [];
            var itemNew = this.fetchUserSingle;
            Object.keys(itemNew);
            Object.values(itemNew);
            Object.entries(itemNew);
            console.log(Object.entries(itemNew)); // console.log("obj",obj);

            var objectArray = Object.entries(itemNew);
            var mapped = Object.keys(this.fetchUserSingle).map(function (key) {
              return {
                type: key,
                value: _this20.fetchUserSingle[key]
              };
            });
            console.log(mapped);
            doc.autoTable({
              // head: col,
              body: mapped
            });
            doc.save('Single_Account_Closure.pdf');
          }
        }]);

        return _ViewReportAccClosureComponent;
      }();

      _ViewReportAccClosureComponent.??fac = function ViewReportAccClosureComponent_Factory(t) {
        return new (t || _ViewReportAccClosureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["????directiveInject"](src_app_shared_services_account_closure_service_service__WEBPACK_IMPORTED_MODULE_4__.AccountClosureServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["????directiveInject"](ng2_izitoast__WEBPACK_IMPORTED_MODULE_5__.Ng2IzitoastService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["????directiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_6__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
      };

      _ViewReportAccClosureComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["????defineComponent"]({
        type: _ViewReportAccClosureComponent,
        selectors: [["npr-view-report-acc-closure"]],
        decls: 7,
        vars: 2,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["action", "", 1, "formStyle"], ["class", "dbCardStyle cardWidth", 4, "ngIf"], ["class", "dbCardStyle", 4, "ngIf"], [1, "dbCardStyle", "cardWidth"], [1, "col-12"], ["for", "roleName", 1, "formLbl"], ["aria-label", "Default select example", 1, "form-select", 3, "change"], ["value", "Excel"], ["value", "PDF"], [1, "row", "g-3", "pb-3", "justify-content-center", "pt-3"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["routerLink", "/initiate-account-closure", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], ["datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], ["datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 3, "dtOptions", "dtTrigger"], ["aria-label", "Default select example", 1, "form-select"], ["value", "1", 3, "click"], ["value", "2", 3, "click"]],
        template: function ViewReportAccClosureComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["????text"](3, "View Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["????template"](5, ViewReportAccClosureComponent_div_5_Template, 19, 2, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["????template"](6, ViewReportAccClosureComponent_div_6_Template, 93, 19, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("ngIf", ctx.fetchUserSingle.closureType != "SINGLE");

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_8__["????property"]("ngIf", ctx.fetchUserSingle.closureType == "SINGLE");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["??NgSelectMultipleOption"], _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, angular_datatables__WEBPACK_IMPORTED_MODULE_7__.DataTableDirective],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXJlcG9ydC1hY2MtY2xvc3VyZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_views_initiate-account-closure_initiate-account-closure_module_ts-es5.js.map