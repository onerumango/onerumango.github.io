function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-transaction-group-maintenance-global-gl-ac-code-maint-summary-glMaintenanceModule-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/transaction-group-maintenance/global-gl-ac-code-maint-summary/global-gl-ac-code-maint-summary.component.html":
  /*!**************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/transaction-group-maintenance/global-gl-ac-code-maint-summary/global-gl-ac-code-maint-summary.component.html ***!
    \**************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsTransactionGroupMaintenanceGlobalGlAcCodeMaintSummaryGlobalGlAcCodeMaintSummaryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n    <mat-toolbar color=\"primary\" style=\"height:30px; font-size: small;\">\r\n        <span>System GL/ACC Maintenance Summary</span>\r\n    </mat-toolbar>\r\n    <div class=\"navigation\">\r\n\r\n        <mat-card >\r\n            <button mat-raised-button style=\"font-size: 11px; margin-left: 80%\" color=\"primary\"\r\n                routerLink=\"/global-gl-acc-maintenance/gl-maint-system-new\">New</button>&nbsp;\r\n            <button mat-raised-button style=\"font-size: 11px;\" color=\"warn\" routerLink='/dashboard'>Exit</button>\r\n\r\n            <!-- <mat-form-field appearance=\"outline\" style=\"width:150px;font-size: 10px\">\r\n                <mat-label>UserId</mat-label>\r\n                <mat-select name=\"UserId\" [(ngModel)]=\"UserId\">\r\n                    <mat-option *ngFor=\"let UserId of userData\" [value]=\"UserId\">{{UserId}} </mat-option>\r\n                </mat-select>\r\n\r\n            </mat-form-field>\r\n            <div>\r\n                <button mat-raised-button color=\"primary\" (click)=\"getTrndata()\">Get Transaction</button>\r\n            </div> -->\r\n\r\n            <mat-toolbar>GL Code Maintenance</mat-toolbar>\r\n            <div class=\"mat-elevation-z8\">\r\n                <table mat-table [dataSource]=\"dataSource\">\r\n\r\n                    <!-- ID Column -->\r\n                    <ng-container matColumnDef=\"permission\">\r\n                        <th mat-header-cell *matHeaderCellDef> Permission</th>\r\n                        <td mat-cell *matCellDef=\"let row\"> <a></a>{{row.permission}}\r\n                        </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Progress Column -->\r\n                    <ng-container matColumnDef=\"trnCode\">\r\n                        <th mat-header-cell *matHeaderCellDef> GL Code </th>\r\n                        <td mat-cell *matCellDef=\"let row\"> {{row.trnCode}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Name Column -->\r\n                    <ng-container matColumnDef=\"trnDesc\">\r\n                        <th mat-header-cell *matHeaderCellDef> GL Code Description </th>\r\n                        <td mat-cell *matCellDef=\"let row\"> {{row.trnDesc}} </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"action\">\r\n                        <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                        <td mat-cell *matCellDef=\"let row\"> <button mat-raised-button color=\"warn\"\r\n                                (click)=deleteData(row) *ngIf=\"roleCodes.delete\">delete</button></td>\r\n                    </ng-container>\r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n                    </tr>\r\n                </table>\r\n\r\n                <mat-paginator #paginator1 [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>            </div>\r\n        </mat-card>\r\n      \r\n        <mat-card>\r\n                <mat-toolbar>Account class Maintenance</mat-toolbar>\r\n            <div class=\"mat-elevation-z8\">\r\n                <table mat-table [dataSource]=\"dataSource1\">\r\n\r\n                    <!-- ID Column -->\r\n                    <ng-container matColumnDef=\"permission\">\r\n                        <th mat-header-cell *matHeaderCellDef>Permission</th>\r\n                        <td mat-cell *matCellDef=\"let row\"> <a></a>{{row.permission}}\r\n                        </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Progress Column -->\r\n                    <ng-container matColumnDef=\"trnCode\">\r\n                        <th mat-header-cell *matHeaderCellDef> Account Class </th>\r\n                        <td mat-cell *matCellDef=\"let row\"> {{row.trnCode}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Name Column -->\r\n                    <ng-container matColumnDef=\"trnDesc\">\r\n                        <th mat-header-cell *matHeaderCellDef> Account Class Descreption </th>\r\n                        <td mat-cell *matCellDef=\"let row\"> {{row.trnDesc}} </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"action\">\r\n                        <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                        <td mat-cell *matCellDef=\"let row\"> <button mat-raised-button color=\"warn\"\r\n                                (click)=deleteDataAcc(row) *ngIf=\"roleCodes.delete\">delete</button></td>\r\n                    </ng-container>\r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns1\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n                    </tr>\r\n                </table>\r\n\r\n                <mat-paginator #paginator2 [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/transaction-group-maintenance/global-gl-ac-code-maint/global-gl-ac-code-maint.component.html":
  /*!**********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/transaction-group-maintenance/global-gl-ac-code-maint/global-gl-ac-code-maint.component.html ***!
    \**********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsTransactionGroupMaintenanceGlobalGlAcCodeMaintGlobalGlAcCodeMaintComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n    <div>\r\n        <mat-toolbar color=\"primary\" style=\"height:30px; font-size: small;\">\r\n            <span> System GL/ACC Maintenance </span>\r\n        </mat-toolbar>\r\n    </div>\r\n    <mat-tab-group>\r\n        <mat-tab label=\"GL Code Maintenance\">\r\n            <mat-card class=\"secondMatCard\">\r\n                <mat-toolbar>GL Code Maintenance</mat-toolbar>\r\n                <mat-card-content>\r\n                    <form #fn=\"ngForm\" novalidate>\r\n                    <mat-form-field appearance=\"outline\" style=\"font-size: 10px\">\r\n                        <mat-label>Code permission</mat-label>\r\n                        <mat-select name=\"UserId\" [(ngModel)]=\"UserId\">\r\n                            <mat-option *ngFor=\"let UserId of userName\" [value]=\"UserId\"> {{UserId}}\r\n                            </mat-option>\r\n                        </mat-select>\r\n\r\n                    </mat-form-field>\r\n\r\n                    <table>\r\n                        <tbody>\r\n\r\n                            <tr>\r\n\r\n                                <section *ngFor=\"let gl of gllist; let i = index;\">\r\n                                    <td>\r\n                                        <mat-form-field class=\"full-width\" appearance=\"outline\"\r\n                                            style=\"width:150px;font-size: 10px\">\r\n                                            <mat-label>GL Code</mat-label>\r\n                                            <input matInput type=\"text\" required placeholder=\"Transaction Code\"\r\n                                                name=\"address_{{i}}\" [(ngModel)]=\"gl.trnCode\" #trnCode=\"ngModel\">\r\n                                        </mat-form-field>\r\n                                        <div *ngIf=\"trnCode.touched\">\r\n                                            <p *ngIf=\"trnCode.errors?.required\" style=\"color: red; font-size: 9px\">\r\n                                                Transaction\r\n                                                Code is Required!\r\n                                            </p>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <mat-form-field appearance=\"outline\" style=\"width:150px;font-size: 10px\">\r\n                                            <mat-label>GL code Description</mat-label>\r\n                                            <input matInput type=\"text\" required placeholder=\"Transaction Description\"\r\n                                                name=\"address_{{i}}\" [(ngModel)]=\"gl.trnDesc\" #trnDesc=\"ngModel\">\r\n                                        </mat-form-field>\r\n                                        <div *ngIf=\"trnDesc.touched\">\r\n                                            <p *ngIf=\"trnDesc.errors?.required\" style=\"color: red; font-size: 9px\">\r\n                                                Transaction\r\n                                                Description is\r\n                                                Required!</p>\r\n                                        </div>\r\n                                    </td>\r\n\r\n                                    <td>\r\n                                        <button type=\"button\" class=\"btn b\"\r\n                                            (click)=\"removegllist(i,gl.transactionDescription)\">\r\n                                            <mat-icon>delete</mat-icon>\r\n                                        </button>\r\n                                    </td>\r\n                                </section>\r\n                            </tr>\r\n                            <button type=\"button\" class=\"btn\" (click)=\"addgllist()\" style=\"margin-left: 300px\">\r\n                                <mat-icon>add_box</mat-icon>\r\n                            </button>\r\n\r\n                            <div>\r\n                                <button mat-raised-button color=\"primary\" type=\"submit\" value=\"Submit\" [disabled]=\"showSubmit || !fn.form.valid\"\r\n                                    (click)=\"onSubmitGLCode()\">Submit</button>\r\n                                &nbsp;\r\n                                <button mat-raised-button color=\"warn\"\r\n                                    routerLink=\"/global-gl-acc-maintenance\">Exit</button>\r\n                                <!-- <button mat-raised-button color=\"warn\" routerLink=\"/transaction-group-maintenance/transaction-group-edit\">Exit</button> -->\r\n                            </div>\r\n                        </tbody>\r\n                    </table>\r\n\r\n                </form>\r\n                </mat-card-content>\r\n            </mat-card>\r\n        </mat-tab>\r\n        <mat-tab label=\"Account Maintenance\">\r\n            <mat-card class=\"secondMatCard\">\r\n                <mat-toolbar>Account Class Maintence</mat-toolbar>\r\n                <mat-card-content>\r\n                    <form #acc=\"ngForm\" novalidate>\r\n                    <mat-form-field appearance=\"outline\" style=\"font-size: 10px\">\r\n                        <mat-label>Permission</mat-label>\r\n                        <mat-select name=\"UserId\" [(ngModel)]=\"UserId\">\r\n                            <mat-option *ngFor=\"let UserId of userName1\" [value]=\"UserId\"> {{UserId}}\r\n                            </mat-option>\r\n                        </mat-select>\r\n\r\n                    </mat-form-field>\r\n\r\n                    <table>\r\n                        <tbody>\r\n\r\n                            <tr>\r\n\r\n                                <section *ngFor=\"let address of AccClass; let i = index;\">\r\n                                    <td>\r\n                                        <mat-form-field class=\"full-width\" appearance=\"outline\"\r\n                                            style=\"width:150px;font-size: 10px\">\r\n                                            <mat-label>Account Class </mat-label>\r\n                                            <input matInput type=\"text\" required placeholder=\"Transaction Code\"\r\n                                                name=\"address_{{i}}\" [(ngModel)]=\"address.trnCode\" #trnCode=\"ngModel\">\r\n                                        </mat-form-field>\r\n                                        <div *ngIf=\"trnCode.touched\">\r\n                                            <p *ngIf=\"trnCode.errors?.required\" style=\"color: red; font-size: 9px\">\r\n                                                Transaction\r\n                                                Code is Required!\r\n                                            </p>\r\n                                        </div>\r\n                                    </td>\r\n\r\n                                    <td>\r\n                                        <mat-form-field appearance=\"outline\" style=\"width:150px;font-size: 10px\">\r\n                                            <mat-label>Account Class Description</mat-label>\r\n                                            <input matInput type=\"text\" required placeholder=\"Transaction Description\"\r\n                                                name=\"address_{{i}}\" [(ngModel)]=\"address.trnDesc\" #trnDesc=\"ngModel\">\r\n                                        </mat-form-field>\r\n                                        <div *ngIf=\"trnDesc.touched\">\r\n                                            <p *ngIf=\"trnDesc.errors?.required\" style=\"color: red; font-size: 9px\">\r\n                                                Transaction\r\n                                                Description is\r\n                                                Required!</p>\r\n                                        </div>\r\n                                    </td>\r\n\r\n                                    <td>\r\n                                        <button type=\"button\" class=\"btn b\"\r\n                                            (click)=\"removeaddAccClass(i,address.transactionDescription)\">\r\n                                            <mat-icon>delete</mat-icon>\r\n                                        </button>\r\n                                    </td>\r\n                                </section>\r\n                            </tr>\r\n                            <button type=\"button\" class=\"btn\" (click)=\"addAccClass()\" style=\"margin-left: 300px\">\r\n                                <mat-icon>add_box</mat-icon>\r\n                            </button>\r\n\r\n                            <div>\r\n                                <button mat-raised-button color=\"primary\" type=\"submit\" value=\"Submit\"  [disabled]=\"showSubmit ||!acc.form.valid\"\r\n                                    (click)=\"onSubmitActClass()\">Submit</button>\r\n                                &nbsp;\r\n                                <button mat-raised-button color=\"warn\"\r\n                                    routerLink=\"/global-gl-acc-maintenance\">Exit</button>\r\n                                <!-- <button mat-raised-button color=\"warn\" routerLink=\"/transaction-group-maintenance/transaction-group-edit\">Exit</button> -->\r\n                            </div>\r\n                        </tbody>\r\n                    </table>\r\n\r\n</form>\r\n\r\n                </mat-card-content>\r\n            </mat-card>\r\n        </mat-tab>\r\n\r\n    </mat-tab-group>\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div>\r\n<br><br><br>\r\n<div fxLayout=\"row\" *ngIf>\r\n    <div fxFlex></div>\r\n    <div fxFlex=\"95\">\r\n        <mat-card style=\"width: 70%;  margin-left:20%;\">\r\n            <mat-card-title>\r\n\r\n            </mat-card-title>\r\n            <mat-card-content style=\" margin-left:-25%;\">\r\n                <div fxLayout=\"row\">\r\n\r\n                    <table id=\"customers\">\r\n                        <tr>\r\n                            <th>Record Status:</th>\r\n                            <td>\r\n                                <!-- <mat-chip>{{fetchUserSingle.recordStatus}}</mat-chip> -->\r\n\r\n                            </td>\r\n                            <th>Auth Status:</th>\r\n                            <td>\r\n\r\n                                <!-- <mat-chip >{{fetchUserSingle.verifiedStatus}}</mat-chip> -->\r\n\r\n                            </td>\r\n                            <th>Input By:</th>\r\n                            <td>\r\n\r\n                                <!-- <mat-chip >{{fetchUserSingle.inputBy}}</mat-chip> -->\r\n                            </td>\r\n                            <th>Input Date:</th>\r\n                            <td>\r\n\r\n                                <!-- <mat-chip>{{fetchUserSingle.inputTime | date}}</mat-chip> -->\r\n                            </td>\r\n\r\n                        </tr>\r\n                        <tr>\r\n                            <th>Modification No:</th>\r\n                            <td>\r\n                                <!-- /   <mat-chip >{{fetchUserSingle.modNo}}</mat-chip> -->\r\n                            </td>\r\n                            <!-- <th>Creation Date:</th>\r\n                                <td>\r\n                                  <mat-chip>{{masterresponse.modifiedTime | date:'d/M/yy'}}</mat-chip>\r\n                                </td> -->\r\n                            <th>Authorized Date:</th>\r\n                            <td>\r\n                                <!-- <mat-chip >{{fetchUserSingle.verifiedTime | date:'d/M/yy'}}</mat-chip> -->\r\n                            </td>\r\n                            <th> Frist Auth Status:</th>\r\n                            <td>\r\n\r\n                                <!-- <mat-chip >{{fetchUserSingle.verifiedOnce}}</mat-chip> -->\r\n\r\n                            </td>\r\n                            <th>Authorized By:</th>\r\n                            <td>\r\n                                <!-- <mat-chip >{{fetchUserSingle.verifiedBy}}</mat-chip> -->\r\n                            </td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex></div>\r\n\r\n</div>\r\n<br>";
    /***/
  },

  /***/
  "./src/app/views/transaction-group-maintenance/global-gl-ac-code-maint-summary/gl-gl-acc-routing.module.ts":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/views/transaction-group-maintenance/global-gl-ac-code-maint-summary/gl-gl-acc-routing.module.ts ***!
    \*****************************************************************************************************************/

  /*! exports provided: glRoutes, TransactionGroupMaintenanceRoutingModule */

  /***/
  function srcAppViewsTransactionGroupMaintenanceGlobalGlAcCodeMaintSummaryGlGlAccRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "glRoutes", function () {
      return glRoutes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionGroupMaintenanceRoutingModule", function () {
      return TransactionGroupMaintenanceRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _global_gl_ac_code_maint_summary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./global-gl-ac-code-maint-summary.component */
    "./src/app/views/transaction-group-maintenance/global-gl-ac-code-maint-summary/global-gl-ac-code-maint-summary.component.ts");
    /* harmony import */


    var _global_gl_ac_code_maint_global_gl_ac_code_maint_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../global-gl-ac-code-maint/global-gl-ac-code-maint.component */
    "./src/app/views/transaction-group-maintenance/global-gl-ac-code-maint/global-gl-ac-code-maint.component.ts");

    var glRoutes = [{
      path: 'gl-maint-system-new',
      component: _global_gl_ac_code_maint_global_gl_ac_code_maint_component__WEBPACK_IMPORTED_MODULE_2__["GlobalGlAcCodeMaintComponent"]
    }, {
      path: '',
      component: _global_gl_ac_code_maint_summary_component__WEBPACK_IMPORTED_MODULE_1__["GlobalGlAcCodeMaintSummaryComponent"]
    }];

    var TransactionGroupMaintenanceRoutingModule = /*#__PURE__*/_createClass(function TransactionGroupMaintenanceRoutingModule() {
      _classCallCheck(this, TransactionGroupMaintenanceRoutingModule);
    });
    /***/

  },

  /***/
  "./src/app/views/transaction-group-maintenance/global-gl-ac-code-maint-summary/glMaintenanceModule.module.ts":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/views/transaction-group-maintenance/global-gl-ac-code-maint-summary/glMaintenanceModule.module.ts ***!
    \*******************************************************************************************************************/

  /*! exports provided: GlMaintenanceModule */

  /***/
  function srcAppViewsTransactionGroupMaintenanceGlobalGlAcCodeMaintSummaryGlMaintenanceModuleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlMaintenanceModule", function () {
      return GlMaintenanceModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/angular-material/angular-material.module */
    "./src/app/shared/angular-material/angular-material.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _gl_gl_acc_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./gl-gl-acc-routing.module */
    "./src/app/views/transaction-group-maintenance/global-gl-ac-code-maint-summary/gl-gl-acc-routing.module.ts");
    /* harmony import */


    var _global_gl_ac_code_maint_global_gl_ac_code_maint_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../global-gl-ac-code-maint/global-gl-ac-code-maint.component */
    "./src/app/views/transaction-group-maintenance/global-gl-ac-code-maint/global-gl-ac-code-maint.component.ts");
    /* harmony import */


    var _global_gl_ac_code_maint_summary_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./global-gl-ac-code-maint-summary.component */
    "./src/app/views/transaction-group-maintenance/global-gl-ac-code-maint-summary/global-gl-ac-code-maint-summary.component.ts");

    var GlMaintenanceModule = /*#__PURE__*/_createClass(function GlMaintenanceModule() {
      _classCallCheck(this, GlMaintenanceModule);
    });

    GlMaintenanceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_global_gl_ac_code_maint_global_gl_ac_code_maint_component__WEBPACK_IMPORTED_MODULE_8__["GlobalGlAcCodeMaintComponent"], _global_gl_ac_code_maint_summary_component__WEBPACK_IMPORTED_MODULE_9__["GlobalGlAcCodeMaintSummaryComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_gl_gl_acc_routing_module__WEBPACK_IMPORTED_MODULE_7__["glRoutes"]), src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"]]
    })], GlMaintenanceModule);
    /***/
  },

  /***/
  "./src/app/views/transaction-group-maintenance/global-gl-ac-code-maint-summary/global-gl-ac-code-maint-summary.component.css":
  /*!***********************************************************************************************************************************!*\
    !*** ./src/app/views/transaction-group-maintenance/global-gl-ac-code-maint-summary/global-gl-ac-code-maint-summary.component.css ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsTransactionGroupMaintenanceGlobalGlAcCodeMaintSummaryGlobalGlAcCodeMaintSummaryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navigation {\r\n  /* width: 300px; */\r\n  height: 100%;\r\n  /* background-image: url('src/assets/images/backgrounds/navbar2.jpg'); */\r\n\r\n}\r\n\r\n\r\ntable{\r\n    width: 100%;\r\n  }\r\n\r\n\r\n/* added by gayathri issueid=0000655 on 18-08-2020 */\r\n\r\n\r\nmat-paginator {\r\n    width: auto !important;\r\n    height: 40px !important;\r\n  }\r\n\r\n\r\nmd-pagination-wrapper {\r\n    width: auto !important;\r\n    height: 40px !important;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdHJhbnNhY3Rpb24tZ3JvdXAtbWFpbnRlbmFuY2UvZ2xvYmFsLWdsLWFjLWNvZGUtbWFpbnQtc3VtbWFyeS9nbG9iYWwtZ2wtYWMtY29kZS1tYWludC1zdW1tYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHdFQUF3RTs7QUFFMUU7OztBQUdBO0lBQ0ksV0FBVztFQUNiOzs7QUFDQyxvREFBb0Q7OztBQUNwRDtJQUNDLHNCQUFzQjtJQUN0Qix1QkFBdUI7RUFDekI7OztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLHVCQUF1QjtFQUN6QiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RyYW5zYWN0aW9uLWdyb3VwLW1haW50ZW5hbmNlL2dsb2JhbC1nbC1hYy1jb2RlLW1haW50LXN1bW1hcnkvZ2xvYmFsLWdsLWFjLWNvZGUtbWFpbnQtc3VtbWFyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRpb24ge1xyXG4gIC8qIHdpZHRoOiAzMDBweDsgKi9cclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9uYXZiYXIyLmpwZycpOyAqL1xyXG5cclxufVxyXG5cclxuXHJcbnRhYmxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gICAvKiBhZGRlZCBieSBnYXlhdGhyaSBpc3N1ZWlkPTAwMDA2NTUgb24gMTgtMDgtMjAyMCAqL1xyXG4gICBtYXQtcGFnaW5hdG9yIHtcclxuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgbWQtcGFnaW5hdGlvbi13cmFwcGVyIHtcclxuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/views/transaction-group-maintenance/global-gl-ac-code-maint-summary/global-gl-ac-code-maint-summary.component.ts":
  /*!**********************************************************************************************************************************!*\
    !*** ./src/app/views/transaction-group-maintenance/global-gl-ac-code-maint-summary/global-gl-ac-code-maint-summary.component.ts ***!
    \**********************************************************************************************************************************/

  /*! exports provided: GlobalGlAcCodeMaintSummaryComponent */

  /***/
  function srcAppViewsTransactionGroupMaintenanceGlobalGlAcCodeMaintSummaryGlobalGlAcCodeMaintSummaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalGlAcCodeMaintSummaryComponent", function () {
      return GlobalGlAcCodeMaintSummaryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _transaction_group_maintenance_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../transaction-group-maintenance-service.service */
    "./src/app/views/transaction-group-maintenance/transaction-group-maintenance-service.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _roles1_roles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../roles1/roles.service */
    "./src/app/views/roles1/roles.service.ts");
    /* harmony import */


    var _roles1_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../roles1/models/fmosNewRolePermissions */
    "./src/app/views/roles1/models/fmosNewRolePermissions.ts");

    var GlobalGlAcCodeMaintSummaryComponent = /*#__PURE__*/function () {
      function GlobalGlAcCodeMaintSummaryComponent(transactionGroupService, roleService, cdr) {
        _classCallCheck(this, GlobalGlAcCodeMaintSummaryComponent);

        this.transactionGroupService = transactionGroupService;
        this.roleService = roleService;
        this.cdr = cdr;
        this.roleCodes = new _roles1_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_6__["permissionsLabels"]();
        this.displayedColumns = ['permission', 'trnCode', 'trnDesc', 'action'];
        this.displayedColumns1 = ['permission', 'trnCode', 'trnDesc', 'action'];
      }

      _createClass(GlobalGlAcCodeMaintSummaryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.getTrndata();
          this.getAccdata();
          this.getNewPermissions();
          this.roleService.screenLabelList.subscribe(function (message) {
            return _this.roleCodes = message;
          });
        }
      }, {
        key: "getNewPermissions",
        value: function getNewPermissions() {
          this.roleService.fetchScreenPermissions('GlobalCodeMaintenance');
          this.cdr.markForCheck();
        }
      }, {
        key: "getTrndata",
        value: function getTrndata() {
          var _this2 = this;

          this.transactionGroupService.getGlData().subscribe(function (trndata) {
            _this2.trndata = trndata;
            console.log('dat gl', _this2.trndata);

            if (_this2.trndata == '' && _this2.trndata1 == '') {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('No GL/Account class code mapped for this user.');
            } else {
              if (_this2.trndata.length !== 0) {
                _this2.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this2.trndata);
                _this2.dataSource.paginator = _this2.paginator1;
                _this2.dataSource.sort = _this2.sort;
              } else {
                // Swal.fire('No transaction code mapped for this user.');
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('No GL code mapped for this user');
              }
            }
          });
        }
      }, {
        key: "getAccdata",
        value: function getAccdata() {
          var _this3 = this;

          this.transactionGroupService.getAccData().subscribe(function (trndata) {
            _this3.trndata1 = trndata;
            console.log(_this3.trndata1);

            if (_this3.trndata == '' && _this3.trndata1 == '') {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('No GL/Account class code mapped for this user.');
            } else {
              if (_this3.trndata1.length !== 0) {
                _this3.dataSource1 = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this3.trndata1);
                _this3.dataSource1.paginator = _this3.paginator2;
                _this3.dataSource1.sort = _this3.sort;
              } else {
                // Swal.fire('No transaction code mapped for this user.');
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('No Account class code mapped for this user.');
              }
            }
          });
        } // getTransactionData()
        // {
        //   console.log("this is data from summary")
        //   this.transactionGroupService.gettingsummaryDataOfTransactionGroupMaintenance().subscribe(backendResp=>{
        //     console.log(backendResp);
        //   })

      }, {
        key: "deleteData",
        value: function deleteData(row) {
          var _this4 = this;

          console.log(row); // write a backend call.

          this.transactionGroupService.deleteGlData(row, this.UserId).subscribe(function (res) {
            _this4.res = res;

            if (_this4.res) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Gl code deleted successfully.'); // this.getTrndata();
              //added by vidya for issue id 705

              _this4.transactionGroupService.getGlData().subscribe(function (trndata) {
                _this4.trndata = trndata;
                _this4.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this4.trndata);
                _this4.dataSource.paginator = _this4.paginator1;
                _this4.dataSource.sort = _this4.sort;
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Unable to delete');
            }
          });
        }
      }, {
        key: "deleteDataAcc",
        value: function deleteDataAcc(row) {
          var _this5 = this;

          console.log(row); // write a backend call.

          this.transactionGroupService.deleteAcData(row, this.UserId).subscribe(function (res) {
            _this5.res = res;

            if (_this5.res) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Account Class deleted successfully'); // this.getAccdata();
              // added by vidya for issue id-705

              _this5.transactionGroupService.getAccData().subscribe(function (trndata) {
                _this5.trndata1 = trndata;

                _this5.cdr.markForCheck();

                _this5.dataSource1 = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this5.trndata1);
                _this5.dataSource1.paginator = _this5.paginator2;
                _this5.dataSource1.sort = _this5.sort;
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Unable to delete');
            }
          });
        }
      }]);

      return GlobalGlAcCodeMaintSummaryComponent;
    }();

    GlobalGlAcCodeMaintSummaryComponent.ctorParameters = function () {
      return [{
        type: _transaction_group_maintenance_service_service__WEBPACK_IMPORTED_MODULE_3__["TransactionGroupMaintenanceServiceService"]
      }, {
        type: _roles1_roles_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paginator1', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])], GlobalGlAcCodeMaintSummaryComponent.prototype, "paginator1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paginator2', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])], GlobalGlAcCodeMaintSummaryComponent.prototype, "paginator2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])], GlobalGlAcCodeMaintSummaryComponent.prototype, "sort", void 0);
    GlobalGlAcCodeMaintSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-global-gl-ac-code-maint-summary',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./global-gl-ac-code-maint-summary.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/transaction-group-maintenance/global-gl-ac-code-maint-summary/global-gl-ac-code-maint-summary.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./global-gl-ac-code-maint-summary.component.css */
      "./src/app/views/transaction-group-maintenance/global-gl-ac-code-maint-summary/global-gl-ac-code-maint-summary.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_transaction_group_maintenance_service_service__WEBPACK_IMPORTED_MODULE_3__["TransactionGroupMaintenanceServiceService"], _roles1_roles_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], GlobalGlAcCodeMaintSummaryComponent);
    /***/
  },

  /***/
  "./src/app/views/transaction-group-maintenance/global-gl-ac-code-maint/global-gl-ac-code-maint.component.css":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/views/transaction-group-maintenance/global-gl-ac-code-maint/global-gl-ac-code-maint.component.css ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsTransactionGroupMaintenanceGlobalGlAcCodeMaintGlobalGlAcCodeMaintComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".secondMatCard{\r\n    width: 450px;\r\n    border-radius: 9px;\r\n    margin-top: 5%;\r\n    margin-left: 30%;\r\n   \r\n}\r\nbody{\r\n    height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdHJhbnNhY3Rpb24tZ3JvdXAtbWFpbnRlbmFuY2UvZ2xvYmFsLWdsLWFjLWNvZGUtbWFpbnQvZ2xvYmFsLWdsLWFjLWNvZGUtbWFpbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy90cmFuc2FjdGlvbi1ncm91cC1tYWludGVuYW5jZS9nbG9iYWwtZ2wtYWMtY29kZS1tYWludC9nbG9iYWwtZ2wtYWMtY29kZS1tYWludC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY29uZE1hdENhcmR7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgIFxyXG59XHJcbmJvZHl7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/views/transaction-group-maintenance/global-gl-ac-code-maint/global-gl-ac-code-maint.component.ts":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/views/transaction-group-maintenance/global-gl-ac-code-maint/global-gl-ac-code-maint.component.ts ***!
    \******************************************************************************************************************/

  /*! exports provided: GlobalGlAcCodeMaintComponent, GlData, AccClassData */

  /***/
  function srcAppViewsTransactionGroupMaintenanceGlobalGlAcCodeMaintGlobalGlAcCodeMaintComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalGlAcCodeMaintComponent", function () {
      return GlobalGlAcCodeMaintComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlData", function () {
      return GlData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccClassData", function () {
      return AccClassData;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _transaction_group_maintenance_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../transaction-group-maintenance-service.service */
    "./src/app/views/transaction-group-maintenance/transaction-group-maintenance-service.service.ts");

    var GlobalGlAcCodeMaintComponent = /*#__PURE__*/function () {
      function GlobalGlAcCodeMaintComponent(transactionGroupService, tranService) {
        _classCallCheck(this, GlobalGlAcCodeMaintComponent);

        this.transactionGroupService = transactionGroupService;
        this.tranService = tranService;
        this.transactionGroupEntries = [{
          trnDesc: '',
          trnCode: ''
        }];
        this.gllist = [{
          trnDesc: '',
          trnCode: '',
          permission: ''
        }];
        this.gllist1 = [{
          trnDesc: '',
          trnCode: '',
          permission: ''
        }];
        this.AccClass = [{
          trnDesc: '',
          trnCode: '',
          permission: ''
        }];
        this.AccClass1 = [{
          trnDesc: '',
          trnCode: '',
          permission: ''
        }];
      }

      _createClass(GlobalGlAcCodeMaintComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.loginUser = localStorage.getItem('userFromLogin'); // this.tranService.getUserName().subscribe(userName => {
          //   this.userName = userName;
          //   if (this.userName) {
          //     // this.userName=userName.userI;
          //     console.log(this.userName);
          //   } else {
          //     Swal.fire('No Data For User.');
          //   } this.transactionGroupService.getGlData().subscribe(trndata => {

          this.transactionGroupService.getGlData().subscribe(function (trndata) {
            _this6.gllist1 = trndata;
            console.log('backend gl data', trndata); // console.log(this.trnData[0].permission);

            console.log(_this6.gllist1.length);

            if (_this6.gllist1.length != 0) {
              _this6.permission = _this6.gllist1[0].permission;
              console.log("trnDAta", _this6.gllist);
              console.log("permission is " + _this6.permission);

              _this6.permission1(_this6.permission);
            } else {
              _this6.permission2();

              console.log("**************************");
            }
          });
          this.transactionGroupService.getAccData().subscribe(function (accdata) {
            _this6.AccClass1 = accdata;
            console.log(_this6.AccClass1);

            if (_this6.AccClass1.length != 0) {
              _this6.permission = _this6.AccClass1[0].permission;

              _this6.permission3(_this6.permission);
            } else {
              _this6.permission4();

              console.log("**************************");
            }
          });
          console.log("permission is", this.permission); // });
          // this.userName = ['Allow', 'Disallow']
        }
      }, {
        key: "addDataOfTransactionGroupEntries",
        value: function addDataOfTransactionGroupEntries() {
          this.transactionGroupEntries.push({
            trnDesc: '',
            trnCode: ''
          }); //console.log(this.transactionGroupEntries);
        }
      }, {
        key: "removeDataOfTransactionGroup",
        value: function removeDataOfTransactionGroup(i) {
          this.transactionGroupEntries.splice(i, 1);
        } //gl

      }, {
        key: "addgllist",
        value: function addgllist() {
          this.gllist.push({
            trnDesc: '',
            trnCode: ''
          }); //console.log(this.transactionGroupEntries);
        }
      }, {
        key: "removegllist",
        value: function removegllist(i) {
          this.gllist.splice(i, 1);
        } //for account

      }, {
        key: "addAccClass",
        value: function addAccClass() {
          this.AccClass.push({
            trnDesc: '',
            trnCode: ''
          }); //console.log(this.transactionGroupEntries);
        }
      }, {
        key: "removeaddAccClass",
        value: function removeaddAccClass(i) {
          this.AccClass.splice(i, 1);
        } // onSubmitOfTransactionGroup() {
        //   // console.log('this is transaction Grpup');
        //   // console.log(this.UserId);
        //   if (!this.UserId) {
        //     Swal.fire('Enter User Id.')
        //     return;
        //   }
        //   if (!this.transactionGroupEntries[0].trnDesc && !this.transactionGroupEntries[0].trnCode) {
        //     Swal.fire({
        //       title: 'Please Enter All The Fields',
        //       type: 'warning'
        //     });
        //     return;
        //   } else {
        //     // this.trnData.userId = this.UserId;
        //     // console.log(this.UserId);
        //     // console.log(this.transactionGroupEntries);
        //     this.tranService.saveTrnCode(this.transactionGroupEntries, this.UserId).subscribe(savetrnres => {
        //       this.savetrnres = savetrnres;
        //       if (this.savetrnres) {
        //         Swal.fire('Data Saved.');
        //       } else {
        //         Swal.fire('Unable to save Data.');
        //       }
        //     });
        //   }
        // }

      }, {
        key: "onSubmitGLCode",
        value: function onSubmitGLCode() {
          var _this7 = this;

          if (!this.gllist[0].trnDesc && !this.gllist[0].trnCode) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
              title: 'Please Enter All The Fields'
            });
            return;
          } else {
            console.log(this.gllist);
            this.gllist.forEach(function (element) {
              element.permission = _this7.UserId;
            });
            console.log(this.gllist); // this.trnData.permission = this.UserId;
            // console.log(this.UserId);
            // console.log(this.transactionGroupEntries);

            this.tranService.gsaveGlCode(this.gllist, this.loginUser).subscribe(function (savetrnres) {
              _this7.savetrnres = savetrnres;

              if (_this7.savetrnres) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Data Saved.');
                _this7.showSubmit = true;
              } else {
                // Swal.fire('Unable to save Data.');
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Duplicates not allowed');
              }
            });
          }
        }
      }, {
        key: "onSubmitActClass",
        value: function onSubmitActClass() {
          var _this8 = this;

          // console.log('this is transaction Grpup');
          // console.log(this.UserId);
          // if (!this.UserId) {
          //   Swal.fire('Enter User Id.')
          //   return;
          // }
          if (!this.AccClass[0].trnDesc && !this.AccClass[0].trnCode) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
              title: 'Please Enter All The Fields',
              type: 'warning'
            });
            return;
          } else {
            this.AccClass.forEach(function (element) {
              element.permission = _this8.UserId;
            });
            console.log(this.gllist);
            this.tranService.gsaveAccountCode(this.AccClass, this.loginUser).subscribe(function (savetrnres) {
              _this8.savetrnres = savetrnres;

              if (_this8.savetrnres) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Data Saved');
                _this8.showSubmit = true;
              } else {
                // Swal.fire('Unable to save Data');
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Duplicates not allowed');
              }
            });
          }
        }
      }, {
        key: "permission1",
        value: function permission1(permission) {
          console.log(permission);
          this.userName = [permission];
        }
      }, {
        key: "permission2",
        value: function permission2() {
          this.userName = ['Allow', 'Disallow'];
        }
      }, {
        key: "permission3",
        value: function permission3(permission) {
          console.log(permission);
          this.userName1 = [permission];
        }
      }, {
        key: "permission4",
        value: function permission4() {
          this.userName1 = ['Allow', 'Disallow'];
        }
      }]);

      return GlobalGlAcCodeMaintComponent;
    }();

    GlobalGlAcCodeMaintComponent.ctorParameters = function () {
      return [{
        type: _transaction_group_maintenance_service_service__WEBPACK_IMPORTED_MODULE_3__["TransactionGroupMaintenanceServiceService"]
      }, {
        type: _transaction_group_maintenance_service_service__WEBPACK_IMPORTED_MODULE_3__["TransactionGroupMaintenanceServiceService"]
      }];
    };

    GlobalGlAcCodeMaintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-global-gl-ac-code-maint',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./global-gl-ac-code-maint.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/transaction-group-maintenance/global-gl-ac-code-maint/global-gl-ac-code-maint.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./global-gl-ac-code-maint.component.css */
      "./src/app/views/transaction-group-maintenance/global-gl-ac-code-maint/global-gl-ac-code-maint.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_transaction_group_maintenance_service_service__WEBPACK_IMPORTED_MODULE_3__["TransactionGroupMaintenanceServiceService"], _transaction_group_maintenance_service_service__WEBPACK_IMPORTED_MODULE_3__["TransactionGroupMaintenanceServiceService"]])], GlobalGlAcCodeMaintComponent);

    var GlData = /*#__PURE__*/_createClass(function GlData() {
      _classCallCheck(this, GlData);
    });

    var AccClassData = /*#__PURE__*/_createClass(function AccClassData() {
      _classCallCheck(this, AccClassData);
    });
    /***/

  }
}]);
//# sourceMappingURL=views-transaction-group-maintenance-global-gl-ac-code-maint-summary-glMaintenanceModule-module-es5.js.map