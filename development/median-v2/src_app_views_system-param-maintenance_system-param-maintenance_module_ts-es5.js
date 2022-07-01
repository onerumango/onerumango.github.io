(function () {
  "use strict";

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_system-param-maintenance_system-param-maintenance_module_ts"], {
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
            return this.http.get("".concat(this.API_URL, "/departBatchMaint/getAllDeparts?pageNo=", 0, "&pageSize=", 5000));
          } //save in edit Department

        }, {
          key: "onsaveTheEditOfDepartment",
          value: function onsaveTheEditOfDepartment(obj) {
            return this.http.put("".concat(this.API_URL, "/departBatchMaint/modify"), obj);
          } //department --->auth

        }, {
          key: "onAuthDepartment",
          value: function onAuthDepartment(obj) {
            return this.http.put("".concat(this.API_URL, "/departBatchMaint/verify"), obj);
          } //department --->close

        }, {
          key: "onCloseOfDepartment",
          value: function onCloseOfDepartment(obj) {
            return this.http.put("".concat(this.API_URL, "/departBatchMaint/close"), obj);
          } //deaprtment --->open

        }, {
          key: "onReopenOfDepartment",
          value: function onReopenOfDepartment(obj) {
            return this.http.put("".concat(this.API_URL, "/departBatchMaint/reopen"), obj);
          } // /dept ---delete

        }, {
          key: "onDeleteOfDepartment",
          value: function onDeleteOfDepartment(id, userID) {
            console.log("id", id);
            console.log("id", userID);
            return this.http["delete"]("".concat(this.API_URL, "/departBatchMaint/delete/").concat(id, "/").concat(userID));
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @rxweb/reactive-form-validators */
      88111);
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


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      31443);
      /* harmony import */


      var src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/maintenance.service */
      11864);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      77382);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function DepartmenrtIdNewComponent_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.departmentForm.controls["toSeries"].errors.greaterThan.message, " ");
        }
      }

      function DepartmenrtIdNewComponent_div_34_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DepartmenrtIdNewComponent_div_34_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r9.onSubmittingofChargeMaintenance("edit");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r1.departmentForm.valid || !ctx_r1.departmentForm.dirty || ctx_r1.submitDisab);
        }
      }

      function DepartmenrtIdNewComponent_div_35_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DepartmenrtIdNewComponent_div_35_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r11.onSubmitEditMaintenance();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.roleCodes.edit.labelDescription);
        }
      }

      function DepartmenrtIdNewComponent_div_36_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DepartmenrtIdNewComponent_div_36_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r13.onAuthorizingTheRecord();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.roleCodes.auth.labelDescription);
        }
      }

      function DepartmenrtIdNewComponent_div_37_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DepartmenrtIdNewComponent_div_37_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r15.onClosingTheRecord();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r4.roleCodes.close.labelDescription);
        }
      }

      function DepartmenrtIdNewComponent_div_38_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DepartmenrtIdNewComponent_div_38_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r17.onReopningTheRecord();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r5.roleCodes.reopen.labelDescription);
        }
      }

      function DepartmenrtIdNewComponent_div_39_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DepartmenrtIdNewComponent_div_39_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r19.onDeletingTheRecord();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r6.roleCodes["delete"].labelDescription);
        }
      }

      function DepartmenrtIdNewComponent_div_40_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DepartmenrtIdNewComponent_div_40_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r21.onSubmittingofChargeMaintenance("submit");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r7.departmentForm.valid || ctx_r7.submitDisab || !ctx_r7.editFlag && ctx_r7.index);
        }
      }

      function DepartmenrtIdNewComponent_div_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Maker");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Maker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](26, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Record Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "img", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Checker");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Checker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](63, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](69, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "First Time Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](81, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, "Auth Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](93, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97, "Modification No");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r8.respData.inputBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](26, 8, ctx_r8.respData.inputTime, "MM/dd/yyyy, h:mm a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r8.respData.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r8.respData.verifiedBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](63, 11, ctx_r8.respData.verifiedTime, "MM/dd/yyyy, h:mm a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r8.respData.verifiedOnce);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r8.respData.verifiedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r8.respData.modNo);
        }
      }

      var _c0 = "/system-param-maintenance/dept-id-maintenance-summary";

      var _c1 = function _c1() {
        return [_c0];
      };

      var _DepartmenrtIdNewComponent = /*#__PURE__*/function () {
        function _DepartmenrtIdNewComponent(toastService, formBuilder, departmentService, router, roleService, cdr) {
          _classCallCheck(this, _DepartmenrtIdNewComponent);

          this.toastService = toastService;
          this.formBuilder = formBuilder;
          this.departmentService = departmentService;
          this.router = router;
          this.roleService = roleService;
          this.cdr = cdr;
          this.submitDisab = false;
          this.editFlag = true;
          this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__.permissionsLabels();
          this.formTouched = true;
          this.showDialog = false;
          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        }

        _createClass(_DepartmenrtIdNewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            console.log("idValue ", localStorage.getItem('idValue'));
            this.idValue = localStorage.getItem('idValue');

            _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormConfig.set({
              "validationMessage": {
                "greaterThan": "Batch No To should not be less than Batch No From."
              }
            });

            setTimeout(function () {
              _this.newRolePermissions();
            }, 2000);
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this.roleCodes = message;
            });
            setTimeout(function () {
              console.log(_this.roleCodes);
            }, 3000);
            this.currentUser = localStorage.getItem("userFromLogin");
            this.buildForm("");

            if (this.idValue !== null) {
              if (this.idValue !== null) {
                this.departmentService.setIndex({
                  index: this.idValue
                });
              }
            }

            this.departmentService.getIndex().subscribe(function (index) {
              console.log(index);

              if (index.index) {
                _this.index = index.index;

                _this.departmentService.gettingDepartmentDataInSummary().subscribe(function (dataresp) {
                  console.log(dataresp);

                  if (dataresp) {
                    _this.getRespBasedOnId(dataresp.result, index.index);
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
          key: "canExit",
          value: function canExit() {
            var _this2 = this;

            var isExit = false;

            if (this.departmentForm.touched && this.formTouched == true) {
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
          key: "buildForm",
          value: function buildForm(item) {
            this.departmentForm = this.formBuilder.group({
              id: [item ? item.id : ""],
              departId: [item ? item.departId : "", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              departName: [item ? item.departName : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
              fromSeries: [item ? item.fromSeries : "", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
              toSeries: [item ? item.toSeries : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_7__.RxwebValidators.greaterThan({
                fieldName: 'fromSeries'
              })]],
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
            var _this3 = this;

            // if(this.departmentForm.value.toSeries < this.departmentForm.value.fromSeries){
            //   Swal.fire({text:'Batch No To should not be less than Batch No From',
            // 'icon':'error'});
            // return
            // }
            if (value === "submit") {
              this.departmentForm.value.inputBy = this.currentUser;
              this.departmentService.onSubmittingDepartment(this.departmentForm.value).subscribe(function (deptMaintenanceResp) {
                console.log(deptMaintenanceResp);
                console.log("Response", deptMaintenanceResp.respMsg);

                if (deptMaintenanceResp.respMsg === "Department Saved Successfully ") {
                  // this.submitDisab = true;
                  _this3.respData = deptMaintenanceResp;
                  _this3.index = _this3.respData.departId;

                  _this3.auditLog();

                  _this3.editFlag = false;
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    text: "Record is Created",
                    'icon': 'success'
                  });
                  _this3.formTouched = !_this3.departmentForm.touched;
                } else {
                  _this3.submitDisab = true;
                  _this3.editFlag = false;
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    text: deptMaintenanceResp.respMsg,
                    'icon': 'error'
                  });
                }
              }, function (error) {
                console.log('error resp :: ', error);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  text: error.error.message,
                  icon: 'error'
                });
              });
            }

            if (value === "edit") {
              this.departmentForm.value.inputBy = this.currentUser;
              this.departmentService.onsaveTheEditOfDepartment(this.departmentForm.value).subscribe(function (deptMaintenanceResp) {
                console.log(deptMaintenanceResp);

                if (deptMaintenanceResp) {
                  if (deptMaintenanceResp.respMsg === "Modified Record Success") {
                    // this.submitDisab = true;
                    _this3.respData = deptMaintenanceResp;

                    _this3.auditLog();

                    _this3.editFlag = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: "Record is Updated",
                      'icon': 'success'
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: deptMaintenanceResp.respMsg
                    });
                  }
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    text: 'Department Updation failed',
                    'icon': 'error'
                  });
                }
              }, function (error) {
                console.log('error resp :: ', error);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  text: error.error.message,
                  icon: 'error'
                });
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
            var _this4 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Authorize record. ' + ' Do you want to proceed?',
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
                _this4.departmentForm.value.inputBy = _this4.currentUser;
                console.log("this is authorzation");

                if (_this4.respData.inputBy === _this4.currentUser) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    text: "Maker cannot authorize the record",
                    icon: 'error'
                  });
                  return;
                }

                _this4.departmentService.onAuthDepartment(_this4.departmentForm.value).subscribe(function (authResp) {
                  console.log(authResp);
                  _this4.respData = authResp;

                  _this4.auditLog();

                  if (_this4.respData) {
                    if (_this4.respData.verifiedBy != null) {
                      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        text: "Record is Authorized",
                        'icon': 'success'
                      } // type: "success"
                      );
                    } else {
                      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        text: "Authorization failed for the record",
                        'icon': 'error'
                      });
                    }
                  }
                });
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
            var _this5 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Close record. ' + ' Do you want to proceed?',
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
                _this5.departmentForm.value.inputBy = _this5.currentUser;
                console.log("this is close");

                _this5.departmentService.onCloseOfDepartment(_this5.departmentForm.value).subscribe(function (closeResp) {
                  console.log(closeResp);
                  _this5.respData = closeResp;

                  if (_this5.respData) {
                    if (_this5.respData.recordStatus == "C") {
                      _this5.auditLog();

                      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        text: "Record is Closed",
                        'icon': 'success'
                      });
                    } else {
                      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        text: "Record closing failed",
                        'icon': 'error'
                      } // type: "success"
                      );
                    }
                  }
                });
              }
            });
          }
        }, {
          key: "onReopningTheRecord",
          value: function onReopningTheRecord() {
            var _this6 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Reopen record. ' + ' Do you want to proceed?',
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
                _this6.departmentForm.value.inputBy = _this6.currentUser;
                console.log("this is reopen");

                _this6.departmentService.onReopenOfDepartment(_this6.departmentForm.value).subscribe(function (reopnResp) {
                  console.log(reopnResp);
                  _this6.respData = reopnResp;

                  if (_this6.respData) {
                    if (_this6.respData.recordStatus == "O") {
                      _this6.auditLog();

                      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        text: "Record is Opened",
                        'icon': 'success'
                      } // type: "success"
                      );
                    } else {
                      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        text: "Record cannot be opened ",
                        'icon': 'error'
                      });
                    }
                  }
                });
              }
            });
          }
        }, {
          key: "onDeletingTheRecord",
          value: function onDeletingTheRecord() {
            var _this7 = this;

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
                _this7.departmentForm.value.inputBy = _this7.currentUser;
                _this7.departmentForm.value.id = _this7.respData.id;
                console.log("this is delete", _this7.departmentForm.value);

                _this7.departmentService.onDeleteOfDepartment(_this7.departmentForm.value.id, _this7.departmentForm.value.userId).subscribe(function (deleteResp) {
                  console.log(deleteResp);
                  _this7.respData = deleteResp;

                  if (_this7.respData.respMsg == "Deleted Successfully") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Record is Deleted',
                      icon: 'success'
                    });

                    _this7.router.navigateByUrl('/system-param-maintenance/dept-id-maintenance-summary');
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Failed to Delete Record!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "numericOnly",
          value: function numericOnly(event) {
            return !isNaN(Number(event.key)) && event.key !== " ";
          }
        }, {
          key: "newRolePermissions",
          value: function newRolePermissions() {
            this.roleService.fetchScreenPermissions('Department ID Maintenance');
          }
        }]);

        return _DepartmenrtIdNewComponent;
      }();

      _DepartmenrtIdNewComponent.ɵfac = function DepartmenrtIdNewComponent_Factory(t) {
        return new (t || _DepartmenrtIdNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__.MaintenanceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_4__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef));
      };

      _DepartmenrtIdNewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _DepartmenrtIdNewComponent,
        selectors: [["npr-departmenrt-id-new"]],
        decls: 45,
        vars: 16,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "dbCardStyle"], [1, "row", "gy-4"], [1, "col-lg-4"], ["for", "", 1, "formLbl"], [1, "colorRed"], ["id", "fname", "formControlName", "departId", "type", "text", "placeholder", "Department ID", "value", "", "required", "", 1, "form-control", 3, "readonly"], ["id", "lname", "type", "text", "formControlName", "departName", "placeholder", "Department Name", "value", "", "required", "", 1, "form-control", 3, "readonly"], ["id", "accNumber", "pattern", "[0-9]*", "maxlength", "3", "formControlName", "fromSeries", "placeholder", "Batch No From", "value", "", "required", "", 1, "form-control", 3, "readonly", "keypress"], ["id", "cName", "pattern", "[0-9]*", "maxlength", "3", "type", "text", "formControlName", "toSeries", "placeholder", "Batch No To", "value", "", "required", "", 1, "form-control", 3, "readonly", "keypress"], ["class", "invalid-feedback", 4, "ngIf"], [1, "col-lg-12"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["class", "dbCardStyle", 4, "ngIf"], [1, "invalid-feedback"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["color", "warn", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], ["src", "assets/images/maker-icon.svg", "alt", "..."], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], ["src", "assets/images/checker-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/auth-status-icon.svg", "alt", "..."]],
        template: function DepartmenrtIdNewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Department Id Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Department ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Department Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Batch No From");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keypress", function DepartmenrtIdNewComponent_Template_input_keypress_24_listener($event) {
              return ctx.numericOnly($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Batch No To ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keypress", function DepartmenrtIdNewComponent_Template_input_keypress_30_listener($event) {
              return ctx.numericOnly($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, DepartmenrtIdNewComponent_div_31_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, DepartmenrtIdNewComponent_div_34_Template, 3, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, DepartmenrtIdNewComponent_div_35_Template, 3, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, DepartmenrtIdNewComponent_div_36_Template, 3, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, DepartmenrtIdNewComponent_div_37_Template, 3, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, DepartmenrtIdNewComponent_div_38_Template, 3, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, DepartmenrtIdNewComponent_div_39_Template, 3, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, DepartmenrtIdNewComponent_div_40_Template, 3, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, DepartmenrtIdNewComponent_div_44_Template, 100, 14, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.departmentForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", !ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", !ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", !ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", !ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.departmentForm.controls["toSeries"].errors);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.respData && ctx.editFlag && ctx.index);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.respData && ctx.respData.recordStatus == "OPEN" && !ctx.editFlag && ctx.roleCodes.edit);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.respData && ctx.respData.verifiedStatus == "UNAUTHORIZED" && !ctx.editFlag && ctx.roleCodes.auth);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.respData && ctx.respData.recordStatus == "OPEN" && ctx.respData.verifiedOnce == "YES" && !ctx.editFlag && ctx.roleCodes.close);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.respData && ctx.respData.recordStatus == "CLOSED" && ctx.respData.verifiedOnce == "YES" && !ctx.editFlag && ctx.roleCodes.reopen);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.respData && ctx.respData.verifiedOnce == "NO" && !ctx.editFlag && ctx.roleCodes["delete"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.index);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](15, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.respData);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxLengthValidator, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
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


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/models/fmosNewRolePermissions */
      35383);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/maintenance.service */
      11864);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      77382);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular-datatables */
      50481);

      var _c0 = function _c0() {
        return ["/system-param-maintenance/dept-id-maintenance-new"];
      };

      function DepartmentIdMaintenanceComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DepartmentIdMaintenanceComponent_div_6_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r3["new"]();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.roleCodes["new"].labelDescription);
        }
      }

      function DepartmentIdMaintenanceComponent_tr_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DepartmentIdMaintenanceComponent_tr_28_Template_a_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);

            var data_r5 = restoredCtx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r6.edit(data_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DepartmentIdMaintenanceComponent_tr_28_Template_a_click_16_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);

            var data_r5 = restoredCtx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r8.edit(data_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r5.departId);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r5.fromSeries);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r5.toSeries);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r5.verifiedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r5.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](14, 6, data_r5.inputTime, "medium"));
        }
      }

      function DepartmentIdMaintenanceComponent_ng_container_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Please wait... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        }
      }

      var _c1 = function _c1() {
        return ["/dashboard"];
      };

      var _DepartmentIdMaintenanceComponent = /*#__PURE__*/function () {
        function _DepartmentIdMaintenanceComponent(apiService, router, roleService) {
          _classCallCheck(this, _DepartmentIdMaintenanceComponent);

          this.apiService = apiService;
          this.router = router;
          this.roleService = roleService;
          this.respArray = [];
          this.dtOptions = {};
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
          this.isLoading = false;
          this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__.permissionsLabels();
          this.statusArr = ['Authorized', 'Unauthorized', 'Open', 'Close'];
        }

        _createClass(_DepartmentIdMaintenanceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 5,
              // columnDefs: [ { type: 'date', 'targets': ['inputTime'] } ],
              // order: [[4, 'desc']],
              processing: true,
              lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]],
              columnDefs: [{
                type: 'date',
                targets: [4]
              }],
              order: [[4, 'desc']]
            };
            this.getChargeMaintainenceSummary();
            this.roleService.fetchScreenPermissions('Department ID Maintenance');
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this8.roleCodes = message;
            });
            console.log(this.roleCodes);
          }
        }, {
          key: "getChargeMaintainenceSummary",
          value: function getChargeMaintainenceSummary() {
            var _this9 = this;

            this.isLoading = true;
            this.apiService.gettingDepartmentDataInSummary().subscribe(function (dataresp) {
              var _iterator = _createForOfIteratorHelper(dataresp.result),
                  _step;

              try {
                var _loop = function _loop() {
                  var item = _step.value;
                  item.verifiedStatus = _this9.statusArr.find(function (i) {
                    return i.startsWith(item.verifiedStatus);
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

              _this9.respArray = dataresp.result;
              _this9.isLoading = false;

              _this9.dtTrigger.next();
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
            localStorage.removeItem('idValue');
            this.apiService.setIndex({
              index: ''
            });
            this.router.navigateByUrl('/system-param-maintenance/dept-id-maintenance-new');
          }
        }, {
          key: "edit",
          value: function edit(data) {
            this.apiService.setIndex({
              index: data.departId
            });
            localStorage.setItem('idValue', data.departId);
            this.router.navigateByUrl('/system-param-maintenance/dept-id-maintenance-new');
          }
        }]);

        return _DepartmentIdMaintenanceComponent;
      }();

      _DepartmentIdMaintenanceComponent.ɵfac = function DepartmentIdMaintenanceComponent_Factory(t) {
        return new (t || _DepartmentIdMaintenanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_maintenance_service__WEBPACK_IMPORTED_MODULE_1__.MaintenanceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_2__.RoleService));
      };

      _DepartmentIdMaintenanceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _DepartmentIdMaintenanceComponent,
        selectors: [["npr-department-id-maintenance"]],
        decls: 30,
        vars: 7,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "routerLink", "click"], [1, "primaryColor", 2, "cursor", "pointer", 3, "click"], [1, "btn", 2, "color", "red", 3, "click"], [1, "fa", "fa-edit"], [1, "btn", 2, "color", "red"], [1, "fa", "fa-trash"], [1, "loading-page-center"], [1, "indicator-progress"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"]],
        template: function DepartmentIdMaintenanceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Department Id Maintenance Summary");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, DepartmentIdMaintenanceComponent_div_6_Template, 3, 3, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "table", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Department Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Batch No From");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Batch No To");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Auth Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Record Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, DepartmentIdMaintenanceComponent_tr_28_Template, 20, 9, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, DepartmentIdMaintenanceComponent_ng_container_29_Template, 5, 0, "ng-container", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.roleCodes["new"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.respArray);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXBhcnRtZW50LWlkLW1haW50ZW5hbmNlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    10070:
    /*!*****************************************************************************************************************************!*\
      !*** ./src/app/views/system-param-maintenance/global-gcc-ac-maintenance/account-class-edit/account-class-edit.component.ts ***!
      \*****************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AccountClassEditComponent": function AccountClassEditComponent() {
          return (
            /* binding */
            _AccountClassEditComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function AccountClassEditComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Allow");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function AccountClassEditComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Disallow");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "isDisabled": a0
        };
      };

      function AccountClassEditComponent_div_38_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AccountClassEditComponent_div_38_Template_a_click_10_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);

            var data_r11 = restoredCtx.$implicit;
            var i_r12 = restoredCtx.index;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r13.deleteglobalACRowData(data_r11.value, i_r12);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r12 = ctx.index;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, !ctx_r2.editFlag));
        }
      }

      function AccountClassEditComponent_div_41_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AccountClassEditComponent_div_41_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r15.addAccountFormGroup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function AccountClassEditComponent_div_44_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AccountClassEditComponent_div_44_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r17.enableEditFlag();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function AccountClassEditComponent_div_45_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AccountClassEditComponent_div_45_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r19.onClickOfAuthACC(ctx_r19.accountMaintenanceEditForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function AccountClassEditComponent_div_46_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AccountClassEditComponent_div_46_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r21.onClickOfCloseACC(ctx_r21.accountMaintenanceEditForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function AccountClassEditComponent_div_47_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AccountClassEditComponent_div_47_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r23.onClickOfReopenACC(ctx_r23.accountMaintenanceEditForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Reopen");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function AccountClassEditComponent_div_48_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AccountClassEditComponent_div_48_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r25.OndeleteofUserACC(ctx_r25.globalaccacsummryData.creatorId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function AccountClassEditComponent_div_49_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AccountClassEditComponent_div_49_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            ctx_r27.onSubmitAccountForm(ctx_r27.accountMaintenanceEditForm.value);
            return ctx_r27.clicked = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function AccountClassEditComponent_div_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Maker");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Maker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "img", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Record Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "img", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Checker");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "img", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Checker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](63, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "First Time Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "img", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Auth Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Modification Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.globalaccacsummryData.creatorId);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](26, 8, ctx_r10.globalaccacsummryData.createdTime, "MM/dd/yyyy, h:mm a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.globalaccacsummryData.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.globalaccacsummryData.approverId);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](63, 11, ctx_r10.globalaccacsummryData.approvedTime, "MM/dd/yyyy, h:mm a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.globalaccacsummryData.approvedEver);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.globalaccacsummryData.approvedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.globalaccacsummryData.modNo);
        }
      }

      var _c1 = "/system-param-maintenance/global-acc-maintenance-summary";

      var _c2 = function _c2() {
        return [_c1];
      };

      var _AccountClassEditComponent = /*#__PURE__*/function () {
        function _AccountClassEditComponent(apiService, router, formBuilder) {
          _classCallCheck(this, _AccountClassEditComponent);

          this.apiService = apiService;
          this.router = router;
          this.formBuilder = formBuilder;
          this.permissionvalue = ['Allow', 'Disallow'];
          this.permissionvalue1 = ['Allow', 'Disallow'];
          this.hideAllow = true;
          this.hideDisAllow = true;
          this.hideAllowAcc = true;
          this.hideDisAllowAcc = true;
          this.clicked = false;
          this.editFlag = false;
          this.formTouched = true;
        }

        _createClass(_AccountClassEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentUser = localStorage.getItem("userFromLogin");
            this.disallowAccClass = localStorage.getItem("DISALLOWACCCLASS");
            this.allowAccClass = localStorage.getItem("ALLOWACCCLASS");
            console.log("hET", this.disallowAccClass, this.allowAccClass);

            if (this.disallowAccClass) {
              if (JSON.parse(this.disallowAccClass)) {
                console.log("Disallow");
                this.hideDisAllowAcc = true;
                this.hideAllowAcc = false;
              }
            } else {
              this.hideDisAllowAcc = false;
              this.hideAllowAcc = true;
            }

            if (this.allowAccClass) {
              if (JSON.parse(this.allowAccClass)) {
                console.log("Allow");
                this.hideAllowAcc = true;
                this.hideDisAllowAcc = false;
              }
            } else {
              this.hideAllowAcc = false;
              this.hideDisAllowAcc = true;
            }

            this.accountMaintenanceEditForm = this.formBuilder.group({
              globalGlCodeId: [""],
              type: ["AC"],
              permission: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
              medGlobalGlCodeDetails: this.formBuilder.array([this.createglobalAccountGroup()]),
              creatorId: [""],
              createdTime: [""],
              approverId: [""],
              approvedTime: [""],
              modNo: [],
              approvedStatus: [""],
              approvedEver: [""],
              recordStatus: [""] // activeTab : ["", ],

            });
            this.getGlobalAccSummary();
          }
        }, {
          key: "createglobalAccountGroup",
          value: function createglobalAccountGroup() {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
              'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
              'glCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
              'glDesc': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
              'globalGlCodeId': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('')
            });
          }
        }, {
          key: "addAccountFormGroup",
          value: function addAccountFormGroup() {
            var medGlobalGlCodeDetails = this.accountMaintenanceEditForm.get('medGlobalGlCodeDetails');
            medGlobalGlCodeDetails.push(this.createglobalAccountGroup());
          }
        }, {
          key: "getGlobalAccSummary",
          value: function getGlobalAccSummary() {
            var _this10 = this;

            this.apiService.getGlobalAccSummary().subscribe(function (summaryData) {
              _this10.globalaccacsummryData = summaryData;
              var retrievedObject = localStorage.getItem('globalaccacsummryData');
              _this10.globalaccacsummryData = JSON.parse(retrievedObject);
              _this10.userID = _this10.globalaccacsummryData.creatorId;

              _this10.auditLogforACC();

              var permission = _this10.globalaccacsummryData.permission;
              var globalGlCodeId = _this10.globalaccacsummryData.globalGlCodeId;

              _this10.accountMaintenanceEditForm.controls.permission.setValue(permission);

              _this10.accountMaintenanceEditForm.controls.globalGlCodeId.setValue(globalGlCodeId);
            });
            this.addACCRowdata.removeAt(0);
            this.globalaccacsummryData.medGlobalGlCodeDetails.forEach(function (element) {
              var row = _this10.formBuilder.group({
                id: [element.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
                glCode: [element.glCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
                glDesc: [element.glDesc, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
                globalGlCodeId: [element.globalGlCodeId, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
              });

              _this10.addACCRowdata.push(row);
            });
          }
        }, {
          key: "addACCRowdata",
          get: function get() {
            return this.accountMaintenanceEditForm.get('medGlobalGlCodeDetails');
          }
        }, {
          key: "enableEditFlag",
          value: function enableEditFlag() {
            this.editFlag = true;
          }
        }, {
          key: "auditLogforACC",
          value: function auditLogforACC() {
            if (this.globalaccacsummryData.approvedStatus === 'U') {
              this.globalaccacsummryData.approvedStatus = 'UNAUTHORIZED';
            }

            if (this.globalaccacsummryData.approvedStatus === 'A') {
              this.globalaccacsummryData.approvedStatus = 'AUTHORIZED';
            }

            if (this.globalaccacsummryData.recordStatus === 'O') {
              this.globalaccacsummryData.recordStatus = 'OPEN';
            }

            if (this.globalaccacsummryData.recordStatus === 'C') {
              this.globalaccacsummryData.recordStatus = 'CLOSED';
            }

            if (this.globalaccacsummryData.approvedEver === 'N') {
              this.globalaccacsummryData.approvedEver = 'NO';
            }

            if (this.globalaccacsummryData.approvedEver === 'Y') {
              this.globalaccacsummryData.approvedEver = 'YES';
            }
          }
        }, {
          key: "onClickOfAuthACC",
          value: function onClickOfAuthACC(accFormValues) {
            var _this11 = this;

            if (this.globalaccacsummryData.creatorId === this.currentUser) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: 'Maker Cannot Authorized the Record!',
                icon: 'error'
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
                text: 'You are trying to Authorize the record. ' + ' Do you want to proceed?',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                // confirmButtonText: 'PROCEED.'
                cancelButtonText: 'NO',
                confirmButtonText: 'YES',
                'icon': 'info'
              }).then(function (result) {
                if (result.isConfirmed === true) {
                  _this11.operation = 'auth';
                  accFormValues.creatorId = _this11.globalaccacsummryData.creatorId;
                  accFormValues.createdTime = _this11.globalaccacsummryData.createdTime;
                  accFormValues.approvedEver = _this11.globalaccacsummryData.approvedEver;
                  accFormValues.modNo = _this11.globalaccacsummryData.modNo;
                  accFormValues.approvedStatus = _this11.globalaccacsummryData.approvedStatus;
                  accFormValues.recordStatus = _this11.globalaccacsummryData.recordStatus;
                  accFormValues.approverId = _this11.currentUser;

                  if (accFormValues.approvedStatus === 'UNAUTHORIZED') {
                    accFormValues.approvedStatus = 'U';
                  }

                  if (accFormValues.approvedStatus === 'AUTHORIZED') {
                    accFormValues.approvedStatus = 'A';
                  }

                  if (accFormValues.recordStatus == "OPEN") {
                    accFormValues.recordStatus = 'O';
                  }

                  if (accFormValues.recordStatus == "CLOSE") {
                    accFormValues.recordStatus = 'C';
                  }

                  if (accFormValues.approvedEver === 'NO') {
                    accFormValues.approvedEver = 'N';
                  }

                  if (accFormValues.approvedEver === 'YES') {
                    accFormValues.approvedEver = 'Y';
                  }

                  console.log("accFormValues", accFormValues);

                  _this11.apiService.onClckOfOperationACC(_this11.operation, _this11.currentUser, accFormValues).subscribe(function (authResp) {
                    _this11.globalaccacsummryData = authResp;

                    _this11.auditLogforACC();

                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record is Authorized',
                      icon: 'success'
                    });
                  });
                }
              });
            }
          }
        }, {
          key: "onClickOfCloseACC",
          value: function onClickOfCloseACC(accFormValues) {
            var _this12 = this;

            console.log(accFormValues);
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Close the record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info'
            }).then(function (result) {
              if (result.isConfirmed === true) {
                _this12.operation = 'close';
                accFormValues.creatorId = _this12.currentUser;
                accFormValues.createdTime = _this12.globalaccacsummryData.createdTime;
                accFormValues.approvedEver = _this12.globalaccacsummryData.approvedEver;
                accFormValues.approvedId = '';
                accFormValues.modNo = _this12.globalaccacsummryData.modNo;
                accFormValues.approvedStatus = _this12.globalaccacsummryData.approvedStatus;
                accFormValues.recordStatus = _this12.globalaccacsummryData.recordStatus;

                if (accFormValues.approvedStatus === 'UNAUTHORIZED') {
                  accFormValues.approvedStatus = 'U';
                }

                if (accFormValues.approvedStatus === 'AUTHORIZED') {
                  accFormValues.approvedStatus = 'A';
                }

                if (accFormValues.recordStatus == "OPEN") {
                  accFormValues.recordStatus = 'O';
                }

                if (accFormValues.recordStatus == "CLOSE") {
                  accFormValues.recordStatus = 'C';
                }

                if (accFormValues.approvedEver === 'NO') {
                  accFormValues.approvedEver = 'N';
                }

                if (accFormValues.approvedEver === 'YES') {
                  accFormValues.approvedEver = 'Y';
                }

                _this12.apiService.onClckOfOperationACC(_this12.operation, _this12.currentUser, accFormValues).subscribe(function (closeResp) {
                  console.log(closeResp);
                  _this12.globalaccacsummryData = closeResp;

                  _this12.auditLogforACC();

                  if (_this12.globalaccacsummryData) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record is Closed',
                      icon: 'success'
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Failed to Close the Record!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "onClickOfReopenACC",
          value: function onClickOfReopenACC(accFormValues) {
            var _this13 = this;

            console.log(accFormValues);
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Reopen the record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info'
            }).then(function (result) {
              if (result.isConfirmed === true) {
                _this13.operation = 'open';
                accFormValues.creatorId = _this13.currentUser;
                accFormValues.createdTime = _this13.globalaccacsummryData.createdTime;
                accFormValues.approvedEver = _this13.globalaccacsummryData.approvedEver;
                accFormValues.approvedId = '';
                accFormValues.modNo = _this13.globalaccacsummryData.modNo;
                accFormValues.approvedStatus = _this13.globalaccacsummryData.approvedStatus;
                accFormValues.recordStatus = _this13.globalaccacsummryData.recordStatus;

                if (accFormValues.approvedStatus === 'UNAUTHORIZED') {
                  accFormValues.approvedStatus = 'U';
                }

                if (accFormValues.approvedStatus === 'AUTHORIZED') {
                  accFormValues.approvedStatus = 'A';
                }

                if (accFormValues.recordStatus == "OPEN") {
                  accFormValues.recordStatus = 'O';
                }

                if (accFormValues.recordStatus == "CLOSE") {
                  accFormValues.recordStatus = 'C';
                }

                if (accFormValues.approvedEver === 'NO') {
                  accFormValues.approvedEver = 'N';
                }

                if (accFormValues.approvedEver === 'YES') {
                  accFormValues.approvedEver = 'Y';
                }

                _this13.apiService.onClckOfOperationACC(_this13.operation, _this13.currentUser, accFormValues).subscribe(function (closeResp) {
                  console.log(closeResp);
                  _this13.globalaccacsummryData = closeResp;

                  _this13.auditLogforACC();

                  if (_this13.globalaccacsummryData) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record is Reopened',
                      icon: 'success'
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Failed to Reopen the Record!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "OndeleteofUserACC",
          value: function OndeleteofUserACC(UserId) {
            var _this14 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Delete the record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info'
            }).then(function (result) {
              if (result.isConfirmed === true) {
                var globalGlCodeId = _this14.globalaccacsummryData.globalGlCodeId;

                _this14.apiService.deleteGCCuserdata(globalGlCodeId).subscribe(function (resp) {
                  if (resp == true) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record Is Deleted',
                      icon: 'success'
                    });

                    _this14.router.navigateByUrl('/system-param-maintenance/global-acc-maintenance-summary');
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Failed to Delete User Data!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "deleteglobalACRowData",
          value: function deleteglobalACRowData(data, i) {
            var _this15 = this;

            var medGlobalGlCodeDetails = this.accountMaintenanceEditForm.get('medGlobalGlCodeDetails');

            if (medGlobalGlCodeDetails.at(i).get('glCode').value && medGlobalGlCodeDetails.at(i).get('glDesc').value) {
              // transactionData.removeAt(i);
              console.log("this.medGlobalGlCodeDetails.formValues", data, data.id);
              this.apiService.deleteglobalGCRow(data.id).subscribe(function (resp) {
                _this15.deleteRowResp = resp;

                if (_this15.deleteRowResp == true) {
                  {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Deleted Row Data!',
                      icon: 'success'
                    });
                  }
                  medGlobalGlCodeDetails.removeAt(i); // this.submitFlag = true;
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Failed to Delete Row Data!',
                    icon: 'error'
                  });
                }
              }, function (error) {
                if (_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    text: 'Server Error!',
                    icon: 'error'
                  });
                }
              });
            } else {// transactionData.removeAt(i);
            }
          }
        }, {
          key: "onSubmitAccountForm",
          value: function onSubmitAccountForm(accountMaintenanceEditForm) {
            var _this16 = this;

            accountMaintenanceEditForm.creatorId = this.currentUser;
            accountMaintenanceEditForm.approvedStatus = this.globalaccacsummryData.approvedStatus;
            accountMaintenanceEditForm.approverId = this.globalaccacsummryData.approverId;
            accountMaintenanceEditForm.approvedTime = this.globalaccacsummryData.approvedTime;
            accountMaintenanceEditForm.createdTime = this.globalaccacsummryData.createdTime;
            accountMaintenanceEditForm.recordStatus = this.globalaccacsummryData.recordStatus;
            accountMaintenanceEditForm.approvedEver = this.globalaccacsummryData.approvedEver;
            accountMaintenanceEditForm.modNo = this.globalaccacsummryData.modNo;

            if (accountMaintenanceEditForm.approvedStatus === 'UNAUTHORIZED') {
              accountMaintenanceEditForm.approvedStatus = 'U';
            }

            if (accountMaintenanceEditForm.approvedStatus === 'AUTHORIZED') {
              accountMaintenanceEditForm.approvedStatus = 'A';
            }

            if (accountMaintenanceEditForm.recordStatus == "OPEN") {
              accountMaintenanceEditForm.recordStatus = 'O';
            }

            if (accountMaintenanceEditForm.recordStatus == "CLOSE") {
              accountMaintenanceEditForm.recordStatus = 'C';
            }

            if (accountMaintenanceEditForm.approvedEver === 'NO') {
              accountMaintenanceEditForm.approvedEver = 'N';
            }

            if (accountMaintenanceEditForm.approvedEver === 'YES') {
              accountMaintenanceEditForm.approvedEver = 'Y';
            }

            this.operation = 'update';
            this.apiService.updateACCCodeData(accountMaintenanceEditForm, this.operation, this.currentUser).subscribe(function (response) {
              _this16.saveaccResp = response;
              _this16.globalaccacsummryData = response;
              console.log("this.saveaccResp", _this16.saveaccResp);

              _this16.auditLogforACC();

              if (_this16.globalaccacsummryData) {
                _this16.editFlag = false;
                _this16.clicked = true;
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Record is Updated',
                  icon: 'success'
                });
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Failed to Update Data.',
                  icon: 'error'
                });
              }
            }, function (error) {
              if (_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: 'Server Error!',
                  icon: 'error'
                });
              }
            });
          }
        }]);

        return _AccountClassEditComponent;
      }();

      _AccountClassEditComponent.ɵfac = function AccountClassEditComponent_Factory(t) {
        return new (t || _AccountClassEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder));
      };

      _AccountClassEditComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _AccountClassEditComponent,
        selectors: [["npr-account-class-edit"]],
        decls: 55,
        vars: 14,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "tabStyleCol"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], ["role", "presentation", 1, "nav-item"], ["id", "profile-tab", "data-bs-toggle", "tab", "data-bs-target", "#profile", "type", "button", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link", "disable"], ["id", "home-tab", "data-bs-toggle", "tab", "data-bs-target", "#home", "type", "button", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", "active"], [1, "dbCardStyle"], ["id", "myTabContent", 1, "tab-content"], ["id", "home", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "formStyle", 3, "formGroup"], [1, "titleStyle", "mb-3", "mb-md-4"], [1, "smTitle"], [1, "col-lg-4"], ["for", "roleName", 1, "formLbl"], [1, "row", "g-2"], ["class", "col-lg-6", 4, "ngIf"], [1, "row", "gy-2"], [1, "col-lg-4", "col-sm-6"], [1, "colorRed"], ["formArrayName", "medGlobalGlCodeDetails"], ["class", "row gy-2", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "col-sm"], [1, "row", "g-3"], ["class", "col-auto", 4, "ngIf"], [1, "col-lg-12"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], [1, "col-auto"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["class", "dbCardStyle", 4, "ngIf"], [1, "col-lg-6"], [1, "radio", "radioStyle"], ["id", "radio-3", "formControlName", "permission", "value", "Allow", "type", "radio"], ["for", "radio-3", 1, "radio-label"], ["id", "radio-4", "formControlName", "permission", "type", "radio", "value", "Disallow"], ["for", "radio-4", 1, "radio-label"], [1, "row", "gy-2", 3, "formGroupName"], ["id", "transactionDes", "required", "", "formControlName", "glCode", "type", "text", "placeholder", "Account Class", "value", "", 1, "form-control", 3, "readonly"], ["id", "transactionCode", "formControlName", "glDesc", "placeholder", "Account Class Description", "value", "", "required", "", 1, "form-control", 3, "readonly"], [2, "margin-top", "10px"], [1, "deleteIcon2", 3, "ngClass", "click"], ["src", "assets/images/delete-icon.svg", "alt", "..."], [1, "addIcon", "primarybg", 3, "click"], ["src", "assets/images/plus-icon.svg", "alt", "..."], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["color", "warn", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], ["src", "assets/images/maker-icon.svg", "alt", "..."], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], ["src", "assets/images/checker-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/auth-status-icon.svg", "alt", "..."]],
        template: function AccountClassEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Global Account Restriction");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "General Ledger");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Account Class");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "form", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h2", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Account Class");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Code Permission");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, AccountClassEditComponent_div_23_Template, 5, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, AccountClassEditComponent_div_24_Template, 5, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Account Class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Account Class Description ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, AccountClassEditComponent_div_38_Template, 12, 6, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, AccountClassEditComponent_div_41_Template, 4, 0, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, AccountClassEditComponent_div_44_Template, 3, 0, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, AccountClassEditComponent_div_45_Template, 3, 0, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, AccountClassEditComponent_div_46_Template, 3, 0, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, AccountClassEditComponent_div_47_Template, 3, 0, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, AccountClassEditComponent_div_48_Template, 3, 0, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, AccountClassEditComponent_div_49_Template, 3, 0, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, AccountClassEditComponent_div_54_Template, 100, 14, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.accountMaintenanceEditForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hideAllowAcc);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hideDisAllowAcc);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.accountMaintenanceEditForm.get("medGlobalGlCodeDetails")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.globalaccacsummryData && !ctx.editFlag && ctx.globalaccacsummryData.recordStatus == "OPEN");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.globalaccacsummryData && !ctx.editFlag && ctx.globalaccacsummryData.approvedStatus == "UNAUTHORIZED");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.globalaccacsummryData && ctx.globalaccacsummryData.recordStatus == "OPEN" && ctx.globalaccacsummryData.approvedEver == "YES" && !ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.globalaccacsummryData && ctx.globalaccacsummryData.recordStatus == "CLOSED" && ctx.globalaccacsummryData.approvedEver == "YES" && !ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.globalaccacsummryData && ctx.globalaccacsummryData.approvedEver == "NO" && !ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.globalaccacsummryData && ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](13, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.globalaccacsummryData);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
        styles: [".disable[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  pointer-events: none;\n  opacity: 0.4;\n  text-decoration: none;\n}\n\n.isDisabled[_ngcontent-%COMP%] {\n  color: currentColor;\n  cursor: not-allowed;\n  pointer-events: none;\n  opacity: 0.5;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQtY2xhc3MtZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUVGIiwiZmlsZSI6ImFjY291bnQtY2xhc3MtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNhYmxle1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgb3BhY2l0eTogMC40O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uaXNEaXNhYmxlZCB7XHJcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG59Il19 */"]
      });
      /***/
    },

    /***/
    75567:
    /*!*******************************************************************************************************************************!*\
      !*** ./src/app/views/system-param-maintenance/global-gcc-ac-maintenance/general-ledger-edit/general-ledger-edit.component.ts ***!
      \*******************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GeneralLedgerEditComponent": function GeneralLedgerEditComponent() {
          return (
            /* binding */
            _GeneralLedgerEditComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function GeneralLedgerEditComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Allow");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function GeneralLedgerEditComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Disallow");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "isDisabled": a0
        };
      };

      function GeneralLedgerEditComponent_div_38_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GeneralLedgerEditComponent_div_38_Template_a_click_10_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);

            var data_r11 = restoredCtx.$implicit;
            var i_r12 = restoredCtx.index;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r13.deleteglobalGCRowData(data_r11.value, i_r12);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r12 = ctx.index;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, !ctx_r2.editFlag));
        }
      }

      function GeneralLedgerEditComponent_div_41_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GeneralLedgerEditComponent_div_41_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r15.addGCCFormGroup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function GeneralLedgerEditComponent_div_44_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GeneralLedgerEditComponent_div_44_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r17.enableEditFlag();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function GeneralLedgerEditComponent_div_45_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GeneralLedgerEditComponent_div_45_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r19.onClickOfAuthGCC(ctx_r19.globalGccEditForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function GeneralLedgerEditComponent_div_46_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GeneralLedgerEditComponent_div_46_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r21.onClickOfCloseGCC(ctx_r21.globalGccEditForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function GeneralLedgerEditComponent_div_47_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GeneralLedgerEditComponent_div_47_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r23.onClickOfReopenGCC(ctx_r23.globalGccEditForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Reopen");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function GeneralLedgerEditComponent_div_48_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GeneralLedgerEditComponent_div_48_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r25.OndeleteofUserGCC(ctx_r25.globalgccacsummryData.creatorId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function GeneralLedgerEditComponent_div_49_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GeneralLedgerEditComponent_div_49_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            ctx_r27.onSubmitGCCForm(ctx_r27.globalGccEditForm.value);
            return ctx_r27.clicked = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r9.globalGccEditForm.valid)("disabled", ctx_r9.clicked);
        }
      }

      function GeneralLedgerEditComponent_div_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Maker");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Maker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "img", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Record Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "img", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Checker");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "img", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Checker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](63, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "First Time Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "img", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Auth Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Modification Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.globalgccacsummryData.creatorId);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](26, 8, ctx_r10.globalgccacsummryData.createdTime, "MM/dd/yyyy, h:mm a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.globalgccacsummryData.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.globalgccacsummryData.approverId);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](63, 11, ctx_r10.globalgccacsummryData.approvedTime, "MM/dd/yyyy, h:mm a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.globalgccacsummryData.approvedEver);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.globalgccacsummryData.approvedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.globalgccacsummryData.modNo);
        }
      }

      var _c1 = "/system-param-maintenance/global-acc-maintenance-summary";

      var _c2 = function _c2() {
        return [_c1];
      };

      var _GeneralLedgerEditComponent = /*#__PURE__*/function () {
        function _GeneralLedgerEditComponent(apiService, router, formBuilder) {
          _classCallCheck(this, _GeneralLedgerEditComponent);

          this.apiService = apiService;
          this.router = router;
          this.formBuilder = formBuilder;
          this.permissionvalue = ['Allow', 'Disallow'];
          this.permissionvalue1 = ['Allow', 'Disallow'];
          this.hideAllow = true;
          this.hideDisAllow = true;
          this.hideAllowAcc = true;
          this.hideDisAllowAcc = true;
          this.clicked = false;
          this.editFlag = false;
          this.formTouched = true;
        }

        _createClass(_GeneralLedgerEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentUser = localStorage.getItem("userFromLogin");
            this.disallow = localStorage.getItem("DISALLOWPERMISSIONS");
            this.allow = localStorage.getItem("ALLOWPERMISSIONS"); // console.log("hET",this.disallow,this.allow);

            if (this.disallow) {
              if (JSON.parse(this.disallow)) {
                this.hideDisAllow = true;
                this.hideAllow = false;
              }
            }

            if (this.allow) {
              if (JSON.parse(this.allow)) {
                this.hideAllow = true;
                this.hideDisAllow = false;
              }
            }

            this.globalGccEditForm = this.formBuilder.group({
              globalGlCodeId: [""],
              type: ["GL"],
              permission: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
              medGlobalGlCodeDetails: this.formBuilder.array([this.createglobalGCCGroup()]),
              creatorId: [""],
              createdTime: [""],
              approverId: [""],
              approvedTime: [""],
              modNo: [],
              approvedStatus: [""],
              approvedEver: [""],
              recordStatus: [""] // activeTab : ["", ],

            });
            this.getGlobalGccSummary();
          }
        }, {
          key: "createglobalGCCGroup",
          value: function createglobalGCCGroup() {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
              'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
              'glCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
              'glDesc': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
              'globalGLCodeId': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('')
            });
          }
        }, {
          key: "addGCCFormGroup",
          value: function addGCCFormGroup() {
            var medGlobalGlCodeDetails = this.globalGccEditForm.get('medGlobalGlCodeDetails');
            medGlobalGlCodeDetails.push(this.createglobalGCCGroup());
          }
        }, {
          key: "getGlobalGccSummary",
          value: function getGlobalGccSummary() {
            var _this17 = this;

            this.apiService.getGlobalGccSummary().subscribe(function (summaryData) {
              _this17.globalgccacsummryData = summaryData;
              var retrievedObject = localStorage.getItem('globalgccacsummryData');
              _this17.globalgccacsummryData = JSON.parse(retrievedObject);

              _this17.auditLogforGCC();

              var permission = _this17.globalgccacsummryData.permission;
              var globalGlCodeId = _this17.globalgccacsummryData.globalGlCodeId;

              _this17.globalGccEditForm.controls.permission.setValue(permission);

              _this17.globalGccEditForm.controls.globalGlCodeId.setValue(globalGlCodeId);
            });

            if (this.globalgccacsummryData) {
              this.addGCCRowdata.removeAt(0);
            }

            this.globalgccacsummryData.medGlobalGlCodeDetails.forEach(function (element) {
              var row = _this17.formBuilder.group({
                id: [element.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
                glCode: [element.glCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
                glDesc: [element.glDesc, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
                globalGlCodeId: [element.globalGlCodeId, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
              });

              _this17.addGCCRowdata.push(row);
            });
          }
        }, {
          key: "auditLogforGCC",
          value: function auditLogforGCC() {
            if (this.globalgccacsummryData.approvedStatus === 'U') {
              this.globalgccacsummryData.approvedStatus = 'UNAUTHORIZED';
            }

            if (this.globalgccacsummryData.approvedStatus === 'A') {
              this.globalgccacsummryData.approvedStatus = 'AUTHORIZED';
            }

            if (this.globalgccacsummryData.recordStatus === 'O') {
              this.globalgccacsummryData.recordStatus = 'OPEN';
            }

            if (this.globalgccacsummryData.recordStatus === 'C') {
              this.globalgccacsummryData.recordStatus = 'CLOSE';
            }

            if (this.globalgccacsummryData.approvedEver === 'N') {
              this.globalgccacsummryData.approvedEver = 'NO';
            }

            if (this.globalgccacsummryData.approvedEver === 'Y') {
              this.globalgccacsummryData.approvedEver = 'YES';
            }
          }
        }, {
          key: "addGCCRowdata",
          get: function get() {
            return this.globalGccEditForm.get('medGlobalGlCodeDetails');
          }
        }, {
          key: "enableEditFlag",
          value: function enableEditFlag() {
            this.editFlag = true;
            this.clicked = false;
          }
        }, {
          key: "onClickOfAuthGCC",
          value: function onClickOfAuthGCC(gccFormValues) {
            var _this18 = this;

            if (this.globalgccacsummryData.creatorId === this.currentUser) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: 'Maker Cannot Authorized the Record!',
                icon: 'error'
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
                text: 'You are trying to Authorize the record. ' + ' Do you want to proceed?',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                // confirmButtonText: 'PROCEED.'
                cancelButtonText: 'NO',
                confirmButtonText: 'YES',
                'icon': 'info'
              }).then(function (result) {
                if (result.isConfirmed === true) {
                  _this18.operation = 'auth';
                  gccFormValues.creatorId = _this18.globalgccacsummryData.creatorId;
                  gccFormValues.createdTime = _this18.globalgccacsummryData.createdTime;
                  gccFormValues.approvedEver = _this18.globalgccacsummryData.approvedEver; // gccFormValues.approvedId = this.globalgccacsummryData.approvedId;

                  gccFormValues.modNo = _this18.globalgccacsummryData.modNo;
                  gccFormValues.approvedStatus = _this18.globalgccacsummryData.approvedStatus;
                  gccFormValues.recordStatus = _this18.globalgccacsummryData.recordStatus;
                  gccFormValues.approverId = _this18.currentUser;

                  if (gccFormValues.approvedStatus === 'UNAUTHORIZED') {
                    gccFormValues.approvedStatus = 'U';
                  }

                  if (gccFormValues.approvedStatus === 'AUTHORIZED') {
                    gccFormValues.approvedStatus = 'A';
                  }

                  if (gccFormValues.recordStatus == "OPEN") {
                    gccFormValues.recordStatus = 'O';
                  }

                  if (gccFormValues.recordStatus == "CLOSE") {
                    gccFormValues.recordStatus = 'C';
                  }

                  if (gccFormValues.approvedEver === 'NO') {
                    gccFormValues.approvedEver = 'N';
                  }

                  if (gccFormValues.approvedEver === 'YES') {
                    gccFormValues.approvedEver = 'Y';
                  }

                  _this18.apiService.onClckOfOperationGlobal(_this18.operation, _this18.currentUser, gccFormValues).subscribe(function (authResp) {
                    console.log(authResp);
                    _this18.globalgccacsummryData = authResp;

                    _this18.auditLogforGCC();

                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record is Authorized',
                      icon: 'success'
                    });
                  });
                }
              });
            }
          }
        }, {
          key: "onClickOfCloseGCC",
          value: function onClickOfCloseGCC(gccFormValues) {
            var _this19 = this;

            console.log("accFormValues", gccFormValues);
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Close the record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info'
            }).then(function (result) {
              if (result.isConfirmed === true) {
                _this19.operation = 'close';
                gccFormValues.creatorId = _this19.currentUser;
                gccFormValues.createdTime = _this19.globalgccacsummryData.createdTime;
                gccFormValues.approvedEver = _this19.globalgccacsummryData.approvedEver;
                gccFormValues.modNo = _this19.globalgccacsummryData.modNo;
                gccFormValues.approvedStatus = _this19.globalgccacsummryData.approvedStatus;
                gccFormValues.recordStatus = _this19.globalgccacsummryData.recordStatus;

                if (gccFormValues.approvedStatus === 'UNAUTHORIZED') {
                  gccFormValues.approvedStatus = 'U';
                }

                if (gccFormValues.approvedStatus === 'AUTHORIZED') {
                  gccFormValues.approvedStatus = 'A';
                }

                if (gccFormValues.recordStatus == "OPEN") {
                  gccFormValues.recordStatus = 'O';
                }

                if (gccFormValues.recordStatus == "CLOSE") {
                  gccFormValues.recordStatus = 'C';
                }

                if (gccFormValues.approvedEver === 'NO') {
                  gccFormValues.approvedEver = 'N';
                }

                if (gccFormValues.approvedEver === 'YES') {
                  gccFormValues.approvedEver = 'Y';
                }

                _this19.apiService.onClckOfOperationGlobal(_this19.operation, _this19.currentUser, gccFormValues).subscribe(function (closeResp) {
                  _this19.globalgccacsummryData = closeResp;

                  _this19.auditLogforGCC();

                  if (_this19.globalgccacsummryData) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record is Closed',
                      icon: 'success'
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Failed to Close the Record!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "onClickOfReopenGCC",
          value: function onClickOfReopenGCC(gccFormValues) {
            var _this20 = this;

            console.log("accFormValues", gccFormValues);
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Reopen the record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info'
            }).then(function (result) {
              if (result.isConfirmed === true) {
                _this20.operation = 'open';
                gccFormValues.creatorId = _this20.currentUser;
                gccFormValues.createdTime = _this20.globalgccacsummryData.createdTime;
                gccFormValues.approvedEver = _this20.globalgccacsummryData.approvedEver;
                gccFormValues.modNo = _this20.globalgccacsummryData.modNo;
                gccFormValues.approvedStatus = _this20.globalgccacsummryData.approvedStatus;
                gccFormValues.recordStatus = _this20.globalgccacsummryData.recordStatus;

                if (gccFormValues.approvedStatus === 'UNAUTHORIZED') {
                  gccFormValues.approvedStatus = 'U';
                }

                if (gccFormValues.approvedStatus === 'AUTHORIZED') {
                  gccFormValues.approvedStatus = 'A';
                }

                if (gccFormValues.recordStatus == "OPEN") {
                  gccFormValues.recordStatus = 'O';
                }

                if (gccFormValues.recordStatus == "CLOSE") {
                  gccFormValues.recordStatus = 'C';
                }

                if (gccFormValues.approvedEver === 'NO') {
                  gccFormValues.approvedEver = 'N';
                }

                if (gccFormValues.approvedEver === 'YES') {
                  gccFormValues.approvedEver = 'Y';
                }

                _this20.apiService.onClckOfOperationGlobal(_this20.operation, _this20.currentUser, gccFormValues).subscribe(function (reopenResp) {
                  _this20.globalgccacsummryData = reopenResp;

                  _this20.auditLogforGCC();

                  if (_this20.globalgccacsummryData) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record is Reopened',
                      icon: 'success'
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Failed to Reopen the Record!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "OndeleteofUserGCC",
          value: function OndeleteofUserGCC(UserId) {
            var _this21 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Delete the record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info'
            }).then(function (result) {
              if (result.isConfirmed === true) {
                var globalGlCodeId = _this21.globalgccacsummryData.globalGlCodeId;

                _this21.apiService.deleteGCCuserdata(globalGlCodeId).subscribe(function (resp) {
                  if (resp == true) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record Is Deleted',
                      icon: 'success'
                    });

                    _this21.router.navigateByUrl('/system-param-maintenance/global-acc-maintenance-summary');
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Failed to Delete User Data!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "deleteglobalGCRowData",
          value: function deleteglobalGCRowData(data, i) {
            var _this22 = this;

            var medGlobalGlCodeDetails = this.globalGccEditForm.get('medGlobalGlCodeDetails');

            if (medGlobalGlCodeDetails.at(i).get('glCode').value && medGlobalGlCodeDetails.at(i).get('glDesc').value) {
              // transactionData.removeAt(i);
              this.apiService.deleteglobalGCRow(data.id).subscribe(function (resp) {
                _this22.deleteRowResp = resp;

                if (_this22.deleteRowResp == true) {
                  {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Deleted Row Data!',
                      icon: 'success'
                    });
                  }
                  medGlobalGlCodeDetails.removeAt(i); // this.submitFlag = true;
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Failed to Delete Row Data!',
                    icon: 'error'
                  });
                }
              }, function (error) {
                if (_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    text: 'Server Error!',
                    icon: 'error'
                  });
                }
              });
            } else {// transactionData.removeAt(i);
            }
          }
        }, {
          key: "onSubmitGCCForm",
          value: function onSubmitGCCForm(globalGccEditForm) {
            var _this23 = this;

            globalGccEditForm.creatorId = this.currentUser;
            globalGccEditForm.approvedStatus = this.globalgccacsummryData.approvedStatus;
            globalGccEditForm.approverId = this.globalgccacsummryData.approverId;
            globalGccEditForm.approvedTime = this.globalgccacsummryData.approvedTime;
            globalGccEditForm.createdTime = this.globalgccacsummryData.createdTime;
            globalGccEditForm.recordStatus = this.globalgccacsummryData.recordStatus;
            globalGccEditForm.approvedEver = this.globalgccacsummryData.approvedEver;
            globalGccEditForm.modNo = this.globalgccacsummryData.modNo;

            if (globalGccEditForm.approvedStatus === 'UNAUTHORIZED') {
              globalGccEditForm.approvedStatus = 'U';
            }

            if (globalGccEditForm.approvedStatus === 'AUTHORIZED') {
              globalGccEditForm.approvedStatus = 'A';
            }

            if (globalGccEditForm.recordStatus == "OPEN") {
              globalGccEditForm.recordStatus = 'O';
            }

            if (globalGccEditForm.recordStatus == "CLOSE") {
              globalGccEditForm.recordStatus = 'C';
            }

            if (globalGccEditForm.approvedEver === 'NO') {
              globalGccEditForm.approvedEver = 'N';
            }

            if (globalGccEditForm.approvedEver === 'YES') {
              globalGccEditForm.approvedEver = 'Y';
            }

            this.operation = 'update';
            this.apiService.updateGlCodeData(globalGccEditForm, this.operation, this.currentUser).subscribe(function (response) {
              _this23.globalgccacsummryData = response;

              _this23.auditLogforGCC();

              if (_this23.globalgccacsummryData) {
                _this23.editFlag = false;
                _this23.clicked = true; // this.submit1=false;
                // this.toastService.successMessage('Data Saved Successfully!.', '');

                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Record is Updated',
                  icon: 'success'
                });
                _this23.submitEdit = true;
                _this23.formTouched = !_this23.globalGccEditForm.touched; // this.globalGccForm.reset();
              } else {
                // this.toastService.errorMessage('Failed to Save Data!', '');
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Failed to Update Data.',
                  icon: 'error'
                });
              }
            }, function (error) {
              if (_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: 'Server Error!',
                  icon: 'error'
                });
              }
            });
          }
        }]);

        return _GeneralLedgerEditComponent;
      }();

      _GeneralLedgerEditComponent.ɵfac = function GeneralLedgerEditComponent_Factory(t) {
        return new (t || _GeneralLedgerEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder));
      };

      _GeneralLedgerEditComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _GeneralLedgerEditComponent,
        selectors: [["npr-general-ledger-edit"]],
        decls: 55,
        vars: 14,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "tabStyleCol"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], ["role", "presentation", 1, "nav-item"], ["id", "home-tab", "data-bs-toggle", "tab", "data-bs-target", "#home", "type", "button", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "profile-tab", "data-bs-toggle", "tab", "data-bs-target", "#profile", "type", "button", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link", "disable"], [1, "dbCardStyle"], ["id", "myTabContent", 1, "tab-content"], ["id", "home", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "formStyle", 3, "formGroup"], [1, "titleStyle", "mb-3", "mb-md-4"], [1, "smTitle"], [1, "col-lg-4"], ["for", "roleName", 1, "formLbl"], [1, "row", "g-2"], ["class", "col-lg-6", 4, "ngIf"], [1, "row", "gy-2"], [1, "col-lg-4", "col-sm-6"], [1, "colorRed"], ["formArrayName", "medGlobalGlCodeDetails"], ["class", "row gy-2", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "col-sm"], [1, "row", "g-3"], ["class", "col-auto", 4, "ngIf"], [1, "col-lg-12"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], [1, "col-auto"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["class", "dbCardStyle", 4, "ngIf"], [1, "col-lg-6"], [1, "radio", "radioStyle"], ["id", "radio-1", "formControlName", "permission", "value", "Allow", "type", "radio"], ["for", "radio-1", 1, "radio-label"], ["id", "radio-2", "formControlName", "permission", "type", "radio", "value", "Disallow"], ["for", "radio-2", 1, "radio-label"], [1, "row", "gy-2", 3, "formGroupName"], ["id", "transactionDes", "required", "", "formControlName", "glCode", "type", "text", "placeholder", "GL Code", "value", "", 1, "form-control", 3, "readonly"], ["id", "transactionCode", "formControlName", "glDesc", "placeholder", "GL Code Description", "value", "", "required", "", 1, "form-control", 3, "readonly"], [2, "margin-top", "10px"], [1, "deleteIcon2", 3, "ngClass", "click"], ["src", "assets/images/delete-icon.svg", "alt", "..."], [1, "addIcon", "primarybg", 3, "click"], ["src", "assets/images/plus-icon.svg", "alt", "..."], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["color", "warn", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], ["src", "assets/images/maker-icon.svg", "alt", "..."], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], ["src", "assets/images/checker-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/auth-status-icon.svg", "alt", "..."]],
        template: function GeneralLedgerEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Global Account Restriction");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "General Ledger");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Account Class");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "form", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h2", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "General Ledger");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Code Permission");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, GeneralLedgerEditComponent_div_23_Template, 5, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, GeneralLedgerEditComponent_div_24_Template, 5, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "GL Code ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "GL Code Description ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, GeneralLedgerEditComponent_div_38_Template, 12, 6, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, GeneralLedgerEditComponent_div_41_Template, 4, 0, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, GeneralLedgerEditComponent_div_44_Template, 3, 0, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, GeneralLedgerEditComponent_div_45_Template, 3, 0, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, GeneralLedgerEditComponent_div_46_Template, 3, 0, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, GeneralLedgerEditComponent_div_47_Template, 3, 0, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, GeneralLedgerEditComponent_div_48_Template, 3, 0, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, GeneralLedgerEditComponent_div_49_Template, 3, 2, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, GeneralLedgerEditComponent_div_54_Template, 100, 14, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.globalGccEditForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hideAllow);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hideDisAllow);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.globalGccEditForm.get("medGlobalGlCodeDetails")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.globalgccacsummryData && !ctx.editFlag && ctx.globalgccacsummryData.recordStatus == "OPEN");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.globalgccacsummryData && !ctx.editFlag && ctx.globalgccacsummryData.approvedStatus == "UNAUTHORIZED");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.globalgccacsummryData && ctx.globalgccacsummryData.recordStatus == "OPEN" && ctx.globalgccacsummryData.approvedEver == "YES" && !ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.globalgccacsummryData && ctx.globalgccacsummryData.recordStatus == "CLOSE" && ctx.globalgccacsummryData.approvedEver == "YES" && !ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.globalgccacsummryData && !ctx.editFlag && ctx.globalgccacsummryData.approvedEver == "NO");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.globalgccacsummryData && ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](13, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.globalgccacsummryData);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
        styles: [".disable[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  pointer-events: none;\n  opacity: 0.4;\n  text-decoration: none;\n}\n\n.isDisabled[_ngcontent-%COMP%] {\n  color: currentColor;\n  cursor: not-allowed;\n  pointer-events: none;\n  opacity: 0.5;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYWwtbGVkZ2VyLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFFSiIsImZpbGUiOiJnZW5lcmFsLWxlZGdlci1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc2FibGV7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIC5pc0Rpc2FibGVkIHtcclxuICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgXHJcbiAgfSJdfQ== */"]
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! angular-datatables */
      50481);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      79441);
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      31443);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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

      var _c0 = "/system-param-maintenance/global-acc-maintenance-new";

      var _c1 = function _c1() {
        return [_c0];
      };

      function GlobalGccAcMaintenanceComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](2, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.roleCodes["new"].labelDescription);
        }
      }

      function GlobalGccAcMaintenanceComponent_tr_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function GlobalGccAcMaintenanceComponent_tr_29_Template_a_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);

            var udata_r5 = restoredCtx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r6.sendingGccDataforEdit(udata_r5);
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

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function GlobalGccAcMaintenanceComponent_tr_29_Template_a_click_14_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);

            var udata_r5 = restoredCtx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r8.sendingGccDataforEdit(udata_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var udata_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](udata_r5.permission);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](udata_r5.creatorId);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](udata_r5.approvedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](udata_r5.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](12, 5, udata_r5.createdTime, "medium"));
        }
      }

      function GlobalGccAcMaintenanceComponent_ng_container_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Please wait... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }
      }

      function GlobalGccAcMaintenanceComponent_tr_53_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function GlobalGccAcMaintenanceComponent_tr_53_Template_a_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);

            var accdata_r9 = restoredCtx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r10.sendingaccDataforEdit(accdata_r9);
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

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function GlobalGccAcMaintenanceComponent_tr_53_Template_a_click_14_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);

            var accdata_r9 = restoredCtx.$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r12.sendingaccDataforEdit(accdata_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var accdata_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](accdata_r9.permission);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](accdata_r9.creatorId);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](accdata_r9.approvedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](accdata_r9.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](12, 5, accdata_r9.createdTime, "medium"));
        }
      }

      function GlobalGccAcMaintenanceComponent_ng_container_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Please wait... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }
      }

      var _c2 = function _c2() {
        return ["/dashboard"];
      };

      var _GlobalGccAcMaintenanceComponent = /*#__PURE__*/function () {
        // statusArr: String[] = ['Authorized', 'Unauthorized', 'Open', 'Close'];
        function _GlobalGccAcMaintenanceComponent(apiService, toastService, roleService, router) {
          _classCallCheck(this, _GlobalGccAcMaintenanceComponent);

          this.apiService = apiService;
          this.toastService = toastService;
          this.roleService = roleService;
          this.router = router;
          this.dtOptions = [];
          this.dtTrigger1 = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
          this.dtTrigger2 = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
          this.isLoading = false;
          this.isLoading2 = false;
          this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__.permissionsLabels();
          this.isDisabled = false;
        }

        _createClass(_GlobalGccAcMaintenanceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this24 = this;

            console.log('Maintenence');
            this.dtOptions[0] = {
              pagingType: 'full_numbers',
              pageLength: 5,
              columnDefs: [{
                type: 'date',
                targets: [4]
              }],
              order: [[4, 'desc']],
              processing: true,
              lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]],
              retrieve: true // columnDefs: [ { type: 'date', 'targets': [5] } ],
              // order: [[5, 'desc']],

            };
            this.dtOptions[1] = {
              pagingType: 'full_numbers',
              pageLength: 5,
              columnDefs: [{
                type: 'date',
                targets: [4]
              }],
              order: [[4, 'desc']],
              processing: true,
              lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]],
              retrieve: true // columnDefs: [ { type: 'date', 'targets': [5] } ],
              // order: [[5, 'desc']],

            };
            this.getUFDData();
            this.getAccdata();
            this.roleService.fetchScreenPermissions('Global Account Restriction');
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this24.roleCodes = message;
            });
            console.log(this.roleCodes);
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
            var _this25 = this;

            this.isLoading = true;
            var gltype = "GL";
            this.apiService.getGlData(gltype).subscribe(function (udfdata) {
              // for (let item of udfdata) {
              //   item.approvedStatus = this.statusArr.find((i) =>
              //     i.startsWith(item.approvedStatus)
              //   );
              // }
              _this25.udfData = udfdata;
              console.log('this.udfData', _this25.udfData);
              _this25.permissions = _this25.udfData.permission;

              if (_this25.udfData.length == '0') {
                localStorage.removeItem('ALLOWPERMISSIONS');
                localStorage.removeItem('DISALLOWPERMISSIONS');
              }

              _this25.allowpermissions = _this25.udfData.filter(function (allow) {
                return allow.permission === 'Allow';
              });
              console.log(_this25.allowpermissions);
              _this25.disallowpermissions = _this25.udfData.filter(function (disallow) {
                return disallow.permission === 'Disallow';
              });
              console.log(_this25.disallowpermissions);

              if (_this25.allowpermissions.length != '0') {
                // console.log("AllowPermission",this.allowpermissions);
                localStorage.setItem('ALLOWPERMISSIONS', JSON.stringify(_this25.allowpermissions));
              }

              if (_this25.disallowpermissions.length != '0') {
                // console.log(  this.disallowpermissions,"disallowpermissions",);
                localStorage.setItem('DISALLOWPERMISSIONS', JSON.stringify(_this25.disallowpermissions));
              }

              if (_this25.allowpermissions.length >= 0) {
                var button = document.getElementById("newButton");
                button.style.display = "none";
              }

              _this25.isLoading = false;

              _this25.dtTrigger1.next();
            });
          }
        }, {
          key: "getAccdata",
          value: function getAccdata() {
            var _this26 = this;

            this.isLoading2 = true;
            var actype = "AC";
            this.apiService.getAccData(actype).subscribe(function (accdata) {
              // for (let item of accdata) {
              //   item.approvedStatus = this.statusArr.find((i) =>
              //     i.startsWith(item.approvedStatus)
              //   );
              // }
              _this26.accClassData = accdata;

              if (_this26.accClassData.length == '0') {
                localStorage.removeItem('ALLOWACCCLASS');
                localStorage.removeItem('DISALLOWACCCLASS');
              }

              _this26.allowpermissions = _this26.accClassData.filter(function (allow) {
                return allow.permission === 'Allow';
              }); // console.log(this.allowpermissions);

              _this26.disallowpermissions = _this26.accClassData.filter(function (disallow) {
                return disallow.permission === 'Disallow';
              }); // console.log(this.disallowpermissions);

              if (_this26.allowpermissions.length != '0') {
                // console.log("AllowPermission");
                localStorage.setItem('ALLOWACCCLASS', JSON.stringify(_this26.allowpermissions));
              }

              if (_this26.disallowpermissions.length != '0') {
                // console.log(  this.disallowpermissions,"disallowpermissions");
                localStorage.setItem('DISALLOWACCCLASS', JSON.stringify(_this26.disallowpermissions));
              }

              if (_this26.allowpermissions.length >= 0) {
                var button = document.getElementById("newButton");
                button.style.display = "none";
                console.log("Enable");
              }

              _this26.isLoading2 = false;

              _this26.dtTrigger2.next(); // console.log('ACC Data',this.accClassData);

            });
          }
        }, {
          key: "OndeleteofUserGCC",
          value: function OndeleteofUserGCC(UserId, globalGlCodeId) {
            var _this27 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Delete the record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              icon: 'info'
            }).then(function (result) {
              if (result.isConfirmed === true) {
                _this27.apiService.deleteGCCuserdata(globalGlCodeId).subscribe(function (resp) {
                  if (resp == true) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                      title: 'Record Is Deleted',
                      icon: 'success'
                    });

                    _this27.router.navigateByUrl('/system-param-maintenance/global-acc-maintenance-summary');
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                      title: 'Failed to Delete User Data!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "OndeleteofUserACC",
          value: function OndeleteofUserACC(UserId, globalAccClassId) {
            var _this28 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Delete the record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              icon: 'info'
            }).then(function (result) {
              if (result.isConfirmed === true) {
                _this28.apiService.deleteACCuserdata(globalAccClassId).subscribe(function (resp) {
                  if (resp == true) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                      title: 'Record Is Deleted',
                      icon: 'success'
                    });

                    _this28.getUFDData();

                    _this28.router.navigateByUrl('/system-param-maintenance/global-acc-maintenance-summary');
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                      title: 'Failed to Delete User Data!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "sendingGccDataforEdit",
          value: function sendingGccDataforEdit(data) {
            console.log(data, 'Data');
            localStorage.setItem('globalgccacsummryData', JSON.stringify(data));
            this.apiService.setGlobalGccSummary({
              approvedEver: data.approvedEver,
              approvedStatus: data.approvedStatus,
              approvedTime: data.approvedTime,
              approverId: data.approverId,
              createdTime: data.createdTime,
              creatorId: data.creatorId,
              globalGlCodeId: data.globalGlCodeId,
              medGlobalGlCodeDetails: data.medGlobalGlCodeDetails,
              permission: data.permission,
              recordStatus: data.recordStatus,
              modNo: data.modNo,
              activeTab: 'home'
            });
            this.router.navigate(['/system-param-maintenance/global-gl-edit']);
          }
        }, {
          key: "sendingaccDataforEdit",
          value: function sendingaccDataforEdit(data) {
            localStorage.setItem('globalaccacsummryData', JSON.stringify(data));
            this.apiService.setGlobalAccSummary({
              approvedEver: data.approvedEver,
              approvedStatus: data.approvedStatus,
              approvedTime: data.approvedTime,
              approverId: data.approverId,
              createdTime: data.createdTime,
              creatorId: data.creatorId,
              globalGlCodeId: data.globalGlCodeId,
              medGlobalGlCodeDetails: data.medGlobalGlCodeDetails,
              permission: data.permission,
              recordStatus: data.recordStatus,
              modNo: data.modNo,
              activeTab: 'profile'
            });
            this.router.navigate(['/system-param-maintenance/global-ac-edit']);
          }
        }]);

        return _GlobalGccAcMaintenanceComponent;
      }();

      _GlobalGccAcMaintenanceComponent.ɵfac = function GlobalGccAcMaintenanceComponent_Factory(t) {
        return new (t || _GlobalGccAcMaintenanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_5__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
      };

      _GlobalGccAcMaintenanceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _GlobalGccAcMaintenanceComponent,
        selectors: [["npr-global-gcc-ac-maintenance"]],
        viewQuery: function GlobalGccAcMaintenanceComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.dtElements = _t);
          }
        },
        decls: 57,
        vars: 11,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], ["class", "col-auto ", "id", "newButton", 4, "ngIf"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [1, "dbCardStyle", "dbCardStyle2", "p-0"], [1, "titleCol"], ["datatable", "", "id", "dbTable1", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["datatable", "", "id", "dbTable2", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], ["id", "newButton", 1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "routerLink"], [1, "primaryColor", 2, "cursor", "pointer", 3, "click"], [1, "btn", 2, "color", "red", 3, "click"], [1, "fa", "fa-edit"], [1, "btn", 2, "color", "red"], [1, "fa", "fa-trash"], [1, "loading-page-center"], [1, "indicator-progress"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"]],
        template: function GlobalGccAcMaintenanceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Global Account Restriction");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, GlobalGccAcMaintenanceComponent_div_5_Template, 3, 3, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "General Ledger ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Permission");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Created By");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Auth Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Record Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, GlobalGccAcMaintenanceComponent_tr_29_Template, 18, 8, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, GlobalGccAcMaintenanceComponent_ng_container_30_Template, 5, 0, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Account Class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "table", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Permission");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Created By");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Auth Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Record Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](53, GlobalGccAcMaintenanceComponent_tr_53_Template, 18, 8, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](54, GlobalGccAcMaintenanceComponent_ng_container_54_Template, 5, 0, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](55, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](56, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.roleCodes["new"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](10, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dtOptions", ctx.dtOptions[0])("dtTrigger", ctx.dtTrigger1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.udfData);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dtOptions", ctx.dtOptions[1])("dtTrigger", ctx.dtTrigger2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.accClassData);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading2);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function GlobalGccAcNewComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Allow");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function GlobalGccAcNewComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Disallow");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "isDisabled": a0
        };
      };

      function GlobalGccAcNewComponent_div_38_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GlobalGccAcNewComponent_div_38_Template_a_click_10_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25);

            var i_r23 = restoredCtx.index;

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r24.removeGCCData(i_r23);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r23 = ctx.index;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c0, ctx_r2.editFlag));
        }
      }

      function GlobalGccAcNewComponent_div_47_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GlobalGccAcNewComponent_div_47_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r26.enableEditFlag();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function GlobalGccAcNewComponent_div_48_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GlobalGccAcNewComponent_div_48_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r28.onClickOfAuthGCC(ctx_r28.globalGccForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function GlobalGccAcNewComponent_div_49_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GlobalGccAcNewComponent_div_49_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r30.onClickOfCloseGCC(ctx_r30.globalGccForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function GlobalGccAcNewComponent_div_50_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GlobalGccAcNewComponent_div_50_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r32.onClickOfReopenGCC(ctx_r32.globalGccForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Reopen");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function GlobalGccAcNewComponent_div_51_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GlobalGccAcNewComponent_div_51_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r35);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r34.OndeleteofUserGCC(ctx_r34.auditlogDataforGeneralLedger.creatorId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function GlobalGccAcNewComponent_div_52_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GlobalGccAcNewComponent_div_52_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            ctx_r36.onSubmitGCCForm(ctx_r36.globalGccForm.value);
            return ctx_r36.clicked = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r8.globalGccForm.valid || !ctx_r8.submitBtn);
        }
      }

      function GlobalGccAcNewComponent_div_53_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GlobalGccAcNewComponent_div_53_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            ctx_r38.onupdateGCCForm(ctx_r38.globalGccForm.value);
            return ctx_r38.clicked = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r9.submitDisable);
        }
      }

      function GlobalGccAcNewComponent_div_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 59);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "img", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 59);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "img", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 59);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "img", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 59);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Checker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](63, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "img", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "First Time Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "img", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Auth Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](93, "img", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "Modification Number");

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
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r10.auditlogDataforGeneralLedger.creatorId);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 8, ctx_r10.auditlogDataforGeneralLedger.createdTime));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r10.auditlogDataforGeneralLedger.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r10.auditlogDataforGeneralLedger.approverId);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](63, 10, ctx_r10.auditlogDataforGeneralLedger.approvedTime));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r10.auditlogDataforGeneralLedger.approvedEver);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r10.auditlogDataforGeneralLedger.approvedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r10.auditlogDataforGeneralLedger.modNo);
        }
      }

      function GlobalGccAcNewComponent_div_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Allow");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function GlobalGccAcNewComponent_div_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "input", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Disallow");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function GlobalGccAcNewComponent_div_83_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GlobalGccAcNewComponent_div_83_Template_a_click_10_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r43);

            var i_r41 = restoredCtx.index;

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r42.removeAccountData(i_r41);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r41 = ctx.index;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", ctx_r13.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", ctx_r13.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c0, ctx_r13.editFlag));
        }
      }

      function GlobalGccAcNewComponent_div_92_Template(rf, ctx) {
        if (rf & 1) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GlobalGccAcNewComponent_div_92_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r45);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r44.enableEditFlag();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function GlobalGccAcNewComponent_div_93_Template(rf, ctx) {
        if (rf & 1) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GlobalGccAcNewComponent_div_93_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r47);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r46.onClickOfAuthACC(ctx_r46.accountMaintenanceForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function GlobalGccAcNewComponent_div_94_Template(rf, ctx) {
        if (rf & 1) {
          var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GlobalGccAcNewComponent_div_94_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r49);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r48.onClickOfCloseACC(ctx_r48.accountMaintenanceForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function GlobalGccAcNewComponent_div_95_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GlobalGccAcNewComponent_div_95_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r51);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r50.onClickOfReopenACC(ctx_r50.accountMaintenanceForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Reopen");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function GlobalGccAcNewComponent_div_96_Template(rf, ctx) {
        if (rf & 1) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GlobalGccAcNewComponent_div_96_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r53);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r52.OndeleteofUserACC(ctx_r52.auditlogDataforAccountClass.creatorId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function GlobalGccAcNewComponent_div_97_Template(rf, ctx) {
        if (rf & 1) {
          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GlobalGccAcNewComponent_div_97_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r55);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            ctx_r54.onSubmitAccountForm(ctx_r54.accountMaintenanceForm.value);
            return ctx_r54.clicked = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r19.accountMaintenanceForm.valid || !ctx_r19.submitBtn);
        }
      }

      function GlobalGccAcNewComponent_div_98_Template(rf, ctx) {
        if (rf & 1) {
          var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GlobalGccAcNewComponent_div_98_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r57);

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            ctx_r56.onupdateAccountForm(ctx_r56.accountMaintenanceForm.value);
            return ctx_r56.clicked = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r20.submitDisable);
        }
      }

      function GlobalGccAcNewComponent_div_102_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 59);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "img", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 59);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "img", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 59);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "img", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 59);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Checker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](63, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "img", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "First Time Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "img", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Auth Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](93, "img", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "Modification Number");

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
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r21.auditlogDataforAccountClass.creatorId);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 8, ctx_r21.auditlogDataforAccountClass.createdTime));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r21.auditlogDataforAccountClass.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r21.auditlogDataforAccountClass.approverId);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](63, 10, ctx_r21.auditlogDataforAccountClass.approvedTime));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r21.auditlogDataforAccountClass.approvedEver);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r21.auditlogDataforAccountClass.approvedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r21.auditlogDataforAccountClass.modNo);
        }
      }

      var _c1 = "/system-param-maintenance/global-acc-maintenance-summary";

      var _c2 = function _c2() {
        return [_c1];
      };

      var _GlobalGccAcNewComponent = /*#__PURE__*/function () {
        function _GlobalGccAcNewComponent(formBuilder, apiService, toastService, router, cdr) {
          _classCallCheck(this, _GlobalGccAcNewComponent);

          this.formBuilder = formBuilder;
          this.apiService = apiService;
          this.toastService = toastService;
          this.router = router;
          this.cdr = cdr;
          this.permissionvalue = ['Allow', 'Disallow'];
          this.permissionvalue1 = ['Allow', 'Disallow'];
          this.formTouched = true;
          this.gccformValues = [{
            trnCode: '',
            trnDesc: '',
            permission: ''
          }];
          this.accformValues = [{
            trnCode: '',
            trnDesc: '',
            permission: ''
          }];
          this.editFlag = false;
          this.editAccFlag = false;
          this.submitAccBtn = false;
          this.submit1 = true;
          this.submit2 = true;
          this.hideAllow = true;
          this.hideDisAllow = true;
          this.hideAllowAcc = true;
          this.hideDisAllowAcc = true;
          this.clicked = false;
          this.saveEditFlag = false;
          this.showSubmit = false;
          this.submitBtn = true;
        }

        _createClass(_GlobalGccAcNewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentUser = localStorage.getItem("userFromLogin");
            this.disallow = localStorage.getItem("DISALLOWPERMISSIONS");
            this.allow = localStorage.getItem("ALLOWPERMISSIONS");
            console.log("hET", this.disallow, this.allow);
            this.disallowAccClass = localStorage.getItem("DISALLOWACCCLASS");
            this.allowAccClass = localStorage.getItem("ALLOWACCCLASS");
            console.log("hET", this.disallowAccClass, this.allowAccClass);

            if (this.disallow) {
              if (JSON.parse(this.disallow)) {
                console.log("Disallow");
                this.hideDisAllow = true;
                this.hideAllow = false;
              }
            }

            if (this.allow) {
              if (JSON.parse(this.allow)) {
                console.log("Allow");
                this.hideAllow = true;
                this.hideDisAllow = false;
              }
            }

            if (this.disallowAccClass) {
              if (JSON.parse(this.disallowAccClass)) {
                console.log("Disallow");
                this.hideDisAllowAcc = true;
                this.hideAllowAcc = false;
              }
            }

            if (this.allowAccClass) {
              if (JSON.parse(this.allowAccClass)) {
                console.log("Allow");
                this.hideAllowAcc = true;
                this.hideDisAllowAcc = false;
              }
            } // this.loginUser = "JILU";


            this.globalGccForm = this.formBuilder.group({
              globalGlCodeId: [""],
              type: ["GL"],
              permission: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              medGlobalGlCodeDetails: this.formBuilder.array([this.createglobalGCCGroup()]),
              creatorId: [""],
              createdTime: [""],
              approverId: [""],
              approvedTime: [""],
              modNo: [],
              approvedStatus: [""],
              approvedEver: [""],
              recordStatus: [""]
            });
            this.accountMaintenanceForm = this.formBuilder.group({
              globalGlCodeId: [""],
              type: ["AC"],
              permission: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              medGlobalGlCodeDetails: this.formBuilder.array([this.createglobalAccountGroup()]),
              creatorId: [""],
              createdTime: [""],
              approverId: [""],
              approvedTime: [""],
              modNo: [],
              approvedStatus: [""],
              approvedEver: [""],
              recordStatus: [""]
            });
            this.globalGccForm.get('permission').patchValue('Allow');
            this.accountMaintenanceForm.get('permission').patchValue('Allow'); // this.getUFDData();
            // this.getAccdata();
          }
        }, {
          key: "createglobalGCCGroup",
          value: function createglobalGCCGroup() {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
              'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
              'glCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
              'glDesc': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
              'globalGLCodeId': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('')
            });
          }
        }, {
          key: "createglobalAccountGroup",
          value: function createglobalAccountGroup() {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
              'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
              'glCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
              'glDesc': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
              'globalGLCodeId': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('')
            });
          }
        }, {
          key: "getUFDData",
          value: function getUFDData() {
            var _this29 = this;

            var gltype = "GL";
            this.apiService.getGlData(gltype).subscribe(function (udfdata) {
              _this29.udfFata = udfdata;
              console.log('GL Data', _this29.udfFata);
              _this29.udfFata = udfdata;

              if (_this29.gccformValues.length != 0) {
                _this29.permission = _this29.gccformValues[0].permission;

                _this29.permissionGLData(_this29.permission);
              } else {
                _this29.permissionALL();
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
          key: "canExit",
          value: function canExit() {
            var _this30 = this;

            var isExit = false;

            if (this.globalGccForm.touched && this.formTouched == true) {
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

                  _this30.cdr.markForCheck();

                  return isExit;
                } else {
                  isExit = false;

                  _this30.cdr.markForCheck();

                  return isExit;
                }
              });
            } else {
              isExit = true;
              return new Promise(function (resolve, reject) {
                if (isExit === true) {
                  isExit = true;

                  _this30.cdr.markForCheck();

                  resolve(true);
                }
              });
            }
          }
        }, {
          key: "getAccdata",
          value: function getAccdata() {
            var _this31 = this;

            var actype = "AC";
            this.apiService.getAccData(actype).subscribe(function (accdata) {
              _this31.accClassData = accdata;
              console.log('GCC Data', _this31.accClassData);

              if (_this31.accformValues.length != 0) {
                _this31.permission = _this31.accformValues[0].permission;

                _this31.permissionAccData(_this31.permission);
              } else {
                _this31.permissionALL();
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
            var medGlobalGlCodeDetails = this.globalGccForm.get('medGlobalGlCodeDetails');

            if (medGlobalGlCodeDetails.length > 1) {
              medGlobalGlCodeDetails.removeAt(i);
            } else {
              medGlobalGlCodeDetails.reset();
            }
          }
        }, {
          key: "removeAccountData",
          value: function removeAccountData(i) {
            var medGlobalGlCodeDetails = this.accountMaintenanceForm.get('medGlobalGlCodeDetails');

            if (medGlobalGlCodeDetails.length > 1) {
              medGlobalGlCodeDetails.removeAt(i);
            } else {
              medGlobalGlCodeDetails.reset();
            }
          }
        }, {
          key: "addGCCFormGroup",
          value: function addGCCFormGroup() {
            console.log("Hr;ppp");
            var medGlobalGlCodeDetails = this.globalGccForm.get('medGlobalGlCodeDetails');
            medGlobalGlCodeDetails.push(this.createglobalGCCGroup());
          }
        }, {
          key: "addAccountFormGroup",
          value: function addAccountFormGroup() {
            var medGlobalGlCodeDetails = this.accountMaintenanceForm.get('medGlobalGlCodeDetails');
            medGlobalGlCodeDetails.push(this.createglobalAccountGroup());
          }
        }, {
          key: "enableEditFlag",
          value: function enableEditFlag() {
            this.editFlag = false;
            this.saveEditFlag = true;
            this.showSubmit = true;
            this.submit = false;
            this.submitDisable = false;
          }
        }, {
          key: "onSubmitGCCForm",
          value: function onSubmitGCCForm(globalGccForm) {
            var _this32 = this;

            globalGccForm.creatorId = this.currentUser;
            console.log("GCC Form Submit", globalGccForm);
            this.gccformValues = globalGccForm.medGlobalGlCodeDetails;
            globalGccForm.medGlobalGlCodeDetails.forEach(function (element, index) {
              _this32.trnCod = globalGccForm.medGlobalGlCodeDetails[index].trnCode;
              _this32.trnDescp = globalGccForm.medGlobalGlCodeDetails[index].trnDesc; // this.gccformValues[index].permission = globalGccForm.permission;
            });
            this.apiService.saveGlCodeData(globalGccForm, this.currentUser).subscribe(function (response) {
              _this32.savegccResp = response;
              _this32.auditlogDataforGeneralLedger = response;
              var permission = _this32.auditlogDataforGeneralLedger.permission;
              var globalGlCodeId = _this32.auditlogDataforGeneralLedger.globalGlCodeId;

              _this32.globalGccForm.controls.permission.setValue(permission);

              _this32.globalGccForm.controls.globalGlCodeId.setValue(globalGlCodeId);

              _this32.auditLogforGL();

              if (_this32.auditlogDataforGeneralLedger) {
                _this32.editFlag = true;
                _this32.showSubmit = false;
                _this32.submitBtn = false;
                _this32.submit = true;
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Record is Created',
                  icon: 'success'
                });
                _this32.formTouched = !_this32.globalGccForm.touched; // this.globalGccForm.reset();
              } else {
                // this.toastService.errorMessage('Failed to Save Data!', '');
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Failed to Save Data.',
                  icon: 'error'
                });
              }
            }, function (error) {
              console.log(error.status);

              if (error.status == 400) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Record already Exist!',
                  icon: 'warning'
                });
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: 'Server Error!',
                  icon: 'error'
                });
              }
            });
          }
        }, {
          key: "onupdateGCCForm",
          value: function onupdateGCCForm(globalGccForm) {
            var _this33 = this;

            globalGccForm.creatorId = this.currentUser;
            globalGccForm.creatorId = this.auditlogDataforGeneralLedger.creatorId;
            globalGccForm.createdTime = this.auditlogDataforGeneralLedger.createdTime;
            globalGccForm.approvedEver = this.auditlogDataforGeneralLedger.approvedEver;
            globalGccForm.approvedId = this.auditlogDataforGeneralLedger.approvedId;
            globalGccForm.modNo = this.auditlogDataforGeneralLedger.modNo;
            globalGccForm.approvedStatus = this.auditlogDataforGeneralLedger.approvedStatus;
            globalGccForm.recordStatus = this.auditlogDataforGeneralLedger.recordStatus;

            if (globalGccForm.approvedStatus === 'UNAUTHORIZED') {
              globalGccForm.approvedStatus = 'U';
            }

            if (globalGccForm.approvedStatus === 'AUTHORIZED') {
              globalGccForm.approvedStatus = 'A';
            }

            if (globalGccForm.recordStatus == "OPEN") {
              globalGccForm.recordStatus = 'O';
            }

            if (globalGccForm.recordStatus == "CLOSE") {
              globalGccForm.recordStatus = 'C';
            }

            if (globalGccForm.approvedEver === 'NO') {
              globalGccForm.approvedEver = 'N';
            }

            if (globalGccForm.approvedEver === 'YES') {
              globalGccForm.approvedEver = 'Y';
            } // for(let i=0;i<globalGccForm.medGlobalGlCodeDetails.length;i++) {
            //  globalGccForm.medGlobalGlCodeDetails[i].id = this.auditlogDataforGeneralLedger.medGlobalGlCodeDetails[i].id
            // }


            this.operation = 'update';
            this.apiService.updateGlCodeData(globalGccForm, this.operation, this.currentUser).subscribe(function (response) {
              _this33.auditlogDataforGeneralLedger = response;

              if (_this33.auditlogDataforGeneralLedger) {
                _this33.auditLogforGL();

                _this33.editFlag = true;
                _this33.showSubmit = false;
                _this33.submitBtn = false;
                _this33.submit = true;
                _this33.submitDisable = true; // this.toastService.successMessage('Data Saved Successfully!.', '');

                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Record is Updated',
                  icon: 'success'
                });
                _this33.formTouched = !_this33.globalGccForm.touched; // this.globalGccForm.reset();
              } else {
                // this.toastService.errorMessage('Failed to Save Data!', '');
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
        }, {
          key: "auditLogforGL",
          value: function auditLogforGL() {
            console.log(this.auditlogDataforGeneralLedger);

            if (this.auditlogDataforGeneralLedger.approvedStatus == 'U') {
              this.auditlogDataforGeneralLedger.approvedStatus = 'UNAUTHORIZED';
            }

            if (this.auditlogDataforGeneralLedger.approvedStatus == 'A') {
              this.auditlogDataforGeneralLedger.approvedStatus = 'AUTHORIZED';
            }

            if (this.auditlogDataforGeneralLedger.recordStatus == 'O') {
              this.auditlogDataforGeneralLedger.recordStatus = 'OPEN';
            }

            if (this.auditlogDataforGeneralLedger.recordStatus == 'C') {
              this.auditlogDataforGeneralLedger.recordStatus = 'CLOSED';
            }

            if (this.auditlogDataforGeneralLedger.approvedEver == 'N') {
              this.auditlogDataforGeneralLedger.approvedEver = 'NO';
            }

            if (this.auditlogDataforGeneralLedger.approvedEver == 'Y') {
              this.auditlogDataforGeneralLedger.approvedEver = 'YES';
            }
          }
        }, {
          key: "onClickOfAuthGCC",
          value: function onClickOfAuthGCC(gccFormValues) {
            var _this34 = this;

            if (this.auditlogDataforGeneralLedger.creatorId === this.currentUser) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: 'Maker Cannot Authorized the Record!',
                icon: 'error'
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
                text: 'You are trying to Authorize the record. ' + ' Do you want to proceed?',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                // confirmButtonText: 'PROCEED.'
                cancelButtonText: 'NO',
                confirmButtonText: 'YES',
                'icon': 'info'
              }).then(function (result) {
                if (result.isConfirmed === true) {
                  _this34.operation = 'auth';
                  gccFormValues.creatorId = _this34.auditlogDataforGeneralLedger.creatorId;
                  gccFormValues.createdTime = _this34.auditlogDataforGeneralLedger.createdTime;
                  gccFormValues.approvedEver = _this34.auditlogDataforGeneralLedger.approvedEver; // gccFormValues.approvedId = this.auditlogDataforGeneralLedger.approvedId;

                  gccFormValues.modNo = _this34.auditlogDataforGeneralLedger.modNo;
                  gccFormValues.approvedStatus = _this34.auditlogDataforGeneralLedger.approvedStatus;
                  gccFormValues.recordStatus = _this34.auditlogDataforGeneralLedger.recordStatus;
                  gccFormValues.approverId = _this34.currentUser;

                  if (gccFormValues.approvedStatus === 'UNAUTHORIZED') {
                    gccFormValues.approvedStatus = 'U';
                  }

                  if (gccFormValues.approvedStatus === 'AUTHORIZED') {
                    gccFormValues.approvedStatus = 'A';
                  }

                  if (gccFormValues.recordStatus == "OPEN") {
                    gccFormValues.recordStatus = 'O';
                  }

                  if (gccFormValues.recordStatus == "CLOSE") {
                    gccFormValues.recordStatus = 'C';
                  }

                  if (gccFormValues.approvedEver === 'NO') {
                    gccFormValues.approvedEver = 'N';
                  }

                  if (gccFormValues.approvedEver === 'YES') {
                    gccFormValues.approvedEver = 'Y';
                  }

                  console.log(gccFormValues);

                  _this34.apiService.onClckOfOperationGlobal(_this34.operation, _this34.currentUser, gccFormValues).subscribe(function (authResp) {
                    console.log(authResp);
                    _this34.auditlogDataforGeneralLedger = authResp;

                    _this34.auditLogforGL();

                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record is Authorized',
                      icon: 'success'
                    });
                  });
                }
              });
            }
          }
        }, {
          key: "onClickOfCloseGCC",
          value: function onClickOfCloseGCC(gccFormValues) {
            var _this35 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Close the record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info'
            }).then(function (result) {
              if (result.isConfirmed === true) {
                _this35.operation = 'close';
                gccFormValues.creatorId = _this35.auditlogDataforGeneralLedger.creatorId;

                _this35.apiService.onClckOfOperationGlobal(_this35.operation, _this35.currentUser, gccFormValues).subscribe(function (closeResp) {
                  console.log(closeResp);
                  _this35.auditlogDataforGeneralLedger = closeResp;

                  _this35.auditLogforGL();

                  if (_this35.auditlogDataforGeneralLedger) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record is Closed',
                      icon: 'success'
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Failed to Close the Record!',
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
            });
          }
        }, {
          key: "onClickOfReopenGCC",
          value: function onClickOfReopenGCC(gccFormValues) {
            var _this36 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Reopen the record. ' + ' Do you want to proceed?',
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
                _this36.operation = 'open';
                gccFormValues.creatorId = _this36.auditlogDataforGeneralLedger.creatorId;

                _this36.apiService.onClckOfOperationGlobal(_this36.operation, _this36.currentUser, gccFormValues).subscribe(function (reopenResp) {
                  console.log(reopenResp);
                  _this36.auditlogDataforGeneralLedger = reopenResp;

                  _this36.auditLogforGL();

                  if (_this36.auditlogDataforGeneralLedger) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record is Reopened',
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
            });
          }
        }, {
          key: "OndeleteofUserGCC",
          value: function OndeleteofUserGCC(UserId) {
            var _this37 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Delete the record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info'
            }).then(function (result) {
              if (result.isConfirmed === true) {
                var globalGlCodeId = _this37.auditlogDataforGeneralLedger.globalGlCodeId;

                _this37.apiService.deleteGCCuserdata(globalGlCodeId).subscribe(function (resp) {
                  if (resp == true) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record Is Deleted',
                      icon: 'success'
                    });

                    _this37.router.navigateByUrl('/system-param-maintenance/global-acc-maintenance-summary');
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
            });
          }
        }, {
          key: "onSubmitAccountForm",
          value: function onSubmitAccountForm(accountMaintenanceForm) {
            var _this38 = this;

            accountMaintenanceForm.creatorId = this.currentUser;
            this.apiService.saveAccountCodeData(accountMaintenanceForm, this.currentUser).subscribe(function (response) {
              _this38.saveaccResp = response;
              _this38.auditlogDataforAccountClass = response;
              _this38.editFlag = true;
              _this38.showSubmit = false;
              _this38.submitBtn = false;
              _this38.submit = true;

              _this38.auditLogforAC();

              var permission = _this38.auditlogDataforAccountClass.permission;
              var globalGlCodeId = _this38.auditlogDataforAccountClass.globalGlCodeId;

              _this38.accountMaintenanceForm.controls.permission.setValue(permission);

              _this38.accountMaintenanceForm.controls.globalGlCodeId.setValue(globalGlCodeId);

              if (_this38.auditlogDataforAccountClass) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Record is created',
                  icon: 'success'
                }); // this.accountMaintenanceForm.reset();

                _this38.formTouched = !_this38.accountMaintenanceForm.touched;
              } else {
                // this.toastService.errorMessage('Failed to Save Data!', '');
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Failed to Save Data.',
                  icon: 'error'
                });
              }
            }, function (error) {
              console.log(error.status);

              if (error.status == 400) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Record already Exist!',
                  icon: 'warning'
                });
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: 'Server Error!',
                  icon: 'error'
                });
              }
            });
          }
        }, {
          key: "onupdateAccountForm",
          value: function onupdateAccountForm(accountMaintenanceEditForm) {
            var _this39 = this;

            accountMaintenanceEditForm.creatorId = this.currentUser;
            accountMaintenanceEditForm.creatorId = this.auditlogDataforAccountClass.creatorId;
            accountMaintenanceEditForm.createdTime = this.auditlogDataforAccountClass.createdTime;
            accountMaintenanceEditForm.approvedEver = this.auditlogDataforAccountClass.approvedEver;
            accountMaintenanceEditForm.approvedId = this.auditlogDataforAccountClass.approvedId;
            accountMaintenanceEditForm.modNo = this.auditlogDataforAccountClass.modNo;
            accountMaintenanceEditForm.approvedStatus = this.auditlogDataforAccountClass.approvedStatus;
            accountMaintenanceEditForm.recordStatus = this.auditlogDataforAccountClass.recordStatus;

            if (accountMaintenanceEditForm.approvedStatus === 'UNAUTHORIZED') {
              accountMaintenanceEditForm.approvedStatus = 'U';
            }

            if (accountMaintenanceEditForm.approvedStatus === 'AUTHORIZED') {
              accountMaintenanceEditForm.approvedStatus = 'A';
            }

            if (accountMaintenanceEditForm.recordStatus == "OPEN") {
              accountMaintenanceEditForm.recordStatus = 'O';
            }

            if (accountMaintenanceEditForm.recordStatus == "CLOSE") {
              accountMaintenanceEditForm.recordStatus = 'C';
            }

            if (accountMaintenanceEditForm.approvedEver === 'NO') {
              accountMaintenanceEditForm.approvedEver = 'N';
            }

            if (accountMaintenanceEditForm.approvedEver === 'YES') {
              accountMaintenanceEditForm.approvedEver = 'Y';
            }

            this.operation = 'update';
            this.apiService.updateACCCodeData(accountMaintenanceEditForm, this.operation, this.currentUser).subscribe(function (response) {
              _this39.auditlogDataforAccountClass = response;

              _this39.auditLogforAC();

              if (_this39.auditlogDataforAccountClass) {
                _this39.editFlag = true;
                _this39.showSubmit = false;
                _this39.submitBtn = false;
                _this39.submit = true;
                _this39.submitDisable = true;
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Record is Updated',
                  icon: 'success'
                });
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
        }, {
          key: "auditLogforAC",
          value: function auditLogforAC() {
            console.log(this.auditlogDataforAccountClass);

            if (this.auditlogDataforAccountClass.approvedStatus == 'U') {
              this.auditlogDataforAccountClass.approvedStatus = 'UNAUTHORIZED';
            }

            if (this.auditlogDataforAccountClass.approvedStatus == 'A') {
              this.auditlogDataforAccountClass.approvedStatus = 'AUTHORIZED';
            }

            if (this.auditlogDataforAccountClass.recordStatus == 'O') {
              this.auditlogDataforAccountClass.recordStatus = 'OPEN';
            }

            if (this.auditlogDataforAccountClass.recordStatus == 'C') {
              this.auditlogDataforAccountClass.recordStatus = 'CLOSED';
            }

            if (this.auditlogDataforAccountClass.approvedEver == 'N') {
              this.auditlogDataforAccountClass.approvedEver = 'NO';
            }

            if (this.auditlogDataforAccountClass.approvedEver == 'Y') {
              this.auditlogDataforAccountClass.approvedEver = 'YES';
            }
          }
        }, {
          key: "onClickOfAuthACC",
          value: function onClickOfAuthACC(accFormValues) {
            var _this40 = this;

            if (this.auditlogDataforAccountClass.creatorId === this.currentUser) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: 'Maker Cannot Authorized the Record!',
                icon: 'error'
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
                text: 'You are trying to Authorize the record. ' + ' Do you want to proceed?',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                // confirmButtonText: 'PROCEED.'
                cancelButtonText: 'NO',
                confirmButtonText: 'YES',
                'icon': 'info'
              }).then(function (result) {
                if (result.isConfirmed === true) {
                  _this40.operation = 'auth';
                  accFormValues.creatorId = _this40.auditlogDataforAccountClass.creatorId;
                  accFormValues.createdTime = _this40.auditlogDataforAccountClass.createdTime;
                  accFormValues.approvedEver = _this40.auditlogDataforAccountClass.approvedEver; // accFormValues.approvedId = this.auditlogDataforAccountClass.approvedId;

                  accFormValues.modNo = _this40.auditlogDataforAccountClass.modNo;
                  accFormValues.approvedStatus = _this40.auditlogDataforAccountClass.approvedStatus;
                  accFormValues.recordStatus = _this40.auditlogDataforAccountClass.recordStatus;
                  accFormValues.approverId = _this40.currentUser;

                  if (accFormValues.approvedStatus === 'UNAUTHORIZED') {
                    accFormValues.approvedStatus = 'U';
                  }

                  if (accFormValues.approvedStatus === 'AUTHORIZED') {
                    accFormValues.approvedStatus = 'A';
                  }

                  if (accFormValues.recordStatus == "OPEN") {
                    accFormValues.recordStatus = 'O';
                  }

                  if (accFormValues.recordStatus == "CLOSE") {
                    accFormValues.recordStatus = 'C';
                  }

                  if (accFormValues.approvedEver === 'NO') {
                    accFormValues.approvedEver = 'N';
                  }

                  if (accFormValues.approvedEver === 'YES') {
                    accFormValues.approvedEver = 'Y';
                  }

                  _this40.apiService.onClckOfOperationACC(_this40.operation, _this40.currentUser, accFormValues).subscribe(function (authResp) {
                    console.log(authResp);
                    _this40.auditlogDataforAccountClass = authResp;

                    _this40.auditLogforAC();

                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record is Authorized',
                      icon: 'success'
                    });
                  });
                }
              });
            }
          }
        }, {
          key: "onClickOfCloseACC",
          value: function onClickOfCloseACC(accFormValues) {
            var _this41 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Close the record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info'
            }).then(function (result) {
              if (result.isConfirmed === true) {
                _this41.operation = 'close';
                accFormValues.creatorId = _this41.auditlogDataforAccountClass.creatorId;

                _this41.apiService.onClckOfOperationACC(_this41.operation, _this41.currentUser, accFormValues).subscribe(function (closeResp) {
                  console.log(closeResp);
                  _this41.auditlogDataforAccountClass = closeResp;

                  _this41.auditLogforAC();

                  if (_this41.auditlogDataforAccountClass) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record is Closed',
                      icon: 'success'
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Failed to Close the Record!',
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
            });
          }
        }, {
          key: "onClickOfReopenACC",
          value: function onClickOfReopenACC(accFormValues) {
            var _this42 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Reopen the record. ' + ' Do you want to proceed?',
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
                _this42.operation = 'open';
                accFormValues.creatorId = _this42.auditlogDataforAccountClass.creatorId;

                _this42.apiService.onClckOfOperationACC(_this42.operation, _this42.currentUser, accFormValues).subscribe(function (closeResp) {
                  console.log(closeResp);
                  _this42.auditlogDataforAccountClass = closeResp;

                  _this42.auditLogforAC();

                  if (_this42.auditlogDataforAccountClass) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record is Reopened',
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
            });
          }
        }, {
          key: "OndeleteofUserACC",
          value: function OndeleteofUserACC(UserId) {
            var _this43 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Delete the record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info'
            }).then(function (result) {
              if (result.isConfirmed === true) {
                var globalGlCodeId = _this43.auditlogDataforAccountClass.globalGlCodeId;

                _this43.apiService.deleteGCCuserdata(globalGlCodeId).subscribe(function (resp) {
                  if (resp == true) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record Is Deleted',
                      icon: 'success'
                    });

                    _this43.router.navigateByUrl('/system-param-maintenance/global-acc-maintenance-summary');
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
            });
          }
        }]);

        return _GlobalGccAcNewComponent;
      }();

      _GlobalGccAcNewComponent.ɵfac = function GlobalGccAcNewComponent_Factory(t) {
        return new (t || _GlobalGccAcNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
      };

      _GlobalGccAcNewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _GlobalGccAcNewComponent,
        selectors: [["npr-global-gcc-ac-new"]],
        decls: 103,
        vars: 34,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "tabStyleCol"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], ["role", "presentation", 1, "nav-item"], ["id", "home-tab", "data-bs-toggle", "tab", "data-bs-target", "#home", "type", "button", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "profile-tab", "data-bs-toggle", "tab", "data-bs-target", "#profile", "type", "button", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link"], [1, "dbCardStyle"], ["id", "myTabContent", 1, "tab-content"], ["id", "home", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "formStyle", 3, "formGroup"], [1, "titleStyle", "mb-3", "mb-md-4"], [1, "smTitle"], [1, "col-lg-4"], ["for", "roleName", 1, "formLbl"], [1, "row", "g-2"], ["class", "col-lg-6", 4, "ngIf"], [1, "row", "gy-2"], [1, "col-lg-4", "col-sm-6"], [1, "colorRed"], ["formArrayName", "medGlobalGlCodeDetails"], ["class", "row gy-2", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "col-sm"], [1, "row", "g-3"], [1, "col-auto"], [1, "addIcon", "primarybg", 3, "ngClass", "click"], ["src", "assets/images/plus-icon.svg", "alt", "..."], [1, "col-lg-12"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], ["class", "col-auto", 4, "ngIf"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["class", "dbCardStyle", 4, "ngIf"], ["id", "profile", "role", "tabpanel", "aria-labelledby", "profile-tab", 1, "tab-pane", "fade"], [1, "col-lg-6"], ["class", "radio radioStyle", 4, "ngIf"], [1, "radio", "radioStyle"], ["id", "radio-1", "formControlName", "permission", "value", "Allow", "required", "", "type", "radio"], ["for", "radio-1", 1, "radio-label"], ["id", "radio-2", "formControlName", "permission", "required", "", "type", "radio", "value", "Disallow"], ["for", "radio-2", 1, "radio-label"], [1, "row", "gy-2", 3, "formGroupName"], ["id", "transactionDes", "required", "", "formControlName", "glCode", "type", "text", "placeholder", "GL Code", "value", "", 1, "form-control", 3, "readonly"], ["id", "transactionCode", "formControlName", "glDesc", "placeholder", "GL Code Description", "value", "", "required", "", 1, "form-control", 3, "readonly"], [2, "margin-top", "10px"], [1, "deleteIcon2", 3, "ngClass", "click"], ["src", "assets/images/delete-icon.svg", "alt", "..."], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["color", "warn", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], ["src", "assets/images/maker-icon.svg", "alt", "..."], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], ["src", "assets/images/checker-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/auth-status-icon.svg", "alt", "..."], ["id", "radio-3", "formControlName", "permission", "value", "Allow", "required", "", "type", "radio"], ["for", "radio-3", 1, "radio-label"], ["id", "radio-4", "formControlName", "permission", "type", "radio", "required", "", "value", "Disallow"], ["for", "radio-4", 1, "radio-label"], ["id", "transactionDes", "required", "", "formControlName", "glCode", "type", "text", "placeholder", "Account Class", "value", "", 1, "form-control", 3, "readonly"], ["id", "transactionCode", "formControlName", "glDesc", "placeholder", "Account Class Description", "value", "", "required", "", 1, "form-control", 3, "readonly"]],
        template: function GlobalGccAcNewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Global Account Restriction");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "General Ledger");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Account Class");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "General Ledger");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Code Permission");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, GlobalGccAcNewComponent_div_23_Template, 5, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, GlobalGccAcNewComponent_div_24_Template, 5, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "GL Code ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "GL Code Description ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, GlobalGccAcNewComponent_div_38_Template, 12, 6, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GlobalGccAcNewComponent_Template_a_click_42_listener() {
              return ctx.addGCCFormGroup();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, GlobalGccAcNewComponent_div_47_Template, 3, 0, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, GlobalGccAcNewComponent_div_48_Template, 3, 0, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, GlobalGccAcNewComponent_div_49_Template, 3, 0, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, GlobalGccAcNewComponent_div_50_Template, 3, 0, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, GlobalGccAcNewComponent_div_51_Template, 3, 0, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, GlobalGccAcNewComponent_div_52_Template, 3, 1, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, GlobalGccAcNewComponent_div_53_Template, 3, 1, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, GlobalGccAcNewComponent_div_57_Template, 100, 12, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "form", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "h2", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Account Class");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Code Permission");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](67, GlobalGccAcNewComponent_div_67_Template, 5, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](69, GlobalGccAcNewComponent_div_69_Template, 4, 0, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Account Class ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "Account Class Description ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](83, GlobalGccAcNewComponent_div_83_Template, 12, 6, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GlobalGccAcNewComponent_Template_a_click_87_listener() {
              return ctx.addAccountFormGroup();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](89, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](92, GlobalGccAcNewComponent_div_92_Template, 3, 0, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](93, GlobalGccAcNewComponent_div_93_Template, 3, 0, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](94, GlobalGccAcNewComponent_div_94_Template, 3, 0, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](95, GlobalGccAcNewComponent_div_95_Template, 3, 0, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](96, GlobalGccAcNewComponent_div_96_Template, 3, 0, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](97, GlobalGccAcNewComponent_div_97_Template, 3, 1, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](98, GlobalGccAcNewComponent_div_98_Template, 3, 1, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](102, GlobalGccAcNewComponent_div_102_Template, 100, 12, "div", 32);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hideAllow);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hideDisAllow);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.globalGccForm.get("medGlobalGlCodeDetails")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](28, _c0, ctx.editFlag));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.auditlogDataforGeneralLedger && ctx.submit && ctx.auditlogDataforGeneralLedger.recordStatus == "OPEN");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.auditlogDataforGeneralLedger && ctx.submit && ctx.auditlogDataforGeneralLedger.approvedStatus == "UNAUTHORIZED");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.auditlogDataforGeneralLedger && ctx.auditlogDataforGeneralLedger.recordStatus == "OPEN" && ctx.auditlogDataforGeneralLedger.approvedEver == "YES" && ctx.submit);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.auditlogDataforGeneralLedger && ctx.auditlogDataforGeneralLedger.recordStatus == "CLOSED" && ctx.auditlogDataforGeneralLedger.approvedEver == "YES" && ctx.submit);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.auditlogDataforGeneralLedger && ctx.submit && ctx.auditlogDataforGeneralLedger.approvedEver == "NO");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.auditlogDataforGeneralLedger && !ctx.showSubmit);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showSubmit);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](30, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.auditlogDataforGeneralLedger);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.accountMaintenanceForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hideAllowAcc);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hideDisAllowAcc);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.accountMaintenanceForm.get("medGlobalGlCodeDetails")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](31, _c0, ctx.editFlag));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.auditlogDataforAccountClass && ctx.submit && ctx.auditlogDataforAccountClass.recordStatus == "OPEN");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.auditlogDataforAccountClass && ctx.submit && ctx.auditlogDataforAccountClass.approvedStatus == "UNAUTHORIZED");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.auditlogDataforAccountClass && ctx.auditlogDataforAccountClass.recordStatus == "OPEN" && ctx.auditlogDataforAccountClass.approvedEver == "YES" && ctx.submit);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.auditlogDataforAccountClass && ctx.auditlogDataforAccountClass.recordStatus == "CLOSED" && ctx.auditlogDataforAccountClass.approvedEver == "YES" && ctx.submit);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.auditlogDataforAccountClass && ctx.submit && ctx.auditlogDataforAccountClass.approvedEver == "NO");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.auditlogDataforAccountClass && !ctx.showSubmit);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showSubmit);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](33, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.auditlogDataforAccountClass);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupName],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
        styles: [".form-class[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #797979;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-bottom: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-left: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-right: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.errorColor[_ngcontent-%COMP%] {\n  color: #e6224a;\n}\n\n.isDisabled[_ngcontent-%COMP%] {\n  color: currentColor;\n  cursor: not-allowed;\n  pointer-events: none;\n  opacity: 0.4;\n  text-decoration: none;\n}\n\n.disable[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  pointer-events: none;\n  opacity: 0.4;\n  text-decoration: none;\n}\n\n.isDisabled[_ngcontent-%COMP%] {\n  color: currentColor;\n  cursor: not-allowed;\n  pointer-events: none;\n  opacity: 0.5;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC1nY2MtYWMtbmV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFFQSx3RUFBQTtBQUFKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBRUo7O0FBQ0U7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBRUo7O0FBQUU7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFHSiIsImZpbGUiOiJnbG9iYWwtZ2NjLWFjLW5ldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNsYXNzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6ICM3OTc5Nzk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ViZWJlYjtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXRcclxufVxyXG4uZXJyb3JDb2xvcntcclxuICAgIGNvbG9yOiAjZTYyMjRhO1xyXG59XHJcbi5pc0Rpc2FibGVkIHtcclxuICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gIH1cclxuICAuZGlzYWJsZXtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgLmlzRGlzYWJsZWQge1xyXG4gICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBcclxuICB9Il19 */"]
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/guards/can-deactivate.guard */
      50215);
      /* harmony import */


      var _department_id_maintenance_departmenrt_id_new_departmenrt_id_new_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./department-id-maintenance/departmenrt-id-new/departmenrt-id-new.component */
      64729);
      /* harmony import */


      var _department_id_maintenance_department_id_maintenance_department_id_maintenance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./department-id-maintenance/department-id-maintenance/department-id-maintenance.component */
      22263);
      /* harmony import */


      var _global_gcc_ac_maintenance_account_class_edit_account_class_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./global-gcc-ac-maintenance/account-class-edit/account-class-edit.component */
      10070);
      /* harmony import */


      var _global_gcc_ac_maintenance_general_ledger_edit_general_ledger_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./global-gcc-ac-maintenance/general-ledger-edit/general-ledger-edit.component */
      75567);
      /* harmony import */


      var _global_gcc_ac_maintenance_global_gcc_ac_maintenance_global_gcc_ac_maintenance_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./global-gcc-ac-maintenance/global-gcc-ac-maintenance/global-gcc-ac-maintenance.component */
      23367);
      /* harmony import */


      var _global_gcc_ac_maintenance_global_gcc_ac_new_global_gcc_ac_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./global-gcc-ac-maintenance/global-gcc-ac-new/global-gcc-ac-new.component */
      65252);
      /* harmony import */


      var _transaction_code_maintenance_transaction_code_edit_transaction_code_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./transaction-code-maintenance/transaction-code-edit/transaction-code-edit.component */
      69287);
      /* harmony import */


      var _transaction_code_maintenance_transaction_code_maintenance_transaction_code_maintenance_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./transaction-code-maintenance/transaction-code-maintenance/transaction-code-maintenance.component */
      19926);
      /* harmony import */


      var _transaction_code_maintenance_transaction_code_new_transaction_code_new_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./transaction-code-maintenance/transaction-code-new/transaction-code-new.component */
      90223);
      /* harmony import */


      var _user_gcc_ac_maintenance_user_account_class_edit_user_account_class_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./user-gcc-ac-maintenance/user-account-class-edit/user-account-class-edit.component */
      58558);
      /* harmony import */


      var _user_gcc_ac_maintenance_user_gcc_ac_maintenance_user_gcc_ac_maintenance_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./user-gcc-ac-maintenance/user-gcc-ac-maintenance/user-gcc-ac-maintenance.component */
      51619);
      /* harmony import */


      var _user_gcc_ac_maintenance_user_gcc_ac_new_user_gcc_ac_new_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./user-gcc-ac-maintenance/user-gcc-ac-new/user-gcc-ac-new.component */
      14438);
      /* harmony import */


      var _user_gcc_ac_maintenance_user_general_ledger_edit_user_general_ledger_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./user-gcc-ac-maintenance/user-general-ledger-edit/user-general-ledger-edit.component */
      7847);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: 'transaction-code-summary',
        component: _transaction_code_maintenance_transaction_code_maintenance_transaction_code_maintenance_component__WEBPACK_IMPORTED_MODULE_8__.TransactionCodeMaintenanceComponent
      }, {
        path: 'transaction-code-new',
        component: _transaction_code_maintenance_transaction_code_new_transaction_code_new_component__WEBPACK_IMPORTED_MODULE_9__.TransactionCodeNewComponent,
        canDeactivate: [src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__.CanDeactivateGuard]
      }, {
        path: 'transaction-code-edit',
        component: _transaction_code_maintenance_transaction_code_edit_transaction_code_edit_component__WEBPACK_IMPORTED_MODULE_7__.TransactionCodeEditComponent,
        canDeactivate: [src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__.CanDeactivateGuard]
      }, {
        path: 'global-acc-maintenance-summary',
        component: _global_gcc_ac_maintenance_global_gcc_ac_maintenance_global_gcc_ac_maintenance_component__WEBPACK_IMPORTED_MODULE_5__.GlobalGccAcMaintenanceComponent
      }, {
        path: 'global-acc-maintenance-new',
        component: _global_gcc_ac_maintenance_global_gcc_ac_new_global_gcc_ac_new_component__WEBPACK_IMPORTED_MODULE_6__.GlobalGccAcNewComponent,
        canDeactivate: [src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__.CanDeactivateGuard]
      }, {
        path: 'global-gl-edit',
        component: _global_gcc_ac_maintenance_general_ledger_edit_general_ledger_edit_component__WEBPACK_IMPORTED_MODULE_4__.GeneralLedgerEditComponent
      }, {
        path: 'global-ac-edit',
        component: _global_gcc_ac_maintenance_account_class_edit_account_class_edit_component__WEBPACK_IMPORTED_MODULE_3__.AccountClassEditComponent
      }, {
        path: 'user-gl-acc-maintenance-summary',
        component: _user_gcc_ac_maintenance_user_gcc_ac_maintenance_user_gcc_ac_maintenance_component__WEBPACK_IMPORTED_MODULE_11__.UserGccAcMaintenanceComponent
      }, {
        path: 'user-gl-acc-maintenance-new',
        component: _user_gcc_ac_maintenance_user_gcc_ac_new_user_gcc_ac_new_component__WEBPACK_IMPORTED_MODULE_12__.UserGccAcNewComponent,
        canDeactivate: [src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__.CanDeactivateGuard]
      }, {
        path: 'user-gl-edit',
        component: _user_gcc_ac_maintenance_user_general_ledger_edit_user_general_ledger_edit_component__WEBPACK_IMPORTED_MODULE_13__.UserGeneralLedgerEditComponent
      }, {
        path: 'user-ac-edit',
        component: _user_gcc_ac_maintenance_user_account_class_edit_user_account_class_edit_component__WEBPACK_IMPORTED_MODULE_10__.UserAccountClassEditComponent
      }, {
        path: 'dept-id-maintenance-summary',
        component: _department_id_maintenance_department_id_maintenance_department_id_maintenance_component__WEBPACK_IMPORTED_MODULE_2__.DepartmentIdMaintenanceComponent
      }, {
        path: 'dept-id-maintenance-new',
        component: _department_id_maintenance_departmenrt_id_new_departmenrt_id_new_component__WEBPACK_IMPORTED_MODULE_1__.DepartmenrtIdNewComponent,
        canDeactivate: [src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__.CanDeactivateGuard]
      }, {
        path: 'transaction-code-edit',
        component: _transaction_code_maintenance_transaction_code_edit_transaction_code_edit_component__WEBPACK_IMPORTED_MODULE_7__.TransactionCodeEditComponent,
        canDeactivate: [src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__.CanDeactivateGuard]
      }];

      var _SystemParamMaintenanceRoutingModule = /*#__PURE__*/_createClass(function _SystemParamMaintenanceRoutingModule() {
        _classCallCheck(this, _SystemParamMaintenanceRoutingModule);
      });

      _SystemParamMaintenanceRoutingModule.ɵfac = function SystemParamMaintenanceRoutingModule_Factory(t) {
        return new (t || _SystemParamMaintenanceRoutingModule)();
      };

      _SystemParamMaintenanceRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
        type: _SystemParamMaintenanceRoutingModule
      });
      _SystemParamMaintenanceRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](_SystemParamMaintenanceRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
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


      var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! angular-ng-autocomplete */
      42255);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
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


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ng-select/ng-select */
      88660);
      /* harmony import */


      var _global_gcc_ac_maintenance_general_ledger_edit_general_ledger_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./global-gcc-ac-maintenance/general-ledger-edit/general-ledger-edit.component */
      75567);
      /* harmony import */


      var _global_gcc_ac_maintenance_account_class_edit_account_class_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./global-gcc-ac-maintenance/account-class-edit/account-class-edit.component */
      10070);
      /* harmony import */


      var _user_gcc_ac_maintenance_user_general_ledger_edit_user_general_ledger_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./user-gcc-ac-maintenance/user-general-ledger-edit/user-general-ledger-edit.component */
      7847);
      /* harmony import */


      var _user_gcc_ac_maintenance_user_account_class_edit_user_account_class_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./user-gcc-ac-maintenance/user-account-class-edit/user-account-class-edit.component */
      58558);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _SystemParamMaintenanceModule = /*#__PURE__*/_createClass(function _SystemParamMaintenanceModule() {
        _classCallCheck(this, _SystemParamMaintenanceModule);
      });

      _SystemParamMaintenanceModule.ɵfac = function SystemParamMaintenanceModule_Factory(t) {
        return new (t || _SystemParamMaintenanceModule)();
      };

      _SystemParamMaintenanceModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
        type: _SystemParamMaintenanceModule
      });
      _SystemParamMaintenanceModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _system_param_maintenance_routing_module__WEBPACK_IMPORTED_MODULE_0__.SystemParamMaintenanceRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_1__.DataTablesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule, angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_18__.AutocompleteLibModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__.NgSelectModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](_SystemParamMaintenanceModule, {
          declarations: [_transaction_code_maintenance_transaction_code_maintenance_transaction_code_maintenance_component__WEBPACK_IMPORTED_MODULE_5__.TransactionCodeMaintenanceComponent, _transaction_code_maintenance_transaction_code_new_transaction_code_new_component__WEBPACK_IMPORTED_MODULE_6__.TransactionCodeNewComponent, _global_gcc_ac_maintenance_global_gcc_ac_maintenance_global_gcc_ac_maintenance_component__WEBPACK_IMPORTED_MODULE_3__.GlobalGccAcMaintenanceComponent, _global_gcc_ac_maintenance_global_gcc_ac_new_global_gcc_ac_new_component__WEBPACK_IMPORTED_MODULE_4__.GlobalGccAcNewComponent, _department_id_maintenance_department_id_maintenance_department_id_maintenance_component__WEBPACK_IMPORTED_MODULE_2__.DepartmentIdMaintenanceComponent, _department_id_maintenance_departmenrt_id_new_departmenrt_id_new_component__WEBPACK_IMPORTED_MODULE_10__.DepartmenrtIdNewComponent, _user_gcc_ac_maintenance_user_gcc_ac_maintenance_user_gcc_ac_maintenance_component__WEBPACK_IMPORTED_MODULE_7__.UserGccAcMaintenanceComponent, _user_gcc_ac_maintenance_user_gcc_ac_new_user_gcc_ac_new_component__WEBPACK_IMPORTED_MODULE_8__.UserGccAcNewComponent, _transaction_code_maintenance_transaction_code_edit_transaction_code_edit_component__WEBPACK_IMPORTED_MODULE_9__.TransactionCodeEditComponent, _global_gcc_ac_maintenance_general_ledger_edit_general_ledger_edit_component__WEBPACK_IMPORTED_MODULE_11__.GeneralLedgerEditComponent, _global_gcc_ac_maintenance_account_class_edit_account_class_edit_component__WEBPACK_IMPORTED_MODULE_12__.AccountClassEditComponent, _user_gcc_ac_maintenance_user_general_ledger_edit_user_general_ledger_edit_component__WEBPACK_IMPORTED_MODULE_13__.UserGeneralLedgerEditComponent, _user_gcc_ac_maintenance_user_account_class_edit_user_account_class_edit_component__WEBPACK_IMPORTED_MODULE_14__.UserAccountClassEditComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _system_param_maintenance_routing_module__WEBPACK_IMPORTED_MODULE_0__.SystemParamMaintenanceRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_1__.DataTablesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule, angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_18__.AutocompleteLibModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_19__.NgSelectModule]
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
        },

        /* harmony export */
        "TrnData": function TrnData() {
          return (
            /* binding */
            _TrnData
          );
        },

        /* harmony export */
        "masterClass": function masterClass() {
          return (
            /* binding */
            _masterClass
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
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


      var _transaction_code_new_transaction_code_new_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../transaction-code-new/transaction-code-new.component */
      90223);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      31443);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      77382);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function TransactionCodeEditComponent_div_14_label_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Transaction Code ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function TransactionCodeEditComponent_div_14_label_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Transaction Description ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "margin-top": a0
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "isDisabled": a0
        };
      };

      function TransactionCodeEditComponent_div_14_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TransactionCodeEditComponent_div_14_div_8_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            var data_r8 = ctx_r14.$implicit;
            var i_r9 = ctx_r14.index;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r13.deleteRowData(data_r8.value, i_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c0, i_r9 === 0 ? "50px" : "10px"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c1, !ctx_r12.editFlag));
        }
      }

      function TransactionCodeEditComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, TransactionCodeEditComponent_div_14_label_2_Template, 4, 0, "label", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function TransactionCodeEditComponent_div_14_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r17.invalidLogin($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, TransactionCodeEditComponent_div_14_label_5_Template, 4, 0, "label", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function TransactionCodeEditComponent_div_14_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r19.invalidLogin($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, TransactionCodeEditComponent_div_14_div_8_Template, 3, 6, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r9 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroupName", i_r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r9 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("readonly", !ctx_r0.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r9 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("readonly", !ctx_r0.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.transactionCodeEditForm.get("transactionData")["controls"].length > 1);
        }
      }

      function TransactionCodeEditComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TransactionCodeEditComponent_div_18_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r20.addFormGroup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function TransactionCodeEditComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TransactionCodeEditComponent_div_22_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r22.enableEditFlag();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.roleCodes.edit.labelDescription);
        }
      }

      function TransactionCodeEditComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TransactionCodeEditComponent_div_23_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r24.onClickOfAuth();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.roleCodes.auth.labelDescription);
        }
      }

      function TransactionCodeEditComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TransactionCodeEditComponent_div_24_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r26.onClickOfClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r4.roleCodes.close.labelDescription);
        }
      }

      function TransactionCodeEditComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TransactionCodeEditComponent_div_25_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r28.onClickOfReopen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r5.roleCodes.reopen.labelDescription);
        }
      }

      function TransactionCodeEditComponent_div_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TransactionCodeEditComponent_div_26_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r30.OndeleteofUser(ctx_r30.trnsid, ctx_r30.currentUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r6.roleCodes["delete"].labelDescription);
        }
      }

      function TransactionCodeEditComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TransactionCodeEditComponent_div_27_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            ctx_r32.onSubmitofForm(ctx_r32.transactionCodeEditForm.value, ctx_r32.transactionCodeSummryData);
            return ctx_r32.clicked = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r7.clicked)("disabled", !ctx_r7.transactionCodeEditForm.valid && !ctx_r7.submitFlag);
        }
      }

      var _c2 = "/system-param-maintenance/transaction-code-summary";

      var _c3 = function _c3() {
        return [_c2];
      };

      var _TransactionCodeEditComponent = /*#__PURE__*/function () {
        function _TransactionCodeEditComponent(formBuilder, apiService, cdr, toastService, router, ref, roleService) {
          _classCallCheck(this, _TransactionCodeEditComponent);

          this.formBuilder = formBuilder;
          this.apiService = apiService;
          this.cdr = cdr;
          this.toastService = toastService;
          this.router = router;
          this.ref = ref;
          this.roleService = roleService;
          this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__.permissionsLabels();
          this.showList = false;
          this.editFlag = false;
          this.formTouched = true;
          this.masterClass = new _transaction_code_new_transaction_code_new_component__WEBPACK_IMPORTED_MODULE_2__.TrnDataMaster();
          this.formValues = {
            trnDesc: '',
            trnCode: ''
          };
          this.MedTransOperationDto = {
            userId: '',
            userIdLoggedIn: ''
          };
          this.clicked = false;
          this.submitFlag = false;
          this.showDialog = false;
          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        }

        _createClass(_TransactionCodeEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this44 = this;

            console.log("idValue ", localStorage.getItem('idValue'));
            this.idValue = localStorage.getItem('idValue');
            setTimeout(function () {
              _this44.newRolePermissions();
            }, 2000);
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this44.roleCodes = message;
            });
            setTimeout(function () {
              console.log(_this44.roleCodes);
            }, 3000);
            this.currentUser = localStorage.getItem("userFromLogin");
            this.transactionCodeEditForm = this.formBuilder.group({
              userId: [""],
              creatorId: [""],
              transactionData: this.formBuilder.array([this.createtransactionCodeGroup()]),
              verifiedBy: [""],
              verifiedTime: [""],
              recordStatus: [""],
              verifiedOnce: [""],
              modNo: [""],
              verifiedStatus: [""],
              creatorDtStamp: [""]
            });
            this.getUserName();
            this.gettingSummaryData(); // var retrievedObject = localStorage.getItem('transactionCodeData');
            // console.log('retrievedObject: ', JSON.parse(retrievedObject));
            // this.transactionCodeSummryData = JSON.parse(retrievedObject);
            // console.log('transactionCodeSummryData: ', JSON.parse(retrievedObject));
          }
        }, {
          key: "newRolePermissions",
          value: function newRolePermissions() {
            this.roleService.fetchScreenPermissions('Transaction Code Maintenance');
          }
        }, {
          key: "createtransactionCodeGroup",
          value: function createtransactionCodeGroup() {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
              'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
              'trnDesc': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
              'trnCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('')
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
            transactionData.removeAt(i);
          }
        }, {
          key: "canExit",
          value: function canExit() {
            var _this45 = this;

            var isExit = false;

            if (this.transactionCodeEditForm.touched && this.formTouched == true) {
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

                  _this45.cdr.markForCheck();

                  return isExit;
                } else {
                  isExit = false;

                  _this45.cdr.markForCheck();

                  return isExit;
                }
              });
            } else {
              isExit = true;
              return new Promise(function (resolve, reject) {
                if (isExit === true) {
                  isExit = true;

                  _this45.cdr.markForCheck();

                  resolve(true);
                }
              });
            }
          }
        }, {
          key: "deleteRowData",
          value: function deleteRowData(data, i) {
            var _this46 = this;

            var transactionData = this.transactionCodeEditForm.get('transactionData');

            if (transactionData.at(i).get('trnCode').value && transactionData.at(i).get('trnDesc').value) {
              // transactionData.removeAt(i);
              console.log("this.transactionCodeSummryData.formValues", data.id);
              console.log("currnt user", this.currentUser);
              this.apiService.deleteRow(data.id, this.currentUser).subscribe(function (resp) {
                _this46.deleteRowResp = resp;

                if (_this46.deleteRowResp == true) {
                  {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Deleted Row Data!',
                      icon: 'success'
                    });
                  }
                  transactionData.removeAt(i);
                  _this46.submitFlag = true;
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    title: 'Failed to Delete Row Data!',
                    icon: 'error'
                  });
                }
              }, function (error) {
                if (_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpErrorResponse) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    text: 'Server Error!',
                    icon: 'error'
                  });
                }
              });
            } else {// transactionData.removeAt(i);
            }
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
            var _this47 = this;

            this.apiService.getUserName().subscribe(function (userName) {
              _this47.userName = userName;
              _this47.usersList = [];

              if (_this47.userName) {
                console.log(_this47.userName);
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
            var _this48 = this;

            this.apiService.getSummaryDataTransactionCode().subscribe(function (summaryData) {
              _this48.transactionCodeSummryData = summaryData;
              console.log(_this48.transactionCodeSummryData);
              var retrievedObject = localStorage.getItem('transactionCodeData');
              _this48.transactionCodeSummryData = JSON.parse(retrievedObject);

              _this48.auditLog();

              _this48.userID = _this48.transactionCodeSummryData.userId;

              _this48.transactionCodeEditForm.controls.userId.setValue(_this48.userID);

              _this48.addtrnDec.removeAt(0); // this.trnsid= this.transactionCodeSummryData.TransCode[0].id;
              // this.trnsid=this.transactionCodeSummryData.formValues[0].id;


              _this48.transactionCodeSummryData.medTransCode.forEach(function (element) {
                var row = _this48.formBuilder.group({
                  trnDesc: [element.trnDesc, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                  trnCode: [element.trnCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                  id: [element.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                  userId: [element.userId, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                  creatorDtStamp: [element.creatorDtStamp, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                  creatorId: [element.creatorId, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                  modNo: [element.modNo, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                  recordStatus: [element.recordStatus, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                  verifiedBy: [element.verifiedBy, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                  verifiedOnce: [element.verifiedOnce, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                  verifiedStatus: [element.verifiedStatus, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                  verifiedTime: [element.verifiedTime, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
                });

                _this48.addtrnDec.push(row);
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
            if (this.transactionCodeSummryData.verifiedStatus === 'U' || this.transactionCodeSummryData.verifiedStatus === 'Unauthorized') {
              this.transactionCodeSummryData.verifiedStatus = 'UNAUTHORIZED';
            }

            if (this.transactionCodeSummryData.verifiedStatus === 'A' || this.transactionCodeSummryData.verifiedStatus === 'Authorized') {
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
            var _this49 = this;

            if (this.transactionCodeSummryData.creatorId === this.currentUser) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                title: 'Maker Cannot Authorized the Record!',
                icon: 'error'
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
                text: 'You are trying to Authorize the record. ' + ' Do you want to proceed?',
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
                  _this49.operation = 'verify';
                  _this49.MedTransOperationDto.userId = _this49.userID;
                  _this49.MedTransOperationDto.userIdLoggedIn = _this49.currentUser;
                  console.log("this.MedTransOperationDto", _this49.MedTransOperationDto);

                  _this49.apiService.onClckOfAuthTransactionCode(_this49.operation, _this49.MedTransOperationDto).subscribe(function (authResp) {
                    console.log(authResp);
                    _this49.transactionCodeSummryData = authResp;

                    _this49.auditLog();

                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Record is Authorized',
                      icon: 'success'
                    });
                  });
                }
              });
            }
          }
        }, {
          key: "onClickOfClose",
          value: function onClickOfClose() {
            var _this50 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Close the record. ' + ' Do you want to proceed?',
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
                _this50.operation = 'close';
                _this50.MedTransOperationDto.userId = _this50.userID;
                _this50.MedTransOperationDto.userIdLoggedIn = _this50.currentUser;
                console.log("this.MedTransOperationDto", _this50.MedTransOperationDto);

                _this50.apiService.onclickOfCloseTransactionCode(_this50.operation, _this50.MedTransOperationDto).subscribe(function (closeResp) {
                  console.log(closeResp);
                  _this50.transactionCodeSummryData = closeResp;

                  _this50.auditLog();

                  _this50.ref.markForCheck();

                  if (_this50.transactionCodeSummryData) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Record is Closed',
                      icon: 'success'
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Failed to Close the Recored!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "onClickOfReopen",
          value: function onClickOfReopen() {
            var _this51 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Reopen the record. ' + ' Do you want to proceed?',
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
                _this51.operation = 'reOpen';
                _this51.MedTransOperationDto.userId = _this51.userID;
                _this51.MedTransOperationDto.userIdLoggedIn = _this51.currentUser;

                _this51.apiService.onclickOfReopenTransactionCode(_this51.operation, _this51.MedTransOperationDto).subscribe(function (openResp) {
                  console.log(openResp);
                  _this51.transactionCodeSummryData = openResp;

                  _this51.auditLog();

                  _this51.ref.markForCheck();

                  if (_this51.transactionCodeSummryData) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Record Is Reopened',
                      icon: 'success'
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Failed to Reopen the Record!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "OndeleteofUser",
          value: function OndeleteofUser(UserId, currentUser) {
            var _this52 = this;

            console.log("USer", UserId);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Delete the record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info'
            }).then(function (result) {
              if (result.isConfirmed === true) {
                _this52.apiService.deleteTransactionData(_this52.userID, _this52.currentUser).subscribe(function (resp) {
                  if (resp == true) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Record Is Deleted',
                      icon: 'success'
                    });

                    _this52.router.navigateByUrl('/system-param-maintenance/transaction-code-summary');
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Failed to Delete User Data!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "onSubmitofForm",
          value: function onSubmitofForm(formData, auditData) {
            var _this53 = this;

            console.log(auditData);
            this.disablesubmit = true;
            formData.creatorDtStamp = auditData.creatorDtStamp;
            formData.creatorId = this.currentUser;
            formData.creatorDtStamp = auditData.creatorDtStamp;
            formData.modNo = auditData.modNo;
            formData.recordStatus = auditData.recordStatus;
            formData.verifiedBy = auditData.verifiedBy;
            formData.verifiedOnce = auditData.verifiedOnce;
            formData.verifiedStatus = auditData.verifiedStatus;
            formData.verifiedTime = auditData.verifiedTime;
            var userId = auditData.userId;
            console.log("userId ", userId);
            formData.transactionData.forEach(function (element) {
              formData.id = element.id;
              formData.userId = element.userId;
              console.log("formData.userId ", formData.userId);
              formData.creatorId = element.creatorId;
            });
            this.transactionData = formData.transactionData;

            for (var i = 0; i < this.transactionData.length; i++) {
              this.transactionData[i].creatorId = this.currentUser;
              this.transactionData[i].creatorDtStamp = formData.creatorDtStamp;
              this.transactionData[i].modNo = formData.modNo;
              this.transactionData[i].recordStatus = formData.recordStatus;
              this.transactionData[i].verifiedBy = formData.verifiedBy;
              this.transactionData[i].verifiedOnce = formData.verifiedOnce;
              this.transactionData[i].verifiedStatus = formData.verifiedStatus;
              this.transactionData[i].verifiedTime = formData.verifiedTime;
            }

            console.log("Final Data ", userId);
            this.apiService.updateTransactionCode(this.transactionData, userId, this.currentUser).subscribe(function (savetrnres) {
              _this53.transactionCodeSummryData = savetrnres;

              if (_this53.transactionCodeSummryData != null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  title: 'Record is Updated',
                  icon: 'success'
                });

                _this53.auditLog();

                _this53.editFlag = false;
                _this53.formTouched = !_this53.transactionCodeEditForm.touched;
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  title: 'Failed to Update the Record!',
                  icon: 'error'
                });
              }
            });
          }
        }]);

        return _TransactionCodeEditComponent;
      }();

      _TransactionCodeEditComponent.ɵfac = function TransactionCodeEditComponent_Factory(t) {
        return new (t || _TransactionCodeEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_5__.RoleService));
      };

      _TransactionCodeEditComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _TransactionCodeEditComponent,
        selectors: [["npr-transaction-code-edit"]],
        decls: 131,
        vars: 25,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "formStyle", 3, "formGroup"], [1, "dbCardStyle"], [1, "row", "gy-12"], [1, "col-lg-4"], ["for", "roleName", 1, "formLbl"], ["id", "usersId", "type", "text", "oninput", "this.value = this.value.toUpperCase()", "readonly", "", "formControlName", "userId", "placeholder", "User Id", "value", "", 1, "form-control"], ["formArrayName", "transactionData", "fxLayout", "column", "fxLayoutGap", "50px", 1, "row", "gy-4"], ["class", "row", "style", "margin-top: 10px;", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "row"], ["class", "col-auto", 4, "ngIf"], [1, "col-lg-12"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], [1, "col-auto"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], ["src", "assets/images/maker-icon.svg", "alt", "..."], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], ["src", "assets/images/checker-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/auth-status-icon.svg", "alt", "..."], [1, "row", 2, "margin-top", "10px", 3, "formGroupName"], ["for", "roleName", "class", "formLbl", 4, "ngIf"], ["id", "transactionCode", "formControlName", "trnCode", "placeholder", "Transaction Code", "required", "", 1, "form-control", 3, "readonly", "ngModelChange"], ["id", "transactionDes", "formControlName", "trnDesc", "type", "text", "placeholder", "Transaction Description", 1, "form-control", 3, "readonly", "ngModelChange"], [3, "ngStyle", 4, "ngIf"], [1, "colorRed"], [3, "ngStyle"], [1, "deleteIcon2", 3, "ngClass", "click"], ["src", "assets/images/delete-icon.svg", "alt", "..."], [1, "addIcon", "primarybg", 3, "click"], ["src", "assets/images/plus-icon.svg", "alt", "..."], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["color", "warn", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"]],
        template: function TransactionCodeEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Transaction Code Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "User Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, TransactionCodeEditComponent_div_14_Template, 11, 6, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, TransactionCodeEditComponent_div_18_Template, 4, 0, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, TransactionCodeEditComponent_div_22_Template, 3, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, TransactionCodeEditComponent_div_23_Template, 3, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, TransactionCodeEditComponent_div_24_Template, 3, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, TransactionCodeEditComponent_div_25_Template, 3, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, TransactionCodeEditComponent_div_26_Template, 3, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, TransactionCodeEditComponent_div_27_Template, 3, 2, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "Maker");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Maker Time Stamp");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](57, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](63, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, "Record Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](75, "img", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, "Checker");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](87, "img", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](91, "Checker Time Stamp");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](93);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](94, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](100, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](101, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](104, "First Time Auth");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](106);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](107, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](111, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](112, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](113, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](114, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](115, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](116, "Auth Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](117, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](118);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](119, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](120, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](122, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](124, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](125, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](126, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](127, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](128, "Modification Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](129, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](130);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

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

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.transactionCodeEditForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.transactionCodeEditForm.get("transactionData")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.transactionCodeSummryData && !ctx.editFlag && ctx.transactionCodeSummryData.recordStatus == "OPEN" && ctx.roleCodes.edit);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.transactionCodeSummryData && !ctx.editFlag && (ctx.transactionCodeSummryData.verifiedStatus == "UNAUTHORIZED" || ctx.transactionCodeSummryData.verifiedStatus == "Unauthorized") && ctx.roleCodes.auth);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.transactionCodeSummryData && ctx.transactionCodeSummryData.recordStatus == "OPEN" && !ctx.editFlag && ctx.transactionCodeSummryData.verifiedOnce == "YES" && ctx.roleCodes.close);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.transactionCodeSummryData && ctx.transactionCodeSummryData.recordStatus == "CLOSED" && !ctx.editFlag && ctx.transactionCodeSummryData.verifiedOnce == "YES" && ctx.roleCodes.reopen);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.transactionCodeSummryData && !ctx.editFlag && ctx.transactionCodeSummryData.verifiedOnce == "NO" && ctx.roleCodes["delete"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.transactionCodeSummryData && ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](24, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.transactionCodeSummryData.creatorId);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](57, 18, ctx.transactionCodeSummryData.creatorDtStamp, "MM/dd/yyyy, h:mm a"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.transactionCodeSummryData.recordStatus);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.transactionCodeSummryData.verifiedBy);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](94, 21, ctx.transactionCodeSummryData.verifiedTime, "MM/dd/yyyy, h:mm a"));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.transactionCodeSummryData.verifiedOnce);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.transactionCodeSummryData.verifiedStatus);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.transactionCodeSummryData.modNo);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
        styles: [".isDisabled[_ngcontent-%COMP%] {\n  color: currentColor;\n  cursor: not-allowed;\n  pointer-events: none;\n  opacity: 0.5;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zYWN0aW9uLWNvZGUtZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUNKIiwiZmlsZSI6InRyYW5zYWN0aW9uLWNvZGUtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pc0Rpc2FibGVkIHtcclxuICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gIH0iXX0= */"]
      });

      var _TrnData = /*#__PURE__*/_createClass(function _TrnData() {
        _classCallCheck(this, _TrnData);
      });

      var _masterClass = /*#__PURE__*/_createClass(function _masterClass() {
        _classCallCheck(this, _masterClass);
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
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


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      31443);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      77382);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! angular-datatables */
      50481);

      var _c0 = function _c0() {
        return ["/system-param-maintenance/transaction-code-new"];
      };

      function TransactionCodeMaintenanceComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.roleCodes["new"].labelDescription);
        }
      }

      function TransactionCodeMaintenanceComponent_tr_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TransactionCodeMaintenanceComponent_tr_24_Template_a_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);

            var transactionData_r3 = restoredCtx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r4.sendingDataforEdit(transactionData_r3);
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

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](10, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TransactionCodeMaintenanceComponent_tr_24_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r6.onClickOfClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TransactionCodeMaintenanceComponent_tr_24_Template_button_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r7.onClickOfReopen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TransactionCodeMaintenanceComponent_tr_24_Template_button_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r8.OndeleteofUser(ctx_r8.trnsid, ctx_r8.currentUser);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TransactionCodeMaintenanceComponent_tr_24_Template_button_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r9.onClickOfAuth();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var transactionData_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", transactionData_r3.userId, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](transactionData_r3.verifiedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](transactionData_r3.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](10, 4, transactionData_r3.creatorDtStamp, "medium"));
        }
      }

      function TransactionCodeMaintenanceComponent_ng_container_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Please wait... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        }
      }

      var _c1 = function _c1() {
        return ["/dashboard"];
      };

      var _TransactionCodeMaintenanceComponent = /*#__PURE__*/function () {
        function _TransactionCodeMaintenanceComponent(apiService, toastService, router, cdr, ref, roleService) {
          _classCallCheck(this, _TransactionCodeMaintenanceComponent);

          this.apiService = apiService;
          this.toastService = toastService;
          this.router = router;
          this.cdr = cdr;
          this.ref = ref;
          this.roleService = roleService;
          this.dtOptions = {};
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
          this.isLoading = false;
          this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__.permissionsLabels();
          this.statusArr = ['Authorized', 'Unauthorized', 'Open', 'Close'];
          this.MedTransOperationDto = {
            userId: '',
            userIdLoggedIn: ''
          };
        }

        _createClass(_TransactionCodeMaintenanceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this54 = this;

            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 5,
              columnDefs: [{
                type: 'date',
                targets: [2]
              }],
              order: [[2, 'desc']],
              processing: true,
              lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]]
            };
            this.getTransactionCodeSummary();
            this.roleService.fetchScreenPermissions('Transaction Code Maintenance');
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this54.roleCodes = message;
            });
            console.log(this.roleCodes);
          }
        }, {
          key: "getTransactionCodeSummary",
          value: function getTransactionCodeSummary() {
            var _this55 = this;

            this.isLoading = true;
            this.apiService.gettingTransactionCodeSummary().subscribe(function (resp) {
              var _iterator2 = _createForOfIteratorHelper(resp.result),
                  _step2;

              try {
                var _loop2 = function _loop2() {
                  var item = _step2.value;
                  item.verifiedStatus = _this55.statusArr.find(function (i) {
                    return i.startsWith(item.verifiedStatus);
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

              _this55.transactionCodeData = resp.result;
              _this55.isLoading = false;

              _this55.cdr.markForCheck();

              _this55.dtTrigger.next();
            });
          }
        }, {
          key: "sendingDataforEdit",
          value: function sendingDataforEdit(data) {
            var _this56 = this;

            var userID = data.userId;
            localStorage.setItem('idValue', userID);
            this.apiService.gettingTransactionDatabyID(data.userId).subscribe(function (trndataResp) {
              _this56.transactionDataResp = trndataResp;
              localStorage.setItem('transactionCodeData', JSON.stringify(data));

              if (_this56.transactionDataResp) {
                _this56.apiService.setSummaryDataTransactionCode({
                  userId: data.userId,
                  creatorDtStamp: data.creatorDtStamp,
                  creatorId: data.creatorId,
                  modNo: data.modNo,
                  recordStatus: data.recordStatus,
                  verifiedStatus: data.verifiedStatus,
                  verifiedBy: data.verifiedBy,
                  verifiedOnce: data.verifiedOnce,
                  verifiedTime: data.verifiedTime,
                  medTransCode: _this56.transactionDataResp
                });

                _this56.router.navigate(['/system-param-maintenance/transaction-code-edit']);
              }
            });
          }
        }, {
          key: "auditLog",
          value: function auditLog() {
            if (this.transactionCodeSummryData.verifiedStatus === 'U' || this.transactionCodeSummryData.verifiedStatus === 'Unauthorized') {
              this.transactionCodeSummryData.verifiedStatus = 'UNAUTHORIZED';
            }

            if (this.transactionCodeSummryData.verifiedStatus === 'A' || this.transactionCodeSummryData.verifiedStatus === 'Authorized') {
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
            var _this57 = this;

            if (this.transactionCodeSummryData.creatorId === this.currentUser) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                title: 'Maker Cannot Authorized the Record!',
                icon: 'error'
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
                text: 'You are trying to Authorize the record. ' + ' Do you want to proceed?',
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
                  _this57.operation = 'verify';
                  _this57.MedTransOperationDto.userId = _this57.userID;
                  _this57.MedTransOperationDto.userIdLoggedIn = _this57.currentUser;
                  console.log("this.MedTransOperationDto", _this57.MedTransOperationDto);

                  _this57.apiService.onClckOfAuthTransactionCode(_this57.operation, _this57.MedTransOperationDto).subscribe(function (authResp) {
                    console.log(authResp);
                    _this57.transactionCodeSummryData = authResp;

                    _this57.auditLog();

                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Record is Authorized',
                      icon: 'success'
                    });
                  });
                }
              });
            }
          }
        }, {
          key: "onClickOfClose",
          value: function onClickOfClose() {
            var _this58 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Close the record. ' + ' Do you want to proceed?',
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
                _this58.operation = 'close';
                _this58.MedTransOperationDto.userId = _this58.userID;
                _this58.MedTransOperationDto.userIdLoggedIn = _this58.currentUser;
                console.log("this.MedTransOperationDto", _this58.MedTransOperationDto);

                _this58.apiService.onclickOfCloseTransactionCode(_this58.operation, _this58.MedTransOperationDto).subscribe(function (closeResp) {
                  console.log(closeResp);
                  _this58.transactionCodeSummryData = closeResp;

                  _this58.auditLog();

                  _this58.ref.markForCheck();

                  if (_this58.transactionCodeSummryData) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Record is Closed',
                      icon: 'success'
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Failed to Close the Recored!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "onClickOfReopen",
          value: function onClickOfReopen() {
            var _this59 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Reopen the record. ' + ' Do you want to proceed?',
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
                _this59.operation = 'reOpen';
                _this59.MedTransOperationDto.userId = _this59.userID;
                _this59.MedTransOperationDto.userIdLoggedIn = _this59.currentUser;

                _this59.apiService.onclickOfReopenTransactionCode(_this59.operation, _this59.MedTransOperationDto).subscribe(function (openResp) {
                  console.log(openResp);
                  _this59.transactionCodeSummryData = openResp;

                  _this59.auditLog();

                  _this59.ref.markForCheck();

                  if (_this59.transactionCodeSummryData) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Record Is Reopened',
                      icon: 'success'
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Failed to Reopen the Record!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "OndeleteofUser",
          value: function OndeleteofUser(UserId, currentUser) {
            var _this60 = this;

            console.log("USer", UserId);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Delete the record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info'
            }).then(function (result) {
              if (result.isConfirmed === true) {
                _this60.apiService.deleteTransactionData(_this60.userID, _this60.currentUser).subscribe(function (resp) {
                  if (resp == true) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Record Is Deleted',
                      icon: 'success'
                    });

                    _this60.router.navigateByUrl('/system-param-maintenance/transaction-code-summary');
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      title: 'Failed to Delete User Data!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.dtTrigger.unsubscribe();
          }
        }]);

        return _TransactionCodeMaintenanceComponent;
      }();

      _TransactionCodeMaintenanceComponent.ɵfac = function TransactionCodeMaintenanceComponent_Factory(t) {
        return new (t || _TransactionCodeMaintenanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_4__.RoleService));
      };

      _TransactionCodeMaintenanceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _TransactionCodeMaintenanceComponent,
        selectors: [["npr-transaction-code-maintenance"]],
        decls: 26,
        vars: 7,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["datatable", "", "id", "dbTable1", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "routerLink"], [1, "primaryColor", 2, "cursor", "pointer", 3, "click"], [2, "display", "flex", "gap", "50px"], ["color", "primary", 1, "iconBtn", 3, "click"], [1, "btnTooltip"], ["src", "assets/images/CROSS1.svg", "alt", "close"], ["src", "assets/images/open.svg", "alt", "Reopen"], ["src", "assets/images/delete.svg", "alt", "Delete"], ["src", "assets/images/authorize.svg", "alt", "Authorize"], [1, "loading-page-center"], [1, "indicator-progress"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"]],
        template: function TransactionCodeMaintenanceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Transaction Code Maintenance Summary");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, TransactionCodeMaintenanceComponent_div_6_Template, 3, 3, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "table", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "USER ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "AUTH STATUS");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Record Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "DATE");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, TransactionCodeMaintenanceComponent_tr_24_Template, 25, 7, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, TransactionCodeMaintenanceComponent_ng_container_25_Template, 5, 0, "ng-container", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.roleCodes["new"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.transactionCodeData);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, angular_datatables__WEBPACK_IMPORTED_MODULE_5__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/guards/can-deactivate.guard */
      50215);
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      31443);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-select/ng-select */
      88660);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function TransactionCodeNewComponent_ng_option_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ng-option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", element_r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r10);
        }
      }

      function TransactionCodeNewComponent_div_15_label_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Transaction Code ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function TransactionCodeNewComponent_div_15_label_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Transaction Description ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "margin-top": a0
        };
      };

      function TransactionCodeNewComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TransactionCodeNewComponent_div_15_label_2_Template, 4, 0, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, TransactionCodeNewComponent_div_15_label_5_Template, 2, 0, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TransactionCodeNewComponent_div_15_Template_a_click_9_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16);

            var i_r12 = restoredCtx.index;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r15.removeData(i_r12);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r12 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroupName", i_r12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", i_r12 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonly", ctx_r1.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", i_r12 == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonly", ctx_r1.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c0, i_r12 === 0 ? "50px" : "10px"));
        }
      }

      function TransactionCodeNewComponent_div_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TransactionCodeNewComponent_div_26_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r17.enableEditFlag();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function TransactionCodeNewComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TransactionCodeNewComponent_div_27_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r19.onClickOfAuth();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function TransactionCodeNewComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TransactionCodeNewComponent_div_28_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r21.onClickOfClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function TransactionCodeNewComponent_div_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TransactionCodeNewComponent_div_29_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r23.onClickOfReopen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Reopen");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function TransactionCodeNewComponent_div_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TransactionCodeNewComponent_div_30_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r25.OndeleteofUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function TransactionCodeNewComponent_div_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TransactionCodeNewComponent_div_31_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r27.onSubmit(ctx_r27.transactionCodeForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r7.transactionCodeForm.controls.transactionData.invalid || ctx_r7.submit);
        }
      }

      function TransactionCodeNewComponent_div_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TransactionCodeNewComponent_div_32_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r29.updateSubmitofForm(ctx_r29.transactionCodeForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r8.transactionCodeForm.controls.transactionData.invalid || ctx_r8.submit);
        }
      }

      function TransactionCodeNewComponent_div_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Maker");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Maker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](26, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Record Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Checker");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Checker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](63, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](69, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "First Time Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](81, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, "Auth Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](93, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, "Modification Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r9.auditlogData.creatorId);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](26, 8, ctx_r9.auditlogData.creatorDtStamp));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r9.auditlogData.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r9.auditlogData.verifierId);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](63, 10, ctx_r9.auditlogData.verifierDtStamp));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r9.auditlogData.verifiedOnce);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r9.auditlogData.verifiedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r9.auditlogData.versionNo);
        }
      }

      var _c1 = "/system-param-maintenance/transaction-code-summary";

      var _c2 = function _c2() {
        return [_c1];
      };

      var _TransactionCodeNewComponent = /*#__PURE__*/function () {
        function _TransactionCodeNewComponent(formBuilder, apiService, canDeactivateGuard, toastService, router, cdr) {
          _classCallCheck(this, _TransactionCodeNewComponent);

          this.formBuilder = formBuilder;
          this.apiService = apiService;
          this.canDeactivateGuard = canDeactivateGuard;
          this.toastService = toastService;
          this.router = router;
          this.cdr = cdr;
          this.showList = false;
          this.showSubmit = false;
          this.editFlag = false;
          this.showDelete = false;
          this.submitAccBtn = false;
          this.formTouched = true;
          this.showDialog = false;
          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        }

        _createClass(_TransactionCodeNewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentUser = localStorage.getItem("userFromLogin");
            this.transactionCodeForm = this.formBuilder.group({
              userId: [""],
              creatorId: [""],
              transactionData: this.formBuilder.array([this.createtransactionCodeGroup()]) // verifiedBy: [""],
              // verifiedTime: [""],
              // recordStatus: [""],
              // verifiedOnce: [""],
              // modNo: [""],
              // verifiedStatus: [""],
              // creatorDtStamp: [""],

            });
            this.getUserName();
          }
        }, {
          key: "auditLog",
          value: function auditLog() {
            if (this.auditlogData.verifiedStatus == 'U') {
              this.auditlogData.verifiedStatus = 'UNAUTHORIZED';
            }

            if (this.auditlogData.authStatus == 'A') {
              this.auditlogData.authStatus = 'AUTHORIZED';
            }

            if (this.auditlogData.recordStatus == 'O') {
              this.auditlogData.recordStatus = 'OPEN';
            }

            if (this.auditlogData.recordStatus == 'C') {
              this.auditlogData.recordStatus = 'CLOSED';
            }

            if (this.auditlogData.verifiedOnce == 'N') {
              this.auditlogData.verifiedOnce = 'NO';
            }

            if (this.auditlogData.verifiedOnce == 'Y') {
              this.auditlogData.verifiedOnce = 'YES';
            }
          }
        }, {
          key: "createtransactionCodeGroup",
          value: function createtransactionCodeGroup() {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
              'trnDesc': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
              'trnCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('')
            });
          }
        }, {
          key: "removeData",
          value: function removeData(i) {
            var transactionData = this.transactionCodeForm.get('transactionData');
            transactionData.removeAt(i);
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
            var _this61 = this;

            this.apiService.getUserName().subscribe(function (userName) {
              _this61.userName = userName.sort();
              _this61.usersList = [];
              _this61.allUserID = _this61.userName;
              var list = document.getElementById('allusers');

              _this61.allUserID.forEach(function (item) {
                var option = document.createElement('option');
                option.value = item;
                list.appendChild(option);
              });

              console.log(list);

              if (_this61.userName) {
                console.log(_this61.userName);
              } else {
                console.log("No name");
              }
            });
          }
        }, {
          key: "canExit",
          value: function canExit() {
            var _this62 = this;

            var isExit = false;

            if (this.transactionCodeForm.touched && this.formTouched == true) {
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

                  _this62.cdr.markForCheck();

                  return isExit;
                } else {
                  isExit = false;

                  _this62.cdr.markForCheck();

                  return isExit;
                }
              });
            } else {
              isExit = true;
              return new Promise(function (resolve, reject) {
                if (isExit === true) {
                  isExit = true;

                  _this62.cdr.markForCheck();

                  resolve(true);
                }
              });
            }
          } // long id;
          // String trnCode;
          // String trnDesc;
          // String userId;

        }, {
          key: "onSubmit",
          value: function onSubmit(transactionCodeForm) {
            var _this63 = this;

            this.formValues = transactionCodeForm.transactionData;
            this.createrId = transactionCodeForm.userId;
            console.log("transactionCodeForm", this.formValues, this.createrId, this.currentUser);
            this.apiService.saveTrnCode(this.formValues, this.createrId, this.currentUser).subscribe(function (res) {
              _this63.auditlogData = res;

              _this63.auditLog();

              console.log("Audit Data", _this63.auditlogData, _this63.auditlogData.creatorId);

              if (_this63.auditlogData) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Record is Created',
                  icon: 'success'
                });
                _this63.submit = true;
                _this63.formTouched = !_this63.transactionCodeForm.touched;
              } else {
                // this.toastService.errorMessage('Failed to Save Data!', '');
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Failed to Save Data.',
                  icon: 'error'
                });
              }
            }, function (error) {
              if (_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpErrorResponse) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: 'Server Error!',
                  icon: 'error'
                });
              }
            });
          }
        }, {
          key: "enableEditFlag",
          value: function enableEditFlag() {
            this.submit = false;
            this.showSubmit = true;
          }
        }, {
          key: "updateSubmitofForm",
          value: function updateSubmitofForm(transactionCodeForm) {
            var _this64 = this;

            this.formValues = transactionCodeForm.transactionData;
            this.createrId = transactionCodeForm.userId;
            console.log("transactionCodeForm", this.formValues, this.createrId, this.currentUser);
            this.apiService.saveTrnCode(this.formValues, this.createrId, this.currentUser).subscribe(function (res) {
              _this64.auditlogData = res;

              if (_this64.auditlogData) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Record is Created',
                  icon: 'success'
                });
                _this64.showSubmit = false;
                _this64.formTouched = !_this64.transactionCodeForm.touched;
              } else {
                // this.toastService.errorMessage('Failed to Save Data!', '');
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Failed to Save Data.',
                  icon: 'error'
                });
              }
            }, function (error) {
              if (_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpErrorResponse) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: 'Server Error!',
                  icon: 'error'
                });
              }
            });
          }
        }, {
          key: "onClickOfAuth",
          value: function onClickOfAuth() {
            var _this65 = this;

            if (this.auditlogData.creatorId == this.currentUser) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: 'Maker Cannot Authorized the Record!',
                icon: 'error'
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
                text: 'You are trying to Authorize the record. ' + ' Do you want to proceed?',
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
                  var payload = {};
                  payload.externalSystemName = _this65.auditlogData.extSysName;
                  payload.loggedInUser = _this65.currentUser, payload.processCode = _this65.auditlogData.processCode;
                  _this65.extName = _this65.auditlogData.extSysName;

                  _this65.apiService.authProcessCodeRecord(payload).subscribe(function (authResp) {
                    _this65.auditlogData = authResp;
                    console.log("Auth", _this65.auditlogData);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: ' Record is Authorized',
                      icon: 'success'
                    });

                    _this65.auditLog();
                  });
                }
              });
            }
          }
        }, {
          key: "onClickOfClose",
          value: function onClickOfClose() {
            var _this66 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Close the record. ' + ' Do you want to proceed?',
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
                _this66.auditlogData.modifiedBy = _this66.currentUser;
                _this66.extName = _this66.auditlogData.extSysName;
                var payload = {};
                payload.externalSystemName = _this66.auditlogData.extSysName;
                payload.loggedInUser = _this66.currentUser, payload.processCode = _this66.auditlogData.processCode;

                _this66.apiService.closingProcessCodeRecord(payload).subscribe(function (closeResp) {
                  console.log(closeResp);
                  _this66.auditlogData = closeResp;

                  if (_this66.auditlogData) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record is Closed',
                      icon: 'success'
                    });

                    _this66.auditLog();
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Failed to Close the Recored!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "onClickOfReopen",
          value: function onClickOfReopen() {
            var _this67 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Reopen the record. ' + ' Do you want to proceed?',
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
                var payload = {};
                payload.externalSystemName = _this67.auditlogData.extSysName;
                payload.loggedInUser = _this67.currentUser, payload.processCode = _this67.auditlogData.processCode;
                _this67.extName = _this67.auditlogData.extSysName;

                _this67.apiService.reopeningProcessCodeRecord(payload).subscribe(function (openResp) {
                  console.log(openResp);
                  _this67.auditlogData = openResp;

                  if (_this67.auditlogData) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record is Reopened',
                      icon: 'success'
                    });

                    _this67.auditLog();
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Failed to Reoped the Recored!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "OndeleteofUser",
          value: function OndeleteofUser() {
            var _this68 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Delete the record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info'
            }).then(function (result) {
              if (result.isConfirmed === true) {
                _this68.extName = _this68.auditlogData.extSysName;

                _this68.apiService.deleteProcessRecord(_this68.extName, _this68.auditlogData.processCode, _this68.currentUser).subscribe(function (resp) {
                  console.log(resp);

                  if (resp === "extSys has been deleted!") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record is Deleted',
                      icon: 'success'
                    });

                    _this68.router.navigateByUrl('/external-system/processCodeMapping');
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: 'Failed to Delete User Data!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  console.log(error.error.message);

                  if (error.error.message === "extSys has been deleted!") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record is Deleted',
                      icon: 'success'
                    });

                    _this68.router.navigateByUrl('/external-system/processCodeMapping');
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: 'Failed to Delete User Data!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }]);

        return _TransactionCodeNewComponent;
      }();

      _TransactionCodeNewComponent.ɵfac = function TransactionCodeNewComponent_Factory(t) {
        return new (t || _TransactionCodeNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_2__.CanDeactivateGuard), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef));
      };

      _TransactionCodeNewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _TransactionCodeNewComponent,
        selectors: [["npr-transaction-code-new"]],
        decls: 37,
        vars: 13,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "formStyle", 3, "formGroup"], [1, "dbCardStyle"], [1, "col-lg-4", "col-sm-6"], ["for", "roleName", 1, "formLbl"], ["id", "outlineNgSelect", "formControlName", "userId", "aria-label", "Default select example", 1, "form-select", 2, "width", "200px"], ["hidden", "", "value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formArrayName", "transactionData", 1, "row", "gy-4"], ["class", "row", "style", "margin-top: 20px;", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "col-sm"], [1, "row", "g-3"], [1, "col-auto"], [1, "addIcon", "primarybg", 3, "click"], ["src", "assets/images/plus-icon.svg", "alt", "..."], [1, "col-lg-12"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], ["class", "col-auto", 4, "ngIf"], ["href", "javascript:void(0)", "routerLinkActive", "router-link-active", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["class", "dbCardStyle", 4, "ngIf"], [3, "value"], [1, "row", 2, "margin-top", "20px", 3, "formGroupName"], [1, "col-lg-4", "col-sm-4"], ["for", "roleName", "class", "formLbl", 4, "ngIf"], ["id", "transactionCode", "formControlName", "trnCode", "placeholder", "Transaction Code", "value", "", "required", "", 1, "form-control", 3, "readonly"], ["id", "transactionDes", "formControlName", "trnDesc", "type", "text", "placeholder", "Transaction Description", "value", "", 1, "form-control", 3, "readonly"], [3, "ngStyle"], [2, "cursor", "pointer", 3, "click"], [1, "ddIcon"], ["src", "assets/images/delete-icon.svg", "alt", "..."], [1, "colorRed"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["color", "warn", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], ["src", "assets/images/maker-icon.svg", "alt", "..."], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], ["src", "assets/images/checker-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/auth-status-icon.svg", "alt", "..."]],
        template: function TransactionCodeNewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Transaction Code Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "User ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ng-select", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ng-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "--Please select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, TransactionCodeNewComponent_ng_option_12_Template, 2, 2, "ng-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, TransactionCodeNewComponent_div_15_Template, 12, 8, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TransactionCodeNewComponent_Template_a_click_21_listener() {
              return ctx.addFormGroup();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, TransactionCodeNewComponent_div_26_Template, 3, 0, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, TransactionCodeNewComponent_div_27_Template, 3, 0, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, TransactionCodeNewComponent_div_28_Template, 3, 0, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, TransactionCodeNewComponent_div_29_Template, 3, 0, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, TransactionCodeNewComponent_div_30_Template, 3, 0, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, TransactionCodeNewComponent_div_31_Template, 3, 1, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, TransactionCodeNewComponent_div_32_Template, 3, 1, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, TransactionCodeNewComponent_div_36_Template, 100, 12, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.transactionCodeForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.allUserID);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.transactionCodeForm.get("transactionData")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.auditlogData && ctx.submit && ctx.auditlogData.recordStatus == "OPEN");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.auditlogData && ctx.submit && ctx.auditlogData.verifiedStatus == "UNAUTHORIZED");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.auditlogData && ctx.auditlogData.recordStatus == "OPEN" && ctx.submit && ctx.auditlogData.verifiedOnce == "YES");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.auditlogData && ctx.auditlogData.recordStatus == "CLOSED" && ctx.submit && ctx.auditlogData.verifiedOnce == "YES");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.auditlogData && ctx.submit && ctx.auditlogData.verifiedOnce == "NO");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.auditlogData && !ctx.showSubmit);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showSubmit);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](12, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.auditlogData);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgOptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkActive, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgStyle],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
        styles: [".form-class[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #797979;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-bottom: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-left: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-right: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.isDisabled[_ngcontent-%COMP%] {\n  color: currentColor;\n  cursor: not-allowed;\n  pointer-events: none;\n  opacity: 0.4;\n  text-decoration: none;\n}\n\n.deleteDiv[_ngcontent-%COMP%] {\n  margin-top: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zYWN0aW9uLWNvZGUtbmV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFFQSx3RUFBQTtBQUFKOztBQUdBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBQUo7O0FBSUU7RUFDRSxnQkFBQTtBQURKIiwiZmlsZSI6InRyYW5zYWN0aW9uLWNvZGUtbmV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY2xhc3Mge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzc5Nzk3OTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dFxyXG59XHJcblxyXG4uaXNEaXNhYmxlZCB7XHJcbiAgICBjb2xvcjogY3VycmVudENvbG9yO1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICB9XHJcbiBcclxuICAuZGVsZXRlRGl2e1xyXG4gICAgbWFyZ2luLXRvcDoxM3B4OyAgfVxyXG4iXX0= */"]
      });

      var _TrnDataMaster = /*#__PURE__*/_createClass(function _TrnDataMaster() {
        _classCallCheck(this, _TrnDataMaster);
      });
      /***/

    },

    /***/
    58558:
    /*!*************************************************************************************************************************************!*\
      !*** ./src/app/views/system-param-maintenance/user-gcc-ac-maintenance/user-account-class-edit/user-account-class-edit.component.ts ***!
      \*************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserAccountClassEditComponent": function UserAccountClassEditComponent() {
          return (
            /* binding */
            _UserAccountClassEditComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function UserAccountClassEditComponent_form_18_div_9_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Disallow");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function UserAccountClassEditComponent_form_18_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Allow");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, UserAccountClassEditComponent_form_18_div_9_div_6_Template, 5, 0, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.hideDisAllowAcc);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "isDisabled": a0
        };
      };

      function UserAccountClassEditComponent_form_18_div_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserAccountClassEditComponent_form_18_div_23_Template_a_click_10_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);

            var data_r11 = restoredCtx.$implicit;
            var i_r12 = restoredCtx.index;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r13.deleteACRowData(data_r11.value, i_r12);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r12 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readonly", !ctx_r3.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readonly", !ctx_r3.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, !ctx_r3.editFlag));
        }
      }

      function UserAccountClassEditComponent_form_18_div_35_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserAccountClassEditComponent_form_18_div_35_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r15.enableEditFlag();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function UserAccountClassEditComponent_form_18_div_36_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserAccountClassEditComponent_form_18_div_36_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r17.onClickOfAuthACC(ctx_r17.accountClassEditForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function UserAccountClassEditComponent_form_18_div_37_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserAccountClassEditComponent_form_18_div_37_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r19.onClickOfCloseACC(ctx_r19.accountClassEditForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function UserAccountClassEditComponent_form_18_div_38_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserAccountClassEditComponent_form_18_div_38_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r21.onClickOfReopenACC(ctx_r21.accountClassEditForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Reopen");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function UserAccountClassEditComponent_form_18_div_39_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserAccountClassEditComponent_form_18_div_39_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r23.OndeleteofUserACC(ctx_r23.getuserACCSummarydata.creatorId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function UserAccountClassEditComponent_form_18_div_40_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserAccountClassEditComponent_form_18_div_40_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            ctx_r25.onSubmitaccountClassEditForm(ctx_r25.accountClassEditForm.value);
            return ctx_r25.clicked = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _c1 = "/system-param-maintenance/user-gl-acc-maintenance-summary";

      var _c2 = function _c2() {
        return [_c1];
      };

      function UserAccountClassEditComponent_form_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "User Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Code Permission");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, UserAccountClassEditComponent_form_18_div_9_Template, 7, 1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Account Class ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Account Class Description ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, UserAccountClassEditComponent_form_18_div_23_Template, 12, 6, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserAccountClassEditComponent_form_18_Template_a_click_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r27.addaccountClassEditFormGroup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, UserAccountClassEditComponent_form_18_div_35_Template, 3, 0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, UserAccountClassEditComponent_form_18_div_36_Template, 3, 0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, UserAccountClassEditComponent_form_18_div_37_Template, 3, 0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, UserAccountClassEditComponent_form_18_div_38_Template, 3, 0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, UserAccountClassEditComponent_form_18_div_39_Template, 3, 0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, UserAccountClassEditComponent_form_18_div_40_Template, 3, 0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.accountClassEditForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.hideAllowAcc);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.accountClassEditForm.get("medUserGlCodeDetails")["controls"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c0, !ctx_r0.editFlag));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.getuserACCSummarydata && !ctx_r0.editFlag && ctx_r0.getuserACCSummarydata.recordStatus == "OPEN");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.getuserACCSummarydata && !ctx_r0.editFlag && ctx_r0.getuserACCSummarydata.approvedStatus == "UNAUTHORIZED");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.getuserACCSummarydata && ctx_r0.getuserACCSummarydata.recordStatus == "OPEN" && ctx_r0.getuserACCSummarydata.approvedEver == "YES" && !ctx_r0.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.getuserACCSummarydata && ctx_r0.getuserACCSummarydata.recordStatus == "CLOSED" && ctx_r0.getuserACCSummarydata.approvedEver == "YES" && !ctx_r0.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.getuserACCSummarydata && ctx_r0.getuserACCSummarydata.approvedEver == "NO" && !ctx_r0.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.getuserACCSummarydata && ctx_r0.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](13, _c2));
        }
      }

      function UserAccountClassEditComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Maker");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Maker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "img", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Record Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "img", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Checker");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "img", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Checker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](63, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "img", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "First Time Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "img", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Auth Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "img", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Modification Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getuserACCSummarydata.creatorId);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](26, 8, ctx_r1.getuserACCSummarydata.createdTime));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getuserACCSummarydata.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getuserACCSummarydata.approverId);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](63, 10, ctx_r1.getuserACCSummarydata.approvedTime));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getuserACCSummarydata.approvedEver);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getuserACCSummarydata.approvedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getuserACCSummarydata.modNo);
        }
      }

      var _UserAccountClassEditComponent = /*#__PURE__*/function () {
        function _UserAccountClassEditComponent(apiService, router, formBuilder) {
          _classCallCheck(this, _UserAccountClassEditComponent);

          this.apiService = apiService;
          this.router = router;
          this.formBuilder = formBuilder;
          this.clicked = false;
          this.editFlag = false;
          this.editAccFlag = false;
          this.formTouched = true;
          this.hideAllowAcc = true;
          this.hideDisAllowAcc = true;
        }

        _createClass(_UserAccountClassEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentUser = localStorage.getItem("userFromLogin");
            this.disallowglCode = localStorage.getItem("DISALLOWACCCLASSUSER");
            this.allowglCode = localStorage.getItem("ALLOWACCCLASSUSER");
            console.log(this.allowglCode, this.disallowglCode);

            if (this.disallowglCode) {
              if (JSON.parse(this.disallowglCode)) {
                console.log("Disallow");
                this.hideDisAllowAcc = true;
                this.hideAllowAcc = false;
              }
            }

            if (this.allowglCode) {
              if (JSON.parse(this.allowglCode)) {
                console.log("Allow");
                this.hideAllowAcc = true;
                this.hideDisAllowAcc = false;
              }
            }

            this.accountClassEditForm = this.formBuilder.group({
              userGlCodeId: [""],
              type: ["AC"],
              permission: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
              userId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
              medUserGlCodeDetails: this.formBuilder.array([this.createaccountClassDataGroup()]),
              creatorId: [""],
              createdTime: [""],
              approverId: [""],
              approvedTime: [""],
              versionNo: [],
              approvedStatus: [""],
              approvedEver: [""],
              recordStatus: [""]
            });
            this.getuserACCdata();
          }
        }, {
          key: "createaccountClassDataGroup",
          value: function createaccountClassDataGroup() {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
              'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
              'glCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
              'glDesc': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
              'userGlCodeId': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('')
            });
          }
        }, {
          key: "getuserACCdata",
          value: function getuserACCdata() {
            var _this69 = this;

            this.apiService.getuserACCSummary().subscribe(function (summaryData) {
              _this69.getuserACCSummarydata = summaryData;
              var retrievedObject = localStorage.getItem('getuserACCSummarydata');
              _this69.getuserACCSummarydata = JSON.parse(retrievedObject);
              _this69.userID = _this69.getuserACCSummarydata.creatorId;

              _this69.auditLogforACC();

              var permission = _this69.getuserACCSummarydata.permission;

              _this69.accountClassEditForm.controls.userId.setValue(_this69.getuserACCSummarydata.creatorId);

              var userGlCodeId = _this69.getuserACCSummarydata.userGlCodeId;

              _this69.accountClassEditForm.controls.permission.setValue(permission);

              _this69.accountClassEditForm.controls.userGlCodeId.setValue(userGlCodeId);
            });
            this.addACCRowdata.removeAt(0);
            this.getuserACCSummarydata.medUserGlCodeDetails.forEach(function (element) {
              var row = _this69.formBuilder.group({
                id: [element.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
                glCode: [element.glCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
                glDesc: [element.glDesc, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
                userGlCodeId: [element.userGlCodeId, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
              });

              _this69.addACCRowdata.push(row);
            });
          }
        }, {
          key: "addACCRowdata",
          get: function get() {
            return this.accountClassEditForm.get('medUserGlCodeDetails');
          }
        }, {
          key: "addaccountClassEditFormGroup",
          value: function addaccountClassEditFormGroup() {
            var medUserGlCodeDetails = this.accountClassEditForm.get('medUserGlCodeDetails');
            medUserGlCodeDetails.push(this.createaccountClassDataGroup());
          }
        }, {
          key: "auditLogforACC",
          value: function auditLogforACC() {
            var _a, _b, _c, _d, _e, _f;

            if (((_a = this.getuserACCSummarydata) === null || _a === void 0 ? void 0 : _a.approvedStatus) === 'U') {
              this.getuserACCSummarydata.approvedStatus = 'UNAUTHORIZED';
            }

            if (((_b = this.getuserACCSummarydata) === null || _b === void 0 ? void 0 : _b.approvedStatus) === 'A') {
              this.getuserACCSummarydata.approvedStatus = 'AUTHORIZED';
            }

            if (((_c = this.getuserACCSummarydata) === null || _c === void 0 ? void 0 : _c.recordStatus) === 'O') {
              this.getuserACCSummarydata.recordStatus = 'OPEN';
            }

            if (((_d = this.getuserACCSummarydata) === null || _d === void 0 ? void 0 : _d.recordStatus) === 'C') {
              this.getuserACCSummarydata.recordStatus = 'CLOSED';
            }

            if (((_e = this.getuserACCSummarydata) === null || _e === void 0 ? void 0 : _e.approvedEver) === 'N') {
              this.getuserACCSummarydata.approvedEver = 'NO';
            }

            if (((_f = this.getuserACCSummarydata) === null || _f === void 0 ? void 0 : _f.approvedEver) === 'Y') {
              this.getuserACCSummarydata.approvedEver = 'YES';
            }
          }
        }, {
          key: "enableEditFlag",
          value: function enableEditFlag() {
            this.editFlag = true;
          }
        }, {
          key: "onClickOfAuthACC",
          value: function onClickOfAuthACC(accFormValues) {
            var _this70 = this;

            if (this.getuserACCSummarydata.creatorId === this.currentUser) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: 'Maker Cannot Authorized the Record!',
                icon: 'error'
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
                text: 'You are trying to Authorize the record. ' + ' Do you want to proceed?',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                // confirmButtonText: 'PROCEED.'
                cancelButtonText: 'NO',
                confirmButtonText: 'YES',
                'icon': 'info'
              }).then(function (result) {
                if (result.isConfirmed === true) {
                  _this70.operation = 'auth';
                  accFormValues.creatorId = _this70.getuserACCSummarydata.creatorId;

                  _this70.apiService.onClckOfOperationACCUser(_this70.operation, _this70.currentUser, accFormValues).subscribe(function (authResp) {
                    console.log(authResp);
                    _this70.getuserACCSummarydata = authResp;

                    _this70.auditLogforACC();

                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record is Authorized',
                      icon: 'success'
                    });
                  });
                }
              });
            }
          }
        }, {
          key: "onClickOfCloseACC",
          value: function onClickOfCloseACC(accFormValues) {
            var _this71 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Close the record. ' + ' Do you want to proceed?',
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
                _this71.operation = 'close';
                accFormValues.creatorId = _this71.getuserACCSummarydata.creatorId;

                _this71.apiService.onClckOfOperationACCUser(_this71.operation, _this71.currentUser, accFormValues).subscribe(function (closeResp) {
                  console.log(closeResp);
                  _this71.getuserACCSummarydata = closeResp;

                  _this71.auditLogforACC();

                  if (_this71.getuserACCSummarydata) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record is Closed',
                      icon: 'success'
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Failed to Close the Record!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "onClickOfReopenACC",
          value: function onClickOfReopenACC(accFormValues) {
            var _this72 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Reopen the record. ' + ' Do you want to proceed?',
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
                _this72.operation = 'open';
                accFormValues.creatorId = _this72.getuserACCSummarydata.creatorId;

                _this72.apiService.onClckOfOperationACCUser(_this72.operation, _this72.currentUser, accFormValues).subscribe(function (closeResp) {
                  console.log(closeResp);
                  _this72.getuserACCSummarydata = closeResp;

                  _this72.auditLogforACC();

                  if (_this72.getuserACCSummarydata) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record is Reopened',
                      icon: 'success'
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Failed to Reopen the Record!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "OndeleteofUserACC",
          value: function OndeleteofUserACC(UserId) {
            var _this73 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Delete the record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info'
            }).then(function (result) {
              if (result.isConfirmed === true) {
                var userGlCodeId = _this73.getuserACCSummarydata.userGlCodeId;

                _this73.apiService.deleteUserACC(userGlCodeId, UserId).subscribe(function (resp) {
                  if (resp == true) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record Is Deleted',
                      icon: 'success'
                    });

                    _this73.router.navigateByUrl('/system-param-maintenance/user-gl-acc-maintenance-summary');
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Failed to Delete User Data!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "deleteACRowData",
          value: function deleteACRowData(data, i) {
            var _this74 = this;

            var medUserGlCodeDetails = this.accountClassEditForm.get('medUserGlCodeDetails');

            if (medUserGlCodeDetails.at(i).get('glCode').value && medUserGlCodeDetails.at(i).get('glDesc').value) {
              // transactionData.removeAt(i);
              console.log("this.medUserGlCodeDetails.formValues", data, data.id);
              this.apiService.deleteuserAccountClassRow(data.id).subscribe(function (resp) {
                _this74.deleteRowResp = resp;

                if (_this74.deleteRowResp == true) {
                  {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Deleted Row Data!',
                      icon: 'success'
                    });
                  }
                  medUserGlCodeDetails.removeAt(i); // this.submitFlag = true;
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Failed to Delete Row Data!',
                    icon: 'error'
                  });
                }
              }, function (error) {
                if (_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    text: 'Server Error!',
                    icon: 'error'
                  });
                }
              });
            } else {// transactionData.removeAt(i);
            }
          }
        }, {
          key: "onSubmitaccountClassEditForm",
          value: function onSubmitaccountClassEditForm(accountClassForm) {
            var _this75 = this;

            accountClassForm.creatorId = this.currentUser;
            var accountData = accountClassForm.medUserGlCodeDetails;
            this.operation = 'update';
            this.apiService.updateUserACCCodeData(accountClassForm, this.operation, this.currentUser).subscribe(function (saveaccresp) {
              _this75.getuserACCSummarydata = saveaccresp;

              if (_this75.getuserACCSummarydata) {
                // this.submitAccBtn = true;
                _this75.editFlag = true; // this.submit2 = false;

                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Record is Updated',
                  icon: 'success'
                }); // this.accountClassForm.reset();
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Failed to Update Data.',
                  icon: 'error'
                });
              }
            }, function (error) {
              if (_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: 'Server Error!',
                  icon: 'error'
                });
              }
            });
          }
        }]);

        return _UserAccountClassEditComponent;
      }();

      _UserAccountClassEditComponent.ɵfac = function UserAccountClassEditComponent_Factory(t) {
        return new (t || _UserAccountClassEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder));
      };

      _UserAccountClassEditComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _UserAccountClassEditComponent,
        selectors: [["npr-user-account-class-edit"]],
        decls: 21,
        vars: 2,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "tabStyleCol"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], ["role", "presentation", 1, "nav-item"], ["id", "profile-tab", "data-bs-toggle", "tab", "data-bs-target", "#profile", "type", "button", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link", "disable"], ["id", "home-tab", "data-bs-toggle", "tab", "data-bs-target", "#home", "type", "button", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", "active"], [1, "dbCardStyle"], ["id", "myTabContent", 1, "tab-content"], ["id", "home", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "titleStyle", "mb-3", "mb-md-4"], [1, "smTitle"], ["class", "formStyle", 3, "formGroup", 4, "ngIf"], ["class", "dbCardStyle", 4, "ngIf"], [1, "formStyle", 3, "formGroup"], [1, "row", "gy-4"], [1, "col-lg-4", "col-sm-6"], ["for", "permission", 1, "formLbl"], ["id", "userId", "type", "text", "formControlName", "userId", "readonly", "", "placeholder", "user Id", "value", "", 1, "form-control"], [1, "col-lg-4"], ["for", "roleName", 1, "formLbl"], ["class", "row g-2", 4, "ngIf"], ["formArrayName", "medUserGlCodeDetails"], [1, "row", "gy-2"], [1, "colorRed"], ["class", "row gy-2", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "col-lg-12"], [1, "row", "g-3", "pb-3", "pt-3"], [1, "col-sm"], [1, "row", "g-3"], [1, "col-auto"], [2, "margin-top", "20px"], [1, "addIcon", "primarybg", 3, "ngClass", "click"], ["src", "assets/images/plus-icon.svg", "alt", "..."], [1, "col-sm-auto"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], ["class", "col-auto", 4, "ngIf"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [1, "row", "g-2"], [1, "col-lg-6"], [1, "radio", "radioStyle"], ["id", "radio-5", "formControlName", "permission", "value", "Allow", "type", "radio"], ["for", "radio-5", 1, "radio-label"], ["class", "col-lg-6", 4, "ngIf"], ["id", "radio-6", "formControlName", "permission", "type", "radio", "value", "Disallow"], ["for", "radio-6", 1, "radio-label"], [1, "row", "gy-2", 3, "formGroupName"], ["id", "accClass", "type", "text", "required", "", "formControlName", "glCode", "placeholder", "Account Class", "value", "", 1, "form-control", 3, "readonly"], ["id", "accClassDesc", "type", "text", "required", "", "formControlName", "glDesc", "placeholder", "Account Class Description", "value", "", 1, "form-control", 3, "readonly"], [2, "margin-top", "10px"], [1, "deleteIcon2", 3, "ngClass", "click"], ["src", "assets/images/delete-icon.svg", "alt", "..."], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["color", "warn", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], ["src", "assets/images/maker-icon.svg", "alt", "..."], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], ["src", "assets/images/checker-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/auth-status-icon.svg", "alt", "..."]],
        template: function UserAccountClassEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "User Account Restriction");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "User General Ledger");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Account Class");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "h2", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Account Class");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, UserAccountClassEditComponent_form_18_Template, 44, 14, "form", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, UserAccountClassEditComponent_div_20_Template, 100, 12, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.accountClassEditForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.getuserACCSummarydata);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
        styles: [".disable[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  pointer-events: none;\n  opacity: 0.4;\n  text-decoration: none;\n}\n\n.isDisabled[_ngcontent-%COMP%] {\n  color: currentColor;\n  cursor: not-allowed;\n  pointer-events: none;\n  opacity: 0.5;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItYWNjb3VudC1jbGFzcy1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUNFO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBRUoiLCJmaWxlIjoidXNlci1hY2NvdW50LWNsYXNzLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzYWJsZXtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgLmlzRGlzYWJsZWQge1xyXG4gICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgfSJdfQ== */"]
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! angular-datatables */
      50481);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      79441);
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      77382);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      31443);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ng-select/ng-select */
      88660);

      var _c0 = "/system-param-maintenance/user-gl-acc-maintenance-new";

      var _c1 = function _c1() {
        return [_c0];
      };

      function UserGccAcMaintenanceComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](2, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.roleCodes["new"].labelDescription);
        }
      }

      function UserGccAcMaintenanceComponent_ng_option_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ng-option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", element_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r4);
        }
      }

      function UserGccAcMaintenanceComponent_tr_43_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserGccAcMaintenanceComponent_tr_43_Template_a_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);

            var trnData_r5 = restoredCtx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r6.sendingUserGCCforEdit(trnData_r5);
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

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserGccAcMaintenanceComponent_tr_43_Template_a_click_14_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);

            var trnData_r5 = restoredCtx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r8.sendingUserGCCforEdit(trnData_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var trnData_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](trnData_r5.userId);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](trnData_r5.permission);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](trnData_r5.approvedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](trnData_r5.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](12, 5, trnData_r5.createdTime, "medium"));
        }
      }

      function UserGccAcMaintenanceComponent_tr_62_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserGccAcMaintenanceComponent_tr_62_Template_a_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);

            var accData_r9 = restoredCtx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r10.sendingUserACCforEdit(accData_r9);
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

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var accData_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](accData_r9.userId);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](accData_r9.permission);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](accData_r9.approvedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](accData_r9.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](12, 5, accData_r9.createdTime, "medium"));
        }
      }

      var _c2 = function _c2() {
        return ["/dashboard"];
      };

      var _UserGccAcMaintenanceComponent = /*#__PURE__*/function () {
        function _UserGccAcMaintenanceComponent(apiService, roleService, formBuilder, toastService, router) {
          _classCallCheck(this, _UserGccAcMaintenanceComponent);

          this.apiService = apiService;
          this.roleService = roleService;
          this.formBuilder = formBuilder;
          this.toastService = toastService;
          this.router = router;
          this.showList = false;
          this.enableButton = false;
          this.onbackSpace = false;
          this.dtOptions = [];
          this.dtTrigger1 = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
          this.dtTrigger2 = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
          this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__.permissionsLabels();
        }

        _createClass(_UserGccAcMaintenanceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this76 = this;

            this.dtOptions[0] = {
              pagingType: 'full_numbers',
              pageLength: 5,
              columnDefs: [{
                type: 'date',
                'targets': [3]
              }],
              order: [[3, 'desc']],
              processing: true,
              lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]],
              retrieve: true
            };
            this.dtOptions[1] = {
              pagingType: 'full_numbers',
              pageLength: 5,
              columnDefs: [{
                type: 'date',
                'targets': [3]
              }],
              order: [[3, 'desc']],
              processing: true,
              lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]],
              retrieve: true // columnDefs: [ { type: 'date', 'targets': [5] } ],
              // order: [[5, 'desc']],

            };
            this.userGlSummryForm = this.formBuilder.group({
              userId: [""]
            });
            this.getUserName();
            this.roleService.fetchScreenPermissions('User Account Restriction');
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this76.roleCodes = message;
            });
            console.log(this.roleCodes);
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
            var _this77 = this;

            this.apiService.getUserName().subscribe(function (userName) {
              _this77.userName = userName.sort();
              _this77.usersList = [];
              _this77.allUserID = _this77.userName;
              var list = document.getElementById('allusers');

              _this77.allUserID.forEach(function (item) {
                var option = document.createElement('option');
                option.value = item;
                list.appendChild(option);
              });

              if (_this77.userName) {
                console.log(_this77.userName);
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
            this.userID = event;

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
            var _this78 = this;

            var gltype = "GL";
            this.apiService.getUserIdGlData(this.userID, gltype).subscribe(function (transactiondata) {
              _this78.transactionData = transactiondata;

              if (_this78.transactionData.length == '0') {
                localStorage.removeItem('ALLOWUSER');
                localStorage.removeItem('DISALLOWUSER');
              }

              _this78.allowpermissions = _this78.transactionData.filter(function (allow) {
                return allow.permission === 'Allow';
              });
              console.log(_this78.allowpermissions);
              _this78.disallowpermissions = _this78.transactionData.filter(function (disallow) {
                return disallow.permission === 'Disallow';
              });
              console.log(_this78.disallowpermissions);

              if (_this78.allowpermissions.length != '0') {
                console.log("AllowPermission");
                localStorage.setItem('ALLOWUSER', JSON.stringify(_this78.allowpermissions));
              }

              if (_this78.disallowpermissions.length != '0') {
                console.log(_this78.disallowpermissions, "disallowpermissions");
                localStorage.setItem('DISALLOWUSER', JSON.stringify(_this78.disallowpermissions));
              }

              _this78.dtTrigger1.next();

              console.log(_this78.transactionData); // if (this.transactionData[0].userId != null) {
              //   // this.toastService.successMessage('Data Fetched Successfully!.', '');
              //   return;
              // }
              // else {
              //   // this.toastService.errorMessage('Failed to Fetch GL Code Summary Data!.', '');
              //   return;
              // }
            });
            var actype = "AC";
            this.apiService.getUserIdAccData(this.userID, actype).subscribe(function (accountClass) {
              _this78.accountClassData = accountClass;

              if (_this78.accountClassData.length == '0') {
                localStorage.removeItem('ALLOWACCCLASSUSER');
                localStorage.removeItem('DISALLOWACCCLASSUSER');
              }

              _this78.allowpermissions = _this78.accountClassData.filter(function (allow) {
                return allow.permission === 'Allow';
              });
              console.log(_this78.allowpermissions);
              _this78.disallowpermissions = _this78.accountClassData.filter(function (disallow) {
                return disallow.permission === 'Disallow';
              });
              console.log(_this78.disallowpermissions);

              if (_this78.allowpermissions.length != '0') {
                console.log("AllowPermission");
                localStorage.setItem('ALLOWACCCLASSUSER', JSON.stringify(_this78.allowpermissions));
              }

              if (_this78.disallowpermissions.length != '0') {
                console.log(_this78.disallowpermissions, "disallowpermissions");
                localStorage.setItem('DISALLOWACCCLASSUSER', JSON.stringify(_this78.disallowpermissions));
              }

              _this78.dtTrigger2.next();

              console.log(_this78.accountClassData); // if (this.accountClassData[0].userId ==null) {
              //   // this.toastService.errorMessage('Failed to Fetch Account Class Summary Data!', '');
              // }
            });
          }
        }, {
          key: "deleteUserGLData",
          value: function deleteUserGLData(row) {
            var _this79 = this;

            console.log(row);
            var userID = row.userId;
            this.apiService.deleteGlDataUser(row, userID).subscribe(function (res) {
              _this79.deleteGLResp = res;

              if (_this79.deleteGLResp) {
                // this.toastService.successMessage('Data Saved Successfully!.', '');
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                  title: 'GL Code Record is Deleted',
                  icon: 'success'
                });

                _this79.getGlTransactiondata();
              } else {
                // this.toastService.errorMessage('Failed to Save Data!', '');
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                  title: 'Failed to Delete Data!',
                  icon: 'error'
                });
              }
            }, function (error) {
              if (_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpErrorResponse) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                  text: 'Server Error!',
                  icon: 'error'
                });
              }
            });
          }
        }, {
          key: "deleteaccountClassData",
          value: function deleteaccountClassData(row) {
            var _this80 = this;

            console.log(row);
            var userID = row.userId;
            this.apiService.deleteAcDataUser(row, userID).subscribe(function (res) {
              _this80.deleteaccResp = res;

              if (_this80.deleteaccResp) {
                // this.toastService.successMessage('Data Saved Successfully!.', '');
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                  title: 'Account Class Record is Deleted',
                  icon: 'success'
                });

                _this80.getGlTransactiondata();
              } else {
                // this.toastService.errorMessage('Failed to Save Data!', '');
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                  title: 'Failed to Delete Data!',
                  icon: 'error'
                });
              }
            }, function (error) {
              if (_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpErrorResponse) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                  text: 'Server Error!',
                  icon: 'error'
                });
              }
            });
          }
        }, {
          key: "sendingUserGCCforEdit",
          value: function sendingUserGCCforEdit(data) {
            localStorage.setItem('getuserGCCSummarydata', JSON.stringify(data));
            this.apiService.setUserGCCSummary({
              approvedEver: data.approvedEver,
              approvedStatus: data.approvedStatus,
              approvedTime: data.approvedTime,
              approverId: data.approverId,
              createdTime: data.createdTime,
              creatorId: data.creatorId,
              userGlCodeId: data.userGlCodeId,
              medUserGlCodeDetails: data.medUserGlCodeDetails,
              permission: data.permission,
              recordStatus: data.recordStatus,
              versionNo: data.versionNo,
              activeTab: 'true'
            });
            this.router.navigate(["/system-param-maintenance/user-gl-edit"]);
          }
        }, {
          key: "sendingUserACCforEdit",
          value: function sendingUserACCforEdit(data) {
            localStorage.setItem('getuserACCSummarydata', JSON.stringify(data));
            this.apiService.setUserACCSummary({
              approvedEver: data.approvedEver,
              approvedStatus: data.approvedStatus,
              approvedTime: data.approvedTime,
              approverId: data.approverId,
              createdTime: data.createdTime,
              creatorId: data.creatorId,
              userAccClassId: data.userAccClassId,
              medUserAccountClassDetails: data.medUserAccountClassDetails,
              permission: data.permission,
              recordStatus: data.recordStatus,
              versionNo: data.versionNo,
              activeTab: 'true'
            });
            this.router.navigate(["/system-param-maintenance/user-ac-edit"]);
          }
        }]);

        return _UserGccAcMaintenanceComponent;
      }();

      _UserGccAcMaintenanceComponent.ɵfac = function UserGccAcMaintenanceComponent_Factory(t) {
        return new (t || _UserGccAcMaintenanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_4__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
      };

      _UserGccAcMaintenanceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _UserGccAcMaintenanceComponent,
        selectors: [["npr-user-gcc-ac-maintenance"]],
        viewQuery: function UserGccAcMaintenanceComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.dtElements = _t);
          }
        },
        decls: 63,
        vars: 12,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "row", "g-3", "pb-3", "justify-content-end"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [1, "dbCardStyle"], [1, "titleStyle"], [1, "formStyle", 3, "formGroup"], [1, "row", "gy-4"], [1, "col-lg-4", "col-sm-6"], ["id", "outlineNgSelect", "formControlName", "userId", "aria-label", "Default select example", 1, "form-select", 2, "width", "200px", 3, "change", "keyup"], ["hidden", "", "value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-lg-4"], [1, "btn", "btnOutlinePrimary", "active", 3, "disabled", "click"], [1, "dbCardStyle", "dbCardStyle2", "p-0"], [1, "titleCol"], ["datatable", "", "id", "dbTable1", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], ["datatable", "", "id", "dbTable2", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "routerLink"], [3, "value"], [1, "primaryColor", 2, "cursor", "pointer", 3, "click"], [1, "btn", 2, "color", "red", 3, "click"], [1, "fa", "fa-edit"], [1, "btn", 2, "color", "red"], [1, "fa", "fa-trash"]],
        template: function UserGccAcMaintenanceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "User Account Restriction");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, UserGccAcMaintenanceComponent_div_5_Template, 3, 3, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Choose the user id and click Fetch");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "ng-select", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function UserGccAcMaintenanceComponent_Template_ng_select_change_16_listener($event) {
              return ctx.onOptionsSelected($event);
            })("keyup", function UserGccAcMaintenanceComponent_Template_ng_select_keyup_16_listener($event) {
              return ctx.keyUpevent($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "ng-option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "--Please select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, UserGccAcMaintenanceComponent_ng_option_19_Template, 2, 2, "ng-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserGccAcMaintenanceComponent_Template_button_click_21_listener() {
              return ctx.getGlTransactiondata();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, " Fetch ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "General Ledger");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "table", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "User ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Permission");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Auth Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Record Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, UserGccAcMaintenanceComponent_tr_43_Template, 18, 8, "tr", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Account Class");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "table", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "User ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Permission");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "Auth Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "Record Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](62, UserGccAcMaintenanceComponent_tr_62_Template, 13, 8, "tr", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.roleCodes["new"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](11, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.userGlSummryForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.allUserID);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.enableButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dtOptions", ctx.dtOptions[0])("dtTrigger", ctx.dtTrigger1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.transactionData);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dtOptions", ctx.dtOptions[1])("dtTrigger", ctx.dtTrigger2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.accountClassData);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgOptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      79441);
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-select/ng-select */
      88660);

      function UserGccAcNewComponent_form_15_ng_option_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ng-option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", element_r16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r16);
        }
      }

      function UserGccAcNewComponent_form_15_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Allow");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function UserGccAcNewComponent_form_15_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Disallow");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function UserGccAcNewComponent_form_15_div_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserGccAcNewComponent_form_15_div_31_Template_a_click_10_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);

            var i_r18 = restoredCtx.index;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r19.removemedUserGlCodeDetails(i_r18);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r18 = ctx.index;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r7.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r7.editFlag);
        }
      }

      function UserGccAcNewComponent_form_15_div_42_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserGccAcNewComponent_form_15_div_42_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r21.onSubmitGlForm(ctx_r21.userGLForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r8.userGLForm.invalid);
        }
      }

      var _c0 = "/system-param-maintenance/user-gl-acc-maintenance-summary";

      var _c1 = function _c1() {
        return [_c0];
      };

      function UserGccAcNewComponent_form_15_div_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c1));
        }
      }

      function UserGccAcNewComponent_form_15_div_46_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserGccAcNewComponent_form_15_div_46_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r23.enableEditFlag();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function UserGccAcNewComponent_form_15_div_47_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserGccAcNewComponent_form_15_div_47_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r25.onClickOfAuthGCC(ctx_r25.userGLForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function UserGccAcNewComponent_form_15_div_48_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserGccAcNewComponent_form_15_div_48_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r27.onClickOfCloseGCC(ctx_r27.userGLForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function UserGccAcNewComponent_form_15_div_49_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserGccAcNewComponent_form_15_div_49_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r29.onClickOfReopenGCC(ctx_r29.userGLForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Reopen");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function UserGccAcNewComponent_form_15_div_50_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserGccAcNewComponent_form_15_div_50_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r31.OndeleteofUserGCC(ctx_r31.userGLResp.creatorId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function UserGccAcNewComponent_form_15_div_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c1));
        }
      }

      function UserGccAcNewComponent_form_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "General Ledger");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "User ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ng-select", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ng-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, UserGccAcNewComponent_form_15_ng_option_11_Template, 2, 2, "ng-option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Code Permission");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, UserGccAcNewComponent_form_15_div_16_Template, 5, 0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, UserGccAcNewComponent_form_15_div_17_Template, 5, 0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "GL Code ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "GL Code Description ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, UserGccAcNewComponent_form_15_div_31_Template, 12, 3, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserGccAcNewComponent_form_15_Template_a_click_37_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r33.adduserGLFormGroup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, UserGccAcNewComponent_form_15_div_42_Template, 3, 1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, UserGccAcNewComponent_form_15_div_43_Template, 3, 2, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, UserGccAcNewComponent_form_15_div_46_Template, 3, 0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, UserGccAcNewComponent_form_15_div_47_Template, 3, 0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, UserGccAcNewComponent_form_15_div_48_Template, 3, 0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, UserGccAcNewComponent_form_15_div_49_Template, 3, 0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, UserGccAcNewComponent_form_15_div_50_Template, 3, 0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, UserGccAcNewComponent_form_15_div_51_Template, 3, 2, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.userGLForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.allUserID);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.hideAllow);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.hideDisAllow);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.userGLForm.get("medUserGlCodeDetails")["controls"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.userGLResp && !ctx_r0.editFlag && ctx_r0.userGLResp.recordStatus == "OPEN");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.userGLResp && !ctx_r0.editFlag && ctx_r0.userGLResp.approvedStatus == "UNAUTHORIZED");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.userGLResp && ctx_r0.userGLResp.recordStatus == "OPEN" && ctx_r0.userGLResp.approvedEver == "YES" && !ctx_r0.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.userGLResp && ctx_r0.userGLResp.recordStatus == "CLOSED" && ctx_r0.userGLResp.approvedEver == "YES" && !ctx_r0.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.userGLResp && ctx_r0.userGLResp.approvedEver == "NO" && !ctx_r0.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.editFlag);
        }
      }

      function UserGccAcNewComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 68);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "img", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 68);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "img", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 68);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "img", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 68);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "img", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Checker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](63, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "img", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "First Time Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "img", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Auth Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](93, "img", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "Modification Number");

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
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.userGLResp.creatorId);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](26, 8, ctx_r1.userGLResp.createdTime, "MM/dd/yyyy, h:mm a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.userGLResp.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.userGLResp.approverId);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](63, 11, ctx_r1.userGLResp.approvedTime, "MM/dd/yyyy, h:mm a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.userGLResp.approvedEver);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.userGLResp.approvedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.userGLResp.modNo);
        }
      }

      function UserGccAcNewComponent_form_21_ng_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ng-option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r47 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", element_r47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r47);
        }
      }

      function UserGccAcNewComponent_form_21_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "input", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Allow");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function UserGccAcNewComponent_form_21_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "input", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Disallow");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function UserGccAcNewComponent_form_21_div_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserGccAcNewComponent_form_21_div_28_Template_a_click_10_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r51);

            var i_r49 = restoredCtx.index;

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r50.removeaccountClassData(i_r49);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r49 = ctx.index;

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r38.editFlag1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r38.editFlag1);
        }
      }

      function UserGccAcNewComponent_form_21_div_40_Template(rf, ctx) {
        if (rf & 1) {
          var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserGccAcNewComponent_form_21_div_40_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r53);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r52.onSubmitAccountClassForm(ctx_r52.accountClassForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r39.accountClassForm.invalid);
        }
      }

      function UserGccAcNewComponent_form_21_div_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c1));
        }
      }

      function UserGccAcNewComponent_form_21_div_44_Template(rf, ctx) {
        if (rf & 1) {
          var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserGccAcNewComponent_form_21_div_44_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r55);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r54.enableEditFlag1();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function UserGccAcNewComponent_form_21_div_45_Template(rf, ctx) {
        if (rf & 1) {
          var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserGccAcNewComponent_form_21_div_45_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r57);

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r56.onClickOfAuthACC(ctx_r56.userGLForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function UserGccAcNewComponent_form_21_div_46_Template(rf, ctx) {
        if (rf & 1) {
          var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserGccAcNewComponent_form_21_div_46_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r59);

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r58.onClickOfCloseACC(ctx_r58.userGLForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function UserGccAcNewComponent_form_21_div_47_Template(rf, ctx) {
        if (rf & 1) {
          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserGccAcNewComponent_form_21_div_47_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r61);

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r60.onClickOfReopenACC(ctx_r60.userGLForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Reopen");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function UserGccAcNewComponent_form_21_div_48_Template(rf, ctx) {
        if (rf & 1) {
          var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserGccAcNewComponent_form_21_div_48_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r63);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r62.OndeleteofUserACC(ctx_r62.accountClassResp.creatorId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function UserGccAcNewComponent_form_21_div_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c1));
        }
      }

      function UserGccAcNewComponent_form_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "User ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ng-select", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ng-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, UserGccAcNewComponent_form_21_ng_option_8_Template, 2, 2, "ng-option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Code Permission");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, UserGccAcNewComponent_form_21_div_13_Template, 5, 0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, UserGccAcNewComponent_form_21_div_14_Template, 5, 0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Account Class ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Account Class Description ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, UserGccAcNewComponent_form_21_div_28_Template, 12, 3, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserGccAcNewComponent_form_21_Template_a_click_35_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r65);

            var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r64.addaccountClassFormGroup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, UserGccAcNewComponent_form_21_div_40_Template, 3, 1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, UserGccAcNewComponent_form_21_div_41_Template, 3, 2, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, UserGccAcNewComponent_form_21_div_44_Template, 3, 0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, UserGccAcNewComponent_form_21_div_45_Template, 3, 0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, UserGccAcNewComponent_form_21_div_46_Template, 3, 0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, UserGccAcNewComponent_form_21_div_47_Template, 3, 0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, UserGccAcNewComponent_form_21_div_48_Template, 3, 0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, UserGccAcNewComponent_form_21_div_49_Template, 3, 2, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r2.accountClassForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.allUserID);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.hideAllowAcc);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.hideDisAllowAcc);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.accountClassForm.get("medUserGlCodeDetails")["controls"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.editFlag1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.editFlag1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.accountClassResp && !ctx_r2.editFlag1 && ctx_r2.accountClassResp.recordStatus == "OPEN");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.accountClassResp && !ctx_r2.editFlag1 && ctx_r2.accountClassResp.approvedStatus == "UNAUTHORIZED");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.accountClassResp && ctx_r2.accountClassResp.recordStatus == "OPEN" && ctx_r2.accountClassResp.approvedEver == "YES" && !ctx_r2.editFlag1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.accountClassResp && ctx_r2.accountClassResp.recordStatus == "CLOSED" && ctx_r2.accountClassResp.approvedEver == "YES" && !ctx_r2.editFlag1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.accountClassResp && ctx_r2.accountClassResp.approvedEver == "NO" && !ctx_r2.editFlag1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.editFlag1);
        }
      }

      function UserGccAcNewComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 68);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "img", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 68);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "img", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 68);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "img", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 68);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "img", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Checker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](63, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "img", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "First Time Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "img", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Auth Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](93, "img", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "Modification Number");

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
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.accountClassResp.creatorId);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](26, 8, ctx_r3.accountClassResp.createdTime, "MM/dd/yyyy, h:mm a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.accountClassResp.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.accountClassResp.approverId);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](63, 11, ctx_r3.accountClassResp.approvedTime));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.accountClassResp.approvedEver);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.accountClassResp.approvedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.accountClassResp.modNo);
        }
      }

      var _UserGccAcNewComponent = /*#__PURE__*/function () {
        function _UserGccAcNewComponent(formBuilder, apiService, cdr, toastService, router) {
          _classCallCheck(this, _UserGccAcNewComponent);

          this.formBuilder = formBuilder;
          this.apiService = apiService;
          this.cdr = cdr;
          this.toastService = toastService;
          this.router = router;
          this.showList = false;
          this.enableButton = true;
          this.onbackSpace = false;
          this.permissionvalue = ['Allow', 'Disallow'];
          this.permissionvalue1 = ['Allow', 'Disallow'];
          this.submit1 = true;
          this.submit2 = true;
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
          this.submitBtn = false;
          this.editFlag = true;
          this.editFlag1 = true;
          this.editAccFlag = false;
          this.submitAccBtn = false;
          this.formTouched = true;
          this.hideAllow = true;
          this.hideDisAllow = true;
          this.hideAllowAcc = true;
          this.hideDisAllowAcc = true;
          this.showDialog = false;
          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        }

        _createClass(_UserGccAcNewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentUser = localStorage.getItem("userFromLogin");
            this.loginUser = localStorage.getItem('userFromLogin');
            this.disallow = localStorage.getItem("DISALLOWUSER");
            this.allow = localStorage.getItem("ALLOWUSER");
            this.disallowAccClass = localStorage.getItem("DISALLOWACCCLASSUSER");
            this.allowAccClass = localStorage.getItem("ALLOWACCCLASSUSER");

            if (this.disallow) {
              if (JSON.parse(this.disallow)) {
                console.log("Disallow");
                this.hideDisAllow = true;
                this.hideAllow = false;
              }
            }

            if (this.allow) {
              if (JSON.parse(this.allow)) {
                console.log("Allow");
                this.hideAllow = true;
                this.hideDisAllow = false;
              }
            }

            if (this.disallowAccClass) {
              if (JSON.parse(this.disallowAccClass)) {
                console.log("Disallow");
                this.hideDisAllowAcc = true;
                this.hideAllowAcc = false;
              }
            }

            if (this.allowAccClass) {
              if (JSON.parse(this.allowAccClass)) {
                console.log("Allow");
                this.hideAllowAcc = true;
                this.hideDisAllowAcc = false;
              }
            }

            this.userGLForm = this.formBuilder.group({
              userGlCodeId: [""],
              type: ["GL"],
              permission: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
              userId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
              medUserGlCodeDetails: this.formBuilder.array([this.createmedUserGlCodeDetailsGroup()]),
              creatorId: [""],
              createdTime: [""],
              approverId: [""],
              approvedTime: [""],
              modNo: [],
              approvedStatus: [""],
              approvedEver: [""],
              recordStatus: [""]
            });
            this.accountClassForm = this.formBuilder.group({
              userGlCodeId: [""],
              type: ["AC"],
              permission: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
              userId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
              medUserGlCodeDetails: this.formBuilder.array([this.createaccountClassDataGroup()]),
              creatorId: [""],
              createdTime: [""],
              approverId: [""],
              approvedTime: [""],
              modNo: [],
              approvedStatus: [""],
              approvedEver: [""],
              recordStatus: [""]
            });
            this.userGLForm.get('permission').patchValue('Allow');
            this.accountClassForm.get('permission').patchValue('Allow');
            this.getUserName();
          }
        }, {
          key: "createmedUserGlCodeDetailsGroup",
          value: function createmedUserGlCodeDetailsGroup() {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
              'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              'glCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              'glDesc': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              'userGlCodeId': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('')
            });
          }
        }, {
          key: "createaccountClassDataGroup",
          value: function createaccountClassDataGroup() {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
              'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              'glCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              'glDesc': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
              'userGlCodeId': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('')
            });
          }
        }, {
          key: "adduserGLFormGroup",
          value: function adduserGLFormGroup() {
            var medUserGlCodeDetails = this.userGLForm.get('medUserGlCodeDetails');
            medUserGlCodeDetails.push(this.createmedUserGlCodeDetailsGroup());
          }
        }, {
          key: "addaccountClassFormGroup",
          value: function addaccountClassFormGroup() {
            var medUserGlCodeDetails = this.accountClassForm.get('medUserGlCodeDetails');
            medUserGlCodeDetails.push(this.createaccountClassDataGroup());
          }
        }, {
          key: "removemedUserGlCodeDetails",
          value: function removemedUserGlCodeDetails(i) {
            var medUserGlCodeDetails = this.userGLForm.get('medUserGlCodeDetails');
            medUserGlCodeDetails.removeAt(i);
          }
        }, {
          key: "removeaccountClassData",
          value: function removeaccountClassData(i) {
            var medUserGlCodeDetails = this.accountClassForm.get('medUserGlCodeDetails');
            medUserGlCodeDetails.removeAt(i);
          }
        }, {
          key: "canExit",
          value: function canExit() {
            var _this81 = this;

            var isExit = false;

            if (this.userGLForm.touched && this.formTouched == true) {
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

                  _this81.cdr.markForCheck();

                  return isExit;
                } else {
                  isExit = false;

                  _this81.cdr.markForCheck();

                  return isExit;
                }
              });
            } else {
              isExit = true;
              return new Promise(function (resolve, reject) {
                if (isExit === true) {
                  isExit = true;

                  _this81.cdr.markForCheck();

                  resolve(true);
                }
              });
            }
          }
        }, {
          key: "getUserName",
          value: function getUserName() {
            var _this82 = this;

            this.apiService.getUserName().subscribe(function (userName) {
              _this82.userName = userName.sort();
              _this82.usersList = [];
              _this82.allUserID = _this82.userName;
              var list = document.getElementById('allusers');

              _this82.allUserID.forEach(function (item) {
                var option = document.createElement('option');
                option.value = item;
                list.appendChild(option);
              });

              if (_this82.userName) {
                console.log(_this82.userName);
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
            this.userGLForm.get('permission').patchValue('Allow');
            this.accountClassForm.get('permission').patchValue('Allow');
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
            var _this83 = this;

            var gltype = "GL";
            this.apiService.getUserIdGlData(this.userID, gltype).subscribe(function (trndata) {
              _this83.userGLValues = trndata;

              if (_this83.userGLValues.length != 0) {
                _this83.permission = _this83.userGLValues[0].permission;

                _this83.permissionGLData(_this83.permission);
              } else {
                _this83.permissionALL();
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
            var _this84 = this;

            var actype = "AC";
            this.apiService.getUserIdAccData(this.userID, actype).subscribe(function (accdata) {
              _this84.accClassDatas = accdata;
              console.log(_this84.accClassDatas);

              if (_this84.accClassDatas.length != 0) {
                _this84.permission = _this84.accClassDatas[0].permission;

                _this84.permissionAccData(_this84.permission);
              } else {
                _this84.permissionALL();
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
            var _this85 = this;

            console.log("userGLFormValue", userGLFormValue); // let medUserGlCodeDetails = userGLFormValue.medUserGlCodeDetails;
            // console.log(medUserGlCodeDetails);
            // if(medUserGlCodeDetails.length>1){
            //   for (let i = 0; i < medUserGlCodeDetails.length; i++) {
            //     for (let k = i + 1; k < medUserGlCodeDetails.length; k++) {
            //         if (medUserGlCodeDetails[i].trnCode != medUserGlCodeDetails[k].trnCode) {
            //           console.log("not equal");
            //do stuff  

            var userID = this.currentUser;
            var permission = userGLFormValue.permission;
            this.apiService.saveuserGlCode(userGLFormValue, userID, permission).subscribe(function (savetrnres) {
              _this85.userGLResp = savetrnres;

              _this85.auditLogforGCC();

              if (_this85.userGLResp) {
                _this85.submitBtn = true; // this.editFlag = true;

                _this85.editFlag = false;
                _this85.submit1 = false; // this.toastService.successMessage('Data Saved Successfully!.', '');

                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Record is Created',
                  icon: 'success'
                });
                _this85.formTouched = !_this85.userGLForm.touched; // this.userGLForm.reset();
              } else {
                // this.toastService.errorMessage('Failed to Save Data!', '');
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Failed to Save Data.',
                  icon: 'error'
                });
              }
            }, function (error) {
              if (error.status == 400) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Record already Exist!',
                  icon: 'warning'
                });
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: 'Server Error!',
                  icon: 'error'
                });
              }
            });
          } //     else{
          //       Swal.fire({
          //         text: 'GL code and GL code description should not be equal',
          //         icon: 'error'
          //       });
          //     }
          //   }
          // // }
          //   // }
          //   }

        }, {
          key: "onSubmitAccountClassForm",
          value: function onSubmitAccountClassForm(accountClassForm) {
            var _this86 = this;

            console.log("accountClassForm", accountClassForm);
            var type = "AC";
            accountClassForm.type = type;
            console.log("accountClassForm.type", accountClassForm.type);
            var accountData = accountClassForm.medUserGlCodeDetails; // if(accountData.length>1){
            // for (let i = 0; i < accountData.length; i++) {
            //   for (let k = i + 1; k < accountData.length; k++) {
            //       if (accountData[i].trnCode != accountData[k].trnCode || accountData[i].trnDesc != accountData[k].trnDesc) {
            //         console.log("not equal");

            var userID = this.currentUser;
            var permission = accountClassForm.permission;
            this.apiService.saveAccountClassCode(accountClassForm, userID, permission).subscribe(function (saveaccresp) {
              _this86.accountClassResp = saveaccresp;

              _this86.auditLogforACC();

              console.log(_this86.accountClassResp);

              if (_this86.accountClassResp) {
                _this86.submitAccBtn = true;
                _this86.editAccFlag = true;
                _this86.editFlag1 = false;
                _this86.submit2 = false; // this.toastService.successMessage('Data Saved Successfully!.', '');

                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Record is Created',
                  icon: 'success'
                }); // this.accountClassForm.reset(); Save Failed or Record Exist
              } else if (_this86.accountClassResp === "Save Failed or Record Exist") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Record already Exist!',
                  icon: 'error'
                });
              } else {
                // this.toastService.errorMessage('Failed to Save Data!', '');
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Failed to Save Data.',
                  icon: 'error'
                });
              }
            }, function (error) {
              if (error.status == 400) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Record already Exist!',
                  icon: 'warning'
                });
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: 'Server Error!',
                  icon: 'error'
                });
              }
            });
          } //     else{
          //       Swal.fire({
          //         text: 'Account class and Account class description should not be equal',
          //         icon: 'error'
          //       });
          //     }
          //   }
          // }
          // }
          // }

        }, {
          key: "auditLogforGCC",
          value: function auditLogforGCC() {
            var _a, _b, _c, _d, _e, _f;

            if (((_a = this.userGLResp) === null || _a === void 0 ? void 0 : _a.approvedStatus) === 'U') {
              this.userGLResp.approvedStatus = 'UNAUTHORIZED';
            }

            if (((_b = this.userGLResp) === null || _b === void 0 ? void 0 : _b.approvedStatus) === 'A') {
              this.userGLResp.approvedStatus = 'AUTHORIZED';
            }

            if (((_c = this.userGLResp) === null || _c === void 0 ? void 0 : _c.recordStatus) === 'O') {
              this.userGLResp.recordStatus = 'OPEN';
            }

            if (((_d = this.userGLResp) === null || _d === void 0 ? void 0 : _d.recordStatus) === 'C') {
              this.userGLResp.recordStatus = 'CLOSED';
            }

            if (((_e = this.userGLResp) === null || _e === void 0 ? void 0 : _e.approvedEver) === 'N') {
              this.userGLResp.approvedEver = 'NO';
            }

            if (((_f = this.userGLResp) === null || _f === void 0 ? void 0 : _f.approvedEver) === 'Y') {
              this.userGLResp.approvedEver = 'YES';
            }
          }
        }, {
          key: "auditLogforACC",
          value: function auditLogforACC() {
            var _a, _b, _c, _d, _e, _f;

            if (((_a = this.accountClassResp) === null || _a === void 0 ? void 0 : _a.approvedStatus) === 'U') {
              this.accountClassResp.approvedStatus = 'UNAUTHORIZED';
            }

            if (((_b = this.accountClassResp) === null || _b === void 0 ? void 0 : _b.approvedStatus) === 'A') {
              this.accountClassResp.approvedStatus = 'AUTHORIZED';
            }

            if (((_c = this.accountClassResp) === null || _c === void 0 ? void 0 : _c.recordStatus) === 'O') {
              this.accountClassResp.recordStatus = 'OPEN';
            }

            if (((_d = this.accountClassResp) === null || _d === void 0 ? void 0 : _d.recordStatus) === 'C') {
              this.accountClassResp.recordStatus = 'CLOSED';
            }

            if (((_e = this.accountClassResp) === null || _e === void 0 ? void 0 : _e.approvedEver) === 'N') {
              this.accountClassResp.approvedEver = 'NO';
            }

            if (((_f = this.accountClassResp) === null || _f === void 0 ? void 0 : _f.approvedEver) === 'Y') {
              this.accountClassResp.approvedEver = 'YES';
            }
          }
        }, {
          key: "onClickOfAuthGCC",
          value: function onClickOfAuthGCC(gccFormValues) {
            var _this87 = this;

            if (this.userGLResp.creatorId === this.currentUser) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: 'Maker Cannot Authorized the Record!',
                icon: 'error'
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
                text: 'You are trying to Authorize the record. ' + ' Do you want to proceed?',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                // confirmButtonText: 'PROCEED.'
                cancelButtonText: 'NO',
                confirmButtonText: 'YES',
                'icon': 'info'
              }).then(function (result) {
                if (result.isConfirmed === true) {
                  _this87.operation = 'auth';
                  gccFormValues.creatorId = _this87.userGLResp.creatorId;

                  _this87.apiService.onClckOfOperationGCCUser(_this87.operation, _this87.currentUser, gccFormValues).subscribe(function (authResp) {
                    console.log(authResp);
                    _this87.userGLResp = authResp;

                    _this87.auditLogforGCC();

                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record is Authorized',
                      icon: 'success'
                    });
                  });
                }
              });
            }
          }
        }, {
          key: "onClickOfCloseGCC",
          value: function onClickOfCloseGCC(gccFormValues) {
            var _this88 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Close the record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info'
            }).then(function (result) {
              if (result.isConfirmed === true) {
                _this88.operation = 'close';
                gccFormValues.creatorId = _this88.userGLResp.creatorId;

                _this88.apiService.onClckOfOperationGCCUser(_this88.operation, _this88.currentUser, gccFormValues).subscribe(function (closeResp) {
                  console.log(closeResp);
                  _this88.userGLResp = closeResp;

                  _this88.auditLogforGCC();

                  if (_this88.userGLResp) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record is Closed',
                      icon: 'success'
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Failed to Close the Record!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "onClickOfReopenGCC",
          value: function onClickOfReopenGCC(gccFormValues) {
            var _this89 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Reopen the record. ' + ' Do you want to proceed?',
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
                _this89.operation = 'open';
                gccFormValues.creatorId = _this89.userGLResp.creatorId;

                _this89.apiService.onClckOfOperationGCCUser(_this89.operation, _this89.currentUser, gccFormValues).subscribe(function (reopenResp) {
                  console.log(reopenResp);
                  _this89.userGLResp = reopenResp;

                  _this89.auditLogforGCC();

                  if (_this89.userGLResp) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record is Reopened',
                      icon: 'success'
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Failed to Reopen the Record!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "OndeleteofUserGCC",
          value: function OndeleteofUserGCC(UserId) {
            var _this90 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Delete the record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info'
            }).then(function (result) {
              if (result.isConfirmed === true) {
                var userGlCodeId = _this90.userGLResp.userGlCodeId;

                _this90.apiService.deleteUserGCC(userGlCodeId, UserId).subscribe(function (resp) {
                  if (resp == true) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record Is Deleted',
                      icon: 'success'
                    });

                    _this90.router.navigateByUrl('/system-param-maintenance/user-gl-acc-maintenance-summary');
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Failed to Delete User Data!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "enableEditFlag",
          value: function enableEditFlag() {
            this.editFlag = true;
          }
        }, {
          key: "enableEditFlag1",
          value: function enableEditFlag1() {
            this.editFlag1 = true;
          }
        }, {
          key: "onClickOfAuthACC",
          value: function onClickOfAuthACC(accFormValues) {
            var _this91 = this;

            if (this.accountClassResp.creatorId === this.currentUser) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: 'Maker Cannot Authorized the Record!',
                icon: 'error'
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
                text: 'You are trying to Authorize the record. ' + ' Do you want to proceed?',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                // confirmButtonText: 'PROCEED.'
                cancelButtonText: 'NO',
                confirmButtonText: 'YES',
                'icon': 'info'
              }).then(function (result) {
                if (result.isConfirmed === true) {
                  _this91.operation = 'auth';
                  accFormValues.creatorId = _this91.accountClassResp.creatorId;

                  _this91.apiService.onClckOfOperationACCUser(_this91.operation, _this91.currentUser, accFormValues).subscribe(function (authResp) {
                    console.log(authResp);
                    _this91.accountClassResp = authResp;

                    _this91.auditLogforACC();

                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record is Authorized',
                      icon: 'success'
                    });
                  });
                }
              });
            }
          }
        }, {
          key: "onClickOfCloseACC",
          value: function onClickOfCloseACC(accFormValues) {
            var _this92 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Close the record. ' + ' Do you want to proceed?',
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
                _this92.operation = 'close';
                accFormValues.creatorId = _this92.accountClassResp.creatorId;

                _this92.apiService.onClckOfOperationACCUser(_this92.operation, _this92.currentUser, accFormValues).subscribe(function (closeResp) {
                  console.log(closeResp);
                  _this92.accountClassResp = closeResp;

                  _this92.auditLogforACC();

                  if (_this92.accountClassResp) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record is Closed',
                      icon: 'success'
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Failed to Close the Record!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "onClickOfReopenACC",
          value: function onClickOfReopenACC(accFormValues) {
            var _this93 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Reopen the record. ' + ' Do you want to proceed?',
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
                _this93.operation = 'open';
                accFormValues.creatorId = _this93.accountClassResp.creatorId;

                _this93.apiService.onClckOfOperationACCUser(_this93.operation, _this93.currentUser, accFormValues).subscribe(function (closeResp) {
                  console.log(closeResp);
                  _this93.accountClassResp = closeResp;

                  _this93.auditLogforACC();

                  if (_this93.accountClassResp) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record is Reopened',
                      icon: 'success'
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Failed to Reopen the Record!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "OndeleteofUserACC",
          value: function OndeleteofUserACC(UserId) {
            var _this94 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Delete the record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info'
            }).then(function (result) {
              if (result.isConfirmed === true) {
                var userGlCodeId = _this94.accountClassResp.userGlCodeId;

                _this94.apiService.deleteUserACC(userGlCodeId, UserId).subscribe(function (resp) {
                  if (resp == true) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record Is Deleted',
                      icon: 'success'
                    });

                    _this94.router.navigateByUrl('/system-param-maintenance/user-gl-acc-maintenance-summary');
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Failed to Delete User Data!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }]);

        return _UserGccAcNewComponent;
      }();

      _UserGccAcNewComponent.ɵfac = function UserGccAcNewComponent_Factory(t) {
        return new (t || _UserGccAcNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
      };

      _UserGccAcNewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _UserGccAcNewComponent,
        selectors: [["npr-user-gcc-ac-new"]],
        decls: 23,
        vars: 4,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "tabStyleCol"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], ["role", "presentation", 1, "nav-item"], ["id", "home-tab", "data-bs-toggle", "tab", "data-bs-target", "#home", "type", "button", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", "active", 3, "click"], ["id", "profile-tab", "data-bs-toggle", "tab", "data-bs-target", "#profile", "type", "button", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link", 3, "click"], [1, "dbCardStyle"], ["id", "myTabContent", 1, "tab-content"], ["id", "home", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "active"], ["class", "formStyle", 3, "formGroup", 4, "ngIf"], ["class", "dbCardStyle", 4, "ngIf"], ["id", "profile", "role", "tabpanel", "aria-labelledby", "profile-tab", 1, "tab-pane", "fade"], [1, "titleStyle", "mb-3", "mb-md-4"], [1, "smTitle"], [1, "formStyle", 3, "formGroup"], [1, "row", "gy-4"], [1, "col-lg-4", "col-sm-6"], ["for", "roleName", 1, "formLbl"], ["id", "outlineNgSelect", "formControlName", "userId", "aria-label", "Default select example", 1, "form-select", 2, "width", "200px"], ["hidden", "", "value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-lg-4"], [1, "row", "g-2"], ["class", "col-lg-6", 4, "ngIf"], ["formArrayName", "medUserGlCodeDetails"], [1, "row", "gy-2"], ["for", "permission", 1, "formLbl"], [1, "colorRed"], ["class", "row gy-2", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "col-lg-12"], [1, "row", "g-3", "pb-3", "pt-3"], [1, "col-sm"], [1, "row", "g-3"], [1, "col-auto"], [1, "addIcon", "primarybg", 3, "click"], ["src", "assets/images/plus-icon.svg", "alt", "..."], [1, "col-sm-auto"], [1, "row", "g-3", "justify-content-end"], ["class", "col-auto", 4, "ngIf"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], [3, "value"], [1, "col-lg-6"], [1, "radio", "radioStyle"], ["id", "radio-3", "formControlName", "permission", "value", "Allow", "type", "radio"], ["for", "radio-3", 1, "radio-label"], ["id", "radio-4", "formControlName", "permission", "type", "radio", "value", "Disallow"], ["for", "radio-4", 1, "radio-label"], [1, "row", "gy-2", 3, "formGroupName"], ["id", "glCode", "type", "text", "required", "", "formControlName", "glCode", "placeholder", "GL Code", "value", "", 1, "form-control", 3, "readonly"], ["id", "glCodeDesc", "type", "text", "required", "", "formControlName", "glDesc", "placeholder", "GL Code Description", "value", "", 1, "form-control", 3, "readonly"], [2, "margin-top", "10px"], [1, "deleteIcon2", 3, "click"], ["src", "assets/images/delete-icon.svg", "alt", "..."], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["color", "warn", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], ["src", "assets/images/maker-icon.svg", "alt", "..."], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], ["src", "assets/images/checker-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/auth-status-icon.svg", "alt", "..."], [2, "margin-top", "20px"], ["id", "radio-5", "formControlName", "permission", "value", "Allow", "type", "radio"], ["for", "radio-5", 1, "radio-label"], ["id", "radio-6", "formControlName", "permission", "type", "radio", "value", "Disallow"], ["for", "radio-6", 1, "radio-label"], ["id", "accClass", "type", "text", "required", "", "formControlName", "glCode", "placeholder", "Account Class", "value", "", 1, "form-control", 3, "readonly"], ["id", "accClassDesc", "type", "text", "required", "", "formControlName", "glDesc", "placeholder", "Account Class Description", "value", "", 1, "form-control", 3, "readonly"]],
        template: function UserGccAcNewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "User Account Restriction");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserGccAcNewComponent_Template_button_click_7_listener() {
              return ctx.resetAllTabs();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "User General Ledger");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserGccAcNewComponent_Template_button_click_10_listener() {
              return ctx.resetAllTabs();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Account Class");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, UserGccAcNewComponent_form_15_Template, 52, 13, "form", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, UserGccAcNewComponent_div_16_Template, 100, 14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "h2", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Account Class");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, UserGccAcNewComponent_form_21_Template, 50, 13, "form", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, UserGccAcNewComponent_div_22_Template, 100, 13, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userGLForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.userGLResp);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.accountClassForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.accountClassResp);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgOptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
        styles: [".form-class[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #797979;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-bottom: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-left: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-right: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.isDisabled[_ngcontent-%COMP%] {\n  color: currentColor;\n  cursor: not-allowed;\n  pointer-events: none;\n  opacity: 0.4;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItZ2NjLWFjLW5ldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBRUEsd0VBQUE7QUFBSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUNKIiwiZmlsZSI6InVzZXItZ2NjLWFjLW5ldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNsYXNzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6ICM3OTc5Nzk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ViZWJlYjtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXRcclxufVxyXG4uaXNEaXNhYmxlZCB7XHJcbiAgICBjb2xvcjogY3VycmVudENvbG9yO1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICB9Il19 */"]
      });
      /***/
    },

    /***/
    7847:
    /*!***************************************************************************************************************************************!*\
      !*** ./src/app/views/system-param-maintenance/user-gcc-ac-maintenance/user-general-ledger-edit/user-general-ledger-edit.component.ts ***!
      \***************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserGeneralLedgerEditComponent": function UserGeneralLedgerEditComponent() {
          return (
            /* binding */
            _UserGeneralLedgerEditComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function UserGeneralLedgerEditComponent_form_15_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Allow");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function UserGeneralLedgerEditComponent_form_15_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Disallow");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "isDisabled": a0
        };
      };

      function UserGeneralLedgerEditComponent_form_15_div_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserGeneralLedgerEditComponent_form_15_div_28_Template_a_click_10_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);

            var data_r12 = restoredCtx.$implicit;
            var i_r13 = restoredCtx.index;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r14.deleteGLRowData(data_r12.value, i_r13);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "img", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r13 = ctx.index;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readonly", !ctx_r4.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readonly", !ctx_r4.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, !ctx_r4.editFlag));
        }
      }

      function UserGeneralLedgerEditComponent_form_15_div_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserGeneralLedgerEditComponent_form_15_div_33_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r16.adduserGLEditFormGroup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function UserGeneralLedgerEditComponent_form_15_div_36_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserGeneralLedgerEditComponent_form_15_div_36_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r18.enableEditFlag();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function UserGeneralLedgerEditComponent_form_15_div_37_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserGeneralLedgerEditComponent_form_15_div_37_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r20.onClickOfAuthGCC(ctx_r20.userGLEditForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function UserGeneralLedgerEditComponent_form_15_div_38_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserGeneralLedgerEditComponent_form_15_div_38_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r22.onClickOfCloseGCC(ctx_r22.userGLEditForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function UserGeneralLedgerEditComponent_form_15_div_39_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserGeneralLedgerEditComponent_form_15_div_39_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r24.onClickOfReopenGCC(ctx_r24.userGLEditForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Reopen");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function UserGeneralLedgerEditComponent_form_15_div_40_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserGeneralLedgerEditComponent_form_15_div_40_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r26.OndeleteofUserGCC(ctx_r26.getuserGCCSummarydata.creatorId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function UserGeneralLedgerEditComponent_form_15_div_41_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserGeneralLedgerEditComponent_form_15_div_41_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            ctx_r28.onSubmitGlForm(ctx_r28.userGLEditForm.value);
            return ctx_r28.clicked = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _c1 = "/system-param-maintenance/user-gl-acc-maintenance-summary";

      var _c2 = function _c2() {
        return [_c1];
      };

      function UserGeneralLedgerEditComponent_form_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "General Ledger");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "User ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Code Permission");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, UserGeneralLedgerEditComponent_form_15_div_13_Template, 5, 0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, UserGeneralLedgerEditComponent_form_15_div_14_Template, 5, 0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "GL Code ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "GL Code Description ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, UserGeneralLedgerEditComponent_form_15_div_28_Template, 12, 6, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, UserGeneralLedgerEditComponent_form_15_div_33_Template, 4, 0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, UserGeneralLedgerEditComponent_form_15_div_36_Template, 3, 0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, UserGeneralLedgerEditComponent_form_15_div_37_Template, 3, 0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, UserGeneralLedgerEditComponent_form_15_div_38_Template, 3, 0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, UserGeneralLedgerEditComponent_form_15_div_39_Template, 3, 0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, UserGeneralLedgerEditComponent_form_15_div_40_Template, 3, 0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, UserGeneralLedgerEditComponent_form_15_div_41_Template, 3, 0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.userGLEditForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.hideAllow);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.hideDisAllow);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.userGLEditForm.get("medUserGlCodeDetails")["controls"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.getuserGCCSummarydata && !ctx_r0.editFlag && ctx_r0.getuserGCCSummarydata.recordStatus == "OPEN");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.getuserGCCSummarydata && !ctx_r0.editFlag && ctx_r0.getuserGCCSummarydata.approvedStatus == "UNAUTHORIZED");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.getuserGCCSummarydata && ctx_r0.getuserGCCSummarydata.recordStatus == "OPEN" && ctx_r0.getuserGCCSummarydata.approvedEver == "YES" && !ctx_r0.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.getuserGCCSummarydata && ctx_r0.getuserGCCSummarydata.recordStatus == "CLOSED" && ctx_r0.getuserGCCSummarydata.approvedEver == "YES" && !ctx_r0.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.getuserGCCSummarydata && ctx_r0.getuserGCCSummarydata.approvedEver == "NO" && !ctx_r0.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.getuserGCCSummarydata && ctx_r0.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](12, _c2));
        }
      }

      function UserGeneralLedgerEditComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Maker");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "img", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Maker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Record Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "img", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Checker");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "img", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Checker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](63, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "img", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "First Time Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "img", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Auth Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "img", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Modification Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getuserGCCSummarydata.creatorId);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](26, 8, ctx_r1.getuserGCCSummarydata.createdTime, "MM/dd/yyyy, h:mm a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getuserGCCSummarydata.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getuserGCCSummarydata.approverId);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](63, 11, ctx_r1.getuserGCCSummarydata.approvedTime, "MM/dd/yyyy, h:mm a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getuserGCCSummarydata.approvedEver);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getuserGCCSummarydata.approvedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.getuserGCCSummarydata.modNo);
        }
      }

      var _UserGeneralLedgerEditComponent = /*#__PURE__*/function () {
        function _UserGeneralLedgerEditComponent(apiService, router, formBuilder) {
          _classCallCheck(this, _UserGeneralLedgerEditComponent);

          this.apiService = apiService;
          this.router = router;
          this.formBuilder = formBuilder;
          this.clicked = false;
          this.editFlag = false;
          this.editAccFlag = false;
          this.formTouched = true;
          this.hideAllow = true;
          this.hideDisAllow = true;
        }

        _createClass(_UserGeneralLedgerEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentUser = localStorage.getItem("userFromLogin");
            this.disallow = localStorage.getItem("DISALLOWUSER");
            this.allow = localStorage.getItem("ALLOWUSER");
            console.log("ytgjhgbj");

            if (this.disallow) {
              if (JSON.parse(this.disallow)) {
                console.log("Disallow");
                this.hideDisAllow = true;
                this.hideAllow = false;
              }
            }

            if (this.allow) {
              if (JSON.parse(this.allow)) {
                console.log("Allow");
                this.hideAllow = true;
                this.hideDisAllow = false;
              }
            }

            this.userGLEditForm = this.formBuilder.group({
              userGlCodeId: [""],
              type: ["GL"],
              permission: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
              userId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
              medUserGlCodeDetails: this.formBuilder.array([this.createmedUserGlCodeDetailsGroup()]),
              creatorId: [""],
              createdTime: [""],
              approverId: [""],
              approvedTime: [""],
              modNo: [],
              approvedStatus: [""],
              approvedEver: [""],
              recordStatus: [""]
            });
            this.getuserGCCdata();
          }
        }, {
          key: "createmedUserGlCodeDetailsGroup",
          value: function createmedUserGlCodeDetailsGroup() {
            return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
              'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
              'glCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
              'glDesc': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
              'userGlCodeId': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('')
            });
          }
        }, {
          key: "adduserGLEditFormGroup",
          value: function adduserGLEditFormGroup() {
            var medUserGlCodeDetails = this.userGLEditForm.get('medUserGlCodeDetails');
            medUserGlCodeDetails.push(this.createmedUserGlCodeDetailsGroup());
          }
        }, {
          key: "getuserGCCdata",
          value: function getuserGCCdata() {
            var _this95 = this;

            this.apiService.getuserGCCSummary().subscribe(function (summaryData) {
              _this95.getuserGCCSummarydata = summaryData;
              var retrievedObject = localStorage.getItem('getuserGCCSummarydata');
              _this95.getuserGCCSummarydata = JSON.parse(retrievedObject);
              _this95.userID = _this95.getuserGCCSummarydata.creatorId;

              _this95.auditLogforGCC();

              _this95.userGLEditForm.controls.userId.setValue(_this95.getuserGCCSummarydata.creatorId);

              var permission = _this95.getuserGCCSummarydata.permission;
              var userGlCodeId = _this95.getuserGCCSummarydata.userGlCodeId;

              _this95.userGLEditForm.controls.permission.setValue(permission);

              _this95.userGLEditForm.controls.userGlCodeId.setValue(userGlCodeId);
            });
            this.addGCCRowdata.removeAt(0);
            this.getuserGCCSummarydata.medUserGlCodeDetails.forEach(function (element) {
              var row = _this95.formBuilder.group({
                id: [element.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
                glCode: [element.glCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
                glDesc: [element.glDesc, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
                userGlCodeId: [element.userGlCodeId, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
              });

              _this95.addGCCRowdata.push(row);
            });
          }
        }, {
          key: "addGCCRowdata",
          get: function get() {
            return this.userGLEditForm.get('medUserGlCodeDetails');
          }
        }, {
          key: "auditLogforGCC",
          value: function auditLogforGCC() {
            var _a, _b, _c, _d, _e, _f;

            if (((_a = this.getuserGCCSummarydata) === null || _a === void 0 ? void 0 : _a.approvedStatus) === 'U') {
              this.getuserGCCSummarydata.approvedStatus = 'UNAUTHORIZED';
            }

            if (((_b = this.getuserGCCSummarydata) === null || _b === void 0 ? void 0 : _b.approvedStatus) === 'A') {
              this.getuserGCCSummarydata.approvedStatus = 'AUTHORIZED';
            }

            if (((_c = this.getuserGCCSummarydata) === null || _c === void 0 ? void 0 : _c.recordStatus) === 'O') {
              this.getuserGCCSummarydata.recordStatus = 'OPEN';
            }

            if (((_d = this.getuserGCCSummarydata) === null || _d === void 0 ? void 0 : _d.recordStatus) === 'C') {
              this.getuserGCCSummarydata.recordStatus = 'CLOSED';
            }

            if (((_e = this.getuserGCCSummarydata) === null || _e === void 0 ? void 0 : _e.approvedEver) === 'N') {
              this.getuserGCCSummarydata.approvedEver = 'NO';
            }

            if (((_f = this.getuserGCCSummarydata) === null || _f === void 0 ? void 0 : _f.approvedEver) === 'Y') {
              this.getuserGCCSummarydata.approvedEver = 'YES';
            }
          }
        }, {
          key: "enableEditFlag",
          value: function enableEditFlag() {
            this.editFlag = true;
          }
        }, {
          key: "onClickOfAuthGCC",
          value: function onClickOfAuthGCC(gccFormValues) {
            var _this96 = this;

            if (this.getuserGCCSummarydata.creatorId === this.currentUser) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: 'Maker Cannot Authorized the Record!',
                icon: 'error'
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
                text: 'You are trying to Authorize the record. ' + ' Do you want to proceed?',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                // confirmButtonText: 'PROCEED.'
                cancelButtonText: 'NO',
                confirmButtonText: 'YES',
                'icon': 'info'
              }).then(function (result) {
                if (result.isConfirmed === true) {
                  _this96.operation = 'auth';
                  gccFormValues.creatorId = _this96.getuserGCCSummarydata.creatorId;

                  _this96.apiService.onClckOfOperationGCCUser(_this96.operation, _this96.currentUser, gccFormValues).subscribe(function (authResp) {
                    console.log(authResp);
                    _this96.getuserGCCSummarydata = authResp;

                    _this96.auditLogforGCC();

                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record is Authorized',
                      icon: 'success'
                    });
                  });
                }
              });
            }
          }
        }, {
          key: "onClickOfCloseGCC",
          value: function onClickOfCloseGCC(gccFormValues) {
            var _this97 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Close the record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info'
            }).then(function (result) {
              if (result.isConfirmed === true) {
                _this97.operation = 'close';
                gccFormValues.creatorId = _this97.getuserGCCSummarydata.creatorId;

                _this97.apiService.onClckOfOperationGCCUser(_this97.operation, _this97.currentUser, gccFormValues).subscribe(function (closeResp) {
                  console.log(closeResp);
                  _this97.getuserGCCSummarydata = closeResp;

                  _this97.auditLogforGCC();

                  if (_this97.getuserGCCSummarydata) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record is Closed',
                      icon: 'success'
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Failed to Close the Record!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "onClickOfReopenGCC",
          value: function onClickOfReopenGCC(gccFormValues) {
            var _this98 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Reopen the record. ' + ' Do you want to proceed?',
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
                _this98.operation = 'open';
                gccFormValues.creatorId = _this98.getuserGCCSummarydata.creatorId;

                _this98.apiService.onClckOfOperationGCCUser(_this98.operation, _this98.currentUser, gccFormValues).subscribe(function (reopenResp) {
                  console.log(reopenResp);
                  _this98.getuserGCCSummarydata = reopenResp;

                  _this98.auditLogforGCC();

                  if (_this98.getuserGCCSummarydata) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record is Reopened',
                      icon: 'success'
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Failed to Reopen the Record!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "OndeleteofUserGCC",
          value: function OndeleteofUserGCC(UserId) {
            var _this99 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Delete the record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info'
            }).then(function (result) {
              if (result.isConfirmed === true) {
                var userGlCodeId = _this99.getuserGCCSummarydata.userGlCodeId;

                _this99.apiService.deleteUserGCC(userGlCodeId, UserId).subscribe(function (resp) {
                  if (resp == true) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Record Is Deleted',
                      icon: 'success'
                    });

                    _this99.router.navigateByUrl('/system-param-maintenance/user-gl-acc-maintenance-summary');
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Failed to Delete User Data!',
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  if (_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: 'Server Error!',
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "deleteGLRowData",
          value: function deleteGLRowData(data, i) {
            var _this100 = this;

            var medUserGlCodeDetails = this.userGLEditForm.get('medUserGlCodeDetails'); // 'id': new FormControl(''),
            // 'userGlCodeId': new FormControl('')

            if (medUserGlCodeDetails.at(i).get('glCode').value && medUserGlCodeDetails.at(i).get('glDesc').value) {
              // transactionData.removeAt(i);
              console.log("this.medUserGlCodeDetails.formValues", data, data.id);
              this.apiService.deleteuserGLRow(data.id).subscribe(function (resp) {
                _this100.deleteRowResp = resp;

                if (_this100.deleteRowResp == true) {
                  {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      title: 'Deleted Row Data!',
                      icon: 'success'
                    });
                  }
                  medUserGlCodeDetails.removeAt(i); // this.submitFlag = true;
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Failed to Delete Row Data!',
                    icon: 'error'
                  });
                }
              }, function (error) {
                if (_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    text: 'Server Error!',
                    icon: 'error'
                  });
                }
              });
            } else {// transactionData.removeAt(i);
            }
          }
        }, {
          key: "onSubmitGlForm",
          value: function onSubmitGlForm(userGLFormValue) {
            var _this101 = this;

            userGLFormValue.creatorId = this.currentUser;
            var userID = userGLFormValue.userId;
            var permission = userGLFormValue.permission;
            this.operation = 'update';
            this.apiService.updateUserGlCodeData(userGLFormValue, this.operation, this.currentUser).subscribe(function (savetrnres) {
              _this101.getuserGCCSummarydata = savetrnres;

              if (_this101.getuserGCCSummarydata) {
                // this.submitBtn = true;
                _this101.editFlag = false; // this.submit1 = false;
                // this.toastService.successMessage('Data Saved Successfully!.', '');

                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Record is Updated',
                  icon: 'success'
                });

                _this101.auditLogforGCC();

                _this101.formTouched = !_this101.userGLEditForm.touched; // this.userGLForm.reset();
              } else {
                // this.toastService.errorMessage('Failed to Save Data!', '');
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Failed to Update Data.',
                  icon: 'error'
                });
              }
            }, function (error) {
              if (_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: 'Server Error!',
                  icon: 'error'
                });
              }
            });
          }
        }]);

        return _UserGeneralLedgerEditComponent;
      }();

      _UserGeneralLedgerEditComponent.ɵfac = function UserGeneralLedgerEditComponent_Factory(t) {
        return new (t || _UserGeneralLedgerEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder));
      };

      _UserGeneralLedgerEditComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _UserGeneralLedgerEditComponent,
        selectors: [["npr-user-general-ledger-edit"]],
        decls: 18,
        vars: 2,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "tabStyleCol"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], ["role", "presentation", 1, "nav-item"], ["id", "home-tab", "data-bs-toggle", "tab", "data-bs-target", "#home", "type", "button", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "profile-tab", "data-bs-toggle", "tab", "data-bs-target", "#profile", "type", "button", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link", "disable"], [1, "dbCardStyle"], ["id", "myTabContent", 1, "tab-content"], ["id", "home", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "active"], ["class", "formStyle", 3, "formGroup", 4, "ngIf"], ["class", "dbCardStyle", 4, "ngIf"], [1, "formStyle", 3, "formGroup"], [1, "titleStyle", "mb-3", "mb-md-4"], [1, "smTitle"], [1, "row", "gy-4"], [1, "col-lg-4", "col-sm-6"], ["for", "roleName", 1, "formLbl"], ["id", "userId", "type", "text", "formControlName", "userId", "readonly", "", "placeholder", "user Id", "value", "", 1, "form-control"], [1, "col-lg-4"], [1, "row", "g-2"], ["class", "col-lg-6", 4, "ngIf"], ["formArrayName", "medUserGlCodeDetails"], [1, "row", "gy-2"], ["for", "permission", 1, "formLbl"], [1, "colorRed"], ["class", "row gy-2", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "col-lg-12"], [1, "row", "g-3", "pb-3", "pt-3"], [1, "col-sm"], [1, "row", "g-3"], ["class", "col-auto", 4, "ngIf"], [1, "col-sm-auto"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], [1, "col-auto"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [1, "col-lg-6"], [1, "radio", "radioStyle"], ["id", "radio-3", "formControlName", "permission", "value", "Allow", "type", "radio"], ["for", "radio-3", 1, "radio-label"], ["id", "radio-4", "formControlName", "permission", "type", "radio", "value", "Disallow"], ["for", "radio-4", 1, "radio-label"], [1, "row", "gy-2", 3, "formGroupName"], ["id", "glCode", "type", "text", "required", "", "formControlName", "glCode", "placeholder", "GL Code", "value", "", 1, "form-control", 3, "readonly"], ["id", "glCodeDesc", "type", "text", "required", "", "formControlName", "glDesc", "placeholder", "GL Code Description", "value", "", 1, "form-control", 3, "readonly"], [2, "margin-top", "10px"], [1, "deleteIcon2", 3, "ngClass", "click"], ["src", "assets/images/delete-icon.svg", "alt", "..."], [1, "addIcon", "primarybg", 3, "click"], ["src", "assets/images/plus-icon.svg", "alt", "..."], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["color", "warn", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], ["src", "assets/images/maker-icon.svg", "alt", "..."], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], ["src", "assets/images/checker-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/auth-status-icon.svg", "alt", "..."]],
        template: function UserGeneralLedgerEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "User Account Restriction");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "User General Ledger");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Account Class");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, UserGeneralLedgerEditComponent_form_15_Template, 45, 13, "form", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, UserGeneralLedgerEditComponent_div_17_Template, 100, 14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.userGLEditForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.getuserGCCSummarydata);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
        styles: [".isDisabled[_ngcontent-%COMP%] {\n  color: currentColor;\n  cursor: not-allowed;\n  pointer-events: none;\n  opacity: 0.5;\n  text-decoration: none;\n}\n\n.disable[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  pointer-events: none;\n  opacity: 0.4;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItZ2VuZXJhbC1sZWRnZXItZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVFO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUNKIiwiZmlsZSI6InVzZXItZ2VuZXJhbC1sZWRnZXItZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pc0Rpc2FibGVkIHtcclxuICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gIH1cclxuICAuZGlzYWJsZXtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9Il19 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_views_system-param-maintenance_system-param-maintenance_module_ts-es5.js.map