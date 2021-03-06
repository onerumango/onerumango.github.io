(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_process-account-closure_process-account-closure_module_ts"], {
    /***/
    50481:
    /*!**************************************************!*\
      !*** ./node_modules/angular-datatables/index.js ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DataTableDirective": function DataTableDirective() {
          return (
            /* reexport safe */
            _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective
          );
        },

        /* harmony export */
        "DataTablesModule": function DataTablesModule() {
          return (
            /* reexport safe */
            _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__.DataTablesModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./src/angular-datatables.directive */
      9301);
      /* harmony import */


      var _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./src/angular-datatables.module */
      9368);
      /**
       * @license
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
       */

      /**
       * @module
       * @description
       * Entry point from which you should import all public library APIs.
       */

      /***/

    },

    /***/
    9301:
    /*!*****************************************************************************!*\
      !*** ./node_modules/angular-datatables/src/angular-datatables.directive.js ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DataTableDirective": function DataTableDirective() {
          return (
            /* binding */
            _DataTableDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /**
       * @license
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
       */


      var _DataTableDirective =
      /** @class */
      function () {
        function DataTableDirective(el, vcr, renderer) {
          this.el = el;
          this.vcr = vcr;
          this.renderer = renderer;
          /**
           * The DataTable option you pass to configure your table.
           */

          this.dtOptions = {};
        }

        DataTableDirective.prototype.ngOnInit = function () {
          var _this = this;

          if (this.dtTrigger) {
            this.dtTrigger.subscribe(function (options) {
              _this.displayTable(options);
            });
          } else {
            this.displayTable(null);
          }
        };

        DataTableDirective.prototype.ngOnDestroy = function () {
          if (this.dtTrigger) {
            this.dtTrigger.unsubscribe();
          }

          if (this.dt) {
            this.dt.destroy(true);
          }
        };

        DataTableDirective.prototype.displayTable = function (dtOptions) {
          var _this = this; // assign new options if provided


          if (dtOptions) {
            this.dtOptions = dtOptions;
          }

          this.dtInstance = new Promise(function (resolve, reject) {
            Promise.resolve(_this.dtOptions).then(function (resolvedDTOptions) {
              // validate object
              var isTableEmpty = Object.keys(resolvedDTOptions).length === 0 && $('tbody tr', _this.el.nativeElement).length === 0;

              if (isTableEmpty) {
                reject('Both the table and dtOptions cannot be empty');
                return;
              } // Using setTimeout as a "hack" to be "part" of NgZone


              setTimeout(function () {
                // Assign DT properties here
                var options = {
                  rowCallback: function rowCallback(row, data, index) {
                    if (resolvedDTOptions.columns) {
                      var columns = resolvedDTOptions.columns;

                      _this.applyNgPipeTransform(row, columns);

                      _this.applyNgRefTemplate(row, columns, data);
                    } // run user specified row callback if provided.


                    if (resolvedDTOptions.rowCallback) {
                      resolvedDTOptions.rowCallback(row, data, index);
                    }
                  }
                }; // merge user's config with ours

                options = Object.assign({}, resolvedDTOptions, options);
                _this.dt = $(_this.el.nativeElement).DataTable(options);
                resolve(_this.dt);
              });
            });
          });
        };

        DataTableDirective.prototype.applyNgPipeTransform = function (row, columns) {
          // Filter columns with pipe declared
          var colsWithPipe = columns.filter(function (x) {
            return x.ngPipeInstance && !x.ngTemplateRef;
          });
          colsWithPipe.forEach(function (el) {
            var pipe = el.ngPipeInstance; // find index of column using `data` attr

            var i = columns.findIndex(function (e) {
              return e.data === el.data;
            }); // get <td> element which holds data using index

            var rowFromCol = row.childNodes.item(i); // Transform data with Pipe

            var rowVal = $(rowFromCol).text();
            var rowValAfter = pipe.transform(rowVal); // Apply transformed string to <td>

            $(rowFromCol).text(rowValAfter);
          });
        };

        DataTableDirective.prototype.applyNgRefTemplate = function (row, columns, data) {
          var _this = this; // Filter columns using `ngTemplateRef`


          var colsWithTemplate = columns.filter(function (x) {
            return x.ngTemplateRef && !x.ngPipeInstance;
          });
          colsWithTemplate.forEach(function (el) {
            var _a = el.ngTemplateRef,
                ref = _a.ref,
                context = _a.context; // get <td> element which holds data using index

            var i = columns.findIndex(function (e) {
              return e.data === el.data;
            });
            var cellFromIndex = row.childNodes.item(i); // reset cell before applying transform

            $(cellFromIndex).html(''); // render onto DOM
            // finalize context to be sent to user

            var _context = Object.assign({}, context, context === null || context === void 0 ? void 0 : context.userData, {
              adtData: data
            });

            var instance = _this.vcr.createEmbeddedView(ref, _context);

            _this.renderer.appendChild(cellFromIndex, instance.rootNodes[0]);
          });
        };

        DataTableDirective.??fac = function DataTableDirective_Factory(t) {
          return new (t || DataTableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
        };

        DataTableDirective.??dir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
          type: DataTableDirective,
          selectors: [["", "datatable", ""]],
          inputs: {
            dtOptions: "dtOptions",
            dtTrigger: "dtTrigger"
          }
        });
        return DataTableDirective;
      }();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_DataTableDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[datatable]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
          }];
        }, {
          dtOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          dtTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /***/

    },

    /***/
    9368:
    /*!**************************************************************************!*\
      !*** ./node_modules/angular-datatables/src/angular-datatables.module.js ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DataTablesModule": function DataTablesModule() {
          return (
            /* binding */
            _DataTablesModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./angular-datatables.directive */
      9301);
      /**
       * @license
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
       */


      var _DataTablesModule =
      /** @class */
      function () {
        function DataTablesModule() {}

        DataTablesModule.forRoot = function () {
          return {
            ngModule: DataTablesModule
          };
        };

        DataTablesModule.??fac = function DataTablesModule_Factory(t) {
          return new (t || DataTablesModule)();
        };

        DataTablesModule.??mod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
          type: DataTablesModule
        });
        DataTablesModule.??inj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]]
        });
        return DataTablesModule;
      }();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](_DataTablesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
            declarations: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective],
            exports: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    91325:
    /*!*******************************************************************!*\
      !*** ./src/app/shared/models/process-account-closure-resp-dto.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProcessAccountClosureRespDTO": function ProcessAccountClosureRespDTO() {
          return (
            /* binding */
            _ProcessAccountClosureRespDTO
          );
        }
        /* harmony export */

      });

      var _ProcessAccountClosureRespDTO = /*#__PURE__*/_createClass(function _ProcessAccountClosureRespDTO() {
        _classCallCheck(this, _ProcessAccountClosureRespDTO);
      }); // export class MedianDeUploadDetails {
      //   id: MedDeUploadDetailPKEntity;
      //   account: string;
      //   ccyCd: string;
      //   amount: number;
      //   accountBranch: string;
      //   txnCode: string;
      //   drCr: string;
      //   lcyEquivalent: number;
      //   exchRate: number;
      //   valueDate: Date;
      //   externalRefNo: string;
      //   relatedAccount: string;
      //   relatedRef: string;
      //   uploadStat: string;
      //   deleteStat: string;
      //   uploadDate: Date;
      //   instrumentNo: string;
      //   finCycle: string;
      //   periodCode: string;
      //   misCode: string;
      //   relCust: string;
      //   addlText: string;
      //   misGroup: string;
      //   misHead: string;
      //   misFlag: string;
      //   misGroupTxn: string;
      //   poolCode: string;
      //   dwAcno: string;
      //   //
      //   txnMis1: string;
      //   txnMis2: string;
      //   txnMis3: string;
      //   txnMis4: string;
      //   txnMis5: string;
      //   txnMis6: string;
      //   txnMis7: string;
      //   txnMis8: string;
      //   txnMis9: string;
      //   txnMis10: string;
      //   //
      //   compMis1: string;
      //   compMis2: string;
      //   compMis3: string;
      //   compMis4: string;
      //   compMis5: string;
      //   compMis6: string;
      //   compMis7: string;
      //   compMis8: string;
      //   compMis9: string;
      //   compMis10: string;
      //   //
      //   costCode1: string;
      //   costCode2: string;
      //   costCode3: string;
      //   costCode4: string;
      //   costCode5: string;
      //   //
      //   refRate: number;
      //   calcMethod: string;
      //   reservedFundsRef: string;
      //   txtFileName: string;
      //   fundId: string;
      //   processCode: string;
      //   /*
      //   *fields added later for new audit log impl
      //   */
      //   inputBy: string;
      //   inputTime: Date;
      //   firstTimeAuthStatus: string;
      //   secondTimeAuthStatus: string; 
      //   firstTimeAuthorizer: string;
      //   secondTimeAuthorizer: string;
      //   firstTimeAuthDateStamp: Date;
      //   secondTimeAuthDateStamp: Date;
      //   lastUpdatedBy: string;
      //   udfDetails: any;
      //   /*
      //     added By Fayaz
      //   */
      //  accDesc : string;
      // }
      // export class MedDeUploadDetailPKEntity {
      //   sourceCode: string;
      //   branchCode: string;
      //   batchNo: string;
      //   initiationDate: Date;
      //   currNo: number;
      // }

      /***/

    },

    /***/
    31443:
    /*!**************************************************!*\
      !*** ./src/app/shared/services/toast.service.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ToastService": function ToastService() {
          return (
            /* binding */
            _ToastService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var ng2_izitoast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ng2-izitoast */
      27218);

      var _ToastService = /*#__PURE__*/function () {
        function _ToastService(iziToast) {
          _classCallCheck(this, _ToastService);

          this.iziToast = iziToast;
        }

        _createClass(_ToastService, [{
          key: "successMessage",
          value: function successMessage(title, msg) {
            this.iziToast.success({
              title: title,
              message: msg,
              layout: 2,
              balloon: false,
              position: "topRight",
              progressBarColor: "red",
              pauseOnHover: true
            });
          }
        }, {
          key: "errorMessage",
          value: function errorMessage(title, msg) {
            this.iziToast.error({
              title: title,
              message: msg,
              layout: 2,
              balloon: false,
              position: "topRight",
              progressBarColor: "red",
              pauseOnHover: true
            });
          }
        }, {
          key: "infoMessage",
          value: function infoMessage(title, msg) {
            this.iziToast.info({
              title: title,
              message: msg,
              layout: 2,
              balloon: false,
              position: "topRight",
              progressBarColor: "red",
              pauseOnHover: true
            });
          }
        }]);

        return _ToastService;
      }();

      _ToastService.??fac = function ToastService_Factory(t) {
        return new (t || _ToastService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](ng2_izitoast__WEBPACK_IMPORTED_MODULE_0__.Ng2IzitoastService));
      };

      _ToastService.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: _ToastService,
        factory: _ToastService.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    94066:
    /*!******************************************************************************!*\
      !*** ./src/app/views/process-account-closure/process-acc-closure.service.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "API_URL": function API_URL() {
          return (
            /* binding */
            _API_URL
          );
        },

        /* harmony export */
        "ProcessAccClosureService": function ProcessAccClosureService() {
          return (
            /* binding */
            _ProcessAccClosureService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/config/app.constant */
      3118);
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! file-saver */
      97797);
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! xlsx */
      88031);
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      53882);

      var _API_URL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.acctCloserUrl;
      var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      var EXCEL_EXTENSION = '.xlsx';

      var _ProcessAccClosureService = /*#__PURE__*/function () {
        function _ProcessAccClosureService(http) {
          _classCallCheck(this, _ProcessAccClosureService);

          this.http = http;
        }

        _createClass(_ProcessAccClosureService, [{
          key: "gettingAllProcessedRecord",
          value: function gettingAllProcessedRecord(user_id) {
            console.log(user_id);
            return this.http.get("".concat(_API_URL, "/api2/getAllProcessedRecordsForBulkAndSingle/").concat(user_id));
          }
        }, {
          key: "approveRecord",
          value: function approveRecord(fileName, accountType, inputBy, id, closureType, approveReasonTextArea) {
            return this.http.get("".concat(_API_URL, "/medAccount/closeAccount/").concat(fileName, "/").concat(accountType, "/").concat(inputBy, "/").concat(id, "/").concat(closureType, "/").concat(approveReasonTextArea));
          }
        }, {
          key: "approveRecordForSingle",
          value: function approveRecordForSingle(accountType, inputBy, closureType, id, approveReasonTextArea) {
            console.log(accountType, closureType, id, inputBy);
            return this.http.get("".concat(_API_URL, "/medAccount/closeAccountSingle/").concat(accountType, "/").concat(inputBy, "/").concat(closureType, "/").concat(id, "/").concat(approveReasonTextArea));
          }
        }, {
          key: "exportAsExcel",
          value: function exportAsExcel(json, excelFileName) {
            console.log(excelFileName);
            console.log(json);
            var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_2__.utils.json_to_sheet(json);
            worksheet.blankRows = false;
            var workbook = {
              Sheets: {
                'data': worksheet
              },
              SheetNames: ['data']
            };
            var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_2__.write(workbook, {
              bookType: 'xlsx',
              type: 'array'
            });
            this.saveAsExcelSingle(excelBuffer, excelFileName);
          }
        }, {
          key: "saveAsExcelSingle",
          value: function saveAsExcelSingle(buffer, fileName) {
            var data = new Blob([buffer], {
              type: EXCEL_TYPE
            });
            file_saver__WEBPACK_IMPORTED_MODULE_1__.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
          }
        }, {
          key: "onClickofViewReport",
          value: function onClickofViewReport(fileName, accountType) {
            return this.http.get("".concat(_API_URL, "/file/viewReport/").concat(fileName, "/").concat(accountType));
          }
        }, {
          key: "onClickofViewReportSingle",
          value: function onClickofViewReportSingle(accountType, inputBy, closureType, id) {
            return this.http.get("".concat(_API_URL, "/api2/viewReportForSingleAcc/").concat(accountType, "/").concat(inputBy, "/").concat(closureType, "/").concat(id));
          }
        }, {
          key: "onBulkReject",
          value: function onBulkReject(fileName, accountType, inputBy, id, rejectReasonTextArea) {
            console.log(fileName, accountType, inputBy, id, rejectReasonTextArea);
            return this.http.get("".concat(_API_URL, "/file/rejectBulk/").concat(accountType, "/").concat(fileName, "/").concat(inputBy, "/").concat(id, "/").concat(rejectReasonTextArea));
          }
        }, {
          key: "onSingleReject",
          value: function onSingleReject(accountNumber, accntType, closure, maker, rejectReasonTextArea) {
            console.log("in service", accountNumber, accntType, closure, maker);
            return this.http.get("".concat(_API_URL, "/api2/rejectSingle/").concat(accountNumber, "/").concat(accntType, "/").concat(closure, "/").concat(maker, "/").concat(rejectReasonTextArea));
          }
        }]);

        return _ProcessAccClosureService;
      }();

      _ProcessAccClosureService.??fac = function ProcessAccClosureService_Factory(t) {
        return new (t || _ProcessAccClosureService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
      };

      _ProcessAccClosureService.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjectable"]({
        token: _ProcessAccClosureService,
        factory: _ProcessAccClosureService.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    77514:
    /*!*****************************************************************************************!*\
      !*** ./src/app/views/process-account-closure/process-account-closure-routing.module.ts ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProcessAccountClosureRoutingModule": function ProcessAccountClosureRoutingModule() {
          return (
            /* binding */
            _ProcessAccountClosureRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _process_account_closure_process_account_closure_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./process-account-closure/process-account-closure.component */
      6013);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: "",
        component: _process_account_closure_process_account_closure_component__WEBPACK_IMPORTED_MODULE_0__.ProcessAccountClosureComponent
      }];

      var _ProcessAccountClosureRoutingModule = /*#__PURE__*/_createClass(function _ProcessAccountClosureRoutingModule() {
        _classCallCheck(this, _ProcessAccountClosureRoutingModule);
      });

      _ProcessAccountClosureRoutingModule.??fac = function ProcessAccountClosureRoutingModule_Factory(t) {
        return new (t || _ProcessAccountClosureRoutingModule)();
      };

      _ProcessAccountClosureRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: _ProcessAccountClosureRoutingModule
      });
      _ProcessAccountClosureRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](_ProcessAccountClosureRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    39382:
    /*!*********************************************************************************!*\
      !*** ./src/app/views/process-account-closure/process-account-closure.module.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProcessAccountClosureModule": function ProcessAccountClosureModule() {
          return (
            /* binding */
            _ProcessAccountClosureModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _process_account_closure_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./process-account-closure-routing.module */
      77514);
      /* harmony import */


      var _process_account_closure_process_account_closure_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./process-account-closure/process-account-closure.component */
      6013);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-datatables */
      50481);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ProcessAccountClosureModule = /*#__PURE__*/_createClass(function _ProcessAccountClosureModule() {
        _classCallCheck(this, _ProcessAccountClosureModule);
      });

      _ProcessAccountClosureModule.??fac = function ProcessAccountClosureModule_Factory(t) {
        return new (t || _ProcessAccountClosureModule)();
      };

      _ProcessAccountClosureModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({
        type: _ProcessAccountClosureModule
      });
      _ProcessAccountClosureModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _process_account_closure_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProcessAccountClosureRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](_ProcessAccountClosureModule, {
          declarations: [_process_account_closure_process_account_closure_component__WEBPACK_IMPORTED_MODULE_1__.ProcessAccountClosureComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _process_account_closure_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProcessAccountClosureRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule]
        });
      })();
      /***/

    },

    /***/
    6013:
    /*!************************************************************************************************************!*\
      !*** ./src/app/views/process-account-closure/process-account-closure/process-account-closure.component.ts ***!
      \************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProcessAccountClosureComponent": function ProcessAccountClosureComponent() {
          return (
            /* binding */
            _ProcessAccountClosureComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_shared_models_process_account_closure_resp_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/models/process-account-closure-resp-dto */
      91325);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _process_acc_closure_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../process-acc-closure.service */
      94066);
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      31443);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular-datatables */
      50481);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function ProcessAccountClosureComponent_tr_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipe"](9, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](13, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ProcessAccountClosureComponent_tr_27_Template_button_click_13_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r4);

            var i_r2 = restoredCtx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();

            return ctx_r3.approveReason(i_r2, "");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](14, " Approve ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](16, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ProcessAccountClosureComponent_tr_27_Template_button_click_16_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r4);

            var i_r2 = restoredCtx.index;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();

            return ctx_r5.RejectReason(i_r2, "");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](17, " Reject ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](19, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function ProcessAccountClosureComponent_tr_27_Template_button_click_19_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r4);

            var data_r1 = restoredCtx.$implicit;
            var i_r2 = restoredCtx.index;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();

            return ctx_r6.onClickofViewReport(data_r1.accountType, data_r1.fileName, data_r1.closureType, i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](20, " View Report ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        }

        if (rf & 2) {
          var data_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](data_r1.fileName);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](data_r1.closureType);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](data_r1.accountType);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["????pipeBind2"](9, 8, data_r1.inputTime, "medium"));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](data_r1.status);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("disabled", data_r1.disabled || data_r1.rejectButtonDisabled || ctx_r0.flag[i_r2] || ctx_r0.flag1[i_r2]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("disabled", data_r1.rejectButtonDisabled || data_r1.disabled || ctx_r0.flag2[i_r2] || ctx_r0.flag3[i_r2]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate"](data_r1.checkerId);
        }
      }

      var _ProcessAccountClosureComponent = /*#__PURE__*/function () {
        function _ProcessAccountClosureComponent(processService, ref, toastService) {
          _classCallCheck(this, _ProcessAccountClosureComponent);

          this.processService = processService;
          this.ref = ref;
          this.toastService = toastService;
          this.respArray = [];
          this.dtOptions = {};
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
          this.reasonBoolean = [];
          this.showviewBtn = false;
          this.toProcessTheClosureData = ['fileName', 'closureType', 'accountType', 'inputTime', 'status', 'approve', 'reject', 'viewReport', 'checkerId'];
          this.excel = [];
          this.datafinal = [];
          this.flag = [];
          this.flag1 = [];
          this.flag2 = [];
          this.flag3 = [];
          this.flagReject = [];
          this.processAccountClosureRespDTO = new src_app_shared_models_process_account_closure_resp_dto__WEBPACK_IMPORTED_MODULE_0__.ProcessAccountClosureRespDTO();
          this.excelSingle = Array();
          this.showProgressBarReject = false;
        }

        _createClass(_ProcessAccountClosureComponent, [{
          key: "openDialog",
          value: function openDialog() {// const dialogConfig = new MatDialogConfig();
            // dialogConfig.disableClose = true;
            // dialogConfig.autoFocus = true;
            // dialogConfig.data = {
            //     id: 1,
            //     title: 'Angular For Beginners'
            // };
            // this.dialog.open(AuthorizeAccountClosureComponent, dialogConfig);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginUser = localStorage.getItem('userFromLogin');
            console.log(this.loginUser);
            this.gettingAllProcessedRecord();
            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 5,
              processing: true,
              retrieve: true,
              order: [[3, 'desc']],
              columnDefs: [{
                type: 'date',
                'targets': [3]
              }],
              lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]]
            };
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.dtTrigger.unsubscribe();
          }
        }, {
          key: "gettingAllProcessedRecord",
          value: function gettingAllProcessedRecord() {
            var _this2 = this;

            console.log("this is display processed record");
            this.currentUser = localStorage.getItem("currentUser");

            if (this.currentUser.charAt(0) === '"' && this.currentUser.charAt(this.currentUser.length - 1) === '"') {
              this.currentUser = this.currentUser.substr(1, this.currentUser.length - 2);
            }

            this.processService.gettingAllProcessedRecord(this.currentUser.toString()).subscribe(function (processResp) {
              console.log(processResp);
              console.log(_this2.currentUser);
              _this2.process = processResp.map(function (p) {
                p.enableprogressbar = false;
                console.log(p.status);
                return Object.assign(Object.assign({}, p), {
                  rejectButtonDisabled: p.status === "Rejected" || p.inputBy === _this2.currentUser,
                  disabled: p.status === "APPROVED" || p.inputBy === _this2.currentUser
                });
              });

              _this2.dtTrigger.next();

              console.log(_this2.process);
            });
          }
        }, {
          key: "onClickofApprove",
          value: function onClickofApprove(index, approveReasonTextArea) {
            var _this3 = this;

            console.log("This is approve");
            this.fileName = this.process[index].fileName;
            this.accountType = this.process[index].accountType;
            this.inputBy = this.process[index].inputBy;
            this.id = this.process[index].id;
            this.closureType = this.process[index].closureType;
            this.process[index].showprogressbar = true;
            console.log(this.process[index]);
            console.log(this.fileName);

            if (this.closureType == 'BULK') {
              console.log("this url for bulk", this.closureType);
              this.processService.approveRecord(this.fileName, this.accountType, this.loginUser, this.closureType, this.id, approveReasonTextArea).subscribe(function (approveResp) {
                console.log(approveResp);

                if (approveResp.checkerId) {
                  _this3.process[index].checkerId = approveResp.checkerId;
                }

                var processAccountClosureRespDTO = approveResp;
                var response = processAccountClosureRespDTO.respMeg;

                if (approveResp.respMeg == 'Processed successfully') {
                  console.log("index is", index);
                  _this3.flag[index] = true;
                  console.log("value of flag is", _this3.flag);
                }

                _this3.toastService.infoMessage(response, '');

                _this3.ref.markForCheck();

                _this3.process[index].showprogressbar = false;

                if (approveResp != null) {
                  console.log("enabled the process button");
                  _this3.process[index].showviewBtn = true;
                }
              });
            } else {
              console.log(" this is for single");
              this.processService.approveRecordForSingle(this.accountType, this.loginUser, this.closureType, this.id, approveReasonTextArea).subscribe(function (singleResp) {
                console.log(singleResp);
                var processAccountClosureRespDTO = singleResp;
                var response = processAccountClosureRespDTO.respMeg;

                if (singleResp.checkerId) {
                  _this3.process[index].checkerId = singleResp.checkerId;
                }

                if (singleResp.respMeg == 'Processed successfully') {
                  console.log("index is", index);
                  _this3.flag1[index] = true;
                  console.log("value of flag is", _this3.flag1);
                }

                _this3.toastService.infoMessage(response, ''); //here


                if (singleResp != null) {
                  console.log("enabled the process button");
                  _this3.process[index].showviewBtn = true; //here
                }
              });
            }
          }
        }, {
          key: "onClickofViewReport",
          value: function onClickofViewReport(acctype, fileName, closureType, i) {
            var _this4 = this;

            console.log("This is ViewReport");
            console.log("process", acctype, fileName);

            if (closureType == 'BULK') {
              console.log("inside bulk excel download");
              this.processService.onClickofViewReport(fileName, acctype).subscribe(function (viewResp) {
                console.log(viewResp);
                _this4.excel = viewResp;
                console.log(_this4.excel);

                _this4.processService.exportAsExcel(_this4.excel, 'account_closure');
              });
            } else {
              console.log("inside single excel download", this.process[i]);
              console.log(this.process[i].closureType);
              console.log(this.process[i].accountType);
              console.log(this.process[i].inputBy);
              console.log(this.process[i].id);
              this.processService.onClickofViewReportSingle(this.process[i].accountType, this.process[i].inputBy, this.process[i].closureType, this.process[i].id).subscribe(function (singleExcelDownloadresp) {
                console.log(singleExcelDownloadresp);

                _this4.excelSingle.push(singleExcelDownloadresp);

                console.log(_this4.excelSingle);

                _this4.processService.exportAsExcel(_this4.excelSingle, 'account_closure_Single');

                _this4.excelSingle = [];
              });
            }
          }
        }, {
          key: "onclickOfReject",
          value: function onclickOfReject(i, rejectReasonTextArea) {
            var _this5 = this;

            console.log("on clcik of reject", this.process[i]);
            this.process[i].enableprogressbar = true;

            if (this.process[i].closureType == 'BULK') {
              console.log("this is for bulk");
              this.processService.onBulkReject(this.process[i].fileName, this.process[i].accountType, this.loginUser, this.process[i].id, rejectReasonTextArea).subscribe(function (bulkRejectResp) {
                _this5.ref.markForCheck();

                console.log(bulkRejectResp);

                _this5.ref.markForCheck();

                if (bulkRejectResp) {
                  console.log("index is", i);
                  _this5.flag2[i] = true;
                  console.log("value of flag2 is", _this5.flag2);

                  _this5.ref.markForCheck();

                  _this5.gettingAllProcessedRecord();

                  _this5.toastService.successMessage('Record Rejected successfully', '');

                  _this5.reasonBoolean[i] = false;

                  _this5.ref.markForCheck();

                  _this5.process[i].enableprogressbar = false;
                }
              });
            } else {
              console.log("this is for single");
              this.processService.onSingleReject(this.process[i].accountNumber, this.process[i].accountType, this.process[i].closureType, this.loginUser, rejectReasonTextArea).subscribe(function (singleResp) {
                _this5.ref.markForCheck();

                console.log(singleResp);

                _this5.ref.markForCheck();

                if (singleResp) {
                  console.log("index is", i);
                  _this5.flag3[i] = true;
                  console.log("value of flag3 is", _this5.flag3);

                  _this5.ref.markForCheck();

                  _this5.gettingAllProcessedRecord();

                  _this5.toastService.successMessage('Record Rejected successFully', '');
                }

                _this5.reasonBoolean[i] = false;

                _this5.ref.markForCheck();
              });
            }
          }
        }, {
          key: "approveReason",
          value: function approveReason(i, _approveReason) {
            this.reasonBoolean[i] = true;
            console.log("enter inside method");
            console.log(_approveReason); // Swal.fire({
            //   text: "Enter Remarks",
            //   input: 'text',
            //   showCancelButton: true,
            //   inputValidator: (value) => {
            //     if (!value) {
            //       return 'Please enter remarks!'
            //     }
            //   }   
            // }).then((result) => {
            //   console.log(result);
            //   const r = result.value.trim();
            //   this.approveReasonTextArea = result.value;
            //   if (!r) {
            //     console.log('no value');
            //     return false;
            //   }
            //   if (r) {
            //     console.log(" valid string");
            //     this.onClickofApprove(i, this.approveReasonTextArea);
            //     // Swal.enableButtons();
            //   }
            //   else {
            //     console.log("in valid string");
            //   }
            // });
          }
        }, {
          key: "RejectReason",
          value: function RejectReason(i, rejectReason) {
            this.reasonBoolean[i] = true;
            console.log("enter inside method");
            console.log(rejectReason); // Swal.fire({
            //   text: "Enter Remarks",
            //   input: 'text',
            //   showCancelButton: true,
            //   inputValidator: (value) => {
            //     if (!value) {
            //       return 'Please enter remarks!'
            //     }
            //   }   
            // }).then((result) => {
            //   console.log(result);
            //   const r = result.value.trim();
            //   this.rejectReasonTextArea = result.value;
            //   if (!r) {
            //     console.log('no value');
            //     return false;
            //   }
            //   if (r) {
            //     console.log(" valid string");
            //     this.onclickOfReject(i, this.rejectReasonTextArea);
            //     // Swal.enableButtons();
            //   }
            //   else {
            //     console.log("in valid string");
            //     this.RejectReason(i, rejectReason);
            //   }
            // });
          }
        }, {
          key: "try",
          value: function _try(rejectReason) {
            console.log(rejectReason);
            this.rejectReasonTextArea = rejectReason;
          }
        }, {
          key: "Reject",
          value: function Reject(i) {
            console.log("rejectReasonTextArea from new method is", this.rejectReasonTextArea);
            var result = this.rejectReasonTextArea.trim();
            console.log(result);

            if (result) {
              console.log("valid string");
              this.onclickOfReject(i, this.rejectReasonTextArea);
            } else {
              console.log("invalid string");
              this.toastService.infoMessage('Please enter reason for rejection', '');
            }
          }
        }]);

        return _ProcessAccountClosureComponent;
      }();

      _ProcessAccountClosureComponent.??fac = function ProcessAccountClosureComponent_Factory(t) {
        return new (t || _ProcessAccountClosureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_process_acc_closure_service__WEBPACK_IMPORTED_MODULE_1__.ProcessAccClosureService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService));
      };

      _ProcessAccountClosureComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({
        type: _ProcessAccountClosureComponent,
        selectors: [["npr-process-account-closure"]],
        decls: 28,
        vars: 3,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], ["id", "dbTable1", "datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [3, "disabled", "click"], [3, "click"]],
        template: function ProcessAccountClosureComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3, "Process The Account Closure");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "table", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](7, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](8, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](9, "file name");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](10, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](11, "closure type");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](12, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](13, "account type");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](14, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](15, "upload date");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](16, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](17, "status");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](18, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](19, "approve");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](21, "reject");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](23, "view report");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](24, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](25, "checker id");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](26, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](27, ProcessAccountClosureComponent_tr_27_Template, 23, 11, "tr", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngForOf", ctx.process);
          }
        },
        directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9jZXNzLWFjY291bnQtY2xvc3VyZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_views_process-account-closure_process-account-closure_module_ts-es5.js.map