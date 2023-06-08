(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_audit-logs_audit-logs_module_ts"], {
    /***/
    64116:
    /*!***************************************************************!*\
      !*** ./src/app/views/audit-logs/audit-logs-routing.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuditLogsRoutingModule": function AuditLogsRoutingModule() {
          return (
            /* binding */
            _AuditLogsRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _audit_logs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./audit-logs.component */
      3969);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _audit_logs_component__WEBPACK_IMPORTED_MODULE_0__.AuditLogsComponent
      }];

      var _AuditLogsRoutingModule = /*#__PURE__*/_createClass(function _AuditLogsRoutingModule() {
        _classCallCheck(this, _AuditLogsRoutingModule);
      });

      _AuditLogsRoutingModule.ɵfac = function AuditLogsRoutingModule_Factory(t) {
        return new (t || _AuditLogsRoutingModule)();
      };

      _AuditLogsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _AuditLogsRoutingModule
      });
      _AuditLogsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_AuditLogsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    3969:
    /*!**********************************************************!*\
      !*** ./src/app/views/audit-logs/audit-logs.component.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuditLogsComponent": function AuditLogsComponent() {
          return (
            /* binding */
            _AuditLogsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! jspdf */
      75585);
      /* harmony import */


      var jspdf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! jspdf-autotable */
      56587);
      /* harmony import */


      var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/add/operator/map */
      92038);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/models/fmosNewRolePermissions */
      35383);
      /* harmony import */


      var src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/config/app.constant */
      3118);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var src_app_shared_services_account_closure_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/account-closure-service.service */
      60965);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      77382);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! angular-datatables */
      50481);

      var _c0 = ["format"];

      function AuditLogsComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Export As");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "select", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Excel");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AuditLogsComponent_div_4_Template_button_click_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r5.modo($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Download");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function AuditLogsComponent_tbody_22_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](13, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var audits_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](audits_r8.log);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](audits_r8.creatorId);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](audits_r8.actionPerformBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](audits_r8.record);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](audits_r8.action);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](13, 6, audits_r8.creatorDtStamp, "medium"));
        }
      }

      function AuditLogsComponent_tbody_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AuditLogsComponent_tbody_22_tr_1_Template, 14, 9, "tr", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.auditlogdata);
        }
      }

      function AuditLogsComponent_tbody_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "No data!");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function AuditLogsComponent_ng_container_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Please wait... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        }
      }

      var _AuditLogsComponent = /*#__PURE__*/function () {
        function _AuditLogsComponent(api, http, excelService, cdr, roleService) {
          _classCallCheck(this, _AuditLogsComponent);

          this.api = api;
          this.http = http;
          this.excelService = excelService;
          this.cdr = cdr;
          this.roleService = roleService;
          this.isLoading = false;
          this.isSelected = true;
          this.dtOptions = {};
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe('en-US');
          this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_3__.permissionsLabels();
          this.API_URL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_4__.AppConstants.baseURL;
        }

        _createClass(_AuditLogsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 5,
              serverSide: true,
              processing: true,
              columnDefs: [{
                type: 'date',
                'targets': [5]
              }],
              order: [[5, 'desc']],
              // lengthMenu: [[5, 10, 20, 30], [5, 10, 20, 30]],
              lengthMenu: [[5, 10, 20, 30, -1], [5, 10, 20, 30, "ALL"]],
              ajax: function ajax(dataTablesParameters, callback) {
                ;
                dataTablesParameters.minNumber = dataTablesParameters.start + 1;
                dataTablesParameters.maxNumber = dataTablesParameters.start + dataTablesParameters.length;
                console.log(dataTablesParameters.minNumber, dataTablesParameters.maxNumber);
                var pageNo = Math.floor(dataTablesParameters.minNumber / dataTablesParameters.length);
                var pageSize = dataTablesParameters.length;

                _this.http.get("".concat(_this.API_URL) + "/auditLogs/getAllAuditLogs?pageNo=".concat(pageNo, "&pageSize=").concat(pageSize)).subscribe(function (resp) {
                  ;
                  console.log(resp);
                  _this.totalPages = resp.totalNoOfPages;
                  _this.totalRecords = resp.totalRecords;
                  _this.auditlogdata = resp.result;
                  _this.isLoading = false;

                  _this.cdr.markForCheck();

                  callback({
                    recordsTotal: resp.totalRecords,
                    recordsFiltered: resp.totalRecords,
                    data: []
                  });
                });
              }
            }; // this.getAuditLogList();

            this.roleService.fetchScreenPermissions('Audit Logs');
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this.roleCodes = message;
            });
            console.log(this.roleCodes);
          }
        }, {
          key: "modo",
          value: function modo(event) {
            console.log(event);

            if (this.format.nativeElement.value == 'PDF') {
              this.downloadLog(this.totalRecords, this.totalPages);
            }

            if (this.format.nativeElement.value === 'Excel') {
              this.exportAsXLSX();
            }
          }
        }, {
          key: "exportAsXLSX",
          value: function exportAsXLSX() {
            var _this2 = this;

            console.log(this.auditlogdata);
            this.http.get("".concat(this.API_URL) + "/auditLogs/getAllAuditLogs?pageNo=".concat(0, "&pageSize=", this.totalRecords)).subscribe(function (resp) {
              _this2.arrayData = resp.result;

              _this2.arrayData.forEach(function (element) {
                element.timeForExport = _this2.pipe.transform(element.timeForExport, 'dd-MMM-yy');
                element.updatedAt = _this2.pipe.transform(element.updatedAt, 'dd-MMM-yy');
                element.creatorDtStamp = _this2.pipe.transform(element.creatorDtStamp, 'dd-MMM-yy');
                element.verifierDtStamp = _this2.pipe.transform(element.verifierDtStamp, 'dd-MMM-yy');
              });

              _this2.excelService.exportAsExcelFile(_this2.arrayData, 'Audit_Report');
            });
          }
        }, {
          key: "downloadLog",
          value: function downloadLog(totalRecords, totalNoOfPages) {
            var _this3 = this;

            // getSecurityPolicies?pageNo=${0}&pageSize=${1000}&sortBy=${sortBy}`
            this.http.get("".concat(this.API_URL) + "/auditLogs/getAllAuditLogs?pageNo=".concat(0, "&pageSize=", totalRecords)).subscribe(function (resp) {
              _this3.convert(resp.result);
            });
          }
        }, {
          key: "convert",
          value: function convert(data) {
            var doc = new (jspdf__WEBPACK_IMPORTED_MODULE_0___default())();
            var col = [["Screen", "creatorId", "ActionPerformBy", "Record", "Action", "Time"]];
            var rows = [];
            var itemNew = data;
            itemNew.forEach(function (element) {
              var date = new Date(element.creatorDtStamp).toLocaleDateString("en-us");
              console.log(date);
              var temp = [element.log, element.creatorId, element.actionPerformBy, element.record, element.action, date];
              rows.push(temp);
            }); //doc.autoTable(col, rows);

            doc.autoTable({
              head: col,
              body: rows
            });
            doc.save('AuditLog.pdf');
          }
        }]);

        return _AuditLogsComponent;
      }();

      _AuditLogsComponent.ɵfac = function AuditLogsComponent_Factory(t) {
        return new (t || _AuditLogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_account_closure_service_service__WEBPACK_IMPORTED_MODULE_6__.AccountClosureServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_7__.RoleService));
      };

      _AuditLogsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
        type: _AuditLogsComponent,
        selectors: [["npr-audit-logs"]],
        viewQuery: function AuditLogsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.format = _t.first);
          }
        },
        decls: 25,
        vars: 5,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["class", "col-2", 4, "ngIf"], [1, "dbCardStyle", "table-responsive"], ["id", "auditLogsTable", "datatable", "", 1, "table", "tableStyle", "tableStyleSelect", "nowrap", "vAlignMdl", 2, "width", "100%", 3, "dtOptions"], [4, "ngIf"], [1, "col-2"], ["for", "roleName", 1, "formLbl"], ["aria-label", "Default select example", 1, "form-select"], ["format", ""], ["selected", "", "value", "Excel"], ["value", "PDF"], [1, "downloadForAuditLog", 3, "click"], [4, "ngFor", "ngForOf"], ["colspan", "3", 1, "no-data-available"], [1, "loading-page-center"], [1, "indicator-progress"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"]],
        template: function AuditLogsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Audit Logs");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, AuditLogsComponent_div_4_Template, 11, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "Screen");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Creator");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "Action Perform By");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Record");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, AuditLogsComponent_tbody_22_Template, 2, 1, "tbody", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, AuditLogsComponent_tbody_23_Template, 4, 0, "tbody", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, AuditLogsComponent_ng_container_24_Template, 5, 0, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dtOptions", ctx.dtOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.auditlogdata == null ? null : ctx.auditlogdata.length) != 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", (ctx.auditlogdata == null ? null : ctx.auditlogdata.length) == 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isLoading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, angular_datatables__WEBPACK_IMPORTED_MODULE_8__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
        styles: [".downloadForAuditLog[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  left: 250px;\n  bottom: 33px;\n  background-color: #D61C4E;\n  color: aliceblue;\n  font-family: var(--medium);\n  width: 60%;\n  border: 0;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1ZGl0LWxvZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoiYXVkaXQtbG9ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kb3dubG9hZEZvckF1ZGl0TG9ne1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMjUwcHg7XHJcbiAgICBib3R0b206IDMzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDYxQzRFO1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tZWRpdW0pO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbn1cclxuLy8gLnRhYmxle1xyXG4vLyAgICAgT3ZlcmZsb3cteDpzY3JvbGw7XHJcbi8vIH0iXX0= */"]
      });
      /***/
    },

    /***/
    46847:
    /*!*******************************************************!*\
      !*** ./src/app/views/audit-logs/audit-logs.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuditLogsModule": function AuditLogsModule() {
          return (
            /* binding */
            _AuditLogsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _audit_logs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./audit-logs-routing.module */
      64116);
      /* harmony import */


      var _audit_logs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./audit-logs.component */
      3969);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-datatables */
      50481);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AuditLogsModule = /*#__PURE__*/_createClass(function _AuditLogsModule() {
        _classCallCheck(this, _AuditLogsModule);
      });

      _AuditLogsModule.ɵfac = function AuditLogsModule_Factory(t) {
        return new (t || _AuditLogsModule)();
      };

      _AuditLogsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _AuditLogsModule
      });
      _AuditLogsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _audit_logs_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuditLogsRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_AuditLogsModule, {
          declarations: [_audit_logs_component__WEBPACK_IMPORTED_MODULE_1__.AuditLogsComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _audit_logs_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuditLogsRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_views_audit-logs_audit-logs_module_ts-es5.js.map