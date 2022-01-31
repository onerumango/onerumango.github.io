(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_initiate-account-closure_initiate-account-closure_module_ts"], {
    /***/
    91486:
    /*!***********************************************!*\
      !*** ./src/app/shared/config/app.constant.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppConstants": function AppConstants() {
          return (
            /* binding */
            _AppConstants
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment.prod */
      93963);

      var _AppConstants = /*#__PURE__*/function () {
        function _AppConstants() {
          _classCallCheck(this, _AppConstants);
        }

        _createClass(_AppConstants, null, [{
          key: "baseURL",
          get:
          /*
          *Base URL is not used anywhere so dont change it and dont delete it
          */
          function get() {
            return src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.MEDIAN_URL;
          }
        }, {
          key: "acctCloserUrl",
          get: function get() {
            return src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.ACC_CLOSER_URL;
          }
        }]);

        return _AppConstants;
      }();
      /***/

    },

    /***/
    79434:
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
    30686:
    /*!********************************************************************!*\
      !*** ./src/app/shared/services/account-closure-service.service.ts ***!
      \********************************************************************/

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
        "AccountClosureServiceService": function AccountClosureServiceService() {
          return (
            /* binding */
            _AccountClosureServiceService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      97361);
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! file-saver */
      28461);
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! xlsx */
      71723);
      /* harmony import */


      var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/config/app.constant */
      91486);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      1858);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      33549);

      var _API_URL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_2__.AppConstants.acctCloserUrl;
      var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      var EXCEL_EXTENSION = '.xlsx';

      var _AccountClosureServiceService = /*#__PURE__*/function () {
        function _AccountClosureServiceService(http) {
          _classCallCheck(this, _AccountClosureServiceService);

          this.http = http;
          this.datafinal = [];
          this.paramSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject({});
          this.getNavParam = this.paramSource.asObservable();
          this.excel = [];
        }

        _createClass(_AccountClosureServiceService, [{
          key: "sendNavParam",
          value: function sendNavParam(params) {
            this.paramSource.next(params);
          }
        }, {
          key: "onSingleClosure",
          value: function onSingleClosure(data, inputby) {
            console.log(data);
            return this.http.post("".concat(_API_URL, "/api2/createAccountClosure/").concat(inputby), data);
          }
        }, {
          key: "onViewOfSingleClsureType",
          value: function onViewOfSingleClsureType(accType, closureType, accountNumber) {
            console.log("this is in service of ");
            return this.http.get("".concat(_API_URL, "/api2/getDetailsSingleReport/").concat(accType, "/").concat(closureType, "/").concat(accountNumber));
          }
        }, {
          key: "gettingAccountClosureSummary",
          value: function gettingAccountClosureSummary(currentUser) {
            return this.http.get("".concat(_API_URL, "/api2/getSummary/").concat(currentUser));
          } // -------------After Edit of Bulk Closure----------

        }, {
          key: "gettingEditData",
          value: function gettingEditData(inputBy) {
            return this.http.get("".concat(_API_URL, "/api2/modify/").concat(inputBy));
          } //--------------file upload-------------

        }, {
          key: "onFileUpload",
          value: function onFileUpload(file, accountType, closure, inputBy) {
            console.log("this is in service", file);
            console.log("checing null or not", accountType);
            console.log(closure);
            var formData = new FormData();
            formData.append('file', file);
            return this.http.post("".concat(_API_URL, "/file/saveFileDataToDB/").concat(accountType, "/").concat(closure, "/").concat(inputBy), formData); // ------------For upload Percentage------
            // return this.http.post(`${API_URL}/api2/fileUpload`, formData,{reportProgress: true, observe: 'events'})
          } // ------------- Excel Download without header color------------

        }, {
          key: "exportAsExcelFile",
          value: function exportAsExcelFile(json, excelFileName) {
            console.log(excelFileName);
            console.log(json);
            var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_1__.utils.json_to_sheet(json);
            var workbook = {
              Sheets: {
                'data': worksheet
              },
              SheetNames: ['data']
            };
            var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_1__.write(workbook, {
              bookType: 'xlsx',
              type: 'array'
            });
            this.saveAsExcelFile(excelBuffer, excelFileName);
          }
        }, {
          key: "saveAsExcelFile",
          value: function saveAsExcelFile(buffer, fileName) {
            var data = new Blob([buffer], {
              type: EXCEL_TYPE
            });
            file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
          } // --------------Excel Download for Single---------------

        }, {
          key: "exportAsExcelForSingleAccount",
          value: function exportAsExcelForSingleAccount(json, excelFileName) {
            console.log(excelFileName);
            console.log(json);
            var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_1__.utils.json_to_sheet(json);
            worksheet.blankRows = false;
            var workbook = {
              Sheets: {
                'data': worksheet
              },
              SheetNames: ['data']
            };
            var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_1__.write(workbook, {
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
            file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
          } // -------------------Excel Download color---------------------------
          //getting excel for bulk

        }, {
          key: "getExcel",
          value: function getExcel(filename, accountType) {
            console.log("this is send fileName and getFile", accountType);
            console.log(filename);
            return this.http.get("".concat(_API_URL, "/file/download/").concat(filename, "/").concat(accountType));
          }
        }, {
          key: "onDeletingTheReocrd",
          value: function onDeletingTheReocrd(fileName, accountType, inputBy) {
            console.log("file", fileName, "accType", accountType, "maker", inputBy);
            return this.http.get("".concat(_API_URL, "/file/cancelProcess/").concat(accountType, "/").concat(fileName, "/").concat(inputBy));
          }
        }, {
          key: "onDeletingSingle",
          value: function onDeletingSingle(accountNumber, accntType, closure, maker) {
            console.log("in service", accountNumber, accntType, closure, maker);
            return this.http.get("".concat(_API_URL, "/api2/cancelProcess/").concat(accountNumber, "/").concat(accntType, "/").concat(closure, "/").concat(maker));
          } // -----------Process the Bulk record---------

        }, {
          key: "processTheBulkRecord",
          value: function processTheBulkRecord(fileName, accountType, inputBy) {
            console.log("file", fileName, "accType", accountType, "maker", inputBy);
            return this.http.get("".concat(_API_URL, "/api2/process/").concat(fileName, "/").concat(accountType, "/").concat(inputBy));
          } // -----------Process the Single record---------

        }, {
          key: "processTheSingleRecord",
          value: function processTheSingleRecord(accountNumber, inputBy) {
            console.log(accountNumber, "maker", inputBy);
            return this.http.get("".concat(_API_URL, "/api2/processStatus/").concat(accountNumber, "/").concat(inputBy));
          }
        }]);

        return _AccountClosureServiceService;
      }();

      _AccountClosureServiceService.ɵfac = function AccountClosureServiceService_Factory(t) {
        return new (t || _AccountClosureServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
      };

      _AccountClosureServiceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _AccountClosureServiceService,
        factory: _AccountClosureServiceService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    14819:
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      68465);
      /* harmony import */


      var src_app_shared_models_FetchUserForSingleAccClosureReqDTO__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/models/FetchUserForSingleAccClosureReqDTO */
      79434);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      1858);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      869);
      /* harmony import */


      var src_app_shared_services_account_closure_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/account-closure-service.service */
      30686);
      /* harmony import */


      var ng2_izitoast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng2-izitoast */
      97385);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      93135);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      7005);

      function AccountClosureDetailsComponent_div_31_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please Select Account Type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function AccountClosureDetailsComponent_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AccountClosureDetailsComponent_div_31_div_1_Template, 2, 0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.accountClosureForm.controls["accountType"].errors.required);
        }
      }

      function AccountClosureDetailsComponent_div_32_div_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please Enter Account Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function AccountClosureDetailsComponent_div_32_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AccountClosureDetailsComponent_div_32_div_4_div_1_Template, 2, 0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.accountClosureForm.controls["accountNumber"].errors.required);
        }
      }

      function AccountClosureDetailsComponent_div_32_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Account Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AccountClosureDetailsComponent_div_32_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r10.fetchUserSingle.accountNumber = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, AccountClosureDetailsComponent_div_32_div_4_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonly", ctx_r1.editFlag)("ngModel", ctx_r1.fetchUserSingle.accountNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.accountClosureForm.controls["accountNumber"].invalid && (ctx_r1.accountClosureForm.controls["accountNumber"].dirty || ctx_r1.accountClosureForm.controls["accountNumber"].touched));
        }
      }

      function AccountClosureDetailsComponent_div_33_div_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please Enter Branch Code ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function AccountClosureDetailsComponent_div_33_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AccountClosureDetailsComponent_div_33_div_4_div_1_Template, 2, 0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r12.accountClosureForm.controls["branchCode"].errors.required);
        }
      }

      function AccountClosureDetailsComponent_div_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Branch Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AccountClosureDetailsComponent_div_33_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r14.fetchUserSingle.branchCode = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, AccountClosureDetailsComponent_div_33_div_4_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonly", ctx_r2.editFlag)("ngModel", ctx_r2.fetchUserSingle.branchCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.accountClosureForm.controls["branchCode"].invalid && (ctx_r2.accountClosureForm.controls["branchCode"].dirty || ctx_r2.accountClosureForm.controls["branchCode"].touched));
        }
      }

      function AccountClosureDetailsComponent_div_34_div_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please Enter Reason For Closure ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function AccountClosureDetailsComponent_div_34_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AccountClosureDetailsComponent_div_34_div_4_div_1_Template, 2, 0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r16.accountClosureForm.controls["reasonForClosure"].errors.required);
        }
      }

      function AccountClosureDetailsComponent_div_34_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Reason For Closure");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AccountClosureDetailsComponent_div_34_Template_input_ngModelChange_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r18.fetchUserSingle.reasonForClosure = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, AccountClosureDetailsComponent_div_34_div_4_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonly", ctx_r3.editFlag)("ngModel", ctx_r3.fetchUserSingle.reasonForClosure);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.accountClosureForm.controls["reasonForClosure"].invalid && (ctx_r3.accountClosureForm.controls["reasonForClosure"].dirty || ctx_r3.accountClosureForm.controls["reasonForClosure"].touched));
        }
      }

      function AccountClosureDetailsComponent_div_35_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function AccountClosureDetailsComponent_div_35_Template_input_change_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r20.selectFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonly", ctx_r4.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.fileName);
        }
      }

      function AccountClosureDetailsComponent_div_36_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_div_36_div_2_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r24.onSubmitFile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Submit File");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r22.submitFile && ctx_r22.accountClosureForm.controls["accountType"].invalid);
        }
      }

      function AccountClosureDetailsComponent_div_36_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_div_36_div_3_Template_button_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r26.onSubmitSingle($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r23.accountClosureForm.invalid);
        }
      }

      function AccountClosureDetailsComponent_div_36_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AccountClosureDetailsComponent_div_36_div_2_Template, 3, 1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AccountClosureDetailsComponent_div_36_div_3_Template, 3, 1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_div_36_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r28.generateExcel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "View Report");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r5.singleCall);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.singleCall);
        }
      }

      function AccountClosureDetailsComponent_div_37_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_div_37_div_8_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r34.editValues();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function AccountClosureDetailsComponent_div_37_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function AccountClosureDetailsComponent_div_37_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_div_37_div_10_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r36.onClickOfViewToData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "View Report");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function AccountClosureDetailsComponent_div_37_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_div_37_div_11_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r39);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r38.onClickOfViewToDatabulk();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "View Report");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function AccountClosureDetailsComponent_div_37_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Submit File");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_div_37_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r41);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r40.editValues();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, AccountClosureDetailsComponent_div_37_div_8_Template, 3, 0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, AccountClosureDetailsComponent_div_37_div_9_Template, 3, 0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, AccountClosureDetailsComponent_div_37_div_10_Template, 3, 0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, AccountClosureDetailsComponent_div_37_div_11_Template, 3, 0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r6.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.fetchUserSingle.closureType == "SINGLE");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.fetchUserSingle.closureType == "BULK");
        }
      }

      var _AccountClosureDetailsComponent = /*#__PURE__*/function () {
        function _AccountClosureDetailsComponent(formBuilder, cdr, router, accClosure, iziToast, route, roleService) {
          _classCallCheck(this, _AccountClosureDetailsComponent);

          this.formBuilder = formBuilder;
          this.cdr = cdr;
          this.router = router;
          this.accClosure = accClosure;
          this.iziToast = iziToast;
          this.route = route;
          this.roleService = roleService;
          this.fetchUserSingle = new src_app_shared_models_FetchUserForSingleAccClosureReqDTO__WEBPACK_IMPORTED_MODULE_0__.FetchUserForSingleAccClosureReqDTO();
          this.fetch = new src_app_shared_models_FetchUserForSingleAccClosureReqDTO__WEBPACK_IMPORTED_MODULE_0__.FetchUserForSingleAccClosureReqDTO();
          this.selected = 'dormant';
          this.accountClosure = new src_app_shared_models_FetchUserForSingleAccClosureReqDTO__WEBPACK_IMPORTED_MODULE_0__.FetchUserForSingleAccClosureReqDTO();
          this.submitFile = true;
          this.modifyScreen = false;
        }

        _createClass(_AccountClosureDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.currentUser = localStorage.getItem('currentUser').replace(/['"]+/g, '');
            this.navSubscription = this.roleService.getNavParam.subscribe(function (data) {
              return _this.initiateAccClosure = data;
            });
            this.accountClosureForm = this.formBuilder.group({
              closureType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
              accountType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
              accountNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[0-9 \-\']+')]],
              branchCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[0-9 \-\']+')]],
              reasonForClosure: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
            });
            console.log(this.route.snapshot.queryParams);

            if (this.route.snapshot.queryParams.closureType) {
              console.log("Query params");
              this.modifyScreen = true;
              this.editFlag = true;
            }

            this.fetchUserSingle.modNo = this.initiateAccClosure.queryParams.modNo;
            this.fetchUserSingle.modNo = this.initiateAccClosure.queryParams.modNo;
            this.fetchUserSingle.closureType = this.initiateAccClosure.queryParams.closureType;
            this.fetchUserSingle.accountNumber = this.initiateAccClosure.queryParams.accountNumber;
            this.fetchUserSingle.accountType = this.initiateAccClosure.queryParams.accountType;
            this.fetchUserSingle.recordStatus = this.initiateAccClosure.queryParams.record;
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
            // this.id=params['id']
            // console.log("idddd",this.id);
            // });

            console.log(this.fetchUserSingle);
            console.log(this.fetchUserSingle.verifiedStatus);

            if (this.fetchUserSingle.closureType == 'SINGLE') {
              this.data = 'SINGLE';
              console.log('inside bulk', this.fetchUserSingle.closureType);
            } else {
              this.data = 'BULK';
              this.data = this.singleCall;
            }

            this.cdr.markForCheck();
            console.log(this.fetchUserSingle.accountType);
            this.selected = this.fetchUserSingle.accountType;
            console.log(this.selected);
            this.radioSelectred = this.fetchUserSingle.closureType; // this.accClosure.gettingEditData(this.currentUser).subscribe(dataOfdit => {
            //   console.log(dataOfdit);
            // })

            if (this.fetchUserSingle.recordStatus == 'C') {
              this.fetchUserSingle.recordStatus = 'CLOSE';
            }

            if (this.fetchUserSingle.recordStatus == 'O') {
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

            this.cdr.markForCheck();
          }
        }, {
          key: "onClickOfBulk",
          value: function onClickOfBulk() {
            console.log("this is bulk call");
            this.singleCall = false;
            this.accountClosureForm.get('closureType').setValue('BULK');
          }
        }, {
          key: "onclickOfSingle",
          value: function onclickOfSingle() {
            console.log("this is single call");
            this.singleCall = true;
            this.accountClosureForm.get('closureType').setValue('SINGLE');
          }
        }, {
          key: "selectFile",
          value: function selectFile(event) {
            console.log("this is select File");
            console.log(event);

            if (!this.accountClosureForm.get('accountType').value) {
              console.log("inisde if"); // Swal.fire(
              //   {
              //     title:"Please enter Account Type"
              //   }

              this.iziToast.show({
                message: "Please enter Account Type",
                image: "assets/images/user.png",
                icon: 'ico ico-success',
                theme: "dark",
                layout: 2,
                // imageWidth:50,
                balloon: false,
                position: "topRight",
                progressBarColor: "green",
                pauseOnHover: true
              });
            } else {
              this.selectedFiles = event.target.files;
              this.sizeOfFile = this.selectedFiles.item(0).size;
              console.log(this.sizeOfFile);
              console.log(this.selectedFiles);
              console.log(this.selectedFiles[0].name);
              this.fileName = this.selectedFiles[0].name; // this.showProgressBar=true;

              setTimeout(function () {// this.showProgressBar=false;
              }, 8000);
              this.submitFile = false;
            }
          }
        }, {
          key: "onSubmitSingle",
          value: function onSubmitSingle(data) {
            var _this2 = this;

            console.log("on submit Single", data);
            console.log(this.accountClosureForm.value); // this.accountClosure.accountNumber = this.accountClosureForm.get('accountNumber').value;
            // this.accountClosure.accountType = this.accountClosureForm.get('accountType').value;
            // this.accountClosure.branchCode = this.accountClosureForm.get('branchCode').value;
            // this.accountClosure.reasonForClosure = this.accountClosureForm.get('reasonForClosure').value;

            console.log(this.accountClosureForm);
            console.log(this.accountClosureForm.value);
            this.fetchUserSingle.inputBy = this.currentUser; // this.showProgressBarSingle=true;

            this.accClosure.onSingleClosure(this.accountClosureForm.value, this.fetchUserSingle.inputBy).subscribe(function (singleClosureData) {
              console.log(singleClosureData);
              console.log(singleClosureData.errorDesc);
              var responseMsg = singleClosureData.errorDesc;

              if (responseMsg == 'S' || responseMsg === "S") {
                _this2.fetchUserSingle = singleClosureData;
                console.log(_this2.fetchUserSingle);
                console.log(_this2.fetchUserSingle);

                if (_this2.fetchUserSingle.recordStatus == 'O') {
                  _this2.fetchUserSingle.recordStatus = 'OPEN';
                }

                if (_this2.fetchUserSingle.verifiedStatus == 'U') {
                  _this2.fetchUserSingle.verifiedStatus = 'UNAUTHORIZED';
                }

                if (_this2.fetchUserSingle.verifiedOnce == 'N') {
                  _this2.fetchUserSingle.verifiedOnce = 'NO';
                }

                _this2.iziToast.show({
                  message: "Record Successfully Uploaded",
                  image: "assets/images/user.png",
                  icon: 'ico ico-success',
                  theme: "dark",
                  layout: 2,
                  // imageWidth:50,
                  balloon: false,
                  position: "topRight",
                  progressBarColor: "green",
                  pauseOnHover: true
                }); // Swal.fire({
                //   title: "Record Successfully Uploaded",
                //   // type: "success"
                // })

              } else {
                // Swal.fire({
                //   title: responseMsg,
                //   type: "warning"
                // })
                _this2.iziToast.show({
                  message: responseMsg,
                  image: "assets/images/user.png",
                  icon: 'ico ico-error',
                  theme: "dark",
                  layout: 2,
                  // imageWidth:50,
                  balloon: false,
                  position: "topRight",
                  progressBarColor: "green",
                  pauseOnHover: true
                });
              } // this.showProgressBarSingle=false; 

            }); // this.accountClosureForm.reset();
            // this.submitted = true;
          }
        }, {
          key: "editValues",
          value: function editValues() {
            this.editFlag = false;
          }
        }, {
          key: "onClickOfViewToDatabulk",
          value: function onClickOfViewToDatabulk() {
            console.log("bulk"); // else{

            if (this.fetchUserSingle.closureType == 'BULK') {
              console.log("insdie bulk", this.fetchUserSingle);
              console.log("accont Type", this.fetchUserSingle.accountType);
              console.log("closure Tpye", this.fetchUserSingle.closureType);
              console.log("finle Name", this.fetchUserSingle.fileName); // console.log("fetch",this.fetch);
              // this.bulkAuditData=JSON.stringify(this.fetchUserSingle);
              // console.log(this.bulkAuditData);
              // localStorage.setItem("bulkAudit",this.bulkAuditData);
              // console.log("this should be in else of bulk",this.fetchUserSingle.closureType);

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
                  processStatus: this.fetchUserSingle.processStatus,
                  Desc: this.fetchUserSingle.accountLinkageDesc,
                  //-------------------------------------
                  closeStatusInputBy: this.fetchUserSingle.closeStatusInputBy,
                  closeStatusInputTime: this.fetchUserSingle.closeStatusInputTime,
                  closeStatus: this.fetchUserSingle.closeStatus,
                  icliqAvlBal: this.fetchUserSingle.icliqAvlBal,
                  icliqBalance: this.fetchUserSingle.icliqBalance,
                  icliqStatus: this.fetchUserSingle.icliqStatus,
                  makerId: this.fetchUserSingle.makerId,
                  makerInputTime: this.fetchUserSingle.makerInputTime,
                  accls: this.fetchUserSingle.accls,
                  lastTransactionDetail: this.fetchUserSingle.lastTransactionDetail,
                  blockedAmount: this.fetchUserSingle.blockedAmount,
                  deStatus: this.fetchUserSingle.deStatus,
                  linkedAccounts: this.fetchUserSingle.linkedAccounts,
                  checkerId: this.fetchUserSingle.checkerId,
                  checkerInputTime: this.fetchUserSingle.checkerInputTime //----------------------------------

                }
              };
              this.accClosure.sendNavParam(navigationExtras);
              this.router.navigate(['/account-closure/viewReportOfAccountClosure']); // this.router.navigate(['account-closure/viewReportOfAccountClosure'],navigationExtras);
            }
          }
        }, {
          key: "onClickOfViewToData",
          value: function onClickOfViewToData() {
            var _this3 = this;

            console.log("this is view", this.fetchUserSingle.closureType);
            localStorage.setItem("accountTypeForProcess", this.fetchUserSingle.accountType);
            localStorage.setItem("closureTypeForBulk", this.fetchUserSingle.closureType);
            console.log("bulk", this.fetchUserSingle.closureType); // if(this.fetchUserSingle.closureType=="SINGLE")
            // {

            console.log("inisde if of single edit screnn");
            this.accClosure.onViewOfSingleClsureType(this.fetchUserSingle.accountType, this.fetchUserSingle.closureType, this.fetchUserSingle.accountNumber).subscribe(function (viewReportOfSingleResp) {
              console.log(viewReportOfSingleResp);
              _this3.fetch = viewReportOfSingleResp;
              console.log(_this3.fetchUserSingle);
              console.log(_this3.fetch);
              var navigationExtras = {
                queryParams: {
                  closureTypeView: _this3.fetch.closureType,
                  accountNumberView: _this3.fetch.accountNumber,
                  accountTypeview: _this3.fetch.accountType,
                  creator: _this3.fetch.inputBy,
                  record: _this3.fetch.recordStatus,
                  authStatus: _this3.fetch.verifiedStatus,
                  modficationNo: _this3.fetch.modNo,
                  creatorDate: _this3.fetch.inputTime,
                  authDate: _this3.fetch.verifiedTime,
                  authFirsTime: _this3.fetch.verifiedOnce,
                  authorizer: _this3.fetch.verifiedBy,
                  acyCurrBalance: _this3.fetch.acyCurrBalance,
                  frozenView: _this3.fetch.frozen,
                  branchCode: _this3.fetch.branchCode,
                  dorm: _this3.fetch.dorm,
                  lcyCurrBalance: _this3.fetch.lcyCurrBalance,
                  acSatNoCr: _this3.fetch.acSatNoCr,
                  acyAvlBal: _this3.fetch.acyAvlBal,
                  fileName: _this3.fetch.fileName,
                  accStatus: _this3.fetch.accountStatus,
                  flexRecord: _this3.fetch.recordStatusFromFlexCube,
                  custId: _this3.fetch.customerId,
                  valueDate: _this3.fetch.valueDate,
                  debit: _this3.fetch.acStatNoDr,
                  file: _this3.fetch.fileName,
                  processStatus: _this3.fetch.processStatus,
                  Desc: _this3.fetch.accountLinkageDesc,
                  //------------------------------
                  closeStatusInputBy: _this3.fetch.closeStatusInputBy,
                  closeStatusInputTime: _this3.fetch.closeStatusInputTime,
                  closeStatus: _this3.fetch.closeStatus,
                  icliqAvlBal: _this3.fetch.icliqAvlBal,
                  icliqBalance: _this3.fetch.icliqBalance,
                  icliqStatus: _this3.fetch.icliqStatus,
                  makerId: _this3.fetch.makerId,
                  makerInputTime: _this3.fetch.makerInputTime,
                  accls: _this3.fetch.accls,
                  lastTransactionDetail: _this3.fetch.lastTransactionDetail,
                  blockedAmount: _this3.fetch.blockedAmount,
                  deStatus: _this3.fetch.deStatus,
                  linkedAccounts: _this3.fetch.linkedAccounts,
                  checkerId: _this3.fetch.checkerId,
                  checkerInputTime: _this3.fetch.checkerInputTime //------------------------------

                }
              }; // console.log("edit data",this.fetch);
              // localStorage.setItem('singledta',JSON.stringify(this.fetch));

              _this3.router.navigate(['account-closure/viewReportOfAccountClosure'], navigationExtras);
            }); // }
          }
        }, {
          key: "onSubmitFile",
          value: function onSubmitFile() {
            var _this4 = this;

            console.log("on submit"); // if(this.accountClosureForm.controls.accountType==null)
            // {
            //   Swal.fire({
            //     title: 'Please Enter All the Field',
            //     type: "warning"
            //   });
            //   this.submitFile=true;
            // }
            // else{

            this.accountClosureForm.get('closureType').setValue('BULK');
            console.log(this.accountClosureForm.value);
            console.log(this.accountClosureForm.controls.accountType.value);
            this.sendAccountType = this.accountClosureForm.controls.accountType.value;
            console.log(this.accountClosureForm.controls.closureType.value);
            this.sendClosureType = this.accountClosureForm.controls.closureType.value;
            this.currentFileUpload = this.selectedFiles.item(0);
            this.showSubmitProgressBar = true;

            if (!this.sendAccountType) {
              // Swal.fire(
              //   {
              //     title:"AccountType is Mandatory"
              //   }
              // );
              this.iziToast.show({
                message: "AccountType is Mandatory",
                image: "assets/images/user.png",
                icon: 'ico ico-success',
                theme: "dark",
                layout: 2,
                // imageWidth:50,
                balloon: false,
                position: "topRight",
                progressBarColor: "red",
                pauseOnHover: true
              });
              this.showSubmitProgressBar = false;
            } else {
              this.accClosure.onFileUpload(this.currentFileUpload, this.sendAccountType, this.sendClosureType, this.currentUser).subscribe(function (fileResp) {
                // ------------For upload Percentage------------
                // if (fileResp.type === HttpEventType.UploadProgress) {
                //   this.percentDone = Math.round(100 * fileResp.loaded / fileResp.total);
                // } else if (event instanceof HttpResponse) {
                //   this.uploadSuccess = true;
                // }
                console.log(fileResp);
                _this4.fetchUserSingle = fileResp;

                if (_this4.fetchUserSingle.errorDesc == 'S') {
                  _this4.enableView = true;
                  _this4.submitFile = true;

                  _this4.iziToast.show({
                    message: "File uploaded sucessfully",
                    image: "assets/images/user.png",
                    icon: 'ico ico-success',
                    theme: "dark",
                    layout: 2,
                    // imageWidth:50,
                    balloon: false,
                    position: "topRight",
                    progressBarColor: "green",
                    pauseOnHover: true
                  }); // Swal.fire(
                  //   {
                  //     title:"File uploaded sucessfully"
                  //   }


                  _this4.showSubmitProgressBar = false;
                  _this4.showAuditlog = true;
                } else {
                  // Swal.fire(
                  //   {
                  //     title:this.fetchUserSingle.errorDesc
                  //   }
                  // );
                  _this4.iziToast.show({
                    message: _this4.fetchUserSingle.errorDesc,
                    image: "assets/images/user.png",
                    icon: 'ico ico-error',
                    theme: "dark",
                    layout: 2,
                    // imageWidth:50,
                    balloon: false,
                    position: "topRight",
                    progressBarColor: "red",
                    pauseOnHover: true
                  });

                  _this4.showSubmitProgressBar = false;
                } // console.log(this.fetchUserSingle);
                // if(fileResp!=null)
                // {
                //   this.showSubmitProgressBar=false;
                //   Swal.fire(
                //    {
                //      title:"File upload SucessFully"
                //    }
                //   )
                // }
                // else{
                //   Swal.fire(
                //     {
                //       title:"Failes to uplaod//present"
                //     }
                //   )
                // }
                //  else if(this.fetchUserSingle==null)
                //   {
                //     Swal.fire(
                //       {
                //         title:"Failed to upload File"
                //       }
                //     );
                //     this.showAuditlog=false;
                //     this.showSubmitProgressBar=false;
                //   }
                //  else if (this.fetchUserSingle != null) {
                //     Swal.fire({
                //       title: 'File Uploaded SuccessFully',
                //       // type: "success"
                //     })
                //   this.enableView=true;
                //   this.showSubmitProgressBar=false;
                //   this.submitFile=true;
                //   }
                //   else if(this.fetchUserSingle.inputBy == null ||
                //     this.fetchUserSingle.inputBy == "")
                //   {
                //     Swal.fire({
                //       title: 'File Already Present',
                //       type: "warning"
                //     })
                //   }
                //   else if(this.fetchUserSingle==null)
                //   {
                //     Swal.fire({
                //       title: 'Server error',
                //       type: "warning"
                //     }) 
                //   }
                //   else {
                //     Swal.fire({
                //       title: 'File Upload Failed',
                //       type: "warning"
                //     })
                //   }

              });
            }
          }
        }, {
          key: "generateExcel",
          value: function generateExcel() {
            this.router.navigate(['initiate-account-closure/viewReport']); // this.accClosure.generateExcel(this.excel);

            console.log("bulk"); // else{

            if (this.fetchUserSingle.closureType == 'BULK') {
              console.log("insdie bulk", this.fetchUserSingle);
              console.log("accont Type", this.fetchUserSingle.accountType);
              console.log("closure Tpye", this.fetchUserSingle.closureType);
              console.log("finle Name", this.fetchUserSingle.fileName); // console.log("fetch",this.fetch);
              // this.bulkAuditData=JSON.stringify(this.fetchUserSingle);
              // console.log(this.bulkAuditData);
              // localStorage.setItem("bulkAudit",this.bulkAuditData);
              // console.log("this should be in else of bulk",this.fetchUserSingle.closureType);

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
        }]);

        return _AccountClosureDetailsComponent;
      }();

      _AccountClosureDetailsComponent.ɵfac = function AccountClosureDetailsComponent_Factory(t) {
        return new (t || _AccountClosureDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_account_closure_service_service__WEBPACK_IMPORTED_MODULE_1__.AccountClosureServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng2_izitoast__WEBPACK_IMPORTED_MODULE_2__.Ng2IzitoastService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__.RoleService));
      };

      _AccountClosureDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _AccountClosureDetailsComponent,
        selectors: [["npr-account-closure-details"]],
        decls: 38,
        vars: 11,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "dbCardStyle", "cardWidth"], [1, "row", "gy-4", "justify-content-center"], [1, "col-12"], [1, "row", "g-2", "justify-content-center"], [1, "col-sm-4", "col-5"], [1, "radio", "radioStyle"], ["id", "radio-1", "name", "radio", "type", "radio", "checked", "", 3, "readonly", "click"], ["for", "radio-1", 1, "radio-label"], ["id", "radio-2", "name", "radio", "type", "radio", 3, "readonly", "click"], ["for", "radio-2", 1, "radio-label"], ["for", "roleName", 1, "formLbl"], ["formControlName", "accountType", "aria-label", "Default select example", 1, "form-select", 3, "ngModel", "ngModelChange"], ["selected", ""], ["value", "Dormant"], ["value", "OverDrawn Accounts"], ["value", "Unclaimed"], ["class", "errorColor", 4, "ngIf"], ["class", "col-12", 4, "ngIf"], [1, "errorColor"], [4, "ngIf"], ["id", "accountNumber", "placeholder", "Account Number", "required", "", "formControlName", "accountNumber", "value", "", 1, "form-control", 3, "readonly", "ngModel", "ngModelChange"], ["id", "branchCode", "placeholder", "Branch Code", "required", "", "formControlName", "branchCode", "value", "", 1, "form-control", 3, "readonly", "ngModel", "ngModelChange"], ["id", "", "placeholder", "Reason For Closure", "required", "", "formControlName", "reasonForClosure", "value", "", 1, "form-control", 3, "readonly", "ngModel", "ngModelChange"], [1, "fileUpload"], [1, "formS"], ["data-text", "File Upload", 1, "file-upload-wrapper"], ["name", "file-upload-field", "type", "file", "value", "", 1, "file-upload-field", 3, "readonly", "change"], [2, "font-size", "11px", "color", "#a30202"], [1, "row", "g-3", "pb-3", "justify-content-center", "pt-3"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], ["routerLink", "/initiate-account-closure", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary"], ["routerLink", "/initiate-account-closure", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "click"]],
        template: function AccountClosureDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Account Closure");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_Template_input_click_11_listener() {
              return ctx.onClickOfBulk();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Bulk");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AccountClosureDetailsComponent_Template_input_click_16_listener() {
              return ctx.onclickOfSingle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Single");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Account Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "select", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AccountClosureDetailsComponent_Template_select_ngModelChange_22_listener($event) {
              return ctx.fetchUserSingle.accountType = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Account Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Dormant");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "OverDrawn Accounts");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Unclaimed");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, AccountClosureDetailsComponent_div_31_Template, 2, 1, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, AccountClosureDetailsComponent_div_32_Template, 5, 3, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, AccountClosureDetailsComponent_div_33_Template, 5, 3, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, AccountClosureDetailsComponent_div_34_Template, 5, 3, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, AccountClosureDetailsComponent_div_35_Template, 7, 2, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, AccountClosureDetailsComponent_div_36_Template, 10, 2, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, AccountClosureDetailsComponent_div_37_Template, 12, 4, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.accountClosureForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonly", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonly", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.fetchUserSingle.accountType);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.accountClosureForm.controls["accountType"].invalid && (ctx.accountClosureForm.controls["accountType"].dirty || ctx.accountClosureForm.controls["accountType"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.singleCall);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.singleCall);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.singleCall);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.singleCall);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.modifyScreen);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.modifyScreen || ctx.editFlag);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink],
        styles: [".errorColor[_ngcontent-%COMP%] {\n  color: #e6224a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQtY2xvc3VyZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKIiwiZmlsZSI6ImFjY291bnQtY2xvc3VyZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yQ29sb3J7XHJcbiAgICBjb2xvcjogI2U2MjI0YTtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    19886:
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      869);
      /* harmony import */


      var _account_closure_details_account_closure_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./account-closure-details/account-closure-details.component */
      14819);
      /* harmony import */


      var _initiate_account_closure_initiate_account_closure_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./initiate-account-closure/initiate-account-closure.component */
      3059);
      /* harmony import */


      var _view_report_acc_closure_view_report_acc_closure_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./view-report-acc-closure/view-report-acc-closure.component */
      19954);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      1858);

      var routes = [{
        path: "",
        component: _initiate_account_closure_initiate_account_closure_component__WEBPACK_IMPORTED_MODULE_1__.InitiateAccountClosureComponent
      }, {
        path: "create",
        component: _account_closure_details_account_closure_details_component__WEBPACK_IMPORTED_MODULE_0__.AccountClosureDetailsComponent
      }, {
        path: "viewReport",
        component: _view_report_acc_closure_view_report_acc_closure_component__WEBPACK_IMPORTED_MODULE_2__.ViewReportAccClosureComponent
      }];

      var _InitiateAccountClosureRoutingModule = /*#__PURE__*/_createClass(function _InitiateAccountClosureRoutingModule() {
        _classCallCheck(this, _InitiateAccountClosureRoutingModule);
      });

      _InitiateAccountClosureRoutingModule.ɵfac = function InitiateAccountClosureRoutingModule_Factory(t) {
        return new (t || _InitiateAccountClosureRoutingModule)();
      };

      _InitiateAccountClosureRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _InitiateAccountClosureRoutingModule
      });
      _InitiateAccountClosureRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_InitiateAccountClosureRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    24380:
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
      7005);
      /* harmony import */


      var _initiate_account_closure_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./initiate-account-closure-routing.module */
      19886);
      /* harmony import */


      var _initiate_account_closure_initiate_account_closure_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./initiate-account-closure/initiate-account-closure.component */
      3059);
      /* harmony import */


      var _account_closure_details_account_closure_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./account-closure-details/account-closure-details.component */
      14819);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular-datatables */
      98546);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      68465);
      /* harmony import */


      var _view_report_acc_closure_view_report_acc_closure_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./view-report-acc-closure/view-report-acc-closure.component */
      19954);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      1858);

      var _InitiateAccountClosureModule = /*#__PURE__*/_createClass(function _InitiateAccountClosureModule() {
        _classCallCheck(this, _InitiateAccountClosureModule);
      });

      _InitiateAccountClosureModule.ɵfac = function InitiateAccountClosureModule_Factory(t) {
        return new (t || _InitiateAccountClosureModule)();
      };

      _InitiateAccountClosureModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _InitiateAccountClosureModule
      });
      _InitiateAccountClosureModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _initiate_account_closure_routing_module__WEBPACK_IMPORTED_MODULE_0__.InitiateAccountClosureRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_InitiateAccountClosureModule, {
          declarations: [_initiate_account_closure_initiate_account_closure_component__WEBPACK_IMPORTED_MODULE_1__.InitiateAccountClosureComponent, _account_closure_details_account_closure_details_component__WEBPACK_IMPORTED_MODULE_2__.AccountClosureDetailsComponent, _view_report_acc_closure_view_report_acc_closure_component__WEBPACK_IMPORTED_MODULE_4__.ViewReportAccClosureComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _initiate_account_closure_routing_module__WEBPACK_IMPORTED_MODULE_0__.InitiateAccountClosureRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule]
        });
      })();
      /***/

    },

    /***/
    3059:
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


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      30759);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      1858);
      /* harmony import */


      var src_app_shared_services_account_closure_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/services/account-closure-service.service */
      30686);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      93135);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      869);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-datatables */
      98546);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      7005);

      function InitiateAccountClosureComponent_tr_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InitiateAccountClosureComponent_tr_28_Template_a_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);

            var users_r1 = restoredCtx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r2.getDataFromSummary(users_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var users_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("routerLink", "/initiate-account-closure/create/", users_r1.closureType, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](users_r1.closureType);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](users_r1.accountType);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](users_r1.accountNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](users_r1.fileName);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](users_r1.status);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](users_r1.makerId);
        }
      }

      var _c0 = function _c0() {
        return ["/initiate-account-closure/create"];
      };

      var _c1 = function _c1() {
        return ["/dashboard"];
      };

      var _InitiateAccountClosureComponent = /*#__PURE__*/function () {
        function _InitiateAccountClosureComponent(accClosureServiceSum, roleService, router) {
          _classCallCheck(this, _InitiateAccountClosureComponent);

          this.accClosureServiceSum = accClosureServiceSum;
          this.roleService = roleService;
          this.router = router;
          this.dtOptions = {}; // this.dtOptions = {};

          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        }

        _createClass(_InitiateAccountClosureComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            setTimeout(function () {
              _this5.newRolePermissions();
            }, 2000);
            this.currentUser = localStorage.getItem('currentUser').replace(/['"]+/g, '');
            this.gettingAccClosureSummary(this.currentUser);
          }
        }, {
          key: "getDataFromSummary",
          value: function getDataFromSummary(row) {
            console.log("this is row", row);
            this.fileName = row.fileName;
            console.log("file", this.fileName);
            localStorage.setItem("fileName", this.fileName);
            this.viewAccountType = row.accountType;
            localStorage.setItem("typeOfAccount", this.viewAccountType);
            console.log("typeOfAccount", this.viewAccountType);

            if (row.closureType == "SINGLE") {}

            var navigationExtras = {
              queryParams: {
                modifyNo: row.modNo,
                closureType: row.closureType,
                accountNumber: row.accountNumber,
                accountType: row.accountType,
                record: row.recordStatus,
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
            console.log('row', row.accountLinkageDesc);
            console.log('row', navigationExtras); // this.router.navigate(['initiate-account-closure/create'], navigationExtras);

            this.roleService.sendNavParam(navigationExtras);
            this.router.navigate(['/initiate-account-closure/create']);
          }
        }, {
          key: "newRolePermissions",
          value: function newRolePermissions() {
            this.roleService.fetchScreenPermissions('Initiate Account Closure');
          }
        }, {
          key: "gettingAccClosureSummary",
          value: function gettingAccClosureSummary(currentUser) {
            var _this6 = this;

            console.log("this account closure Summary");
            this.accClosureServiceSum.gettingAccountClosureSummary(currentUser).subscribe(function (backendResp) {
              console.log(backendResp);
              _this6.summaryDetails = backendResp; // this.dataSource = new MatTableDataSource<FetchUserForSingleAccClosureReqDTO>(this.summaryDetails);
              // this.dataSource.paginator = this.paginator.toArray()[0];;
              // console.log(this.summaryDetails);
            });
          }
        }]);

        return _InitiateAccountClosureComponent;
      }();

      _InitiateAccountClosureComponent.ɵfac = function InitiateAccountClosureComponent_Factory(t) {
        return new (t || _InitiateAccountClosureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_account_closure_service_service__WEBPACK_IMPORTED_MODULE_0__.AccountClosureServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_1__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
      };

      _InitiateAccountClosureComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _InitiateAccountClosureComponent,
        selectors: [["npr-initiate-account-closure"]],
        decls: 29,
        vars: 7,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "routerLink"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [1, "primaryColor", 3, "routerLink", "click"]],
        template: function InitiateAccountClosureComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Account Closure Summary");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "New");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "table", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "closure type");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "account type");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "account number");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "file name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "status");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "maker id");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, InitiateAccountClosureComponent_tr_28_Template, 14, 7, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.summaryDetails);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbml0aWF0ZS1hY2NvdW50LWNsb3N1cmUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    19954:
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
      79434);
      /* harmony import */


      var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! jspdf */
      73112);
      /* harmony import */


      var jspdf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! jspdf-autotable */
      82011);
      /* harmony import */


      var jspdf_autotable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      30759);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      1858);
      /* harmony import */


      var src_app_shared_services_account_closure_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/account-closure-service.service */
      30686);
      /* harmony import */


      var ng2_izitoast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng2-izitoast */
      97385);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      93135);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      68465);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      7005);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      869);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular-datatables */
      98546);

      function ViewReportAccClosureComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Export As");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ViewReportAccClosureComponent_div_5_Template_select_change_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r2.modo($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Excel");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ViewReportAccClosureComponent_div_5_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r4.onProcessingTheBulkAccount();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Process");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ViewReportAccClosureComponent_div_5_Template_a_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r5.onCancelingTheRecord();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Delet");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ViewReportAccClosureComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "table", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Account Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Closure Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Branch Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Account Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "table", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Current Balance [ACY]");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Current Balance [LCY]");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Available Balance");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, " No Debit");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "No Credit");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "Frozen");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Dormant");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "Account Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "Record Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "Customer Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "Value Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "Account Block");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](61);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](71);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ViewReportAccClosureComponent_div_6_Template_button_click_77_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r6.onProcessingTheSingleAccount();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](78, "Process");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ViewReportAccClosureComponent_div_6_Template_button_click_80_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r8.onCancelingTheSingleRecord();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](81, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](84, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](85, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](87, "Export As");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](88, "select", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ViewReportAccClosureComponent_div_6_Template_option_click_89_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r9.downloadReportForSingle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](90, "Excel");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ViewReportAccClosureComponent_div_6_Template_option_click_91_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r10.convertReportForSingle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](92, "PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dtOptions", ctx_r1.dtOptions)("dtTrigger", ctx_r1.dtTrigger);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.accountType);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.closureType);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.branchCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.accountNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dtOptions", ctx_r1.dtOptions)("dtTrigger", ctx_r1.dtTrigger);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.acyCurrBalance);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.fetchUserSingle.lcyCurrBalance, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.acyAvlBal);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.acStatNoDr);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.acSatNoCr);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.frozen);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.dorm);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.accountStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.recordStatusFromFlexCube);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.customerId);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.fetchUserSingle.valueDate);
        }
      }

      var _ViewReportAccClosureComponent = /*#__PURE__*/function () {
        function _ViewReportAccClosureComponent(excelService, ref, iziToast, roleService) {
          _classCallCheck(this, _ViewReportAccClosureComponent);

          this.excelService = excelService;
          this.ref = ref;
          this.iziToast = iziToast;
          this.roleService = roleService;
          this.fetchUserSingle = new src_app_shared_models_FetchUserForSingleAccClosureReqDTO__WEBPACK_IMPORTED_MODULE_0__.FetchUserForSingleAccClosureReqDTO();
          this.accountTypeForBulk = "";
          this.excel = [];
          this.sendFileName = "";
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
          this.dtOptions = {};
          this.singleExcel = Array();
        }

        _createClass(_ViewReportAccClosureComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.navSubscription = this.roleService.getNavParam.subscribe(function (data) {
              return _this7.ViewAccClosure = data;
            });
            this.fetchUserSingle.modNo = this.ViewAccClosure.queryParams.modNo;
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
            var _this8 = this;

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
              _this8.excel = data;
              data.forEach(function (element) {//this.excel.push(element);
              }); //console.log("vidya",this.excel);

              _this8.excelService.exportAsExcelFile(_this8.excel, 'BULK_ACCOUNT_CLOSURE');
            });
            console.log(this.excel); // --passing two arguments --1)is getting data from backend --i.e is excel data
            // 2)what name i should give for file
          } //downloding records in pdf

        }, {
          key: "convert",
          value: function convert() {
            var _this9 = this;

            var doc = new (jspdf__WEBPACK_IMPORTED_MODULE_1___default())();
            var col = [["AccountNo", "branchCode", "closureReason", "customerId", "fileName", "frozen"]];
            var rows = [];
            /* The following array of object as response from the API req  */

            var fin = this.fetchUserSingle.fileName.split('.').slice(0, -1).join('.'); //let fin=this.fetchUserSingle.fileName.split('.').slice(0, -1).join('.');

            this.excelService.getExcel(fin, this.fetchUserSingle.accountType).subscribe(function (data) {
              console.log("this is backend data for excel");
              _this9.excel = data;
              var itemNew = _this9.excel;
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
            var _this10 = this;

            console.log("this is bulk process", this.sendFileName);
            this.excelService.processTheBulkRecord(this.sendFileName, this.accountTypeForBulk, this.creatorId).subscribe(function (processResp) {
              console.log(processResp);
              var msg = processResp.errorDesc;

              if (processResp.var1 == true) {
                _this10.process = true;

                _this10.ref.markForCheck(); // Swal.fire({
                //   title: 'Record Processed  SuccessFully',
                //   // type: "success"
                // });


                _this10.iziToast.show({
                  message: "Record Processed  SuccessFully",
                  image: "assets/images/user.png",
                  icon: 'ico ico-success',
                  theme: "dark",
                  layout: 2,
                  // imageWidth:50,
                  balloon: false,
                  position: "topRight",
                  progressBarColor: "green",
                  pauseOnHover: true
                });
              } else {
                _this10.iziToast.show({
                  message: msg,
                  image: "assets/images/user.png",
                  icon: 'ico ico-warning',
                  theme: "dark",
                  layout: 2,
                  // imageWidth:50,
                  balloon: false,
                  position: "topRight",
                  progressBarColor: "green",
                  pauseOnHover: true
                }); // Swal.fire({
                //   title: msg,
                //   type: "warning"
                // });
                // this.process=true;

              }
            });
          }
        }, {
          key: "onCancelingTheRecord",
          value: function onCancelingTheRecord() {
            var _this11 = this;

            console.log("this is deleteing the record", this.fetchUserSingle.fileName);
            this.excelService.onDeletingTheReocrd(this.fetchUserSingle.fileName, this.fetchUserSingle.accountType, this.creatorId).subscribe(function (deleteResp) {
              console.log(deleteResp);

              if (deleteResp == true) {
                _this11["delete"] = true;

                _this11.iziToast.show({
                  message: "Record Deleted Successfully",
                  image: "assets/images/user.png",
                  icon: 'ico ico-warning',
                  theme: "dark",
                  layout: 2,
                  // imageWidth:50,
                  balloon: false,
                  position: "topRight",
                  progressBarColor: "green",
                  pauseOnHover: true
                }); // Swal.fire({
                //   title: 'Record Deleted SuccessFully',
                //   // type: "success"
                // });

              } else {
                // Swal.fire({
                //   title: 'Failed To Delete The Record',
                //   type: "warning"
                // });
                _this11.iziToast.show({
                  message: "Failed To Delete The Record",
                  image: "assets/images/user.png",
                  icon: 'ico ico-error',
                  theme: "dark",
                  layout: 2,
                  // imageWidth:50,
                  balloon: false,
                  position: "topRight",
                  progressBarColor: "green",
                  pauseOnHover: true
                });
              }
            });
          }
        }, {
          key: "onProcessingTheSingleAccount",
          value: function onProcessingTheSingleAccount() {
            var _this12 = this;

            console.log("this is single process", this.fetchUserSingle.accountNumber);
            this.excelService.processTheSingleRecord(this.fetchUserSingle.accountNumber, this.creatorId).subscribe(function (processResp) {
              console.log(processResp);
              var msg = processResp.errorDesc;

              if (processResp) {
                _this12.iziToast.show({
                  message: "Record Processed  SuccessFully",
                  image: "assets/images/user.png",
                  icon: 'ico ico-success',
                  theme: "dark",
                  layout: 2,
                  // imageWidth:50,
                  balloon: false,
                  position: "topRight",
                  progressBarColor: "green",
                  pauseOnHover: true
                }); // Swal.fire({
                //   title: 'Record Processed SuccessFully',
                //   // type: "success"
                // });


                _this12.processSingle = true;

                _this12.ref.markForCheck();
              } else {
                _this12.iziToast.show({
                  message: msg,
                  image: "assets/images/user.png",
                  icon: 'ico ico-warning',
                  theme: "dark",
                  layout: 2,
                  // imageWidth:50,
                  balloon: false,
                  position: "topRight",
                  progressBarColor: "green",
                  pauseOnHover: true
                }); // Swal.fire({
                //   title: msg,
                //   type: "warning"
                // });

              }
            });
          }
        }, {
          key: "onCancelingTheSingleRecord",
          value: function onCancelingTheSingleRecord() {
            var _this13 = this;

            console.log("deleting Single", this.fetchUserSingle.accountNumber);
            console.log("deleting Single", this.fetchUserSingle.accountType);
            console.log("deleting Single", this.fetchUserSingle.closureType);
            console.log("deleting Single", this.fetchUserSingle.inputBy);
            this.excelService.onDeletingSingle(this.fetchUserSingle.accountNumber, this.fetchUserSingle.accountType, this.fetchUserSingle.closureType, this.fetchUserSingle.inputBy).subscribe(function (singledeleteResp) {
              console.log(singledeleteResp);
              _this13.deleteSingle = true;

              if (singledeleteResp == true) {
                _this13.iziToast.show({
                  message: "Record Deleted successFully",
                  image: "assets/images/user.png",
                  icon: 'ico ico-success',
                  theme: "dark",
                  layout: 2,
                  // imageWidth:50,
                  balloon: false,
                  position: "topRight",
                  progressBarColor: "green",
                  pauseOnHover: true
                }); // Swal.fire({
                //   title: 'Record Deleted successFully',
                //   // type: "success"
                // });

              } else {
                _this13.iziToast.show({
                  message: "Failed To Delete The Record",
                  image: "assets/images/user.png",
                  icon: 'ico ico-warning',
                  theme: "dark",
                  layout: 2,
                  // imageWidth:50,
                  balloon: false,
                  position: "topRight",
                  progressBarColor: "green",
                  pauseOnHover: true
                }); // Swal.fire({
                //   title: 'Failed To Delete The Record',
                //   type: "warning"
                // });

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
            var _this14 = this;

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
                value: _this14.fetchUserSingle[key]
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

      _ViewReportAccClosureComponent.ɵfac = function ViewReportAccClosureComponent_Factory(t) {
        return new (t || _ViewReportAccClosureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_account_closure_service_service__WEBPACK_IMPORTED_MODULE_3__.AccountClosureServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ng2_izitoast__WEBPACK_IMPORTED_MODULE_4__.Ng2IzitoastService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_5__.RoleService));
      };

      _ViewReportAccClosureComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _ViewReportAccClosureComponent,
        selectors: [["npr-view-report-acc-closure"]],
        decls: 7,
        vars: 2,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["action", "", 1, "formStyle"], ["class", "dbCardStyle cardWidth", 4, "ngIf"], ["class", "dbCardStyle", 4, "ngIf"], [1, "dbCardStyle", "cardWidth"], [1, "col-12"], ["for", "roleName", 1, "formLbl"], ["aria-label", "Default select example", 1, "form-select", 3, "change"], ["value", "Excel"], ["value", "PDF"], [1, "row", "g-3", "pb-3", "justify-content-center", "pt-3"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["routerLink", "/initiate-account-closure", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], ["datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], ["datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 3, "dtOptions", "dtTrigger"], ["aria-label", "Default select example", 1, "form-select"], ["value", "1", 3, "click"], ["value", "2", 3, "click"]],
        template: function ViewReportAccClosureComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "View Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ViewReportAccClosureComponent_div_5_Template, 20, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ViewReportAccClosureComponent_div_6_Template, 93, 19, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.fetchUserSingle.closureType != "SINGLE");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.fetchUserSingle.closureType == "SINGLE");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, angular_datatables__WEBPACK_IMPORTED_MODULE_6__.DataTableDirective],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LXJlcG9ydC1hY2MtY2xvc3VyZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    93963:
    /*!**********************************************!*\
      !*** ./src/environments/environment.prod.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      });

      var _environment = {
        production: true,
        //MEDIAN_URL: 'http://10.127.43.228:8080/median',
        //ACC_CLOSER_URL: 'http://10.127.43.228:8080/medianAccountClosure'//account closer new
        //MEDIAN_URL: 'https://10.137.160.96:8443/medianv2.2',
        //ACC_CLOSER_URL: 'https://10.137.160.96:8443/medianAccountClosure'//account closer new
        // MEDIAN_URL: 'https://10.137.145.90:8443/medianv2.2',
        //ACC_CLOSER_URL: 'https://10.137.145.90:8443/medianAccountClosure'//account closer new
        //MEDIAN_URL: 'https://10.137.160.96:8443/medianv2',
        //ACC_CLOSER_URL: 'https://10.137.160.96:8443/medianv2'//account closer new
        // MEDIAN_URL: 'http://localhost:9191', // phase2 for local testing
        // ACC_CLOSER_URL: 'http://localhost:9192'//account closer for local testing
        // MEDIAN_URL: 'http://localhost:9192', // phase2 for local testing
        // ACC_CLOSER_URL: 'http://localhost:9191'//account closer for local testing
        MEDIAN_URL: 'http://192.168.0.14:8082/medianv2',
        ACC_CLOSER_URL: 'http://192.168.0.14:8089/medianAccountClosure'
      };
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_views_initiate-account-closure_initiate-account-closure_module_ts-es5.js.map