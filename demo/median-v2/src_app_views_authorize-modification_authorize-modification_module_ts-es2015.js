"use strict";
(self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_authorize-modification_authorize-modification_module_ts"],{

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
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DataTableDirective, [{
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
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](DataTablesModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      declarations: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective],
      exports: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective]
    }]
  }], null, null);
})();

/***/ }),

/***/ 12291:
/*!***************************************************************!*\
  !*** ./src/app/shared/models/pending-for-auth-details-dto.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PendingForAuthDetailsDTO": function() { return /* binding */ PendingForAuthDetailsDTO; },
/* harmony export */   "MedDeUploadDetailPKEntity": function() { return /* binding */ MedDeUploadDetailPKEntity; },
/* harmony export */   "MedDeUploadDetailHistPKEntity": function() { return /* binding */ MedDeUploadDetailHistPKEntity; },
/* harmony export */   "PendingForAuthDetailsHistEntity": function() { return /* binding */ PendingForAuthDetailsHistEntity; }
/* harmony export */ });
class PendingForAuthDetailsDTO {
}
class MedDeUploadDetailPKEntity {
}
class MedDeUploadDetailHistPKEntity {
}
class PendingForAuthDetailsHistEntity {
}


/***/ }),

/***/ 28840:
/*!***************************************************************************************!*\
  !*** ./src/app/views/authorize-modification/authorize-modification-routing.module.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizeModificationRoutingModule": function() { return /* binding */ AuthorizeModificationRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _authorize_modification_authorize_modification_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorize-modification/authorize-modification.component */ 95938);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: "",
        component: _authorize_modification_authorize_modification_component__WEBPACK_IMPORTED_MODULE_0__.AuthorizeModificationComponent
    }
];
class AuthorizeModificationRoutingModule {
}
AuthorizeModificationRoutingModule.??fac = function AuthorizeModificationRoutingModule_Factory(t) { return new (t || AuthorizeModificationRoutingModule)(); };
AuthorizeModificationRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AuthorizeModificationRoutingModule });
AuthorizeModificationRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AuthorizeModificationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 49136:
/*!*******************************************************************************!*\
  !*** ./src/app/views/authorize-modification/authorize-modification.module.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizeModificationModule": function() { return /* binding */ AuthorizeModificationModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _authorize_modification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authorize-modification-routing.module */ 28840);
/* harmony import */ var _authorize_modification_authorize_modification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorize-modification/authorize-modification.component */ 95938);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ 50481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);





class AuthorizeModificationModule {
}
AuthorizeModificationModule.??fac = function AuthorizeModificationModule_Factory(t) { return new (t || AuthorizeModificationModule)(); };
AuthorizeModificationModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({ type: AuthorizeModificationModule });
AuthorizeModificationModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _authorize_modification_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthorizeModificationRoutingModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](AuthorizeModificationModule, { declarations: [_authorize_modification_authorize_modification_component__WEBPACK_IMPORTED_MODULE_1__.AuthorizeModificationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _authorize_modification_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthorizeModificationRoutingModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule] }); })();


/***/ }),

/***/ 95938:
/*!*********************************************************************************************************!*\
  !*** ./src/app/views/authorize-modification/authorize-modification/authorize-modification.component.ts ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizeModificationComponent": function() { return /* binding */ AuthorizeModificationComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_shared_models_pending_for_auth_details_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/pending-for-auth-details-dto */ 12291);
/* harmony import */ var src_app_shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/pending-for-auth-dto */ 27721);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var src_app_shared_models_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/users */ 92803);
/* harmony import */ var src_app_shared_models_audit_logs_dto_first_second__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/audit-logs-dto-first-second */ 17283);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/api.service */ 94761);
/* harmony import */ var src_app_views_users_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/views/users/users.service */ 59119);
/* harmony import */ var src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/excel.service */ 58219);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ 50481);



// import { ModalExcelAuthSecondComponent } from '../modals/modal-excel-auth-second/modal-excel-auth-second.component';




// import { ToastService } from 'src/app/shared/services/toast.service';








function AuthorizeModificationComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](2, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????listener"]("click", function AuthorizeModificationComponent_tr_25_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????restoreView"](_r6); const data_r3 = restoredCtx.$implicit; const i_r4 = restoredCtx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"](); return ctx_r5.queryDetailsDataByParam(data_r3, i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](3, " Get Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????pipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
} if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????propertyInterpolate"]("id", "btnGetDetails" + i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](data_r3 == null ? null : data_r3.externalSysName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](data_r3 == null ? null : data_r3.batchNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](data_r3 == null ? null : data_r3.processName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["????pipeBind2"](12, 7, data_r3 == null ? null : data_r3.processingDate, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](ctx_r0.extractFilename(data_r3 == null ? null : data_r3.fileName));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](data_r3 == null ? null : data_r3.currency);
} }
function AuthorizeModificationComponent_tr_53_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????listener"]("click", function AuthorizeModificationComponent_tr_53_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["????restoreView"](_r11); const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"](); return ctx_r9.viewOperation(data_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
} }
function AuthorizeModificationComponent_tr_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](22, AuthorizeModificationComponent_tr_53_button_22_Template, 2, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
} if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](data_r7 == null ? null : data_r7.account);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](data_r7 == null ? null : data_r7.ccyCd);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](data_r7 == null ? null : data_r7.branchCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](data_r7 == null ? null : data_r7.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](data_r7 == null ? null : data_r7.lcyEquivalent);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](data_r7 == null ? null : data_r7.drCr);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](data_r7 == null ? null : data_r7.exchRate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](data_r7 == null ? null : data_r7.relatedAccount);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](data_r7 == null ? null : data_r7.addlText);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????textInterpolate"](data_r7 == null ? null : data_r7.acumenJournal);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", data_r7.versionNo >= 1);
} }
function AuthorizeModificationComponent_button_57_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????listener"]("click", function AuthorizeModificationComponent_button_57_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["????restoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["????nextContext"](); return ctx_r12.approveSecondLevel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](1, " Approve Data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
} }
class AuthorizeModificationComponent {
    constructor(api, 
    // public dialog: MatDialog,
    userApi, excelService) {
        this.api = api;
        this.userApi = userApi;
        this.excelService = excelService;
        this.respArray = [];
        this.dtOptions = {};
        this.dtTrigger1 = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
        this.dtTrigger2 = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
        this.pendingForAuthData = [];
        this.pendingForAuthDetailsListAll = [];
        this.excelDataAuthSecondAuditlog = new src_app_shared_models_users__WEBPACK_IMPORTED_MODULE_2__.User();
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe('en-US');
        this.firstAndSecondAuthAuditLogRespDTO = new src_app_shared_models_audit_logs_dto_first_second__WEBPACK_IMPORTED_MODULE_3__.FirstAndSecondAuthAuditLogRespDTO();
        // dataSource = new MatTableDataSource<PendingForAuthDetailsDTO>();
        // dataSourcePendingForAuth = new MatTableDataSource<PendingForAuthDTO>();
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('');
        this.button_permission = {};
        // pipe = new DatePipe('en-US');
        this.now = Date.now();
        this.dataForProcessScreen1 = [];
    }
    ngOnInit() {
        //     this.dataSource = new MatTableDataSource<PendingForAuthDetailsDTO>(
        //   this.pendingForAuthDetailsListAll
        // );
        // this.dataSourcePendingForAuth = new MatTableDataSource<PendingForAuthDTO>(
        //   this.pendingForAuthData
        // );
        this.firstLevelAuthorizationStatus = {};
        this.user_id = sessionStorage.getItem('user_id');
        this.role = sessionStorage.getItem('user_role');
        this.getPendingForAuthData();
        this.dtOptions[0] = {
            pagingType: 'full_numbers',
            pageLength: 5,
            columnDefs: [{ type: 'date', 'targets': [4] }],
            order: [[4, 'desc']],
            processing: true,
            lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]]
        };
        this.dtOptions[1] = {
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true,
            retrieve: true,
            lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]],
        };
    }
    ngOnDestroy() {
        this.dtTrigger1.unsubscribe();
        this.dtTrigger2.unsubscribe();
    }
    screenpermission() {
        this.screenName = 'DataAmendAuthorization';
        // this.role='ROLE1';
        this.userApi.getRoleScreenPermission(this.user_id, this.screenName, this.role).subscribe(res => {
            this.rolepermission = res;
            console.log(this.rolepermission);
            if (this.rolepermission) {
                this.button_permission = this.rolepermission[0];
                // console.log( this.button_permission);
            }
        });
    }
    extractFilename(path) {
        const pathArray = path.split("/");
        const lastIndex = pathArray.length - 1;
        return pathArray[lastIndex];
    }
    ;
    getAuditLogData(getDetailsQueryToggleReqDTO) {
        this.api
            .getFirstAndSecondAuthAuditService(this.getDetailsQueryToggleReqDTO)
            .subscribe(resp => {
            this.firstAndSecondAuthAuditLogRespDTO = resp;
        });
    }
    approveSecondLevel() {
        // console.log(this.pendingForAuthDetailsListAll);
        if (this.pendingForAuthDetailsListAll) {
            this.todaydate = this.pipe.transform(this.now, 'dd-MMM-yy');
            this.uploaddate = this.pipe.transform(this.pendingForAuthDetailsListAll[0].uploadDate, 'dd-MMM-yy');
            console.log('date for compare', this.todaydate, this.uploaddate);
            if (this.todaydate === this.uploaddate) {
            }
            else {
                console.log('inside if');
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire('Unable to authorized.', 'backdated authorization not allowed.');
                return;
            }
        }
        if (this.user_id === this.pendingForAuthDetailsListAll[0].inputBy) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire('Maker do not have permission to authorized.');
            return;
        }
        this.flag = false;
        this.progress = true;
        this.api.authorizeSecondLevel(this.pendingForAuthDetailsListAll, localStorage.getItem('currentUser')).subscribe(resp => {
            this.firstLevelAuthorizationStatus = resp;
            console.log(this.firstLevelAuthorizationStatus);
            if (this.firstLevelAuthorizationStatus) {
                this.progress = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire('You authorized the record to second level ');
            }
            if (!this.firstLevelAuthorizationStatus) {
                this.progress = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire('Error', 'You failed to authorize the record.');
            }
        });
        this.getPendingForAuthData();
        // this.pendingForAuthDetailsListAll=[];
        // this.dataSource = new MatTableDataSource<PendingForAuthDetailsDTO>(
        //   this.pendingForAuthDetailsListAll
        // );
    }
    getAllSecondLevelAuthDetailsData() {
        this.api.getSecondLevelAuthDetailsData().subscribe(resp => {
            this.pendingForAuthDetailsListAll = resp;
            this.dtTrigger2.next();
        });
    }
    queryDetailsDataByParam(pendingForAuthDTO, i) {
        var btn = document.getElementById("btnGetDetails" + i);
        btn.innerHTML = '<span class="indicator-progress" >Please wait... <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>';
        this.getDetailsQueryToggleReqDTO = new src_app_shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_1__.GetDetailsQueryToggleReqDTO();
        // this.getDetailsQueryToggleReqDTO.externalSysName =
        //   pendingForAuthDTO.externalSysName;
        // this.getDetailsQueryToggleReqDTO.processName =
        //   pendingForAuthDTO.processName;
        // this.getDetailsQueryToggleReqDTO.processingDate =
        //   pendingForAuthDTO.processingDate;
        // this.getDetailsQueryToggleReqDTO.currency =
        //   pendingForAuthDTO.currency;
        this.getDetailsQueryToggleReqDTO.batchNumber =
            pendingForAuthDTO.batchNumber;
        // console.log("getDetailsQueryToggleReqDTO :");
        // console.log(this.getDetailsQueryToggleReqDTO);
        //
        this.api
            .queryDetailsDataByParamServiceSecond(pendingForAuthDTO.batchNumber)
            .subscribe(resp => {
            this.pendingForAuthDetailsListAll = resp;
            btn.innerHTML = '<span>Get Details</span>';
            this.dtTrigger2.next();
            console.log(this.pendingForAuthDetailsListAll);
            if (this.pendingForAuthDetailsListAll.length > 0) {
                this.flag = true;
                this.flag1 = true;
                this.getAuditLogData(this.getDetailsQueryToggleReqDTO);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire('Edit the data from modify excel screen', 'No data found.');
            }
        });
        // new implementation on 23 aug
        // code changes
        // get audit log data
        // console.log(this.getDetailsQueryToggleReqDTO);
    }
    getDataWithOldAndNewValue(pendingForAuthDTO) {
        this.deUploadPendingForAuthDTO = pendingForAuthDTO;
        this.getDetailsQueryToggleReqDTO = new src_app_shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_1__.GetDetailsQueryToggleReqDTO();
        this.getDetailsQueryToggleReqDTO.externalSysName = this.deUploadPendingForAuthDTO.externalSysName;
        this.getDetailsQueryToggleReqDTO.processName = this.deUploadPendingForAuthDTO.processName;
        this.getDetailsQueryToggleReqDTO.processingDate = this.deUploadPendingForAuthDTO.processingDate;
        this.getDetailsQueryToggleReqDTO.currency = this.deUploadPendingForAuthDTO.currency;
        //
        this.api
            .queryDetailsDataByParamService(this.getDetailsQueryToggleReqDTO)
            .subscribe(resp => {
            this.detailsDataForFlex = resp;
            // console.log("hahaha");
            // console.log(this.detailsDataForFlex);
            //  this.flag = true;
        });
    }
    approveAndProcess() {
        this.spinner = true;
        this.deUploadReqDTO = new src_app_shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_1__.DeUploadReqDTO();
        this.deUploadReqDTO.pendingForAuthDTO = this.deUploadPendingForAuthDTO;
        this.deUploadReqDTO.pendingForAuthDetailsDTOList = this.detailsDataForFlex;
        // this.flag = false;
        this.api.processDeUpload(this.deUploadReqDTO, this.user_id).subscribe(resp => {
            this.deUploadStatus = resp;
            // console.log(this.deUploadStatus);
            if (this.deUploadStatus.statusMessage === 'FAILURE') {
                this.spinner = false;
                this.openSnackBar('Data Failed to Upload In Demodule', '');
            }
            if (this.deUploadStatus.statusMessage === 'SUCCESS') {
                this.spinner = false;
                this.openSnackBar('Data Successfully Uploaded TO DeUpload', '');
            }
        }, error => {
            if (_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpErrorResponse) {
                this.spinner = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire('Error', 'Failed to connect to flexcube');
            }
        });
    }
    getPendingForAuthData() {
        this.api.getPendingForAuthDataFirstError(this.user_id).subscribe(resp => {
            // console.log(resp);
            this.pendingForAuthData = resp;
            this.dtTrigger1.next();
            console.log(this.pendingForAuthData);
        });
    }
    doValidationOfString(a, b) {
        return a === b;
    }
    openSnackBar(message, action) {
        // this.snackBar.open(message, action, {
        //   duration: 2000
        // });
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire(message);
    }
    viewOperation(detailsObj) {
        // updated code on 3rd january by prabhat for view the detail data
        this.getDataWithOldAndNewValue(detailsObj);
        console.log(detailsObj);
        console.log(src_app_shared_models_pending_for_auth_details_dto__WEBPACK_IMPORTED_MODULE_0__.PendingForAuthDetailsDTO);
        this.dummyPendingForAuthDataDetailsSecond = new Array();
        const sourceCode = detailsObj.id.sourceCode;
        const branchCode = detailsObj.id.branchCode;
        const batchNo = detailsObj.id.batchNo;
        const initiationDate = detailsObj.id.initiationDate;
        const currNo = detailsObj.id.currNo;
        for (const entry of this.pendingForAuthDetailsListAll) {
            if (entry.id.sourceCode === sourceCode &&
                entry.id.branchCode === branchCode &&
                entry.id.batchNo === batchNo &&
                entry.id.initiationDate === initiationDate &&
                entry.id.currNo === currNo) {
                this.dummyPendingForAuthDataDetailsSecond.push(entry);
            }
        }
        // console.log(this.dummyPendingForAuthDataDetailsSecond); // 1, 'string', false
        this.openDialog(this.dummyPendingForAuthDataDetailsSecond);
    }
    openDialog(detailsDtoList) {
        // const dialogRef = this.dialog.open(ModalExcelAuthSecondComponent, {
        //   data: detailsDtoList
        // });
        // dialogRef.afterClosed().subscribe(result => {
        // });
    }
    downloadData() {
        this.button1 = false;
        console.log(this.dummyPendingForAuthDataDetailsSecond);
        this.dummyPendingForAuthDataDetailsSecond.forEach((element) => {
            this.dataForProcessScreen1.push({
                Source_Code: element.id.sourceCode,
                Process_Code: element.processCode,
                Branch_Code: element.id.branchCode,
                Batch_No: element.id.batchNo,
                Value_Date: this.pipe.transform(element.valueDate, 'dd-MMM-yy'),
                Account: element.account,
                Account_Branch: element.accountBranch,
                Currency: element.ccyCd,
                Amount: element.amount,
                DrCr: element.drCr,
                LcyEquivalent: element.lcyEquivalent,
                // Exch_Rate: element.id.exchRate,
                Curr_No: element.id.currNo,
                Addl_Text: element.addlText,
                TreasuryReference: element.acumenJournal,
                Trn_Code: element.txnCode,
                Period_Code: element.periodCode,
                Financial_Cycle: element.finCycle,
                //  Initiation_Date: this.pipe.transform(element.initiationDate, 'dd-MMM-yy'),
                Upload_Date: this.pipe.transform(element.uploadDate, 'dd-MMM-yy'),
                Input_By: element.inputBy,
                Input_Time: this.pipe.transform(element.inputTime, 'dd-MMM-yy'),
                //   UDF_Detail: element.udfDetails,
                //   Error_Desc:element.errorDesc,
                //   Validation_Error: element.validationError,
                Related_Customer: element.relCust,
                Related_Account: element.relatedAccount,
                Related_Reference: element.relatedRef
            });
            console.log(this.dataForProcessScreen1);
        });
        console.log('final data', this.dataForProcessScreen1);
        this.excelService.exportAsExcelFile(this.dataForProcessScreen1, 'Excel_Upload_Data'); // this.pendingForAuthDetailsDTOList[0]
        this.dataForProcessScreen1 = [''];
    }
}
AuthorizeModificationComponent.??fac = function AuthorizeModificationComponent_Factory(t) { return new (t || AuthorizeModificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](src_app_views_users_users_service__WEBPACK_IMPORTED_MODULE_6__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["????directiveInject"](src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_7__.ExcelService)); };
AuthorizeModificationComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["????defineComponent"]({ type: AuthorizeModificationComponent, selectors: [["npr-authorize-modification"]], decls: 58, vars: 7, consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "pageTitle", "my-3", "text-center"], [1, "dbCardStyle"], ["id", "dbTable1", "datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], ["id", "dbTable2", "datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [1, "btnCol", "mt-md-4", "mt-3"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "btnDarkGrey"], ["class", "btn smBtn btnPrimary ", "style", "height : 90%", 3, "click", 4, "ngIf"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "id", "click"], [3, "click", 4, "ngIf"], [3, "click"], [1, "btn", "smBtn", "btnPrimary", 2, "height", "90%", 3, "click"]], template: function AuthorizeModificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](3, "Authorize Modifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](5, "Pending for Authorization");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](7, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](8, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](11, "process detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](13, "external system");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](15, "batch number");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](17, "process name");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](19, "processing date");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](21, "file name");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](23, "currancy");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](24, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](25, AuthorizeModificationComponent_tr_25_Template, 17, 10, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](27, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](28, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](31, "account");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](33, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](35, "branch");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](37, "amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](39, "lcy ammount");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](41, "dR/cr");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](43, "exchange rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](45, "related acc");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](47, "add text");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](49, "treasury reference");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](51, "Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](52, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](53, AuthorizeModificationComponent_tr_53_Template, 23, 11, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](54, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementStart"](55, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????text"](56, "Export +");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????template"](57, AuthorizeModificationComponent_button_57_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("dtOptions", ctx.dtOptions[0])("dtTrigger", ctx.dtTrigger1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngForOf", ctx.pendingForAuthData);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("dtOptions", ctx.dtOptions[1])("dtTrigger", ctx.dtTrigger2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngForOf", ctx.pendingForAuthDetailsListAll);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["????property"]("ngIf", ctx.flag);
    } }, directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_8__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe], styles: ["table.tableStyle[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #A6AAB5;\n  font-size: 9px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  padding: 16px 13px;\n  border-bottom: 1px solid #F5F5F5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvcml6ZS1tb2RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBQ0YiLCJmaWxlIjoiYXV0aG9yaXplLW1vZGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlLnRhYmxlU3R5bGUgdGhlYWQgdHIgdGgge1xyXG4gIGNvbG9yOiAjQTZBQUI1O1xyXG4gIGZvbnQtc2l6ZTogOXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBwYWRkaW5nOiAxNnB4IDEzcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGNUY1RjUgO1xyXG59Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_views_authorize-modification_authorize-modification_module_ts-es2015.js.map