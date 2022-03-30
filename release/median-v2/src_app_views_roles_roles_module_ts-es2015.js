"use strict";
(self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_roles_roles_module_ts"],{

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

/***/ 56900:
/*!***********************************************!*\
  !*** ./src/app/shared/models/fmosroledata.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fmosrolesdata": function() { return /* binding */ fmosrolesdata; }
/* harmony export */ });
class fmosrolesdata {
}


/***/ }),

/***/ 82899:
/*!***************************************!*\
  !*** ./src/app/shared/models/role.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Roles": function() { return /* binding */ Roles; }
/* harmony export */ });
class Roles {
}


/***/ }),

/***/ 54672:
/*!********************************************************************!*\
  !*** ./src/app/views/roles/role-details/role-details.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleDetailsComponent": function() { return /* binding */ RoleDetailsComponent; },
/* harmony export */   "UsernameValidator": function() { return /* binding */ UsernameValidator; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_shared_models_fmosroledata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/fmosroledata */ 56900);
/* harmony import */ var src_app_shared_models_role__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/role */ 82899);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/role.service */ 77382);
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/api.service */ 94761);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-izitoast */ 27218);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);











function RoleDetailsComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please Enter RoleName ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function RoleDetailsComponent_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " RoleName cannot contain space ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function RoleDetailsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RoleDetailsComponent_div_14_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, RoleDetailsComponent_div_14_div_2_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.myform.controls["roleName"].errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.myform.controls["roleName"].errors.cannotContainSpace);
} }
function RoleDetailsComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please Enter RoleDesc ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function RoleDetailsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, RoleDetailsComponent_div_21_div_1_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.myform.controls["roleDesc"].errors.required);
} }
function RoleDetailsComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_div_24_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const btn_r11 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r13.getPermission(btn_r11.tabId, btn_r11.tabName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const btn_r11 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", btn_r11.tabName == ctx_r3.btnNameSelected ? "active" : "notActive")("disabled", ctx_r3.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](btn_r11.tabName);
} }
function RoleDetailsComponent_tr_53_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_tr_53_Template_input_click_6_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const roles_r15 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r17.clickRoleAction(roles_r15, "SELECTALL", $event.target.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_tr_53_Template_input_click_9_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const roles_r15 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r19.clickRoleAction(roles_r15, "NEW", $event.target.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_tr_53_Template_input_click_12_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const roles_r15 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r20.clickRoleAction(roles_r15, "EDIT", $event.target.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_tr_53_Template_input_click_15_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const roles_r15 = restoredCtx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r21.clickRoleAction(roles_r15, "DELETE", $event.target.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_tr_53_Template_input_click_18_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const roles_r15 = restoredCtx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r22.clickRoleAction(roles_r15, "CLOSE", $event.target.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_tr_53_Template_input_click_21_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const roles_r15 = restoredCtx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r23.clickRoleAction(roles_r15, "REOPEN", $event.target.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_tr_53_Template_input_click_24_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const roles_r15 = restoredCtx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r24.clickRoleAction(roles_r15, "UNLOCK", $event.target.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_tr_53_Template_input_click_27_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const roles_r15 = restoredCtx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r25.clickRoleAction(roles_r15, "PRINT", $event.target.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_tr_53_Template_input_click_30_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const roles_r15 = restoredCtx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r26.clickRoleAction(roles_r15, "AUTH", $event.target.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_tr_53_Template_input_click_33_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); const roles_r15 = restoredCtx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r27.clickRoleAction(roles_r15, "VIEW", $event.target.checked); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const roles_r15 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](roles_r15.Screens);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r4.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r4.editFlag)("checked", roles_r15.NEW == "0" ? false : true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r4.editFlag)("checked", roles_r15.EDIT == "0" ? false : true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r4.editFlag)("checked", roles_r15.DELETE == "0" ? false : true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r4.editFlag)("checked", roles_r15.CLOSE == "0" ? false : true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r4.editFlag)("checked", roles_r15.REOPEN == "0" ? false : true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r4.editFlag)("checked", roles_r15.UNLOCK == "0" ? false : true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r4.editFlag)("checked", roles_r15.PRINT == "0" ? false : true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r4.editFlag)("checked", roles_r15.AUTH == "0" ? false : true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r4.editFlag)("checked", roles_r15.VIEW == "0" ? false : true);
} }
const _c0 = function () { return ["/roles/list"]; };
function RoleDetailsComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_div_54_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r28.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("disabled", !ctx_r5.myform.valid || ctx_r5.submitBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](2, _c0));
} }
function RoleDetailsComponent_div_55_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_div_55_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r36.editValues(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function RoleDetailsComponent_div_55_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_div_55_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r38.modifyRoles(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r31.submitBtn);
} }
function RoleDetailsComponent_div_55_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_div_55_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r40.verifyRole(ctx_r40.modifyRoleObject.roleName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Auth");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r32.authBtn);
} }
function RoleDetailsComponent_div_55_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_div_55_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r42.reopenRecord(ctx_r42.modifyRoleObject.roleName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Reopen");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx_r33.openHide);
} }
function RoleDetailsComponent_div_55_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_div_55_div_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r44.closeRecord(ctx_r44.modifyRoleObject.roleName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx_r34.closeHide);
} }
function RoleDetailsComponent_div_55_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleDetailsComponent_div_55_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r46.deleteRole(ctx_r46.modifyRoleObject.roleName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function RoleDetailsComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, RoleDetailsComponent_div_55_div_2_Template, 3, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, RoleDetailsComponent_div_55_div_3_Template, 3, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, RoleDetailsComponent_div_55_div_4_Template, 3, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, RoleDetailsComponent_div_55_div_5_Template, 3, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, RoleDetailsComponent_div_55_div_6_Template, 3, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, RoleDetailsComponent_div_55_div_7_Template, 3, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.editFlag && ctx_r6.roleCodes.edit && ctx_r6.modifyRoleObject.recordStatus == "OPEN");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r6.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.modifyRoleObject.authStatus == "UNAUTHORIZED" && ctx_r6.roleCodes.auth);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.modifyRoleObject.recordStatus == "CLOSE" && ctx_r6.modifyRoleObject.firstTimeAuth == "YES" && ctx_r6.roleCodes.reopen);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.modifyRoleObject.recordStatus == "OPEN" && ctx_r6.modifyRoleObject.firstTimeAuth == "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.modifyRoleObject.firstTimeAuth == "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](7, _c0));
} }
function RoleDetailsComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 46);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 46);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 46);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 46);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](56, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div", 46);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](69, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "First Time Auth");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](81, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85, "Auth Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](93, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](97, "Modification Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](98, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.modifyRoleObject.maker);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](26, 7, ctx_r7.modifyRoleObject.makerDtStamp, "MM/dd/yyyy, h:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.modifyRoleObject.recordStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.modifyRoleObject.checkerId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](63, 10, ctx_r7.modifyRoleObject.checkerDtStamp, "MM/dd/yyyy, h:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.modifyRoleObject.firstTimeAuth);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r7.modifyRoleObject.authStatus);
} }
class RoleDetailsComponent {
    constructor(roleService, api, route, router, cdr, iziToast) {
        this.roleService = roleService;
        this.api = api;
        this.route = route;
        this.router = router;
        this.cdr = cdr;
        this.iziToast = iziToast;
        this.modifyRoleObject = new src_app_shared_models_role__WEBPACK_IMPORTED_MODULE_1__.Roles();
        this.previouschecklist = [];
        this.checkedlist = [];
        this.screenName = [];
        this.modifyScreen = false;
        this.editFlag = false;
        this.newRolesData = new src_app_shared_models_fmosroledata__WEBPACK_IMPORTED_MODULE_0__.fmosrolesdata();
        this.openBtn = true;
        this.closeBtn = true;
        this.authBtn = false;
        this.openHide = true;
        this.closeHide = true;
        // num=0;
        this.myform = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            roleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, UsernameValidator.cannotContainSpace]),
            roleDesc: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,
            ]),
        });
    }
    ngOnInit() {
        this.username = localStorage.getItem('userFromLogin').replace(/['"]+/g, '');
        this.navSubscription = this.roleService.getNavParam.subscribe(data => this.editRoleScreen = data);
        console.log(this.username);
        //this.getPermission(1,'System Maintenance');
        this.editFlag = false;
        this.roleService.screenLabelList.subscribe(message => this.roleCodes = message);
        console.log(this.editRoleScreen);
        console.log(this.route.snapshot.queryParams);
        this.modifyRoleObject.id = this.editRoleScreen.queryParams.id;
        this.modifyRoleObject.roleName = this.editRoleScreen.queryParams.roleName;
        this.modifyRoleObject.roleDesc = this.editRoleScreen.queryParams.roleDesc;
        this.modifyRoleObject.maker = this.editRoleScreen.queryParams.maker;
        this.modifyRoleObject.makerDtStamp = this.editRoleScreen.queryParams.makerDtStamp;
        this.modifyRoleObject.checkerId = this.editRoleScreen.queryParams.checkerId;
        this.modifyRoleObject.checkerDtStamp = this.editRoleScreen.queryParams.checkerDtStamp;
        this.modifyRoleObject.recordStatus = this.editRoleScreen.queryParams.recordStatus;
        if (this.modifyRoleObject.recordStatus == 'O') {
            this.modifyRoleObject.recordStatus = "OPEN";
        }
        else if (this.modifyRoleObject.recordStatus == 'C') {
            this.modifyRoleObject.recordStatus = "CLOSE";
        }
        else {
            this.modifyRoleObject.recordStatus = this.editRoleScreen.queryParams.recordStatus;
        }
        this.modifyRoleObject.authStatus = this.editRoleScreen.queryParams.authStatus;
        if (this.modifyRoleObject.authStatus == 'A') {
            this.modifyRoleObject.authStatus = "AUTHORIZED";
        }
        else if (this.modifyRoleObject.authStatus == 'U') {
            this.modifyRoleObject.authStatus = "UNAUTHORIZED";
        }
        else {
            this.modifyRoleObject.authStatus = this.editRoleScreen.queryParams.authStatus;
        }
        this.modifyRoleObject.firstTimeAuth = this.editRoleScreen.queryParams.firstTimeAuth;
        if (this.modifyRoleObject.firstTimeAuth == 'Y') {
            this.modifyRoleObject.firstTimeAuth = "YES";
        }
        else if (this.modifyRoleObject.firstTimeAuth == 'N') {
            this.modifyRoleObject.firstTimeAuth = "NO";
        }
        else {
            this.modifyRoleObject.firstTimeAuth = this.editRoleScreen.queryParams.firstTimeAuth;
        }
        // console.log(' data for update role recived');
        console.log(this.modifyRoleObject);
        if (this.modifyRoleObject.roleName) {
            console.log("Query params");
            this.modifyScreen = true;
            this.editFlag = true;
        }
        this.fetchdynamicroles();
        this.roleService.fetchScreenPermissions('Roles');
    }
    preparingPermissiondto(screenlist, permissionlength) {
        let permissionlist = [];
        for (let i = 0; i < screenlist.length; i++) {
            let permissionidobj = { roleName: '', screenId: screenlist[i].screensId.screenId };
            let permissionarray = [];
            for (let j = 0; j < permissionlength; j++) {
                permissionarray.push(0);
            }
            let permissionstring = permissionarray.join("");
            permissionlist.push({ permissionId: permissionidobj, permissions: permissionstring });
        } //for loop endng
        return permissionlist;
    }
    editValues() {
        this.editFlag = false;
        this.openBtn = false;
        // this.authBtn=false;
        this.closeBtn = false;
    }
    getPermission(num, event) {
        console.log(num, event);
        this.btnNameSelected = event;
        // this.roleService.fetchnewscreenlabels().subscribe(data => {
        //   console.log(data);
        //   let permissionsarray = this.preparingPermissiondto(data.screenDto, data.labelDto.length);
        //   // let permissionsarray = data.permissionDto ; // Added - Gayathri
        //   this.fmosRolesData.roleDto = data.roleDto;
        //   this.fmosRolesData.permissionDto = permissionsarray;
        //   this.fmosRolesData.tabDto = data.tabDto;
        //   this.fmosRolesData.labelDto = data.labelDto;
        //   this.fmosRolesData.screenDto = data.screenDto;
        //   let arrayC = [];
        //   let arrayB = data.screenDto;
        //   let labelsarray = data.labelDto;
        //   this.screenName=this.fmosRolesData.tabDto;
        //   let scrnm :any = [];
        //   for (let n=0; n < this.screenName.length; n++) {
        //     scrnm[this.screenName[n].tabId-1] = this.screenName[n] ;
        //   }
        //   console.log("scrnm: ", scrnm);
        //   this.screenName = [] ;
        //   console.log("scrnm 1: ", this.screenName);
        //   for (let n=0; n < scrnm.length; n++) {
        //     if (scrnm[n] != undefined) {
        //       this.screenName[this.screenName.length] = scrnm[n] ;
        //     }
        //   }
        //   console.log("scrName 2: ", this.screenName);
        //    console.log(this.btnNameSelected)
        //    if(this.btnNameSelected==null || this.btnNameSelected==undefined){
        //      this.btnNameSelected=this.screenName[0].tabName;
        //    }
        //   for (let tabindex = 0; tabindex < data.tabDto.length; tabindex++) {
        //     let screen = [];
        //     let screenslist = [];
        //     let element = data.tabDto[tabindex];
        //     console.log(element);
        //     screenslist = this.getscreenlist(arrayB, element, permissionsarray, screen, screenslist);
        //     console.log(screenslist);
        //     //fetching screen list 
        //     //end of fetching screen list
        //     //fetching labels for screen
        //     let screenvisibility = element.visibility.toString();
        //     let label = [];
        //     let labellist = [];
        //     for (let i = 0; i < screenvisibility.length; i++) {
        //       if (screenvisibility.charAt(i) == 1) {
        //         label.push(labelsarray[i].labelName);
        //         labellist.push(labelsarray[i]);
        //       }
        //     }
        //     //end of fetching labels for screen
        //     arrayC.push({tabId:element.tabId, tabname: element.tabName, screens: screen, screenlist: screenslist, labels: label, labelslist: labellist });
        //   }
        //   console.log(arrayC);
        //   this.rolessorteddata = arrayC;
        //   this.newfmostabsdata.tabslist = arrayC;
        //   console.log( this.newfmostabsdata.tabslist)
        //   console.log(num);
        //   if(num!=null || num!= undefined){
        //     this.rolestype(num);
        //     console.log("inside If");
        //   }
        //   else{
        //     this.rolestype(1);
        //     console.log("Else");
        //   }
        //   //end of fetching screen for tabs
        // });
        console.log(num);
        if (num != null || num != undefined) {
            this.rolestype(num);
            console.log("inside If");
        }
        else {
            this.rolestype(1);
            console.log("Else");
        }
        this.roleService.fetchScreenPermissions('Roles');
    }
    // verify/authorize a user
    verifyRole(roleName) {
        console.log(roleName, this.username);
        if (this.modifyRoleObject.maker === this.username) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({ text: 'Maker Cannot Authorize Record!',
                icon: 'error' });
            return;
        }
        else {
            // this.roleService.verifyRole(roleName, this.username).subscribe(data => {
            //   this.updatedRoleObject = data;
            //   this.cdr.markForCheck();
            //   this.modifyRoleObject = this.updatedRoleObject;
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                text: 'You are trying to Authorize record. ' + ' Do you want to proceed?',
                showCancelButton: true,
                confirmButtonColor: '#E6224A',
                cancelButtonColor: '#011945',
                // confirmButtonText: 'PROCEED.'
                cancelButtonText: 'NO',
                confirmButtonText: 'YES',
                icon: 'info'
            }).then((result => {
                if (result.isConfirmed === true) {
                    this.roleService.verifyRole(roleName, this.username).subscribe(data => {
                        this.updatedRoleObject = data;
                        this.cdr.markForCheck();
                        this.modifyRoleObject = this.updatedRoleObject;
                        if (this.modifyRoleObject) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                                text: "Role is Authorized",
                                icon: 'success'
                            });
                        }
                    });
                }
            }));
            // Swal.fire("Role is Authorized ");
            // });
        }
    }
    // close a user
    closeRecord(roleName) {
        // this.roleService.closelockRecord(roleName, this.username).subscribe(data => {
        //   this.updatedRoleObject = data;
        //   this.cdr.markForCheck();
        //   this.modifyRoleObject = this.updatedRoleObject;
        //   console.log('role is closed',this.updatedRoleObject.recordStatus);
        //   this.openBtn=false;
        //   this.closeBtn=false;
        // if(this.updatedRoleObject.recordStatus=='C'){
        // this.closeHide=true;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
            text: 'You are trying to Closed record. ' + ' Do you want to proceed?',
            showCancelButton: true,
            confirmButtonColor: '#E6224A',
            cancelButtonColor: '#011945',
            // confirmButtonText: 'PROCEED.'
            cancelButtonText: 'NO',
            confirmButtonText: 'YES',
            icon: 'info'
        }).then((result => {
            if (result.isConfirmed === true) {
                this.roleService.closelockRecord(roleName, this.username).subscribe(data => {
                    this.updatedRoleObject = data;
                    this.cdr.markForCheck();
                    this.modifyRoleObject = this.updatedRoleObject;
                    console.log('role is closed', this.updatedRoleObject.recordStatus);
                    this.openBtn = false;
                    this.closeBtn = false;
                    if (this.updatedRoleObject) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                            text: "Role is Closed",
                            icon: 'success'
                        });
                    }
                });
            }
        }));
        if (this.updatedRoleObject === false) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                icon: 'error',
                text: 'Failed to Closed Record '
            });
        }
        // Swal.fire("Role is Closed ");
        // }
        // });
    }
    // reopen a user
    // reopen a user
    reopenRecord(userId) {
        // this.roleService.reopenRecord(userId, this.username).subscribe(data => {
        //   this.updatedRoleObject = data;
        //   this.cdr.markForCheck();
        //   this.modifyRoleObject = this.updatedRoleObject;
        //   console.log('user is reopened');
        //   this.openBtn=false;
        //   this.closeBtn=false;
        // if(this.updatedRoleObject.recordStatus=='O'){
        // this.openHide=true;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
            text: 'You are trying to Reopen record. ' + ' Do you want to proceed?',
            showCancelButton: true,
            confirmButtonColor: '#E6224A',
            cancelButtonColor: '#011945',
            // confirmButtonText: 'PROCEED.'
            cancelButtonText: 'NO',
            confirmButtonText: 'YES',
            icon: 'info'
        }).then((result => {
            if (result.isConfirmed === true) {
                this.roleService.reopenRecord(userId, this.username).subscribe(data => {
                    this.updatedRoleObject = data;
                    this.cdr.markForCheck();
                    this.modifyRoleObject = this.updatedRoleObject;
                    console.log('user is reopened');
                    this.openBtn = false;
                    this.closeBtn = false;
                    if (this.modifyRoleObject) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                            text: "Role is Reopened",
                            icon: 'success'
                        });
                    }
                });
            }
        }));
        if (this.deleteStatusFlag === false) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                icon: 'error',
                text: 'Failed to Reopened Record '
            });
        }
        // Swal.fire("Role is Reopened ");
        // }
        // });
    }
    // delete a user
    deleteRole(roleName) {
        // this.roleService.deleteRole(roleName, this.username).subscribe(data => {
        //   console.log('user is deleted');
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
            text: 'You are trying to Delete record. ' + ' Do you want to proceed?',
            showCancelButton: true,
            confirmButtonColor: '#E6224A',
            cancelButtonColor: '#011945',
            // confirmButtonText: 'PROCEED.'
            cancelButtonText: 'NO',
            confirmButtonText: 'YES',
            icon: 'info'
        }).then((result => {
            if (result.isConfirmed === true) {
                this.roleService.deleteRole(roleName, this.username).subscribe(data => {
                    //console.log('deleteData', datafrombackendtoDelete);
                    this.deleteStatusFlag = data;
                    if (this.deleteStatusFlag) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                            text: "Role is Deleted",
                            icon: 'success'
                        });
                        this.router.navigate(['/roles/list']);
                    }
                });
            }
        }));
        if (this.deleteStatusFlag === false) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                icon: 'error',
                text: 'Failed to Delete Record '
            });
        }
        // });
    }
    modifyRoles() {
        let permissionslist = [];
        for (let i = 0; i < this.rolessorteddata.length; i++) {
            let screenoccurence = this.rolessorteddata[i].screenlist;
            for (let ind = 0; ind < screenoccurence.length; ind++) {
                if (screenoccurence[ind].permission.toString() != screenoccurence[ind].newpermission.toString()) {
                    let gettabindex = this.newRolesData.permissionDto.findIndex(function (item) { return item.permissionId.screenId == screenoccurence[ind].screenid; });
                    if (gettabindex >= 0) {
                        let obj = { 'permissionId': this.newRolesData.permissionDto[gettabindex].permissionId };
                        obj["permissions"] = screenoccurence[ind].newpermission;
                        permissionslist.push(obj);
                    }
                } //if
            } //for loop endng
        } //for loop endng
        let modifiedRole = { roleDto: this.newRolesData.roleDto };
        modifiedRole.permissionDto = permissionslist;
        console.log(modifiedRole);
        modifiedRole.roleDto.roleDesc = this.modifyRoleObject.roleDesc;
        modifiedRole.roleDto.maker = this.username;
        this.roleService.newmodifyRoleService(modifiedRole).subscribe(data => {
            this.validationResponse = data;
            this.cdr.markForCheck();
            let userId = localStorage.getItem('userFromLogin');
            this.roleService.fetchNewRolePermissions(userId);
            //console.log(this.validationResponse);
            if (this.validationResponse) {
                // this.responseError = 'success';
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire("Role is Updated ");
                this.submitBtn = true;
                console.log("IF IF IF IF IF");
            }
            else {
                // this.responseError = 'Server Error';
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    icon: 'error',
                    text: 'Server Error '
                });
                // this.iziToast.show({
                //   message: `Server Error`,
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
                console.log("ELSE ELSE ELSE ELSE");
            }
        });
    }
    fetchdynamicroles() {
        if (this.modifyRoleObject.roleName != null) {
            this.roleService.fetchdynamicrolesdata(this.modifyRoleObject.roleName).subscribe(data => {
                console.log('fetch', data);
                this.newRolesData.roleDto = data.roleDto;
                this.newRolesData.permissionDto = data.permissionDto;
                this.newRolesData.tabDto = data.tabDto;
                this.newRolesData.labelDto = data.labelDto;
                this.newRolesData.screenDto = data.screenDto;
                let arrayC = [];
                let arrayB = data.screenDto;
                let labelsarray = data.labelDto;
                let permissionsarray = data.permissionDto;
                console.log(this.newRolesData, "New roles Data");
                //new code regarding old roles screens 04/08
                if (permissionsarray && permissionsarray.length < data.screenDto.length) {
                    let initalizepermissions = '';
                    if (data.labelDto) {
                        let labelarray = [];
                        for (let i = 0; i < data.labelDto.length; i++) {
                            labelarray.push(0);
                        }
                        let missiongpermissions = labelarray.join("");
                        initalizepermissions = missiongpermissions;
                    }
                    for (let i = 0; i < data.screenDto.length; i++) {
                        let items = data.screenDto[i];
                        let screenindex = permissionsarray.findIndex(function (item) { return item.permissionId.screenId == items.screensId.screenId; });
                        if (screenindex == -1) {
                            let permissionobj = { roleName: this.modifyRoleObject.roleName, screenId: items.screensId.screenId };
                            let obj = { permissionId: permissionobj, permissions: initalizepermissions };
                            permissionsarray.push(obj);
                        }
                    }
                }
                this.screenName = this.newRolesData.tabDto;
                let scrnm = [];
                for (let n = 0; n < this.screenName.length; n++) {
                    scrnm[this.screenName[n].tabId - 1] = this.screenName[n];
                }
                this.screenName = [];
                for (let n = 0; n < scrnm.length; n++) {
                    if (scrnm[n] != undefined) {
                        this.screenName[this.screenName.length] = scrnm[n];
                    }
                }
                console.log(this.btnNameSelected);
                if (this.btnNameSelected == null || this.btnNameSelected == undefined) {
                    this.btnNameSelected = this.screenName[0].tabName;
                }
                //end of new code regarding old roles screens 04/08
                //fetch screens for tabs
                // data.tabDto.forEach(function(element){
                for (let tabindex = 0; tabindex < data.tabDto.length; tabindex++) {
                    let screen = [];
                    let screenslist = [];
                    let element = data.tabDto[tabindex];
                    screenslist = this.getscreenlist(arrayB, element, permissionsarray, screen, screenslist);
                    //fetching screen list 
                    // console.log('arrayc', screenslist);
                    //  arrayB.forEach((items) => {
                    // }) //arrayb fntn endng
                    //end of fetching screen list
                    //fetching labels for screen
                    let screenvisibility = element.visibility.toString();
                    let label = [];
                    let labellist = [];
                    for (let i = 0; i < screenvisibility.length; i++) {
                        if (screenvisibility.charAt(i) == 1) {
                            label.push(labelsarray[i].labelName);
                            labellist.push(labelsarray[i]);
                        }
                    }
                    //end of fetching labels for screen
                    arrayC.push({ tabId: element.tabId, tabname: element.tabName, screens: screen, screenlist: screenslist, labels: label, labelslist: labellist });
                }
                this.rolessorteddata = arrayC;
                // this.newRolestabsdata.tabslist = arrayC;
                this.rolestype(1);
                console.log('arrayc', arrayC);
                //end of fetching screen for tabs
            });
        }
        else {
            this.roleService.fetchnewscreenlabels().subscribe(data => {
                console.log(data);
                let permissionsarray = this.preparingPermissiondto(data.screenDto, data.labelDto.length);
                // let permissionsarray = data.permissionDto ; // Added - Gayathri
                this.newRolesData.roleDto = data.roleDto;
                this.newRolesData.permissionDto = permissionsarray;
                this.newRolesData.tabDto = data.tabDto;
                this.newRolesData.labelDto = data.labelDto;
                this.newRolesData.screenDto = data.screenDto;
                let arrayC = [];
                let arrayB = data.screenDto;
                let labelsarray = data.labelDto;
                this.screenName = this.newRolesData.tabDto;
                let scrnm = [];
                for (let n = 0; n < this.screenName.length; n++) {
                    scrnm[this.screenName[n].tabId - 1] = this.screenName[n];
                }
                console.log("scrnm: ", scrnm);
                this.screenName = [];
                console.log("scrnm 1: ", this.screenName);
                for (let n = 0; n < scrnm.length; n++) {
                    if (scrnm[n] != undefined) {
                        this.screenName[this.screenName.length] = scrnm[n];
                    }
                }
                console.log("scrName 2: ", this.screenName);
                console.log(this.btnNameSelected);
                if (this.btnNameSelected == null || this.btnNameSelected == undefined) {
                    this.btnNameSelected = this.screenName[0].tabName;
                }
                for (let tabindex = 0; tabindex < data.tabDto.length; tabindex++) {
                    let screen = [];
                    let screenslist = [];
                    let element = data.tabDto[tabindex];
                    console.log(element);
                    screenslist = this.getscreenlist(arrayB, element, permissionsarray, screen, screenslist);
                    console.log(screenslist);
                    //fetching screen list 
                    //end of fetching screen list
                    //fetching labels for screen
                    let screenvisibility = element.visibility.toString();
                    let label = [];
                    let labellist = [];
                    for (let i = 0; i < screenvisibility.length; i++) {
                        if (screenvisibility.charAt(i) == 1) {
                            label.push(labelsarray[i].labelName);
                            labellist.push(labelsarray[i]);
                        }
                    }
                    //end of fetching labels for screen
                    arrayC.push({ tabId: element.tabId, tabname: element.tabName, screens: screen, screenlist: screenslist, labels: label, labelslist: labellist });
                }
                console.log(arrayC);
                this.rolessorteddata = arrayC;
                // this.newfmostabsdata.tabslist = arrayC;
                // console.log( this.newfmostabsdata.tabslist);
                this.rolestype(1);
                //end of fetching screen for tabs
            });
        }
    }
    getscreenlist(arrayB, element, permissionsarray, screen, screenslist) {
        /* arrayB.forEach((items) => {
          if(element.tabId == items.screensId.tabId)
          {
            let idexist = permissionsarray.findIndex(function(item){ return item.permissionId.screenId == items.screensId.screenId});
             screen.push(items.screenName);
             screenslist.push({screenname:items.screenName, screenid:items.screensId.screenId, permission:permissionsarray[idexist].permissions, newpermission:permissionsarray[idexist].permissions});
          } //if
        }) //arrayb fnctn endng */
        for (let ind = 0; ind < arrayB.length; ind++) {
            let items = arrayB[ind];
            if (element.tabId == items.screensId.tabId) {
                let idexist = permissionsarray.findIndex(function (item) { return item.permissionId.screenId == items.screensId.screenId; });
                screen.push(items.screenName);
                if (idexist > -1)
                    screenslist.push({ screenname: items.screenName, screenid: items.screensId.screenId, permission: permissionsarray[idexist].permissions, newpermission: permissionsarray[idexist].permissions });
            } //if 
        } //for loop endng
        return screenslist;
    }
    // getPermission(num,event) {
    //   this.roleService.fetchScreenPermissions('Roles');
    //   this.cdr.markForCheck();
    // }
    rolestype(tabId) {
        console.log(tabId);
        console.log(this.modifyRoleObject.roleName);
        console.log(this.rolessorteddata);
        let index;
        //   if(this.modifyRoleObject.roleName!=null ){
        //     index = this.newRolestabsdata.tabslist.findIndex(function (item) { return item.tabId == tabId });
        //     console.log(index);
        //     this.selectedtab = this.newRolestabsdata.tabslist[index].tabname;
        //     this.indexdata = this.newRolestabsdata.tabslist[index];
        //     }
        //  else{
        //     index = this.newfmostabsdata.tabslist.findIndex(function (item) { return item.tabId == tabId });
        //     console.log(index);
        //     this.selectedtab = this.newfmostabsdata.tabslist[index].tabname;
        //     this.indexdata = this.newfmostabsdata.tabslist[index];
        //     }
        index = this.rolessorteddata.findIndex(function (item) { return item.tabId == tabId; });
        console.log(index);
        this.selectedtab = this.rolessorteddata[index].tabname;
        this.indexdata = this.rolessorteddata[index];
        let tabheaders = this.indexdata.labels;
        let indexval = tabheaders.indexOf('Screens');
        this.previouschecklist.splice(index, 0, this.checkedlist);
        let checklistclass = [];
        if (indexval == -1) {
            tabheaders.splice(0, 0, 'Screens');
            tabheaders.splice(1, 0, 'checkbox');
        }
        let screenslist = [];
        let checklist = [];
        let strchklist = [];
        console.log(this.indexdata, "Index data");
        let data = this.indexdata.screenlist;
        for (let i = 0; i < data.length; i++) {
            let array = [];
            var obj = {};
            var checkval = {};
            var testchecklist = [{ value: '' }, { value: '' }];
            var strinchklst = [{ value: '' }, { value: '' }];
            array.push(data[i].screenname);
            obj[this.indexdata.labels[0]] = data[i].screenname;
            obj[this.indexdata.labels[1]] = 'checkbox';
            checkval[this.indexdata.labels[0]] = true;
            checkval[this.indexdata.labels[1]] = true;
            let permissiondata = data[i].newpermission.toString();
            let stringlength = permissiondata.length;
            //check if all occurences is checked
            var temp = permissiondata;
            var count = (temp.match(/1/g) || []).length;
            if (stringlength == count) {
                checklistclass.push(i);
            }
            /* if(stringlength == count)
             {
                testchecklist[0].value = true;
                strinchklst[0].value = true;
                testchecklist[1].value = true;
                strinchklst[1].value = true;
             } //if */
            //end of checking all occurences
            for (let j = 0; j < stringlength; j++) {
                obj[this.indexdata.labels[2 + j]] = permissiondata.charAt(j);
                if (permissiondata.charAt(j) == 1) {
                    checkval[this.indexdata.labels[2 + j]] = true;
                    testchecklist.push({ value: true });
                    strinchklst.push({ value: true });
                }
                else {
                    checkval[this.indexdata.labels[2 + j]] = false;
                    testchecklist.push({ value: false });
                    strinchklst.push({ value: false });
                }
            } //for loop endng
            screenslist.push(obj);
            checklist.push(testchecklist);
            strchklist.push(strinchklst);
        } //for loop endng
        // this.displayedcolumns = tabheaders;
        // this.checkedlist = checklist;
        // this.storechecklist = strchklist;
        console.log(screenslist);
        this.roleScreenList = screenslist;
        // console.log(checklist);
        // console.log(strchklist);
        // this.datasource.list = new MatTableDataSource(screenslist);
        // this.selection.clear();
        // if (this.enabledefaulttrigger)
        // document.getElementById('defaultele').click();
        /* if(checklistclass.length)
          {
            setTimeout(() => {
              this.appendcheckclass(checklistclass);
            }, 3000);
          } //if  */
    }
    onSubmit() {
        this.submitted = true;
        this.save();
    }
    save() {
        // this.role.maker = this.username;
        console.log(this.username);
        this.modifyRoleObject.maker = this.username;
        let permissionslist = [];
        for (let i = 0; i < this.rolessorteddata.length; i++) {
            let screenoccurence = this.rolessorteddata[i].screenlist;
            for (let ind = 0; ind < screenoccurence.length; ind++) {
                //if (screenoccurence[ind].permission.toString() != screenoccurence[ind].newpermission.toString()) {
                // let gettabindex = this.fmosRolesData.permissionDto.findIndex(function (item) { return item.permissionId.screenId == screenoccurence[ind].screenid });
                let gettabindex = this.newRolesData.permissionDto.findIndex(function (item) { return item.permissionId.screenId == screenoccurence[ind].screenid; });
                // console.log(gettabindex);
                if (gettabindex >= 0) {
                    // this.fmosRolesData.permissionDto[gettabindex].permissionId.roleName =  this.modifyRoleObject.roleName;
                    // let obj = { 'permissionId': this.fmosRolesData.permissionDto[gettabindex].permissionId };
                    this.newRolesData.permissionDto[gettabindex].permissionId.roleName = this.modifyRoleObject.roleName;
                    let obj = { 'permissionId': this.newRolesData.permissionDto[gettabindex].permissionId };
                    obj["permissions"] = screenoccurence[ind].newpermission;
                    permissionslist.push(obj);
                    // console.log(permissionslist);
                }
                // } //if
            } //for loop endng
        } //for loop endng
        let newRole = { roleDto: this.modifyRoleObject };
        newRole.permissionDto = permissionslist;
        console.log(newRole);
        this.roleService.createnewrole(newRole)
            .subscribe(role => {
            console.log(role);
            if (role) {
                this.modifyRoleObject = role.roleDto;
                if (this.modifyRoleObject.recordStatus == 'O') {
                    this.modifyRoleObject.recordStatus = "OPEN";
                }
                else if (this.modifyRoleObject.recordStatus == 'C') {
                    this.modifyRoleObject.recordStatus = "CLOSE";
                }
                else {
                    this.modifyRoleObject.recordStatus = this.editRoleScreen.queryParams.recordStatus;
                }
                this.modifyRoleObject.authStatus = this.editRoleScreen.queryParams.authStatus;
                if (this.modifyRoleObject.authStatus == 'A') {
                    this.modifyRoleObject.authStatus = "AUTHORIZED";
                }
                else {
                    this.modifyRoleObject.authStatus = this.editRoleScreen.queryParams.authStatus;
                }
                this.modifyRoleObject.authStatus = "UNAUTHORIZED";
                this.modifyRoleObject.firstTimeAuth = this.editRoleScreen.queryParams.firstTimeAuth;
                if (this.modifyRoleObject.firstTimeAuth == 'Y') {
                    this.modifyRoleObject.firstTimeAuth = "YES";
                }
                else if (this.modifyRoleObject.firstTimeAuth == 'N') {
                    this.modifyRoleObject.firstTimeAuth = "NO";
                }
                this.modifyRoleObject.firstTimeAuth = "NO";
                this.editFlag = true;
                this.submitBtn = true;
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire("Role is Created");
                // this.iziToast.show({
                //             message: `Record Saved `,
                //             image: "assets/images/user.png",
                //             icon: 'ico ico-success',
                //             theme:"dark",
                //             layout: 2,
                //             // imageWidth:50,
                //             balloon: false,
                //             position: "topRight",
                //             progressBarColor: "green",
                //             pauseOnHover: true,
                //           });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    icon: 'error',
                    text: `"Failed ", 'Role already exist or Can’t save role without any permission.`
                });
                // this.iziToast.show({
                //             message: `"Failed ", 'Role already exist or Can’t save role without any permission.`,
                //             image: "assets/images/user.png",
                //             icon: 'ico ico-error',
                //             theme:"dark",
                //             layout: 2,
                //             // imageWidth:50,
                //             balloon: false,
                //             position: "topRight",
                //             progressBarColor: "red",
                //             pauseOnHover: true,
                //           });
            }
            // this.cdr.markForCheck();
        }, error => {
            // if (HttpErrorResponse) {
            //   Swal.fire('Server Error', 'error')
            // }
        });
        // this.role = new Roles();
    }
    clickRoleAction(roles, action, event) {
        console.log(roles, "Roles");
        console.log(action, "action");
        console.log(event, "event");
        if (action == "NEW" || action == "SELECTALL") {
            roles.NEW = (event) ? "1" : "0";
        }
        if (action == "EDIT" || action == "SELECTALL") {
            roles.EDIT = (event) ? "1" : "0";
        }
        if (action == "DELETE" || action == "SELECTALL") {
            roles.DELETE = (event) ? "1" : "0";
        }
        if (action == "CLOSE" || action == "SELECTALL") {
            roles.CLOSE = (event) ? "1" : "0";
        }
        if (action == "REOPEN" || action == "SELECTALL") {
            roles.REOPEN = (event) ? "1" : "0";
        }
        if (action == "UNLOCK" || action == "SELECTALL") {
            roles.UNLOCK = (event) ? "1" : "0";
        }
        if (action == "PRINT" || action == "SELECTALL") {
            roles.PRINT = (event) ? "1" : "0";
        }
        if (action == "AUTH" || action == "SELECTALL") {
            roles.AUTH = (event) ? "1" : "0";
        }
        if (action == "VIEW" || action == "SELECTALL") {
            roles.VIEW = (event) ? "1" : "0";
        }
        for (let m = 0; m < this.rolessorteddata.length; m++) {
            if (this.rolessorteddata[m].tabname == this.btnNameSelected) {
                for (let n = 0; n < this.rolessorteddata[m].screenlist.length; n++) {
                    if (this.rolessorteddata[m].screenlist[n].screenname == roles.Screens) {
                        let newperm1 = this.rolessorteddata[m].screenlist[n].newpermission;
                        let newperm = newperm1.split('');
                        for (let p = 0; p < this.rolessorteddata[m].labelslist.length; p++) {
                            if (this.rolessorteddata[m].labelslist[p].labelName == "NEW") {
                                newperm[this.rolessorteddata[m].labelslist[p].labelId - 1] = roles.NEW;
                            }
                            if (this.rolessorteddata[m].labelslist[p].labelName == "EDIT") {
                                newperm[this.rolessorteddata[m].labelslist[p].labelId - 1] = roles.EDIT;
                            }
                            if (this.rolessorteddata[m].labelslist[p].labelName == "DELETE") {
                                newperm[this.rolessorteddata[m].labelslist[p].labelId - 1] = roles.DELETE;
                            }
                            if (this.rolessorteddata[m].labelslist[p].labelName == "CLOSE") {
                                newperm[this.rolessorteddata[m].labelslist[p].labelId - 1] = roles.CLOSE;
                            }
                            if (this.rolessorteddata[m].labelslist[p].labelName == "REOPEN") {
                                newperm[this.rolessorteddata[m].labelslist[p].labelId - 1] = roles.REOPEN;
                            }
                            if (this.rolessorteddata[m].labelslist[p].labelName == "UNLOCK") {
                                newperm[this.rolessorteddata[m].labelslist[p].labelId - 1] = roles.UNLOCK;
                            }
                            if (this.rolessorteddata[m].labelslist[p].labelName == "PRINT") {
                                newperm[this.rolessorteddata[m].labelslist[p].labelId - 1] = roles.PRINT;
                            }
                            if (this.rolessorteddata[m].labelslist[p].labelName == "AUTH") {
                                newperm[this.rolessorteddata[m].labelslist[p].labelId - 1] = roles.AUTH;
                            }
                            if (this.rolessorteddata[m].labelslist[p].labelName == "VIEW") {
                                newperm[this.rolessorteddata[m].labelslist[p].labelId - 1] = roles.VIEW;
                            }
                            newperm1 = newperm.join('');
                        }
                        this.rolessorteddata[m].screenlist[n].newpermission = newperm1;
                    }
                }
                console.log(roles, "Roles");
                console.log(action, "action");
                console.log(event, "event");
                console.log(this.rolessorteddata);
            }
        }
    }
    reset() {
        this.validationResponse = null;
        this.modifyRoleObject = new src_app_shared_models_role__WEBPACK_IMPORTED_MODULE_1__.Roles();
        this.roleScreenList = null;
        this.rolestype(1);
        // this.router.navigate(['/dashboard']);
    }
}
RoleDetailsComponent.ɵfac = function RoleDetailsComponent_Factory(t) { return new (t || RoleDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ng2_izitoast__WEBPACK_IMPORTED_MODULE_5__.Ng2IzitoastService)); };
RoleDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: RoleDetailsComponent, selectors: [["npr-role-details"]], inputs: { modifyRoleObject: "modifyRoleObject" }, decls: 57, vars: 12, consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["action", "", "novalidate", "", 1, "formStyle", 3, "formGroup"], ["roleForm", "ngForm"], [1, "dbCardStyle"], [1, "row", "gy-4"], [1, "col-lg-4"], ["for", "roleName", 1, "formLbl"], [1, "colorRed"], ["id", "roleName", "type", "text", "formControlName", "roleName", "name", "roleName", "placeholder", "Role Name", "value", "", 1, "form-control", 3, "ngModel", "readonly", "ngModelChange"], ["class", "errorColor", 4, "ngIf"], ["for", "roleDescription", 1, "formLbl"], ["id", "roleDescription", "type", "text", "formControlName", "roleDesc", "required", "", "name", "roleDesc", "placeholder", "Tupe your Text", "value", "", 1, "form-control", 3, "ngModel", "readonly", "ngModelChange"], [1, "col-lg-12"], [1, "row", "g-2", "justify-content-center"], ["class", "col-auto", 4, "ngFor", "ngForOf"], [1, "table-responsive"], ["id", "dbTable1", 1, "table", "tableStyle"], [4, "ngFor", "ngForOf"], ["class", "row g-3 pb-3 justify-content-end pt-3", 4, "ngIf"], ["class", "col-lg-12", 4, "ngIf"], ["class", "dbCardStyle", 4, "ngIf"], [1, "errorColor"], [4, "ngIf"], [1, "col-auto"], [1, "btn", "btnOutlinePrimary", 3, "ngClass", "disabled", "click"], [1, "link-color"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "disabled", "click"], ["type", "checkbox", 1, "form-check-input", 3, "disabled", "checked", "click"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["class", "col-auto", 4, "ngIf"], [1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "hidden", "click"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], ["src", "assets/images/maker-icon.svg", "alt", "..."], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], ["src", "assets/images/checker-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/auth-status-icon.svg", "alt", "..."]], template: function RoleDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Role Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Role Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function RoleDetailsComponent_Template_input_ngModelChange_13_listener($event) { return ctx.modifyRoleObject.roleName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, RoleDetailsComponent_div_14_Template, 3, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Role Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function RoleDetailsComponent_Template_input_ngModelChange_20_listener($event) { return ctx.modifyRoleObject.roleDesc = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, RoleDetailsComponent_div_21_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, RoleDetailsComponent_div_24_Template, 3, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Select All");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "NEW");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "EDIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Reopen");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Unlock");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "Auth");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](53, RoleDetailsComponent_tr_53_Template, 34, 20, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](54, RoleDetailsComponent_div_54_Template, 7, 3, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](55, RoleDetailsComponent_div_55_Template, 11, 8, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](56, RoleDetailsComponent_div_56_Template, 99, 13, "div", 22);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.myform);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.modifyRoleObject.roleName)("readonly", ctx.editFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.myform.controls["roleName"].invalid && (ctx.myform.controls["roleName"].dirty || ctx.myform.controls["roleName"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.modifyRoleObject.roleDesc)("readonly", ctx.editFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.myform.controls["roleDesc"].invalid && (ctx.myform.controls["roleDesc"].dirty || ctx.myform.controls["roleDesc"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.screenName);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.roleScreenList);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.modifyScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.modifyScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.modifyRoleObject.roleName != undefined);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: [".errorColor[_ngcontent-%COMP%] {\n  color: #e6224a;\n}\n\n.form-group.required[_ngcontent-%COMP%]   .control-label[_ngcontent-%COMP%]:after {\n  content: \"*\";\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvbGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0FBRUoiLCJmaWxlIjoicm9sZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yQ29sb3J7XHJcbiAgICBjb2xvcjogI2U2MjI0YTtcclxufVxyXG4uZm9ybS1ncm91cC5yZXF1aXJlZCAuY29udHJvbC1sYWJlbDphZnRlciB7IFxyXG4gICAgY29udGVudDpcIipcIjtcclxuICAgIGNvbG9yOnJlZDtcclxuIH0iXX0= */"] });
class UsernameValidator {
    static cannotContainSpace(control) {
        if (control.value.indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    }
}


/***/ }),

/***/ 19694:
/*!**************************************************************!*\
  !*** ./src/app/views/roles/role-list/role-list.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleListComponent": function() { return /* binding */ RoleListComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var src_app_shared_models_role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/role */ 82899);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/api.service */ 94761);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/role.service */ 77382);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 50481);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);








function RoleListComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RoleListComponent_tr_26_Template_a_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const roles_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.getRole(roles_r2); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const roles_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](roles_r2.roleName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](roles_r2.roleDesc);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](roles_r2.authStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](roles_r2.recordStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](12, 5, roles_r2.makerDtStamp, "medium"));
} }
function RoleListComponent_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Please wait... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
const _c0 = function () { return ["active"]; };
const _c1 = function () { return ["/dashboard"]; };
class RoleListComponent {
    // @ViewChildren(MatPaginator) paginator: MatPaginator;
    constructor(cdr, api, router, roleService) {
        this.cdr = cdr;
        this.api = api;
        this.router = router;
        this.roleService = roleService;
        this.isLoading = false;
        this.roleCodes = new src_app_shared_models_role__WEBPACK_IMPORTED_MODULE_0__.Roles();
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    }
    ngOnInit() {
        this.getRoles();
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true,
            columnDefs: [{ type: 'date', 'targets': [4] }],
            order: [[4, 'desc']],
            lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]],
        };
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
    getRoles() {
        this.isLoading = true;
        this.api.getAllRoles().subscribe(data => {
            this.allRoles = data;
            this.isLoading = false;
            this.cdr.markForCheck();
            console.log(this.allRoles);
            this.dtTrigger.next();
            // this.dataSource = new MatTableDataSource<Roles>( this.allRoles );
            // this.dataSource.paginator = this.paginator;
        });
    }
    getRole(userObject) {
        this.modifyRoleObject = userObject;
        console.log('inside modify');
        console.log(this.modifyRoleObject);
        const navigationExtras = {
            queryParams: {
                'id': this.modifyRoleObject.id,
                'roleName': this.modifyRoleObject.roleName,
                'roleDesc': this.modifyRoleObject.roleDesc,
                'new1': this.modifyRoleObject.new1,
                'copy1': this.modifyRoleObject.copy1,
                'delete1': this.modifyRoleObject.delete1,
                'close1': this.modifyRoleObject.close1,
                'unlock1': this.modifyRoleObject.unlock1,
                'reopen1': this.modifyRoleObject.reopen1,
                'print1': this.modifyRoleObject.print1,
                'auth1': this.modifyRoleObject.auth1,
                'view1': this.modifyRoleObject.view1,
                'maker': this.modifyRoleObject.maker,
                'makerDtStamp': this.modifyRoleObject.makerDtStamp,
                'checkerId': this.modifyRoleObject.checkerId,
                'checkerDtStamp': this.modifyRoleObject.checkerDtStamp,
                'recordStatus': this.modifyRoleObject.recordStatus,
                'authStatus': this.modifyRoleObject.authStatus,
                'firstTimeAuth': this.modifyRoleObject.firstTimeAuth
            }
        };
        this.roleService.sendNavParam(navigationExtras);
        this.router.navigate(['/roles/create']);
        //this.router.navigate(['/roles/search'], navigationExtras);
    }
    createRole() {
        this.router.navigate(['/roles/create']);
        const navigationExtras = {
            queryParams: {}
        };
        this.roleService.sendNavParam(navigationExtras);
    }
}
RoleListComponent.ɵfac = function RoleListComponent_Factory(t) { return new (t || RoleListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_2__.RoleService)); };
RoleListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: RoleListComponent, selectors: [["npr-role-list"]], decls: 28, vars: 8, consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "routerLinkActive", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "link-color", 2, "cursor", "pointer", 3, "click"], [1, "loading-page-center"], [1, "indicator-progress"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"]], template: function RoleListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Role Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RoleListComponent_Template_button_click_7_listener() { return ctx.createRole(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Exit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Role Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Role Description");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, RoleListComponent_tr_26_Template, 13, 8, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, RoleListComponent_ng_container_27_Template, 5, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.allRoles);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2xlLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 47236:
/*!*****************************************************!*\
  !*** ./src/app/views/roles/roles-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolesRoutingModule": function() { return /* binding */ RolesRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _role_details_role_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./role-details/role-details.component */ 54672);
/* harmony import */ var _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role-list/role-list.component */ 19694);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





const routes = [
    {
        path: 'list',
        component: _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_1__.RoleListComponent
    }, {
        path: 'create',
        component: _role_details_role_details_component__WEBPACK_IMPORTED_MODULE_0__.RoleDetailsComponent
    }, {
        path: 'details/:id',
        component: _role_details_role_details_component__WEBPACK_IMPORTED_MODULE_0__.RoleDetailsComponent
    }
];
class RolesRoutingModule {
}
RolesRoutingModule.ɵfac = function RolesRoutingModule_Factory(t) { return new (t || RolesRoutingModule)(); };
RolesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: RolesRoutingModule });
RolesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RolesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 57445:
/*!*********************************************!*\
  !*** ./src/app/views/roles/roles.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolesModule": function() { return /* binding */ RolesModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _roles_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roles-routing.module */ 47236);
/* harmony import */ var _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role-list/role-list.component */ 19694);
/* harmony import */ var _role_details_role_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role-details/role-details.component */ 54672);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/components.module */ 15626);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ 50481);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);








class RolesModule {
}
RolesModule.ɵfac = function RolesModule_Factory(t) { return new (t || RolesModule)(); };
RolesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: RolesModule });
RolesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
            _roles_routing_module__WEBPACK_IMPORTED_MODULE_0__.RolesRoutingModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__.DataTablesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](RolesModule, { declarations: [_role_list_role_list_component__WEBPACK_IMPORTED_MODULE_1__.RoleListComponent,
        _role_details_role_details_component__WEBPACK_IMPORTED_MODULE_2__.RoleDetailsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
        _roles_routing_module__WEBPACK_IMPORTED_MODULE_0__.RolesRoutingModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__.DataTablesModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_views_roles_roles_module_ts-es2015.js.map