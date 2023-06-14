"use strict";
(self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_process-account-closure_process-account-closure_module_ts"],{

/***/ 50481:
/*!**************************************************!*\
  !*** ./node_modules/angular-datatables/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTableDirective": function() { return /* reexport safe */ _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective; },
/* harmony export */   "DataTablesModule": function() { return /* reexport safe */ _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__.DataTablesModule; }
/* harmony export */ });
/* harmony import */ var _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/angular-datatables.directive */ 9301);
/* harmony import */ var _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/angular-datatables.module */ 9368);
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




/***/ }),

/***/ 9301:
/*!*****************************************************************************!*\
  !*** ./node_modules/angular-datatables/src/angular-datatables.directive.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTableDirective": function() { return /* binding */ DataTableDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
var __spreadArray = undefined && undefined.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */






var DataTableDirective =
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
            rowCallback: function (row, data, index) {
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
      var pipe = el.ngPipeInstance;
      var pipeArgs = el.ngPipeArgs || []; // find index of column using `data` attr

      var i = columns.findIndex(function (e) {
        return e.data === el.data;
      }); // get <td> element which holds data using index

      var rowFromCol = row.childNodes.item(i); // Transform data with Pipe and PipeArgs

      var rowVal = $(rowFromCol).text();
      var rowValAfter = pipe.transform.apply(pipe, __spreadArray([rowVal], pipeArgs, false)); // Apply transformed string to <td>

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

  DataTableDirective.ɵfac = function DataTableDirective_Factory(t) {
    return new (t || DataTableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
  };

  DataTableDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
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
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableDirective, [{
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

/***/ }),

/***/ 9368:
/*!**************************************************************************!*\
  !*** ./node_modules/angular-datatables/src/angular-datatables.module.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTablesModule": function() { return /* binding */ DataTablesModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angular-datatables.directive */ 9301);
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */





var DataTablesModule =
/** @class */
function () {
  function DataTablesModule() {}

  DataTablesModule.forRoot = function () {
    return {
      ngModule: DataTablesModule
    };
  };

  DataTablesModule.ɵfac = function DataTablesModule_Factory(t) {
    return new (t || DataTablesModule)();
  };

  DataTablesModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: DataTablesModule
  });
  DataTablesModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]]
  });
  return DataTablesModule;
}();



(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTablesModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      declarations: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective],
      exports: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective]
    }]
  }], null, null);
})();

/***/ }),

/***/ 91325:
/*!*******************************************************************!*\
  !*** ./src/app/shared/models/process-account-closure-resp-dto.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcessAccountClosureRespDTO": function() { return /* binding */ ProcessAccountClosureRespDTO; }
/* harmony export */ });
class ProcessAccountClosureRespDTO {
}
// export class MedianDeUploadDetails {
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


/***/ }),

/***/ 31443:
/*!**************************************************!*\
  !*** ./src/app/shared/services/toast.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastService": function() { return /* binding */ ToastService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-izitoast */ 27218);


class ToastService {
    constructor(iziToast) {
        this.iziToast = iziToast;
    }
    successMessage(title, msg) {
        this.iziToast.success({
            title: title,
            message: msg,
            layout: 2,
            balloon: false,
            position: "topRight",
            progressBarColor: "red",
            pauseOnHover: true,
        });
    }
    errorMessage(title, msg) {
        this.iziToast.error({
            title: title,
            message: msg,
            layout: 2,
            balloon: false,
            position: "topRight",
            progressBarColor: "red",
            pauseOnHover: true,
        });
    }
    infoMessage(title, msg) {
        this.iziToast.info({
            title: title,
            message: msg,
            layout: 2,
            balloon: false,
            position: "topRight",
            progressBarColor: "red",
            pauseOnHover: true,
        });
    }
}
ToastService.ɵfac = function ToastService_Factory(t) { return new (t || ToastService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ng2_izitoast__WEBPACK_IMPORTED_MODULE_0__.Ng2IzitoastService)); };
ToastService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ToastService, factory: ToastService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 94066:
/*!******************************************************************************!*\
  !*** ./src/app/views/process-account-closure/process-acc-closure.service.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": function() { return /* binding */ API_URL; },
/* harmony export */   "ProcessAccClosureService": function() { return /* binding */ ProcessAccClosureService; }
/* harmony export */ });
/* harmony import */ var src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/config/app.constant */ 3118);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ 97797);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ 88031);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 53882);





const API_URL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.acctCloserUrl;
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
class ProcessAccClosureService {
    constructor(http) {
        this.http = http;
    }
    gettingAllProcessedRecord(user_id) {
        console.log(user_id);
        return this.http.get(`${API_URL}/api2/getAllProcessedRecordsForBulkAndSingle/${user_id}`);
    }
    approveRecord(fileName, accountType, inputBy, id, closureType, approveReasonTextArea) {
        return this.http.get(`${API_URL}/medAccount/closeAccount/${fileName}/${accountType}/${inputBy}/${id}/${closureType}/${approveReasonTextArea}`);
    }
    approveRecordForSingle(accountType, inputBy, closureType, id, approveReasonTextArea) {
        console.log(accountType, closureType, id, inputBy);
        return this.http.get(`${API_URL}/medAccount/closeAccountSingle/${accountType}/${inputBy}/${closureType}/${id}/${approveReasonTextArea}`);
    }
    exportAsExcel(json, excelFileName) {
        console.log(excelFileName);
        console.log(json);
        const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_2__.utils.json_to_sheet(json);
        worksheet.blankRows = false;
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_2__.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelSingle(excelBuffer, excelFileName);
    }
    saveAsExcelSingle(buffer, fileName) {
        const data = new Blob([buffer], { type: EXCEL_TYPE });
        file_saver__WEBPACK_IMPORTED_MODULE_1__.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    }
    onClickofViewReport(fileName, accountType) {
        return this.http.get(`${API_URL}/file/viewReport/${fileName}/${accountType}`);
    }
    onClickofViewReportSingle(accountType, inputBy, closureType, id) {
        return this.http.get(`${API_URL}/api2/viewReportForSingleAcc/${accountType}/${inputBy}/${closureType}/${id}`);
    }
    onBulkReject(fileName, accountType, inputBy, id, rejectReasonTextArea) {
        console.log(fileName, accountType, inputBy, id, rejectReasonTextArea);
        return this.http.get(`${API_URL}/file/rejectBulk/${accountType}/${fileName}/${inputBy}/${id}/${rejectReasonTextArea}`);
    }
    onSingleReject(accountNumber, accntType, closure, maker, rejectReasonTextArea) {
        console.log("in service", accountNumber, accntType, closure, maker);
        return this.http.get(`${API_URL}/api2/rejectSingle/${accountNumber}/${accntType}/${closure}/${maker}/${rejectReasonTextArea}`);
    }
}
ProcessAccClosureService.ɵfac = function ProcessAccClosureService_Factory(t) { return new (t || ProcessAccClosureService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
ProcessAccClosureService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ProcessAccClosureService, factory: ProcessAccClosureService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 77514:
/*!*****************************************************************************************!*\
  !*** ./src/app/views/process-account-closure/process-account-closure-routing.module.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcessAccountClosureRoutingModule": function() { return /* binding */ ProcessAccountClosureRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _process_account_closure_process_account_closure_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./process-account-closure/process-account-closure.component */ 6013);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: "",
        component: _process_account_closure_process_account_closure_component__WEBPACK_IMPORTED_MODULE_0__.ProcessAccountClosureComponent
    }
];
class ProcessAccountClosureRoutingModule {
}
ProcessAccountClosureRoutingModule.ɵfac = function ProcessAccountClosureRoutingModule_Factory(t) { return new (t || ProcessAccountClosureRoutingModule)(); };
ProcessAccountClosureRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProcessAccountClosureRoutingModule });
ProcessAccountClosureRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProcessAccountClosureRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 39382:
/*!*********************************************************************************!*\
  !*** ./src/app/views/process-account-closure/process-account-closure.module.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcessAccountClosureModule": function() { return /* binding */ ProcessAccountClosureModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _process_account_closure_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./process-account-closure-routing.module */ 77514);
/* harmony import */ var _process_account_closure_process_account_closure_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./process-account-closure/process-account-closure.component */ 6013);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ 50481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);





class ProcessAccountClosureModule {
}
ProcessAccountClosureModule.ɵfac = function ProcessAccountClosureModule_Factory(t) { return new (t || ProcessAccountClosureModule)(); };
ProcessAccountClosureModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ProcessAccountClosureModule });
ProcessAccountClosureModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _process_account_closure_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProcessAccountClosureRoutingModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ProcessAccountClosureModule, { declarations: [_process_account_closure_process_account_closure_component__WEBPACK_IMPORTED_MODULE_1__.ProcessAccountClosureComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _process_account_closure_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProcessAccountClosureRoutingModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule] }); })();


/***/ }),

/***/ 6013:
/*!************************************************************************************************************!*\
  !*** ./src/app/views/process-account-closure/process-account-closure/process-account-closure.component.ts ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcessAccountClosureComponent": function() { return /* binding */ ProcessAccountClosureComponent; }
/* harmony export */ });
/* harmony import */ var src_app_shared_models_process_account_closure_resp_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/process-account-closure-resp-dto */ 91325);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _process_acc_closure_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../process-acc-closure.service */ 94066);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 31443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 50481);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);








function ProcessAccountClosureComponent_tr_30_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProcessAccountClosureComponent_tr_30_Template_button_click_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const i_r2 = restoredCtx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.approveReason(i_r2, ""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " Approve ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProcessAccountClosureComponent_tr_30_Template_button_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const i_r2 = restoredCtx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.RejectReason(i_r2, ""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Reject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProcessAccountClosureComponent_tr_30_Template_button_click_19_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const data_r1 = restoredCtx.$implicit; const i_r2 = restoredCtx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.onClickofViewReport(data_r1.accountType, data_r1.fileName, data_r1.closureType, i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " View Report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r1.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r1.closureType);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r1.accountType);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](9, 8, data_r1.inputTime, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", data_r1.disabled || data_r1.rejectButtonDisabled || ctx_r0.flag[i_r2] || ctx_r0.flag1[i_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", data_r1.rejectButtonDisabled || data_r1.disabled || ctx_r0.flag2[i_r2] || ctx_r0.flag3[i_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r1.checkerId);
} }
const _c0 = function () { return ["/dashboard"]; };
class ProcessAccountClosureComponent {
    constructor(processService, ref, toastService) {
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
        this.processAccountClosureRespDTO = new src_app_shared_models_process_account_closure_resp_dto__WEBPACK_IMPORTED_MODULE_0__.ProcessAccountClosureRespDTO;
        this.excelSingle = Array();
        this.showProgressBarReject = false;
    }
    openDialog() {
        // const dialogConfig = new MatDialogConfig();
        // dialogConfig.disableClose = true;
        // dialogConfig.autoFocus = true;
        // dialogConfig.data = {
        //     id: 1,
        //     title: 'Angular For Beginners'
        // };
        // this.dialog.open(AuthorizeAccountClosureComponent, dialogConfig);
    }
    ngOnInit() {
        this.loginUser = localStorage.getItem('userFromLogin');
        console.log(this.loginUser);
        this.gettingAllProcessedRecord();
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true,
            retrieve: true,
            order: [[3, 'desc']],
            columnDefs: [{ type: 'date', 'targets': [3] }],
            lengthMenu: [
                [5, 10, 20, 30, -1],
                [5, 10, 20, 30, "ALL"],
            ],
        };
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
    gettingAllProcessedRecord() {
        console.log("this is display processed record");
        this.currentUser = localStorage.getItem("currentUser");
        if (this.currentUser.charAt(0) === '"' && this.currentUser.charAt(this.currentUser.length - 1) === '"') {
            this.currentUser = this.currentUser.substr(1, this.currentUser.length - 2);
        }
        this.processService.gettingAllProcessedRecord(this.currentUser.toString()).subscribe(processResp => {
            console.log(processResp);
            console.log(this.currentUser);
            this.process = processResp.map(p => {
                p.enableprogressbar = false;
                console.log(p.status);
                return Object.assign(Object.assign({}, p), { rejectButtonDisabled: p.status === "Rejected" || p.inputBy === this.currentUser, disabled: p.status === "APPROVED" || p.inputBy === this.currentUser });
            });
            this.dtTrigger.next();
            console.log(this.process);
        });
    }
    onClickofApprove(index, approveReasonTextArea) {
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
            this.processService.approveRecord(this.fileName, this.accountType, this.loginUser, this.closureType, this.id, approveReasonTextArea).
                subscribe(approveResp => {
                console.log(approveResp);
                if (approveResp.checkerId) {
                    this.process[index].checkerId = approveResp.checkerId;
                }
                let processAccountClosureRespDTO = approveResp;
                let response = processAccountClosureRespDTO.respMeg;
                if (approveResp.respMeg == 'Processed successfully') {
                    console.log("index is", index);
                    this.flag[index] = true;
                    console.log("value of flag is", this.flag);
                }
                this.toastService.infoMessage(response, '');
                this.ref.markForCheck();
                this.process[index].showprogressbar = false;
                if (approveResp != null) {
                    console.log("enabled the process button");
                    this.process[index].showviewBtn = true;
                }
            });
        }
        else {
            console.log(" this is for single");
            this.processService.approveRecordForSingle(this.accountType, this.loginUser, this.closureType, this.id, approveReasonTextArea).subscribe(singleResp => {
                console.log(singleResp);
                let processAccountClosureRespDTO = singleResp;
                let response = processAccountClosureRespDTO.respMeg;
                if (singleResp.checkerId) {
                    this.process[index].checkerId = singleResp.checkerId;
                }
                if (singleResp.respMeg == 'Processed successfully') {
                    console.log("index is", index);
                    this.flag1[index] = true;
                    console.log("value of flag is", this.flag1);
                }
                this.toastService.infoMessage(response, '');
                //here
                if (singleResp != null) {
                    console.log("enabled the process button");
                    this.process[index].showviewBtn = true;
                    //here
                }
            });
        }
    }
    onClickofViewReport(acctype, fileName, closureType, i) {
        console.log("This is ViewReport");
        console.log("process", acctype, fileName);
        if (closureType == 'BULK') {
            console.log("inside bulk excel download");
            this.processService.onClickofViewReport(fileName, acctype).subscribe(viewResp => {
                console.log(viewResp);
                this.excel = viewResp;
                console.log(this.excel);
                this.processService.exportAsExcel(this.excel, 'account_closure');
            });
        }
        else {
            console.log("inside single excel download", this.process[i]);
            console.log(this.process[i].closureType);
            console.log(this.process[i].accountType);
            console.log(this.process[i].inputBy);
            console.log(this.process[i].id);
            this.processService.onClickofViewReportSingle(this.process[i].accountType, this.process[i].inputBy, this.process[i].closureType, this.process[i].id).subscribe(singleExcelDownloadresp => {
                console.log(singleExcelDownloadresp);
                this.excelSingle.push(singleExcelDownloadresp);
                console.log(this.excelSingle);
                this.processService.exportAsExcel(this.excelSingle, 'account_closure_Single');
                this.excelSingle = [];
            });
        }
    }
    onclickOfReject(i, rejectReasonTextArea) {
        console.log("on clcik of reject", this.process[i]);
        this.process[i].enableprogressbar = true;
        if (this.process[i].closureType == 'BULK') {
            console.log("this is for bulk");
            this.processService.onBulkReject(this.process[i].fileName, this.process[i].accountType, this.loginUser, this.process[i].id, rejectReasonTextArea).subscribe(bulkRejectResp => {
                this.ref.markForCheck();
                console.log(bulkRejectResp);
                this.ref.markForCheck();
                if (bulkRejectResp) {
                    console.log("index is", i);
                    this.flag2[i] = true;
                    console.log("value of flag2 is", this.flag2);
                    this.ref.markForCheck();
                    this.gettingAllProcessedRecord();
                    this.toastService.successMessage('Record Rejected successfully', '');
                    this.reasonBoolean[i] = false;
                    this.ref.markForCheck();
                    this.process[i].enableprogressbar = false;
                }
            });
        }
        else {
            console.log("this is for single");
            this.processService.onSingleReject(this.process[i].accountNumber, this.process[i].accountType, this.process[i].closureType, this.loginUser, rejectReasonTextArea).subscribe(singleResp => {
                this.ref.markForCheck();
                console.log(singleResp);
                this.ref.markForCheck();
                if (singleResp) {
                    console.log("index is", i);
                    this.flag3[i] = true;
                    console.log("value of flag3 is", this.flag3);
                    this.ref.markForCheck();
                    this.gettingAllProcessedRecord();
                    this.toastService.successMessage('Record Rejected successFully', '');
                }
                this.reasonBoolean[i] = false;
                this.ref.markForCheck();
            });
        }
    }
    approveReason(i, approveReason) {
        this.reasonBoolean[i] = true;
        console.log("enter inside method");
        console.log(approveReason);
        // Swal.fire({
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
    RejectReason(i, rejectReason) {
        this.reasonBoolean[i] = true;
        console.log("enter inside method");
        console.log(rejectReason);
        // Swal.fire({
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
    try(rejectReason) {
        console.log(rejectReason);
        this.rejectReasonTextArea = rejectReason;
    }
    Reject(i) {
        console.log("rejectReasonTextArea from new method is", this.rejectReasonTextArea);
        const result = this.rejectReasonTextArea.trim();
        console.log(result);
        if (result) {
            console.log("valid string");
            this.onclickOfReject(i, this.rejectReasonTextArea);
        }
        else {
            console.log("invalid string");
            this.toastService.infoMessage('Please enter reason for rejection', '');
        }
    }
}
ProcessAccountClosureComponent.ɵfac = function ProcessAccountClosureComponent_Factory(t) { return new (t || ProcessAccountClosureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_process_acc_closure_service__WEBPACK_IMPORTED_MODULE_1__.ProcessAccClosureService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService)); };
ProcessAccountClosureComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ProcessAccountClosureComponent, selectors: [["npr-process-account-closure"]], decls: 31, vars: 5, consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle", "table-responsive"], [1, "col-auto", "exitclass"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["id", "dbTable1", "datatable", "", 1, "dataTable", "table", "tableStyle", "nowrap", "vAlignMdl", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [3, "disabled", "click"], [3, "click"]], template: function ProcessAccountClosureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Process Account Closure");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Exit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "file name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "closure type");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "account type");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "upload date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "status");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "approve");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "reject");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "view report");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "checker id");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, ProcessAccountClosureComponent_tr_30_Template, 23, 11, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.process);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: [".exitclass[_ngcontent-%COMP%] {\n  padding-left: 90%;\n  padding-bottom: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2Nlc3MtYWNjb3VudC1jbG9zdXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6InByb2Nlc3MtYWNjb3VudC1jbG9zdXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4aXRjbGFzc3tcclxuICAgIHBhZGRpbmctbGVmdDogOTAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gICAgXHJcbn0iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_views_process-account-closure_process-account-closure_module_ts-es2015.js.map