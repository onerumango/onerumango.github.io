function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-tags-tags-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tags/newtag/newtag.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/tags/newtag/newtag.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsTagsNewtagNewtagComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"Outer-div\">\r\n    <div>\r\n        <mat-toolbar class=\"head\">\r\n            <mat-icon>desktop_mac</mat-icon> &nbsp; New Tag\r\n        </mat-toolbar>\r\n    </div>\r\n    <div class=\"btnGoToListClass\">\r\n        <button mat-raised-button color=\"primary\" #topbackbtn [routerLink]=\"'/tags/taglist'\" (click)=\"goToList()\"\r\n            class=\"btnbackclass\">\r\n            <mat-icon class=\"newIconclass\">list</mat-icon>&nbsp;&nbsp;Back To List\r\n        </button>\r\n    </div>\r\n    <div class=\"tableDiv\">\r\n        <div class=\"fixToScreen\">\r\n            <form>\r\n                <div>\r\n                    <mat-card class=\"cardStyle\">\r\n                        <mat-card-content>\r\n                            <div class=\"classBorder\">\r\n                                <h5>Extract Xml Message</h5>\r\n                                <table>\r\n                                    <br>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <div class=\"leftInputClass\">\r\n                                                <mat-hint class=\"labelcss\">External System</mat-hint>\r\n                                                <mat-form-field appearance=\"outline\">\r\n                                                    <mat-select name=\"externalSystem\">\r\n                                                        <mat-option>Please select</mat-option>\r\n                                                        <mat-option value=\"option1\">Option 1</mat-option>\r\n                                                        <mat-option value=\"option2\">Option 2</mat-option>\r\n                                                        <mat-option value=\"option3\">Option 3</mat-option>\r\n                                                    </mat-select>\r\n                                                </mat-form-field>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"middleInputClass\">\r\n                                                <mat-hint class=\"labelcss\">Module Code</mat-hint>\r\n                                                <mat-form-field appearance=\"outline\">\r\n                                                    <mat-select name=\"moduleCode\">\r\n                                                        <mat-option>Please select</mat-option>\r\n                                                        <mat-option value=\"option1\">Option 1</mat-option>\r\n                                                        <mat-option value=\"option2\">Option 2</mat-option>\r\n                                                        <mat-option value=\"option3\">Option 3</mat-option>\r\n                                                    </mat-select>\r\n                                                </mat-form-field>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"middleInputClass\">\r\n                                                <mat-hint class=\"labelcss\">Service Code</mat-hint>\r\n                                                <mat-form-field appearance=\"outline\">\r\n                                                    <mat-select name=\"serviceCode\">\r\n                                                        <mat-option>Please select</mat-option>\r\n                                                        <mat-option value=\"option1\">Option 1</mat-option>\r\n                                                        <mat-option value=\"option2\">Option 2</mat-option>\r\n                                                        <mat-option value=\"option3\">Option 3</mat-option>\r\n                                                    </mat-select>\r\n                                                </mat-form-field>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"rightInputClass\">\r\n                                                <mat-hint class=\"labelcss\">Process Code</mat-hint>\r\n                                                <mat-form-field appearance=\"outline\">\r\n                                                    <mat-select name=\"processCode\">\r\n                                                        <mat-option>Please select</mat-option>\r\n                                                        <mat-option value=\"option1\">Option 1</mat-option>\r\n                                                        <mat-option value=\"option2\">Option 2</mat-option>\r\n                                                        <mat-option value=\"option3\">Option 3</mat-option>\r\n                                                    </mat-select>\r\n                                                </mat-form-field>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <div class=\"leftInputClass\">\r\n                                                <mat-hint class=\"labelcss\">Select Xml Message</mat-hint>\r\n                                                <mat-form-field appearance=\"outline\">\r\n                                                    <mat-select name=\"processCode\">\r\n                                                        <mat-option>Please select</mat-option>\r\n                                                        <mat-option value=\"option1\">Option 1</mat-option>\r\n                                                        <mat-option value=\"option2\">Option 2</mat-option>\r\n                                                        <mat-option value=\"option3\">Option 3</mat-option>\r\n                                                    </mat-select>\r\n                                                </mat-form-field>\r\n                                            </div>\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"middleInputClass\">\r\n                                                <button mat-stroked-button color=\"primary\" class=\"extractBtn\" (click)=\"extraxtXml()\">\r\n                                                    Extract\r\n                                                </button>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n                            <div *ngFor=\"let xml of tag\" class=\"classOuterBorder\">\r\n                                <div class=\"classBorder\">\r\n                                    <h5>New Tag</h5>\r\n                                    <table>\r\n                                        <br>\r\n                                        <tr>\r\n                                            <td>\r\n                                                <div class=\"middleInputClass\">\r\n                                                    <mat-hint class=\"labelcss\">Tag</mat-hint>\r\n                                                    <mat-form-field appearance=\"outline\">\r\n                                                        <input matInput type=\"text\" class=\"fitheight\" [(ngModel)]=xml.tagname id=\"tagname\" [ngModelOptions]=\"{standalone: true}\" #nTagname>\r\n                                                    </mat-form-field>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td>\r\n                                                <div class=\"middleInputClass\">\r\n                                                    <mat-hint class=\"labelcss\">Text Value</mat-hint>\r\n                                                    <mat-form-field appearance=\"outline\">\r\n                                                        <input matInput type=\"text\" class=\"fitheight\"  #nTextValue>\r\n                                                    </mat-form-field>\r\n                                                </div>\r\n                                            </td>\r\n                                         </tr>\r\n                                         <!-- <tr>\r\n                                            <td>\r\n                                                <div class=\"middleInputClass\">\r\n                                                    <mat-hint class=\"labelcss\">Tag Attribute</mat-hint>\r\n                                                    <mat-form-field appearance=\"outline\">\r\n                                                        <input matInput type=\"text\" class=\"fitheight\"  [(ngModel)]=xml.attributeName id=\"attributeName\" [ngModelOptions]=\"{standalone: true}\" #nTagAttribute>\r\n                                                    </mat-form-field>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td>\r\n                                                <div class=\"middleInputClass\">\r\n                                                    <mat-hint class=\"labelcss\">Attribute Value</mat-hint>\r\n                                                    <mat-form-field appearance=\"outline\">\r\n                                                        <input matInput type=\"text\" class=\"fitheight\" [(ngModel)]=xml.attributeValue id=\"attributeValue\" [ngModelOptions]=\"{standalone: true}\" #nAttributeValue>\r\n                                                    </mat-form-field>\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr> -->\r\n                                        <div #myVar  *ngFor=\"let attributeData of list\">\r\n                                            <tr *ngFor=\"let attribute of attributeData.attributeName;let i=index\" >\r\n                                            <td>\r\n                                                <div class=\"middleInputClass\">\r\n                                                    <mat-hint class=\"labelcss\">Tag Attribute</mat-hint>\r\n                                                    <mat-form-field appearance=\"outline\">\r\n                                                        <input matInput type=\"text\" class=\"fitheight\"   [(ngModel)]=xml.attributeName[i] id=\"attributeName\" [ngModelOptions]=\"{standalone: true}\" #nTagAttribute>\r\n                                                    </mat-form-field>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td>\r\n                                                <div class=\"middleInputClass\">\r\n                                                    <mat-hint class=\"labelcss\">Attribute Value</mat-hint>\r\n                                                    <mat-form-field appearance=\"outline\">\r\n                                                        <input matInput type=\"text\" class=\"fitheight\"  [(ngModel)]=xml.attributeValue[i] id=\"attributeValue\" [ngModelOptions]=\"{standalone: true}\" #nAttributeValue>\r\n                                                    </mat-form-field>\r\n                                                </div>\r\n                                            </td>\r\n                                        \r\n                                        </tr>\r\n                                    </div>\r\n                                        <tr>\r\n                                            <div class=\"addNodeBtnClass\">\r\n                                                <button mat-stroked-button color=\"primary\" (click)='AddAttribute()' class=\"newTagBtn\">\r\n                                                    Add Attribute</button>\r\n                                            </div>\r\n                                        </tr>\r\n                                        <br>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"addNodeBtnClass\">\r\n                                <button mat-stroked-button color=\"primary\" (click)='addnode()' class=\"newTagBtn\">\r\n                                    New Tag</button>\r\n                            </div>\r\n                        </mat-card-content>\r\n                    </mat-card>\r\n                </div>\r\n                <div class=\"divbtns\">\r\n                    <button type=\"submit\" mat-raised-button color=\"primary\" class=\"saveBtn\">\r\n                        <mat-icon class=\"newIconclass\">save</mat-icon>&nbsp;&nbsp;Save\r\n                    </button>&nbsp;\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"audit\">\r\n            <mat-toolbar class=\"subToolbar\">\r\n                Audit Log\r\n            </mat-toolbar>\r\n            <mat-card class=\"cardStyle\">\r\n                <mat-card-content>\r\n                    <table class=\"mat-elevation-z0\">\r\n                        <tbody>\r\n                            <tr>\r\n                                <th class=\"tdd\">Verified Status</th>\r\n                                <td class=\"tdd\">\r\n                                    <mat-chip></mat-chip>\r\n                                </td>\r\n                                <th class=\"tdd\">Verified Id</th>\r\n                                <td class=\"tdd\">\r\n                                    <mat-chip></mat-chip>\r\n                                </td>\r\n                                <th class=\"tdd\">Verified Time Stamp</th>\r\n                                <td class=\"tdd\">\r\n                                    <mat-chip></mat-chip>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <th class=\"tdd\">Creator Id</th>\r\n                                <td class=\"tdd\">\r\n                                    <mat-chip></mat-chip>\r\n                                </td>\r\n                                <th class=\"tdd\">Creator Time Stamp</th>\r\n                                <td class=\"tdd\">\r\n                                    <mat-chip></mat-chip>\r\n                                </td>\r\n                                <th class=\"tdd\">Verified Ever</th>\r\n                                <td class=\"tdd\">\r\n                                    <mat-chip></mat-chip>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <th class=\"tdd\">Record status</th>\r\n                                <td class=\"tdd\">\r\n                                    <mat-chip></mat-chip>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </mat-card-content>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tags/selectsourcetarget/selectsourcetarget.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/tags/selectsourcetarget/selectsourcetarget.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsTagsSelectsourcetargetSelectsourcetargetComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"Outer-div\">\r\n    <mat-toolbar class=\"head\">\r\n        <mat-icon>desktop_mac</mat-icon> &nbsp; Tags-Tag Mapping\r\n    </mat-toolbar>\r\n    <div class=\"btnGoToListClass\">\r\n        <button mat-raised-button color=\"primary\" #topbackbtn [routerLink]=\"'/tags/tagmaplist'\"\r\n            class=\"btnbackclass\">\r\n            <mat-icon class=\"newIconclass\">list</mat-icon>&nbsp;&nbsp;Back To List\r\n        </button>\r\n    </div>\r\n    <div class=\"tableDiv\">\r\n        <div class=\"fixToScreen\">\r\n            <div>\r\n                <form>\r\n                    <div>\r\n                        <mat-card>\r\n                            <table>\r\n                                <tr>\r\n                                    <td>\r\n                                        <h5 class=\"subHeader\">Target System</h5>\r\n                                        <div class=\"divSelectClass\">\r\n                                            <mat-hint class=\"labelcss\">System name</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <mat-select name=\"department\">\r\n                                                    <mat-option>None</mat-option>\r\n                                                    <mat-option value=\"option1\">Option 1</mat-option>\r\n                                                </mat-select>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                        <div class=\"divSelectClass\">\r\n                                            <mat-hint class=\"labelcss\">Module code</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <mat-select name=\"department\">\r\n                                                    <mat-option>None</mat-option>\r\n                                                    <mat-option value=\"option1\">Option 1</mat-option>\r\n\r\n                                                </mat-select>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                        <div class=\"divSelectClass\">\r\n                                            <mat-hint class=\"labelcss\">Service code</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <mat-select name=\"department\">\r\n                                                    <mat-option>None</mat-option>\r\n                                                    <mat-option value=\"option1\">Option 1</mat-option>\r\n                                                </mat-select>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                        <div class=\"divSelectClass\">\r\n                                            <mat-hint class=\"labelcss\">Process code</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <mat-select name=\"department\">\r\n                                                    <mat-option>None</mat-option>\r\n                                                    <mat-option value=\"option1\">Option 1</mat-option>\r\n                                                </mat-select>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                        <div class=\"divSelectClass\">\r\n                                            <mat-hint class=\"labelcss\">Communication Channel</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <mat-select name=\"department\">\r\n                                                    <mat-option>None</mat-option>\r\n                                                    <mat-option value=\"option1\">Option 1</mat-option>\r\n                                                </mat-select>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <h5 class=\"subHeader\">Source System</h5>\r\n                                        <div class=\"divSelectClass\">\r\n                                            <mat-hint class=\"labelcss\">System name</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <mat-select name=\"department\">\r\n                                                    <mat-option>None</mat-option>\r\n                                                    <mat-option value=\"option1\">Option 1</mat-option>\r\n                                                </mat-select>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                        <div class=\"divSelectClass\">\r\n                                            <mat-hint class=\"labelcss\">Module code</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <mat-select name=\"department\">\r\n                                                    <mat-option>None</mat-option>\r\n                                                    <mat-option value=\"option1\">Option 1</mat-option>\r\n                                                </mat-select>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                        <div class=\"divSelectClass\">\r\n                                            <mat-hint class=\"labelcss\">Service code</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <mat-select name=\"department\">\r\n                                                    <mat-option>None</mat-option>\r\n                                                    <mat-option value=\"option1\">Option 1</mat-option>\r\n                                                </mat-select>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n\r\n                                        <div class=\"divSelectClass\">\r\n                                            <mat-hint class=\"labelcss\">Process code</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <mat-select name=\"department\">\r\n                                                    <mat-option>None</mat-option>\r\n                                                    <mat-option value=\"option1\">Option 1</mat-option>\r\n                                                </mat-select>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                        <div class=\"divSelectClass\">\r\n                                            <mat-hint class=\"labelcss\">Communication Channel</mat-hint>\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <mat-select name=\"department\">\r\n                                                    <mat-option>None</mat-option>\r\n                                                    <mat-option value=\"option1\">Option 1</mat-option>\r\n                                                </mat-select>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </td>\r\n                                </tr>\r\n                            </table>\r\n                        </mat-card>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n        <div class=\"divbtns\">\r\n            <button type=\"button\" mat-raised-button color=\"primary\" [routerLink]=\"'/tags/tagmapping'\" class=\"fetchBtn\">\r\n                <mat-icon class=\"newIconclass\">save</mat-icon>&nbsp;&nbsp;fetch\r\n            </button>&nbsp;\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tags/taglist/taglist.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/tags/taglist/taglist.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsTagsTaglistTaglistComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"Outer-div\">\r\n  <mat-toolbar class=\"head\">\r\n    <mat-icon>desktop_mac</mat-icon> &nbsp; Tags - List\r\n  </mat-toolbar>\r\n  <br>\r\n  <div class=\"Div_card\">\r\n    <mat-card class=\"cardStyle\">\r\n\r\n      <!-- <div class=\"inputWithIcon inputIconBg\">\r\n        <input type=\"text\" class=\"form-control\" name=\"searchString\" placeholder=\"Search\" [(ngModel)]=\"searchField\" />\r\n        <i class=\"fa fa-search fa-lg fa-fw\" aria-hidden=\"true\"></i>\r\n        <a>\r\n          <mat-icon *ngIf=\"searchField\" (click)=\"clearSearchField()\" class=\"searchicon\">close</mat-icon>\r\n        </a>\r\n      </div> -->\r\n\r\n      <div class=\"inputWithIcon inputIconBg\">\r\n        <input type=\"text\" class=\"form-control\" name=\"searchString\" placeholder=\"Search\" [(ngModel)]=\"searchField\"\r\n          (keyup)=\"applyFilter($event.target.value)\" />\r\n        <i class=\"fa fa-search fa-lg fa-fw\" aria-hidden=\"true\"></i>\r\n        <button *ngIf=\"searchField\" class=\"searchicon\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"clearSearchField()\">\r\n          <mat-icon class=\"closicon\">close</mat-icon>\r\n        </button>\r\n      </div>\r\n\r\n      <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z0\">\r\n\r\n        <ng-container matColumnDef=\"tags\">\r\n          <th mat-header-cell *matHeaderCellDef>Tags</th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            <a [routerLink]=\"\">{{element.tag}}</a></td>\r\n        </ng-container>\r\n\r\n\r\n        <ng-container matColumnDef=\"externalSystem\">\r\n          <th mat-header-cell *matHeaderCellDef> External System </th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            <a [routerLink]=\"['/externalSystem/new']\"\r\n            [queryParams]=\"{id: element.extSysCode}\">{{element.extSysCode}}</a></td>\r\n        </ng-container>\r\n\r\n\r\n        <ng-container matColumnDef=\"reqqueuenametopick\">\r\n          <th mat-header-cell *matHeaderCellDef> Req queue name to pick </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.reqQueueNameToPick}} </td>\r\n        </ng-container>\r\n\r\n\r\n        <ng-container matColumnDef=\"respqueuenametopick\">\r\n          <th mat-header-cell *matHeaderCellDef> Resp queue name to pick </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.respQueueNameToPick}} </td>\r\n        </ng-container>\r\n\r\n\r\n        <ng-container matColumnDef=\"errqueuenametopick\">\r\n          <th mat-header-cell *matHeaderCellDef> Err queue name to pick </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.errQueueNameToPick}} </td>\r\n        </ng-container>\r\n\r\n\r\n        <ng-container matColumnDef=\"reqqueuenametosend\">\r\n          <th mat-header-cell *matHeaderCellDef>Req queue name to send</th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.reqQueueNameToSend}} </td>\r\n        </ng-container>\r\n\r\n\r\n        <ng-container matColumnDef=\"respqueuenametosend\">\r\n          <th mat-header-cell *matHeaderCellDef> Resp queue name to send </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.respQueueNameToSend}} </td>\r\n        </ng-container>\r\n\r\n\r\n        <ng-container matColumnDef=\"Errqueuenametosend\">\r\n          <th mat-header-cell *matHeaderCellDef> Err queue name to send </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.errQueueNameToSend}} </td>\r\n        </ng-container>\r\n\r\n\r\n        <ng-container matColumnDef=\"creator\">\r\n          <th mat-header-cell *matHeaderCellDef> Creator </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.creatorId}} </td>\r\n        </ng-container>\r\n\r\n\r\n        <ng-container matColumnDef=\"creatordtstamp\">\r\n          <th mat-header-cell *matHeaderCellDef> Creator dt stamp </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.createdDtStamp}} </td>\r\n        </ng-container>\r\n\r\n\r\n        <ng-container matColumnDef=\"verifier\">\r\n          <th mat-header-cell *matHeaderCellDef> Verifier </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.verifierId}} </td>\r\n        </ng-container>\r\n\r\n\r\n        <ng-container matColumnDef=\"verifierdtstamp\">\r\n          <th mat-header-cell *matHeaderCellDef> Verifier dt stamp</th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.verifiedDtStamp}} </td>\r\n        </ng-container>\r\n\r\n\r\n        <ng-container matColumnDef=\"latestAmendNo\">\r\n          <th mat-header-cell *matHeaderCellDef> Latest Amend No </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.LatestAmendNo}} </td>\r\n        </ng-container>\r\n\r\n\r\n        <ng-container matColumnDef=\"verified\">\r\n          <th mat-header-cell *matHeaderCellDef> Verified </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.VerifiedStatus}} </td>\r\n        </ng-container>\r\n\r\n\r\n        <ng-container matColumnDef=\"verifiedEver\">\r\n          <th mat-header-cell *matHeaderCellDef> Verified Ever</th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.verifiedEver}} </td>\r\n        </ng-container>\r\n\r\n\r\n        <ng-container matColumnDef=\"recordStatus\">\r\n          <th mat-header-cell *matHeaderCellDef> Record Status </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.recordStatus}} </td>\r\n        </ng-container>\r\n\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n      </table>\r\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n    </mat-card>\r\n    <div class=\"Div_btn_new_ex\">\r\n      <button mat-raised-button color=\"primary\" [routerLink]=\"'/tags/newtag'\" class=\"newtag\">\r\n        <mat-icon class=\"newIconclass\">desktop_mac</mat-icon>&nbsp;&nbsp;New Tag\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tags/tagmaplist/tagmaplist.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/tags/tagmaplist/tagmaplist.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsTagsTagmaplistTagmaplistComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"Outer-div\">\r\n  <mat-toolbar class=\"head\">\r\n    <mat-icon>desktop_mac</mat-icon> &nbsp; Tags Mapped - List\r\n  </mat-toolbar>\r\n  <br>\r\n  <div class=\"Div_card\">\r\n    <mat-card class=\"tabb\">\r\n      <div class=\"inputWithIcon inputIconBg\">\r\n        <input type=\"text\" class=\"form-control\" name=\"searchString\" placeholder=\"Search\" [(ngModel)]=\"searchField\"\r\n          (keyup)=\"applyFilter($event.target.value)\" />\r\n        <i class=\"fa fa-search fa-lg fa-fw\" aria-hidden=\"true\"></i>\r\n        <button *ngIf=\"searchField\" class=\"searchicon\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"clearSearchField()\">\r\n          <mat-icon class=\"closicon\">close</mat-icon>\r\n        </button>\r\n      </div>\r\n      <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z0\">\r\n        <ng-container matColumnDef=\"position\">\r\n          <th mat-header-cell *matHeaderCellDef>Target</th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"name\">\r\n          <th mat-header-cell *matHeaderCellDef> Source System </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"weight\">\r\n          <th mat-header-cell *matHeaderCellDef>Action</th>\r\n          <td mat-cell *matCellDef=\"let element\">\r\n            <button mat-raised-button color=\"primary\" [routerLink]=\"'/tags/tagmapview'\" class=\"show\">Show</button>\r\n          </td>\r\n        </ng-container>\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n      </table>\r\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n    </mat-card>\r\n    <div class=\"Div_btn_new_tag\">\r\n      <button mat-raised-button color=\"primary\" [routerLink]=\"'/tags/sourcetarget'\" class=\"newTagMapping\">\r\n        <mat-icon class=\"newIconclass\">desktop_mac</mat-icon>&nbsp;&nbsp;New Tag Mapping\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tags/tagmaplist/tagmapview/tagmappingview/tagmappingview.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/tags/tagmaplist/tagmapview/tagmappingview/tagmappingview.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsTagsTagmaplistTagmapviewTagmappingviewTagmappingviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div>\r\n    <mat-card>\r\n        <h5>10-11</h5>\r\n        <!-- <div >\r\n            By list of values:<br/>\r\n             <input class=\"serif\" type=\"file\" (change)=\"upload($event.target.files)\" > \r\n          </div> -->\r\n          <br/>\r\n          <div>\r\n             \r\n                  <mat-label>By Query</mat-label>\r\n                  <!-- <p>select * from</p> -->\r\n             \r\n          </div>\r\n          <br/>\r\n          <h6>condition</h6>\r\n          <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n          \r\n            <ng-container matColumnDef=\"position\">\r\n              <mat-header-cell *matHeaderCellDef> condition </mat-header-cell>\r\n              <mat-cell *matCellDef=\"let element\">{{element.position}} </mat-cell>\r\n            </ng-container>\r\n          \r\n           \r\n            <ng-container matColumnDef=\"name\">\r\n              <mat-header-cell *matHeaderCellDef> value </mat-header-cell>\r\n              <mat-cell *matCellDef=\"let element\"> {{element.name}}  </mat-cell>\r\n            </ng-container>\r\n          \r\n          \r\n          \r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n          </mat-table>\r\n          <br/>\r\n          <h6>By the list of values</h6>\r\n          <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n          \r\n            <ng-container matColumnDef=\"position\">\r\n              <mat-header-cell *matHeaderCellDef> condition </mat-header-cell>\r\n              <mat-cell *matCellDef=\"let element\"> </mat-cell>\r\n            </ng-container>\r\n          \r\n           \r\n            <ng-container matColumnDef=\"name\">\r\n              <mat-header-cell *matHeaderCellDef> value </mat-header-cell>\r\n              <mat-cell *matCellDef=\"let element\">  </mat-cell>\r\n            </ng-container>\r\n          \r\n          \r\n          \r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n          </mat-table>\r\n          <br/>\r\n          <br/>\r\n          \r\n          <button mat-raised-button color=\"primary\" class=\"save\" (click)=\"savechanges() \">close</button>\r\n    </mat-card>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tags/tagmaplist/tagmapview/tagmapview.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/tags/tagmaplist/tagmapview/tagmapview.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsTagsTagmaplistTagmapviewTagmapviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n\r\n  <div class=\"head\">\r\n   \r\n    <h3>Tags-Tag Mapping</h3>\r\n    \r\n</div>\r\n\r\n<div [hidden]=\"display2\">\r\n    <div class=\"container2\" >\r\n\r\n      <!-- <table mat-table>\r\n        <ng-container matColumnDef=\"name\" sticky>\r\n            <mat-header-cell *matHeaderCellDef> System name </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\"> </mat-cell>\r\n          </ng-container>\r\n      </table> -->\r\n      <div class=\"three\">\r\n          <mat-card>\r\n            <h5>Target System</h5>\r\n      <table>\r\n          <tr>\r\n         \r\n            <th   >System Name:</th>\r\n            <td  class=\"right\">\r\n              {{systemname}} \r\n            </td>\r\n \r\n          </tr>\r\n       \r\n\r\n          <tr>\r\n            <th>Module code:</th>\r\n            <td class=\"right\">\r\n              {{Modulecode}}\r\n            </td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <th>Service code:</th>\r\n            <td class=\"right\">\r\n              {{servicecode}}\r\n            </td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <th>Process code:</th>\r\n            <td class=\"right\">\r\n              {{processcode}}\r\n            </td>\r\n          </tr>\r\n\r\n          <tr>\r\n            <th>Communication Channel:</th>\r\n            <td class=\"right\">\r\n              {{communicationchannel}}\r\n            </td>\r\n          </tr>\r\n\r\n      </table>\r\n    </mat-card>\r\n    </div>\r\n    <div class=\"four\">\r\n        <mat-card>\r\n          <h5>Source System</h5>\r\n    <table>\r\n        <tr>\r\n          <th>System Name:</th>\r\n          <td class=\"right\">\r\n            {{systemname}} \r\n          </td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <th>Module code:</th>\r\n          <td class=\"right\">\r\n            {{Modulecode}}\r\n          </td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <th>Service code:</th>\r\n          <td class=\"right\">\r\n            {{servicecode}}\r\n          </td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <th>Process code:</th>\r\n          <td class=\"right\">\r\n            {{processcode}}\r\n          </td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <th>Communication Channel:</th>\r\n          <td class=\"right\">\r\n            {{communicationchannel}}\r\n          </td>\r\n        </tr>\r\n\r\n    </table>\r\n  </mat-card>\r\n  </div> \r\n               </div>\r\n</div>\r\n<br/>\r\n<br/>\r\n<mat-card>\r\n    <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n      \r\n        <ng-container matColumnDef=\"position\">\r\n          <mat-header-cell *matHeaderCellDef> Target </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\r\n        </ng-container>\r\n      \r\n        \r\n        <ng-container matColumnDef=\"name\">\r\n          <mat-header-cell *matHeaderCellDef> Source System </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"default\">\r\n          <mat-header-cell *matHeaderCellDef> default </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"targetname\">\r\n          <mat-header-cell *matHeaderCellDef> targetname </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"required\">\r\n          <mat-header-cell *matHeaderCellDef> required </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n        </ng-container> \r\n       \r\n        <ng-container matColumnDef=\"weight\">\r\n          <mat-header-cell *matHeaderCellDef> Action </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let element\">  <button mat-raised-button color=\"primary\" (click)=\"viewmap()\"class=\"show\" >view</button> </mat-cell>\r\n        </ng-container>\r\n      \r\n        \r\n      \r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n      </mat-table>\r\n</mat-card>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tags/tagmapping/addrule/addrule.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/tags/tagmapping/addrule/addrule.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsTagsTagmappingAddruleAddruleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div>\r\n    <mat-card>\r\n        <div >\r\n            By list of values:<br/>\r\n             <input class=\"serif\" type=\"file\" (change)=\"upload($event.target.files)\" > \r\n          </div>\r\n          <br/>\r\n          <div>\r\n              <mat-form-field appearance=\"outline\">\r\n                  <mat-label>By query</mat-label>\r\n                  <input matInput>\r\n              </mat-form-field>\r\n          </div>\r\n          <br/>\r\n          <h6>condition</h6>\r\n          <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n            \r\n            <ng-container matColumnDef=\"position\">\r\n              <mat-header-cell *matHeaderCellDef> condition </mat-header-cell>\r\n              <mat-cell *matCellDef=\"let element\"><input class=\"condtion\" type=\"text\" required > </mat-cell>\r\n            </ng-container>\r\n          \r\n         \r\n            <ng-container matColumnDef=\"name\">\r\n              <mat-header-cell *matHeaderCellDef> value </mat-header-cell>\r\n              <mat-cell *matCellDef=\"let element\"> <input class=\"value\" type=\"number\" required >  </mat-cell>\r\n            </ng-container>\r\n          \r\n          \r\n          \r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n          </mat-table>\r\n          <br/>\r\n          <button mat-flat-button class=\"addrowbut\" (click)=\"addElement() \">Add Row</button>\r\n          <br/>\r\n          <br/>\r\n          \r\n          <button mat-raised-button color=\"primary\" class=\"save\" (click)=\"savechanges() \">Save changes</button>\r\n    </mat-card>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tags/tagmapping/tagmapping.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/tags/tagmapping/tagmapping.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsTagsTagmappingTagmappingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"Outer-div\">\r\n    <div>\r\n        <mat-toolbar class=\"head\">\r\n            <mat-icon>desktop_mac</mat-icon> &nbsp; Tag Mapping\r\n        </mat-toolbar>\r\n    </div>\r\n    <div class=\"tableDiv\">\r\n        <div class=\"fixToScreen\">\r\n            <mat-card>\r\n                <table class=\"mat-elevation-z0\">\r\n                    <tr>\r\n                        <td>\r\n                            <h5>Source System</h5>\r\n                            <mat-list>\r\n                                <mat-list-item>\r\n                                    <p class=\"widthcls\">System Name</p>\r\n                                    <p class=\"widthcls\">{{systemname}}</p>\r\n                                </mat-list-item>\r\n                                <mat-list-item>\r\n                                    <p class=\"widthcls\">Module code</p>\r\n                                    <p class=\"widthcls\">{{Modulecode}}</p>\r\n                                </mat-list-item>\r\n                                <mat-list-item>\r\n                                    <p class=\"widthcls\">Service code</p>\r\n                                    <p class=\"widthcls\">{{servicecode}}</p>\r\n                                </mat-list-item>\r\n                                <mat-list-item>\r\n                                    <p class=\"widthcls\">Process code</p>\r\n                                    <p class=\"widthcls\">{{processcode}}</p>\r\n                                </mat-list-item>\r\n                                <mat-list-item>\r\n                                    <p class=\"widthcls\">Communication Channel</p>\r\n                                    <p class=\"widthcls\">{{communicationchannel}}</p>\r\n                                </mat-list-item>\r\n                            </mat-list>\r\n                        </td>\r\n                        <mat-divider vertical class=\"divider\"></mat-divider>\r\n                        <td>\r\n                            <h5>Target System</h5>\r\n                            <mat-list>\r\n                                <mat-list-item>\r\n                                    <p class=\"widthcls\">System Name</p>\r\n                                    <p class=\"widthcls\">{{systemname}}</p>\r\n                                </mat-list-item>\r\n                                <mat-list-item>\r\n                                    <p class=\"widthcls\">Module code</p>\r\n                                    <p class=\"widthcls\">{{Modulecode}}</p>\r\n                                </mat-list-item>\r\n                                <mat-list-item>\r\n                                    <p class=\"widthcls\">Service code</p>\r\n                                    <p class=\"widthcls\">{{servicecode}}</p>\r\n                                </mat-list-item>\r\n                                <mat-list-item>\r\n                                    <p class=\"widthcls\">Process code</p>\r\n                                    <p class=\"widthcls\">{{processcode}}</p>\r\n                                </mat-list-item>\r\n                                <mat-list-item>\r\n                                    <p class=\"widthcls\">Communication Channel</p>\r\n                                    <p class=\"widthcls\">{{communicationchannel}}</p>\r\n                                </mat-list-item>\r\n                            </mat-list>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n            </mat-card>\r\n        </div>\r\n\r\n        <div class=\"fixToScreen topPadding\">\r\n            <mat-card>\r\n                <table mat-table [dataSource]=\"dataSource\">\r\n                    <ng-container matColumnDef=\"position\">\r\n                        <th mat-header-cell *matHeaderCellDef> Target System </th>\r\n                        <td mat-cell *matCellDef=\"let element\">\r\n                            <mat-form-field appearance=\"outline\">\r\n                                <mat-select [(value)]=\"selected\" name=\"sourcesytem\">\r\n                                    <mat-option value=\"default\">please select</mat-option>\r\n                                    <mat-option>None</mat-option>\r\n                                    <mat-option value=\"option1\">Option 1</mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"name\">\r\n                        <th mat-header-cell *matHeaderCellDef> Source System </th>\r\n                        <td mat-cell *matCellDef=\"let element\">\r\n                            <mat-form-field appearance=\"outline\">\r\n                                <mat-select [(value)]=\"selected\" name=\"sourcesytem\">\r\n                                    <mat-option value=\"default\">please select</mat-option>\r\n                                    <mat-option>None</mat-option>\r\n                                    <mat-option value=\"option1\">Option 1</mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"weight\">\r\n                        <th mat-header-cell *matHeaderCellDef> Mandatory </th>\r\n                        <td mat-cell *matCellDef=\"let row\">\r\n                            <mat-checkbox>\r\n                            </mat-checkbox>\r\n                        </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"symbol\">\r\n                        <th mat-header-cell *matHeaderCellDef> Default </th>\r\n                        <td mat-cell *matCellDef=\"let element\">\r\n                            <input type=\"text\" required>\r\n                        </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"Validation\">\r\n                        <th mat-header-cell *matHeaderCellDef> Validation </th>\r\n                        <td mat-cell *matCellDef=\"let row\"> <button mat-raised-button color=\"primary\"\r\n                              class=\"ruleBtn\"  (click)=\"addrule()\">Add Rule\r\n                            </button> </td>\r\n                    </ng-container>\r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                </table>\r\n            </mat-card>\r\n            <div class=\"divbtns\">\r\n                <button type=\"button\" mat-raised-button color=\"primary\" [routerLink]=\"'/tags/tagmapview'\"\r\n                    class=\"mapBtn\"><mat-icon class=\"newIconclass\">save</mat-icon>&nbsp;&nbsp;Map</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./src/app/views/tags/newtag/addNode.ts":
  /*!**********************************************!*\
    !*** ./src/app/views/tags/newtag/addNode.ts ***!
    \**********************************************/

  /*! exports provided: Node, TagAttributes, AttributeData */

  /***/
  function srcAppViewsTagsNewtagAddNodeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Node", function () {
      return Node;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagAttributes", function () {
      return TagAttributes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AttributeData", function () {
      return AttributeData;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Node = /*#__PURE__*/_createClass(function Node() {
      _classCallCheck(this, Node);
    });

    var TagAttributes = /*#__PURE__*/_createClass(function TagAttributes() {
      _classCallCheck(this, TagAttributes);
    });

    var AttributeData = /*#__PURE__*/_createClass(function AttributeData() {
      _classCallCheck(this, AttributeData);
    });
    /***/

  },

  /***/
  "./src/app/views/tags/newtag/newtag.component.css":
  /*!********************************************************!*\
    !*** ./src/app/views/tags/newtag/newtag.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsTagsNewtagNewtagComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".Outer-div{\r\n    /* background-color: rgb(221, 217, 217) !important; */\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.head{\r\n    background-color: #e6e6e6;\r\n    height: 60px;\r\n}\r\n.tableDiv{\r\n    padding-top: 65px !important;\r\n    /* background-color: rgb(221, 217, 217) !important; */\r\n}\r\nmat-form-field{\r\n    width: 100%;\r\n}\r\n.fitheight{\r\n    padding-bottom: 5px;\r\n}\r\n::ng-deep .mat-form-field-flex > .mat-form-field-infix { padding: 0.5em 0px !important;}\r\n.labelcss{\r\n    float: left;\r\n    color: black;\r\n    padding-left: 2px;\r\n}\r\n.serif{\r\n    min-width: 50%;\r\n    padding-bottom: 5px;\r\n}\r\n.equalheight{\r\n    height: 57px;\r\n}\r\n.divbtns{\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n}\r\n.newIconclass{\r\n    margin-left: -7px !important;\r\n}\r\n.saveBtn{\r\n    margin-left: 10px;\r\n    background-color:#006699;\r\n}\r\n.extractBtn{\r\n    color: white;\r\n    background-color:#006699;\r\n}\r\n/* .divbackclass{\r\n    float: right !important;\r\n    padding-right: 30px !important;\r\n    padding-bottom: 10px !important;\r\n} */\r\n.btnbackclass{\r\n    background-color:#ce0000 !important;\r\n}\r\n.fixToScreen{\r\n    padding-left: 2%;\r\n    padding-right: 2%;\r\n}\r\n.leftInputClass{\r\n    padding-left: 10px;\r\n    padding-right: 5px;\r\n}\r\n.rightInputClass{\r\n    padding-left: 5px;\r\n    padding-right: 10px;\r\n}\r\n.middleInputClass{\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n.btnGoToListClass{\r\n    padding-bottom: 20px !important;\r\n    float: right !important;\r\n    padding-right: 2%;\r\n    padding-top: 20px;\r\n}\r\n.addNodeBtnClass{\r\n    padding-left: 10px;\r\n    padding-top: 20px;\r\n}\r\n.subHeader{\r\n    padding-top: 20px;\r\n    padding-bottom: 10px;\r\n}\r\n.Header{\r\n    padding-bottom: 5px;\r\n}\r\n.classBorder{\r\n    border: 1px solid rgba(0, 0, 0, 0.12);\r\n}\r\n.classOuterBorder{\r\n    padding-top: 20px;\r\n}\r\nh5{\r\n    padding-top: 15px;\r\n    padding-left: 15px;\r\n}\r\n.tdd{\r\n    text-align: center;\r\n    padding: 010px !important;\r\n    border-top: 1px rgba(0, 0, 0, 0.12) solid;\r\n    border-right: 1px rgba(0, 0, 0, 0.12) solid; \r\n    border-left: 1px rgba(0, 0, 0, 0.12) solid; \r\n    border-bottom: 1px rgba(0, 0, 0, 0.12) solid;\r\n}\r\n.mat-chip{\r\n    background-color: white;\r\n}\r\n.audit{\r\n    /* background-color:  rgb(221, 217, 217) !important; */\r\n    padding-bottom: 30px;\r\n    margin-left: 2%;\r\n    margin-right: 2%;\r\n}\r\ntable{\r\n    width: 100%;\r\n}\r\n.newTagBtn{\r\n    color: white;\r\n    background-color: #006699;\r\n}\r\n.cardStyle{\r\n    box-shadow: 0 0 black;\r\n    border: 1px solid #e6e6e6;\r\n    border-radius: 0px;\r\n}\r\n.subToolbar{\r\n    height: 50px;\r\n    font-size: large;\r\n    background-color: white;\r\n    border: 1px solid #e6e6e6;\r\n    border-bottom: 0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdGFncy9uZXd0YWcvbmV3dGFnLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxREFBcUQ7SUFDckQsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDRCQUE0QjtJQUM1QixxREFBcUQ7QUFDekQ7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUEseURBQXlELDZCQUE2QixDQUFDO0FBRXZGO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHdCQUF3QjtBQUM1QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLHdCQUF3QjtBQUM1QjtBQUVBOzs7O0dBSUc7QUFFSDtJQUNJLG1DQUFtQztBQUN2QztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLHFDQUFxQztBQUN6QztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHlDQUF5QztJQUN6QywyQ0FBMkM7SUFDM0MsMENBQTBDO0lBQzFDLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxzREFBc0Q7SUFDdEQsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy90YWdzL25ld3RhZy9uZXd0YWcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5PdXRlci1kaXZ7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMTcsIDIxNykgIWltcG9ydGFudDsgKi9cclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5oZWFke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxuICAgIGhlaWdodDogNjBweDtcclxufVxyXG4udGFibGVEaXZ7XHJcbiAgICBwYWRkaW5nLXRvcDogNjVweCAhaW1wb3J0YW50O1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjE3LCAyMTcpICFpbXBvcnRhbnQ7ICovXHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5maXRoZWlnaHR7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXggPiAubWF0LWZvcm0tZmllbGQtaW5maXggeyBwYWRkaW5nOiAwLjVlbSAwcHggIWltcG9ydGFudDt9XHJcblxyXG4ubGFiZWxjc3N7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmctbGVmdDogMnB4O1xyXG59XHJcblxyXG4uc2VyaWZ7XHJcbiAgICBtaW4td2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5lcXVhbGhlaWdodHtcclxuICAgIGhlaWdodDogNTdweDtcclxufVxyXG5cclxuLmRpdmJ0bnN7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ubmV3SWNvbmNsYXNze1xyXG4gICAgbWFyZ2luLWxlZnQ6IC03cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNhdmVCdG57XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAwNjY5OTtcclxufVxyXG5cclxuLmV4dHJhY3RCdG57XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDY2OTk7XHJcbn1cclxuXHJcbi8qIC5kaXZiYWNrY2xhc3N7XHJcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn0gKi9cclxuXHJcbi5idG5iYWNrY2xhc3N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNjZTAwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpeFRvU2NyZWVue1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG59XHJcblxyXG4ubGVmdElucHV0Q2xhc3N7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn1cclxuICBcclxuLnJpZ2h0SW5wdXRDbGFzc3tcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG4gIFxyXG4ubWlkZGxlSW5wdXRDbGFzc3tcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uYnRuR29Ub0xpc3RDbGFzc3tcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5hZGROb2RlQnRuQ2xhc3N7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLnN1YkhlYWRlcntcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5IZWFkZXJ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uY2xhc3NCb3JkZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4uY2xhc3NPdXRlckJvcmRlcntcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG5oNXtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4udGRke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMDEwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci10b3A6IDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpIHNvbGlkO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKSBzb2xpZDsgXHJcbiAgICBib3JkZXItbGVmdDogMXB4IHJnYmEoMCwgMCwgMCwgMC4xMikgc29saWQ7IFxyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHJnYmEoMCwgMCwgMCwgMC4xMikgc29saWQ7XHJcbn1cclxuLm1hdC1jaGlwe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5hdWRpdHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICByZ2IoMjIxLCAyMTcsIDIxNykgIWltcG9ydGFudDsgKi9cclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyJTtcclxufVxyXG5cclxudGFibGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm5ld1RhZ0J0bntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY2OTk7XHJcbn1cclxuXHJcbi5jYXJkU3R5bGV7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgYmxhY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG59XHJcblxyXG4uc3ViVG9vbGJhcntcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XHJcbiAgICBib3JkZXItYm90dG9tOiAwcHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/views/tags/newtag/newtag.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/views/tags/newtag/newtag.component.ts ***!
    \*******************************************************/

  /*! exports provided: NewtagComponent */

  /***/
  function srcAppViewsTagsNewtagNewtagComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewtagComponent", function () {
      return NewtagComponent;
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


    var _addNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./addNode */
    "./src/app/views/tags/newtag/addNode.ts");
    /* harmony import */


    var src_app_views_tags_tags_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/views/tags/tags.service */
    "./src/app/views/tags/tags.service.ts");
    /* harmony import */


    var src_app_views_tags_tags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/views/tags/tags */
    "./src/app/views/tags/tags.ts");

    var NewtagComponent = /*#__PURE__*/function () {
      function NewtagComponent(tagS) {
        _classCallCheck(this, NewtagComponent);

        this.tagS = tagS;
        this.dataSaved = false;
        this.Content = [];
        this.tag = []; // xml=new Array<Tags>();

        this.TagAttributeData = new _addNode__WEBPACK_IMPORTED_MODULE_2__["TagAttributes"]();
        this.TagAttributeList = new Array();
        this.list = [];
        this.attribute = [];
      }

      _createClass(NewtagComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          console.log(this.createdItems.toArray().length);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "upload",
        value: function upload(files) {//pick from one of the 4 styles of file uploads below
        }
      }, {
        key: "addnode",
        value: function addnode() {
          this.tag.push(new src_app_views_tags_tags__WEBPACK_IMPORTED_MODULE_4__["Tags"]());
        }
      }, {
        key: "AddAttribute",
        value: function AddAttribute() {// this.TagAttributeData.push(new TagAttributes());
        }
      }, {
        key: "save",
        value: function save() {}
      }, {
        key: "goToList",
        value: function goToList() {
          this.dataSaved = false;
        }
      }, {
        key: "extraxtXml",
        value: function extraxtXml() {
          var _this = this;

          this.tagS.extractXml().subscribe(function (response) {
            _this.tag = response;
            _this.TagAttributeList = response;
            console.log(_this.tag.length);

            for (var i = 0; i < _this.TagAttributeList.length; i++) {
              _this.list.push({
                attributeName: _this.TagAttributeList[i].attributeName,
                attributeValue: _this.TagAttributeList[i].attributeValue
              });
            }

            console.log(_this.list); // console.log(this.list[1].attributeName);
            // for(let i=0; i<this.TagAttributeList.length;i++)
            // {
            //   for(let j=0;j<this.TagAttributeList[i].attributeName.length;j++)
            //   {
            //     this.TagAttributeData.attributeName=this.TagAttributeList[i].attributeName
            //     console.log(this.TagAttributeList[i].attributeName[j]);
            //   }
            // }
            // console.log(this.TagAttributeData.attributeName);
          }); // console.log(this.xml.tagname);
        }
      }]);

      return NewtagComponent;
    }();

    NewtagComponent.ctorParameters = function () {
      return [{
        type: src_app_views_tags_tags_service__WEBPACK_IMPORTED_MODULE_3__["TagsService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('myVar'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], NewtagComponent.prototype, "createdItems", void 0);
    NewtagComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-newtag',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./newtag.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tags/newtag/newtag.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./newtag.component.css */
      "./src/app/views/tags/newtag/newtag.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_views_tags_tags_service__WEBPACK_IMPORTED_MODULE_3__["TagsService"]])], NewtagComponent);
    /***/
  },

  /***/
  "./src/app/views/tags/selectsourcetarget/selectsourcetarget.component.css":
  /*!********************************************************************************!*\
    !*** ./src/app/views/tags/selectsourcetarget/selectsourcetarget.component.css ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsTagsSelectsourcetargetSelectsourcetargetComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".head{\r\n    background-color: #e6e6e6;\r\n    height: 60px;\r\n}\r\n\r\n.Outer-div{\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.btnGoToListClass{\r\n    padding-bottom: 20px !important;\r\n    float: right !important;\r\n    padding-right: 2%;\r\n    padding-top: 20px;\r\n}\r\n\r\n.btnbackclass{\r\n    background-color:#ce0000 !important;\r\n}\r\n\r\n.newIconclass{\r\n    margin-left: -7px !important;\r\n}\r\n\r\n.tableDiv{\r\n    padding-top: 65px !important;\r\n    /* background-color: rgb(221, 217, 217) !important; */\r\n}\r\n\r\n.fixToScreen{\r\n    padding-left: 2% !important;\r\n    padding-right: 2% !important;\r\n}\r\n\r\ntable,mat-form-field{\r\n    width: 100% !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-flex > .mat-form-field-infix { padding: 0.5em 0px !important;}\r\n\r\n.divSelectClass{\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.labelcss{\r\n    float: left;\r\n    color: black;\r\n    padding-left: 2px;\r\n}\r\n\r\n.fetchBtn{\r\n    margin-left: 10px;\r\n    background-color:#006699;\r\n}\r\n\r\n.newIconclass{\r\n    margin-left: -7px !important;\r\n}\r\n\r\n.divbtns{\r\n    padding-top: 20px;\r\n    padding-bottom: 70px;\r\n    padding-left: 20px;\r\n}\r\n\r\n.subHeader{\r\n    padding-top: 5px;\r\n    padding-left: 10px;\r\n    padding-bottom: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdGFncy9zZWxlY3Rzb3VyY2V0YXJnZXQvc2VsZWN0c291cmNldGFyZ2V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIscURBQXFEO0FBQ3pEOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQSx5REFBeUQsNkJBQTZCLENBQUM7O0FBRXZGO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy90YWdzL3NlbGVjdHNvdXJjZXRhcmdldC9zZWxlY3Rzb3VyY2V0YXJnZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxuICAgIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuLk91dGVyLWRpdntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnRuR29Ub0xpc3RDbGFzc3tcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIlO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5idG5iYWNrY2xhc3N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNjZTAwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5ld0ljb25jbGFzc3tcclxuICAgIG1hcmdpbi1sZWZ0OiAtN3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YWJsZURpdntcclxuICAgIHBhZGRpbmctdG9wOiA2NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMTcsIDIxNykgIWltcG9ydGFudDsgKi9cclxufVxyXG5cclxuLmZpeFRvU2NyZWVue1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyJSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMiUgIWltcG9ydGFudDtcclxufVxyXG5cclxudGFibGUsbWF0LWZvcm0tZmllbGR7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXggPiAubWF0LWZvcm0tZmllbGQtaW5maXggeyBwYWRkaW5nOiAwLjVlbSAwcHggIWltcG9ydGFudDt9XHJcbiAgXHJcbi5kaXZTZWxlY3RDbGFzc3tcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5sYWJlbGNzc3tcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbn1cclxuXHJcbi5mZXRjaEJ0bntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDA2Njk5O1xyXG59XHJcblxyXG4ubmV3SWNvbmNsYXNze1xyXG4gICAgbWFyZ2luLWxlZnQ6IC03cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRpdmJ0bnN7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uc3ViSGVhZGVye1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/views/tags/selectsourcetarget/selectsourcetarget.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/views/tags/selectsourcetarget/selectsourcetarget.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: SelectsourcetargetComponent */

  /***/
  function srcAppViewsTagsSelectsourcetargetSelectsourcetargetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectsourcetargetComponent", function () {
      return SelectsourcetargetComponent;
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

    var SelectsourcetargetComponent = /*#__PURE__*/function () {
      function SelectsourcetargetComponent(router) {
        _classCallCheck(this, SelectsourcetargetComponent);

        this.router = router;
      }

      _createClass(SelectsourcetargetComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SelectsourcetargetComponent;
    }();

    SelectsourcetargetComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    SelectsourcetargetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-selectsourcetarget',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./selectsourcetarget.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tags/selectsourcetarget/selectsourcetarget.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./selectsourcetarget.component.css */
      "./src/app/views/tags/selectsourcetarget/selectsourcetarget.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], SelectsourcetargetComponent);
    /***/
  },

  /***/
  "./src/app/views/tags/taglist/taglist.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/views/tags/taglist/taglist.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsTagsTaglistTaglistComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".Outer-div{\r\n  /* background-color: rgb(221, 217, 217) !important; */\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n.head{\r\n  background-color: #e6e6e6;\r\n  height: 60px;\r\n}\r\n.Div_card{\r\n  padding-top: 1%;\r\n  padding-bottom: 3%;\r\n  padding-right: 1%;\r\n  padding-left: 1%;\r\n  /* background-color: rgb(221, 217, 217) !important; */\r\n\r\n}\r\n.cardStyle{\r\n  width: 100%;\r\n  box-shadow: 0 0 black;\r\n  border: 1px solid #e6e6e6;\r\n}\r\n.inputWithIcon input[type=\"text\"] {\r\n  padding-left: 40px;\r\n}\r\n.inputWithIcon {\r\n  position: relative;\r\n}\r\n.inputWithIcon i {\r\n  position: absolute;\r\n  margin-top: -33px !important;\r\n  padding-left: 10px !important;\r\n  color: grey;\r\n}\r\n.searchicon {\r\n  float: right;\r\n  margin-right: 6px;\r\n  margin-top: -36px;\r\n  position: relative !important;\r\n  z-index: 2;\r\n  color:grey;\r\n  padding-bottom: 10px;\r\n}\r\ninput[type=\"text\"] {\r\n  width: 100%;\r\n  height: 33px !important;\r\n  margin: 8px 0;\r\n  outline: none;\r\n  padding: 8px;\r\n  box-sizing: border-box;\r\n}\r\n.mat-header-row {\r\n  width: 100%;\r\n}\r\ntable {\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\nth, td {\r\n  text-align: center;\r\n  min-height: 100px;\r\n   padding: 0 10px !important;\r\n     border-top: 1px rgba(0, 0, 0, 0.12) solid;\r\n     border-right: 1px rgba(0, 0, 0, 0.12) solid; \r\n     border-left: 1px rgba(0, 0, 0, 0.12) solid; \r\n    }\r\nth.mat-header-cell{\r\n  text-align: center;\r\n}\r\n.Div_btn_new_ex{\r\n  padding-top: 1%;\r\n  padding-bottom: 2%;\r\n}\r\n.newIconclass{\r\n  margin-left: -7px !important;\r\n}\r\n.Div_btn_new_ex{\r\n  padding-top: 1%;\r\n  padding-bottom: 2%;\r\n}\r\n.newtag{\r\n  margin-left: 1%;\r\n  background-color:#006699;\r\n }\r\ninput:focus, input.form-control:focus {\r\n  outline:none !important;\r\n  outline-width: 0 !important;\r\n  box-shadow: none;\r\n  -moz-box-shadow: none;\r\n  -webkit-box-shadow: none;\r\n  border:1px solid gray;\r\n}\r\n.closicon{\r\n  padding-left: 10px;\r\n  vertical-align: baseline;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdGFncy90YWdsaXN0L3RhZ2xpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFEQUFxRDtFQUNyRCxZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIscURBQXFEOztBQUV2RDtBQUNBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QixXQUFXO0FBQ2I7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsVUFBVTtFQUNWLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsYUFBYTtFQUNiLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUdBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtFQUNwQjtBQUdGO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtHQUNoQiwwQkFBMEI7S0FDeEIseUNBQXlDO0tBQ3pDLDJDQUEyQztLQUMzQywwQ0FBMEM7SUFDM0M7QUFFSjtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxlQUFlO0VBQ2Ysd0JBQXdCO0NBQ3pCO0FBRUE7RUFDQyx1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RhZ3MvdGFnbGlzdC90YWdsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuT3V0ZXItZGl2e1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIxNywgMjE3KSAhaW1wb3J0YW50OyAqL1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uaGVhZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG4gIGhlaWdodDogNjBweDtcclxufVxyXG4uRGl2X2NhcmR7XHJcbiAgcGFkZGluZy10b3A6IDElO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxJTtcclxuICBwYWRkaW5nLWxlZnQ6IDElO1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIxNywgMjE3KSAhaW1wb3J0YW50OyAqL1xyXG5cclxufVxyXG4uY2FyZFN0eWxle1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCBibGFjaztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xyXG59XHJcblxyXG4uaW5wdXRXaXRoSWNvbiBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG59XHJcblxyXG4uaW5wdXRXaXRoSWNvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaW5wdXRXaXRoSWNvbiBpIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogLTMzcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuICBjb2xvcjogZ3JleTtcclxufVxyXG5cclxuLnNlYXJjaGljb24ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICBtYXJnaW4tdG9wOiAtMzZweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICB6LWluZGV4OiAyO1xyXG4gIGNvbG9yOmdyZXk7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMzcHggIWltcG9ydGFudDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5tYXQtaGVhZGVyLXJvdyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG5cclxudGgsIHRkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgIHBhZGRpbmc6IDAgMTBweCAhaW1wb3J0YW50O1xyXG4gICAgIGJvcmRlci10b3A6IDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpIHNvbGlkO1xyXG4gICAgIGJvcmRlci1yaWdodDogMXB4IHJnYmEoMCwgMCwgMCwgMC4xMikgc29saWQ7IFxyXG4gICAgIGJvcmRlci1sZWZ0OiAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKSBzb2xpZDsgXHJcbiAgICB9IFxyXG5cclxudGgubWF0LWhlYWRlci1jZWxse1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLkRpdl9idG5fbmV3X2V4e1xyXG4gIHBhZGRpbmctdG9wOiAxJTtcclxuICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbn1cclxuXHJcbi5uZXdJY29uY2xhc3N7XHJcbiAgbWFyZ2luLWxlZnQ6IC03cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLkRpdl9idG5fbmV3X2V4e1xyXG4gIHBhZGRpbmctdG9wOiAxJTtcclxuICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbn1cclxuXHJcbi5uZXd0YWd7XHJcbiAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzAwNjY5OTtcclxuIH1cclxuXHJcbiBpbnB1dDpmb2N1cywgaW5wdXQuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICBvdXRsaW5lOm5vbmUgIWltcG9ydGFudDtcclxuICBvdXRsaW5lLXdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlcjoxcHggc29saWQgZ3JheTtcclxufVxyXG5cclxuLmNsb3NpY29ue1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/views/tags/taglist/taglist.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/views/tags/taglist/taglist.component.ts ***!
    \*********************************************************/

  /*! exports provided: TaglistComponent */

  /***/
  function srcAppViewsTagsTaglistTaglistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaglistComponent", function () {
      return TaglistComponent;
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


    var _tags_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../tags.service */
    "./src/app/views/tags/tags.service.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");

    var TaglistComponent = /*#__PURE__*/function () {
      function TaglistComponent(route, tagsService) {
        _classCallCheck(this, TaglistComponent);

        this.route = route;
        this.tagsService = tagsService;
        this.displayedColumns = ['tags', 'externalSystem', 'reqqueuenametopick', 'respqueuenametopick', 'errqueuenametopick', 'reqqueuenametosend', 'respqueuenametosend', 'Errqueuenametosend', 'creator', 'creatordtstamp', 'verifier', 'verifierdtstamp', 'latestAmendNo', 'verified', 'verifiedEver', 'recordStatus'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
      }

      _createClass(TaglistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadAllData();
        }
      }, {
        key: "newtag",
        value: function newtag() {
          this.route.navigateByUrl('/tagList/newtag');
        }
      }, {
        key: "loadAllData",
        value: function loadAllData() {
          var _this2 = this;

          console.log("Reached ts");
          this.tagsService.getTagList().subscribe(function (response) {
            _this2.dataSource.data = response;
            console.log(response);
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          filterValue = filterValue.trim(); // Remove whitespace

          filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches

          this.dataSource.filter = filterValue;
        }
      }, {
        key: "clearSearchField",
        value: function clearSearchField() {
          this.searchField = '';
          this.dataSource.filter = '';
        }
      }]);

      return TaglistComponent;
    }();

    TaglistComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _tags_service__WEBPACK_IMPORTED_MODULE_3__["TagsService"]
      }];
    };

    TaglistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-taglist',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./taglist.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tags/taglist/taglist.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./taglist.component.css */
      "./src/app/views/tags/taglist/taglist.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _tags_service__WEBPACK_IMPORTED_MODULE_3__["TagsService"]])], TaglistComponent);
    /***/
  },

  /***/
  "./src/app/views/tags/tagmaplist/tagmaplist.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/views/tags/tagmaplist/tagmaplist.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsTagsTagmaplistTagmaplistComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".Outer-div{\r\n    /* background-color: rgb(221, 217, 217) !important; */\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.head{\r\n    background-color: #e6e6e6;\r\n    height: 60px;\r\n}\r\n\r\n.Div_card{\r\n    padding-top: 1%;\r\n    padding-bottom: 3%;\r\n    padding-right: 1%;\r\n    padding-left: 1%;\r\n    /* background-color: rgb(221, 217, 217) !important; */\r\n  \r\n}\r\n\r\n.tabb{\r\n    width: 100%;\r\n    box-shadow: 0 0 black;\r\n    border: 1px solid #e6e6e6;\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\nth, td {\r\n  min-height: 100px;\r\n   padding: 0 10px !important;\r\n     border-top: 1px rgba(0, 0, 0, 0.12) solid;\r\n     border-right: 1px rgba(0, 0, 0, 0.12) solid; \r\n     border-left: 1px rgba(0, 0, 0, 0.12) solid; \r\n}\r\n\r\nth.mat-header-cell{\r\n    text-align: center;\r\n}\r\n\r\n.newTagMapping{\r\n    margin-left: 1%;\r\n    background-color:#006699;\r\n}\r\n\r\n.Div_btn_new_tag{\r\n    padding-top: 1%;\r\n    padding-bottom: 2%;\r\n}\r\n\r\n.show{\r\n    background-color:#006699;\r\n}\r\n\r\n.inputWithIcon input[type=\"text\"] {\r\n    padding-left: 40px;\r\n  }\r\n\r\n.inputWithIcon {\r\n    position: relative;\r\n  }\r\n\r\n.inputWithIcon i {\r\n    position: absolute;\r\n    margin-top: -33px !important;\r\n    padding-left: 10px !important;\r\n    color: grey;\r\n  }\r\n\r\n.searchicon {\r\n    float: right;\r\n    margin-right: 6px;\r\n    margin-top: -36px;\r\n    position: relative !important;\r\n    z-index: 2;\r\n    color:grey;\r\n    padding-bottom: 10px;\r\n  }\r\n\r\ninput[type=\"text\"] {\r\n    width: 100%;\r\n    height: 33px !important;\r\n    margin: 8px 0;\r\n    outline: none;\r\n    padding: 8px;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n.closicon{\r\n    padding-left: 10px;\r\n    vertical-align: baseline;\r\n  }\r\n\r\ninput:focus, input.form-control:focus {\r\n    outline:none !important;\r\n    outline-width: 0 !important;\r\n    box-shadow: none;\r\n    -moz-box-shadow: none;\r\n    -webkit-box-shadow: none;\r\n    border:1px solid gray;\r\n  }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdGFncy90YWdtYXBsaXN0L3RhZ21hcGxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFEQUFxRDtJQUNyRCxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIscURBQXFEOztBQUV6RDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFHQTtFQUNFLGlCQUFpQjtHQUNoQiwwQkFBMEI7S0FDeEIseUNBQXlDO0tBQ3pDLDJDQUEyQztLQUMzQywwQ0FBMEM7QUFDL0M7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLFdBQVc7RUFDYjs7QUFFQTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1YsVUFBVTtJQUNWLG9CQUFvQjtFQUN0Qjs7QUFFQTtJQUNFLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGFBQWE7SUFDYixZQUFZO0lBQ1osc0JBQXNCO0VBQ3hCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHdCQUF3QjtFQUMxQjs7QUFFQTtJQUNFLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIscUJBQXFCO0VBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvdGFncy90YWdtYXBsaXN0L3RhZ21hcGxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5PdXRlci1kaXZ7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMTcsIDIxNykgIWltcG9ydGFudDsgKi9cclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaGVhZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5EaXZfY2FyZHtcclxuICAgIHBhZGRpbmctdG9wOiAxJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDElO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxJTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIxNywgMjE3KSAhaW1wb3J0YW50OyAqL1xyXG4gIFxyXG59XHJcblxyXG4udGFiYntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIGJsYWNrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG50aCwgdGQge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICBwYWRkaW5nOiAwIDEwcHggIWltcG9ydGFudDtcclxuICAgICBib3JkZXItdG9wOiAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKSBzb2xpZDtcclxuICAgICBib3JkZXItcmlnaHQ6IDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpIHNvbGlkOyBcclxuICAgICBib3JkZXItbGVmdDogMXB4IHJnYmEoMCwgMCwgMCwgMC4xMikgc29saWQ7IFxyXG59IFxyXG5cclxudGgubWF0LWhlYWRlci1jZWxse1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubmV3VGFnTWFwcGluZ3tcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAwNjY5OTtcclxufVxyXG5cclxuLkRpdl9idG5fbmV3X3RhZ3tcclxuICAgIHBhZGRpbmctdG9wOiAxJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcclxufVxyXG5cclxuLnNob3d7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDY2OTk7XHJcbn1cclxuXHJcbi5pbnB1dFdpdGhJY29uIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgIHBhZGRpbmctbGVmdDogNDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0V2l0aEljb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAuaW5wdXRXaXRoSWNvbiBpIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IC0zM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaGljb24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzZweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGNvbG9yOmdyZXk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG5cclxuICAuY2xvc2ljb257XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgfVxyXG5cclxuICBpbnB1dDpmb2N1cywgaW5wdXQuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIG91dGxpbmU6bm9uZSAhaW1wb3J0YW50O1xyXG4gICAgb3V0bGluZS13aWR0aDogMCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgZ3JheTtcclxuICB9XHJcblxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/views/tags/tagmaplist/tagmaplist.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/views/tags/tagmaplist/tagmaplist.component.ts ***!
    \***************************************************************/

  /*! exports provided: TagmaplistComponent */

  /***/
  function srcAppViewsTagsTagmaplistTagmaplistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagmaplistComponent", function () {
      return TagmaplistComponent;
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

    var TagmaplistComponent = /*#__PURE__*/function () {
      function TagmaplistComponent(route) {
        _classCallCheck(this, TagmaplistComponent);

        this.route = route;
        this.displayedColumns = ['position', 'name', 'weight'];
        this.dataSource = ELEMENT_DATA;
      }

      _createClass(TagmaplistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "tagmapview",
        value: function tagmapview() {
          this.route.navigateByUrl('/tagList/tagmapview');
        }
      }, {
        key: "clearSearchField",
        value: function clearSearchField() {
          this.searchField = '';
        }
      }]);

      return TagmaplistComponent;
    }();

    TagmaplistComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    TagmaplistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tagmaplist',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tagmaplist.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tags/tagmaplist/tagmaplist.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tagmaplist.component.css */
      "./src/app/views/tags/tagmaplist/tagmaplist.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], TagmaplistComponent);
    var ELEMENT_DATA = [{
      position: 1,
      name: 'Hydrogen',
      weight: 1.0079
    }, {
      position: 2,
      name: 'Helium',
      weight: 4.0026
    }];
    /***/
  },

  /***/
  "./src/app/views/tags/tagmaplist/tagmapview/tagmappingview/tagmappingview.component.css":
  /*!**********************************************************************************************!*\
    !*** ./src/app/views/tags/tagmaplist/tagmapview/tagmappingview/tagmappingview.component.css ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsTagsTagmaplistTagmapviewTagmappingviewTagmappingviewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".condtion{\r\n  width: 80%;\r\n  }\r\n  .value{\r\n      width:30%;\r\n  }\r\n  table {\r\n      width: 100%;\r\n    }\r\n  .addrowbut{\r\n        width: 100%;\r\n     background-color:rgba(0, 0, 0, 0.26);\r\n    }\r\n  .save{\r\n      margin-left: 55%;\r\n        background-color:  #3f51b5;;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdGFncy90YWdtYXBsaXN0L3RhZ21hcHZpZXcvdGFnbWFwcGluZ3ZpZXcvdGFnbWFwcGluZ3ZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVjtFQUNBO01BQ0ksU0FBUztFQUNiO0VBQ0E7TUFDSSxXQUFXO0lBQ2I7RUFDQTtRQUNJLFdBQVc7S0FDZCxvQ0FBb0M7SUFDckM7RUFDQTtNQUNFLGdCQUFnQjtRQUNkLDBCQUEwQjtJQUM5QiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RhZ3MvdGFnbWFwbGlzdC90YWdtYXB2aWV3L3RhZ21hcHBpbmd2aWV3L3RhZ21hcHBpbmd2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uZHRpb257XHJcbiAgd2lkdGg6IDgwJTtcclxuICB9XHJcbiAgLnZhbHVle1xyXG4gICAgICB3aWR0aDozMCU7XHJcbiAgfVxyXG4gIHRhYmxlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuYWRkcm93YnV0e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjI2KTtcclxuICAgIH1cclxuICAgIC5zYXZle1xyXG4gICAgICBtYXJnaW4tbGVmdDogNTUlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICAjM2Y1MWI1OztcclxuICAgIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/views/tags/tagmaplist/tagmapview/tagmappingview/tagmappingview.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/views/tags/tagmaplist/tagmapview/tagmappingview/tagmappingview.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: TagmappingviewComponent */

  /***/
  function srcAppViewsTagsTagmaplistTagmapviewTagmappingviewTagmappingviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagmappingviewComponent", function () {
      return TagmappingviewComponent;
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

    var TagmappingviewComponent = /*#__PURE__*/function () {
      function TagmappingviewComponent(dialogref) {
        _classCallCheck(this, TagmappingviewComponent);

        this.dialogref = dialogref;
        this.displayedColumns = ['position', 'name'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
      }

      _createClass(TagmappingviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "savechanges",
        value: function savechanges() {
          this.dialogref.close();
        }
      }]);

      return TagmappingviewComponent;
    }();

    TagmappingviewComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }];
    };

    TagmappingviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tagmappingview',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tagmappingview.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tags/tagmaplist/tagmapview/tagmappingview/tagmappingview.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tagmappingview.component.css */
      "./src/app/views/tags/tagmaplist/tagmapview/tagmappingview/tagmappingview.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])], TagmappingviewComponent);
    var ELEMENT_DATA = [{
      position: 12,
      name: 'sam',
      weight: 1.0079
    }];
    /***/
  },

  /***/
  "./src/app/views/tags/tagmaplist/tagmapview/tagmapview.component.css":
  /*!***************************************************************************!*\
    !*** ./src/app/views/tags/tagmaplist/tagmapview/tagmapview.component.css ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsTagsTagmaplistTagmapviewTagmapviewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container2{\r\n    display:flex;\r\n}\r\n\r\n.head{\r\n    \r\n    background-color: white;\r\n    margin-bottom: 30px;\r\n   }\r\n\r\n.three{\r\n    flex:1 1 auto;\r\n    margin-left: 10%;\r\n    margin-right: 0%;\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n  }\r\n\r\n.four{\r\n\r\n    margin-left: 10%;\r\n    margin-right: 10%;\r\n    flex:1 1 auto;\r\n}\r\n\r\n.show{\r\n       \r\n        background-color: #3f51b5;\r\n      \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdGFncy90YWdtYXBsaXN0L3RhZ21hcHZpZXcvdGFnbWFwdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0dBQ3BCOztBQUdIO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxXQUFXO0VBQ2I7O0FBRUE7O0lBRUUsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCOztBQUNBOztRQUVRLHlCQUF5Qjs7QUFFakMiLCJmaWxlIjoic3JjL2FwcC92aWV3cy90YWdzL3RhZ21hcGxpc3QvdGFnbWFwdmlldy90YWdtYXB2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyMntcclxuICAgIGRpc3BsYXk6ZmxleDtcclxufVxyXG5cclxuLmhlYWR7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgfVxyXG5cclxuXHJcbi50aHJlZXtcclxuICAgIGZsZXg6MSAxIGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwJTtcclxufVxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5mb3Vye1xyXG5cclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgIGZsZXg6MSAxIGF1dG87XHJcbn1cclxuLnNob3d7XHJcbiAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gICAgICBcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/views/tags/tagmaplist/tagmapview/tagmapview.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/views/tags/tagmaplist/tagmapview/tagmapview.component.ts ***!
    \**************************************************************************/

  /*! exports provided: TagmapviewComponent */

  /***/
  function srcAppViewsTagsTagmaplistTagmapviewTagmapviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagmapviewComponent", function () {
      return TagmapviewComponent;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _tagmappingview_tagmappingview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tagmappingview/tagmappingview.component */
    "./src/app/views/tags/tagmaplist/tagmapview/tagmappingview/tagmappingview.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var TagmapviewComponent = /*#__PURE__*/function () {
      function TagmapviewComponent(route, dialog) {
        _classCallCheck(this, TagmapviewComponent);

        this.route = route;
        this.dialog = dialog;
        this.systemname = "ITAX";
        this.Modulecode = "IOS-91";
        this.servicecode = "1200";
        this.processcode = "1010000";
        this.communicationchannel = "MDB";
        this.displayedColumns = ['position', 'name', 'targetname', 'required', 'default', 'weight'];
        this.dataSource = ELEMENT_DATA;
      }

      _createClass(TagmapviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "viewmap",
        value: function viewmap() {
          var dialogconfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
          dialogconfig.disableClose = true;
          dialogconfig.autoFocus = true;
          dialogconfig.width = "30%";
          this.dialog.open(_tagmappingview_tagmappingview_component__WEBPACK_IMPORTED_MODULE_3__["TagmappingviewComponent"], dialogconfig);
        }
      }]);

      return TagmapviewComponent;
    }();

    TagmapviewComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }];
    };

    TagmapviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tagmapview',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tagmapview.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tags/tagmaplist/tagmapview/tagmapview.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tagmapview.component.css */
      "./src/app/views/tags/tagmaplist/tagmapview/tagmapview.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])], TagmapviewComponent);
    var ELEMENT_DATA = [{
      position: 1,
      name: 'Hydrogen',
      weight: 1.0079,
      targetname: 'ssss',
      required: 'aaaaa',
      "default": 'mmmmm'
    }, {
      position: 2,
      name: 'Helium',
      weight: 4.0026,
      targetname: 'ssss',
      required: 'aaaaa',
      "default": 'mmmmm'
    }];
    /***/
  },

  /***/
  "./src/app/views/tags/tagmapping/addrule/addrule.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/views/tags/tagmapping/addrule/addrule.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsTagsTagmappingAddruleAddruleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".condtion{\r\nwidth: 80%;\r\n}\r\n.value{\r\n    width:30%;\r\n}\r\ntable {\r\n    width: 100%;\r\n  }\r\n.addrowbut{\r\n      width: 100%;\r\n   background-color:rgba(0, 0, 0, 0.26);\r\n  }\r\n.save{\r\n    margin-left: 55%;\r\n      background-color:  #3f51b5;;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdGFncy90YWdtYXBwaW5nL2FkZHJ1bGUvYWRkcnVsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLFdBQVc7RUFDYjtBQUNBO01BQ0ksV0FBVztHQUNkLG9DQUFvQztFQUNyQztBQUNBO0lBQ0UsZ0JBQWdCO01BQ2QsMEJBQTBCO0VBQzlCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvdGFncy90YWdtYXBwaW5nL2FkZHJ1bGUvYWRkcnVsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmR0aW9ue1xyXG53aWR0aDogODAlO1xyXG59XHJcbi52YWx1ZXtcclxuICAgIHdpZHRoOjMwJTtcclxufVxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmFkZHJvd2J1dHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjI2KTtcclxuICB9XHJcbiAgLnNhdmV7XHJcbiAgICBtYXJnaW4tbGVmdDogNTUlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzNmNTFiNTs7XHJcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/views/tags/tagmapping/addrule/addrule.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/views/tags/tagmapping/addrule/addrule.component.ts ***!
    \********************************************************************/

  /*! exports provided: AddruleComponent */

  /***/
  function srcAppViewsTagsTagmappingAddruleAddruleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddruleComponent", function () {
      return AddruleComponent;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var AddruleComponent = /*#__PURE__*/function () {
      function AddruleComponent(dialogref) {
        _classCallCheck(this, AddruleComponent);

        this.dialogref = dialogref;
        this.displayedColumns = ['position', 'name'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
      }

      _createClass(AddruleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "upload",
        value: function upload(files) {//pick from one of the 4 styles of file uploads below
        }
      }, {
        key: "addElement",
        value: function addElement() {
          ELEMENT_DATA.push({
            position: 0,
            name: ''
          });
          this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        }
      }, {
        key: "savechanges",
        value: function savechanges() {
          this.dialogref.close();
        }
      }]);

      return AddruleComponent;
    }();

    AddruleComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
      }];
    };

    AddruleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-addrule',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./addrule.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tags/tagmapping/addrule/addrule.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./addrule.component.css */
      "./src/app/views/tags/tagmapping/addrule/addrule.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])], AddruleComponent);
    var ELEMENT_DATA = [{
      position: 1,
      name: 'Hydrogen'
    }];
    /***/
  },

  /***/
  "./src/app/views/tags/tagmapping/tagmapping.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/views/tags/tagmapping/tagmapping.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsTagsTagmappingTagmappingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".Outer-div{\r\n    height: 100%;\r\n    width: 100%;\r\n    /* background-color: rgb(221, 217, 217) !important; */\r\n}\r\n.tableDiv{\r\n    padding-top: 25px !important;\r\n    /* background-color: rgb(221, 217, 217) !important; */\r\n}\r\n.fixToScreen{\r\n    padding-left: 30px !important;\r\n    padding-right: 30px !important;\r\n}\r\ntable {\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n.widthcls{\r\n    width: 50%;\r\n}\r\n.mat-list-base .mat-list-item{\r\n    height: 35px;\r\n}\r\n.divider{\r\n    height: 215px;\r\n}\r\n.topPadding{\r\n    padding-top: 20px;\r\n}\r\n.head{\r\n    background-color: #e6e6e6;\r\n    height: 60px;\r\n}\r\n.mapBtn{\r\n    margin-left: 10px;\r\n    background-color:#006699;\r\n}\r\n.divbtns{\r\n    padding-top: 20px;\r\n    padding-bottom: 70px;\r\n}\r\n.ruleBtn{\r\n    background-color:#006699;\r\n}\r\nth.mat-header-cell{\r\n    text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdGFncy90YWdtYXBwaW5nL3RhZ21hcHBpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gscURBQXFEO0FBQ3pEO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIscURBQXFEO0FBQ3pEO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsOEJBQThCO0FBQ2xDO0FBR0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix3QkFBd0I7QUFDNUI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvdGFncy90YWdtYXBwaW5nL3RhZ21hcHBpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5PdXRlci1kaXZ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIxNywgMjE3KSAhaW1wb3J0YW50OyAqL1xyXG59XHJcbi50YWJsZURpdntcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMTcsIDIxNykgIWltcG9ydGFudDsgKi9cclxufVxyXG4uZml4VG9TY3JlZW57XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ud2lkdGhjbHN7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbXtcclxuICAgIGhlaWdodDogMzVweDtcclxufVxyXG5cclxuLmRpdmlkZXJ7XHJcbiAgICBoZWlnaHQ6IDIxNXB4O1xyXG59XHJcblxyXG4udG9wUGFkZGluZ3tcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uaGVhZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5tYXBCdG57XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAwNjY5OTtcclxufVxyXG5cclxuLmRpdmJ0bnN7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3MHB4O1xyXG59XHJcblxyXG4ucnVsZUJ0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAwNjY5OTtcclxufVxyXG5cclxudGgubWF0LWhlYWRlci1jZWxse1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/views/tags/tagmapping/tagmapping.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/views/tags/tagmapping/tagmapping.component.ts ***!
    \***************************************************************/

  /*! exports provided: TagmappingComponent, Country */

  /***/
  function srcAppViewsTagsTagmappingTagmappingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagmappingComponent", function () {
      return TagmappingComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Country", function () {
      return Country;
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


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _addrule_addrule_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./addrule/addrule.component */
    "./src/app/views/tags/tagmapping/addrule/addrule.component.ts");

    var TagmappingComponent = /*#__PURE__*/function () {
      function TagmappingComponent(route, dialog) {
        _classCallCheck(this, TagmappingComponent);

        this.route = route;
        this.dialog = dialog;
        this.displayedColumns = ['position', 'name', 'weight', 'symbol', 'Validation'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
        this.dataSource = ELEMENT_DATA;
        this.selected = 'default';
        this.display = false;
        this.display2 = true;
        this.percent = 28;
        this.datatypevalue = ['NUMBER', 'DATE', 'Char', 'VarChar'];
        this.systemname = "ITAX";
        this.Modulecode = "IOS-91";
        this.servicecode = "1200";
        this.processcode = "1010000";
        this.communicationchannel = "MDB";
      } //   countries = [
      //     new Country(1, 'USA' ),
      //     new Country(2, 'India' ),
      //     new Country(3, 'Australia' ),
      //     new Country(4, 'Brazil')
      //  ];


      _createClass(TagmappingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.selected = "default";
        }
      }, {
        key: "newtag",
        value: function newtag() {
          this.display = true;
          this.display2 = false; // this.route.navigateByUrl('/tagmapping/tagmappinglist');
        }
      }, {
        key: "map",
        value: function map() {
          this.route.navigateByUrl('tagList/tagmapview');
        }
      }, {
        key: "addrule",
        value: function addrule() {
          var dialogconfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
          dialogconfig.disableClose = true;
          dialogconfig.autoFocus = true;
          dialogconfig.width = "30%";
          this.dialog.open(_addrule_addrule_component__WEBPACK_IMPORTED_MODULE_5__["AddruleComponent"], dialogconfig);
        }
      }]);

      return TagmappingComponent;
    }();

    TagmappingComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }];
    };

    TagmappingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tagmapping',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tagmapping.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tags/tagmapping/tagmapping.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tagmapping.component.css */
      "./src/app/views/tags/tagmapping/tagmapping.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])], TagmappingComponent);

    var Country = /*#__PURE__*/_createClass(function Country() {
      _classCallCheck(this, Country);
    });

    var ELEMENT_DATA = [{
      position: 1,
      name: 'Hydrogen',
      weight: 1.0079,
      symbol: 'H',
      Validation: 'asd'
    }, {
      position: 1,
      name: 'Hydrogen',
      weight: 1.0079,
      symbol: 'H',
      Validation: 'asd'
    }];
    /***/
  },

  /***/
  "./src/app/views/tags/tags-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/views/tags/tags-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: tags */

  /***/
  function srcAppViewsTagsTagsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tags", function () {
      return tags;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _taglist_taglist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./taglist/taglist.component */
    "./src/app/views/tags/taglist/taglist.component.ts");
    /* harmony import */


    var _newtag_newtag_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./newtag/newtag.component */
    "./src/app/views/tags/newtag/newtag.component.ts");
    /* harmony import */


    var _tagmapping_tagmapping_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tagmapping/tagmapping.component */
    "./src/app/views/tags/tagmapping/tagmapping.component.ts");
    /* harmony import */


    var _tagmapping_addrule_addrule_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tagmapping/addrule/addrule.component */
    "./src/app/views/tags/tagmapping/addrule/addrule.component.ts");
    /* harmony import */


    var _tagmaplist_tagmaplist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tagmaplist/tagmaplist.component */
    "./src/app/views/tags/tagmaplist/tagmaplist.component.ts");
    /* harmony import */


    var _tagmaplist_tagmapview_tagmapview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tagmaplist/tagmapview/tagmapview.component */
    "./src/app/views/tags/tagmaplist/tagmapview/tagmapview.component.ts");
    /* harmony import */


    var _tagmaplist_tagmapview_tagmappingview_tagmappingview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tagmaplist/tagmapview/tagmappingview/tagmappingview.component */
    "./src/app/views/tags/tagmaplist/tagmapview/tagmappingview/tagmappingview.component.ts");
    /* harmony import */


    var _selectsourcetarget_selectsourcetarget_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./selectsourcetarget/selectsourcetarget.component */
    "./src/app/views/tags/selectsourcetarget/selectsourcetarget.component.ts");

    var tags = [{
      path: '',
      component: _taglist_taglist_component__WEBPACK_IMPORTED_MODULE_1__["TaglistComponent"]
    }, {
      path: 'taglist',
      component: _taglist_taglist_component__WEBPACK_IMPORTED_MODULE_1__["TaglistComponent"]
    }, {
      path: 'sourcetarget',
      component: _selectsourcetarget_selectsourcetarget_component__WEBPACK_IMPORTED_MODULE_8__["SelectsourcetargetComponent"]
    }, {
      path: 'newtag',
      component: _newtag_newtag_component__WEBPACK_IMPORTED_MODULE_2__["NewtagComponent"]
    }, {
      path: 'tagmapping',
      component: _tagmapping_tagmapping_component__WEBPACK_IMPORTED_MODULE_3__["TagmappingComponent"]
    }, {
      path: 'tagmappingview',
      component: _tagmaplist_tagmapview_tagmappingview_tagmappingview_component__WEBPACK_IMPORTED_MODULE_7__["TagmappingviewComponent"]
    }, {
      path: 'addrule',
      component: _tagmapping_addrule_addrule_component__WEBPACK_IMPORTED_MODULE_4__["AddruleComponent"]
    }, {
      path: 'tagmaplist',
      component: _tagmaplist_tagmaplist_component__WEBPACK_IMPORTED_MODULE_5__["TagmaplistComponent"]
    }, {
      path: 'tagmapview',
      component: _tagmaplist_tagmapview_tagmapview_component__WEBPACK_IMPORTED_MODULE_6__["TagmapviewComponent"]
    }];
    /***/
  },

  /***/
  "./src/app/views/tags/tags.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/views/tags/tags.module.ts ***!
    \*******************************************/

  /*! exports provided: TagsModule */

  /***/
  function srcAppViewsTagsTagsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagsModule", function () {
      return TagsModule;
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


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _taglist_taglist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./taglist/taglist.component */
    "./src/app/views/tags/taglist/taglist.component.ts");
    /* harmony import */


    var _tags_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./tags-routing.module */
    "./src/app/views/tags/tags-routing.module.ts");
    /* harmony import */


    var _newtag_newtag_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./newtag/newtag.component */
    "./src/app/views/tags/newtag/newtag.component.ts");
    /* harmony import */


    var _tagmapping_tagmapping_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./tagmapping/tagmapping.component */
    "./src/app/views/tags/tagmapping/tagmapping.component.ts");
    /* harmony import */


    var _tagmapping_addrule_addrule_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./tagmapping/addrule/addrule.component */
    "./src/app/views/tags/tagmapping/addrule/addrule.component.ts");
    /* harmony import */


    var _tagmaplist_tagmaplist_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./tagmaplist/tagmaplist.component */
    "./src/app/views/tags/tagmaplist/tagmaplist.component.ts");
    /* harmony import */


    var _tagmaplist_tagmapview_tagmapview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./tagmaplist/tagmapview/tagmapview.component */
    "./src/app/views/tags/tagmaplist/tagmapview/tagmapview.component.ts");
    /* harmony import */


    var _tagmaplist_tagmapview_tagmappingview_tagmappingview_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./tagmaplist/tagmapview/tagmappingview/tagmappingview.component */
    "./src/app/views/tags/tagmaplist/tagmapview/tagmappingview/tagmappingview.component.ts");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _selectsourcetarget_selectsourcetarget_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./selectsourcetarget/selectsourcetarget.component */
    "./src/app/views/tags/selectsourcetarget/selectsourcetarget.component.ts");

    var TagsModule = /*#__PURE__*/_createClass(function TagsModule() {
      _classCallCheck(this, TagsModule);
    });

    TagsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_taglist_taglist_component__WEBPACK_IMPORTED_MODULE_8__["TaglistComponent"], _newtag_newtag_component__WEBPACK_IMPORTED_MODULE_10__["NewtagComponent"], _tagmapping_tagmapping_component__WEBPACK_IMPORTED_MODULE_11__["TagmappingComponent"], _tagmapping_addrule_addrule_component__WEBPACK_IMPORTED_MODULE_12__["AddruleComponent"], _tagmaplist_tagmaplist_component__WEBPACK_IMPORTED_MODULE_13__["TagmaplistComponent"], _tagmaplist_tagmapview_tagmapview_component__WEBPACK_IMPORTED_MODULE_14__["TagmapviewComponent"], _tagmaplist_tagmapview_tagmappingview_tagmappingview_component__WEBPACK_IMPORTED_MODULE_15__["TagmappingviewComponent"], _selectsourcetarget_selectsourcetarget_component__WEBPACK_IMPORTED_MODULE_17__["SelectsourcetargetComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_tags_routing_module__WEBPACK_IMPORTED_MODULE_9__["tags"]), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__["MatDividerModule"], src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]]
    })], TagsModule);
    /***/
  },

  /***/
  "./src/app/views/tags/tags.service.ts":
  /*!********************************************!*\
    !*** ./src/app/views/tags/tags.service.ts ***!
    \********************************************/

  /*! exports provided: TagsService */

  /***/
  function srcAppViewsTagsTagsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagsService", function () {
      return TagsService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment.prod */
    "./src/environments/environment.prod.ts");

    var TagsService = /*#__PURE__*/function () {
      function TagsService(http) {
        _classCallCheck(this, TagsService);

        this.http = http; // private Url = 'http://localhost:9800/tags';

        this.newUrl = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_5__["environment"].MEDIAN_URL;
      }

      _createClass(TagsService, [{
        key: "handleError",
        value: function handleError(error) {
          if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error));
          } // return an observable with a user-facing error message


          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
        }
      }, {
        key: "getTagList",
        value: function getTagList() {
          console.log("Reached service page");
          return this.http.get("".concat(this.newUrl) + "/tags/fetchalltags").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        } // saveNewExternalSystem(formData : FormData): Observable<any> {  
        //     console.log("Reached service.ts page");
        //     console.log("formData is :" + formData);
        //     return this.http.post(this.Url + '/save/',  formData);  
        // }

      }, {
        key: "extractXml",
        value: function extractXml() {
          return this.http.get("".concat(this.newUrl) + "/tags/extractMessage").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }]);

      return TagsService;
    }();

    TagsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    TagsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], TagsService);
    /***/
  },

  /***/
  "./src/app/views/tags/tags.ts":
  /*!************************************!*\
    !*** ./src/app/views/tags/tags.ts ***!
    \************************************/

  /*! exports provided: Tags */

  /***/
  function srcAppViewsTagsTagsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tags", function () {
      return Tags;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Tags = /*#__PURE__*/_createClass(function Tags() {
      _classCallCheck(this, Tags);
    });
    /***/

  }
}]);
//# sourceMappingURL=views-tags-tags-module-es5.js.map