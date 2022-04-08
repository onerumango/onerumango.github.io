function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-roles1-roles1-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/roles1/role-details/role-details.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/roles1/role-details/role-details.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsRoles1RoleDetailsRoleDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form #modifyRoleObjects=\"ngForm\">\r\n  <div fxLayout=\"row\">\r\n    <span fxFlex></span>\r\n    <div fxFlex=\"60\">\r\n      <mat-card>\r\n        <mat-card-title></mat-card-title>\r\n        <mat-card-content>\r\n          <div fxFlex=\"100\">\r\n            <div class=\"pb-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <mat-label>Role Name</mat-label>\r\n                <input matInput type=\"text\" required [(ngModel)]=\"modifyRoleObject.roleName\" name=\"roleName\" readonly>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"pb-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <mat-label>Role Description</mat-label>\r\n                <input matInput type=\"text\" [(ngModel)]=\"modifyRoleObject.roleDesc\" name=\"roleDesc\" [disabled]=is_edit>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"pb-1\">\r\n              <button id='defaultele' (click)=\"defaulttoggle()\"></button>\r\n              <mat-button-toggle-group name=\"fontStyle\" [value]=\"selectedtab\">\r\n                <mat-button-toggle   *ngFor=\"let col of newRolestabsdata.tabslist;let i = index\" [value]=col.tabname (click)=\"rolestype(i)\">{{col.tabname}}</mat-button-toggle>\r\n              </mat-button-toggle-group> \r\n            <!--  <mat-button-toggle-group name=\"fontStyle\" value=\"admin\">\r\n                <mat-button-toggle  value=\"admin\" (click)=\"changeAdmin()\">Admin</mat-button-toggle>\r\n                <mat-button-toggle  value=\"fms\" (click)=\"changeFms()\">FMS</mat-button-toggle>\r\n                <mat-button-toggle  value=\"monitor\" (click)=\"changeFmsMonitoring()\">FMS Monitoring</mat-button-toggle>\r\n              </mat-button-toggle-group> -->\r\n            </div>\r\n          </div>\r\n\r\n        </mat-card-content>\r\n\r\n      </mat-card>\r\n    </div>\r\n    <span fxFlex></span>\r\n  </div>\r\n\r\n\r\n  <div class=\"margin-333\">\r\n\r\n      <mat-toolbar>\r\n        <!-- All button aligmnet are based  by vidya based on defect id  583-->\r\n        <div fxLayout=\"row\" fxFlex=\"1 1 0%\" fxLayoutAlign=\"center center\" fxLayoutGap=\"5px\">\r\n\r\n          <button type=\"submit\" color=\"primary\" (click)=\"modifyRoles()\"  mat-raised-button *ngIf=\"editFunction\" [disabled]=\"disablesave\">Save</button>\r\n\r\n          <button type=\"text\" class=\"9\" color=\"primary\"  mat-raised-button routerLink=\"/roles1/create\"\r\n            *ngIf=\"roleCodes.new && editFunction2\">{{roleCodes.new.labelDescription}}</button>\r\n          <button type=\"text\" id=\"5\" color=\"primary\"  mat-raised-button (click)=\"changeStatus()\"\r\n            *ngIf=\"roleCodes.edit && editFunction2 && modifyRoleObject.recordStatus == 'OPEN'\">{{roleCodes.edit.labelDescription}}</button>\r\n            <button type=\"text\" id=\"7\" color=\"primary\"  mat-raised-button (click)=\"verifyRole(modifyRoleObject.roleName)\"\r\n            *ngIf=\"roleCodes.auth  && modifyRoleObject.authStatus=='UNAUTHORISED'  && editFunction2\">{{roleCodes.auth.labelDescription}}</button>\r\n            <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"deleteRole(modifyRoleObject.roleName)\"\r\n            *ngIf=\"roleCodes.delete && modifyRoleObject.firstTimeAuth=='NO' && editFunction2\">{{roleCodes.delete.labelDescription}}</button>\r\n\r\n          <button type=\"text\" id=\"2\" color=\"primary\"  mat-raised-button (click)=\"closelockRecord(modifyRoleObject.roleName)\"\r\n            *ngIf=\"roleCodes.close  && modifyRoleObject.recordStatus == 'OPEN'  && modifyRoleObject.firstTimeAuth=='YES' &&editFunction2 \" >{{roleCodes.close.labelDescription}}</button>\r\n            \r\n          <button type=\"text\" id=\"4\" color=\"primary\"  mat-raised-button (click)=\"reopenRecord(modifyRoleObject.roleName)\"\r\n            *ngIf=\"roleCodes.reopen  &&  modifyRoleObject.recordStatus == 'CLOSE'  && modifyRoleObject.authStatus=='AUTHORISED'&& editFunction2  \">{{roleCodes.reopen.labelDescription}}</button>\r\n         \r\n            <button type=\"text\" color=\"warn\" mat-raised-button routerLink=\"/roles1/summary\" style=\"float:right;\">Exit</button>              \r\n    </div>\r\n        <!-- <div fxLayout=\"row\" fxFlex=\"1 1 0%\" fxLayoutAlign=\"center center\" fxLayoutGap=\"5px\">\r\n\r\n              <button type=\"submit\" color=\"primary\" (click)=\"modifyRoles()\"  mat-raised-button *ngIf=\"editFunction\" [disabled]=\"disablesave\">Save</button>\r\n              <button type=\"text\" color=\"warn\" mat-raised-button routerLink=\"/roles1/summary\" style=\"float:right;\">Exit</button>\r\n              <button type=\"text\" class=\"9\" color=\"primary\"  mat-raised-button routerLink=\"/roles1/create\"\r\n                *ngIf=\"roleCodes.new && editFunction2\">{{roleCodes.new.labelDescription}}</button>\r\n              <button type=\"text\" id=\"5\" color=\"primary\"  mat-raised-button (click)=\"changeStatus()\"\r\n                *ngIf=\"roleCodes.edit && editFunction2\">{{roleCodes.edit.labelDescription}}</button>\r\n                <button type=\"button\" mat-raised-button color=\"warn\" (click)=\"deleteRole(modifyRoleObject.roleName)\"\r\n                *ngIf=\"roleCodes.delete && modifyRoleObject.firstTimeAuth=='NO' && editFunction2\">{{roleCodes.delete.labelDescription}}</button>\r\n              <button type=\"text\" id=\"2\" color=\"primary\"  mat-raised-button (click)=\"closelockRecord(modifyRoleObject.roleName)\"\r\n                *ngIf=\"roleCodes.close  && modifyRoleObject.recordStatus == 'OPEN' && editFunction2 && modifyRoleObject.authStatus=='A'\">{{roleCodes.close.labelDescription}}</button>\r\n              <button type=\"text\" id=\"4\" color=\"primary\"  mat-raised-button (click)=\"reopenRecord(modifyRoleObject.roleName)\"\r\n                *ngIf=\"roleCodes.reopen  &&  modifyRoleObject.recordStatus == 'CLOSE' && editFunction2 && modifyRoleObject.authStatus=='A'\">{{roleCodes.reopen.labelDescription}}</button>\r\n              <button type=\"text\" id=\"7\" color=\"primary\"  mat-raised-button (click)=\"verifyRole(modifyRoleObject.roleName)\"\r\n                *ngIf=\"roleCodes.auth  && modifyRoleObject.authStatus=='UNAUTHORISED' && editFunction2\">{{roleCodes.auth.labelDescription}}</button>\r\n              \r\n        </div> -->\r\n      </mat-toolbar>\r\n\r\n    <h4>{{responseError}}</h4>\r\n \r\n    <!-- roles table-->\r\n       <!--roles tab-->\r\n       <!--end of roles tab-->\r\n         <div class=\"margin-333\">\r\n       <mat-table  [dataSource]=\"datasource.list\" class='dyntable'>\r\n        <ng-container [matColumnDef]=\"column\" *ngFor=\"let column of displayedcolumns;let i = index;\"> \r\n            <span *ngIf=\"i === 1\">\r\n              <mat-header-cell *matHeaderCellDef class='mathead'>\r\n                <mat-checkbox (change)=\"$event ? masterToggle(i) : null\"\r\n                              [checked]=\"selection.hasValue(i) && isAllSelected(i)\"\r\n                              [indeterminate]=\"selection.hasValue(i) && !isAllSelected(i)\"\r\n                              [aria-label]=\"checkboxLabel(i)\" [disabled]=is_edit>Select All\r\n                </mat-checkbox> \r\n              </mat-header-cell>\r\n              <mat-cell *matCellDef=\"let row;let matIndex = index;\"> \r\n                <mat-checkbox (click)=\"$event.stopPropagation(i)\" id='checkbox_{{matIndex}}'\r\n                              (change)=\"$event ? selection.toggle(row, i) : null;selectrow($event, matIndex, i)\"\r\n                              [checked]=\"selection.isSelected(row, i)\"\r\n                              [aria-label]=\"checkboxLabel(row, i)\" [disabled]=is_edit>\r\n                </mat-checkbox>\r\n              </mat-cell>\r\n            </span>\r\n            <span *ngIf=\"i !== 1\">\r\n              <mat-header-cell  *matHeaderCellDef>\r\n              {{column}}\r\n              </mat-header-cell>\r\n              <mat-cell *matCellDef=\"let element;let rIndex = index;\">\r\n                <mat-checkbox *ngIf=\"element[column] == '0' || element[column] == '1'\"  [checked]=\"checkedvalue(checkedlist[rIndex][i].value, rIndex, i)\"  (change)=\"onChange($event, rIndex, i, element[column])\" name=\"element[column]\" [disabled]=is_edit></mat-checkbox> \r\n                <span  *ngIf=\"element[column] != '0' && element[column] != '1' \">{{element[column]}} </span>\r\n              </mat-cell>\r\n            </span>\r\n        </ng-container>\r\n        <mat-header-row *matHeaderRowDef=\"displayedcolumns\"></mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns:displayedcolumns;\"></mat-row> \r\n      </mat-table>\r\n         </div>\r\n  </div>\r\n  <mat-card  style=\"width: 70%;  margin-left:280px;\">\r\n    <mat-card-title>\r\n    </mat-card-title>\r\n    <mat-card-content>\r\n  <table id=\"customers\">\r\n\r\n    \r\n      <tr>\r\n        <th>Maker :</th>\r\n        <td>\r\n          <mat-chip>{{modifyRoleObject.maker}}</mat-chip>\r\n        </td>\r\n        <th>Checker :</th>\r\n        <td>\r\n          <mat-chip>{{modifyRoleObject.verifierId}}</mat-chip>\r\n        </td>\r\n        <th>Auth Status :</th>\r\n        <td>\r\n          <mat-chip>{{modifyRoleObject.authStatus}}</mat-chip>\r\n        </td>\r\n\r\n       \r\n      </tr>\r\n      <tr>\r\n        <th>Maker Time Stamp :</th>\r\n        <td>\r\n          <mat-chip>{{modifyRoleObject.makerDtStamp | date: 'MM/dd/yyyy, h:mm a'}}</mat-chip>\r\n        </td>\r\n        <th>Checker Time Stamp :</th>\r\n        <td>\r\n          <mat-chip>{{modifyRoleObject.checkerDtStamp | date: 'MM/dd/yyyy, h:mm a'}}</mat-chip>\r\n        </td>\r\n        <th> First Time Auth :</th>\r\n        <td>\r\n          <mat-chip>{{modifyRoleObject.firstTimeAuth}}</mat-chip>\r\n        </td>\r\n       \r\n\r\n      </tr>\r\n      <tr>\r\n        <th>Record Status:</th>\r\n        <td>\r\n          <mat-chip>{{modifyRoleObject.recordStatus}}</mat-chip>\r\n        </td>\r\n        \r\n      </tr>\r\n    \r\n  </table>\r\n    </mat-card-content>\r\n  </mat-card>\r\n\r\n  <!-- <div class=\"margin-333 pad20\">\r\n      \r\n      <table class=\"default-table default-bg mat-elevation-z1\" style=\"width: 100%\">\r\n\r\n        <tbody>\r\n          <tr>\r\n\r\n            <td>\r\n              <p>Maker : <span>{{modifyRoleObject.maker}}</span></p>\r\n            </td>\r\n            <td>\r\n              <p>Checker : <span>{{modifyRoleObject.verifierId}}</span></p>\r\n            </td>\r\n            <td>\r\n              <p>Auth Status : <span>{{modifyRoleObject.authStatus}}</span></p>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>\r\n              <p>Maker Time Stamp : <span>{{modifyRoleObject.makerDtStamp |  date: 'MM/dd/yyyy, h:mm a'}}</span></p>\r\n            </td>\r\n            <td>\r\n              <p>Checker Time Stamp : <span>{{modifyRoleObject.checkerDtStamp | date: 'MM/dd/yyyy, h:mm a'}}</span></p>\r\n            </td>\r\n            <td>\r\n              <p> First Time Auth : <span>{{modifyRoleObject.firstTimeAuth}}</span></p>\r\n            </td>\r\n\r\n          </tr>\r\n          <tr>\r\n            <td>\r\n              <p> Record Status: <span>{{modifyRoleObject.recordStatus}}</span></p>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n  </div> -->\r\n</form>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/roles1/role-list/role-list.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/roles1/role-list/role-list.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsRoles1RoleListRoleListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card>\r\n    <mat-card-title>Role Management</mat-card-title>\r\n  <mat-card-content>\r\n    <div fxLayout=\"row\">\r\n      <div fxFlex=\"30\">\r\n        <div class=\"mt-12\">\r\n          <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div fxLayout=\"row\" fxFlex=\"1 1 0%\" fxLayoutAlign=\"end center\" fxLayoutGap=\"5px\">\r\n          <!-- *ngIf=\"roleCodes.new2 == 'true'\" *ngIf=\"mapToSearch.hasOwnProperty(keyToFind)\" -->\r\n          <button mat-raised-button color=\"primary\" routerLink=\"/roles1/create\" *ngIf=\"roleCodes.new\"\r\n          >{{roleCodes.new.labelDescription}}</button>\r\n     <button mat-raised-button color=\"warn\" routerLink=\"/dashboard\">Exit</button>\r\n        \r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"margin-333\">\r\n      <div>\r\n        <table mat-table  matSort [dataSource]=\"dataSource\" matSortActive=\"makerDtStamp\" matSortDirection=\"desc\">\r\n          <!-- Position Column -->\r\n          <ng-container matColumnDef=\"roleName\" >\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header >Role Name</th>\r\n            <td mat-cell *matCellDef=\"let element; let i=index;\" ><a routerLink=\"\"\r\n                (click)=\"getRole(element)\">{{element.roleName}}</a> </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"roleDesc\">\r\n            <th mat-header-cell *matHeaderCellDef >Role Description</th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.roleDesc}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"authStatus\" >\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header >Auth Status</th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.authStatus}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"recordStatus\">\r\n            <th mat-header-cell *matHeaderCellDef >Record Status</th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.recordStatus}} </td>\r\n          </ng-container>\r\n\r\n<ng-container matColumnDef=\"makerDtStamp\"  >\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header >Date</th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.makerDtStamp | date}} </td>\r\n          </ng-container>\r\n\r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n        <mat-paginator (page)='onPaginateChange($event)' [pageSize]='pageSize' [pageSizeOptions]=\"[5, 10, 20]\"\r\n          showFirstLastButtons>\r\n        </mat-paginator>\r\n      </div>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n<br /><br />\r\n  <br /><br />\r\n  <br /><br />\r\n  <br /><br />";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/roles1/roles1.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/roles1/roles1.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsRoles1Roles1ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\" style=\"height:30px; font-size: small;\">\r\n  <span>Role Management</span>\r\n</mat-toolbar>\r\n<br>\r\n<form #roleForm=\"ngForm\" novalidate>\r\n  <!-- <h3>{{responseError}}</h3> -->\r\n  <div fxLayout=\"row\">\r\n    <span fxFlex></span>\r\n    <div fxFlex=\"60\">\r\n      <mat-card>\r\n        <mat-card-title></mat-card-title>\r\n        <mat-card-content>\r\n          <div fxFlex=\"100\">\r\n            <div class=\"pb-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <mat-label>Role Name</mat-label>\r\n                <input matInput type=\"text\" oninput=\"this.value = this.value.toUpperCase()\" (keyup)=\"fn(role.roleName)\" required\r\n                 [(ngModel)]=\"role.roleName\" name=\"roleName\" #roleName=\"ngModel\">\r\n                  <mat-error [hidden]=\"roleName.valid || roleName.pristine\">\r\n                    Please enter a Role Name\r\n                  </mat-error>\r\n                  <!-- <mat-error [hidden]=\"space\">\r\n                    Please enter a Role Name\r\n                  </mat-error> -->\r\n                  \r\n\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"pb-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <mat-label>Role Description</mat-label>\r\n                <input matInput type=\"text\" [(ngModel)]=\"role.roleDesc\" name=\"roleDesc\"  #roleDesc=\"ngModel\" required>\r\n                <mat-error [hidden]=\"roleDesc.valid || roleDesc.pristine\">\r\n                  Please enter a Role Description\r\n                </mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"pb-1\">\r\n            <!--  <mat-button-toggle-group name=\"fontStyle\" value=\"admin\">\r\n                <mat-button-toggle value=\"admin\" (click)=\"changeAdmin()\">Admin</mat-button-toggle>\r\n                <mat-button-toggle value=\"fms\" (click)=\"changeFms()\">FMS</mat-button-toggle>\r\n                <mat-button-toggle value=\"monitor\" (click)=\"changeFmsMonitoring()\">FMS Monitoring</mat-button-toggle>\r\n              </mat-button-toggle-group> -->\r\n              <mat-button-toggle-group name=\"fontStyle\" [value]=\"selectedtab\">\r\n                <mat-button-toggle   *ngFor=\"let col of newfmostabsdata.tabslist;let i = index\" [value]=col.tabname (click)=\"rolestype(i)\">{{col.tabname}}</mat-button-toggle>\r\n              </mat-button-toggle-group>\r\n            </div>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <span fxFlex></span>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"margin-333\">\r\n   <!-- <mat-table  [dataSource]=\"datasource.list\" class='dyntable'>\r\n      <ng-container [matColumnDef]=\"column\" *ngFor=\"let column of displayedcolumns;let i = index;\"> \r\n          <span *ngIf=\"i === 1\">\r\n            <mat-header-cell *matHeaderCellDef class='mathead'>\r\n              <mat-checkbox (change)=\"$event ? masterToggle(i) : null\"\r\n                            [checked]=\"selection.hasValue(i) && isAllSelected(i)\"\r\n                            [indeterminate]=\"selection.hasValue(i) && !isAllSelected(i)\"\r\n                            [aria-label]=\"checkboxLabel(i)\" [disabled]=is_edit>\r\n              </mat-checkbox>\r\n            </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row;let matIndex = index;\">\r\n              <mat-checkbox (click)=\"$event.stopPropagation(i)\"\r\n                            (change)=\"$event ? selection.toggle(row, i) : null;selectrow($event, matIndex, i)\"\r\n                            [checked]=\"selection.isSelected(row, i)\"\r\n                            [aria-label]=\"checkboxLabel(row, i)\" [disabled]=is_edit>\r\n              </mat-checkbox>\r\n            </mat-cell>\r\n          </span>\r\n          <span *ngIf=\"i !== 1\">\r\n            <mat-header-cell  *matHeaderCellDef>\r\n            {{column}}\r\n            </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element;let rIndex = index;\">\r\n              <mat-checkbox *ngIf=\"element[column] == '0' || element[column] == '1'\"  [checked]=\"checkedvalue(checkedlist[rIndex][i].value, rIndex, i)\"  (change)=\"onChange($event, rIndex, i, element[column])\" name=\"element[column]\" [disabled]=is_edit></mat-checkbox> \r\n              <span  *ngIf=\"element[column] != '0' && element[column] != '1' \">{{element[column]}} </span>\r\n            </mat-cell>\r\n          </span>\r\n      </ng-container>\r\n      <mat-header-row *matHeaderRowDef=\"displayedcolumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns:displayedcolumns;\"></mat-row> \r\n    </mat-table> -->\r\n    <mat-table  [dataSource]=\"datasource.list\" class='dyntable'>\r\n      <ng-container [matColumnDef]=\"column\" *ngFor=\"let column of displayedcolumns;let i = index;\"> \r\n          <span *ngIf=\"i === 1\">\r\n            <mat-header-cell *matHeaderCellDef class='mathead'>\r\n              <mat-checkbox (change)=\"$event ? masterToggle(i) : null\"\r\n                            [checked]=\"selection.hasValue(i) && isAllSelected(i)\"\r\n                            [indeterminate]=\"selection.hasValue(i) && !isAllSelected(i)\"\r\n                            [aria-label]=\"checkboxLabel(i)\" [disabled]=is_edit>\r\n              </mat-checkbox>\r\n            </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row;let matIndex = index;\">\r\n              <mat-checkbox (click)=\"$event.stopPropagation(i)\"\r\n                            (change)=\"$event ? selection.toggle(row, i) : null;selectrow($event, matIndex, i)\"\r\n                            [checked]=\"selection.isSelected(row, i)\"\r\n                            [aria-label]=\"checkboxLabel(row, i)\" [disabled]=is_edit>\r\n              </mat-checkbox>\r\n            </mat-cell>\r\n          </span>\r\n          <span *ngIf=\"i !== 1\">\r\n            <mat-header-cell  *matHeaderCellDef>\r\n            {{column}}\r\n            </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element;let rIndex = index;\">\r\n              <mat-checkbox *ngIf=\"element[column] == '0' || element[column] == '1'\"  [checked]=\"checkedvalue(checkedlist[rIndex][i].value, rIndex, i)\"  (change)=\"onChange($event, rIndex, i, element[column])\" name=\"element[column]\" [disabled]=is_edit></mat-checkbox> \r\n              <span  *ngIf=\"element[column] != '0' && element[column] != '1' \">{{element[column]}} </span>\r\n            </mat-cell>\r\n          </span>\r\n      </ng-container>\r\n      <mat-header-row *matHeaderRowDef=\"displayedcolumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns:displayedcolumns;\"></mat-row> \r\n    </mat-table>\r\n   <!-- sneha comment <table class=\"default-table default-bg mat-elevation-z1\" style=\"width: 100%\">\r\n      <thead>\r\n        <tr>\r\n\r\n          <th scope=\"col\">Screen</th>&nbsp;\r\n          <th scope=\"col\">New</th>\r\n          <th scope=\"col\">Edit</th>\r\n          <th scope=\"col\">Delete</th>\r\n          <th scope=\"col\">Close</th>\r\n          <th scope=\"col\">Reopen</th>\r\n          <th scope=\"col\">Unlock</th>\r\n          <th scope=\"col\">Print</th>\r\n          <th scope=\"col\">Auth</th>\r\n          <th scope=\"col\">View</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n\r\n        <tr id=\"1\" *ngIf=\"rowPermission\">\r\n          <td>Users</td>&nbsp;\r\n\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.new1\" name=\"new1\" ngChecked=\"all\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.copy1\" name=\"copy1\" ng-checked=\"all\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.delete1\" name=\"delete1\" [checked]=\"delete1\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.close1\" name=\"close1\" [checked]=\"select1\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.reopen1\" name=\"reopen1\" [checked]=\"select1\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.unlock1\" name=\"unlock1\" [checked]=\"select1\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.print1\" name=\"print1\" [checked]=\"select1\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.auth1\" name=\"auth1\" [checked]=\"select1\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.view1\" name=\"view1\" [checked]=\"select1\"></mat-checkbox>\r\n          </td>\r\n\r\n\r\n        </tr>\r\n\r\n        <tr id=\"2\" *ngIf=\"rowPermission\">\r\n          <td> Role</td>&nbsp;\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.new2\" name=\"new2\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.copy2\" name=\"copy2\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.delete2\" name=\"delete2\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.close2\" name=\"close2\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.reopen2\" name=\"reopen2\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.unlock2\" name=\"unlock2\"></mat-checkbox>\r\n          </td>\r\n\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.print2\" name=\"print2\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.auth2\" name=\"auth2\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.view2\" name=\"view2\"></mat-checkbox>\r\n          </td>\r\n        </tr>\r\n\r\n        <tr id=\"3\" *ngIf=\"medianPermission\">\r\n          <td>External System</td>&nbsp;\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.new3\" name=\"new3\"></mat-checkbox> <input type=\"checkbox\" id=\"new3\">\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.copy3\" name=\"copy3\"></mat-checkbox> <input type=\"checkbox\" id=\"copy3\">\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.delete3\" name=\"delete3\"></mat-checkbox> <input type=\"checkbox\" id=\"delete3\">\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.close3\" name=\"close3\"></mat-checkbox> <input type=\"checkbox\" id=\"close3\">\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.reopen3\" name=\"reopen3\"></mat-checkbox> <input type=\"checkbox\" id=\"reopen3\">\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.unlock3\" name=\"unlock3\"></mat-checkbox> <input type=\"checkbox\" id=\"unlock3\">\r\n          </td>\r\n\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.print3\" name=\"print3\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.auth3\" name=\"auth3\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.view3\" name=\"view3\"></mat-checkbox>\r\n          </td>\r\n        </tr>\r\n        <tr id=\"4\" *ngIf=\"medianPermission\">\r\n          <td>Tag</td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.new4\" name=\"new4\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.copy4\" name=\"copy4\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.delete4\" name=\"delete4\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.close4\" name=\"close4\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.reopen4\" name=\"reopen4\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.unlock4\" name=\"unlock4\"></mat-checkbox>\r\n          </td>\r\n\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.print4\" name=\"print4\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.auth4\" name=\"auth4\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.view4\" name=\"view4\"></mat-checkbox>\r\n          </td>\r\n        </tr>\r\n        <tr id=\"5\" *ngIf=\"fms\">\r\n          <td>Database</td>&nbsp;\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.new5\" name=\"new5\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.copy5\" name=\"copy5\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.delete5\" name=\"delete5\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.close5\" name=\"close5\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.reopen5\" name=\"reopen5\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.unlock5\" name=\"unlock5\"></mat-checkbox>\r\n          </td>\r\n\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.print5\" name=\"print5\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.auth5\" name=\"auth5\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.view5\" name=\"view5\"></mat-checkbox>\r\n          </td>\r\n        </tr>\r\n        <tr id=\"6\" *ngIf=\"fms\">\r\n          <td>Customer</td>&nbsp;\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.new6\" name=\"new6\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.copy6\" name=\"copy6\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.delete6\" name=\"delete6\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.close6\" name=\"close6\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.reopen6\" name=\"reopen6\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.unlock6\" name=\"unlock6\"></mat-checkbox>\r\n          </td>\r\n\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.print6\" name=\"print6\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.auth6\" name=\"auth6\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.view6\" name=\"view6\"></mat-checkbox>\r\n          </td>\r\n        </tr>\r\n        <tr id=\"7\" *ngIf=\"fms\">\r\n          <td>Application</td>&nbsp;\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.new7\" name=\"new7\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.copy7\" name=\"copy7\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.delete7\" name=\"delete7\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.close7\" name=\"close7\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.reopen7\" name=\"reopen7\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.unlock7\" name=\"unlock7\"></mat-checkbox>\r\n          </td>\r\n\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.print7\" name=\"print7\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.auth7\" name=\"auth7\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.view7\" name=\"view7\"></mat-checkbox>\r\n          </td>\r\n        </tr>\r\n        <tr id=\"8\" *ngIf=\"fms\">\r\n          <td>Employee</td>&nbsp;\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.new8\" name=\"new8\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.copy8\" name=\"copy8\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.delete8\" name=\"delete8\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.close8\" name=\"close8\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.reopen8\" name=\"reopen8\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.unlock8\" name=\"unlock8\"></mat-checkbox>\r\n          </td>\r\n\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.print8\" name=\"print8\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.auth8\" name=\"auth8\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.view8\" name=\"view8\"></mat-checkbox>\r\n          </td>\r\n        </tr>\r\n        <tr id=\"9\" *ngIf=\"fms\">\r\n          <td>Data Store</td>&nbsp;\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.new9\" name=\"new9\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.copy9\" name=\"copy9\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.delete9\" name=\"delete9\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.close9\" name=\"close9\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.reopen9\" name=\"reopen9\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.unlock9\" name=\"unlock9\"></mat-checkbox>\r\n          </td>\r\n\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.print9\" name=\"print9\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.auth9\" name=\"auth9\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.view9\" name=\"view9\"></mat-checkbox>\r\n          </td>\r\n        </tr>\r\n        <tr id=\"15\" *ngIf=\"fms\">\r\n          <td>Software</td>&nbsp;\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.new15\" name=\"new15\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.copy15\" name=\"copy15\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.delete15\" name=\"delete15\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.close15\" name=\"close15\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.reopen15\" name=\"reopen15\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.unlock15\" name=\"unlock15\"></mat-checkbox>\r\n          </td>\r\n\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.print15\" name=\"print15\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.auth15\" name=\"auth15\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.view15\" name=\"view15\"></mat-checkbox>\r\n          </td>\r\n        </tr>\r\n        <tr id=\"23\" *ngIf=\"fms\">\r\n          <td>Report</td>&nbsp;\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.view23\" name=\"view23\"></mat-checkbox>\r\n          </td>\r\n        </tr>\r\n        <tr id=\"10\" *ngIf=\"rowPermission\">\r\n          <td>Audit Log</td>&nbsp;\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.view10\" name=\"view10\"></mat-checkbox>\r\n          </td>\r\n\r\n\r\n\r\n        </tr>\r\n        <tr id=\"11\" *ngIf=\"fmsMonitor\">\r\n          <td>Db Monitoring</td>&nbsp;\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.view11\" name=\"view11\"></mat-checkbox>\r\n          </td>\r\n        </tr>\r\n        <tr id=\"12\" *ngIf=\"fmsMonitor\">\r\n          <td>Transaction Monitoring</td>&nbsp;\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.view12\" name=\"view12\"></mat-checkbox>\r\n          </td>\r\n        </tr>\r\n        <tr id=\"13\" *ngIf=\"fmsMonitor\">\r\n          <td>Data Store Monitoring</td>&nbsp;\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.view13\" name=\"view13\"></mat-checkbox>\r\n          </td>\r\n        </tr>\r\n        <tr id=\"14\" *ngIf=\"fmsMonitor\">\r\n          <td>Employee Monitoring</td>&nbsp;\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td></td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.view14\" name=\"view14\"></mat-checkbox>\r\n          </td>\r\n        </tr>\r\n        <tr id=\"16\" *ngIf=\"fms\">\r\n          <td>Customer Group</td>&nbsp;\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.new16\" name=\"new16\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.copy16\" name=\"copy16\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.delete16\" name=\"delete16\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.close16\" name=\"close16\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.reopen16\" name=\"reopen16\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.unlock16\" name=\"unlock16\"></mat-checkbox>\r\n          </td>\r\n\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.print16\" name=\"print16\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.auth16\" name=\"auth16\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.view16\" name=\"view16\"></mat-checkbox>\r\n          </td>\r\n        </tr>\r\n        <tr id=\"19\" *ngIf=\"fms\">\r\n          <td>Payment Monitoring</td>&nbsp;\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.new19\" name=\"new19\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.copy19\" name=\"copy19\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.delete19\" name=\"delete19\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.close19\" name=\"close19\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.reopen19\" name=\"reopen19\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.unlock19\" name=\"unlock19\"></mat-checkbox>\r\n          </td>\r\n\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.print19\" name=\"print19\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.auth19\" name=\"auth19\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.view19\" name=\"view19\"></mat-checkbox>\r\n          </td>\r\n        </tr>\r\n        <tr id=\"17\" *ngIf=\"fms\">\r\n          <td>Transaction Monitoring</td>&nbsp;\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.new17\" name=\"new17\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.copy17\" name=\"copy17\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.delete17\" name=\"delete17\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.close17\" name=\"close17\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.reopen17\" name=\"reopen17\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.unlock17\" name=\"unlock7\"></mat-checkbox>\r\n          </td>\r\n\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.print17\" name=\"print17\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.auth17\" name=\"auth17\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.view17\" name=\"view17\"></mat-checkbox>\r\n          </td>\r\n        </tr>\r\n        <tr id=\"20\" *ngIf=\"fms\">\r\n          <td>Generic Transaction</td>&nbsp;\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.new20\" name=\"new20\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.copy20\" name=\"copy20\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.delete20\" name=\"delete20\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.close20\" name=\"close20\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.reopen7\" name=\"reopen20\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.unlock20\" name=\"unlock20\"></mat-checkbox>\r\n          </td>\r\n\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.print20\" name=\"print20\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.auth20\" name=\"auth20\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.view20\" name=\"view20\"></mat-checkbox>\r\n          </td>\r\n        </tr>\r\n        <tr id=\"18\" *ngIf=\"fms\">\r\n          <td>External System</td>&nbsp;\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.new18\" name=\"new18\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.copy18\" name=\"copy18\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.delete18\" name=\"delete18\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.close18\" name=\"close18\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.reopen18\" name=\"reopen18\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.unlock18\" name=\"unlock18\"></mat-checkbox>\r\n          </td>\r\n\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.print18\" name=\"print18\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.auth7\" name=\"auth18\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.view18\" name=\"view18\"></mat-checkbox>\r\n          </td>\r\n        </tr>\r\n        <tr id=\"20\" *ngIf=\"fms\">\r\n          <td>Generic Transaction</td>&nbsp;\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.new20\" name=\"new20\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.copy20\" name=\"copy20\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.delete20\" name=\"delete20\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.close20\" name=\"close20\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.reopen7\" name=\"reopen20\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.unlock20\" name=\"unlock20\"></mat-checkbox>\r\n          </td>\r\n\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.print20\" name=\"print20\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.auth20\" name=\"auth20\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.view20\" name=\"view20\"></mat-checkbox>\r\n          </td>\r\n        </tr>\r\n        <tr id=\"24\" *ngIf=\"fms\">\r\n          <td>Datastore User Maintainance</td>&nbsp;\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.new24\" name=\"new24\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.copy24\" name=\"copy24\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.delete24\" name=\"delete24\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.close24\" name=\"close24\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.reopen24\" name=\"reopen24\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.unlock24\" name=\"unlock24\"></mat-checkbox>\r\n          </td>\r\n\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.print24\" name=\"print24\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.auth24\" name=\"auth24\"></mat-checkbox>\r\n          </td>\r\n          <td>\r\n            <mat-checkbox [(ngModel)]=\"role.view24\" name=\"view24\"></mat-checkbox>\r\n          </td>\r\n        </tr>\r\n\r\n      </tbody>\r\n    </table> -->\r\n  </div>\r\n\r\n  <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"10px\" fxLayoutAlign=\"center center\">\r\n    <button id='defaultele' (click)=\"defaulttoggle()\"></button>\r\n    <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\" [disabled]=\"!space\">Submit</button>\r\n    <button mat-raised-button color=\"warn\" (click)=\"roleForm.reset();reset()\">Reset</button>\r\n    <button mat-raised-button color=\"warn\" routerLink=\"/roles1/summary\">Exit</button>\r\n  </div>\r\n\r\n</form>";
    /***/
  },

  /***/
  "./src/app/views/roles1/models/fmosroledata.ts":
  /*!*****************************************************!*\
    !*** ./src/app/views/roles1/models/fmosroledata.ts ***!
    \*****************************************************/

  /*! exports provided: fmosrolesdata */

  /***/
  function srcAppViewsRoles1ModelsFmosroledataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fmosrolesdata", function () {
      return fmosrolesdata;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var fmosrolesdata = /*#__PURE__*/_createClass(function fmosrolesdata() {
      _classCallCheck(this, fmosrolesdata);
    });
    /***/

  },

  /***/
  "./src/app/views/roles1/models/roles.ts":
  /*!**********************************************!*\
    !*** ./src/app/views/roles1/models/roles.ts ***!
    \**********************************************/

  /*! exports provided: Roles */

  /***/
  function srcAppViewsRoles1ModelsRolesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Roles", function () {
      return Roles;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Roles = /*#__PURE__*/_createClass(function Roles() {
      _classCallCheck(this, Roles);
    });
    /***/

  },

  /***/
  "./src/app/views/roles1/role-details/role-details.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/views/roles1/role-details/role-details.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsRoles1RoleDetailsRoleDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#defaultele {\n  display: none;\n}\n\n.pad20 {\n  padding-top: 20px;\n  padding-left: 20px;\n  margin-top: 30px;\n}\n\ntable {\n  width: 100%;\n}\n\nth {\n  /* text-align: center;\n   */\n  align-content: center;\n}\n\ntable td {\n  padding-right: 50px;\n}\n\n#customers {\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n#customers td, #customers th {\n  border: 1px solid #ddd;\n  padding: 8px;\n  text-align: center;\n}\n\n#customers tr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n#customers th {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #61b2d8;\n  color: white;\n}\n\n.mat-raised-button {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 20px;\n  line-height: 27px;\n  min-height: 27px;\n  vertical-align: top;\n  font-size: 11px;\n  padding: 0 0;\n  margin: 0;\n}\n\nmat-card mat-form-field {\n  font-size: 12px;\n}\n\nmat-card a {\n  font-size: 11px;\n}\n\nmat-card p {\n  font-size: 11px;\n}\n\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: black !important;\n}\n\n::ng-deep .mat-checkbox:not(.mat-checkbox-disabled) .mat-checkbox-ripple .mat-ripple-element {\n  background-color: #fa25b3 !important;\n}\n\nmat-label {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvcm9sZXMxL3JvbGUtZGV0YWlscy9GOlxcbXV0aHUtb25ib2FyZFxcbWVkaWFuLXBoMi11aS9zcmNcXGFwcFxcdmlld3NcXHJvbGVzMVxccm9sZS1kZXRhaWxzXFxyb2xlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL3JvbGVzMS9yb2xlLWRldGFpbHMvcm9sZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBQTtBQ0FKOztBREVBO0VBRUksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FES0E7RUFDSSxXQUFBO0FDRko7O0FES0U7RUFDRTtJQUFBO0VBRUYscUJBQUE7QUNGRjs7QURJRTtFQUNFLG1CQUFBO0FDREo7O0FER0E7RUFDSSx5REFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURHRTtFQUE4Qix5QkFBQTtBQ0NoQzs7QURDRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFFO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0dKOztBRElFO0VBQ0UsZUFBQTtBQ0RKOztBREdFO0VBQ0UsZUFBQTtBQ0FKOztBREVFO0VBQ0UsZUFBQTtBQ0NKOztBRENFO0VBQ0UsdUJBQUE7QUNFSjs7QURBRTtFQUNFLG9DQUFBO0FDR0o7O0FEQUU7RUFFSSxZQUFBO0FDRU4iLCJmaWxlIjoic3JjL2FwcC92aWV3cy9yb2xlczEvcm9sZS1kZXRhaWxzL3JvbGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkZWZhdWx0ZWxlXHJcbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnBhZDIwXHJcbntcclxuICAgIHBhZGRpbmctdG9wOjIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4gICBcclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICB0aHtcclxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAqL1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgdGFibGUgdGQge1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICB9XHJcbiNjdXN0b21lcnMge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4jY3VzdG9tZXJzIHRkLCAjY3VzdG9tZXJzIHRoIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgI2N1c3RvbWVycyB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XHJcbiAgXHJcbiAgI2N1c3RvbWVycyB0aCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDk3LCAxNzgsIDIxNik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgIG1pbi1oZWlnaHQ6IDI3cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuLy8gICBtYXQtY2FyZCAge1xyXG4vLyAgICAgd2lkdGg6IDM1MHB4O1xyXG4vLyAgICAvLyBwYWRkaW5nLXJpZ2h0OiA3MHB4O1xyXG4vLyAgICAgLy8gaGVpZ2h0OiAzNTBweDtcclxuLy8gICB9XHJcbiAgbWF0LWNhcmQgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICBtYXQtY2FyZCBhIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICB9XHJcbiAgbWF0LWNhcmQgcCB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLm1hdC1jaGVja2JveDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkgLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAzNywgMTc5KSAhaW1wb3J0YW50O1xyXG4gIFxyXG4gIH1cclxuICBtYXQtbGFiZWxcclxuICAgIHtcclxuICAgICAgY29sb3I6IGJsYWNrXHJcbiAgICB9XHJcbiAgICAiLCIjZGVmYXVsdGVsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wYWQyMCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoIHtcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyO1xuICAgKi9cbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG50YWJsZSB0ZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG59XG5cbiNjdXN0b21lcnMge1xuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNjdXN0b21lcnMgdGQsICNjdXN0b21lcnMgdGgge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2N1c3RvbWVycyB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuXG4jY3VzdG9tZXJzIHRoIHtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFiMmQ4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjdweDtcbiAgbWluLWhlaWdodDogMjdweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nOiAwIDA7XG4gIG1hcmdpbjogMDtcbn1cblxubWF0LWNhcmQgbWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbm1hdC1jYXJkIGEge1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbm1hdC1jYXJkIHAge1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWNoZWNrYm94Om5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKSAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhMjViMyAhaW1wb3J0YW50O1xufVxuXG5tYXQtbGFiZWwge1xuICBjb2xvcjogYmxhY2s7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/views/roles1/role-details/role-details.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/views/roles1/role-details/role-details.component.ts ***!
    \*********************************************************************/

  /*! exports provided: RoleDetailsComponent */

  /***/
  function srcAppViewsRoles1RoleDetailsRoleDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleDetailsComponent", function () {
      return RoleDetailsComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _models_roles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/roles */
    "./src/app/views/roles1/models/roles.ts");
    /* harmony import */


    var _roles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../roles.service */
    "./src/app/views/roles1/roles.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var _models_fmosroledata__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../models/fmosroledata */
    "./src/app/views/roles1/models/fmosroledata.ts");
    /* harmony import */


    var _models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../models/fmosNewRolePermissions */
    "./src/app/views/roles1/models/fmosNewRolePermissions.ts"); //import { RoleService } from 'app/shared/services/role.service';


    var RoleDetailsComponent = /*#__PURE__*/function () {
      function RoleDetailsComponent(roleService, route, http, cdr, router) {
        _classCallCheck(this, RoleDetailsComponent);

        this.roleService = roleService;
        this.route = route;
        this.http = http;
        this.cdr = cdr;
        this.router = router;
        this.roleCodes = new _models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_10__["permissionsLabels"](); //roleCodes = new Roles();

        this.is_edit = true;
        this.check = 0;
        this.displayedcolumns = [];
        this.checkedlist = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__["SelectionModel"](true, []);
        this.storechecklist = [];
        this.dummydata = {
          roles: {
            name: 'fms',
            description: 'role desc'
          },
          tabslist: [{
            tabname: 'Admin',
            screens: ['database', 'application', 'customer', 'employee'],
            screenlist: [{
              screenname: 'database',
              permission: 111111,
              newpermission: 111111
            }, {
              screenname: 'application',
              permission: 111110,
              newpermission: 111110
            }, {
              screenname: 'customer',
              permission: 111100,
              newpermission: 111100
            }, {
              screenname: 'employee',
              permission: 111000,
              newpermission: 111000
            }],
            labels: ['new', 'edit', 'view', 'delete', 'print', 'auth']
          }, {
            tabname: 'FMS',
            screens: ['fms', 'application', 'customer', 'report'],
            labels: ['new', 'edit', 'view', 'delete', 'print', 'auth'],
            screenlist: [{
              screenname: 'fms',
              permission: 101100,
              newpermission: 101100
            }, {
              screenname: 'application',
              permission: 101100,
              newpermission: 101100
            }, {
              screenname: 'customer',
              permission: 101100,
              newpermission: 101100
            }, {
              screenname: 'report',
              permission: 101100,
              newpermission: 101100
            }]
          }, {
            tabname: 'FMS Monitoring',
            screens: ['FMS Monitoring', 'application', 'customer', 'employee'],
            labels: ['new', 'edit', 'view', 'delete', 'print', 'auth'],
            screenlist: [{
              screenname: 'FMS Monitoring',
              permission: 101100,
              newpermission: 101100
            }, {
              screenname: 'application',
              permission: 101100,
              newpermission: 101100
            }, {
              screenname: 'customer',
              permission: 101100,
              newpermission: 101100
            }, {
              screenname: 'employee',
              permission: 101100,
              newpermission: 101100
            }]
          }]
        };
        this.newRolestabsdata = {
          tabslist: []
        }; //datasource:any={headers:[], list:[]};

        this.datasource = {
          list: [],
          checkedlist: []
        };
        this.previouschecklist = [];
        this.newRolesData = new _models_fmosroledata__WEBPACK_IMPORTED_MODULE_9__["fmosrolesdata"]();
        this.enabledefaulttrigger = true;
        this.modifyRoleObject = new _models_roles__WEBPACK_IMPORTED_MODULE_4__["Roles"]();
      }

      _createClass(RoleDetailsComponent, [{
        key: "getNewPermissions",
        value: function getNewPermissions() {
          this.roleService.fetchScreenPermissions('Roles');
          this.cdr.markForCheck();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.getNewPermissions();
          this.roleService.screenLabelList.subscribe(function (message) {
            return _this.roleCodes = message;
          });
          this.route.queryParams.subscribe(function (params) {
            _this.modifyRoleObject.id = params['id'];
            _this.modifyRoleObject.roleName = params['roleName'];
            _this.modifyRoleObject.roleDesc = params['roleDesc'];
            _this.modifyRoleObject.new1 = params['new1'];
            _this.modifyRoleObject.copy1 = params['copy1'];
            _this.modifyRoleObject.delete1 = params['delete1'];
            _this.modifyRoleObject.close1 = params['close1'];
            _this.modifyRoleObject.unlock1 = params['unlock1'];
            _this.modifyRoleObject.reopen1 = params['reopen1'];
            _this.modifyRoleObject.print1 = params['print1'];
            _this.modifyRoleObject.auth1 = params['auth1'];
            _this.modifyRoleObject.view1 = params['view1'];
            _this.modifyRoleObject.new2 = params['new2'];
            _this.modifyRoleObject.copy2 = params['copy2'];
            _this.modifyRoleObject.delete2 = params['delete2'];
            _this.modifyRoleObject.close2 = params['close2'];
            _this.modifyRoleObject.unlock2 = params['unlock2'];
            _this.modifyRoleObject.reopen2 = params['reopen2'];
            _this.modifyRoleObject.print2 = params['print2'];
            _this.modifyRoleObject.auth2 = params['auth2'];
            _this.modifyRoleObject.view2 = params['view2'];
            _this.modifyRoleObject.new3 = params['new3'];
            _this.modifyRoleObject.copy3 = params['copy3'];
            _this.modifyRoleObject.delete3 = params['delete3'];
            _this.modifyRoleObject.close3 = params['close3'];
            _this.modifyRoleObject.unlock3 = params['unlock3'];
            _this.modifyRoleObject.reopen3 = params['reopen3'];
            _this.modifyRoleObject.print3 = params['print3'];
            _this.modifyRoleObject.auth3 = params['auth3'];
            _this.modifyRoleObject.view3 = params['view3'];
            _this.modifyRoleObject.new4 = params['new4'];
            _this.modifyRoleObject.copy4 = params['copy4'];
            _this.modifyRoleObject.delete4 = params['delete4'];
            _this.modifyRoleObject.close4 = params['close4'];
            _this.modifyRoleObject.unlock4 = params['unlock4'];
            _this.modifyRoleObject.reopen4 = params['reopen4'];
            _this.modifyRoleObject.print4 = params['print4'];
            _this.modifyRoleObject.auth4 = params['auth4'];
            _this.modifyRoleObject.view4 = params['view4'];
            _this.modifyRoleObject.new5 = params['new5'];
            _this.modifyRoleObject.copy5 = params['copy5'];
            _this.modifyRoleObject.delete5 = params['delete5'];
            _this.modifyRoleObject.close5 = params['close5'];
            _this.modifyRoleObject.unlock5 = params['unlock5'];
            _this.modifyRoleObject.reopen5 = params['reopen5'];
            _this.modifyRoleObject.print5 = params['print5'];
            _this.modifyRoleObject.auth5 = params['auth5'];
            _this.modifyRoleObject.view5 = params['view5'];
            _this.modifyRoleObject.new6 = params['new6'];
            _this.modifyRoleObject.copy6 = params['copy6'];
            _this.modifyRoleObject.delete6 = params['delete6'];
            _this.modifyRoleObject.close6 = params['close6'];
            _this.modifyRoleObject.unlock6 = params['unlock6'];
            _this.modifyRoleObject.reopen6 = params['reopen6'];
            _this.modifyRoleObject.print6 = params['print6'];
            _this.modifyRoleObject.auth6 = params['auth6'];
            _this.modifyRoleObject.view6 = params['view6'];
            _this.modifyRoleObject.new7 = params['new7'];
            _this.modifyRoleObject.copy7 = params['copy7'];
            _this.modifyRoleObject.delete7 = params['delete7'];
            _this.modifyRoleObject.close7 = params['close7'];
            _this.modifyRoleObject.unlock7 = params['unlock7'];
            _this.modifyRoleObject.reopen7 = params['reopen7'];
            _this.modifyRoleObject.print7 = params['print7'];
            _this.modifyRoleObject.auth7 = params['auth7'];
            _this.modifyRoleObject.view7 = params['view7'];
            _this.modifyRoleObject.new8 = params['new8'];
            _this.modifyRoleObject.copy8 = params['copy8'];
            _this.modifyRoleObject.delete8 = params['delete8'];
            _this.modifyRoleObject.close8 = params['close8'];
            _this.modifyRoleObject.unlock8 = params['unlock8'];
            _this.modifyRoleObject.reopen8 = params['reopen8'];
            _this.modifyRoleObject.print8 = params['print8'];
            _this.modifyRoleObject.auth8 = params['auth8'];
            _this.modifyRoleObject.view8 = params['view8'];
            _this.modifyRoleObject.new9 = params['new9'];
            _this.modifyRoleObject.copy9 = params['copy9'];
            _this.modifyRoleObject.delete9 = params['delete9'];
            _this.modifyRoleObject.close9 = params['close9'];
            _this.modifyRoleObject.unlock9 = params['unlock9'];
            _this.modifyRoleObject.reopen9 = params['reopen9'];
            _this.modifyRoleObject.print9 = params['print9'];
            _this.modifyRoleObject.auth9 = params['auth9'];
            _this.modifyRoleObject.view9 = params['view9'];
            _this.modifyRoleObject.view10 = params['view10'];
            _this.modifyRoleObject.view11 = params['view11'];
            _this.modifyRoleObject.view12 = params['view12'];
            _this.modifyRoleObject.view13 = params['view13'];
            _this.modifyRoleObject.view14 = params['view14'];
            _this.modifyRoleObject.new15 = params['new15'];
            _this.modifyRoleObject.copy15 = params['copy15'];
            _this.modifyRoleObject.delete15 = params['delete15'];
            _this.modifyRoleObject.close15 = params['close15'];
            _this.modifyRoleObject.unlock15 = params['unlock15'];
            _this.modifyRoleObject.reopen15 = params['reopen15'];
            _this.modifyRoleObject.print15 = params['print15'];
            _this.modifyRoleObject.auth15 = params['auth15'];
            _this.modifyRoleObject.view15 = params['view15'];
            _this.modifyRoleObject.new16 = params['new16'];
            _this.modifyRoleObject.copy16 = params['copy16'];
            _this.modifyRoleObject.delete16 = params['delete16'];
            _this.modifyRoleObject.close16 = params['close16'];
            _this.modifyRoleObject.unlock16 = params['unlock16'];
            _this.modifyRoleObject.reopen16 = params['reopen16'];
            _this.modifyRoleObject.print16 = params['print16'];
            _this.modifyRoleObject.auth16 = params['auth16'];
            _this.modifyRoleObject.view16 = params['view16'];
            _this.modifyRoleObject.new17 = params['new17'];
            _this.modifyRoleObject.copy17 = params['copy17'];
            _this.modifyRoleObject.delete17 = params['delete17'];
            _this.modifyRoleObject.close17 = params['close17'];
            _this.modifyRoleObject.unlock17 = params['unlock17'];
            _this.modifyRoleObject.reopen17 = params['reopen17'];
            _this.modifyRoleObject.print17 = params['print17'];
            _this.modifyRoleObject.auth17 = params['auth17'];
            _this.modifyRoleObject.view17 = params['view17'];
            _this.modifyRoleObject.new18 = params['new18'];
            _this.modifyRoleObject.copy18 = params['copy18'];
            _this.modifyRoleObject.delete18 = params['delete18'];
            _this.modifyRoleObject.close18 = params['close18'];
            _this.modifyRoleObject.unlock18 = params['unlock18'];
            _this.modifyRoleObject.reopen18 = params['reopen18'];
            _this.modifyRoleObject.print18 = params['print18'];
            _this.modifyRoleObject.auth18 = params['auth18'];
            _this.modifyRoleObject.view18 = params['view18'];
            _this.modifyRoleObject.new19 = params['new19'];
            _this.modifyRoleObject.copy19 = params['copy19'];
            _this.modifyRoleObject.delete19 = params['delete19'];
            _this.modifyRoleObject.close19 = params['close19'];
            _this.modifyRoleObject.unlock19 = params['unlock19'];
            _this.modifyRoleObject.reopen19 = params['reopen19'];
            _this.modifyRoleObject.print19 = params['print19'];
            _this.modifyRoleObject.auth19 = params['auth19'];
            _this.modifyRoleObject.view19 = params['view19'];
            _this.modifyRoleObject.new20 = params['new20'];
            _this.modifyRoleObject.copy20 = params['copy20'];
            _this.modifyRoleObject.delete20 = params['delete20'];
            _this.modifyRoleObject.close20 = params['close20'];
            _this.modifyRoleObject.unlock20 = params['unlock20'];
            _this.modifyRoleObject.reopen20 = params['reopen20'];
            _this.modifyRoleObject.print20 = params['print20'];
            _this.modifyRoleObject.auth20 = params['auth20'];
            _this.modifyRoleObject.view20 = params['view20'];
            _this.modifyRoleObject.new24 = params['new24'];
            _this.modifyRoleObject.copy24 = params['copy24'];
            _this.modifyRoleObject.delete24 = params['delete24'];
            _this.modifyRoleObject.close24 = params['close24'];
            _this.modifyRoleObject.unlock24 = params['unlock24'];
            _this.modifyRoleObject.reopen24 = params['reopen24'];
            _this.modifyRoleObject.print24 = params['print24'];
            _this.modifyRoleObject.auth24 = params['auth24'];
            _this.modifyRoleObject.view24 = params['view24']; // this.modifyRoleObject.view16 = params['view16'];
            // this.modifyRoleObject.view17 = params['view17'];
            // this.modifyRoleObject.view18 = params['view18'];
            // this.modifyRoleObject.view19 = params['view19'];
            // this.modifyRoleObject.view20 = params['view20'];
            // this.modifyRoleObject.view21 = params['view21'];
            // this.modifyRoleObject.view22 = params['view22'];

            _this.modifyRoleObject.view23 = params['view23'];
            _this.modifyRoleObject.maker = params['maker'];
            _this.modifyRoleObject.makerDtStamp = params['makerDtStamp'];
            _this.modifyRoleObject.verifierId = params['verifierId'];
            _this.modifyRoleObject.checkerDtStamp = params['checkerDtStamp'];
            _this.modifyRoleObject.recordStatus = params['recordStatus'];

            if (_this.modifyRoleObject.recordStatus == 'O') {
              _this.modifyRoleObject.recordStatus = "OPEN";
            } else if (_this.modifyRoleObject.recordStatus == 'C') {
              _this.modifyRoleObject.recordStatus = "CLOSE";
            } else {
              _this.modifyRoleObject.recordStatus = params['recordStatus'];
            }

            _this.modifyRoleObject.authStatus = params['authStatus'];

            if (_this.modifyRoleObject.authStatus == 'A') {
              _this.modifyRoleObject.authStatus = "AUTHORISED";
            } else if (_this.modifyRoleObject.authStatus == 'U') {
              _this.modifyRoleObject.authStatus = "UNAUTHORISED";
            } else {
              _this.modifyRoleObject.authStatus = params['authStatus'];
            }

            _this.modifyRoleObject.firstTimeAuth = params['firstTimeAuth'];

            if (_this.modifyRoleObject.firstTimeAuth == 'Y') {
              _this.modifyRoleObject.firstTimeAuth = "YES";
            } else if (_this.modifyRoleObject.firstTimeAuth == 'N') {
              _this.modifyRoleObject.firstTimeAuth = "NO";
            } else {
              _this.modifyRoleObject.firstTimeAuth = params['firstTimeAuth'];
            } // console.log(' data for update role recived');
            // console.log(this.modifyRoleObject);


            if (_this.modifyRoleObject) {// this.getRolesForUser(this.modifyUserObject.userType);
            }
          });
          this.userRolesFromLogin = localStorage.getItem('userRolesFromLogin');
          if (this.userRolesFromLogin) this.userRoles = this.userRolesFromLogin.split(',');
          this.username = localStorage.getItem('userFromLogin');
          this.editFunction = false;
          this.editFunction2 = true;
          this.fetchdynamicroles();
          console.log(this.modifyRoleObject); //  this.roleBasedButton();
          // this.changeAdmin();
        }
      }, {
        key: "reset",
        value: function reset() {
          this.disabledButtonFlag = false;
          this.response = null;
          this.validationResponse = null;
          this.modifyRoleObject = new _models_roles__WEBPACK_IMPORTED_MODULE_4__["Roles"]();
          this.router.navigate(['/dashboard']);
        } // changeAdmin() {
        //   // console.log('change status call');
        //   this.rowPermission = true;
        //   this.fms = false;
        //   this.fmsMonitor = false;
        //   this.medianPermission = false;
        // }
        // changeFms() {
        //   this.rowPermission = false;
        //   this.fms = true;
        //   this.fmsMonitor = false;
        //   this.adminbutton = false;
        //   this.medianPermission = false;
        //   this.ras = false;
        // }
        // changeFmsMonitoring() {
        //   this.rowPermission = false;
        //   this.fms = false;
        //   this.fmsMonitor = true;
        //   this.fmsbutton = false;
        //   this.medianPermission = false;
        //   this.ras = false;
        // }
        // changeMedian() {
        //   this.ras = false;
        //   this.rowPermission = false;
        //   this.fms = false;
        //   this.fmsMonitor = false;
        //   this.fmsbutton = false;
        //   this.medianPermission = true;
        // }
        // changeRas() {
        //   this.rowPermission = false;
        //   this.fms = false;
        //   this.fmsMonitor = false;
        //   this.fmsbutton = false;
        //   this.medianPermission = false;
        //   this.ras = true;
        // }

      }, {
        key: "modifyRoles",
        value: function modifyRoles() {
          var _this2 = this;

          var permissionslist = [];

          var _loop = function _loop(i) {
            var screenoccurence = _this2.rolessorteddata[i].screenlist;

            var _loop2 = function _loop2(ind) {
              if (screenoccurence[ind].permission.toString() != screenoccurence[ind].newpermission.toString()) {
                var gettabindex = _this2.newRolesData.permissionDto.findIndex(function (item) {
                  return item.permissionId.screenId == screenoccurence[ind].screenid;
                });

                if (gettabindex >= 0) {
                  var obj = {
                    'permissionId': _this2.newRolesData.permissionDto[gettabindex].permissionId
                  };
                  obj["permissions"] = screenoccurence[ind].newpermission;
                  permissionslist.push(obj);
                }
              } //if

            };

            for (var ind = 0; ind < screenoccurence.length; ind++) {
              _loop2(ind);
            } //for loop endng

          };

          for (var i = 0; i < this.rolessorteddata.length; i++) {
            _loop(i);
          } //for loop endng


          var modifiedRole = {
            roleDto: this.newRolesData.roleDto
          };
          modifiedRole.permissionDto = permissionslist;
          console.log(modifiedRole);
          modifiedRole.roleDto.roleDesc = this.modifyRoleObject.roleDesc;
          this.roleService.newmodifyRoleService(modifiedRole).subscribe(function (data) {
            _this2.validationResponse = data;

            _this2.cdr.markForCheck();

            var userId = localStorage.getItem('userFromLogin');

            _this2.roleService.fetchNewRolePermissions(userId); //console.log(this.validationResponse);


            if (_this2.validationResponse) {
              // this.responseError = 'success';
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire("Role is Modified ");
              _this2.disablesave = true;
              console.log("IF IF IF IF IF");
            } else {
              // this.responseError = 'Server Error';
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire("Server Error");
              console.log("ELSE ELSE ELSE ELSE");
            }
          });
        }
        /* modifyRoles() {
        
           var modifyRole = this.modifyRoleObject;
           // console.log(modifyRole);
           const userIdLoggedIn = localStorage.getItem('userFromLogin');
           modifyRole.updatedBy = userIdLoggedIn;
           //console.log('inside modify role');
           //console.log(modifyRole);
           this.roleService.modifyRoleService(modifyRole).subscribe(data => {
             this.validationResponse = data;
             this.cdr.markForCheck();
             //console.log(this.validationResponse);
             if (this.validationResponse) {
               // this.responseError = 'success';
               swal.fire("Role is Modified !");
               console.log("IF IF IF IF IF");
             } else {
               // this.responseError = 'Server Error';
               swal.fire("Server Error!");
               console.log("ELSE ELSE ELSE ELSE");
             }
           });
         } */

        /* getRoles() {
          this.roleService.getAllRoles().subscribe(data => {
            this.allRoles = data;
            // console.log(this.allRoles);
            // this.roleCodes.auth1 = 'true';
            for (let i = 0; i < this.allRoles.length; i++) {
              // const e//lement = a//rray[i];
              // let roles = new Roles();
              // const userRoles = new Array();
              // console.log('user role length' + this.userRoles.length);
              for (let j = 0; j < this.userRoles.length; j++) {
                // let k = 0;
                if (this.userRoles[j] === this.allRoles[i].roleName) {
                     // console.log('COMPARING');
                  // userRoles[k++] = this.allRoles[j];
                  // console.log('roles ' + userRoles);
                  if (this.allRoles[i].delete1 === 'true') {
                    //console.log('delete1');
                    this.roleCodes.delete1 = 'true';
                  }
                  if (this.allRoles[i].close1 === 'true') {
                    // console.log('close1');
                    this.roleCodes.close1 = 'true';
                  }
                  if (this.allRoles[i].unlock1 === 'true') {
                    // console.log('COMP');
                    this.roleCodes.unlock1 = 'true';
                  }
                  if (this.allRoles[i].auth1 === 'true') {
                    //  console.log('COMP');
                    this.roleCodes.auth1 = 'true';
                  }
                  if (this.allRoles[i].new1 === 'true') {
                    //  console.log('COMP');
                    this.roleCodes.new1 = 'true';
                  }
                  if (this.allRoles[i].copy1 === 'true') {
                    //  console.log('COMP');
                    this.roleCodes.copy1 = 'true';
                  }
                  if (this.allRoles[i].new2 === 'true') {
                    //console.log('new2');
                    this.roleCodes.new2 = 'true';
                  }
                  if (this.allRoles[i].delete2 === 'true') {
                    // console.log('COMP');
                    this.roleCodes.delete2 = 'true';
                  }
                  if (this.allRoles[i].close2 === 'true') {
                    // console.log('COMP');
                    this.roleCodes.close2 = 'true';
                  }
                  if (this.allRoles[i].unlock2 === 'true') {
                    //  console.log('COMP');
                    this.roleCodes.unlock2 = 'true';
                  }
                  if (this.allRoles[i].auth2 === 'true') {
                    //  console.log('COMP');
                    this.roleCodes.auth2 = 'true';
                  }
                  if (this.allRoles[i].copy2 === 'true') {
                    //  console.log('COMP');
                    this.roleCodes.copy2 = 'true';
                  }
                  if (this.allRoles[i].new3 === 'true') {
                    //console.log('new3');
                    this.roleCodes.new3 = 'true';
                  }
                  if (this.allRoles[i].delete3 === 'true') {
                    // console.log('delete3');
                    this.roleCodes.delete3 = 'true';
                  }
                  if (this.allRoles[i].close3 === 'true') {
                    // console.log('close3');
                    this.roleCodes.close3 = 'true';
                  }
                  if (this.allRoles[i].unlock3 === 'true') {
                    // console.log('unlock3');
                    this.roleCodes.unlock3 = 'true';
                  }
                  if (this.allRoles[i].auth3 === 'true') {
                    //  console.log('auth3');
                    this.roleCodes.auth3 = 'true';
                  }
                  if (this.allRoles[i].copy3 === 'true') {
                    //  console.log('COMP');
                    this.roleCodes.copy3 = 'true';
                  }
                  if (this.allRoles[i].new4 === 'true') {
                    //console.log('new4');
                    this.roleCodes.new4 = 'true';
                  }
                  if (this.allRoles[i].delete4 === 'true') {
                    //  console.log('delete4');
                    this.roleCodes.delete4 = 'true';
                  }
                  if (this.allRoles[i].close4 === 'true') {
                    //  console.log('close4');
                    this.roleCodes.close4 = 'true';
                  }
                  if (this.allRoles[i].unlock4 === 'true') {
                    //  console.log('unlock4');
                    this.roleCodes.unlock4 = 'true';
                  }
                  if (this.allRoles[i].auth4 === 'true') {
                    //  console.log('auth4');
                    this.roleCodes.auth4 = 'true';
                  }
                  if (this.allRoles[i].copy4 === 'true') {
                    //  console.log('COMP');
                    this.roleCodes.copy4 = 'true';
                  }
                }
              }
              // this.roleCodes.auth1 = 'test';
             // console.log(this.roleCodes);
                  // roles = userRoles[i];
                  this.cdr.markForCheck();
            }
          });
        } */
        // verify/authorize a user

      }, {
        key: "verifyRole",
        value: function verifyRole(roleName) {
          var _this3 = this;

          var userIdLoggedIn = localStorage.getItem('userFromLogin');

          if (this.modifyRoleObject.maker === userIdLoggedIn) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Maker cannot Authorize the Record');
          } else {
            this.roleService.verifyRole(roleName, userIdLoggedIn).subscribe(function (data) {
              _this3.updatedRoleObject = data;

              _this3.cdr.markForCheck();

              _this3.modifyRoleObject = _this3.updatedRoleObject;
              console.log('user is authorized');
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire("Role is Authorized ");
            });
          }
        } // delete a user

      }, {
        key: "deleteRole",
        value: function deleteRole(roleName) {
          var _this4 = this;

          var userIdLoggedIn = localStorage.getItem('userFromLogin');
          this.roleService.deleteRole(roleName, userIdLoggedIn).subscribe(function (data) {
            console.log('user is deleted');
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire("Role is Deleted");

            _this4.router.navigate(['/roles1/summary']);
          });
        } // close a user

      }, {
        key: "closelockRecord",
        value: function closelockRecord(roleName) {
          var _this5 = this;

          var userIdLoggedIn = localStorage.getItem('userFromLogin');
          this.roleService.closelockRecord(roleName, userIdLoggedIn).subscribe(function (data) {
            _this5.updatedRoleObject = data;

            _this5.cdr.markForCheck();

            _this5.modifyRoleObject = _this5.updatedRoleObject;
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire("Role is Closed ");
            console.log('role is closed');
          });
        } // reopen a user

      }, {
        key: "reopenRecord",
        value: function reopenRecord(userId) {
          var _this6 = this;

          var userIdLoggedIn = localStorage.getItem('userFromLogin');
          this.roleService.reopenRecord(userId, userIdLoggedIn).subscribe(function (data) {
            _this6.updatedRoleObject = data;

            _this6.cdr.markForCheck();

            _this6.modifyRoleObject = _this6.updatedRoleObject;
            console.log('user is reopened');
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire("Role is Reopened ");
          });
        }
      }, {
        key: "changeStatus",
        value: function changeStatus() {
          console.log('change status call');
          this.is_edit = false;
          this.editFunction = true;
          this.editFunction2 = false;
        }
        /* sneha code */

      }, {
        key: "rolestype",
        value: function rolestype(index) {
          this.selectedtab = this.newRolestabsdata.tabslist[index].tabname;
          var indexdata = this.newRolestabsdata.tabslist[index];
          var tabheaders = indexdata.labels;
          var indexval = tabheaders.indexOf('Screens');
          this.previouschecklist.splice(index, 0, this.checkedlist);
          var checklistclass = [];

          if (indexval == -1) {
            tabheaders.splice(0, 0, 'Screens');
            tabheaders.splice(1, 0, 'checkbox');
          }

          var screenslist = [];
          var checklist = [];
          var strchklist = [];
          var data = indexdata.screenlist;

          for (var i = 0; i < data.length; i++) {
            var array = [];
            var obj = {};
            var checkval = {};
            var testchecklist = [{
              value: ''
            }, {
              value: ''
            }];
            var strinchklst = [{
              value: ''
            }, {
              value: ''
            }];
            array.push(data[i].screenname);
            obj[indexdata.labels[0]] = data[i].screenname;
            obj[indexdata.labels[1]] = 'checkbox';
            checkval[indexdata.labels[0]] = true;
            checkval[indexdata.labels[1]] = true;
            var permissiondata = data[i].newpermission.toString();
            var stringlength = permissiondata.length; //check if all occurences is checked

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


            for (var j = 0; j < stringlength; j++) {
              obj[indexdata.labels[2 + j]] = permissiondata.charAt(j);

              if (permissiondata.charAt(j) == 1) {
                checkval[indexdata.labels[2 + j]] = true;
                testchecklist.push({
                  value: true
                });
                strinchklst.push({
                  value: true
                });
              } else {
                checkval[indexdata.labels[2 + j]] = false;
                testchecklist.push({
                  value: false
                });
                strinchklst.push({
                  value: false
                });
              }
            } //for loop endng


            screenslist.push(obj);
            checklist.push(testchecklist);
            strchklist.push(strinchklst);
          } //for loop endng


          this.displayedcolumns = tabheaders;
          this.checkedlist = checklist;
          this.storechecklist = strchklist;
          this.datasource.list = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](screenslist);
          this.selection.clear();
          console.log(this.checkedlist);
          if (this.enabledefaulttrigger) document.getElementById('defaultele').click();
          /* if(checklistclass.length)
           {
             setTimeout(() => {
               this.appendcheckclass(checklistclass);
             }, 3000);
           } //if  */
        }
      }, {
        key: "checkclick",
        value: function checkclick(i) {
          console.log('clicked', i);
        }
        /*appendcheckclass(list)
        {
        for(let i=0;i<list.length;i++)
        {
          $('#checkbox_'+list[i]).click();
          $('#checkbox_'+list[i]).change();
          $('#checkbox_'+list[i]).trigger("change");
          $('#checkbox_'+list[i]).triggerHandler("change");
          this.cdr.detectChanges();
          this.cdr.markForCheck();
          //document.getElementById('checkbox_'+list[i]).click();
          //console.log(i,'click');
          //this.datasource.list.data.forEach(row => this.selection.select(row));
          //this.selection = new SelectionModel(true, this.datasource.list[i]);
          //this.selection = new SelectionModel<>(true, [...ELEMENT_DATA]) mat-checkbox mat-accent mat-checkbox-checked
          //document.getElementById('checkbox_'+list[i]).className = 'mat-checkbox mat-accent mat-checkbox-checked';
        }
        
        } */

      }, {
        key: "changmthd",
        value: function changmthd() {
          console.log('chng');
        }
      }, {
        key: "defaulttoggle",
        value: function defaulttoggle() {
          this.enabledefaulttrigger = false;
        }
      }, {
        key: "onChange",
        value: function onChange(event, rowindex, index, item) {
          console.log(index, rowindex, event, item);
          var indexval = index - 2;
          this.storingpermissions(indexval, rowindex, event, 'single');
        }
      }, {
        key: "storingpermissions",
        value: function storingpermissions(indexval, rowindex, event, type) {
          console.log(type);
          var tabname = this.selectedtab.toLowerCase();
          var gettabindex = this.rolessorteddata.findIndex(function (item) {
            return item.tabname.toLowerCase() == tabname;
          });
          var gettabdata = this.rolessorteddata[gettabindex].screenlist[rowindex];
          var existingpermission = this.rolessorteddata[gettabindex].screenlist[rowindex].newpermission.toString();
          var arraylength = 1;
          if (type == 'single') arraylength = 1;else arraylength = existingpermission.length;
          arraylength = existingpermission.length; //console.log('new', existingpermission, indexval, arraylength);

          for (var i = 0; i < arraylength; i++) {
            var valueindex = indexval;

            if (type == 'row') {
              valueindex = i;
            }

            existingpermission = this.rolessorteddata[gettabindex].screenlist[rowindex].newpermission.toString();
            var replacevalue = existingpermission.charAt(valueindex);
            if (event.checked) replacevalue = 1;else replacevalue = 0;
            this.rolessorteddata[gettabindex].screenlist[rowindex].newpermission = existingpermission.substr(0, valueindex) + replacevalue + existingpermission.substr(valueindex + 1);
          } //for loop endng 
          //if row is unchecked then reassigning the values 


          if (type == 'row' && !event.checked) {
            console.log('else');
            var uncheckpermission = this.rolessorteddata[gettabindex].screenlist[rowindex].permission.toString(); //uncheckpermission.replace(/\d/g, '0');

            var unchkarry = [];

            for (var _i = 0; _i < uncheckpermission.length; _i++) {
              unchkarry.push(0);
            }

            uncheckpermission = unchkarry.join("");
            this.rolessorteddata[gettabindex].screenlist[rowindex].newpermission = uncheckpermission;
            console.log(this.newRolestabsdata.tabslist[gettabindex]);
            this.newRolestabsdata.tabslist[gettabindex].screenlist[rowindex].newpermission = uncheckpermission;
          }
        }
      }, {
        key: "selectrow",
        value: function selectrow(event, index, colindex) {
          console.log(event, index, colindex);
          var list = this.storechecklist[index];
          this.checkedlist[index].forEach(function (entry, i) {
            if (event.checked) {
              entry.value = true;
            } else {
              //entry.value = list[i].value;
              entry.value = false;
            }
          });
          console.log('save', this.checkedlist);
          this.storingpermissions(colindex, index, event, 'row');
        }
      }, {
        key: "selectall",
        value: function selectall(value) {
          console.log('selectall', value, this.selectedtab);
          console.log(this.newRolestabsdata);

          for (var i = 0; i < this.checkedlist.length; i++) {
            var list = this.storechecklist[i];
            this.checkedlist[i].forEach(function (entry, index) {
              if (value) {
                entry.value = true;
              } else {
                //entry.value = list[index].value;
                entry.value = false;
              }
            });
          } //for loop endng
          //storing data


          var tabname = this.selectedtab.toLowerCase();
          var gettabindex = this.rolessorteddata.findIndex(function (item) {
            return item.tabname.toLowerCase() == tabname;
          });
          var gettabdata = this.rolessorteddata[gettabindex].screenlist;
          var event = {
            checked: value
          };

          for (var _i2 = 0; _i2 < gettabdata.length; _i2++) {
            this.storingpermissions(0, _i2, event, 'row');
          }
        }
      }, {
        key: "checkedvalue",
        value: function checkedvalue(value, index, indexrow) {
          return value;
        }
        /** Whether the number of selected elements matches the total number of rows. */

      }, {
        key: "isAllSelected",
        value: function isAllSelected(index) {
          var numSelected = this.selection.selected.length;
          var numRows = this.datasource.list.data.length;
          return numSelected === numRows;
        }
        /** Selects all rows if they are not all selected; otherwise clear selection. */

      }, {
        key: "masterToggle",
        value: function masterToggle(index) {
          var _this7 = this;

          var value = this.isAllSelected(index) ? this.selection.clear() : this.datasource.list.data.forEach(function (row) {
            return _this7.selection.select(row);
          });
          var getcheckvalue = this.isAllSelected(index);
          this.selectall(getcheckvalue);
        }
        /** The label for the checkbox on the passed row */

      }, {
        key: "checkboxLabel",
        value: function checkboxLabel(row) {
          var index = 1;

          if (!row) {
            return "".concat(this.isAllSelected(index) ? 'select' : 'deselect', " all");
          }

          return "".concat(this.selection.isSelected(row) ? 'deselect' : 'select', " row ").concat(row.position + 1);
        }
      }, {
        key: "getscreenlist",
        value: function getscreenlist(arrayB, element, permissionsarray, screen, screenslist) {
          var _loop3 = function _loop3(ind) {
            var items = arrayB[ind];

            if (element.tabId == items.screensId.tabId) {
              var idexist = permissionsarray.findIndex(function (item) {
                return item.permissionId.screenId == items.screensId.screenId;
              });
              screen.push(items.screenName);
              if (idexist > -1) screenslist.push({
                screenname: items.screenName,
                screenid: items.screensId.screenId,
                permission: permissionsarray[idexist].permissions,
                newpermission: permissionsarray[idexist].permissions
              });
            } //if 

          };

          /* arrayB.forEach((items) => {
            if(element.tabId == items.screensId.tabId)
            {
              let idexist = permissionsarray.findIndex(function(item){ return item.permissionId.screenId == items.screensId.screenId});
               screen.push(items.screenName);
               screenslist.push({screenname:items.screenName, screenid:items.screensId.screenId, permission:permissionsarray[idexist].permissions, newpermission:permissionsarray[idexist].permissions});
            } //if
          }) //arrayb fnctn endng */
          for (var ind = 0; ind < arrayB.length; ind++) {
            _loop3(ind);
          } //for loop endng


          return screenslist;
        }
      }, {
        key: "fetchdynamicroles",
        value: function fetchdynamicroles() {
          var _this8 = this;

          this.roleService.fetchdynamicrolesdata(this.modifyRoleObject.roleName).subscribe(function (data) {
            console.log('fetch', data);
            _this8.newRolesData.roleDto = data.roleDto;
            _this8.newRolesData.permissionDto = data.permissionDto;
            _this8.newRolesData.tabDto = data.tabDto;
            _this8.newRolesData.labelDto = data.labelDto;
            _this8.newRolesData.screenDto = data.screenDto;
            var arrayC = [];
            var arrayB = data.screenDto;
            var labelsarray = data.labelDto;
            var permissionsarray = data.permissionDto; //new code regarding old roles screens 04/08

            if (permissionsarray && permissionsarray.length < data.screenDto.length) {
              var initalizepermissions = '';

              if (data.labelDto) {
                var labelarray = [];

                for (var i = 0; i < data.labelDto.length; i++) {
                  labelarray.push(0);
                }

                var missiongpermissions = labelarray.join("");
                initalizepermissions = missiongpermissions;
              }

              var _loop4 = function _loop4(_i3) {
                var items = data.screenDto[_i3];
                var screenindex = permissionsarray.findIndex(function (item) {
                  return item.permissionId.screenId == items.screensId.screenId;
                });

                if (screenindex == -1) {
                  var permissionobj = {
                    roleName: _this8.modifyRoleObject.roleName,
                    screenId: items.screensId.screenId
                  };
                  var obj = {
                    permissionId: permissionobj,
                    permissions: initalizepermissions
                  };
                  permissionsarray.push(obj);
                }
              };

              for (var _i3 = 0; _i3 < data.screenDto.length; _i3++) {
                _loop4(_i3);
              }
            } //end of new code regarding old roles screens 04/08
            //fetch screens for tabs
            // data.tabDto.forEach(function(element){


            for (var tabindex = 0; tabindex < data.tabDto.length; tabindex++) {
              var screen = [];
              var screenslist = [];
              var element = data.tabDto[tabindex];
              screenslist = _this8.getscreenlist(arrayB, element, permissionsarray, screen, screenslist); //fetching screen list 
              // console.log('arrayc', screenslist);
              //  arrayB.forEach((items) => {
              // }) //arrayb fntn endng
              //end of fetching screen list
              //fetching labels for screen

              var screenvisibility = element.visibility.toString();
              var label = [];
              var labellist = [];

              for (var _i4 = 0; _i4 < screenvisibility.length; _i4++) {
                if (screenvisibility.charAt(_i4) == 1) {
                  label.push(labelsarray[_i4].labelName);
                  labellist.push(labelsarray[_i4]);
                }
              } //end of fetching labels for screen


              arrayC.push({
                tabname: element.tabName,
                screens: screen,
                screenlist: screenslist,
                labels: label,
                labelslist: labellist
              });
            }

            _this8.rolessorteddata = arrayC;
            _this8.newRolestabsdata.tabslist = arrayC;

            _this8.rolestype(0);

            console.log('arrayc', arrayC); //end of fetching screen for tabs
          });
        }
      }]);

      return RoleDetailsComponent;
    }();

    RoleDetailsComponent.ctorParameters = function () {
      return [{
        type: _roles_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], RoleDetailsComponent.prototype, "modifyRoleObject", void 0);
    RoleDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-role-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./role-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/roles1/role-details/role-details.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./role-details.component.scss */
      "./src/app/views/roles1/role-details/role-details.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_roles_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], RoleDetailsComponent);
    /***/
  },

  /***/
  "./src/app/views/roles1/role-list/role-list.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/views/roles1/role-list/role-list.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsRoles1RoleListRoleListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  \r\ntable {\r\n  border-collapse: initial;\r\n  width:100%;\r\n  text-align: center !important;\r\n}\r\n:host ::ng-deep .mat-sort-header-container { \r\n  display: flex;  \r\n  justify-content: center; \r\n}\r\nth.mat-header-cell, td.mat-cell { \r\n  text-align: center; \r\n}\r\n.mat-raised-button {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  height: 20px;\r\n  line-height: 27px;\r\n  min-height: 27px;\r\n  vertical-align: top;\r\n  font-size: 11px;\r\n  padding: 0 0;\r\n  margin: 0;\r\n}\r\n.mat-header-cell {\r\n  text-align: center;\r\n  height: 25px !important;\r\n\r\n}\r\n.mat-cell {\r\n  text-align: center;\r\n  height: 25px !important;\r\n\r\n}\r\ntr:nth-child(even) {\r\n  height: 25px !important;\r\n}\r\nth {\r\n  font-weight: small;\r\n  height: 25px !important;\r\n  text-align: center;\r\n}\r\ntr {\r\n  font-weight: small;\r\n  height: 25px !important;\r\n  text-align: center;\r\n}\r\nmat-paginator {\r\n  width: auto !important;\r\n  height: 40px !important;\r\n}\r\nmd-pagination-wrapper {\r\n  width: auto !important;\r\n  height: 40px !important;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvcm9sZXMxL3JvbGUtbGlzdC9yb2xlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7RUFDWixTQUFTO0FBQ1g7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7O0FBRXpCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCOztBQUV6QjtBQUdBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9yb2xlczEvcm9sZS1saXN0L3JvbGUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICBcclxudGFibGUge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogaW5pdGlhbDtcclxuICB3aWR0aDoxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lciB7IFxyXG4gIGRpc3BsYXk6IGZsZXg7ICBcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXHJcbn1cclxuXHJcbnRoLm1hdC1oZWFkZXItY2VsbCwgdGQubWF0LWNlbGwgeyBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG59XHJcbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjdweDtcclxuICBtaW4taGVpZ2h0OiAyN3B4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIHBhZGRpbmc6IDAgMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLm1hdC1jZWxsIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG5cclxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxudGgge1xyXG4gIGZvbnQtd2VpZ2h0OiBzbWFsbDtcclxuICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxudHIge1xyXG4gIGZvbnQtd2VpZ2h0OiBzbWFsbDtcclxuICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxubWF0LXBhZ2luYXRvciB7XHJcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxubWQtcGFnaW5hdGlvbi13cmFwcGVyIHtcclxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/views/roles1/role-list/role-list.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/views/roles1/role-list/role-list.component.ts ***!
    \***************************************************************/

  /*! exports provided: RoleListComponent */

  /***/
  function srcAppViewsRoles1RoleListRoleListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoleListComponent", function () {
      return RoleListComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _models_roles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/roles */
    "./src/app/views/roles1/models/roles.ts");
    /* harmony import */


    var _models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models/fmosNewRolePermissions */
    "./src/app/views/roles1/models/fmosNewRolePermissions.ts");
    /* harmony import */


    var _roles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../roles.service */
    "./src/app/views/roles1/roles.service.ts"); //import { RoleService } from 'app/shared/services/role.service';


    var RoleListComponent = /*#__PURE__*/function () {
      // username: string;
      function RoleListComponent(roleService, router, cdr) {
        _classCallCheck(this, RoleListComponent);

        this.roleService = roleService;
        this.router = router;
        this.cdr = cdr; //roleCodes = new Roles();
        //roleCodes = new RolePermissions();

        this.roleCodes = new _models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_5__["permissionsLabels"]();
        this.displayedColumns = ['roleName', 'roleDesc', 'authStatus', 'recordStatus', 'makerDtStamp'];
        this.buttonsaccesslist = new _models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_5__["RolePermissions"]();
      }

      _createClass(RoleListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.getRoles();
          this.userRolesFromLogin = localStorage.getItem('userRolesFromLogin');
          if (this.userRolesFromLogin) this.userRoles = this.userRolesFromLogin.split(',');
          this.loggedInUser = localStorage.getItem('userFromLogin');
          this.getNewPermissions();
          this.roleService.screenLabelList.subscribe(function (message) {
            return _this9.roleCodes = message;
          });
          setTimeout(function () {
            console.log(_this9.roleCodes);
          }, 3000);
        }
      }, {
        key: "getRoles",
        value: function getRoles() {
          var _this10 = this;

          this.roleService.getAllRolesSummary().subscribe(function (data) {
            _this10.allRoles = data;
            console.log('this.allRoles', _this10.allRoles);
            _this10.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this10.allRoles);
            _this10.dataSource.sort = _this10.sort;
            _this10.dataSource.paginator = _this10.paginator;
          });
        }
      }, {
        key: "getNewPermissions",
        value: function getNewPermissions() {
          this.roleService.fetchScreenPermissions('Roles');
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "getRole",
        value: function getRole(userObject) {
          // this.dataIndex = (this.pageIndex*this.pageSize)+i;
          // var userObject;
          // console.log(i);
          // console.log(this.dataIndex);
          // if(this.dataIndex>4)
          // {
          //    userObject = this.allRoles[this.dataIndex];
          // console.log(this.dataIndex);
          // console.log('from dataIndex');
          //console.log(i);
          // }
          // else
          // {
          // console.log(i);
          // userObject = this.allRoles[i];
          // console.log(userObject);
          // console.log('from index');
          // }
          // const userObject = this.allRoles[i];
          // console.log(userObject.roleName);
          this.modifyRoleObject = userObject;
          console.log('inside modify');
          console.log(this.modifyRoleObject);
          var navigationExtras = {
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
              'new2': this.modifyRoleObject.new2,
              'copy2': this.modifyRoleObject.copy2,
              'delete2': this.modifyRoleObject.delete2,
              'close2': this.modifyRoleObject.close2,
              'unlock2': this.modifyRoleObject.unlock2,
              'reopen2': this.modifyRoleObject.reopen2,
              'print2': this.modifyRoleObject.print2,
              'auth2': this.modifyRoleObject.auth2,
              'view2': this.modifyRoleObject.view2,
              'new3': this.modifyRoleObject.new3,
              'copy3': this.modifyRoleObject.copy3,
              'delete3': this.modifyRoleObject.delete3,
              'close3': this.modifyRoleObject.close3,
              'unlock3': this.modifyRoleObject.unlock3,
              'reopen3': this.modifyRoleObject.reopen3,
              'print3': this.modifyRoleObject.print3,
              'auth3': this.modifyRoleObject.auth3,
              'view3': this.modifyRoleObject.view3,
              'new4': this.modifyRoleObject.new4,
              'copy4': this.modifyRoleObject.copy4,
              'delete4': this.modifyRoleObject.delete4,
              'close4': this.modifyRoleObject.close4,
              'unlock4': this.modifyRoleObject.unlock4,
              'reopen4': this.modifyRoleObject.reopen4,
              'print4': this.modifyRoleObject.print4,
              'auth4': this.modifyRoleObject.auth4,
              'view4': this.modifyRoleObject.view4,
              'new5': this.modifyRoleObject.new5,
              'copy5': this.modifyRoleObject.copy5,
              'delete5': this.modifyRoleObject.delete5,
              'close5': this.modifyRoleObject.close5,
              'unlock5': this.modifyRoleObject.unlock5,
              'reopen5': this.modifyRoleObject.reopen5,
              'print5': this.modifyRoleObject.print5,
              'auth5': this.modifyRoleObject.auth5,
              'view5': this.modifyRoleObject.view5,
              'new6': this.modifyRoleObject.new6,
              'copy6': this.modifyRoleObject.copy6,
              'delete6': this.modifyRoleObject.delete6,
              'close6': this.modifyRoleObject.close6,
              'unlock6': this.modifyRoleObject.unlock6,
              'reopen6': this.modifyRoleObject.reopen6,
              'print6': this.modifyRoleObject.print6,
              'auth6': this.modifyRoleObject.auth6,
              'view6': this.modifyRoleObject.view6,
              'new7': this.modifyRoleObject.new7,
              'copy7': this.modifyRoleObject.copy7,
              'delete7': this.modifyRoleObject.delete7,
              'close7': this.modifyRoleObject.close7,
              'unlock7': this.modifyRoleObject.unlock7,
              'reopen7': this.modifyRoleObject.reopen7,
              'print7': this.modifyRoleObject.print7,
              'auth7': this.modifyRoleObject.auth7,
              'view7': this.modifyRoleObject.view7,
              'new8': this.modifyRoleObject.new8,
              'copy8': this.modifyRoleObject.copy8,
              'delete8': this.modifyRoleObject.delete8,
              'close8': this.modifyRoleObject.close8,
              'unlock8': this.modifyRoleObject.unlock8,
              'reopen8': this.modifyRoleObject.reopen8,
              'print8': this.modifyRoleObject.print8,
              'auth8': this.modifyRoleObject.auth8,
              'view8': this.modifyRoleObject.view8,
              'new9': this.modifyRoleObject.new9,
              'copy9': this.modifyRoleObject.copy9,
              'delete9': this.modifyRoleObject.delete9,
              'close9': this.modifyRoleObject.close9,
              'unlock9': this.modifyRoleObject.unlock9,
              'reopen9': this.modifyRoleObject.reopen9,
              'print9': this.modifyRoleObject.print9,
              'auth9': this.modifyRoleObject.auth9,
              'view9': this.modifyRoleObject.view9,
              'view10': this.modifyRoleObject.view10,
              'view11': this.modifyRoleObject.view11,
              'view12': this.modifyRoleObject.view12,
              'view13': this.modifyRoleObject.view13,
              'view14': this.modifyRoleObject.view14,
              'new15': this.modifyRoleObject.new15,
              'copy15': this.modifyRoleObject.copy15,
              'delete15': this.modifyRoleObject.delete15,
              'close15': this.modifyRoleObject.close15,
              'unlock15': this.modifyRoleObject.unlock15,
              'reopen15': this.modifyRoleObject.reopen15,
              'print15': this.modifyRoleObject.print15,
              'auth15': this.modifyRoleObject.auth15,
              'view15': this.modifyRoleObject.view15,
              'new16': this.modifyRoleObject.new16,
              'copy16': this.modifyRoleObject.copy16,
              'delete16': this.modifyRoleObject.delete16,
              'close16': this.modifyRoleObject.close16,
              'unlock16': this.modifyRoleObject.unlock16,
              'reopen16': this.modifyRoleObject.reopen16,
              'print16': this.modifyRoleObject.print16,
              'auth16': this.modifyRoleObject.auth16,
              'view16': this.modifyRoleObject.view16,
              'new17': this.modifyRoleObject.new17,
              'copy17': this.modifyRoleObject.copy17,
              'delete17': this.modifyRoleObject.delete17,
              'close17': this.modifyRoleObject.close17,
              'unlock17': this.modifyRoleObject.unlock17,
              'reopen17': this.modifyRoleObject.reopen17,
              'print17': this.modifyRoleObject.print17,
              'auth17': this.modifyRoleObject.auth17,
              'view17': this.modifyRoleObject.view17,
              'new18': this.modifyRoleObject.new18,
              'copy18': this.modifyRoleObject.copy18,
              'delete18': this.modifyRoleObject.delete18,
              'close18': this.modifyRoleObject.close18,
              'unlock18': this.modifyRoleObject.unlock18,
              'reopen18': this.modifyRoleObject.reopen18,
              'print18': this.modifyRoleObject.print18,
              'auth18': this.modifyRoleObject.auth18,
              'view18': this.modifyRoleObject.view18,
              'new19': this.modifyRoleObject.new19,
              'copy19': this.modifyRoleObject.copy19,
              'delete19': this.modifyRoleObject.delete19,
              'close19': this.modifyRoleObject.close19,
              'unlock19': this.modifyRoleObject.unlock19,
              'reopen19': this.modifyRoleObject.reopen19,
              'print19': this.modifyRoleObject.print19,
              'auth19': this.modifyRoleObject.auth19,
              'view19': this.modifyRoleObject.view19,
              'new20': this.modifyRoleObject.new20,
              'copy20': this.modifyRoleObject.copy20,
              'delete20': this.modifyRoleObject.delete20,
              'close20': this.modifyRoleObject.close20,
              'unlock20': this.modifyRoleObject.unlock20,
              'reopen20': this.modifyRoleObject.reopen20,
              'print20': this.modifyRoleObject.print20,
              'auth20': this.modifyRoleObject.auth20,
              'view20': this.modifyRoleObject.view20,
              'new24': this.modifyRoleObject.new24,
              'copy24': this.modifyRoleObject.copy24,
              'delete24': this.modifyRoleObject.delete24,
              'close24': this.modifyRoleObject.close24,
              'unlock24': this.modifyRoleObject.unlock24,
              'reopen24': this.modifyRoleObject.reopen24,
              'print24': this.modifyRoleObject.print24,
              'auth24': this.modifyRoleObject.auth24,
              'view24': this.modifyRoleObject.view24,
              // 'view16': this.modifyRoleObject.view16,
              // 'view17': this.modifyRoleObject.view17,
              // 'view18': this.modifyRoleObject.view18,
              // 'view19': this.modifyRoleObject.view19,
              // 'view20': this.modifyRoleObject.view20,
              // 'view21': this.modifyRoleObject.view21,
              // 'view22': this.modifyRoleObject.view22,
              'view23': this.modifyRoleObject.view23,
              'maker': this.modifyRoleObject.maker,
              'makerDtStamp': this.modifyRoleObject.makerDtStamp,
              'verifierId': this.modifyRoleObject.verifierId,
              'checkerDtStamp': this.modifyRoleObject.checkerDtStamp,
              'recordStatus': this.modifyRoleObject.recordStatus,
              'authStatus': this.modifyRoleObject.authStatus,
              'firstTimeAuth': this.modifyRoleObject.firstTimeAuth
            }
          };
          this.router.navigate(['/roles1/details'], navigationExtras); //this.router.navigate(['/roles/search'], navigationExtras);
        }
      }, {
        key: "onPaginateChange",
        value: function onPaginateChange(event) {
          console.log(event); // console.log(this.pageSize);

          this.pageSize = event.pageSize;
          this.pageIndex = event.pageIndex;
          console.log(event.pageSize);
          console.log(event.pageIndex);
        }
      }]);

      return RoleListComponent;
    }();

    RoleListComponent.ctorParameters = function () {
      return [{
        type: _roles_service__WEBPACK_IMPORTED_MODULE_6__["RoleService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_roles__WEBPACK_IMPORTED_MODULE_4__["Roles"])], RoleListComponent.prototype, "userUpdate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_roles__WEBPACK_IMPORTED_MODULE_4__["Roles"])], RoleListComponent.prototype, "modifyRoleObject", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])], RoleListComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])], RoleListComponent.prototype, "paginator", void 0);
    RoleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-role-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./role-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/roles1/role-list/role-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./role-list.component.css */
      "./src/app/views/roles1/role-list/role-list.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_roles_service__WEBPACK_IMPORTED_MODULE_6__["RoleService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], RoleListComponent);
    /***/
  },

  /***/
  "./src/app/views/roles1/roles1-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/views/roles1/roles1-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: roles1Routes */

  /***/
  function srcAppViewsRoles1Roles1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "roles1Routes", function () {
      return roles1Routes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _roles1_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./roles1.component */
    "./src/app/views/roles1/roles1.component.ts");
    /* harmony import */


    var _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./role-list/role-list.component */
    "./src/app/views/roles1/role-list/role-list.component.ts");
    /* harmony import */


    var _role_details_role_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./role-details/role-details.component */
    "./src/app/views/roles1/role-details/role-details.component.ts");

    var roles1Routes = [{
      path: "",
      component: _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_2__["RoleListComponent"]
    }, {
      path: 'summary',
      component: _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_2__["RoleListComponent"],
      pathMatch: "full",
      data: {
        title: 'Role Summary',
        breadcrumb: 'Role Summary'
      }
    }, {
      path: 'create',
      component: _roles1_component__WEBPACK_IMPORTED_MODULE_1__["Roles1Component"],
      pathMatch: "full",
      data: {
        title: 'Role Maintenance',
        breadcrumb: 'Role Maintenance'
      }
    }, {
      path: 'details',
      component: _role_details_role_details_component__WEBPACK_IMPORTED_MODULE_3__["RoleDetailsComponent"],
      pathMatch: "full",
      data: {
        title: 'Role Maintenance',
        breadcrumb: 'Role Maintenance'
      }
    }];
    /***/
  },

  /***/
  "./src/app/views/roles1/roles1.component.css":
  /*!***************************************************!*\
    !*** ./src/app/views/roles1/roles1.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsRoles1Roles1ComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#defaultele\r\n{\r\n    display:none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvcm9sZXMxL3JvbGVzMS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9yb2xlczEvcm9sZXMxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGVmYXVsdGVsZVxyXG57XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/views/roles1/roles1.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/views/roles1/roles1.component.ts ***!
    \**************************************************/

  /*! exports provided: Roles1Component */

  /***/
  function srcAppViewsRoles1Roles1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Roles1Component", function () {
      return Roles1Component;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _models_roles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./models/roles */
    "./src/app/views/roles1/models/roles.ts");
    /* harmony import */


    var _roles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./roles.service */
    "./src/app/views/roles1/roles.service.ts");
    /* harmony import */


    var _models_fmosroledata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./models/fmosroledata */
    "./src/app/views/roles1/models/fmosroledata.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var Roles1Component = /*#__PURE__*/function () {
      //end of dyn roles
      function Roles1Component(roleService, _formBuilder, cdr) {
        _classCallCheck(this, Roles1Component);

        this.roleService = roleService;
        this._formBuilder = _formBuilder;
        this.cdr = cdr;
        this.submitted = false;
        this.check = 0;
        this.select1 = false;
        this.role = new _models_roles__WEBPACK_IMPORTED_MODULE_4__["Roles"]();
        this.space = false; //dyn roles

        this.displayedcolumns = [];
        this.previouschecklist = [];
        this.checkedlist = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__["SelectionModel"](true, []);
        this.storechecklist = [];
        this.dummydata = {
          roles: {
            name: 'fms',
            description: 'role desc'
          },
          tabslist: [{
            tabname: 'Admin',
            screens: ['database', 'application', 'customer', 'employee'],
            screenlist: [{
              screenname: 'database',
              permission: 111111
            }, {
              screenname: 'application',
              permission: 111110
            }, {
              screenname: 'customer',
              permission: 111100
            }, {
              screenname: 'employee',
              permission: 111000
            }],
            labels: ['new', 'edit', 'view', 'delete', 'print', 'auth']
          }, {
            tabname: 'FMS',
            screens: ['fms', 'application', 'customer', 'report'],
            labels: ['new', 'edit', 'view', 'delete', 'print', 'auth'],
            screenlist: [{
              screenname: 'fms',
              permission: 101100
            }, {
              screenname: 'application',
              permission: 101100
            }, {
              screenname: 'customer',
              permission: 101100
            }, {
              screenname: 'report',
              permission: 101100
            }]
          }, {
            tabname: 'FMS Monitoring',
            screens: ['FMS Monitoring', 'application', 'customer', 'employee'],
            labels: ['new', 'edit', 'view', 'delete', 'print', 'auth'],
            screenlist: [{
              screenname: 'FMS Monitoring',
              permission: 101100
            }, {
              screenname: 'application',
              permission: 101100
            }, {
              screenname: 'customer',
              permission: 101100
            }, {
              screenname: 'employee',
              permission: 101100
            }]
          }]
        }; //datasource:any={headers:[], list:[]};

        this.datasource = {
          list: [],
          checkedlist: []
        };
        this.newfmostabsdata = {
          tabslist: []
        };
        this.fmosRolesData = new _models_fmosroledata__WEBPACK_IMPORTED_MODULE_6__["fmosrolesdata"]();
        this.enabledefaulttrigger = true;
      }

      _createClass(Roles1Component, [{
        key: "newRole",
        value: function newRole() {
          this.submitted = false;
          this.role = new _models_roles__WEBPACK_IMPORTED_MODULE_4__["Roles"]();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.selectedtab = this.dummydata.tabslist[0].tabname;
          this.username = localStorage.getItem('userFromLogin');
          this.getPermission();
          this.rowPermission = false;
          this.fms = false;
          this.fmsMonitor = false;
          this.adminbutton = true;
          this.fmsbutton = true;
          this.fmsmonitoring = true;
          this.myFunc();
          this.medianPermission = false;
          this.changeAdmin();
        }
      }, {
        key: "selectionChanged",
        value: function selectionChanged(item) {
          console.log("Selected value: " + item.value);
        }
        /* getPermission() {
           this.roleService.getAllPermission().subscribe(data => {
             this.permission = data;
             console.log(this.permission);
             this.adminPermission = this.permission.admin;
             this.fmsbuttonPermission = this.permission.fms;
             this.fmsmonitorPermission = this.permission.fmsMonitoring;
             this.rasbuttonPermission = this.permission.ras;
             this.medianbuttonPermission = this.permission.median;
           });
         } */

      }, {
        key: "button",
        value: function button() {
          this.adminPermission = this.permission.admin;
          this.fmsbuttonPermission = this.permission.fms;
          this.fmsmonitorPermission = this.permission.fmsMonitoring;
          this.rasbuttonPermission = this.permission.ras;
          this.medianbuttonPermission = this.permission.median;
        }
      }, {
        key: "save",
        value: function save() {
          var _this11 = this;

          this.role.maker = this.username;
          var permissionslist = [];

          var _loop5 = function _loop5(i) {
            var screenoccurence = _this11.rolessorteddata[i].screenlist;

            var _loop6 = function _loop6(ind) {
              //if (screenoccurence[ind].permission.toString() != screenoccurence[ind].newpermission.toString()) {
              var gettabindex = _this11.fmosRolesData.permissionDto.findIndex(function (item) {
                return item.permissionId.screenId == screenoccurence[ind].screenid;
              });

              if (gettabindex >= 0) {
                _this11.fmosRolesData.permissionDto[gettabindex].permissionId.roleName = _this11.role.roleName;
                var obj = {
                  'permissionId': _this11.fmosRolesData.permissionDto[gettabindex].permissionId
                };
                obj["permissions"] = screenoccurence[ind].newpermission;
                permissionslist.push(obj);
              } // } //if

            };

            for (var ind = 0; ind < screenoccurence.length; ind++) {
              _loop6(ind);
            } //for loop endng

          };

          for (var i = 0; i < this.rolessorteddata.length; i++) {
            _loop5(i);
          } //for loop endng


          var newRole = {
            roleDto: this.role
          };
          newRole.permissionDto = permissionslist;
          console.log(newRole);
          this.roleService.createnewrole(newRole).subscribe(function (role) {
            console.log(role);

            if (role) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire("Success");
              _this11.space = false;
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire("Failed ", 'Role already exist or Can’t save role without any permission.');
            } // this.cdr.markForCheck();

          }, function (error) {
            if (_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"]) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Server Error', 'error');
            }
          }); // this.role = new Roles();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true;
          this.save();
        }
      }, {
        key: "fn",
        value: function fn(roleName) {
          console.log("enters inside fn");
          var result = roleName.trim();
          console.log(result);

          if (result) {
            console.log("valid string");
            this.submitted = true;
            this.space = true;
            console.log(this.space);
          } else {
            console.log("invalid string");
            this.space = false; // this.submitted = false;

            console.log(this.space);
          }
        }
      }, {
        key: "changeAdmin",
        value: function changeAdmin() {
          console.log('change status call');
          this.rowPermission = true;
          this.fms = false;
          this.fmsMonitor = false;
          this.medianPermission = false;
        }
      }, {
        key: "changeFms",
        value: function changeFms() {
          this.rowPermission = false;
          this.fms = true;
          this.fmsMonitor = false;
          this.adminbutton = false;
          this.medianPermission = false;
          this.ras = false;
        }
      }, {
        key: "changeFmsMonitoring",
        value: function changeFmsMonitoring() {
          this.rowPermission = false;
          this.fms = false;
          this.fmsMonitor = true;
          this.fmsbutton = false;
          this.medianPermission = false;
          this.ras = false;
        }
      }, {
        key: "changeMedian",
        value: function changeMedian() {
          this.rowPermission = false;
          this.fms = false;
          this.fmsMonitor = false;
          this.fmsbutton = false;
          this.medianPermission = true;
          this.ras = false;
        }
      }, {
        key: "changeRas",
        value: function changeRas() {
          this.rowPermission = false;
          this.fms = false;
          this.fmsMonitor = false;
          this.fmsbutton = false;
          this.medianPermission = false;
          this.ras = true;
        }
      }, {
        key: "selectCheckBox",
        value: function selectCheckBox() {
          this.check = 1;
        }
      }, {
        key: "myFunc",
        value: function myFunc() {
          this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.thirdFormGroup = this._formBuilder.group({
            thirdCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "selectAll",
        value: function selectAll() {
          if (this.select1) {
            this.select1 = false;
          } else {
            this.select1 = true;
          }
        }
        /* sneha code */

      }, {
        key: "rolestype",
        value: function rolestype(index) {
          this.selectedtab = this.newfmostabsdata.tabslist[index].tabname;
          var indexdata = this.newfmostabsdata.tabslist[index];
          var tabheaders = indexdata.labels;
          var indexval = tabheaders.indexOf('Screens');
          this.previouschecklist.splice(index, 0, this.checkedlist);
          var checklistclass = [];

          if (indexval == -1) {
            tabheaders.splice(0, 0, 'Screens');
            tabheaders.splice(1, 0, 'checkbox');
          }

          var screenslist = [];
          var checklist = [];
          var strchklist = [];
          var data = indexdata.screenlist;

          for (var i = 0; i < data.length; i++) {
            var array = [];
            var obj = {};
            var checkval = {};
            var testchecklist = [{
              value: ''
            }, {
              value: ''
            }];
            var strinchklst = [{
              value: ''
            }, {
              value: ''
            }];
            array.push(data[i].screenname);
            obj[indexdata.labels[0]] = data[i].screenname;
            obj[indexdata.labels[1]] = 'checkbox';
            checkval[indexdata.labels[0]] = true;
            checkval[indexdata.labels[1]] = true;
            var permissiondata = data[i].newpermission.toString();
            var stringlength = permissiondata.length; //check if all occurences is checked

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


            for (var j = 0; j < stringlength; j++) {
              obj[indexdata.labels[2 + j]] = permissiondata.charAt(j);

              if (permissiondata.charAt(j) == 1) {
                checkval[indexdata.labels[2 + j]] = true;
                testchecklist.push({
                  value: true
                });
                strinchklst.push({
                  value: true
                });
              } else {
                checkval[indexdata.labels[2 + j]] = false;
                testchecklist.push({
                  value: false
                });
                strinchklst.push({
                  value: false
                });
              }
            } //for loop endng


            screenslist.push(obj);
            checklist.push(testchecklist);
            strchklist.push(strinchklst);
          } //for loop endng


          this.displayedcolumns = tabheaders;
          this.checkedlist = checklist;
          this.storechecklist = strchklist;
          console.log(screenslist);
          this.datasource.list = new _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](screenslist);
          this.selection.clear();
          if (this.enabledefaulttrigger) document.getElementById('defaultele').click();
          /* if(checklistclass.length)
            {
              setTimeout(() => {
                this.appendcheckclass(checklistclass);
              }, 3000);
            } //if  */
        }
      }, {
        key: "checkclick",
        value: function checkclick(i) {
          console.log('clicked', i);
        }
        /* appendcheckclass(list)
        {
          for(let i=0;i<list.length;i++)
          {
            $('#checkbox_'+list[i]).click();
            $('#checkbox_'+list[i]).change();
            $('#checkbox_'+list[i]).trigger("change");
            $('#checkbox_'+list[i]).triggerHandler("change");
            this.cdr.detectChanges();
            this.cdr.markForCheck();
            //document.getElementById('checkbox_'+list[i]).click();
            //console.log(i,'click');
            //this.datasource.list.data.forEach(row => this.selection.select(row));
            //this.selection = new SelectionModel(true, this.datasource.list[i]);
            //this.selection = new SelectionModel<>(true, [...ELEMENT_DATA]) mat-checkbox mat-accent mat-checkbox-checked
            //document.getElementById('checkbox_'+list[i]).className = 'mat-checkbox mat-accent mat-checkbox-checked';
          }
        } */

      }, {
        key: "changmthd",
        value: function changmthd() {
          console.log('chng');
        }
      }, {
        key: "defaulttoggle",
        value: function defaulttoggle() {
          this.enabledefaulttrigger = false;
        }
      }, {
        key: "onChange",
        value: function onChange(event, rowindex, index, item) {
          console.log(index, rowindex, event, item);
          var indexval = index - 2;
          this.storingpermissions(indexval, rowindex, event, 'single');
        }
      }, {
        key: "storingpermissions",
        value: function storingpermissions(indexval, rowindex, event, type) {
          console.log(type);
          var tabname = this.selectedtab.toLowerCase();
          var gettabindex = this.rolessorteddata.findIndex(function (item) {
            return item.tabname.toLowerCase() == tabname;
          });
          var gettabdata = this.rolessorteddata[gettabindex].screenlist[rowindex];
          var existingpermission = this.rolessorteddata[gettabindex].screenlist[rowindex].newpermission.toString();
          var arraylength = 1;
          if (type == 'single') arraylength = 1;else arraylength = existingpermission.length;
          arraylength = existingpermission.length; //console.log('new', existingpermission, indexval, arraylength);

          for (var i = 0; i < arraylength; i++) {
            var valueindex = indexval;

            if (type == 'row') {
              valueindex = i;
            }

            existingpermission = this.rolessorteddata[gettabindex].screenlist[rowindex].newpermission.toString();
            var replacevalue = existingpermission.charAt(valueindex);
            if (event.checked) replacevalue = 1;else replacevalue = 0;
            this.rolessorteddata[gettabindex].screenlist[rowindex].newpermission = existingpermission.substr(0, valueindex) + replacevalue + existingpermission.substr(valueindex + 1);
          } //for loop endng 
          //if row is unchecked then reassigning the values 


          if (type == 'row' && !event.checked) {
            console.log('else');
            var uncheckpermission = this.rolessorteddata[gettabindex].screenlist[rowindex].permission.toString(); //uncheckpermission.replace(/\d/g, '0');

            var unchkarry = [];

            for (var _i5 = 0; _i5 < uncheckpermission.length; _i5++) {
              unchkarry.push(0);
            }

            uncheckpermission = unchkarry.join("");
            this.rolessorteddata[gettabindex].screenlist[rowindex].newpermission = uncheckpermission;
            console.log(this.newfmostabsdata.tabslist[gettabindex]);
            this.newfmostabsdata.tabslist[gettabindex].screenlist[rowindex].newpermission = uncheckpermission;
          }
        }
      }, {
        key: "selectrow",
        value: function selectrow(event, index, colindex) {
          console.log(event, index, colindex);
          var list = this.storechecklist[index];
          this.checkedlist[index].forEach(function (entry, i) {
            if (event.checked) {
              entry.value = true;
            } else {
              //entry.value = list[i].value;
              entry.value = false;
            }
          });
          console.log('save', this.checkedlist);
          this.storingpermissions(colindex, index, event, 'row');
        }
      }, {
        key: "selectall",
        value: function selectall(value) {
          console.log('selectall', value, this.selectedtab);
          console.log(this.newfmostabsdata);

          for (var i = 0; i < this.checkedlist.length; i++) {
            var list = this.storechecklist[i];
            this.checkedlist[i].forEach(function (entry, index) {
              if (value) {
                entry.value = true;
              } else {
                //entry.value = list[index].value;
                entry.value = false;
              }
            });
          } //for loop endng
          //storing data


          var tabname = this.selectedtab.toLowerCase();
          var gettabindex = this.rolessorteddata.findIndex(function (item) {
            return item.tabname.toLowerCase() == tabname;
          });
          var gettabdata = [];
          if (gettabindex > -1) gettabdata = this.rolessorteddata[gettabindex].screenlist;
          var event = {
            checked: value
          };

          for (var _i6 = 0; _i6 < gettabdata.length; _i6++) {
            this.storingpermissions(0, _i6, event, 'row');
          }
        }
      }, {
        key: "checkedvalue",
        value: function checkedvalue(value, index, indexrow) {
          return value;
        }
        /** Whether the number of selected elements matches the total number of rows. */

      }, {
        key: "isAllSelected",
        value: function isAllSelected(index) {
          var numSelected = this.selection.selected.length;
          var numRows = this.datasource.list.data.length;
          return numSelected === numRows;
        }
        /** Selects all rows if they are not all selected; otherwise clear selection. */

      }, {
        key: "masterToggle",
        value: function masterToggle(index) {
          var _this12 = this;

          var value = this.isAllSelected(index) ? this.selection.clear() : this.datasource.list.data.forEach(function (row) {
            return _this12.selection.select(row);
          });
          var getcheckvalue = this.isAllSelected(index);
          this.selectall(getcheckvalue);
        }
        /** The label for the checkbox on the passed row */

      }, {
        key: "checkboxLabel",
        value: function checkboxLabel(row) {
          var index = 1;

          if (!row) {
            return "".concat(this.isAllSelected(index) ? 'select' : 'deselect', " all");
          }

          return "".concat(this.selection.isSelected(row) ? 'deselect' : 'select', " row ").concat(row.position + 1);
        }
      }, {
        key: "getscreenlist",
        value: function getscreenlist(arrayB, element, permissionsarray, screen, screenslist) {
          var _loop7 = function _loop7(ind) {
            var items = arrayB[ind];

            if (element.tabId == items.screensId.tabId) {
              var idexist = permissionsarray.findIndex(function (item) {
                return item.permissionId.screenId == items.screensId.screenId;
              });
              screen.push(items.screenName);
              if (idexist > -1) screenslist.push({
                screenname: items.screenName,
                screenid: items.screensId.screenId,
                permission: permissionsarray[idexist].permissions,
                newpermission: permissionsarray[idexist].permissions
              });
            } //if 

          };

          /* arrayB.forEach((items) => {
            if(element.tabId == items.screensId.tabId)
            {
              let idexist = permissionsarray.findIndex(function(item){ return item.permissionId.screenId == items.screensId.screenId});
               screen.push(items.screenName);
               screenslist.push({screenname:items.screenName, screenid:items.screensId.screenId, permission:permissionsarray[idexist].permissions, newpermission:permissionsarray[idexist].permissions});
            } //if
          }) //arrayb fnctn endng */
          for (var ind = 0; ind < arrayB.length; ind++) {
            _loop7(ind);
          } //for loop endng


          return screenslist;
        }
      }, {
        key: "preparingPermissiondto",
        value: function preparingPermissiondto(screenlist, permissionlength) {
          var permissionlist = [];

          for (var i = 0; i < screenlist.length; i++) {
            var permissionidobj = {
              roleName: '',
              screenId: screenlist[i].screensId.screenId
            };
            var permissionarray = [];

            for (var j = 0; j < permissionlength; j++) {
              permissionarray.push(0);
            }

            var permissionstring = permissionarray.join("");
            permissionlist.push({
              permissionId: permissionidobj,
              permissions: permissionstring
            });
          } //for loop endng


          return permissionlist;
        }
      }, {
        key: "getPermission",
        value: function getPermission() {
          var _this13 = this;

          this.roleService.fetchnewscreenlabels().subscribe(function (data) {
            var permissionsarray = _this13.preparingPermissiondto(data.screenDto, data.labelDto.length);

            _this13.fmosRolesData.roleDto = data.roleDto;
            _this13.fmosRolesData.permissionDto = permissionsarray;
            _this13.fmosRolesData.tabDto = data.tabDto;
            _this13.fmosRolesData.labelDto = data.labelDto;
            _this13.fmosRolesData.screenDto = data.screenDto;
            var arrayC = [];
            var arrayB = data.screenDto;
            var labelsarray = data.labelDto; //fetch screens for tabs
            // data.tabDto.forEach(function(element){

            for (var tabindex = 0; tabindex < data.tabDto.length; tabindex++) {
              var screen = [];
              var screenslist = [];
              var element = data.tabDto[tabindex];
              screenslist = _this13.getscreenlist(arrayB, element, permissionsarray, screen, screenslist); //fetching screen list 
              //end of fetching screen list
              //fetching labels for screen

              var screenvisibility = element.visibility.toString();
              var label = [];
              var labellist = [];

              for (var i = 0; i < screenvisibility.length; i++) {
                if (screenvisibility.charAt(i) == 1) {
                  label.push(labelsarray[i].labelName);
                  labellist.push(labelsarray[i]);
                }
              } //end of fetching labels for screen


              arrayC.push({
                tabname: element.tabName,
                screens: screen,
                screenlist: screenslist,
                labels: label,
                labelslist: labellist
              });
            }

            _this13.rolessorteddata = arrayC;
            _this13.newfmostabsdata.tabslist = arrayC;

            _this13.rolestype(0); //end of fetching screen for tabs

          });
        }
      }, {
        key: "reset",
        value: function reset() {
          this.rolessorteddata = [];
          this.selection.clear();
          this.newfmostabsdata.tabslist[0].screenlist[0].newpermission = this.newfmostabsdata.tabslist[0].screenlist[0].permission;

          for (var i = 0; i < this.checkedlist.length; i++) {
            for (var j = 0; j < this.checkedlist[i].length; j++) {
              this.checkedlist[i][j].value = false;
            }
          }

          for (var _i7 = 0; _i7 < this.newfmostabsdata.tabslist.length; _i7++) {
            for (var _j = 0; _j < this.newfmostabsdata.tabslist[_i7].screenlist.length; _j++) {
              this.newfmostabsdata.tabslist[_i7].screenlist[_j].newpermission = this.newfmostabsdata.tabslist[_i7].screenlist[_j].permission;
            } //for loop endng

          } //for loop endng  


          this.cdr.detectChanges();
          this.cdr.markForCheck();
          console.log(this.checkedlist);
        }
      }]);

      return Roles1Component;
    }();

    Roles1Component.ctorParameters = function () {
      return [{
        type: _roles_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Roles1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-roles',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./roles1.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/roles1/roles1.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./roles1.component.css */
      "./src/app/views/roles1/roles1.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_roles_service__WEBPACK_IMPORTED_MODULE_5__["RoleService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], Roles1Component);
    /***/
  },

  /***/
  "./src/app/views/roles1/roles1.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/views/roles1/roles1.module.ts ***!
    \***********************************************/

  /*! exports provided: Roles1Module */

  /***/
  function srcAppViewsRoles1Roles1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Roles1Module", function () {
      return Roles1Module;
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


    var _roles1_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./roles1-routing.module */
    "./src/app/views/roles1/roles1-routing.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _role_list_role_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./role-list/role-list.component */
    "./src/app/views/roles1/role-list/role-list.component.ts");
    /* harmony import */


    var _roles1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./roles1.component */
    "./src/app/views/roles1/roles1.component.ts");
    /* harmony import */


    var src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/angular-material/angular-material.module */
    "./src/app/shared/angular-material/angular-material.module.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _role_details_role_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./role-details/role-details.component */
    "./src/app/views/roles1/role-details/role-details.component.ts"); //import { SearchRoleComponent } from './search-role/search-role.component';
    //import { SharedMaterialModule } from 'app/shared/shared-material.module';


    var Roles1Module = /*#__PURE__*/_createClass(function Roles1Module() {
      _classCallCheck(this, Roles1Module);
    });

    Roles1Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_role_list_role_list_component__WEBPACK_IMPORTED_MODULE_5__["RoleListComponent"], // SearchRoleComponent,
      _roles1_component__WEBPACK_IMPORTED_MODULE_6__["Roles1Component"], _role_details_role_details_component__WEBPACK_IMPORTED_MODULE_10__["RoleDetailsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_roles1_routing_module__WEBPACK_IMPORTED_MODULE_3__["roles1Routes"])]
    })], Roles1Module);
    /***/
  }
}]);
//# sourceMappingURL=views-roles1-roles1-module-es5.js.map