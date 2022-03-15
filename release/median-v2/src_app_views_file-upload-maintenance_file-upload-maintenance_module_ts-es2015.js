"use strict";
(self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_file-upload-maintenance_file-upload-maintenance_module_ts"],{

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

/***/ 97643:
/*!******************************************************************************************************!*\
  !*** ./src/app/views/file-upload-maintenance/external-system-edit/external-system-edit.component.ts ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExternalSystemEditComponent": function() { return /* binding */ ExternalSystemEditComponent; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/api.service */ 94761);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 31443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);









function ExternalSystemEditComponent_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dept_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", dept_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", dept_r8, "");
} }
function ExternalSystemEditComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExternalSystemEditComponent_div_30_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.enableEditFlag(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ExternalSystemEditComponent_button_32_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExternalSystemEditComponent_button_32_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.onSubmit(ctx_r11.externalSystemEditForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r2.submitDisable);
} }
function ExternalSystemEditComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExternalSystemEditComponent_div_33_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.onClickOfAuth(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Auth");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ExternalSystemEditComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExternalSystemEditComponent_div_34_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r15.onClickOfClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ExternalSystemEditComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExternalSystemEditComponent_div_35_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r17.onClickOfReopen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Reopen");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ExternalSystemEditComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExternalSystemEditComponent_div_36_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r19.OndeleteofUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ExternalSystemEditComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 35);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 35);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 35);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 35);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 35);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 35);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 35);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](93, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 35);
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
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.externalSystemSummry.modifiedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 8, ctx_r7.externalSystemSummry.modifiedTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.externalSystemSummry.recordStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.externalSystemSummry.authorizedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](63, 10, ctx_r7.externalSystemSummry.authorizedTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.externalSystemSummry.verifiedOnce);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.externalSystemSummry.authStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.externalSystemSummry.version);
} }
const _c0 = function () { return ["/external-system/extSys-summary"]; };
class ExternalSystemEditComponent {
    constructor(apiService, router, formBuilder, toastService) {
        this.apiService = apiService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastService = toastService;
        this.editFlag = false;
        this.externalSystemUpdate = {
            extSysCode: '',
            extSysName: '',
            department: '',
            modifiedBy: '',
            authStatus: '',
            authorizedBy: '',
            authorizedTime: '',
            modifiedTime: '',
            recordStatus: '',
            updatedBy: '',
            verifiedOnce: '',
            version: '',
        };
    }
    ngOnInit() {
        this.currentUser = localStorage.getItem("userFromLogin");
        this.externalSystemEditForm = this.formBuilder.group({
            extSysCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            extSysName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            department: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            verifiedBy: [""],
            verifiedTime: [""],
            recordStatus: [""],
            verifiedOnce: [""],
            modNo: [""],
            verifiedStatus: [""],
            creatorDtStamp: [""],
            creatorId: [""],
        });
        this.getAllDeptNames();
        this.getExternalSystemSummry();
    }
    getAllDeptNames() {
        this.apiService.getAllDept().subscribe(deptData => {
            this.allDeptNames = deptData;
        });
    }
    auditLog() {
        if (this.externalSystemSummry.authStatus === 'U') {
            this.externalSystemSummry.authStatus = 'UNAUTHORIZED';
        }
        if (this.externalSystemSummry.authStatus === 'A') {
            this.externalSystemSummry.authStatus = 'AUTHORIZED';
        }
        if (this.externalSystemSummry.recordStatus === 'O') {
            this.externalSystemSummry.recordStatus = 'OPEN';
        }
        if (this.externalSystemSummry.recordStatus === 'C') {
            this.externalSystemSummry.recordStatus = 'CLOSED';
        }
        if (this.externalSystemSummry.verifiedOnce === 'N') {
            this.externalSystemSummry.verifiedOnce = 'NO';
        }
        if (this.externalSystemSummry.verifiedOnce === 'Y') {
            this.externalSystemSummry.verifiedOnce = 'YES';
        }
    }
    getExternalSystemSummry() {
        this.apiService.getExternalSystemSummry().subscribe((summaryData) => {
            this.externalSystemSummry = summaryData;
            console.log("this.externalSystemSummry", this.externalSystemSummry);
            const extCode = this.externalSystemSummry.extSysCode;
            const extName = this.externalSystemSummry.extSysName;
            const department = this.externalSystemSummry.department;
            this.externalSystemEditForm.controls.extSysCode.setValue(extCode);
            this.externalSystemEditForm.controls.extSysName.setValue(extName);
            this.externalSystemEditForm.controls.department.setValue(department);
            this.auditLog();
        });
    }
    onOptionsChange(event) {
        const value = event.target.value;
        if (value) {
            this.externalSystemEditForm.controls.department.setValue(value);
        }
    }
    enableEditFlag() {
        this.editFlag = true;
    }
    onSubmit(externalSystemEditForm) {
        this.externalSystemUpdate.extSysCode = externalSystemEditForm.extSysCode;
        this.externalSystemUpdate.extSysName = externalSystemEditForm.extSysName;
        this.externalSystemUpdate.department = externalSystemEditForm.department;
        this.externalSystemUpdate.modifiedBy = this.currentUser;
        this.externalSystemUpdate.authStatus = this.externalSystemSummry.authStatus;
        this.externalSystemUpdate.authorizedBy = this.externalSystemSummry.authorizedBy;
        this.externalSystemUpdate.authorizedTime = this.externalSystemSummry.authorizedTime;
        this.externalSystemUpdate.modifiedTime = this.externalSystemSummry.modifiedTime;
        this.externalSystemUpdate.recordStatus = this.externalSystemSummry.recordStatus;
        this.externalSystemUpdate.updatedBy = this.currentUser;
        this.externalSystemUpdate.verifiedOnce = this.externalSystemSummry.verifiedOnce;
        this.externalSystemUpdate.version = this.externalSystemSummry.version;
        this.apiService.updateexternalSystemEdit(this.externalSystemUpdate).subscribe(data => {
            this.externalSystemSummry = data;
            if (this.externalSystemSummry) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Record is Updated',
                    icon: 'success'
                });
                this.submitDisable = true;
                this.auditLog();
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Failed to Update Data!',
                    icon: 'error'
                });
            }
        }, error => {
            if (_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    text: 'Server Error!',
                    icon: 'error'
                });
            }
        });
    }
    onClickOfAuth() {
        if (this.externalSystemSummry.modifiedBy === this.currentUser) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({ text: "Maker cannot authorize the record",
                icon: 'error'
            });
            return;
        }
        this.apiService.authorizingTheRecordExternal(this.externalSystemSummry, this.currentUser).subscribe(authResp => {
            this.externalSystemSummry = authResp;
            this.auditLog();
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: 'You Authorized the Record!',
                icon: 'success'
            });
        });
        // }
    }
    onClickOfClose() {
        this.externalSystemSummry.modifiedBy = this.currentUser;
        this.apiService.closingTheRecord(this.externalSystemSummry).subscribe(closeResp => {
            console.log(closeResp);
            this.externalSystemSummry = closeResp;
            if (this.externalSystemSummry) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Record is  Closed',
                    icon: 'success'
                });
                this.auditLog();
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Failed to Close the Recored!',
                    icon: 'error'
                });
            }
        }, error => {
            if (_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    text: 'Server Error!',
                    icon: 'error'
                });
            }
        });
    }
    onClickOfReopen() {
        this.apiService.reopeningTheRecord(this.externalSystemSummry).subscribe(openResp => {
            console.log(openResp);
            this.externalSystemSummry = openResp;
            if (this.externalSystemSummry) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Record is Reopened',
                    icon: 'success'
                });
                this.auditLog();
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Failed to Reopen the Record!',
                    icon: 'error'
                });
            }
        }, error => {
            if (_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    text: 'Server Error!',
                    icon: 'error'
                });
            }
        });
    }
    OndeleteofUser() {
        this.apiService.onClickOfDeleteOfUpdateExcel(this.externalSystemSummry).subscribe(resp => {
            console.log(resp);
            if (resp === true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Record is Deleted',
                    icon: 'success'
                });
                this.router.navigateByUrl('/external-system/extSys-summary');
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Failed to Delete User Data!',
                    icon: 'error'
                });
            }
        });
    }
}
ExternalSystemEditComponent.ɵfac = function ExternalSystemEditComponent_Factory(t) { return new (t || ExternalSystemEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService)); };
ExternalSystemEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ExternalSystemEditComponent, selectors: [["npr-external-system-edit"]], decls: 41, vars: 14, consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "formStyle", 3, "formGroup"], [1, "dbCardStyle"], [3, "disabled"], [1, "row", "gy-4"], [1, "col-lg-4"], ["for", "extCode", 1, "formLbl"], [1, "colorRed"], ["id", "extCode", "type", "text", "formControlName", "extSysCode", "readonly", "", "placeholder", "External System Code", "value", "", 1, "form-control"], ["for", "extName", 1, "formLbl"], ["id", "extName", "formControlName", "extSysName", "type", "text", "placeholder", "External System Name", "value", "", 1, "form-control", 3, "readonly"], ["for", "department", 1, "formLbl"], ["formControlName", "department", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["disabled", "", "selected", "", 1, "form-class"], [3, "value", 4, "ngFor", "ngForOf"], [1, "row", "g-3", "pb-3", "pt-4", "justify-content-end"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], ["class", "btn smBtn minWdSmBtn btnPrimary", 3, "disabled", "click", 4, "ngIf"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["class", "dbCardStyle", 4, "ngIf"], [3, "value"], [1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], ["src", "assets/images/maker-icon.svg", "alt", "..."], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], ["src", "assets/images/checker-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/auth-status-icon.svg", "alt", "..."]], template: function ExternalSystemEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "System Interface");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "fieldset", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "External System Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "External System Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ExternalSystemEditComponent_Template_select_change_25_listener($event) { return ctx.onOptionsChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Select Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, ExternalSystemEditComponent_option_28_Template, 2, 2, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, ExternalSystemEditComponent_div_30_Template, 3, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, ExternalSystemEditComponent_button_32_Template, 2, 1, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, ExternalSystemEditComponent_div_33_Template, 3, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, ExternalSystemEditComponent_div_34_Template, 3, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, ExternalSystemEditComponent_div_35_Template, 3, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, ExternalSystemEditComponent_div_36_Template, 3, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Exit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, ExternalSystemEditComponent_div_40_Template, 100, 12, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.externalSystemEditForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.submitDisable);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx.editFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", !ctx.editFlag ? "" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.allDeptNames);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.externalSystemSummry.recordStatus == "OPEN" && !ctx.editFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.editFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.externalSystemSummry.authStatus == "UNAUTHORIZED" && !ctx.editFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.externalSystemSummry.recordStatus == "OPEN" && !ctx.editFlag && ctx.externalSystemSummry.verifiedOnce == "YES");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.externalSystemSummry.recordStatus == "CLOSED" && !ctx.editFlag && ctx.externalSystemSummry.verifiedOnce == "YES");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.externalSystemSummry.verifiedOnce == "NO" && !ctx.editFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.externalSystemSummry);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: [".form-class[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #797979;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-bottom: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-left: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-right: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsLXN5c3RlbS1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFFQSx3RUFBQTtBQUFKIiwiZmlsZSI6ImV4dGVybmFsLXN5c3RlbS1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY2xhc3Mge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzc5Nzk3OTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dFxyXG59Il19 */"] });


/***/ }),

/***/ 94057:
/*!****************************************************************************************************!*\
  !*** ./src/app/views/file-upload-maintenance/external-system-new/external-system-new.component.ts ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExternalSystemNewComponent": function() { return /* binding */ ExternalSystemNewComponent; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/api.service */ 94761);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 31443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);









function ExternalSystemNewComponent_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dept_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", dept_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", dept_r4, "");
} }
function ExternalSystemNewComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 31);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 31);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 31);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 31);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 31);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 31);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 31);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.externalSystemResponse.modifiedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 7, ctx_r3.externalSystemResponse.modifiedTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.externalSystemResponse.recordStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.externalSystemResponse.authorizedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](63, 9, ctx_r3.externalSystemResponse.authorizedTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.externalSystemResponse.verifiedOnce);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.externalSystemResponse.authStatus);
} }
const _c0 = function () { return ["/external-system/extSys-summary"]; };
class ExternalSystemNewComponent {
    constructor(apiService, formBuilder, toastService) {
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.toastService = toastService;
        this.externalSystem = {
            extSysCode: '',
            extSysName: '',
            department: '',
            modifiedBy: ''
        };
        this.editFlag = false;
        this.submitBtn = true;
        this.space = false;
        this.spaceForExtName = false;
    }
    ngOnInit() {
        this.currentUser = localStorage.getItem("userFromLogin");
        this.externalSystemForm = this.formBuilder.group({
            extSysCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            extSysName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            department: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            verifiedBy: [""],
            verifiedTime: [""],
            recordStatus: [""],
            verifiedOnce: [""],
            modNo: [""],
            verifiedStatus: [""],
            creatorDtStamp: [""],
            creatorId: [""],
        });
        this.getAllDeptNames();
    }
    getAllDeptNames() {
        this.apiService.getAllDept().subscribe(deptData => {
            this.allDeptNames = deptData;
        });
    }
    onOptionsChange(event) {
        const value = event.target.value;
        if (value) {
            this.externalSystemForm.controls.department.setValue(value);
        }
    }
    auditLog() {
        if (this.externalSystemResponse.authStatus === 'U') {
            this.externalSystemResponse.authStatus = 'UNAUTHORIZED';
        }
        if (this.externalSystemResponse.authStatus === 'A') {
            this.externalSystemResponse.authStatus = 'AUTHORIZED';
        }
        if (this.externalSystemResponse.recordStatus === 'O') {
            this.externalSystemResponse.recordStatus = 'OPEN';
        }
        if (this.externalSystemResponse.recordStatus === 'C') {
            this.externalSystemResponse.recordStatus = 'CLOSED';
        }
        if (this.externalSystemResponse.verifiedOnce === 'N') {
            this.externalSystemResponse.verifiedOnce = 'NO';
        }
        if (this.externalSystemResponse.verifiedOnce === 'Y') {
            this.externalSystemResponse.verifiedOnce = 'YES';
        }
    }
    onSubmit(externalSystemFormValue) {
        this.externalSystem.extSysCode = externalSystemFormValue.extSysCode;
        this.externalSystem.extSysName = externalSystemFormValue.extSysName;
        this.externalSystem.department = externalSystemFormValue.department;
        this.externalSystem.modifiedBy = this.currentUser;
        this.apiService.saveExternalSystem(this.externalSystem).subscribe(res => {
            this.externalSystemResponse = res;
            if (this.externalSystemResponse != null) {
                this.editFlag = true;
                this.submitBtn = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Record is Created',
                    icon: 'success'
                });
                this.auditLog();
                // this.externalSystemForm.reset();
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    text: 'Given External System Code/External System Already Present!',
                    icon: 'warning'
                });
            }
        }, error => {
            if (_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    text: 'Server Error',
                    icon: 'error'
                });
            }
        });
    }
    onRest() {
        this.externalSystemForm.reset();
        this.externalSystemResponse = [];
    }
    checkingSpaceForExtCode(extCode) {
        this.var = extCode.value;
        const result = this.var.trim();
        if (result) {
            this.space = true;
        }
        else {
            this.space = false;
        }
    }
    checkingSpaceForExtName(extName) {
        this.var = extName.value;
        const result = this.var.trim();
        if (result) {
            this.spaceForExtName = true;
        }
        else {
            this.spaceForExtName = false;
        }
    }
}
ExternalSystemNewComponent.ɵfac = function ExternalSystemNewComponent_Factory(t) { return new (t || ExternalSystemNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService)); };
ExternalSystemNewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ExternalSystemNewComponent, selectors: [["npr-external-system-new"]], decls: 38, vars: 8, consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "formStyle", 3, "formGroup"], [1, "dbCardStyle"], [1, "row", "gy-4"], [1, "col-lg-4"], ["for", "extCode", 1, "formLbl"], [1, "colorRed"], ["id", "extCode", "type", "text", "formControlName", "extSysCode", "placeholder", "External System Code", "value", "", 1, "form-control", 3, "readonly", "keyup"], ["extCode", ""], ["for", "extName", 1, "formLbl"], ["id", "extName", "formControlName", "extSysName", "type", "text", "placeholder", "External System Name", "value", "", 1, "form-control", 3, "readonly", "keyup"], ["extName", ""], ["for", "department", 1, "formLbl"], ["formControlName", "department", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["disabled", "", "selected", "", 1, "form-class"], [3, "value", 4, "ngFor", "ngForOf"], [1, "row", "g-3", "pb-3", "pt-4", "justify-content-end"], [1, "col-auto"], ["href", "javascript:void(0);", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["class", "dbCardStyle", 4, "ngIf"], [3, "value"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], ["src", "assets/images/maker-icon.svg", "alt", "..."], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], ["src", "assets/images/checker-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/auth-status-icon.svg", "alt", "..."]], template: function ExternalSystemNewComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "System Interface");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "External System Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function ExternalSystemNewComponent_Template_input_keyup_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13); return ctx.checkingSpaceForExtCode(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "External System Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function ExternalSystemNewComponent_Template_input_keyup_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](20); return ctx.checkingSpaceForExtName(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ExternalSystemNewComponent_Template_select_change_26_listener($event) { return ctx.onOptionsChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Select Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, ExternalSystemNewComponent_option_29_Template, 2, 2, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExternalSystemNewComponent_Template_button_click_32_listener() { return ctx.onSubmit(ctx.externalSystemForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Exit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, ExternalSystemNewComponent_div_37_Template, 88, 11, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.externalSystemForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", ctx.editFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", ctx.editFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.allDeptNames);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.externalSystemForm.valid || !ctx.submitBtn || !ctx.space || !ctx.spaceForExtName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.externalSystemResponse);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: [".form-class[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #797979;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-bottom: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-left: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-right: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsLXN5c3RlbS1uZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUVBLHdFQUFBO0FBQUoiLCJmaWxlIjoiZXh0ZXJuYWwtc3lzdGVtLW5ldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNsYXNzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6ICM3OTc5Nzk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ViZWJlYjtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXRcclxufSJdfQ== */"] });


/***/ }),

/***/ 4846:
/*!********************************************************************************************!*\
  !*** ./src/app/views/file-upload-maintenance/external-system/external-system.component.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExternalSystemComponent": function() { return /* binding */ ExternalSystemComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/api.service */ 94761);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 31443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ 50481);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);







function ExternalSystemComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExternalSystemComponent_tr_24_Template_span_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const item_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.sendingDataforEdit(item_r1); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.extSysCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.extSysName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.authStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 4, item_r1.modifiedTime, "medium"));
} }
const _c0 = function () { return ["/external-system/extSys-new"]; };
const _c1 = function () { return ["active"]; };
class ExternalSystemComponent {
    constructor(apiService, toastService, router) {
        this.apiService = apiService;
        this.toastService = toastService;
        this.router = router;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            columnDefs: [{ type: 'date', 'targets': [3] }],
            order: [[3, 'desc']],
            processing: true,
            lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]]
        };
        this.gettingExternalSummry();
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
    gettingExternalSummry() {
        this.apiService.getAllExt().subscribe(summryResp => {
            this.externalSummaryData = summryResp;
            console.log(this.externalSummaryData);
            this.dtTrigger.next();
            if (this.externalSummaryData != null) {
                // this.toastService.successMessage('Data Fetched Successfully!.', '');
                return;
            }
            else {
                // this.toastService.errorMessage('Failed to Fetch Data!.', '');
                return;
            }
        });
    }
    sendingDataforEdit(dataForEdit) {
        if (dataForEdit) {
            this.apiService.setExternalSystemSummry({
                authStatus: dataForEdit.authStatus,
                authorizedBy: dataForEdit.authorizedBy,
                authorizedTime: dataForEdit.authorizedTime,
                department: dataForEdit.department,
                extSysCode: dataForEdit.extSysCode,
                extSysName: dataForEdit.extSysName,
                modifiedBy: dataForEdit.modifiedBy,
                modifiedTime: dataForEdit.modifiedTime,
                recordStatus: dataForEdit.recordStatus,
                verifiedOnce: dataForEdit.verifiedOnce,
                version: dataForEdit.version,
            });
            this.router.navigate(['/external-system/extSys-edit']);
        }
    }
}
ExternalSystemComponent.ɵfac = function ExternalSystemComponent_Factory(t) { return new (t || ExternalSystemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
ExternalSystemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ExternalSystemComponent, selectors: [["npr-external-system"]], decls: 25, vars: 7, consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "routerLink", "routerLinkActive"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary"], ["datatable", "", "id", "dbTable1", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [1, "primaryColor", 3, "click"]], template: function ExternalSystemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "System Interface");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "External System Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "External System Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Auth Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, ExternalSystemComponent_tr_24_Template, 11, 7, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c0))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.externalSummaryData);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHRlcm5hbC1zeXN0ZW0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 9091:
/*!*****************************************************************************************!*\
  !*** ./src/app/views/file-upload-maintenance/file-upload-maintenance-routing.module.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileUploadMaintenanceRoutingModule": function() { return /* binding */ FileUploadMaintenanceRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _external_system_edit_external_system_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./external-system-edit/external-system-edit.component */ 97643);
/* harmony import */ var _external_system_new_external_system_new_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./external-system-new/external-system-new.component */ 94057);
/* harmony import */ var _external_system_external_system_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./external-system/external-system.component */ 4846);
/* harmony import */ var _process_code_mapping_edit_process_code_mapping_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./process-code-mapping-edit/process-code-mapping-edit.component */ 9598);
/* harmony import */ var _process_code_mapping_new_process_code_mapping_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./process-code-mapping-new/process-code-mapping-new.component */ 8972);
/* harmony import */ var _process_code_mapping_process_code_mapping_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./process-code-mapping/process-code-mapping.component */ 87873);
/* harmony import */ var _treasury_reference_treasury_reference_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./treasury-reference/treasury-reference.component */ 42034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);










const routes = [
    {
        path: 'extSys-summary',
        component: _external_system_external_system_component__WEBPACK_IMPORTED_MODULE_2__.ExternalSystemComponent
    },
    {
        path: 'extSys-new',
        component: _external_system_new_external_system_new_component__WEBPACK_IMPORTED_MODULE_1__.ExternalSystemNewComponent
    },
    {
        path: 'extSys-edit',
        component: _external_system_edit_external_system_edit_component__WEBPACK_IMPORTED_MODULE_0__.ExternalSystemEditComponent
    },
    {
        path: 'processCodeMapping',
        component: _process_code_mapping_process_code_mapping_component__WEBPACK_IMPORTED_MODULE_5__.ProcessCodeMappingComponent
    }, {
        path: 'processCodeMappingNew',
        component: _process_code_mapping_new_process_code_mapping_new_component__WEBPACK_IMPORTED_MODULE_4__.ProcessCodeMappingNewComponent
    },
    {
        path: 'processCodeMappingEdit',
        component: _process_code_mapping_edit_process_code_mapping_edit_component__WEBPACK_IMPORTED_MODULE_3__.ProcessCodeMappingEditComponent
    },
    {
        path: 'treasuryReference',
        component: _treasury_reference_treasury_reference_component__WEBPACK_IMPORTED_MODULE_6__.TreasuryReferenceComponent
    },
];
class FileUploadMaintenanceRoutingModule {
}
FileUploadMaintenanceRoutingModule.ɵfac = function FileUploadMaintenanceRoutingModule_Factory(t) { return new (t || FileUploadMaintenanceRoutingModule)(); };
FileUploadMaintenanceRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: FileUploadMaintenanceRoutingModule });
FileUploadMaintenanceRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](FileUploadMaintenanceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 99776:
/*!*********************************************************************************!*\
  !*** ./src/app/views/file-upload-maintenance/file-upload-maintenance.module.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileUploadMaintenanceModule": function() { return /* binding */ FileUploadMaintenanceModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _file_upload_maintenance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-upload-maintenance-routing.module */ 9091);
/* harmony import */ var _external_system_external_system_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./external-system/external-system.component */ 4846);
/* harmony import */ var _external_system_new_external_system_new_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./external-system-new/external-system-new.component */ 94057);
/* harmony import */ var _process_code_mapping_process_code_mapping_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./process-code-mapping/process-code-mapping.component */ 87873);
/* harmony import */ var _process_code_mapping_new_process_code_mapping_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./process-code-mapping-new/process-code-mapping-new.component */ 8972);
/* harmony import */ var _treasury_reference_treasury_reference_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./treasury-reference/treasury-reference.component */ 42034);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _external_system_edit_external_system_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./external-system-edit/external-system-edit.component */ 97643);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ 50481);
/* harmony import */ var _process_code_mapping_edit_process_code_mapping_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./process-code-mapping-edit/process-code-mapping-edit.component */ 9598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);












class FileUploadMaintenanceModule {
}
FileUploadMaintenanceModule.ɵfac = function FileUploadMaintenanceModule_Factory(t) { return new (t || FileUploadMaintenanceModule)(); };
FileUploadMaintenanceModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: FileUploadMaintenanceModule });
FileUploadMaintenanceModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _file_upload_maintenance_routing_module__WEBPACK_IMPORTED_MODULE_0__.FileUploadMaintenanceRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_7__.DataTablesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](FileUploadMaintenanceModule, { declarations: [_external_system_external_system_component__WEBPACK_IMPORTED_MODULE_1__.ExternalSystemComponent,
        _external_system_new_external_system_new_component__WEBPACK_IMPORTED_MODULE_2__.ExternalSystemNewComponent,
        _process_code_mapping_process_code_mapping_component__WEBPACK_IMPORTED_MODULE_3__.ProcessCodeMappingComponent,
        _process_code_mapping_new_process_code_mapping_new_component__WEBPACK_IMPORTED_MODULE_4__.ProcessCodeMappingNewComponent,
        _treasury_reference_treasury_reference_component__WEBPACK_IMPORTED_MODULE_5__.TreasuryReferenceComponent,
        _external_system_edit_external_system_edit_component__WEBPACK_IMPORTED_MODULE_6__.ExternalSystemEditComponent,
        _process_code_mapping_edit_process_code_mapping_edit_component__WEBPACK_IMPORTED_MODULE_8__.ProcessCodeMappingEditComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _file_upload_maintenance_routing_module__WEBPACK_IMPORTED_MODULE_0__.FileUploadMaintenanceRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_7__.DataTablesModule] }); })();


/***/ }),

/***/ 9598:
/*!****************************************************************************************************************!*\
  !*** ./src/app/views/file-upload-maintenance/process-code-mapping-edit/process-code-mapping-edit.component.ts ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcessCodeMappingEditComponent": function() { return /* binding */ ProcessCodeMappingEditComponent; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/api.service */ 94761);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 31443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);









function ProcessCodeMappingEditComponent_label_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "SFTP Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingEditComponent_label_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingEditComponent_input_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 71);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);
} }
function ProcessCodeMappingEditComponent_label_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "File Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingEditComponent_input_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 73);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r4.editFlag);
} }
function ProcessCodeMappingEditComponent_label_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "File Path");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingEditComponent_input_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 75);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r6.editFlag);
} }
function ProcessCodeMappingEditComponent_label_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingEditComponent_input_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 77);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r8.editFlag);
} }
function ProcessCodeMappingEditComponent_label_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Back Dating");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingEditComponent_input_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 79);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r10.editFlag);
} }
function ProcessCodeMappingEditComponent_label_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "IP Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingEditComponent_input_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 81);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r12.editFlag);
} }
function ProcessCodeMappingEditComponent_label_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Future Dating");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingEditComponent_input_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 83);
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r14.editFlag);
} }
function ProcessCodeMappingEditComponent_label_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Port");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingEditComponent_input_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 84);
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r16.editFlag);
} }
function ProcessCodeMappingEditComponent_label_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "FCY Percentage");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingEditComponent_input_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 86);
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r18.editFlag);
} }
function ProcessCodeMappingEditComponent_label_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Path");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingEditComponent_input_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 88);
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r20.editFlag);
} }
function ProcessCodeMappingEditComponent_button_127_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcessCodeMappingEditComponent_button_127_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r28.enableEditFlag(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingEditComponent_button_129_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcessCodeMappingEditComponent_button_129_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r30.finalSubmitofEditForm(ctx_r30.processCodeEditForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r22.processCodeEditForm.valid || ctx_r22.submitEdit);
} }
function ProcessCodeMappingEditComponent_button_131_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcessCodeMappingEditComponent_button_131_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r32.onClickOfAuth(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Auth");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingEditComponent_button_133_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcessCodeMappingEditComponent_button_133_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r34.onClickOfClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingEditComponent_button_135_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcessCodeMappingEditComponent_button_135_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r36.onClickOfReopen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Reopen");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingEditComponent_button_137_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcessCodeMappingEditComponent_button_137_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r38.OndeleteofUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingEditComponent_div_141_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 99);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "img", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 99);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "img", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 99);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "img", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 99);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "img", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 99);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "img", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 99);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 99);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](93, "img", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 99);
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
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r27.processCodeSummary.creatorId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 8, ctx_r27.processCodeSummary.creatorDtStamp));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r27.processCodeSummary.recordStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r27.processCodeSummary.verifierId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](63, 10, ctx_r27.processCodeSummary.verifierDtStamp));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r27.processCodeSummary.verifiedOnce);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r27.processCodeSummary.authStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r27.processCodeSummary.versionNo);
} }
const _c0 = function () { return ["/external-system/processCodeMapping"]; };
class ProcessCodeMappingEditComponent {
    constructor(router, apiService, formBuilder, toastService) {
        this.router = router;
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.toastService = toastService;
        this.showFilefield = false;
        this.showFutureDate = false;
        this.showfCYExchangeValue = false;
        this.showbackDateValue = false;
        this.showsftpValues = false;
        this.editFlag = false;
    }
    ngOnInit() {
        this.currentUser = localStorage.getItem("userFromLogin");
        this.processCodeEditForm = this.formBuilder.group({
            extSysCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            extSysName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            processCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            maxUploadLimit: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            acft: [""],
            autoUpload: [""],
            backDateAllow: [""],
            bdav: [""],
            creatorId: [""],
            fCYPercentage: [""],
            fCYRateVariance: [""],
            fdav: [""],
            fileName: [""],
            filePath: [""],
            futureDateAllow: [""],
            mandatoryFieldImposed: [""],
            sftpIpaddress: [""],
            sftpPassword: [""],
            sftpPath: [""],
            sftpPort: [""],
            sftpRequired: [""],
            sftpUsername: [""],
            treasuryrefRequired: [""],
            wuFile: [""],
        });
        this.gettingProcessCode();
    }
    auditLog() {
        if (this.processCodeSummary.authStatus === 'U') {
            this.processCodeSummary.authStatus = 'UNAUTHORIZED';
        }
        if (this.processCodeSummary.authStatus === 'A') {
            this.processCodeSummary.authStatus = 'AUTHORIZED';
        }
        if (this.processCodeSummary.recordStatus === 'O') {
            this.processCodeSummary.recordStatus = 'OPEN';
        }
        if (this.processCodeSummary.recordStatus === 'C') {
            this.processCodeSummary.recordStatus = 'CLOSED';
        }
        if (this.processCodeSummary.verifiedOnce === 'NO') {
            this.processCodeSummary.verifiedOnce = 'NO';
        }
        if (this.processCodeSummary.verifiedOnce === 'Y') {
            this.processCodeSummary.verifiedOnce = 'YES';
        }
    }
    gettingProcessCode() {
        this.apiService.getProcessCode().subscribe((summaryData) => {
            this.processCodeSummary = summaryData;
            console.log("this.processCodeSummary", this.processCodeSummary);
            const extCode = this.processCodeSummary.extSysCode;
            const extSysName = this.processCodeSummary.extSysName;
            const minlimit = this.processCodeSummary.maxUploadLimit;
            const process = this.processCodeSummary.processCode;
            const treasuryrefReq = this.processCodeSummary.treasuryrefRequired;
            const autoUpload = this.processCodeSummary.autoUpload;
            const backDateAllow = this.processCodeSummary.backDateAllow;
            const fCYRateVariance = this.processCodeSummary.treasuryrefRequired;
            const sftpRequired = this.processCodeSummary.sftpRequired;
            const futureDateAllow = this.processCodeSummary.futureDateAllow;
            const wuFile = this.processCodeSummary.wuFile;
            this.processCodeEditForm.controls.wuFile.setValue(wuFile);
            const mandatoryFieldImposed = this.processCodeSummary.mandatoryFieldImposed;
            this.processCodeEditForm.controls.mandatoryFieldImposed.setValue(mandatoryFieldImposed);
            const acft = this.processCodeSummary.acft;
            this.processCodeEditForm.controls.acft.setValue(acft);
            this.processCodeEditForm.controls.extSysCode.setValue(extCode);
            this.processCodeEditForm.controls.extSysName.setValue(extSysName);
            this.processCodeEditForm.controls.processCode.setValue(process);
            this.processCodeEditForm.controls.maxUploadLimit.setValue(minlimit);
            this.processCodeEditForm.controls.treasuryrefRequired.setValue(treasuryrefReq);
            this.processCodeEditForm.controls.autoUpload.setValue(autoUpload);
            this.processCodeEditForm.controls.backDateAllow.setValue(backDateAllow);
            this.processCodeEditForm.controls.fCYRateVariance.setValue(fCYRateVariance);
            this.processCodeEditForm.controls.sftpRequired.setValue(sftpRequired);
            this.processCodeEditForm.controls.futureDateAllow.setValue(futureDateAllow);
            if (autoUpload == true) {
                this.showFilefield = true;
                const fileName = this.processCodeSummary.fileName;
                const filePath = this.processCodeSummary.filePath;
                this.processCodeEditForm.controls.fileName.setValue(fileName);
                this.processCodeEditForm.controls.filePath.setValue(filePath);
            }
            if (backDateAllow == true) {
                this.showbackDateValue = true;
                const bdav = this.processCodeSummary.bdav;
                this.processCodeEditForm.controls.bdav.setValue(bdav);
            }
            if (fCYRateVariance == true) {
                this.showfCYExchangeValue = true;
                const fCYPercentage = this.processCodeSummary.fcypercenatage;
                this.processCodeEditForm.controls.fCYPercentage.setValue(fCYPercentage);
            }
            if (futureDateAllow == true) {
                this.showFutureDate = true;
                const fdav = this.processCodeSummary.fdav;
                this.processCodeEditForm.controls.fdav.setValue(fdav);
            }
            if (sftpRequired == true) {
                this.showsftpValues = true;
                const ipAddress = this.processCodeSummary.ipAddress;
                this.processCodeEditForm.controls.sftpIpaddress.setValue(ipAddress);
                const userName = this.processCodeSummary.userName;
                this.processCodeEditForm.controls.sftpUsername.setValue(userName);
                const path = this.processCodeSummary.path;
                this.processCodeEditForm.controls.sftpPath.setValue(path);
                const port = this.processCodeSummary.port;
                this.processCodeEditForm.controls.sftpPort.setValue(port);
                const password = this.processCodeSummary.password;
                this.processCodeEditForm.controls.sftpPassword.setValue(password);
            }
            this.auditLog();
        });
    }
    enableEditFlag() {
        this.editFlag = true;
    }
    getextSysCodeData() {
        this.apiService.getAllExt().subscribe(data => {
            this.extSysCodeData = data;
        });
    }
    onOptionsChange(event) {
        const value = event.target.value;
        console.log("Value", value);
        if (value) {
            this.processCodeEditForm.controls.extSysCode.setValue(value);
            this.processCodeEditForm.controls.extSysName.setValue(value);
        }
    }
    treasuryRequired(values) {
        const value = values.currentTarget.checked;
        this.processCodeEditForm.controls.treasuryrefRequired.setValue(value);
    }
    backdatingRequired(backData) {
        console.log("backData", backData);
        this.backDateValue = backData.currentTarget.checked;
        console.log("Back data", this.backDateValue);
        if (this.backDateValue == true) {
            this.showbackDateValue = true;
            this.processCodeEditForm.controls.backDateAllow.setValue(this.backDateValue);
        }
        else {
            this.showbackDateValue = false;
            this.processCodeEditForm.controls.backDateAllow.setValue(this.backDateValue);
        }
    }
    autoUploadRequired(values) {
        console.log("autoUploadRequired", values);
        this.autoUploadValue = values.currentTarget.checked;
        console.log("File", this.autoUploadValue);
        if (this.autoUploadValue == true) {
            this.showFilefield = true;
            this.processCodeEditForm.controls.autoUpload.setValue(this.autoUploadValue);
        }
        else {
            this.showFilefield = false;
            this.processCodeEditForm.controls.autoUpload.setValue(this.autoUploadValue);
        }
    }
    futureDateAllowRequired(futuredataValue) {
        this.futuredataValue = futuredataValue.currentTarget.checked;
        console.log("values", this.futuredataValue);
        if (this.futuredataValue == true) {
            this.showFutureDate = true;
            this.processCodeEditForm.controls.futureDateAllow.setValue(this.futuredataValue);
        }
        else {
            this.showFutureDate = false;
            this.processCodeEditForm.controls.futureDateAllow.setValue(this.futuredataValue);
        }
    }
    fCYExchangeRequired(fcyValue) {
        this.fCYExchangeValue = fcyValue.currentTarget.checked;
        if (this.fCYExchangeValue == true) {
            this.showfCYExchangeValue = true;
            this.processCodeEditForm.controls.fCYRateVariance.setValue(this.fCYExchangeValue);
        }
        else {
            this.showfCYExchangeValue = false;
            this.processCodeEditForm.controls.fCYRateVariance.setValue(this.fCYExchangeValue);
        }
    }
    sftpRequired(sftpValue) {
        this.sftpValues = sftpValue.currentTarget.checked;
        if (this.sftpValues == true) {
            this.showsftpValues = true;
            this.processCodeEditForm.controls.sftpRequired.setValue(this.sftpValues);
        }
        else {
            this.showsftpValues = false;
            this.processCodeEditForm.controls.sftpRequired.setValue(this.sftpValues);
        }
    }
    finalSubmitofEditForm(formValue) {
        this.processCodeEditForm.controls.creatorId.setValue(this.currentUser);
        this.apiService
            .createExtSys(this.processCodeEditForm.value)
            .subscribe((resp) => {
            this.processCodeSummary = resp;
            if (this.processCodeSummary) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Record is Updated',
                    icon: 'success'
                });
                this.submitEdit = true;
                this.processCodeEditForm.reset();
                this.auditLog();
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Failed to Update Data!',
                    icon: 'error'
                });
            }
        }, error => {
            if (_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    text: 'Server Error!',
                    icon: 'error'
                });
            }
        });
    }
    onClickOfAuth() {
        if (this.processCodeSummary.creatorId == this.currentUser) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: 'Maker Cannot Authorized the Record!',
                icon: 'error'
            });
        }
        else {
            this.extName = this.processCodeSummary.extSysName;
            this.apiService.authProcessCodeRecord(this.extName, this.currentUser).subscribe(authResp => {
                this.processCodeSummary = authResp;
                console.log("Auth", this.processCodeSummary);
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'You Authorized the Record!',
                    icon: 'success'
                });
                this.auditLog();
            });
        }
    }
    onClickOfClose() {
        this.processCodeSummary.modifiedBy = this.currentUser;
        this.extName = this.processCodeSummary.extSysName;
        this.apiService.closingProcessCodeRecord(this.extName, this.currentUser).subscribe(closeResp => {
            console.log(closeResp);
            this.processCodeSummary = closeResp;
            if (this.processCodeSummary) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Record is Closed',
                    icon: 'success'
                });
                this.auditLog();
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Failed to Close the Recored!',
                    icon: 'error'
                });
            }
        }, error => {
            if (_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    text: 'Server Error!',
                    icon: 'error'
                });
            }
        });
    }
    onClickOfReopen() {
        this.extName = this.processCodeSummary.extSysName;
        this.apiService.reopeningProcessCodeRecord(this.extName, this.currentUser).subscribe(openResp => {
            console.log(openResp);
            this.processCodeSummary = openResp;
            if (this.processCodeSummary) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Record is Reopened',
                    icon: 'success'
                });
                this.auditLog();
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Failed to Reoped the Recored!',
                    icon: 'error'
                });
            }
        }, error => {
            if (_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    text: 'Server Error!',
                    icon: 'error'
                });
            }
        });
    }
    OndeleteofUser() {
        this.extName = this.processCodeSummary.extSysName;
        this.apiService.deleteProcessRecord(this.extName, this.currentUser).subscribe(resp => {
            console.log(resp);
            if (resp === true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Record is Deleted',
                    icon: 'success'
                });
                this.router.navigateByUrl('/external-system/processCodeMappingEdit');
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    text: 'Failed to Delete User Data!',
                    icon: 'error'
                });
            }
        });
    }
}
ProcessCodeMappingEditComponent.ɵfac = function ProcessCodeMappingEditComponent_Factory(t) { return new (t || ProcessCodeMappingEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService)); };
ProcessCodeMappingEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ProcessCodeMappingEditComponent, selectors: [["npr-process-code-mapping-edit"]], decls: 142, vars: 43, consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "dbCardStyle"], [3, "disabled"], [1, "row", "gy-3"], [1, "col-lg-3"], ["for", "extCode", 1, "formLbl"], [1, "colorRed"], ["id", "processCode", "formControlName", "extSysCode", "readonly", "", "type", "text", "placeholder", "External System Code", "value", "", 1, "form-control"], ["for", "processCode", 1, "formLbl"], ["id", "processCode", "formControlName", "extSysName", "readonly", "", "type", "text", "placeholder", "External System Name", "value", "", 1, "form-control"], ["for", "extName", 1, "formLbl"], ["id", "extName", "type", "text", "formControlName", "processCode", "placeholder", "Process Code", "value", "", 1, "form-control", 3, "readonly"], ["for", "uploadLimit", 1, "formLbl"], ["id", "uploadLimit", "formControlName", "maxUploadLimit", "type", "number", "placeholder", "Maximum Upload Limit", "value", "", 1, "form-control", 3, "readonly"], [1, "col-lg-12"], [1, "checkStyle"], ["type", "checkbox", "formControlName", "treasuryrefRequired", "id", "referenceRequired", 3, "change"], ["for", "referenceRequired"], ["class", "formLbl", 4, "ngIf"], ["for", "sftpUsername", "class", "formLbl", 4, "ngIf"], ["id", "sftpUsername", "formControlName", "sftpUsername", "type", "text", "class", "form-control", "placeholder", "Username", "value", "", 3, "readonly", 4, "ngIf"], [1, "row", "gy-4", "align-items-center"], ["type", "checkbox", "formControlName", "autoUpload", "id", "autoUpload", 3, "change"], ["for", "autoUpload"], ["for", "fileName", "class", "formLbl", 4, "ngIf"], ["id", "fileName", "type", "text", "formControlName", "fileName", "class", "form-control", "placeholder", "File Name", "value", "", 3, "readonly", 4, "ngIf"], ["for", "filePath", "class", "formLbl", 4, "ngIf"], ["id", "filePath", "type", "text", "formControlName", "filePath", "class", "form-control", "placeholder", "File Path", "value", "", 3, "readonly", 4, "ngIf"], ["for", "sftpIpaddress", "class", "formLbl", 4, "ngIf"], ["id", "sftpIpaddress", "type", "text", "formControlName", "sftpIpaddress", "class", "form-control", "placeholder", "Password", "value", "", 3, "readonly", 4, "ngIf"], ["type", "checkbox", "formControlName", "backDateAllow", "id", "backDateAllow", 3, "change"], ["for", "backDateAllow"], ["for", "bdav", "class", "formLbl", 4, "ngIf"], ["id", "bdav", "type", "text", "formControlName", "bdav", "class", "form-control", "placeholder", "Back Dating", "value", "", 3, "readonly", 4, "ngIf"], ["for", "sftpPort", "class", "formLbl", 4, "ngIf"], ["id", "sftpPort", "type", "text", "formControlName", "sftpIpaddress", "class", "form-control", "placeholder", "IP Address", "value", "", 3, "readonly", 4, "ngIf"], ["type", "checkbox", "formControlName", "futureDateAllow", "id", "futureDating", 3, "change"], ["for", "futureDating"], ["for", "futureDating", "class", "formLbl", 4, "ngIf"], ["id", "futureDating", "type", "text", "formControlName", "fdav", "class", "form-control", "placeholder", "Future Dating", "value", "", 3, "readonly", 4, "ngIf"], ["id", "sftpPort", "type", "text", "formControlName", "sftpPort", "class", "form-control", "placeholder", "Port", "value", "", 3, "readonly", 4, "ngIf"], ["type", "checkbox", "formControlName", "fCYRateVariance", "id", "fCYRateVariance", 3, "change"], ["for", "fCYRateVariance"], ["for", "fCYPercentage", "class", "formLbl", 4, "ngIf"], ["id", "fCYPercentage", "type", "number", "formControlName", "fCYPercentage", "class", "form-control", "placeholder", "FCY Percentage", "value", "", 3, "readonly", 4, "ngIf"], ["for", "sftpPath", "class", "formLbl", 4, "ngIf"], ["id", "sftpPath", "type", "text", "formControlName", "sftpPath", "class", "form-control", "placeholder", "Path", "value", "", 3, "readonly", 4, "ngIf"], [1, "col-12"], [1, "row"], [1, "checkListCol", "mt-2", "pt-3"], ["type", "checkbox", "formControlName", "acft", "id", "uppercaseCheck"], ["for", "uppercaseCheck"], ["type", "checkbox", "formControlName", "mandatoryFieldImposed", "id", "lowercaseCheck"], ["for", "lowercaseCheck"], ["type", "checkbox", "formControlName", "sftpRequired", "id", "numberCheck", 3, "change"], ["for", "numberCheck"], ["type", "checkbox", "formControlName", "wuFile", "id", "charactersCheck"], ["for", "charactersCheck"], [1, "row", "g-3", "pb-3", "pt-4", "justify-content-end"], [1, "col-auto"], ["class", "btn smBtn minWdSmBtn btnUpdate", 3, "click", 4, "ngIf"], ["class", "btn smBtn minWdSmBtn btnPrimary", 3, "disabled", "click", 4, "ngIf"], ["class", "btn smBtn minWdSmBtn btnAuth", 3, "click", 4, "ngIf"], ["class", "btn smBtn minWdSmBtn btnPrimary", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["class", "dbCardStyle", 4, "ngIf"], [1, "formLbl"], ["for", "sftpUsername", 1, "formLbl"], ["id", "sftpUsername", "formControlName", "sftpUsername", "type", "text", "placeholder", "Username", "value", "", 1, "form-control", 3, "readonly"], ["for", "fileName", 1, "formLbl"], ["id", "fileName", "type", "text", "formControlName", "fileName", "placeholder", "File Name", "value", "", 1, "form-control", 3, "readonly"], ["for", "filePath", 1, "formLbl"], ["id", "filePath", "type", "text", "formControlName", "filePath", "placeholder", "File Path", "value", "", 1, "form-control", 3, "readonly"], ["for", "sftpIpaddress", 1, "formLbl"], ["id", "sftpIpaddress", "type", "text", "formControlName", "sftpIpaddress", "placeholder", "Password", "value", "", 1, "form-control", 3, "readonly"], ["for", "bdav", 1, "formLbl"], ["id", "bdav", "type", "text", "formControlName", "bdav", "placeholder", "Back Dating", "value", "", 1, "form-control", 3, "readonly"], ["for", "sftpPort", 1, "formLbl"], ["id", "sftpPort", "type", "text", "formControlName", "sftpIpaddress", "placeholder", "IP Address", "value", "", 1, "form-control", 3, "readonly"], ["for", "futureDating", 1, "formLbl"], ["id", "futureDating", "type", "text", "formControlName", "fdav", "placeholder", "Future Dating", "value", "", 1, "form-control", 3, "readonly"], ["id", "sftpPort", "type", "text", "formControlName", "sftpPort", "placeholder", "Port", "value", "", 1, "form-control", 3, "readonly"], ["for", "fCYPercentage", 1, "formLbl"], ["id", "fCYPercentage", "type", "number", "formControlName", "fCYPercentage", "placeholder", "FCY Percentage", "value", "", 1, "form-control", 3, "readonly"], ["for", "sftpPath", 1, "formLbl"], ["id", "sftpPath", "type", "text", "formControlName", "sftpPath", "placeholder", "Path", "value", "", 1, "form-control", 3, "readonly"], [1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], ["src", "assets/images/maker-icon.svg", "alt", "..."], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], ["src", "assets/images/checker-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/auth-status-icon.svg", "alt", "..."]], template: function ProcessCodeMappingEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Process Code Mapping");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "fieldset", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "External System Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "External System Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Process Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Maximum Upload Limit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ProcessCodeMappingEditComponent_Template_input_change_36_listener($event) { return ctx.treasuryRequired($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Treasury Reference Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, ProcessCodeMappingEditComponent_label_42_Template, 2, 0, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, ProcessCodeMappingEditComponent_label_45_Template, 2, 0, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, ProcessCodeMappingEditComponent_input_46_Template, 1, 1, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ProcessCodeMappingEditComponent_Template_input_change_51_listener($event) { return ctx.autoUploadRequired($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Auto Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, ProcessCodeMappingEditComponent_label_55_Template, 2, 0, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, ProcessCodeMappingEditComponent_input_56_Template, 1, 1, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, ProcessCodeMappingEditComponent_label_58_Template, 2, 0, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, ProcessCodeMappingEditComponent_input_59_Template, 1, 1, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](61, ProcessCodeMappingEditComponent_label_61_Template, 2, 0, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, ProcessCodeMappingEditComponent_input_62_Template, 1, 1, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ProcessCodeMappingEditComponent_Template_input_change_67_listener($event) { return ctx.backdatingRequired($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Back Dating");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](71, ProcessCodeMappingEditComponent_label_71_Template, 2, 0, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](72, ProcessCodeMappingEditComponent_input_72_Template, 1, 1, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](75, ProcessCodeMappingEditComponent_label_75_Template, 2, 0, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](76, ProcessCodeMappingEditComponent_input_76_Template, 1, 1, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ProcessCodeMappingEditComponent_Template_input_change_81_listener($event) { return ctx.futureDateAllowRequired($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "Future Dating");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](85, ProcessCodeMappingEditComponent_label_85_Template, 2, 0, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](86, ProcessCodeMappingEditComponent_input_86_Template, 1, 1, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](87, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](89, ProcessCodeMappingEditComponent_label_89_Template, 2, 0, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](90, ProcessCodeMappingEditComponent_input_90_Template, 1, 1, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ProcessCodeMappingEditComponent_Template_input_change_95_listener($event) { return ctx.fCYExchangeRequired($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "FCY Exchange Rate Variance");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](99, ProcessCodeMappingEditComponent_label_99_Template, 2, 0, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](100, ProcessCodeMappingEditComponent_input_100_Template, 1, 1, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](101, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](103, ProcessCodeMappingEditComponent_label_103_Template, 2, 0, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](104, ProcessCodeMappingEditComponent_input_104_Template, 1, 1, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](110, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "Cross Financial Transaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](114, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "Mandatory Field Impose");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ProcessCodeMappingEditComponent_Template_input_change_118_listener($event) { return ctx.sftpRequired($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, "SFTP Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](122, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, "WU File Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](127, ProcessCodeMappingEditComponent_button_127_Template, 2, 0, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](129, ProcessCodeMappingEditComponent_button_129_Template, 2, 1, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](131, ProcessCodeMappingEditComponent_button_131_Template, 2, 0, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](133, ProcessCodeMappingEditComponent_button_133_Template, 2, 0, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](135, ProcessCodeMappingEditComponent_button_135_Template, 2, 0, "button", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](137, ProcessCodeMappingEditComponent_button_137_Template, 2, 0, "button", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](140, "Exit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](141, ProcessCodeMappingEditComponent_div_141_Template, 100, 12, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.processCodeEditForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.submitEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx.editFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx.editFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", !ctx.editFlag ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", !ctx.editFlag ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showFilefield);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showFilefield);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showFilefield);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showFilefield);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", !ctx.editFlag ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showbackDateValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showbackDateValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", !ctx.editFlag ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showFutureDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showFutureDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", !ctx.editFlag ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showfCYExchangeValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showfCYExchangeValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", !ctx.editFlag ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", !ctx.editFlag ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", !ctx.editFlag ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", !ctx.editFlag ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.editFlag && ctx.processCodeSummary.recordStatus == "OPEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.editFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.processCodeSummary.authStatus == "UNAUTHORIZED" && !ctx.editFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.processCodeSummary.recordStatus == "OPEN" && !ctx.editFlag && ctx.processCodeSummary.verifiedOnce == "YES");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.processCodeSummary.recordStatus == "CLOSED" && !ctx.editFlag && ctx.processCodeSummary.verifiedOnce == "YES");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.processCodeSummary.verifiedOnce == "NO" && !ctx.editFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](42, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.processCodeSummary);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9jZXNzLWNvZGUtbWFwcGluZy1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8972:
/*!**************************************************************************************************************!*\
  !*** ./src/app/views/file-upload-maintenance/process-code-mapping-new/process-code-mapping-new.component.ts ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcessCodeMappingNewComponent": function() { return /* binding */ ProcessCodeMappingNewComponent; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/api.service */ 94761);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 31443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);









function ProcessCodeMappingNewComponent_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const extCode_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", extCode_r35.extSysCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", extCode_r35.extSysCode, "");
} }
function ProcessCodeMappingNewComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please Select External System Code! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingNewComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProcessCodeMappingNewComponent_div_17_div_1_Template, 2, 0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.processCodeForm.controls["extSysCode"].errors.required);
} }
function ProcessCodeMappingNewComponent_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please Enter Process Code! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingNewComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProcessCodeMappingNewComponent_div_30_div_1_Template, 2, 0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.processCodeForm.controls["processCode"].errors.required);
} }
function ProcessCodeMappingNewComponent_div_37_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please Enter Maximum Upload Limit! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingNewComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProcessCodeMappingNewComponent_div_37_div_1_Template, 2, 0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.processCodeForm.controls["maxUploadLimit"].errors.required);
} }
function ProcessCodeMappingNewComponent_label_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "SFTP Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingNewComponent_label_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingNewComponent_input_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 72);
} }
function ProcessCodeMappingNewComponent_div_53_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please Enter Username! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingNewComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProcessCodeMappingNewComponent_div_53_div_1_Template, 2, 0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.processCodeForm.controls["sftpUsername"].errors.required);
} }
function ProcessCodeMappingNewComponent_label_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "File Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingNewComponent_input_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 74);
} }
function ProcessCodeMappingNewComponent_div_64_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please Enter File Name! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingNewComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProcessCodeMappingNewComponent_div_64_div_1_Template, 2, 0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.processCodeForm.controls["fileName"].errors.required);
} }
function ProcessCodeMappingNewComponent_label_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "File Path");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingNewComponent_input_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 75);
} }
function ProcessCodeMappingNewComponent_div_68_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please Enter File Path! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingNewComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProcessCodeMappingNewComponent_div_68_div_1_Template, 2, 0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r13.processCodeForm.controls["filePath"].errors.required);
} }
function ProcessCodeMappingNewComponent_label_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingNewComponent_input_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 77);
} }
function ProcessCodeMappingNewComponent_div_72_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please Enter Password! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingNewComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProcessCodeMappingNewComponent_div_72_div_1_Template, 2, 0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r16.processCodeForm.controls["sftpPassword"].errors.required);
} }
function ProcessCodeMappingNewComponent_label_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Back Dating");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingNewComponent_input_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 79);
} }
function ProcessCodeMappingNewComponent_div_83_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please Enter Back Dating! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingNewComponent_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProcessCodeMappingNewComponent_div_83_div_1_Template, 2, 0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r19.processCodeForm.controls["bdav"].errors.required);
} }
function ProcessCodeMappingNewComponent_label_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "IP Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingNewComponent_input_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 81);
} }
function ProcessCodeMappingNewComponent_div_88_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please Enter IP Address! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingNewComponent_div_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProcessCodeMappingNewComponent_div_88_div_1_Template, 2, 0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r22.processCodeForm.controls["sftpIpaddress"].errors.required);
} }
function ProcessCodeMappingNewComponent_label_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Future Dating");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingNewComponent_input_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 82);
} }
function ProcessCodeMappingNewComponent_div_99_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please Enter Future Dating! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingNewComponent_div_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProcessCodeMappingNewComponent_div_99_div_1_Template, 2, 0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r25.processCodeForm.controls["fdav"].errors.required);
} }
function ProcessCodeMappingNewComponent_label_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Port");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingNewComponent_input_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 83);
} }
function ProcessCodeMappingNewComponent_div_104_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please Enter Port! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingNewComponent_div_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProcessCodeMappingNewComponent_div_104_div_1_Template, 2, 0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r28.processCodeForm.controls["sftpPort"].errors.required);
} }
function ProcessCodeMappingNewComponent_label_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "FCY Percentage");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingNewComponent_input_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 85);
} }
function ProcessCodeMappingNewComponent_div_115_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please Enter FCY Percentage! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingNewComponent_div_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProcessCodeMappingNewComponent_div_115_div_1_Template, 2, 0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r31.processCodeForm.controls["fCYPercentage"].errors.required);
} }
function ProcessCodeMappingNewComponent_label_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Path");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingNewComponent_input_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 87);
} }
function ProcessCodeMappingNewComponent_div_120_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please Enter Path! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProcessCodeMappingNewComponent_div_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProcessCodeMappingNewComponent_div_120_div_1_Template, 2, 0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r34.processCodeForm.controls["sftpPath"].errors.required);
} }
const _c0 = function () { return ["/external-system/processCodeMapping"]; };
class ProcessCodeMappingNewComponent {
    constructor(apiService, formBuilder, toastService) {
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.toastService = toastService;
        this.showSubmit = false;
        this.showFilefield = false;
        this.showFutureDate = false;
        this.showfCYExchangeValue = false;
        this.showbackDateValue = false;
        this.showsftpValues = false;
    }
    ngOnInit() {
        this.currentUser = localStorage.getItem("userFromLogin");
        this.processCodeForm = this.formBuilder.group({
            extSysCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            extSysName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            processCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            maxUploadLimit: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            acft: [""],
            autoUpload: [""],
            backDateAllow: [""],
            bdav: [""],
            creatorId: [""],
            fCYPercentage: [""],
            fCYRateVariance: [""],
            fdav: [""],
            fileName: [""],
            filePath: [""],
            futureDateAllow: [""],
            mandatoryFieldImposed: [""],
            sftpIpaddress: [""],
            sftpPassword: [""],
            sftpPath: [""],
            sftpPort: [""],
            sftpRequired: [""],
            sftpUsername: [""],
            treasuryrefRequired: [""],
            wuFile: [""],
        });
        this.getextSysCodeData();
    }
    getextSysCodeData() {
        this.apiService.getAllExt().subscribe(data => {
            this.extSysCodeData = data;
        });
    }
    onOptionsChange(event) {
        const value = event.target.value;
        console.log("Value", value);
        if (value) {
            this.processCodeForm.controls.extSysCode.setValue(value);
            this.processCodeForm.controls.extSysName.setValue(this.extSysCodeData.filter(item => item.extSysCode === value)[0].extSysName);
        }
    }
    treasuryRequired(values) {
        const value = values.currentTarget.checked;
        this.processCodeForm.controls.treasuryrefRequired.setValue(value);
    }
    backdatingRequired(backData) {
        console.log("backData", backData);
        this.backDateValue = backData.currentTarget.checked;
        console.log("Back data", this.backDateValue);
        if (this.backDateValue == true) {
            this.showbackDateValue = true;
            this.processCodeForm.controls.backDateAllow.setValue(this.backDateValue);
            this.processCodeForm.controls['bdav'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
        }
        else {
            this.showbackDateValue = false;
            this.processCodeForm.controls.backDateAllow.setValue(this.backDateValue);
            this.processCodeForm.controls['bdav'].clearValidators();
        }
        this.processCodeForm.controls['bdav'].updateValueAndValidity();
    }
    autoUploadRequired(values) {
        this.autoUploadValue = values.currentTarget.checked;
        console.log("File", this.autoUploadValue);
        if (this.autoUploadValue == true) {
            this.showFilefield = true;
            this.processCodeForm.controls.autoUpload.setValue(this.autoUploadValue);
            this.processCodeForm.controls['fileName'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
            this.processCodeForm.controls['filePath'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
        }
        else {
            this.showFilefield = false;
            this.processCodeForm.controls.autoUpload.setValue(this.autoUploadValue);
            this.processCodeForm.controls['fileName'].clearValidators();
            this.processCodeForm.controls['filePath'].clearValidators();
        }
        this.processCodeForm.controls['fileName'].updateValueAndValidity();
        this.processCodeForm.controls['filePath'].updateValueAndValidity();
    }
    futureDateAllowRequired(futuredataValue) {
        this.futuredataValue = futuredataValue.currentTarget.checked;
        if (this.futuredataValue == true) {
            this.showFutureDate = true;
            this.processCodeForm.controls.futureDateAllow.setValue(this.futuredataValue);
            this.processCodeForm.controls['fdav'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
        }
        else {
            this.showFutureDate = false;
            this.processCodeForm.controls.futureDateAllow.setValue(this.futuredataValue);
            this.processCodeForm.controls['fdav'].clearValidators();
        }
        this.processCodeForm.controls['fdav'].updateValueAndValidity();
    }
    fCYExchangeRequired(fcyValue) {
        this.fCYExchangeValue = fcyValue.currentTarget.checked;
        if (this.fCYExchangeValue == true) {
            this.showfCYExchangeValue = true;
            this.processCodeForm.controls.fCYRateVariance.setValue(this.fCYExchangeValue);
            this.processCodeForm.controls['fCYPercentage'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
        }
        else {
            this.showfCYExchangeValue = false;
            this.processCodeForm.controls.fCYRateVariance.setValue(this.fCYExchangeValue);
            this.processCodeForm.controls['fCYPercentage'].clearValidators();
        }
        this.processCodeForm.controls['fCYPercentage'].updateValueAndValidity();
    }
    sftpRequired(sftpValue) {
        this.sftpValues = sftpValue.currentTarget.checked;
        if (this.sftpValues == true) {
            this.showsftpValues = true;
            this.processCodeForm.controls.sftpRequired.setValue(this.sftpValues);
            this.processCodeForm.controls['sftpUsername'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
            this.processCodeForm.controls['sftpPassword'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
            this.processCodeForm.controls['sftpIpaddress'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
            this.processCodeForm.controls['sftpPort'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
            this.processCodeForm.controls['sftpPath'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
        }
        else {
            this.showsftpValues = false;
            this.processCodeForm.controls.sftpRequired.setValue(this.sftpValues);
            this.processCodeForm.controls['sftpUsername'].clearValidators();
            this.processCodeForm.controls['sftpPassword'].clearValidators();
            this.processCodeForm.controls['sftpIpaddress'].clearValidators();
            this.processCodeForm.controls['sftpPort'].clearValidators();
            this.processCodeForm.controls['sftpPath'].clearValidators();
        }
        this.processCodeForm.controls['sftpUsername'].updateValueAndValidity();
        this.processCodeForm.controls['sftpPassword'].updateValueAndValidity();
        this.processCodeForm.controls['sftpIpaddress'].updateValueAndValidity();
        this.processCodeForm.controls['sftpPort'].updateValueAndValidity();
        this.processCodeForm.controls['sftpPath'].updateValueAndValidity();
    }
    finalSubmitofForm(formValue) {
        this.processCodeForm.controls.creatorId.setValue(this.currentUser);
        this.apiService
            .createExtSys(this.processCodeForm.value)
            .subscribe((resp) => {
            if (resp) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Record is Created!',
                    icon: 'success'
                });
                this.submit = true;
                // this.processCodeForm.reset();
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Failed to Save Data!',
                    icon: 'error'
                });
            }
        }, error => {
            if (_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    text: 'Server Error!',
                    icon: 'error'
                });
            }
        });
    }
}
ProcessCodeMappingNewComponent.ɵfac = function ProcessCodeMappingNewComponent_Factory(t) { return new (t || ProcessCodeMappingNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService)); };
ProcessCodeMappingNewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ProcessCodeMappingNewComponent, selectors: [["npr-process-code-mapping-new"]], decls: 148, vars: 40, consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "dbCardStyle"], [3, "disabled"], [1, "row", "gy-3"], [1, "col-lg-3"], ["for", "extCode", 1, "formLbl"], [1, "colorRed"], ["placeholder", "External System Code", "formControlName", "extSysCode", "aria-label", "Default select example", "required", "", 1, "form-select", 3, "change"], ["disabled", "", "selected", "", 1, "form-class"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "errorColor", 4, "ngIf"], ["for", "processCode", 1, "formLbl"], ["id", "processCode", "formControlName", "extSysName", "type", "text", "placeholder", "External System Name", "value", "", "required", "", 1, "form-control"], ["for", "extName", 1, "formLbl"], ["id", "extName", "type", "text", "formControlName", "processCode", "placeholder", "Process Code", "value", "", "required", "", 1, "form-control"], ["for", "uploadLimit", 1, "formLbl"], ["id", "uploadLimit", "formControlName", "maxUploadLimit", "type", "number", "placeholder", "Maximum Upload Limit", "value", "", "required", "", 1, "form-control"], [1, "col-lg-12"], [1, "checkStyle"], ["type", "checkbox", "formControlName", "treasuryrefRequired", "id", "referenceRequired", 3, "change"], ["for", "referenceRequired", 1, "formLbl"], ["class", "formLbl", "class", "formLbl", 4, "ngIf"], ["class", "formLbl", "class", "formLbl", "for", "sftpUsername", 4, "ngIf"], ["id", "sftpUsername", "formControlName", "sftpUsername", "type", "text", "class", "form-control", "placeholder", "Username*", "value", "", "required", "", 4, "ngIf"], [1, "row", "gy-4", "align-items-center"], ["type", "checkbox", "formControlName", "autoUpload", "id", "autoUpload", 3, "click"], ["for", "autoUpload", 1, "formLbl"], ["class", "formLbl", "class", "formLbl", "for", "filePath", 4, "ngIf"], ["id", "fileName", "type", "text", "formControlName", "fileName", "class", "form-control", "placeholder", "File Name*", "value", "", 4, "ngIf"], ["id", "filePath", "type", "text", "formControlName", "filePath", "class", "form-control", "placeholder", "Ex: /opt/tomat *", "value", "", 4, "ngIf"], ["class", "formLbl", "class", "formLbl", "for", "sftpPassword", 4, "ngIf"], ["id", "sftpPassword", "type", "text", "formControlName", "sftpPassword", "class", "form-control", "placeholder", "Password*", "value", "", "required", "", 4, "ngIf"], ["type", "checkbox", "formControlName", "backDateAllow", "id", "backDateAllow", 3, "change"], ["for", "backDateAllow", 1, "formLbl"], ["class", "formLbl", "class", "formLbl", "for", "bdav", 4, "ngIf"], ["id", "bdav", "type", "text", "required", "", "formControlName", "bdav", "class", "form-control", "placeholder", "Back Dating*", "value", "", 4, "ngIf"], ["class", "formLbl", "class", "formLbl", "for", "sftpPort", 4, "ngIf"], ["id", "sftpPort", "type", "text", "formControlName", "sftpIpaddress", "class", "form-control", "placeholder", "IP Address*", "value", "", "required", "", 4, "ngIf"], ["type", "checkbox", "formControlName", "futureDateAllow", "id", "futureDating", 3, "change"], ["for", "futureDating", 1, "formLbl"], ["class", "formLbl", "class", "formLbl", "for", "futureDating", 4, "ngIf"], ["id", "futureDating", "required", "", "type", "text", "formControlName", "fdav", "class", "form-control", "placeholder", "Future Dating*", "value", "", 4, "ngIf"], ["id", "sftpPort", "type", "text", "formControlName", "sftpPort", "class", "form-control", "placeholder", "Port*", "value", "", "required", "", 4, "ngIf"], ["type", "checkbox", "formControlName", "fCYRateVariance", "id", "fCYRateVariance", 3, "change"], ["for", "fCYRateVariance", 1, "formLbl"], ["class", "formLbl", "class", "formLbl", "for", "fCYPercentage", 4, "ngIf"], ["id", "fCYPercentage", "required", "", "type", "number", "formControlName", "fCYPercentage", "class", "form-control", "placeholder", "FCY Percentage*", "value", "", 4, "ngIf"], ["class", "formLbl", "class", "formLbl", "for", "sftpPath", 4, "ngIf"], ["id", "sftpPath", "type", "text", "formControlName", "sftpPath", "class", "form-control", "placeholder", "Path*", "value", "", "required", "", 4, "ngIf"], [1, "col-12"], [1, "row"], [1, "checkListCol", "mt-2", "pt-3"], ["type", "checkbox", "formControlName", "acft", "id", "uppercaseCheck"], ["for", "uppercaseCheck", 1, "formLbl"], ["type", "checkbox", "formControlName", "mandatoryFieldImposed", "id", "lowercaseCheck"], ["for", "lowercaseCheck", 1, "formLbl"], ["type", "checkbox", "formControlName", "sftpRequired", "id", "numberCheck", 3, "change"], ["for", "numberCheck", 1, "formLbl"], ["type", "checkbox", "formControlName", "wuFile", "id", "charactersCheck"], ["for", "charactersCheck", 1, "formLbl"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], ["href", "javascript:void(0)", "routerLinkActive", "router-link-active", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [3, "value"], [1, "errorColor"], [4, "ngIf"], [1, "formLbl"], ["for", "sftpUsername", 1, "formLbl"], ["id", "sftpUsername", "formControlName", "sftpUsername", "type", "text", "placeholder", "Username*", "value", "", "required", "", 1, "form-control"], ["for", "filePath", 1, "formLbl"], ["id", "fileName", "type", "text", "formControlName", "fileName", "placeholder", "File Name*", "value", "", 1, "form-control"], ["id", "filePath", "type", "text", "formControlName", "filePath", "placeholder", "Ex: /opt/tomat *", "value", "", 1, "form-control"], ["for", "sftpPassword", 1, "formLbl"], ["id", "sftpPassword", "type", "text", "formControlName", "sftpPassword", "placeholder", "Password*", "value", "", "required", "", 1, "form-control"], ["for", "bdav", 1, "formLbl"], ["id", "bdav", "type", "text", "required", "", "formControlName", "bdav", "placeholder", "Back Dating*", "value", "", 1, "form-control"], ["for", "sftpPort", 1, "formLbl"], ["id", "sftpPort", "type", "text", "formControlName", "sftpIpaddress", "placeholder", "IP Address*", "value", "", "required", "", 1, "form-control"], ["id", "futureDating", "required", "", "type", "text", "formControlName", "fdav", "placeholder", "Future Dating*", "value", "", 1, "form-control"], ["id", "sftpPort", "type", "text", "formControlName", "sftpPort", "placeholder", "Port*", "value", "", "required", "", 1, "form-control"], ["for", "fCYPercentage", 1, "formLbl"], ["id", "fCYPercentage", "required", "", "type", "number", "formControlName", "fCYPercentage", "placeholder", "FCY Percentage*", "value", "", 1, "form-control"], ["for", "sftpPath", 1, "formLbl"], ["id", "sftpPath", "type", "text", "formControlName", "sftpPath", "placeholder", "Path*", "value", "", "required", "", 1, "form-control"]], template: function ProcessCodeMappingNewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Process Code Mapping");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "fieldset", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "External System Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ProcessCodeMappingNewComponent_Template_select_change_13_listener($event) { return ctx.onOptionsChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Select External System Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ProcessCodeMappingNewComponent_option_16_Template, 2, 2, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ProcessCodeMappingNewComponent_div_17_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "External System Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Process Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, ProcessCodeMappingNewComponent_div_30_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Maximum Upload Limit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, ProcessCodeMappingNewComponent_div_37_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ProcessCodeMappingNewComponent_Template_input_change_42_listener($event) { return ctx.treasuryRequired($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Treasury Reference Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, ProcessCodeMappingNewComponent_label_48_Template, 2, 0, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, ProcessCodeMappingNewComponent_label_51_Template, 4, 0, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, ProcessCodeMappingNewComponent_input_52_Template, 1, 0, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, ProcessCodeMappingNewComponent_div_53_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcessCodeMappingNewComponent_Template_input_click_58_listener($event) { return ctx.autoUploadRequired($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Auto Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, ProcessCodeMappingNewComponent_label_62_Template, 4, 0, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, ProcessCodeMappingNewComponent_input_63_Template, 1, 0, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, ProcessCodeMappingNewComponent_div_64_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](66, ProcessCodeMappingNewComponent_label_66_Template, 4, 0, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](67, ProcessCodeMappingNewComponent_input_67_Template, 1, 0, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](68, ProcessCodeMappingNewComponent_div_68_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](70, ProcessCodeMappingNewComponent_label_70_Template, 4, 0, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](71, ProcessCodeMappingNewComponent_input_71_Template, 1, 0, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](72, ProcessCodeMappingNewComponent_div_72_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ProcessCodeMappingNewComponent_Template_input_change_77_listener($event) { return ctx.backdatingRequired($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "Back Dating");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](81, ProcessCodeMappingNewComponent_label_81_Template, 4, 0, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](82, ProcessCodeMappingNewComponent_input_82_Template, 1, 0, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](83, ProcessCodeMappingNewComponent_div_83_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](84, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](86, ProcessCodeMappingNewComponent_label_86_Template, 4, 0, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](87, ProcessCodeMappingNewComponent_input_87_Template, 1, 0, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](88, ProcessCodeMappingNewComponent_div_88_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ProcessCodeMappingNewComponent_Template_input_change_93_listener($event) { return ctx.futureDateAllowRequired($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "Future Dating");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](97, ProcessCodeMappingNewComponent_label_97_Template, 4, 0, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](98, ProcessCodeMappingNewComponent_input_98_Template, 1, 0, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](99, ProcessCodeMappingNewComponent_div_99_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](100, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](102, ProcessCodeMappingNewComponent_label_102_Template, 4, 0, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](103, ProcessCodeMappingNewComponent_input_103_Template, 1, 0, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](104, ProcessCodeMappingNewComponent_div_104_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ProcessCodeMappingNewComponent_Template_input_change_109_listener($event) { return ctx.fCYExchangeRequired($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111, "FCY Exchange Rate Variance");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](113, ProcessCodeMappingNewComponent_label_113_Template, 4, 0, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](114, ProcessCodeMappingNewComponent_input_114_Template, 1, 0, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](115, ProcessCodeMappingNewComponent_div_115_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](116, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](118, ProcessCodeMappingNewComponent_label_118_Template, 4, 0, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](119, ProcessCodeMappingNewComponent_input_119_Template, 1, 0, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](120, ProcessCodeMappingNewComponent_div_120_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](126, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128, "Cross Financial Transaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](130, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, "Mandatory Field Impose");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ProcessCodeMappingNewComponent_Template_input_change_134_listener($event) { return ctx.sftpRequired($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, "SFTP Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](138, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](140, "WU File Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcessCodeMappingNewComponent_Template_button_click_143_listener() { return ctx.finalSubmitofForm(ctx.processCodeForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](147, "Exit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.processCodeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.submit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.extSysCodeData);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.processCodeForm.controls["extSysCode"].invalid && (ctx.processCodeForm.controls["extSysCode"].dirty || ctx.processCodeForm.controls["extSysCode"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.processCodeForm.controls["processCode"].invalid && (ctx.processCodeForm.controls["processCode"].dirty || ctx.processCodeForm.controls["processCode"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.processCodeForm.controls["maxUploadLimit"].invalid && (ctx.processCodeForm.controls["maxUploadLimit"].dirty || ctx.processCodeForm.controls["maxUploadLimit"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues && ctx.processCodeForm.controls["sftpUsername"].invalid && (ctx.processCodeForm.controls["sftpUsername"].dirty || ctx.processCodeForm.controls["sftpUsername"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showFilefield);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showFilefield);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showFilefield && ctx.processCodeForm.controls["fileName"].invalid && (ctx.processCodeForm.controls["fileName"].dirty || ctx.processCodeForm.controls["fileName"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showFilefield);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showFilefield);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showFilefield && ctx.processCodeForm.controls["filePath"].invalid && (ctx.processCodeForm.controls["filePath"].dirty || ctx.processCodeForm.controls["filePath"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues && ctx.processCodeForm.controls["sftpPassword"].invalid && (ctx.processCodeForm.controls["sftpPassword"].dirty || ctx.processCodeForm.controls["sftpPassword"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showbackDateValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showbackDateValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showbackDateValue && ctx.processCodeForm.controls["bdav"].invalid && (ctx.processCodeForm.controls["bdav"].dirty || ctx.processCodeForm.controls["bdav"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues && ctx.processCodeForm.controls["sftpIpaddress"].invalid && (ctx.processCodeForm.controls["sftpIpaddress"].dirty || ctx.processCodeForm.controls["sftpIpaddress"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showFutureDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showFutureDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showFutureDate && ctx.processCodeForm.controls["fdav"].invalid && (ctx.processCodeForm.controls["fdav"].dirty || ctx.processCodeForm.controls["fdav"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues && ctx.processCodeForm.controls["sftpPort"].invalid && (ctx.processCodeForm.controls["sftpPort"].dirty || ctx.processCodeForm.controls["sftpPort"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showfCYExchangeValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showfCYExchangeValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showfCYExchangeValue && ctx.processCodeForm.controls["fCYPercentage"].invalid && (ctx.processCodeForm.controls["fCYPercentage"].dirty || ctx.processCodeForm.controls["fCYPercentage"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues && ctx.processCodeForm.controls["sftpPath"].invalid && (ctx.processCodeForm.controls["sftpPath"].dirty || ctx.processCodeForm.controls["sftpPath"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.processCodeForm.valid || ctx.submit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](39, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkActive], styles: [".form-class[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #797979;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-bottom: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-left: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-right: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.errorColor[_ngcontent-%COMP%] {\n  color: #e6224a;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2Nlc3MtY29kZS1tYXBwaW5nLW5ldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBRUEsd0VBQUE7QUFBSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoicHJvY2Vzcy1jb2RlLW1hcHBpbmctbmV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY2xhc3Mge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzc5Nzk3OTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dFxyXG59XHJcbi5lcnJvckNvbG9ye1xyXG4gICAgY29sb3I6ICNlNjIyNGE7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 87873:
/*!******************************************************************************************************!*\
  !*** ./src/app/views/file-upload-maintenance/process-code-mapping/process-code-mapping.component.ts ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcessCodeMappingComponent": function() { return /* binding */ ProcessCodeMappingComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/api.service */ 94761);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 31443);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ 50481);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);








function ProcessCodeMappingComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcessCodeMappingComponent_tr_26_Template_span_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const item_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.sendingDataforEdit(item_r1); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.extSysName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.extSysCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.processCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.authStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](12, 5, item_r1.creatorDtStamp, "medium"));
} }
const _c0 = function () { return ["/external-system/processCodeMappingNew"]; };
const _c1 = function () { return ["active"]; };
const _c2 = function () { return ["/dashboard"]; };
class ProcessCodeMappingComponent {
    constructor(apiService, router, formBuilder, toastService) {
        this.apiService = apiService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.toastService = toastService;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            columnDefs: [{ type: 'date', 'targets': [4] }],
            order: [[4, 'desc']],
            processing: true,
            lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]]
        };
        this.getprocessCodeMappingSummry();
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
    getprocessCodeMappingSummry() {
        this.apiService.getAllExtSys().subscribe(data => {
            this.processCodeMappingSummry = data;
            this.dtTrigger.next();
            if (this.processCodeMappingSummry != null) {
                // this.toastService.successMessage('Data Fetched Successfully!.', '');
                return;
            }
            else {
                // this.toastService.errorMessage('Failed to Fetch Data!.', '');
                return;
            }
        });
    }
    sendingDataforEdit(element) {
        if (element) {
            this.apiService.setProcessCodeData({
                id: element.id,
                extSysCode: element.extSysCode,
                extSysName: element.extSysName,
                commChannel: element.commChannel,
                creatorDtStamp: element.creatorDtStamp,
                creatorId: element.creatorId,
                destination: element.destination,
                destinationTag: element.destinationTag,
                dtdFile: element.dtdFile,
                errDirectoryName: element.errDirectoryName,
                errQueueName: element.errQueueName,
                errSchemaName: element.errSchemaName,
                errXsltName: element.errXsltName,
                extSysTag: element.extSysTag,
                formatType: element.formatType,
                isDestNode: element.isDestNode,
                isExtSysNode: element.isExtSysNode,
                isModuleNode: element.isModuleNode,
                isProcessNode: element.isProcessNode,
                isServiceNode: element.isServiceNode,
                latestAmendNo: element.latestAmendNo,
                messageType: element.messageType,
                moduleCode: element.moduleCode,
                moduleTag: element.moduleTag,
                msgDuplication: element.msgDuplication,
                processCode: element.processCode,
                processTag: element.processTag,
                recordStatus: element.recordStatus,
                reqDirectoryName: element.reqDirectoryName,
                reqQueueName: element.reqQueueName,
                reqSchemaName: element.reqSchemaName,
                reqXsltName: element.reqXsltName,
                requestTag: element.requestTag,
                respDirectoryName: element.respDirectoryName,
                respQueueName: element.respQueueName,
                respSchemaName: element.respSchemaName,
                respXsltName: element.respXsltName,
                responseTag: element.responseTag,
                serviceCode: element.serviceCode,
                serviceTag: element.serviceTag,
                updatedAt: element.updatedAt,
                verifiedEver: element.verifiedEver,
                verifierDtStamp: element.verifierDtStamp,
                verifierId: element.verifierId,
                xsdFile: element.xsdFile,
                authStatus: element.authStatus,
                updatedBy: element.updatedBy,
                fristTimeAuth: element.fristTimeAuth,
                versionNo: element.versionNo,
                maxUploadLimit: element.maxUploadLimit,
                fileName: element.fileName,
                bdav: element.bdav,
                backDateAllow: element.backDateAllow,
                futureDateAllow: element.futureDateAllow,
                fdav: element.fdav,
                acft: element.acft,
                autoUpload: element.autoUpload,
                filePath: element.filePath,
                fcyvariance: element.fCYRateVariance,
                fcypercenatage: element.fCYPercentage,
                userName: element.sftpUsername,
                password: element.sftpPassword,
                port: element.sftpPort,
                ipAddress: element.sftpIpaddress,
                sftpRequired: element.sftpRequired,
                path: element.sftpPath,
                mandatoryFieldImposed: element.mandatoryFieldImposed,
                treasuryrefRequired: element.treasuryrefRequired,
                wuFile: element.wuFile,
                verifiedOnce: element.verifiedOnce
            });
            this.router.navigate(['/external-system/processCodeMappingEdit']);
        }
    }
}
ProcessCodeMappingComponent.ɵfac = function ProcessCodeMappingComponent_Factory(t) { return new (t || ProcessCodeMappingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService)); };
ProcessCodeMappingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ProcessCodeMappingComponent, selectors: [["npr-process-code-mapping"]], decls: 27, vars: 9, consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "routerLink", "routerLinkActive"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["datatable", "", "id", "dbTable1", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [1, "primaryColor", 3, "click"]], template: function ProcessCodeMappingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Process Code Mapping");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "External System Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "External System Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Process Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Auth Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, ProcessCodeMappingComponent_tr_26_Template, 13, 8, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c0))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.processCodeMappingSummry);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9jZXNzLWNvZGUtbWFwcGluZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 42034:
/*!**************************************************************************************************!*\
  !*** ./src/app/views/file-upload-maintenance/treasury-reference/treasury-reference.component.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreasuryReferenceComponent": function() { return /* binding */ TreasuryReferenceComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/api.service */ 94761);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 31443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 50481);









function TreasuryReferenceComponent_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const batch_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", batch_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", batch_r2, "");
} }
function TreasuryReferenceComponent_div_15_tr_23_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r4.id.batchNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r4.id.branchCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r4.id.currNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 6, data_r4.id.initiationDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r4.account);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r4.amount);
} }
function TreasuryReferenceComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Batch No");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Branch Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Curr No");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Initiation Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Source Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Treasury Reference");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, TreasuryReferenceComponent_div_15_tr_23_Template, 15, 8, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dtOptions", ctx_r1.dtOptions)("dtTrigger", ctx_r1.dtTrigger);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.treasuryReferenceData);
} }
class TreasuryReferenceComponent {
    constructor(apiService, formBuilder, toastService) {
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.toastService = toastService;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this.showTable = false;
    }
    ngOnInit() {
        this.treasuryReferenceForm = this.formBuilder.group({
            batch: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
        this.fetchingBatchNumber();
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true,
            lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]]
        };
    }
    fetchingBatchNumber() {
        this.apiService.fetchingBatchNo().subscribe(batchNumberResp => {
            this.selectedBatchNumber = batchNumberResp;
            console.log("this.selectedBatchNumber", this.selectedBatchNumber);
        });
    }
    onOptionsChange(event) {
        const value = event.target.value;
        if (value) {
            this.treasuryReferenceForm.controls.batch.setValue(value);
            this.apiService.sendingBatchNumber(value).subscribe(batchResp => {
                if (batchResp == '') {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                        title: "No Data for Batch:" + value,
                        icon: 'warning'
                    });
                    this.showTable = false;
                }
                else {
                    this.treasuryReferenceData = batchResp;
                    this.showTable = true;
                }
            });
        }
    }
}
TreasuryReferenceComponent.ɵfac = function TreasuryReferenceComponent_Factory(t) { return new (t || TreasuryReferenceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService)); };
TreasuryReferenceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TreasuryReferenceComponent, selectors: [["npr-treasury-reference"]], decls: 16, vars: 3, consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "dbCardStyle"], [1, "row", "gy-4"], [1, "col-lg-4"], ["for", "selectBatch", 1, "formLbl"], ["formControlName", "batch", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["disabled", "", "selected", "", 1, "form-class"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "dbCardStyle dbCardStyle2 p-0", 4, "ngIf"], [3, "value"], [1, "dbCardStyle", "dbCardStyle2", "p-0"], [1, "titleCol"], ["datatable", "", "id", "dbTable1", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"]], template: function TreasuryReferenceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Treasury Reference Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Select Batch No");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function TreasuryReferenceComponent_Template_select_change_10_listener($event) { return ctx.onOptionsChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Select Batch No");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, TreasuryReferenceComponent_option_13_Template, 2, 2, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, TreasuryReferenceComponent_div_15_Template, 24, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.treasuryReferenceForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.selectedBatchNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showTable);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: [".form-class[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #797979;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-bottom: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-left: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-right: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZWFzdXJ5LXJlZmVyZW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBRUEsd0VBQUE7QUFBSiIsImZpbGUiOiJ0cmVhc3VyeS1yZWZlcmVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jbGFzcyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogLjM3NXJlbSAuNzVyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiAjNzk3OTc5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWJlYjtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ViZWJlYjtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0XHJcbn0iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_views_file-upload-maintenance_file-upload-maintenance_module_ts-es2015.js.map